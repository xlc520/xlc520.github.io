---
author: xlc520
title: Spring实现请求URL和参数名称的不区分大小写
description: 
date: 2023-04-20
category: Java
tag: 
- Java
- Spring
article: true
timeline: true
icon: java
---



# Spring实现请求URL和参数名称的不区分大小写

## URL不区分大小写

spring mvc对于请求URL默认是区分大小写的。

如定义一个controller，其请求path为/welcome。



```java
@Controller
public class HomeController {

@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String printWelcome(@RequestParam String who,ModelMap model) {
		model.addAttribute("message", "welcome "+who);
		return "hello";
	}
}
```

本地访问该路径，如：

1. http://localhost:8080/welcome
2. http://localhost:8080/Welcome

则，第一个URL可以成功访问，而访问第二个URL则返回404错误。

分析：

URL请求到达DispatcherServlet时，会使用RequestMappingHandlerMapping查找URL匹配的HandlerMethod。其中，会用到RequestMappingHandlerMapping的基类AbstractHandlerMappingPathMatcher的PathMatcher属性进行URL映射处理。RequestMappingHandlerMapping类默认使用AntPathMatcher作为PathMatcher，通过设置AntPathMatcher的CaseSensitive属性为false，来指定PathMatcher对URL的大小字母不敏感。

解决：

code-based configuration



```java
import org.springframework.context.annotation.Configuration;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
/**
 * WebConfig url忽略大小写
 */
@Configuration
public class SpringWebConfig extends WebMvcConfigurationSupport {
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        AntPathMatcher matcher = new AntPathMatcher();
        matcher.setCaseSensitive(false);
        configurer.setPathMatcher(matcher);
    }
}
```

## 参数名称不区分大小写

通过filter机制，创建HttpServletRequest的子类，重写获取请求参数的方法，使参数值的获取不区分参数名称大小写。最后，配置Filter。



```java
import java.io.IOException;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import org.springframework.util.LinkedCaseInsensitiveMap;
import org.springframework.web.filter.OncePerRequestFilter;

public class CaseInsensitiveRequestParameterNameFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		filterChain.doFilter(new CaseInsensitiveParameterNameHttpServletRequest(request), response);
	}

	public static class CaseInsensitiveParameterNameHttpServletRequest extends HttpServletRequestWrapper {
		private final LinkedCaseInsensitiveMap<String[]> map = new LinkedCaseInsensitiveMap<>();

		@SuppressWarnings("unchecked")
		public CaseInsensitiveParameterNameHttpServletRequest(HttpServletRequest request) {
			super(request);
			map.putAll(request.getParameterMap());
		}

		@Override
		public String getParameter(String name) {

			String[] array = this.map.get(name);
			if (array != null && array.length > 0)
				return array[0];
			return null;
		}

		@Override
		public Map<String, String[]> getParameterMap() {
			return Collections.unmodifiableMap(this.map);
		}

		@Override
		public Enumeration<String> getParameterNames() {
			return Collections.enumeration(this.map.keySet());
		}

		@Override
		public String[] getParameterValues(String name) {
			return this.map.get(name);
		}
	}
}
```

代码配置Filter



```java
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import com.company.project.web.filter.CaseInsensitiveRequestParameterNameFilter;

public class SpringWebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class<?>[] { SpringRootConfig.class };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[] { SpringWebConfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		super.onStartup(servletContext);
		Dynamic filter = servletContext.addFilter(CaseInsensitiveRequestParameterNameFilter.class.getSimpleName(),
				CaseInsensitiveRequestParameterNameFilter.class);
		filter.addMappingForUrlPatterns(null, true, "/*");
	}
}
```

启动程序，访问http://localhost:8080/WELCOME?wHo=me试试吧