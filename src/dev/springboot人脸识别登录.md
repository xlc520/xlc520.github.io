---
author: xlc520
title: SpringBoot项目中引用百度云人脸识别功能实现人脸识别登录
description: 
date: 2022-05-20
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# SpringBoot项目中引用百度云人脸识别功能实现人脸识别登录

**需求分析：**

一、人脸注册

step1：人像采集。在注册页面上用html中video组件和js调用笔记本摄像头，并抓取人像图片。没有摄像头的笔记本、台式机的童鞋告辞吧，走好不送。。。

step2：人像上传至项目文件夹。将在页面采集到的人像数据转换成bash64字符传输到web后台，在后台将bash64转换成图片上传至项目文件夹。

step3：将用户的注册信息写入数据库，用户的照片使用路径存储。

step4：将采集到的人像信息（bash64）上传至百度云的人脸识别云端服务器。ps这块实现也可离线私有化处理方案，有兴趣的童鞋可自行研究。

二、人脸登录

step1：人像采集。在登录页面上用html中video组件和js调用笔记本摄像头，并抓取人像图片。

step2：人像数据传输。抓取的人脸图片信息回传至web后台。

step3：人像比对。在web后台实例化并调用百度云人脸识别的sdk，将登录页面采集到的图像数据和注册的图像信息相比对（这块是百度云人脸识别解决方案实现的，也是最牛B的地方），返回的比分大于95分即可实现登录。

**具体实现：**

好了，前言和需求分析也哔哔了这么久了，接下来是实现和上代码了。

一、人脸注册

