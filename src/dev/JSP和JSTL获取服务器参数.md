---
author: xlc520
title: JSP和JSTL获取服务器参数
excerpt: 
description:  JSP和JSTL获取服务器参数
date: 2022-06-22
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# JSP 和 JSTL 获取服务器参数

```jsp
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>JSP和JSTL获取服务器参数</title>
</head>
<body>
JSP方式<br/>
<%

String SERVER_NAME = request.getServerName();

String SERVER_SOFTWARE = getServletContext().getServerInfo();

String SERVER_PROTOCOL = request.getProtocol();

Integer SERVER_PORT = request.getServerPort();

String REQUEST_METHOD = request.getMethod();

String PATH_INFO = request.getPathInfo();

String PATH_TRANSLATED = request.getPathTranslated();

String SCRIPT_NAME = request.getServletPath();

String DOCUMENT_ROOT = request.getRealPath("/");

String QUERY_STRING = request.getQueryString();

String REMOTE_HOST = request.getRemoteHost();

String REMOTE_ADDR = request.getRemoteAddr();

String AUTH_TYPE = request.getAuthType();

String REMOTE_USER = request.getRemoteUser();

String CONTENT_TYPE = request.getContentType();

Integer CONTENT_LENGTH = request.getContentLength();

String HTTP_ACCEPT = request.getHeader("Accept");

String HTTP_USER_AGENT = request.getHeader("User-Agent");

String HTTP_REFERER = request.getHeader("Referer");

HashMap infoMap = new HashMap();

infoMap.put("SERVER_NAME", SERVER_NAME);

infoMap.put("SERVER_SOFTWARE", SERVER_SOFTWARE);

infoMap.put("SERVER_PROTOCOL", SERVER_PROTOCOL);

infoMap.put("SERVER_PORT", SERVER_PORT);
infoMap.put("REQUEST_METHOD", REQUEST_METHOD);

infoMap.put("PATH_INFO", PATH_INFO);

infoMap.put("PATH_TRANSLATED", PATH_TRANSLATED);

infoMap.put("SCRIPT_NAME", SCRIPT_NAME);

infoMap.put("DOCUMENT_ROOT", DOCUMENT_ROOT);

infoMap.put("QUERY_STRING", QUERY_STRING);

infoMap.put("REMOTE_HOST", REMOTE_HOST);

infoMap.put("REMOTE_ADDR", REMOTE_ADDR);

infoMap.put("AUTH_TYPE", AUTH_TYPE);

infoMap.put("REMOTE_USER", REMOTE_USER);

infoMap.put("CONTENT_TYPE", CONTENT_TYPE);

infoMap.put("CONTENT_LENGTH", CONTENT_LENGTH);

infoMap.put("HTTP_ACCEPT", HTTP_ACCEPT);

infoMap.put("HTTP_USER_AGENT", HTTP_USER_AGENT);

infoMap.put("HTTP_REFERER", HTTP_REFERER);

Iterator it = infoMap.keySet().iterator();

%>

<%
while (it.hasNext()) {
Object o = it.next();
%>
　　<%=o%>
　　<%=infoMap.get(o)%>
　　<% out.println("<br>"); }%>
<br/>

JSTL方式<br/>
${pageContext.request} |取得请求对象<br>
${pageContext.session} |取得session对象<br>
${pageContext.request.queryString} |取得请求的参数字符串<br>
${pageContext.request.requestURL} |取得请求的URL，但不包括请求之参数字符串<br>
${pageContext.request.contextPath} |服务的web application的名称<br>
${pageContext.request.method} |取得HTTP的方法(GET、POST)<br>
${pageContext.request.protocol} |取得使用的协议(HTTP/1.1、HTTP/1.0)<br>
${pageContext.request.remoteUser} |取得用户名称<br>
${pageContext.session.new} |判断session是否为新的，所谓新的session，表示刚由server产生而client尚未使用<br>
${pageContext.session.id} |取得session的ID<br>

${header["User-Agent"]}|用户浏览器的版本<br/>
${header["Host"]}|IP<br/>
${pageContext.request.remoteAddr } |取得用户的IP地址<br>
${pageContext.servletContext.serverInfo}|取得主机端的服务信息<br>
${pageContext.request.serverPort}|端口信息<br>
${pageContext.request.serverName}|服务器名称<br>
${pageContext.request.remoteHost}|客户机名称<br>
</body>
</html>
```
