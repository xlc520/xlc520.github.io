import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as s}from"./app-21243f18.js";const l={},d=s(`<h1 id="java-命名规范" tabindex="-1"><a class="header-anchor" href="#java-命名规范" aria-hidden="true">#</a> Java 命名规范</h1><p>在本文中，将从大到小，从外到内，总结Java编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类(接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。</p><p>本文是 Java 命名规范的介绍，建议收藏转发。更多文章可以关注公众号「Java后端」自行搜索。</p><h2 id="_1-包命名规范" tabindex="-1"><a class="header-anchor" href="#_1-包命名规范" aria-hidden="true">#</a> <strong>1. 包命名规范</strong></h2><p>包(Package)的作用是将功能相似或相关的类或者接口进行分组管理，便于类的定位和查找，同时也可以使用包来避免类名的冲突和访问控制，使代码更容易维护。通常，包命使用小写英文字母进行命名，并使用“.”进行分割，每个被分割的单元只能包含一个名词。</p><p>一般地，包命名常采用顶级域名作为前缀，例如com，net，org，edu，gov，cn，io等，随后紧跟公司/组织/个人名称以及功能模块名称。下面是一些包命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.springframework.boot.autoconfigure.cloud
package org.springframework.boot.util
package org.hibernate.action
package org.hibernate.cfg
package com.alibaba.druid
package com.alibaba.druid.filter
package com.alibaba.nacos.client.config
package com.ramostear.blog.web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是Oracle Java的一些常见包命名例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package java.beans
package java.io
package java.lang
package java.net
package java.util
package javax.annotation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-类命名规范" tabindex="-1"><a class="header-anchor" href="#_2-类命名规范" aria-hidden="true">#</a> <strong>2. 类命名规范</strong></h2><p>类(Class)通常采用名词进行命名，且首字母大写，如果一个类名包含两个以上名词，建议使用驼峰命名(Camel-Case)法书写类名,每个名词首字母也应该大写。一般地，类名的书写尽量使其保持简单和描述的完整性，因此在书写类名时不建议使用缩写(一些约定俗成的命名除外。</p><p>例如 Internationalization and Localization 缩写成i18n，Uniform Resource Identifier缩写成URI，Data Access Object缩写成DAO，JSON Web Token缩写成JWT，HyperText Markup Language缩写成HTML等等)。下列是一些常见的类命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserDTO{

}
class EmployeeService{
    
}
class StudentDAO{
    
}
class OrderItemEntity{
    
}
public class UserServiceImpl{
    
}
public class OrderItemController{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 Oracle Java 中的一些标准命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class HTMLEditorKit{
    
}
public abstract class HttpContext{
    
}
public interface ImageObserver{
    
}
public class ArrayIndexOutOfBoundsException{
    
}
public class enum Thread.State{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-接口命名规范" tabindex="-1"><a class="header-anchor" href="#_2-1-接口命名规范" aria-hidden="true">#</a> <strong>2.1 接口命名规范</strong></h3><p>首先，接口(Interface)是一种表述某一类型对象动作的特殊类；简单来说，接口也是类(不太严谨)，所以，接口的名称的书写也应该符合类名书写规范，首字母应该大写，与普通类名不同的是，接口命名时通常采用形容词或动词来描述接口的动作行为。下列是Oracle Java中一些标准库的接口使用形容词命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Closeable{
    
}
public interface Cloneable{
    
}
public interface Runnable{
    
}
public interface Comparable&lt;T&gt;{
    
}
public interface CompletionService&lt;V&gt;{
    
}
public interface Iterable&lt;T&gt;{
    
}
public interface EventListener{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Spring Framework标准库中，通常采用名词+动词/形容词的组合方式来命名接口，下列是Spring Framework中一些接口命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface AfterAdvice{
    
}
public interface TargetClassAware{
    
}
public interface ApplicationContextAware{
    
}
public interface MessageSourceResolvable{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.2 抽象类命名规范</strong></p><p>抽象类(Abstract Class)是一种特殊的类，其命名与普通类的命名规范相当。一般地，为了将抽象类与普通类和接口做出区别，提高抽象类的可读性，在命名抽象类时，会以“Abstract”/“Base”作为类命的前缀。下面是编程中一些常规的命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractRepository&lt;T&gt;{
    
}
public abstract class AbstractController{
    
}
public abstract class BaseDao&lt;T,ID&gt;{
    
}
public abstract class AbstractCommonService&lt;T&gt;{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是Spring Framework中常见的抽象类示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractAspectJAdvice{
    
}
public abstract class AbstractSingletonProxyFactoryBean{
    
}
public abstract class AbstractBeanFactoryPointcutAdvisor{
    
}
public abstract class AbstractCachingConfiguration{
    
}
public abstract class AbstractContextLoaderInitializer{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.3 异常类命名规范</strong></p><p>异常类(Exception Class)也是类的一种，但与普通类命名不同的是，异常类在命名时需要使用“Exception”作为其后缀。下面是常见的异常类命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FileNotFoundException{
    
}
public class UserAlreadyExistException{
    
}
public class TransactionException{
    
}
public class ClassNotFoundException{
    
}
public class IllegalArgumentException{
    
}
public class IndexOutOfBoundsException{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，在Java中还有另外一类异常类，它们属于系统异常，这一类异常类的命名使用“Error”作为其后缀，以区分Exception(编码，环境，操作等异常)。下面是系统异常(非检查异常)的命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class VirtualMachineError{
    
}
public class StackOverflowError{
    
}
public class OutOfMemoryError{
    
}
public class IllegalAccessError{
    
}
public class NoClassDefFoundError{
    
}
public class NoSuchFieldError{
    
}
public class NoSuchMethodError{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.方法命名规范</strong></p><p>方法(Method)命名时,其首字母应该小写，如果方法签名由多个单词组成，则从第二个单词起，使用驼峰命名法进行书写。一般地，在对方法进行命名时，通常采用动词/动词+名词的组合，下面是方法命名的一些常见示例。</p><h3 id="_3-1-表述获取" tabindex="-1"><a class="header-anchor" href="#_3-1-表述获取" aria-hidden="true">#</a> <strong>3.1 表述获取</strong></h3><p>如果一个方法用于获取某个值，通常使用“get”作为其前缀，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public String getUserName(){
    
}
public List&lt;Integer&gt; getUserIds(){
    
}
public User getOne(){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.2 表述查询</strong></p><p>如果方法需要通过查询或筛选的方式获取某个数据，通常使用“find”/“query”作为其前缀，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public List&lt;User&gt; findOne(Integer id){
    
}
public List&lt;Integer&gt; findAll(){
    
}
public List&lt;String&gt; queryOrders(){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-表述条件" tabindex="-1"><a class="header-anchor" href="#_3-3-表述条件" aria-hidden="true">#</a> <strong>3.3 表述条件</strong></h3><p>如果一个方法需要一些条件参数，则可以使用“by”/“with”等字符作为方法名中条件的连接符，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public User findByUsername(String username){
    
}
public List&lt;Integer&gt; getUserIdsWithState(boolean state){
    
}
public List&lt;User&gt; findAllByUsernameOrderByIdDesc(String username){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.4 表述设置</strong></p><p>如果一个方法是要设置，插入，修改，删除等操作，应该将对应的动词(set,insert,update,delete)作为其名词的前缀，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void setName(String name){
    
}
public User insert(User user){
    
}
public void update(User user){
    
}
public void clearAll(){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.5 其他规范</strong></p><p>如果一个方法用于获取某组数据的长度或数量，则该方法应该使用length或size命名；如果方法的返回值为布尔类型(Boolean)，则该方法应该使用“is”或”has”作为前缀；</p><p>如果方法用于将一种类型的数据转换为另一种数据数类型，则可以使用“to”作为前缀。下面是综合示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public long length(){
    
}
public int size(){
    
}
public boolean isOpen(){
    
}
public boolean isNotEmpty(){
    
}
public boolean hasLength(){
    
}
public Set&lt;Integer&gt; mapToSet(Map map){
    
}
public UserDto convertTo(User user){
    
}
public String toString(Object obj){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 变量命名规范</strong></p><p>变量(Variable)命名包括参数名称，成员变量和局部变量。变量命名通常以小写字母开头，如果变量名由多个单词构成，则从第二个单词起首字母需要大写，在变量命名过程中，不建议使用“_”作为前缀或者单词之间的分割符号。下面是一些常见的变量命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private String nickName;
private String mobileNumber;
private Long id;
private String username;
private Long orderId;
private Long orderItemId;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\5. 常量命名规范</p><p>一般地，常量名称采用全部大写的英文单词书写，如果常量名称由多个单词组成，则单词之间统一使用“_”进行分割，下面是常量命名示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static final String LOGIN_USER_SESSION_KEY = &quot;current_login_user&quot;;
public static final int MAX_AGE_VALUE = 120;
public static final int DEFAULT_PAGE_NO = 1;
public static final long MAX_PAGE_SIZE = 1000;
public static final boolean HAS_LICENSE = false;
public static final boolean IS_CHECKED = false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-枚举命名规范" tabindex="-1"><a class="header-anchor" href="#_6-枚举命名规范" aria-hidden="true">#</a> <strong>6. 枚举命名规范</strong></h2><p>枚举(Enum)类是一种特殊的类，其命名规范遵循普通类的命名约束条件，首字母大写，采用驼峰命名法；枚举类中定义的值的名称遵循常量的命名规范，且枚举值的名称需要与类名有一定的关联性，下面是枚举的一些示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public enum Color{
    RED,YELLOW,BLUE,GREEN,WHITE;
}
public enum PhysicalSize{
    TINY,SMALL,MEDIUM,LARGE,HUGE,GIGANTIC;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是Oracle Java标准库中的一个示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public enum ElementType{
    TYPE,
    FIELD,
    METHOD,
    PARAMETER,
    CONSTRUCTOR,
    LOCAL_VARIABLE,
    ANNOTATION_TYPE,
    PACKAGE,
    TYPE_PARAMETER,
    TYPE_USE;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-其他命名规范" tabindex="-1"><a class="header-anchor" href="#_7-其他命名规范" aria-hidden="true">#</a> <strong>7. 其他命名规范</strong></h2><h3 id="_7-1-数组" tabindex="-1"><a class="header-anchor" href="#_7-1-数组" aria-hidden="true">#</a> <strong>7.1 数组</strong></h3><p>在定义数组时，为了便于阅读，尽量保持以下的书写规范：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] array = new int[10];
int[] idArray ={1,2,3,4,5};
String[] nameArray = {&quot;First&quot;,&quot;Yellow&quot;,&quot;Big&quot;}

public List&lt;String&gt; getNameById(Integer[] ids){
    
}

public List&lt;String&gt; getNameById(Integer...ids){
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-表述复数或者集合" tabindex="-1"><a class="header-anchor" href="#_7-2-表述复数或者集合" aria-hidden="true">#</a> <strong>7.2 表述复数或者集合</strong></h3><p>如果一个变量用于描述多个数据时，尽量使用单词的复数形式进行书写，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Collection&lt;Order&gt; orders;
int[] values;
List&lt;Item&gt; items;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果表述的是一个Map数据，则应使用“map”作为其后缀，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String,User&gt; userMap;
Map&lt;String,List&lt;Object&gt;&gt; listMap;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-泛型类" tabindex="-1"><a class="header-anchor" href="#_7-3-泛型类" aria-hidden="true">#</a> <strong>7.3 泛型类</strong></h3><p>在书写泛型类时，通常做以下的约定：</p><ul><li>E表示Element，通常用在集合中；</li><li>ID用于表示对象的唯一标识符类型</li><li>T表示Type(类型)，通常指代类；</li><li>K表示Key(键),通常用于Map中；</li><li>V表示Value(值),通常用于Map中，与K结对出现；</li><li>N表示Number,通常用于表示数值类型；</li><li>？表示不确定的Java类型；</li><li>X用于表示异常；</li><li>U,S表示任意的类型。</li></ul><p>下面时泛型类的书写示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class HashSet&lt;E&gt; extends AbstractSet&lt;E&gt;{
    
}
public class HashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt;{
    
}
public class ThreadLocal&lt;T&gt;{
    
}
public interface Functor&lt;T,X extends Throwable&gt;{
    T val() throws X;
}
public class Container&lt;K,V&gt;{
    private K key;
    private V value;
    Container(K key,V value){
        this.key = key;
        this.value = value;
    }
    
}

public interface BaseRepository&lt;T,ID&gt;{
    T findById(ID id);

    void update(T t);

    List&lt;T&gt; findByIds(ID...ids);
}

public static &lt;T&gt; List&lt;T&gt; methodName(Class&lt;T&gt; clz){
    List&lt;T&gt; dataList = getByClz(clz);
    return dataList;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.4 接口实现类</strong></p><p>为了便于阅读，在通常情况下，建议接口实现类使用“Impl作为后缀”，不建议使用大写的“I”作为接口前缀，下面是接口和接口实现类的书写示例。</p><p>推荐写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface OrderService{
    
}
public class OrderServiceImpl implements OrderService{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不建议的写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IOrderService{
    
}
public class OrderService implements IOrderService{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-测试类和测试方法" tabindex="-1"><a class="header-anchor" href="#_7-5-测试类和测试方法" aria-hidden="true">#</a> <strong>7.5 测试类和测试方法</strong></h3><p>在项目中，测试类采用被测试业务模块名/被测试接口/被测试类+“Test”的方法进行书写，测试类中的测试函数采用“test”+用例操作_状态的组合方式进行书写，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserServiceTest{

    public void testFindByUsernameAndPassword(){
        
    }

    public void testUsernameExist_notExist(){
        
    }

    public void testDeleteById_isOk(){
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8 扩展：速记 Java 开发中的各种O</strong></p><p>最后，通过一张表和图快速对Java中的<code>BO</code>,<code>DTO</code>,<code>DAO</code>,<code>PO</code>,<code>POJO</code>,<code>VO</code>之间的含义，区别以及联系进行梳理。</p><table><thead><tr><th>名称</th><th>使用范围</th><th>解释说明</th></tr></thead><tbody><tr><td>BO</td><td>用于Service,Manager,Business等业务相关类的命名</td><td>Business Object业务处理对象，主要作用是把业务逻辑封装成一个对象。</td></tr><tr><td>DTO</td><td>经过加工后的PO对象，其内部属性可能增加或减少</td><td>Data Transfer Object数据传输对象，主要用于远程调用等需要大量传输数据的地方，例如，可以将一个或多个PO类的部分或全部属性封装为DTO进行传输</td></tr><tr><td>DAO</td><td>用于对数据库进行读写操作的类进行命名</td><td>Data Access Object数据访问对象，主要用来封装对数据库的访问，通过DAO可以将POJO持久化为PO，也可以利用PO封装出VO和DTO</td></tr><tr><td>PO</td><td>Bean,Entity等类的命名</td><td>Persistant Object持久化对象，数据库表中的数据在Java对象中的映射状态，可以简单的理解为一个PO对象即为数据库表中的一条记录</td></tr><tr><td>POJO</td><td>POJO是DO/DTO/BO/VO的统称</td><td>Plain Ordinary Java Object 简单Java对象，它是一个简单的普通Java对象，禁止将类命名为XxxxPOJO</td></tr><tr><td>VO</td><td>通常是视图控制层和模板引擎之间传递的数据对象</td><td>Value Object 值对象，主要用于视图层，视图控制器将视图层所需的属性封装成一个对象，然后用一个VO对象在视图控制器和视图之间进行数据传输。</td></tr><tr><td>AO</td><td>应用层对象</td><td>Application Object，在Web层与Service层之间抽象的复用对象模型，很少用。</td></tr></tbody></table><p>下面将通过一张图来理解上述几种O之间相互转换的关系：</p><figure><img src="https://static.xlc520.tk/blogImage/image-20220526110603169.png" alt="image-20220526110603169" tabindex="0" loading="lazy"><figcaption>image-20220526110603169</figcaption></figure>`,87),a=[d];function r(v,c){return i(),n("div",null,a)}const b=e(l,[["render",r],["__file","Java命名规范.html.vue"]]);export{b as default};
