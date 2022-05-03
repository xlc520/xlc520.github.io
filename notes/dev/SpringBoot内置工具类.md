---
author: xlc520
title: SpringBoot 内置工具类
description: SpringBoot 内置工具类
date: 2022-05-01
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# SpringBoot 内置工具类

## 断言

1. 断言是一个逻辑判断，用于检查不应该发生的情况

2. Assert 关键字在 JDK1.4 中引入，可通过 JVM 参数`-enableassertions`开启

3. SpringBoot 中提供了 Assert 断言工具类，通常用于数据合法性检查

   ```java
   // 要求参数 object 必须为非空（Not Null），否则抛出异常，不予放行
   // 参数 message 参数用于定制异常信息。
   void notNull(Object object, String message)
   // 要求参数必须空（Null），否则抛出异常，不予『放行』。
   // 和 notNull() 方法断言规则相反
   void isNull(Object object, String message)
   // 要求参数必须为真（True），否则抛出异常，不予『放行』。
   void isTrue(boolean expression, String message)
   // 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予放行
   void notEmpty(Collection collection, String message)
   // 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予放行
   void hasLength(String text, String message)
   // 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予放行
   void hasText(String text, String message)
   // 要求参数是指定类型的实例，否则抛出异常，不予放行
   void isInstanceOf(Class type, Object obj, String message)
   // 要求参数 `subType` 必须是参数 superType 的子类或实现类，否则抛出异常，不予放行
   void isAssignable(Class superType, Class subType, String message)
   复制代码
   ```

## 对象、数组、集合

### ObjectUtils

1. 获取对象的基本信息

   ```java
   // 获取对象的类名。参数为 null 时，返回字符串："null" 
   String nullSafeClassName(Object obj)
   // 参数为 null 时，返回 0
   int nullSafeHashCode(Object object)
   // 参数为 null 时，返回字符串："null"
   String nullSafeToString(boolean[] array)
   // 获取对象 HashCode（十六进制形式字符串）。参数为 null 时，返回 0 
   String getIdentityHexString(Object obj)
   // 获取对象的类名和 HashCode。 参数为 null 时，返回字符串："" 
   String identityToString(Object obj)
   // 相当于 toString()方法，但参数为 null 时，返回字符串：""
   String getDisplayString(Object obj)
   复制代码
   ```

2. 判断工具

   ```java
   // 判断数组是否为空
   boolean isEmpty(Object[] array)
   // 判断参数对象是否是数组
   boolean isArray(Object obj)
   // 判断数组中是否包含指定元素
   boolean containsElement(Object[] array, Object element)
   // 相等，或同为 null时，返回 true
   boolean nullSafeEquals(Object o1, Object o2)
   /*
   判断参数对象是否为空，判断标准为：
       Optional: Optional.empty()
          Array: length == 0
   CharSequence: length == 0
     Collection: Collection.isEmpty()
            Map: Map.isEmpty()
    */
   boolean isEmpty(Object obj)
   复制代码
   ```

3. 其他工具方法

   ```java
   // 向参数数组的末尾追加新元素，并返回一个新数组
   <A, O extends A> A[] addObjectToArray(A[] array, O obj)
   // 原生基础类型数组 --> 包装类数组
   Object[] toObjectArray(Object source)
   复制代码
   ```

### StringUtils

1. 字符串判断工具

   ```java
   // 判断字符串是否为 null，或 ""。注意，包含空白符的字符串为非空
   boolean isEmpty(Object str)
   // 判断字符串是否是以指定内容结束。忽略大小写
   boolean endsWithIgnoreCase(String str, String suffix)
   // 判断字符串是否已指定内容开头。忽略大小写
   boolean startsWithIgnoreCase(String str, String prefix) 
   // 是否包含空白符
   boolean containsWhitespace(String str)
   // 判断字符串非空且长度不为 0，即，Not Empty
   boolean hasLength(CharSequence str)
   // 判断字符串是否包含实际内容，即非仅包含空白符，也就是 Not Blank
   boolean hasText(CharSequence str)
   // 判断字符串指定索引处是否包含一个子串。
   boolean substringMatch(CharSequence str, int index, CharSequence substring)
   // 计算一个字符串中指定子串的出现次数
   int countOccurrencesOf(String str, String sub)
   复制代码
   ```

