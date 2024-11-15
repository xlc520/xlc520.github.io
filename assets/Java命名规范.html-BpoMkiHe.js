import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,a as e}from"./app-DWXdHMII.js";const l={};function p(d,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="java-命名规范" tabindex="-1"><a class="header-anchor" href="#java-命名规范"><span>Java 命名规范</span></a></h1><p>在本文中，将从大到小，从外到内，总结 Java 编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类( 接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。</p><p>本文是 Java 命名规范的介绍，建议收藏转发。更多文章可以关注公众号「Java 后端」自行搜索。</p><h2 id="_1-包命名规范" tabindex="-1"><a class="header-anchor" href="#_1-包命名规范"><span><strong>1. 包命名规范</strong></span></a></h2><p>包(Package) 的作用是将功能相似或相关的类或者接口进行分组管理，便于类的定位和查找，同时也可以使用包来避免类名的冲突和访问控制，使代码更容易维护。通常，包命使用小写英文字母进行命名，并使用“.”进行分割，每个被分割的单元只能包含一个名词。</p><p>一般地，包命名常采用顶级域名作为前缀，例如 com，net，org，edu，gov，cn，io 等，随后紧跟公司/组织/个人名称以及功能模块名称。下面是一些包命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package org.springframework.boot.autoconfigure.cloud</span></span>
<span class="line"><span>package org.springframework.boot.util</span></span>
<span class="line"><span>package org.hibernate.action</span></span>
<span class="line"><span>package org.hibernate.cfg</span></span>
<span class="line"><span>package com.alibaba.druid</span></span>
<span class="line"><span>package com.alibaba.druid.filter</span></span>
<span class="line"><span>package com.alibaba.nacos.client.config</span></span>
<span class="line"><span>package com.ramostear.blog.web</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 Oracle Java 的一些常见包命名例子：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package java.beans</span></span>
<span class="line"><span>package java.io</span></span>
<span class="line"><span>package java.lang</span></span>
<span class="line"><span>package java.net</span></span>
<span class="line"><span>package java.util</span></span>
<span class="line"><span>package javax.annotation</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-类命名规范" tabindex="-1"><a class="header-anchor" href="#_2-类命名规范"><span><strong>2. 类命名规范</strong></span></a></h2><p>类(Class)通常采用名词进行命名，且首字母大写，如果一个类名包含两个以上名词，建议使用驼峰命名(Camel-Case) 法书写类名,每个名词首字母也应该大写。一般地，类名的书写尽量使其保持简单和描述的完整性，因此在书写类名时不建议使用缩写( 一些约定俗成的命名除外。</p><p>例如 Internationalization and Localization 缩写成 i18n，Uniform Resource Identifier 缩写成 URI，Data Access Object 缩写成 DAO，JSON Web Token 缩写成 JWT，HyperText Markup Language 缩写成 HTML 等等)。下列是一些常见的类命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class UserDTO{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class EmployeeService{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class StudentDAO{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class OrderItemEntity{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class UserServiceImpl{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class OrderItemController{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 Oracle Java 中的一些标准命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class HTMLEditorKit{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class HttpContext{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface ImageObserver{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class ArrayIndexOutOfBoundsException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class enum Thread.State{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-接口命名规范" tabindex="-1"><a class="header-anchor" href="#_2-1-接口命名规范"><span><strong>2.1 接口命名规范</strong></span></a></h3><p>首先，接口(Interface)是一种表述某一类型对象动作的特殊类；简单来说，接口也是类(不太严谨) ，所以，接口的名称的书写也应该符合类名书写规范，首字母应该大写，与普通类名不同的是，接口命名时通常采用形容词或动词来描述接口的动作行为。下列是 Oracle Java 中一些标准库的接口使用形容词命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface Closeable{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface Cloneable{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface Runnable{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface Comparable&lt;T&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface CompletionService&lt;V&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface Iterable&lt;T&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface EventListener{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Spring Framework 标准库中，通常采用名词+动词/形容词的组合方式来命名接口，下列是 Spring Framework 中一些接口命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface AfterAdvice{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface TargetClassAware{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface ApplicationContextAware{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface MessageSourceResolvable{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.2 抽象类命名规范</strong></p><p>抽象类(Abstract Class) 是一种特殊的类，其命名与普通类的命名规范相当。一般地，为了将抽象类与普通类和接口做出区别，提高抽象类的可读性，在命名抽象类时，会以“Abstract”/“Base”作为类命的前缀。下面是编程中一些常规的命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public abstract class AbstractRepository&lt;T&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractController{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class BaseDao&lt;T,ID&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractCommonService&lt;T&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 Spring Framework 中常见的抽象类示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public abstract class AbstractAspectJAdvice{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractSingletonProxyFactoryBean{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractBeanFactoryPointcutAdvisor{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractCachingConfiguration{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public abstract class AbstractContextLoaderInitializer{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.3 异常类命名规范</strong></p><p>异常类(Exception Class)也是类的一种，但与普通类命名不同的是，异常类在命名时需要使用“Exception”作为其后缀。下面是常见的异常类命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class FileNotFoundException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class UserAlreadyExistException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class TransactionException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class ClassNotFoundException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class IllegalArgumentException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class IndexOutOfBoundsException{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，在 Java 中还有另外一类异常类，它们属于系统异常，这一类异常类的命名使用“Error”作为其后缀，以区分 Exception( 编码，环境，操作等异常)。下面是系统异常(非检查异常)的命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public abstract class VirtualMachineError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class StackOverflowError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class OutOfMemoryError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class IllegalAccessError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class NoClassDefFoundError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class NoSuchFieldError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class NoSuchMethodError{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.方法命名规范</strong></p><p>方法(Method)命名时,其首字母应该小写，如果方法签名由多个单词组成，则从第二个单词起，使用驼峰命名法进行书写。一般地，在对方法进行命名时，通常采用动词/动词+名词的组合，下面是方法命名的一些常见示例。</p><h3 id="_3-1-表述获取" tabindex="-1"><a class="header-anchor" href="#_3-1-表述获取"><span><strong>3.1 表述获取</strong></span></a></h3><p>如果一个方法用于获取某个值，通常使用“get”作为其前缀，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public String getUserName(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public List&lt;Integer&gt; getUserIds(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public User getOne(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.2 表述查询</strong></p><p>如果方法需要通过查询或筛选的方式获取某个数据，通常使用“find”/“query”作为其前缀，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public List&lt;User&gt; findOne(Integer id){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public List&lt;Integer&gt; findAll(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public List&lt;String&gt; queryOrders(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-表述条件" tabindex="-1"><a class="header-anchor" href="#_3-3-表述条件"><span><strong>3.3 表述条件</strong></span></a></h3><p>如果一个方法需要一些条件参数，则可以使用“by”/“with”等字符作为方法名中条件的连接符，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public User findByUsername(String username){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public List&lt;Integer&gt; getUserIdsWithState(boolean state){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public List&lt;User&gt; findAllByUsernameOrderByIdDesc(String username){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.4 表述设置</strong></p><p>如果一个方法是要设置，插入，修改，删除等操作，应该将对应的动词(set,insert,update,delete)作为其名词的前缀，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public void setName(String name){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public User insert(User user){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public void update(User user){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public void clearAll(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.5 其他规范</strong></p><p>如果一个方法用于获取某组数据的长度或数量，则该方法应该使用 length 或 size 命名；如果方法的返回值为布尔类型(Boolean) ，则该方法应该使用“is”或”has”作为前缀；</p><p>如果方法用于将一种类型的数据转换为另一种数据数类型，则可以使用“to”作为前缀。下面是综合示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public long length(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public int size(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public boolean isOpen(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public boolean isNotEmpty(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public boolean hasLength(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public Set&lt;Integer&gt; mapToSet(Map map){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public UserDto convertTo(User user){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public String toString(Object obj){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 变量命名规范</strong></p><p>变量(Variable) 命名包括参数名称，成员变量和局部变量。变量命名通常以小写字母开头，如果变量名由多个单词构成，则从第二个单词起首字母需要大写，在变量命名过程中，不建议使用“_ ”作为前缀或者单词之间的分割符号。下面是一些常见的变量命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private String nickName;</span></span>
<span class="line"><span>private String mobileNumber;</span></span>
<span class="line"><span>private Long id;</span></span>
<span class="line"><span>private String username;</span></span>
<span class="line"><span>private Long orderId;</span></span>
<span class="line"><span>private Long orderItemId;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\5. 常量命名规范</p><p>一般地，常量名称采用全部大写的英文单词书写，如果常量名称由多个单词组成，则单词之间统一使用“_”进行分割，下面是常量命名示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public static final String LOGIN_USER_SESSION_KEY = &quot;current_login_user&quot;;</span></span>
<span class="line"><span>public static final int MAX_AGE_VALUE = 120;</span></span>
<span class="line"><span>public static final int DEFAULT_PAGE_NO = 1;</span></span>
<span class="line"><span>public static final long MAX_PAGE_SIZE = 1000;</span></span>
<span class="line"><span>public static final boolean HAS_LICENSE = false;</span></span>
<span class="line"><span>public static final boolean IS_CHECKED = false;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-枚举命名规范" tabindex="-1"><a class="header-anchor" href="#_6-枚举命名规范"><span><strong>6. 枚举命名规范</strong></span></a></h2><p>枚举(Enum)类是一种特殊的类，其命名规范遵循普通类的命名约束条件，首字母大写，采用驼峰命名法；枚举类中定义的值的名称遵循常量的命名规范，且枚举值的名称需要与类名有一定的关联性，下面是枚举的一些示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public enum Color{</span></span>
<span class="line"><span>    RED,YELLOW,BLUE,GREEN,WHITE;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public enum PhysicalSize{</span></span>
<span class="line"><span>    TINY,SMALL,MEDIUM,LARGE,HUGE,GIGANTIC;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 Oracle Java 标准库中的一个示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public enum ElementType{</span></span>
<span class="line"><span>    TYPE,</span></span>
<span class="line"><span>    FIELD,</span></span>
<span class="line"><span>    METHOD,</span></span>
<span class="line"><span>    PARAMETER,</span></span>
<span class="line"><span>    CONSTRUCTOR,</span></span>
<span class="line"><span>    LOCAL_VARIABLE,</span></span>
<span class="line"><span>    ANNOTATION_TYPE,</span></span>
<span class="line"><span>    PACKAGE,</span></span>
<span class="line"><span>    TYPE_PARAMETER,</span></span>
<span class="line"><span>    TYPE_USE;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-其他命名规范" tabindex="-1"><a class="header-anchor" href="#_7-其他命名规范"><span><strong>7. 其他命名规范</strong></span></a></h2><h3 id="_7-1-数组" tabindex="-1"><a class="header-anchor" href="#_7-1-数组"><span><strong>7.1 数组</strong></span></a></h3><p>在定义数组时，为了便于阅读，尽量保持以下的书写规范：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int[] array = new int[10];</span></span>
<span class="line"><span>int[] idArray ={1,2,3,4,5};</span></span>
<span class="line"><span>String[] nameArray = {&quot;First&quot;,&quot;Yellow&quot;,&quot;Big&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getNameById(Integer[] ids){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;String&gt; getNameById(Integer...ids){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-表述复数或者集合" tabindex="-1"><a class="header-anchor" href="#_7-2-表述复数或者集合"><span><strong>7.2 表述复数或者集合</strong></span></a></h3><p>如果一个变量用于描述多个数据时，尽量使用单词的复数形式进行书写，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Collection&lt;Order&gt; orders;</span></span>
<span class="line"><span>int[] values;</span></span>
<span class="line"><span>List&lt;Item&gt; items;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果表述的是一个 Map 数据，则应使用“map”作为其后缀，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Map&lt;String,User&gt; userMap;</span></span>
<span class="line"><span>Map&lt;String,List&lt;Object&gt;&gt; listMap;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-泛型类" tabindex="-1"><a class="header-anchor" href="#_7-3-泛型类"><span><strong>7.3 泛型类</strong></span></a></h3><p>在书写泛型类时，通常做以下的约定：</p><ul><li>E 表示 Element，通常用在集合中；</li><li>ID 用于表示对象的唯一标识符类型</li><li>T 表示 Type(类型)，通常指代类；</li><li>K 表示 Key(键),通常用于 Map 中；</li><li>V 表示 Value(值),通常用于 Map 中，与 K 结对出现；</li><li>N 表示 Number,通常用于表示数值类型；</li><li>？表示不确定的 Java 类型；</li><li>X 用于表示异常；</li><li>U,S 表示任意的类型。</li></ul><p>下面时泛型类的书写示例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class HashSet&lt;E&gt; extends AbstractSet&lt;E&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class HashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class ThreadLocal&lt;T&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public interface Functor&lt;T,X extends Throwable&gt;{</span></span>
<span class="line"><span>    T val() throws X;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class Container&lt;K,V&gt;{</span></span>
<span class="line"><span>    private K key;</span></span>
<span class="line"><span>    private V value;</span></span>
<span class="line"><span>    Container(K key,V value){</span></span>
<span class="line"><span>        this.key = key;</span></span>
<span class="line"><span>        this.value = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface BaseRepository&lt;T,ID&gt;{</span></span>
<span class="line"><span>    T findById(ID id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void update(T t);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;T&gt; findByIds(ID...ids);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static &lt;T&gt; List&lt;T&gt; methodName(Class&lt;T&gt; clz){</span></span>
<span class="line"><span>    List&lt;T&gt; dataList = getByClz(clz);</span></span>
<span class="line"><span>    return dataList;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.4 接口实现类</strong></p><p>为了便于阅读，在通常情况下，建议接口实现类使用“Impl 作为后缀”，不建议使用大写的“I”作为接口前缀，下面是接口和接口实现类的书写示例。</p><p>推荐写法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface OrderService{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class OrderServiceImpl implements OrderService{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不建议的写法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public interface IOrderService{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class OrderService implements IOrderService{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-测试类和测试方法" tabindex="-1"><a class="header-anchor" href="#_7-5-测试类和测试方法"><span><strong>7.5 测试类和测试方法</strong></span></a></h3><p>在项目中，测试类采用被测试业务模块名/被测试接口/被测试类+“Test”的方法进行书写，测试类中的测试函数采用“test”+用例操作_状态的组合方式进行书写，例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class UserServiceTest{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void testFindByUsernameAndPassword(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void testUsernameExist_notExist(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void testDeleteById_isOk(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8 扩展：速记 Java 开发中的各种 O</strong></p><p>最后，通过一张表和图快速对 Java 中的<code>BO</code>,<code>DTO</code>,<code>DAO</code>,<code>PO</code>,<code>POJO</code>,<code>VO</code>之间的含义，区别以及联系进行梳理。</p><table><thead><tr><th>名称</th><th>使用范围</th><th>解释说明</th></tr></thead><tbody><tr><td>BO</td><td>用于 Service,Manager,Business 等业务相关类的命名</td><td>Business Object 业务处理对象，主要作用是把业务逻辑封装成一个对象。</td></tr><tr><td>DTO</td><td>经过加工后的 PO 对象，其内部属性可能增加或减少</td><td>Data Transfer Object 数据传输对象，主要用于远程调用等需要大量传输数据的地方，例如，可以将一个或多个 PO 类的部分或全部属性封装为 DTO 进行传输</td></tr><tr><td>DAO</td><td>用于对数据库进行读写操作的类进行命名</td><td>Data Access Object 数据访问对象，主要用来封装对数据库的访问，通过 DAO 可以将 POJO 持久化为 PO，也可以利用 PO 封装出 VO 和 DTO</td></tr><tr><td>PO</td><td>Bean,Entity 等类的命名</td><td>Persistant Object 持久化对象，数据库表中的数据在 Java 对象中的映射状态，可以简单的理解为一个 PO 对象即为数据库表中的一条记录</td></tr><tr><td>POJO</td><td>POJO 是 DO/DTO/BO/VO 的统称</td><td>Plain Ordinary Java Object 简单 Java 对象，它是一个简单的普通 Java 对象，禁止将类命名为 XxxxPOJO</td></tr><tr><td>VO</td><td>通常是视图控制层和模板引擎之间传递的数据对象</td><td>Value Object 值对象，主要用于视图层，视图控制器将视图层所需的属性封装成一个对象，然后用一个 VO 对象在视图控制器和视图之间进行数据传输。</td></tr><tr><td>AO</td><td>应用层对象</td><td>Application Object，在 Web 层与 Service 层之间抽象的复用对象模型，很少用。</td></tr></tbody></table><p>下面将通过一张图来理解上述几种 O 之间相互转换的关系：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220526110603169.png" alt="image-20220526110603169" tabindex="0" loading="lazy"><figcaption>image-20220526110603169</figcaption></figure>`,87)]))}const t=n(l,[["render",p],["__file","Java命名规范.html.vue"]]),v=JSON.parse('{"path":"/dev/Java%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.html","title":"Java 命名规范","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Java 命名规范","excerpt":null,"description":"Java 命名规范 在本文中，将从大到小，从外到内，总结 Java 编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类( 接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。 本文是 Java 命名规范的介绍，...","date":"2022-05-28T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Java 命名规范"}],["meta",{"property":"og:description","content":"Java 命名规范 在本文中，将从大到小，从外到内，总结 Java 编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类( 接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。 本文是 Java 命名规范的介绍，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220526110603169.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 命名规范\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220526110603169.png\\"],\\"datePublished\\":\\"2022-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1. 包命名规范","slug":"_1-包命名规范","link":"#_1-包命名规范","children":[]},{"level":2,"title":"2. 类命名规范","slug":"_2-类命名规范","link":"#_2-类命名规范","children":[{"level":3,"title":"2.1 接口命名规范","slug":"_2-1-接口命名规范","link":"#_2-1-接口命名规范","children":[]},{"level":3,"title":"3.1 表述获取","slug":"_3-1-表述获取","link":"#_3-1-表述获取","children":[]},{"level":3,"title":"3.3 表述条件","slug":"_3-3-表述条件","link":"#_3-3-表述条件","children":[]}]},{"level":2,"title":"6. 枚举命名规范","slug":"_6-枚举命名规范","link":"#_6-枚举命名规范","children":[]},{"level":2,"title":"7. 其他命名规范","slug":"_7-其他命名规范","link":"#_7-其他命名规范","children":[{"level":3,"title":"7.1 数组","slug":"_7-1-数组","link":"#_7-1-数组","children":[]},{"level":3,"title":"7.2 表述复数或者集合","slug":"_7-2-表述复数或者集合","link":"#_7-2-表述复数或者集合","children":[]},{"level":3,"title":"7.3 泛型类","slug":"_7-3-泛型类","link":"#_7-3-泛型类","children":[]},{"level":3,"title":"7.5 测试类和测试方法","slug":"_7-5-测试类和测试方法","link":"#_7-5-测试类和测试方法","children":[]}]}],"git":{"createdTime":1653536603000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":9.99,"words":2996},"filePathRelative":"dev/Java命名规范.md","localizedDate":"2022年5月28日","excerpt":"\\n<p>在本文中，将从大到小，从外到内，总结 Java\\n编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类(\\n接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。</p>","autoDesc":true}');export{t as comp,v as data};
