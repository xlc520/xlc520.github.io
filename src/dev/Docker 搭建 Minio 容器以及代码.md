---
author: xlc520
title: Docker 搭建 Minio 容器以及代码
excerpt: 
description: 
date: 2023-12-26
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Docker 搭建 Minio 容器以及代码

### 简介

> Minio 是一个基于 Apache License
> v2.0 开源协议的对象存储服务，虽然轻量，却拥有着不错的性能。它兼容亚马逊 S3
> 云存储服务接口，非常适合于存储大容量非结构化的数据。例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几
> kb 到最大 5T 不等。最重要的是免费

### 说明

> Docker 如果想安装软件 , 必须先到 Docker 镜像仓库下载镜像。

Docker 官方镜像(<https://hub.docker.com/r/minio/minio>)

### 1、寻找 Minio 镜像

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-001.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-48.png)

### 2、下载 Minio 镜像

```plain

# 下载镜像
docker pull minio/minio

#查看镜像
docker images
```

| 命令                                                        | 描述                                                           |
|-----------------------------------------------------------|--------------------------------------------------------------|
| docker pull minio/minio                                   | 下载最新版 Minio 镜像 (其实此命令就等同于 : docker pull minio/minio:latest ) |
| docker pull minio/minio:RELEASE.2023-11-20T22-40-07Z.fips | 下载指定版本的 Minio 镜像 (xxx 指具体版本号)                                |

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-49.png)

### 3、创建目录

> 一个用来存放配置，一个用来存储上传文件的目录
>
> 启动前需要先创建 Minio 外部挂载的配置文件（ /opt/minio/config）,和存储上传文件的目录（ /opt/minio/data）

```sh
mkdir -p /opt/minio/config
mkdir -p /opt/minio/data
```

### 4、创建 Minio 容器并运行

```sh

docker run \
-p 19000:9000 \
-p 9090:9090 \
--net=host \
--name minio \
-d --restart=always \
-e "MINIO_ACCESS_KEY=minioadmin" \
-e "MINIO_SECRET_KEY=minioadmin" \
-v /opt/minio/data:/data \
-v /opt/minio/config:/root/.minio \
 minio/minio server \
/data --console-address ":9090" -address ":19000"

```

| 命令                                                                  | 描述                                                                               |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------|
| -p 9000:9000 -p 9090:9090                                           | 这是端口映射，前一个是服务器的端口，后一个是客户端也就是 api 接口访问的端口地址                                       |
| --name minio                                                        | 这是给新创建的容器命名的选项，名字是 "minio"                                                       |
| --net=host                                                          | 这是网络设置，表示容器将使用主机的网络栈，这样就不需要在容器内部配置网络                                             |
| -d --restart=always                                                 | 这是运行容器的其他选项，-d 使容器在后台运行，--restart=always 表示容器总是会在退出后自动重启                         |
| -e "MINIO_ACCESS_KEY=minioadmin"                                    | 用户名                                                                              |
| -e "MINIO_SECRET_KEY=minioadmin"                                    | 密码                                                                               |
| -v /opt/minio/data:/data                                            | 这意味着将宿主机上的 /opt/minio/data 目录挂载到容器内的 /data 目录                                    |
| -v /opt/minio/config:/root/.minio                                   | 将宿主机上的 /opt/minio/config 目录挂载到容器内的 /root/.minio 目录                               |
| minio/minio server /data --console-address ":9090" -address ":9000" | 这是容器内要运行的命令，启动一个名为 "minio" 的服务器，数据存储在 /data 目录下，服务器的控制台地址为 ":9090"，服务地址为 ":9000" |
| \                                                                   | 换行                                                                               |

### 4.1、访问操作

访问：<http://47.117.160.102:9090/login> 用户名：密码 minioadmin：minioadmin

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-50.png)

### 4.2、创建用户

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-51.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221162-52.png)

### 4.3、创建组

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-53.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-54.png)

