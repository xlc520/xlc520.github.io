---
author: xlc520
title: Java isEmpty和isBlank的用法区别
excerpt: 
description: 
date: 2023-10-31
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Java isEmpty 和 isBlank 的用法区别

也许你两个都不知道，也许你除了`isEmpty`/`isNotEmpty`/`isNotBlank`/`isBlank`
外，并不知道还有`isAnyEmpty`/`isNoneEmpty`/`isAnyBlank`/`isNoneBlank`的存在。

come on ,让我们一起来探索`org.apache.commons.lang3.StringUtils;`这个工具类。

## isEmpty 系列

### StringUtils.isEmpty()

是否为空。可以看到 " " 空格是会绕过这种空判断，因为是一个空格，并不是严格的空值，会导致 `isEmpty(" ")=false`

```java
StringUtils.isEmpty(null) = true
StringUtils.isEmpty("") = true
StringUtils.isEmpty(" ") = false
StringUtils.isEmpty(“bob”) = false
StringUtils.isEmpty(" bob ") = false
/
 *
 * <p>NOTE: This method changed in Lang version 2.0.
 * It no longer trims the CharSequence.
 * That functionality is available in isBlank().</p>
 *
 * @param cs  the CharSequence to check, may be null
 * @return {@code true} if the CharSequence is empty or null
 * @since 3.0 Changed signature from isEmpty(String) to isEmpty(CharSequence)
 */
public static boolean isEmpty(final CharSequence cs) {
    return cs == null || cs.length() == 0;
}
```

### StringUtils.isNotEmpty()

相当于不为空 , `= !isEmpty()`

```java
public static boolean isNotEmpty(final CharSequence cs) {
        return !isEmpty(cs);
    }
```

### StringUtils.isAnyEmpty()

是否有一个为空，只有一个为空，就为 true。

```java
StringUtils.isAnyEmpty(null) = true
StringUtils.isAnyEmpty(null, “foo”) = true
StringUtils.isAnyEmpty("", “bar”) = true
StringUtils.isAnyEmpty(“bob”, “”) = true
StringUtils.isAnyEmpty(" bob ", null) = true
StringUtils.isAnyEmpty(" ", “bar”) = false
StringUtils.isAnyEmpty(“foo”, “bar”) = false
/
 * @param css  the CharSequences to check, may be null or empty
 * @return {@code true} if any of the CharSequences are empty or null
 * @since 3.2
 */
public static boolean isAnyEmpty(final CharSequence... css) {
  if (ArrayUtils.isEmpty(css)) {
    return true;
  }
  for (final CharSequence cs : css){
    if (isEmpty(cs)) {
      return true;
    }
  }
  return false;
}
```

### StringUtils.isNoneEmpty()

相当于`!isAnyEmpty(css)` , 必须所有的值都不为空才返回 true

```java
/
 * <p>Checks if none of the CharSequences are empty ("") or null.</p>
 *
 * <pre>
 * StringUtils.isNoneEmpty(null)             = false
 * StringUtils.isNoneEmpty(null, "foo")      = false
 * StringUtils.isNoneEmpty("", "bar")        = false
 * StringUtils.isNoneEmpty("bob", "")        = false
 * StringUtils.isNoneEmpty("  bob  ", null)  = false
 * StringUtils.isNoneEmpty(" ", "bar")       = true
 * StringUtils.isNoneEmpty("foo", "bar")     = true
 * </pre>
 *
 * @param css  the CharSequences to check, may be null or empty
 * @return {@code true} if none of the CharSequences are empty or null
 * @since 3.2
 */
public static boolean isNoneEmpty(final CharSequence... css) {{
        return !isAnyEmpty(css);
}
```

## isBank 系列

### StringUtils.isBlank()

是否为真空值(空格或者空值)

```java
StringUtils.isBlank(null) = true
StringUtils.isBlank("") = true
StringUtils.isBlank(" ") = true
StringUtils.isBlank(“bob”) = false
StringUtils.isBlank(" bob ") = false
/
 * <p>Checks if a CharSequence is whitespace, empty ("") or null.</p>
 * @param cs  the CharSequence to check, may be null
 * @return {@code true} if the CharSequence is null, empty or whitespace
 * @since 2.0
 * @since 3.0 Changed signature from isBlank(String) to isBlank(CharSequence)
 */
public static boolean isBlank(final CharSequence cs) {
    int strLen;
    if (cs == null || (strLen = cs.length()) == 0) {
        return true;
    }
    for (int i = 0; i < strLen; i++) {
        if (Character.isWhitespace(cs.charAt(i)) == false) {
            return false;
        }
    }
    return true;
}
```

### StringUtils.isNotBlank()

是否真的不为空，不是空格或者空值，相当于`!isBlank();`

```java
public static boolean isNotBlank(final CharSequence cs) {
        return !isBlank(cs);
    }
```

### StringUtils.isAnyBlank()

是否包含任何真空值(包含空格或空值)

```java
StringUtils.isAnyBlank(null) = true
StringUtils.isAnyBlank(null, “foo”) = true
StringUtils.isAnyBlank(null, null) = true
StringUtils.isAnyBlank("", “bar”) = true
StringUtils.isAnyBlank(“bob”, “”) = true
StringUtils.isAnyBlank(" bob ", null) = true
StringUtils.isAnyBlank(" ", “bar”) = true
StringUtils.isAnyBlank(“foo”, “bar”) = false
 /
 * <p>Checks if any one of the CharSequences are blank ("") or null and not whitespace only..</p>
 * @param css  the CharSequences to check, may be null or empty
 * @return {@code true} if any of the CharSequences are blank or null or whitespace only
 * @since 3.2
 */
public static boolean isAnyBlank(final CharSequence... css) {
  if (ArrayUtils.isEmpty(css)) {
    return true;
  }
  for (final CharSequence cs : css){
    if (isBlank(cs)) {
      return true;
    }
  }
  return false;
}
```

### StringUtils.isNoneBlank()

是否全部都不包含空值或空格。面试宝典，公众号 Java 精选，回复 java 面试，获取在线面试资料，支持随时随地刷题。

```java
StringUtils.isNoneBlank(null) = false
StringUtils.isNoneBlank(null, “foo”) = false
StringUtils.isNoneBlank(null, null) = false
StringUtils.isNoneBlank("", “bar”) = false
StringUtils.isNoneBlank(“bob”, “”) = false
StringUtils.isNoneBlank(" bob ", null) = false
StringUtils.isNoneBlank(" ", “bar”) = false
StringUtils.isNoneBlank(“foo”, “bar”) = true
/
 * <p>Checks if none of the CharSequences are blank ("") or null and whitespace only..</p>
 * @param css  the CharSequences to check, may be null or empty
 * @return {@code true} if none of the CharSequences are blank or null or whitespace only
 * @since 3.2
 */
public static boolean isNoneBlank(final CharSequence... css) {
  return !isAnyBlank(css);
}
```