前端页面代码

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
 <style type="text/css">
   /**解决浏览器兼容性问题**/
  *{margin: 0;padding: 0;}
  html,body{width: 100%;height: 100%;}/**/
  body{background: url(img/bg03.jpg?watermark/2/text/5YWs5LyX5Y-377yaSmF2YeWfuuWfug/font/5a6L5L2T/fontsize/400/fill/cmVk) no-repeat center;}
  h1{color: #fff;text-align: center;line-height: 80px;}
  .media{width: 534px;height: 400px;margin: 40px auto 0;
    }
  #register{width: 200px;height:50px;background-color: #2196f3; margin: 60px auto 0;
  text-align: center;line-height: 50px;color: #fff;border-radius: 10px;}
  #canvas{display: none;}
  #shuru{width: 200px;height:50px;background-color: #2196f3; margin: 20px auto 0;}
 </style>
</head>
<body>
 <h1>百度云人脸注册</h1>
 <div id="shuru">
 用户名：
 <input type="text" name="username" id="username"/>
 </div>
 
 <div class="media">
  <video id="video" width="450" height="300" src="" autoplay></video>
  <canvas id="canvas" width="450" height="300"></canvas>
  
 </div>
 <button id="register" >确定注册</button>
 <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
 <script type="text/javascript">
 /**调用摄像头，获取媒体视频流**/
 var video = document.getElementById('video');
 //返回画布二维画图环境
 var userContext = canvas.getContext("2d");
 var getUserMedia = 
  //浏览器兼容,表示在火狐、Google、IE等浏览器都可正常支持
  (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
  //getUserMedia.call(要调用的对象，约束条件，调用成功的函数，调用失败的函数)
  getUserMedia.call(navigator,{video: true,audio: false},function(localMediaStream){
   //获取摄像头捕捉的视频流
   video.srcObject=localMediaStream;
  },function(e){
   console.log("获取摄像头失败！！")
  });
 //点击按钮注册事件
  var btn = document.getElementById("register");
 
 btn.onclick = function () {
  var username = $("#username").val();
  alert($("#username").val());
   if(username != null){
    //点击按钮时拿到登陆者面部信息
             userContext.drawImage(video,0,0,450,300);
             var userImgSrc = document.getElementById("canvas").toDataURL("img/png");
             //拿到bash64格式的照片信息
             var faceBase = userImgSrc.split(",")[1];
             
             //ajax异步请求
             $.ajax({
              url: "register",
              type: "post",
              data: {"faceBase": faceBase,
               "userName": username
              },
              success: function(result){
               if(result === '1'){
                alert("注册成功！！，点击确认跳转至登录页面");
                window.location.href="toLogin";
               }else if(result === '2'){
                alert("您已经注册过啦！！");
               }else{
                alert("系统错误！！");
               }
               
              }
             })
   }else{
    alert("用户名不能为空");
   }
           
       } 
 </script>
</body>
</html>
```



页面截图，本人太帅，先行打码，嘿嘿

![img](https://static.xlc520.tk/blogImage/16532156632002.png)

后台具体代码如下:

```java
private static final String APP_ID = "****";
 
 private static final String API_KEY = "*******";
 
 private static final String SECRET_KEY = "*******";
 
 @Autowired
 private IUserService userService;
 
 
 @RequestMapping(value = "register",method = RequestMethod.POST)
 public String register(String userName,String faceBase) throws IOException {
  if(!StringUtils.isEmpty(userName) && !StringUtils.isEmpty(faceBase)) {
    //文件上传的地址
         String upPath = ResourceUtils.getURL("classpath:").getPath()+"static\\photo";
         //用于查看路径是否正确
         System.out.println(upPath);
         // 图片名称
         String fileName = userName+System.currentTimeMillis() + ".png";
         System.out.println(upPath+"\\"+fileName);
         File file = new File(upPath+"\\"+fileName);
   //初始化百度云的AipFace
   AipFace client = new AipFace(APP_ID, API_KEY, SECRET_KEY);
   
   //往自己demo数据库里插入一条用户数据
   Users user = new Users();
   user.setUserName(userName);
   user.setUserPhoto(upPath+"\\"+fileName);
   Users exitUser = userService.selectUserByName(user);
   if(exitUser != null) { 
    return "2";
   }
   userService.addUsers(user);
   
   
   // 往自己demo服务器里面上传摄像头捕获的图片
   GenerateImage(faceBase, file);
   //向百度云人脸库插入一张人脸
   facesetAddUser(client,faceBase,userName);
  }
  return "1";
  
 }
```

APP_ID 、API_KEY、SECRET_KEY三个参数分别为百度云人脸识别上面的三个数据项，如下图

![img](https://static.xlc520.tk/blogImage/16532156632001.png)

![img](https://static.xlc520.tk/blogImage/16532156632012.png)

 点击完注册按钮后，就会发现。。。

![img](https://static.xlc520.tk/blogImage/16532156632013.png)

![img](https://static.xlc520.tk/blogImage/16532156632014.png)

![img](https://static.xlc520.tk/blogImage/16532156632015.png)

![img](https://static.xlc520.tk/blogImage/16532156632016.png)

到这就算一个用户注册成功了，个人这张大帅脸也算是录进去了，下面就是刷脸登录了。

二、刷脸登录

当我注册完周后就会进入登录页面

![img](https://static.xlc520.tk/blogImage/16532156632017.png)

这时我点击登录按钮，js触发后台方法，具体入下：

```java
@RequestMapping(value = "login",method = RequestMethod.POST)
 public String login(String faceBase) {
  String faceData = faceBase;
  //进行人像数据对比
  AipFace client = new AipFace(APP_ID,API_KEY,SECRET_KEY);
  Double num = verifyUser(faceData,client);
  if(num>95) {
   return "1";
  }else {
   return "2";
  }
  
 }
 
 /**
  * 人脸比对
  * @param imgBash64 照片转bash64格式
  * @param imgType 类型
  * @param groupList 百度云人脸识别用户组
  * @return
  */
 public Double verifyUser(String imgBash64,AipFace client) {
  // 传入可选参数调用接口
     HashMap<String, String> options = new HashMap<String, String>();
     
     JSONObject res = client.search(imgBash64, "BASE64", "user_01", options);
     
     System.out.println(res.toString(2));
     System.out.println(res.getJSONObject("result"));
     System.out.println(res.getJSONObject("result").getJSONArray("user_list"));
     JSONObject user = (JSONObject) res.getJSONObject("result").getJSONArray("user_list").get(0);
     Double score = (Double) user.get("score");
     
  return score;
 }
```

接着我正面面对摄像头，点击登录按钮，就进入了一个大大的success页面

![img](https://static.xlc520.tk/blogImage/16532156632018.png)

我侧脸或者拿照片试一下，不好意思，您老只能是404了

![img](https://static.xlc520.tk/blogImage/16532156632029.png)

以上就是整个实现的思路和一些步骤了，demo涉及的类和页面比较多，不方便一一截图，随后我把资源上传到本站。如有需要可自行下载。

综合而言实现还是比较简单的，牛逼的地方都在人家百度云那边呢，咱们只是根据需求合理利用人家的解决方案罢了。其实如果不是很牛逼的专项技术研发公司，做项目能合理利用别人的产品是最有效率的，项目建设最重要的还是投入产出比嘛。与其自己团队苦苦研究，花点成本买人家的成品直接用它不香吗？