### 4.4、创建 Buckets

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-55.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-56.png)

### 4.5、创建 Access Keys

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-57.png)

### 4.6、文件上传

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-58.png)

### 4.6、浏览器访问上传文件

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-59.png)

### 4.6.1、输入 ip:19000/Buckets 名/文件名，如果不行，看看端口是否开放

### 5、Springboot 简单使用

### 5.1、添加 MinIO 依赖 Pom

```xml

<dependencies>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- MinIO 客户端 -->
    <dependency>
        <groupId>io.minio</groupId>
        <artifactId>minio</artifactId>
        <version>8.5.7</version>
    </dependency>

    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>

    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
        <version>3.11</version>
    </dependency>

</dependencies>
```

### 5.2、配置 MinIO 的 yaml

```yaml
server:
  port: 3333

spring:
  servlet:
    multipart:
      max-request-size: 200MB
      max-file-size: 200MB

minio:
  url: http://127.0.0.1:19000 #换成自己的minio服务端地址
  accessKey: minioadmin # 用户名
  secretKey: minioadmin # 密码
  bucketName: demo  # bucketName指的就是之前创建的MinIO桶Bucket
```

### 5.3、配置类 Config

```java
@Data
@Configuration
public class MinioConfig {

    /**
     * 访问地址
     */
    @Value("${minio.url}")
    private String endpoint;

    /**
     * accessKey类似于用户ID，用于唯一标识你的账户
     */
    @Value("${minio.accessKey}")
    private String accessKey;

    /**
     * secretKey是你账户的密码
     */
    @Value("${minio.secretKey}")
    private String secretKey;

    /**
     * 默认存储桶
     */
    @Value("${minio.bucketName}")
    private String bucketName;

    @Bean
    public MinioClient minioClient() {
        MinioClient minioClient = MinioClient.builder()
                .endpoint(endpoint)
                .credentials(accessKey, secretKey)
                .build();
        return minioClient;
    }
}
```

### 5.4、创建 MinIO 工具类