2. 字符串操作工具

   ```java
   // 查找并替换指定子串
   String replace(String inString, String oldPattern, String newPattern)
   // 去除尾部的特定字符
   String trimTrailingCharacter(String str, char trailingCharacter) 
   // 去除头部的特定字符
   String trimLeadingCharacter(String str, char leadingCharacter)
   // 去除头部的空白符
   String trimLeadingWhitespace(String str)
   // 去除头部的空白符
   String trimTrailingWhitespace(String str)
   // 去除头部和尾部的空白符
   String trimWhitespace(String str)
   // 删除开头、结尾和中间的空白符
   String trimAllWhitespace(String str)
   // 删除指定子串
   String delete(String inString, String pattern)
   // 删除指定字符（可以是多个）
   String deleteAny(String inString, String charsToDelete)
   // 对数组的每一项执行 trim() 方法
   String[] trimArrayElements(String[] array)
   // 将 URL 字符串进行解码
   String uriDecode(String source, Charset charset)
   复制代码
   ```

3. 路径相关工具方法

   ```java
   // 解析路径字符串，优化其中的 “..” 
   String cleanPath(String path)
   // 解析路径字符串，解析出文件名部分
   String getFilename(String path)
   // 解析路径字符串，解析出文件后缀名
   String getFilenameExtension(String path)
   // 比较两个两个字符串，判断是否是同一个路径。会自动处理路径中的 “..” 
   boolean pathEquals(String path1, String path2)
   // 删除文件路径名中的后缀部分
   String stripFilenameExtension(String path) 
   // 以 “. 作为分隔符，获取其最后一部分
   String unqualify(String qualifiedName)
   // 以指定字符作为分隔符，获取其最后一部分
   String unqualify(String qualifiedName, char separator)
   复制代码
   ```

### CollectionUtils

1. 集合判断工具

   ```java
   // 判断 List/Set 是否为空
   boolean isEmpty(Collection<?> collection)
   // 判断 Map 是否为空
   boolean isEmpty(Map<?,?> map)
   // 判断 List/Set 中是否包含某个对象
   boolean containsInstance(Collection<?> collection, Object element)
   // 以迭代器的方式，判断 List/Set 中是否包含某个对象
   boolean contains(Iterator<?> iterator, Object element)
   // 判断 List/Set 是否包含某些对象中的任意一个
   boolean containsAny(Collection<?> source, Collection<?> candidates)
   // 判断 List/Set 中的每个元素是否唯一。即 List/Set 中不存在重复元素
   boolean hasUniqueObject(Collection<?> collection)
   复制代码
   ```

2. 集合操作工具

   ```java
   // 将 Array 中的元素都添加到 List/Set 中
   <E> void mergeArrayIntoCollection(Object array, Collection<E> collection)  
   // 将 Properties 中的键值对都添加到 Map 中
   <K,V> void mergePropertiesIntoMap(Properties props, Map<K,V> map)
   // 返回 List 中最后一个元素
   <T> T lastElement(List<T> list)  
   // 返回 Set 中最后一个元素
   <T> T lastElement(Set<T> set) 
   // 返回参数 candidates 中第一个存在于参数 source 中的元素
   <E> E findFirstMatch(Collection<?> source, Collection<E> candidates)
   // 返回 List/Set 中指定类型的元素。
   <T> T findValueOfType(Collection<?> collection, Class<T> type)
   // 返回 List/Set 中指定类型的元素。如果第一种类型未找到，则查找第二种类型，以此类推
   Object findValueOfType(Collection<?> collection, Class<?>[] types)
   // 返回 List/Set 中元素的类型
   Class<?> findCommonElementType(Collection<?> collection)
   复制代码
   ```

## 文件、资源、IO 流

### FileCopyUtils

1. 输入

   ```java
   // 从文件中读入到字节数组中
   byte[] copyToByteArray(File in)
   // 从输入流中读入到字节数组中
   byte[] copyToByteArray(InputStream in)
   // 从输入流中读入到字符串中
   String copyToString(Reader in)
   复制代码
   ```

2. 输出

   ```java
   // 从字节数组到文件
   void copy(byte[] in, File out)
   // 从文件到文件
   int copy(File in, File out)
   // 从字节数组到输出流
   void copy(byte[] in, OutputStream out) 
   // 从输入流到输出流
   int copy(InputStream in, OutputStream out) 
   // 从输入流到输出流
   int copy(Reader in, Writer out)
   // 从字符串到输出流
   void copy(String in, Writer out)
   复制代码
   ```

### ResourceUtils

1. 从资源路径获取文件

   ```java
   // 判断字符串是否是一个合法的 URL 字符串。
   static boolean isUrl(String resourceLocation)
   // 获取 URL
   static URL getURL(String resourceLocation) 
   // 获取文件（在 JAR 包内无法正常使用，需要是一个独立的文件）
   static File	getFile(String resourceLocation)
   复制代码
   ```

