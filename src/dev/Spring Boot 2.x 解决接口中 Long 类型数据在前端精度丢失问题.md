---
author: xlc520
title: Spring Boot 2.x 解决接口中 Long 类型数据在前端精度丢失问题
description: 
date: 2023-11-13
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Spring Boot 2.x 解决接口中 Long 类型数据在前端精度丢失问题

前端接收后端接口中`Long`类型数据精度丢失问题可能与前端的数据处理方式有关。在JavaScript中，数字类型是使用浮点数来表示的，而浮点数的精度是有限的，可能导致长整型数据的精度丢失。以下是详细分析和说明：

## 1. JavaScript中的数字表示问题：

在JavaScript中，所有数字都是以64位浮点数的形式存储的，即使整数也是如此。这就意味着，JavaScript的数字类型有限制，无法准确表示所有的64位整数，特别是超出JavaScript的安全整数范围时（即`Number.MAX_SAFE_INTEGER`和`Number.MIN_SAFE_INTEGER`），会发生精度丢失。

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992，超出安全整数范围
```

## 2. 后端发送长整型数据给前端：

当后端通过RESTful接口发送`Long`类型数据给前端时，如果这个数据超出了JavaScript的安全整数范围，前端接收到的数据可能会有精度丢失。



## 3. 解决方案：

#### a. 使用BigInt：

在前端，可以使用ES2020引入的`BigInt`类型来处理大整数。`BigInt`类型是一种可以表示任意精度整数的数据类型。

```javascript
let bigIntValue = BigInt(yourReceivedLongValue);
console.log(bigIntValue);
```

#### b. 字符串表示：

另一种常见的解决方案是将`Long`类型数据在后端序列化成字符串，然后在前端将字符串转换为`BigInt`或者继续以字符串形式处理。

在Spring Boot中，可以通过Jackson库配置，将`Long`类型数据序列化为字符串

```java
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
/**
* 描述：jackson全局配置
* 1 将Long类型转换成string类型返回，避免大整数导致前端精度丢失的问题
* 2 将LocalDateTime全局返回时间戳（方便前端处理）并且将参数里面的时间戳转换成LocalDateTime
*/
@Configuration
public class JacksonCustomizerConfig {
   /**
    * 描述:统一配置类型的转换策略
    */
   @Bean
   public Jackson2ObjectMapperBuilderCustomizer jackson2ObjectMapperBuilderCustomizer() {
       return builder -> {
           //将Long类型转换成string类型返回，避免大整数导致前端精度丢失的问题
           builder.serializerByType(Long.TYPE, ToStringSerializer.instance);
           builder.serializerByType(Long.class,ToStringSerializer.instance);
           //将LocalDateTime全局返回时间戳（方便前端处理）并且将参数里面的时间戳转换成LocalDateTime
           builder.serializerByType(LocalDateTime.class, new LocalDateTimeSerializer());
           builder.deserializerByType(LocalDateTime.class, new LocalDateTimeDeserializer());
       };
   }
   /**
    * 描述：将LocalDateTime转换为毫秒级时间戳
    *
    */
   public static class LocalDateTimeSerializer extends JsonSerializer<LocalDateTime> {
       @Override
       public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider serializers)
               throws IOException {
           if (value != null) {
               long timestamp = value.toInstant(ZoneOffset.of("+8")).toEpochMilli();
               gen.writeNumber(timestamp);
           }
       }
   }
   /**
    * 描述：将毫秒级时间戳转换为LocalDateTime
    *
    */
   public static class LocalDateTimeDeserializer extends JsonDeserializer<LocalDateTime> {
       @Override
       public LocalDateTime deserialize(JsonParser p, DeserializationContext deserializationContext)
               throws IOException {
           long timestamp = p.getValueAsLong();
           if (timestamp > 0) {
               return LocalDateTime.ofInstant(Instant.ofEpochMilli(timestamp), ZoneOffset.of("+8"));
           } else {
               return null;
           }
       }
   }
}
```