```java

/**
 * MinIO工具类
 *
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class MinioUtils {

    private final MinioClient minioClient;

    /******************************  Operate Bucket Start  ******************************/

    /**
     * 启动SpringBoot容器的时候初始化Bucket
     * 如果没有Bucket则创建
     *
     * @param bucketName
     */
    @SneakyThrows(Exception.class)
    private void createBucket(String bucketName) {
        if (!bucketExists(bucketName)) {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        }
    }

    /**
     * 判断Bucket是否存在，true：存在，false：不存在
     *
     * @param bucketName
     * @return
     */
    @SneakyThrows(Exception.class)
    public boolean bucketExists(String bucketName) {
        return minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
    }

    /**
     * 获得Bucket的策略
     *
     * @param bucketName
     * @return
     */
    @SneakyThrows(Exception.class)
    public String getBucketPolicy(String bucketName) {
        return minioClient.getBucketPolicy(GetBucketPolicyArgs
                .builder()
                .bucket(bucketName)
                .build());
    }

    /**
     * 获得所有Bucket列表
     *
     * @return
     */
    @SneakyThrows(Exception.class)
    public List<Bucket> getAllBuckets() {
        return minioClient.listBuckets();
    }

    /**
     * 根据bucketName获取其相关信息
     *
     * @param bucketName
     * @return
     */
    @SneakyThrows(Exception.class)
    public Optional<Bucket> getBucket(String bucketName) {
        return getAllBuckets().stream().filter(b -> b.name().equals(bucketName)).findFirst();
    }

    /**
     * 根据bucketName删除Bucket，true：删除成功；false：删除失败，文件或已不存在
     *
     * @param bucketName
     * @throws Exception
     */
    @SneakyThrows(Exception.class)
    public void removeBucket(String bucketName) {
        minioClient.removeBucket(RemoveBucketArgs.builder().bucket(bucketName).build());
    }

    /******************************  Operate Bucket End  ******************************/


    /******************************  Operate Files Start  ******************************/

    /**
     * 判断文件是否存在
     *
     * @param bucketName
     * @param objectName
     * @return
     */
    public boolean isObjectExist(String bucketName, String objectName) {
        boolean exist = true;
        try {
            minioClient.statObject(StatObjectArgs.builder().bucket(bucketName).object(objectName).build());
        } catch (Exception e) {
            log.error("[Minio工具类]>>>> 判断文件是否存在, 异常：", e);
            exist = false;
        }
        return exist;
    }

    /**
     * 判断文件夹是否存在
     *
     * @param bucketName
     * @param objectName
     * @return
     */
    public boolean isFolderExist(String bucketName, String objectName) {
        boolean exist = false;
        try {
            Iterable<Result<Item>> results = minioClient.listObjects(
                    ListObjectsArgs.builder().bucket(bucketName).prefix(objectName).recursive(false).build());
            for (Result<Item> result : results) {
                Item item = result.get();
                if (item.isDir() && objectName.equals(item.objectName())) {
                    exist = true;
                }
            }
        } catch (Exception e) {
            log.error("[Minio工具类]>>>> 判断文件夹是否存在，异常：", e);
            exist = false;
        }
        return exist;
    }

    /**
     * 根据文件前置查询文件
     *
     * @param bucketName 存储桶
     * @param prefix     前缀
     * @param recursive  是否使用递归查询
     * @return MinioItem 列表
     */
    @SneakyThrows(Exception.class)
    public List<Item> getAllObjectsByPrefix(String bucketName,
                                            String prefix,
                                            boolean recursive) {
        List<Item> list = new ArrayList<>();
        Iterable<Result<Item>> objectsIterator = minioClient.listObjects(
                ListObjectsArgs.builder().bucket(bucketName).prefix(prefix).recursive(recursive).build());
        if (objectsIterator != null) {
            for (Result<Item> o : objectsIterator) {
                Item item = o.get();
                list.add(item);
            }
        }
        return list;
    }

    /**
     * 获取文件流
     *
     * @param bucketName 存储桶
     * @param objectName 文件名
     * @return 二进制流
     */
    @SneakyThrows(Exception.class)
    public InputStream getObject(String bucketName, String objectName) {
        return minioClient.getObject(
                GetObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .build());
    }

    /**
     * 断点下载
     *
     * @param bucketName 存储桶
     * @param objectName 文件名称
     * @param offset     起始字节的位置
     * @param length     要读取的长度
     * @return 二进制流
     */
    @SneakyThrows(Exception.class)
    public InputStream getObject(String bucketName, String objectName, long offset, long length) {
        return minioClient.getObject(
                GetObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .offset(offset)
                        .length(length)
                        .build());
    }

    /**
     * 获取路径下文件列表
     *
     * @param bucketName 存储桶
     * @param prefix     文件名称
     * @param recursive  是否递归查找，false：模拟文件夹结构查找
     * @return 二进制流
     */
    public Iterable<Result<Item>> listObjects(String bucketName, String prefix, boolean recursive) {
        return minioClient.listObjects(
                ListObjectsArgs.builder()
                        .bucket(bucketName)
                        .prefix(prefix)
                        .recursive(recursive)
                        .build());
    }

    /**
     * 使用MultipartFile进行文件上传
     *
     * @param bucketName  存储桶
     * @param file        文件名
     * @param objectName  对象名
     * @param contentType 类型
     * @return
     */
    @SneakyThrows(Exception.class)
    public ObjectWriteResponse uploadFile(String bucketName, MultipartFile file, String objectName, String contentType) {
        InputStream inputStream = file.getInputStream();
        return minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .contentType(contentType)
                        .stream(inputStream, inputStream.available(), -1)
                        .build());
    }

    /**
     * 图片上传
     * @param bucketName
     * @param imageBase64
     * @param imageName
     * @return
     */
    public ObjectWriteResponse uploadImage(String bucketName, String imageBase64, String imageName) {
        if (!StringUtils.isEmpty(imageBase64)) {
            InputStream in = base64ToInputStream(imageBase64);
            String newName = System.currentTimeMillis() + "_" + imageName + ".jpg";
            String year = String.valueOf(new Date().getYear());
            String month = String.valueOf(new Date().getMonth());
            return uploadFile(bucketName, year + "/" + month + "/" + newName, in);

        }
        return null;
    }
// BASE64Decoder在jdk8以上的版本移除了，报错最简单解决换成jdk8就行了
    public static InputStream base64ToInputStream(String base64) {
        ByteArrayInputStream stream = null;
        try {
            byte[] bytes = new BASE64Decoder().decodeBuffer(base64.trim());
            stream = new ByteArrayInputStream(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return stream;
    }


    /**
     * 上传本地文件
     *
     * @param bucketName 存储桶
     * @param objectName 对象名称
     * @param fileName   本地文件路径
     * @return
     */
    @SneakyThrows(Exception.class)
    public ObjectWriteResponse uploadFile(String bucketName, String objectName, String fileName) {
        return minioClient.uploadObject(
                UploadObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .filename(fileName)
                        .build());
    }

    /**
     * 通过流上传文件
     *
     * @param bucketName  存储桶
     * @param objectName  文件对象
     * @param inputStream 文件流
     * @return
     */
    @SneakyThrows(Exception.class)
    public ObjectWriteResponse uploadFile(String bucketName, String objectName, InputStream inputStream) {
        return minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .stream(inputStream, inputStream.available(), -1)
                        .build());
    }

    /**
     * 创建文件夹或目录
     *
     * @param bucketName 存储桶
     * @param objectName 目录路径
     * @return
     */
    @SneakyThrows(Exception.class)
    public ObjectWriteResponse createDir(String bucketName, String objectName) {
        return minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .stream(new ByteArrayInputStream(new byte[]{}), 0, -1)
                        .build());
    }

    /**
     * 获取文件信息, 如果抛出异常则说明文件不存在
     *
     * @param bucketName 存储桶
     * @param objectName 文件名称
     * @return
     */
    @SneakyThrows(Exception.class)
    public String getFileStatusInfo(String bucketName, String objectName) {
        return minioClient.statObject(
                StatObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .build()).toString();
    }

    /**
     * 拷贝文件
     *
     * @param bucketName    存储桶
     * @param objectName    文件名
     * @param srcBucketName 目标存储桶
     * @param srcObjectName 目标文件名
     */
    @SneakyThrows(Exception.class)
    public ObjectWriteResponse copyFile(String bucketName, String objectName, String srcBucketName, String srcObjectName) {
        return minioClient.copyObject(
                CopyObjectArgs.builder()
                        .source(CopySource.builder().bucket(bucketName).object(objectName).build())
                        .bucket(srcBucketName)
                        .object(srcObjectName)
                        .build());
    }

    /**
     * 删除文件
     *
     * @param bucketName 存储桶
     * @param objectName 文件名称
     */
    @SneakyThrows(Exception.class)
    public void removeFile(String bucketName, String objectName) {
        minioClient.removeObject(
                RemoveObjectArgs.builder()
                        .bucket(bucketName)
                        .object(objectName)
                        .build());
    }

    /**
     * 批量删除文件
     *
     * @param bucketName 存储桶
     * @param keys       需要删除的文件列表
     * @return
     */
    public void removeFiles(String bucketName, List<String> keys) {
        List<DeleteObject> objects = new LinkedList<>();
        keys.forEach(s -> {
            objects.add(new DeleteObject(s));
            try {
                removeFile(bucketName, s);
            } catch (Exception e) {
                log.error("[Minio工具类]>>>> 批量删除文件，异常：", e);
            }
        });
    }

    /**
     * 获取文件外链
     *
     * @param bucketName 存储桶
     * @param objectName 文件名
     * @param expires    过期时间 <=7 秒 （外链有效时间（单位：秒））
     * @return url
     */
    @SneakyThrows(Exception.class)
    public String getPresignedObjectUrl(String bucketName, String objectName, Integer expires) {
        GetPresignedObjectUrlArgs args = GetPresignedObjectUrlArgs.builder().expiry(expires).bucket(bucketName).object(objectName).build();
        return minioClient.getPresignedObjectUrl(args);
    }

    /**
     * 获得文件外链
     *
     * @param bucketName
     * @param objectName
     * @return url
     */
    @SneakyThrows(Exception.class)
    public String getPresignedObjectUrl(String bucketName, String objectName) {
        GetPresignedObjectUrlArgs args = GetPresignedObjectUrlArgs.builder()
                .bucket(bucketName)
                .object(objectName)
                .method(Method.GET).build();
        return minioClient.getPresignedObjectUrl(args);
    }

    /**
     * 将URLDecoder编码转成UTF8
     *
     * @param str
     * @return
     * @throws UnsupportedEncodingException
     */
    public String getUtf8ByURLDecoder(String str) throws UnsupportedEncodingException {
        String url = str.replaceAll("%(?![0-9a-fA-F]{2})", "%25");
        return URLDecoder.decode(url, "UTF-8");
    }
}
```

