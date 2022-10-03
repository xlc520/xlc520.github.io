import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,d as s}from"./app.ffebafef.js";const t={},l=s(`<h1 id="jsp\u548Cjstl\u83B7\u53D6\u670D\u52A1\u5668\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#jsp\u548Cjstl\u83B7\u53D6\u670D\u52A1\u5668\u53C2\u6570" aria-hidden="true">#</a> JSP\u548CJSTL\u83B7\u53D6\u670D\u52A1\u5668\u53C2\u6570</h1><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page language=&quot;java&quot; import=&quot;java.util.*&quot; pageEncoding=&quot;UTF-8&quot;%&gt;

&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JSP\u548CJSTL\u83B7\u53D6\u670D\u52A1\u5668\u53C2\u6570&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
JSP\u65B9\u5F0F&lt;br/&gt;
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
\u3000\u3000&lt;%=o%&gt;
\u3000\u3000&lt;%=infoMap.get(o)%&gt;
\u3000\u3000&lt;% out.println(&quot;&lt;br&gt;&quot;); }%&gt;
&lt;br/&gt;

JSTL\u65B9\u5F0F&lt;br/&gt;
\${pageContext.request} |\u53D6\u5F97\u8BF7\u6C42\u5BF9\u8C61&lt;br&gt;
\${pageContext.session} |\u53D6\u5F97session\u5BF9\u8C61&lt;br&gt;
\${pageContext.request.queryString} |\u53D6\u5F97\u8BF7\u6C42\u7684\u53C2\u6570\u5B57\u7B26\u4E32&lt;br&gt;
\${pageContext.request.requestURL} |\u53D6\u5F97\u8BF7\u6C42\u7684URL\uFF0C\u4F46\u4E0D\u5305\u62EC\u8BF7\u6C42\u4E4B\u53C2\u6570\u5B57\u7B26\u4E32&lt;br&gt;
\${pageContext.request.contextPath} |\u670D\u52A1\u7684web application\u7684\u540D\u79F0&lt;br&gt;
\${pageContext.request.method} |\u53D6\u5F97HTTP\u7684\u65B9\u6CD5(GET\u3001POST)&lt;br&gt;
\${pageContext.request.protocol} |\u53D6\u5F97\u4F7F\u7528\u7684\u534F\u8BAE(HTTP/1.1\u3001HTTP/1.0)&lt;br&gt;
\${pageContext.request.remoteUser} |\u53D6\u5F97\u7528\u6237\u540D\u79F0&lt;br&gt;
\${pageContext.session.new} |\u5224\u65ADsession\u662F\u5426\u4E3A\u65B0\u7684\uFF0C\u6240\u8C13\u65B0\u7684session\uFF0C\u8868\u793A\u521A\u7531server\u4EA7\u751F\u800Cclient\u5C1A\u672A\u4F7F\u7528&lt;br&gt;
\${pageContext.session.id} |\u53D6\u5F97session\u7684ID&lt;br&gt;

\${header[&quot;User-Agent&quot;]}|\u7528\u6237\u6D4F\u89C8\u5668\u7684\u7248\u672C&lt;br/&gt;
\${header[&quot;Host&quot;]}|IP&lt;br/&gt;
\${pageContext.request.remoteAddr } |\u53D6\u5F97\u7528\u6237\u7684IP\u5730\u5740&lt;br&gt;
\${pageContext.servletContext.serverInfo}|\u53D6\u5F97\u4E3B\u673A\u7AEF\u7684\u670D\u52A1\u4FE1\u606F&lt;br&gt;
\${pageContext.request.serverPort}|\u7AEF\u53E3\u4FE1\u606F&lt;br&gt;
\${pageContext.request.serverName}|\u670D\u52A1\u5668\u540D\u79F0&lt;br&gt;
\${pageContext.request.remoteHost}|\u5BA2\u6237\u673A\u540D\u79F0&lt;br&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function r(v,u){return n(),i("div",null,d)}const c=e(t,[["render",r],["__file","JSP\u548CJSTL\u83B7\u53D6\u670D\u52A1\u5668\u53C2\u6570.html.vue"]]);export{c as default};
