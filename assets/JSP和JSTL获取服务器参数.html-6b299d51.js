import{_ as e,W as n,X as i,Y as s}from"./framework-3ab8bde0.js";const t={},l=s(`<h1 id="jsp和jstl获取服务器参数" tabindex="-1"><a class="header-anchor" href="#jsp和jstl获取服务器参数" aria-hidden="true">#</a> JSP和JSTL获取服务器参数</h1><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page language=&quot;java&quot; import=&quot;java.util.*&quot; pageEncoding=&quot;UTF-8&quot;%&gt;

&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JSP和JSTL获取服务器参数&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
JSP方式&lt;br/&gt;
&lt;%

String SERVER_NAME = request.getServerName();

String SERVER_SOFTWARE = getServletContext().getServerInfo();

String SERVER_PROTOCOL = request.getProtocol();

Integer SERVER_PORT = request.getServerPort();

String REQUEST_METHOD = request.getMethod();

String PATH_INFO = request.getPathInfo();

String PATH_TRANSLATED = request.getPathTranslated();

String SCRIPT_NAME = request.getServletPath();

String DOCUMENT_ROOT = request.getRealPath(&quot;/&quot;);

String QUERY_STRING = request.getQueryString();

String REMOTE_HOST = request.getRemoteHost();

String REMOTE_ADDR = request.getRemoteAddr();

String AUTH_TYPE = request.getAuthType();

String REMOTE_USER = request.getRemoteUser();

String CONTENT_TYPE = request.getContentType();

Integer CONTENT_LENGTH = request.getContentLength();

String HTTP_ACCEPT = request.getHeader(&quot;Accept&quot;);

String HTTP_USER_AGENT = request.getHeader(&quot;User-Agent&quot;);

String HTTP_REFERER = request.getHeader(&quot;Referer&quot;);

HashMap infoMap = new HashMap();

infoMap.put(&quot;SERVER_NAME&quot;, SERVER_NAME);

infoMap.put(&quot;SERVER_SOFTWARE&quot;, SERVER_SOFTWARE);

infoMap.put(&quot;SERVER_PROTOCOL&quot;, SERVER_PROTOCOL);

infoMap.put(&quot;SERVER_PORT&quot;, SERVER_PORT);
infoMap.put(&quot;REQUEST_METHOD&quot;, REQUEST_METHOD);

infoMap.put(&quot;PATH_INFO&quot;, PATH_INFO);

infoMap.put(&quot;PATH_TRANSLATED&quot;, PATH_TRANSLATED);

infoMap.put(&quot;SCRIPT_NAME&quot;, SCRIPT_NAME);

infoMap.put(&quot;DOCUMENT_ROOT&quot;, DOCUMENT_ROOT);

infoMap.put(&quot;QUERY_STRING&quot;, QUERY_STRING);

infoMap.put(&quot;REMOTE_HOST&quot;, REMOTE_HOST);

infoMap.put(&quot;REMOTE_ADDR&quot;, REMOTE_ADDR);

infoMap.put(&quot;AUTH_TYPE&quot;, AUTH_TYPE);

infoMap.put(&quot;REMOTE_USER&quot;, REMOTE_USER);

infoMap.put(&quot;CONTENT_TYPE&quot;, CONTENT_TYPE);

infoMap.put(&quot;CONTENT_LENGTH&quot;, CONTENT_LENGTH);

infoMap.put(&quot;HTTP_ACCEPT&quot;, HTTP_ACCEPT);

infoMap.put(&quot;HTTP_USER_AGENT&quot;, HTTP_USER_AGENT);

infoMap.put(&quot;HTTP_REFERER&quot;, HTTP_REFERER);

Iterator it = infoMap.keySet().iterator();

%&gt;

&lt;%
while (it.hasNext()) {
Object o = it.next();
%&gt;
　　&lt;%=o%&gt;
　　&lt;%=infoMap.get(o)%&gt;
　　&lt;% out.println(&quot;&lt;br&gt;&quot;); }%&gt;
&lt;br/&gt;

JSTL方式&lt;br/&gt;
\${pageContext.request} |取得请求对象&lt;br&gt;
\${pageContext.session} |取得session对象&lt;br&gt;
\${pageContext.request.queryString} |取得请求的参数字符串&lt;br&gt;
\${pageContext.request.requestURL} |取得请求的URL，但不包括请求之参数字符串&lt;br&gt;
\${pageContext.request.contextPath} |服务的web application的名称&lt;br&gt;
\${pageContext.request.method} |取得HTTP的方法(GET、POST)&lt;br&gt;
\${pageContext.request.protocol} |取得使用的协议(HTTP/1.1、HTTP/1.0)&lt;br&gt;
\${pageContext.request.remoteUser} |取得用户名称&lt;br&gt;
\${pageContext.session.new} |判断session是否为新的，所谓新的session，表示刚由server产生而client尚未使用&lt;br&gt;
\${pageContext.session.id} |取得session的ID&lt;br&gt;

\${header[&quot;User-Agent&quot;]}|用户浏览器的版本&lt;br/&gt;
\${header[&quot;Host&quot;]}|IP&lt;br/&gt;
\${pageContext.request.remoteAddr } |取得用户的IP地址&lt;br&gt;
\${pageContext.servletContext.serverInfo}|取得主机端的服务信息&lt;br&gt;
\${pageContext.request.serverPort}|端口信息&lt;br&gt;
\${pageContext.request.serverName}|服务器名称&lt;br&gt;
\${pageContext.request.remoteHost}|客户机名称&lt;br&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function r(v,u){return n(),i("div",null,d)}const o=e(t,[["render",r],["__file","JSP和JSTL获取服务器参数.html.vue"]]);export{o as default};