2. Resource

   ```java
   // 文件系统资源 D:\...
   FileSystemResource
   // URL 资源，如 file://... http://...
   UrlResource
   // 类路径下的资源，classpth:...
   ClassPathResource
   // Web 容器上下文中的资源（jar 包、war 包）
   ServletContextResource
   复制代码
   ```

   ```java
   // 判断资源是否存在
   boolean exists()
   // 从资源中获得 File 对象
   File getFile()
   // 从资源中获得 URI 对象
   URI getURI()
   // 从资源中获得 URI 对象
   URL getURL()
   // 获得资源的 InputStream
   InputStream getInputStream()
   // 获得资源的描述信息
   String getDescription()
   复制代码
   ```

### StreamUtils

1. 输入

   ```java
   void copy(byte[] in, OutputStream out)
   int copy(InputStream in, OutputStream out)
   void copy(String in, Charset charset, OutputStream out)
   long copyRange(InputStream in, OutputStream out, long start, long end)
   复制代码
   ```

2. 输出

   ```java
   byte[] copyToByteArray(InputStream in)
   String copyToString(InputStream in, Charset charset)
   // 舍弃输入流中的内容
   int drain(InputStream in) 
   复制代码
   ```

## 反射、AOP

### ReflectionUtils

1. 获取方法

   ```java
   // 在类中查找指定方法
   Method findMethod(Class<?> clazz, String name) 
   // 同上，额外提供方法参数类型作查找条件
   Method findMethod(Class<?> clazz, String name, Class<?>... paramTypes) 
   // 获得类中所有方法，包括继承而来的
   Method[] getAllDeclaredMethods(Class<?> leafClass) 
   // 在类中查找指定构造方法
   Constructor<T> accessibleConstructor(Class<T> clazz, Class<?>... parameterTypes) 
   // 是否是 equals() 方法
   boolean isEqualsMethod(Method method) 
   // 是否是 hashCode() 方法 
   boolean isHashCodeMethod(Method method) 
   // 是否是 toString() 方法
   boolean isToStringMethod(Method method) 
   // 是否是从 Object 类继承而来的方法
   boolean isObjectMethod(Method method) 
   // 检查一个方法是否声明抛出指定异常
   boolean declaresException(Method method, Class<?> exceptionType) 
   复制代码
   ```

2. 执行方法

   ```java
   // 执行方法
   Object invokeMethod(Method method, Object target)  
   // 同上，提供方法参数
   Object invokeMethod(Method method, Object target, Object... args) 
   // 取消 Java 权限检查。以便后续执行该私有方法
   void makeAccessible(Method method) 
   // 取消 Java 权限检查。以便后续执行私有构造方法
   void makeAccessible(Constructor<?> ctor) 
   复制代码
   ```

3. 获取字段

   ```java
   // 在类中查找指定属性
   Field findField(Class<?> clazz, String name) 
   // 同上，多提供了属性的类型
   Field findField(Class<?> clazz, String name, Class<?> type) 
   // 是否为一个 "public static final" 属性
   boolean isPublicStaticFinal(Field field) 
   复制代码
   ```

4. 设置字段

   ```java
   // 获取 target 对象的 field 属性值
   Object getField(Field field, Object target) 
   // 设置 target 对象的 field 属性值，值为 value
   void setField(Field field, Object target, Object value) 
   // 同类对象属性对等赋值
   void shallowCopyFieldState(Object src, Object dest)
   // 取消 Java 的权限控制检查。以便后续读写该私有属性
   void makeAccessible(Field field) 
   // 对类的每个属性执行 callback
   void doWithFields(Class<?> clazz, ReflectionUtils.FieldCallback fc) 
   // 同上，多了个属性过滤功能。
   void doWithFields(Class<?> clazz, ReflectionUtils.FieldCallback fc, 
                     ReflectionUtils.FieldFilter ff) 
   // 同上，但不包括继承而来的属性
   void doWithLocalFields(Class<?> clazz, ReflectionUtils.FieldCallback fc) 
   复制代码
   ```

### AopUtils

1. 判断代理类型

   ```java
   // 判断是不是 Spring 代理对象
   boolean isAopProxy()
   // 判断是不是 jdk 动态代理对象
   isJdkDynamicProxy()
   // 判断是不是 CGLIB 代理对象
   boolean isCglibProxy()
   复制代码
   ```

2. 获取被代理对象的 class

   ```java
   // 获取被代理的目标 class
   Class<?> getTargetClass()
   复制代码
   ```

### AopContext

1. 获取当前对象的代理对象

   ```java
   Object currentProxy()
   复制代码
   ```