### 5.5、创建 Controller

```java
@Slf4j
@RestController
@RequestMapping("/oss")
public class OSSController {

    @Autowired
    private MinioUtils minioUtils;

    @Autowired
    private MinioConfig minioConfig;

    /**
     * 文件上传
     *
     * @param file
     */
    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file) {
        try {
            //文件名
            String fileName = file.getOriginalFilename();
            String newFileName = System.currentTimeMillis() + "." + StringUtils.substringAfterLast(fileName, ".");
            //类型
            String contentType = file.getContentType();
            minioUtils.uploadFile(minioConfig.getBucketName(), file, newFileName, contentType);
            return "上传成功";
        } catch (Exception e) {
            log.error("上传失败");
            return "上传失败";
        }
    }

    /**
     * 删除
     *
     * @param fileName
     */
    @DeleteMapping("/")
    public void delete(@RequestParam("fileName") String fileName) {
        minioUtils.removeFile(minioConfig.getBucketName(), fileName);
    }

    /**
     * 获取文件信息
     *
     * @param fileName
     * @return
     */
    @GetMapping("/info")
    public String getFileStatusInfo(@RequestParam("fileName") String fileName) {
        return minioUtils.getFileStatusInfo(minioConfig.getBucketName(), fileName);
    }

    /**
     * 获取文件外链
     *
     * @param fileName
     * @return
     */
    @GetMapping("/url")
    public String getPresignedObjectUrl(@RequestParam("fileName") String fileName) {
        return minioUtils.getPresignedObjectUrl(minioConfig.getBucketName(), fileName);
    }

    /**
     * 文件下载
     *
     * @param fileName
     * @param response
     */
    @GetMapping("/download")
    public void download(@RequestParam("fileName") String fileName, HttpServletResponse response) {
        try {
            InputStream fileInputStream = minioUtils.getObject(minioConfig.getBucketName(), fileName);
            response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
            response.setContentType("application/force-download");
            response.setCharacterEncoding("UTF-8");
            IOUtils.copy(fileInputStream, response.getOutputStream());
        } catch (Exception e) {
            log.error("下载失败");
        }
    }

}

```

### 6、测试验证

### 6.1、文件上传

使用 Postman 调用<http://localhost:3333/oss/upload> 接口，选择某个文件测试上传功能，如下图所示：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-61.png)

### 6.2、文件下载

在浏览器中，调用<http://localhost:3333/oss/download?fileName=1701436432918.gif> 接口，验证文件下载接口，如下图所示：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1703602221163-62.png)
