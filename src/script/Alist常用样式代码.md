---
author: xlc520
title: Alist常用样式代码
excerpt: 
description: 
date: 2022-10-21
category: Script
tag: 
- Script
- Alist
article: true
dateline: true
icon: script
---

# Alist 常用样式代码

## 黑猫

```css
 
<!--看板娘 - 黑猫-->
    <script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
    <script>
      L2Dwidget.init({
        "model": {
          jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json", <!--这里改模型，前面后面都要改-->
          "scale": 1
        },
        "display": {
          "position": "left", <!--设置看板娘的上下左右位置-->
          "width": 100,
          "height": 200,
          "hOffset": 0,
          "vOffset": 0
        },
        "mobile": {
          "show": true,
          "scale": 0.5
        },
        "react": {
          "opacityDefault": 0.7, <!--设置透明度-->
          "opacityOnHover": 0.2
        }
      });
      window.onload = function() {
        $("#live2dcanvas").attr("style", "position: fixed; opacity: 0.7; left: 70px; bottom: 0px; z-index: 1; pointer-events: none;")
      }
    </script>
  </div>
```

## 白猫

```css
<!--白小猫咪-->
<script src=" https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
<script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.0.min.js"></script>
<script>
L2Dwidget.init({
"model": {
jsonPath: " https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json" ,
"scale": 1
},
"display": {
"position": "right",
"width": 100,
"height": 200,
"hOffset": -20,
"vOffset": -20
},
"mobile": {
"show": true,
"scale": 0.5
},
"react": {
"opacityDefault": 1,
"opacityOnHover": 1
}
});
</script>
```

## 鼠标点击出随机颜色的爱心

```html
<!--鼠标点击出随机颜色的爱心-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
 
<body>
    <!-- 网页鼠标点击特效（爱心） -->
    <script type="text/javascript">
         ! function (e, t, a) {
            function r() {
                for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[
                        e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x +
                    "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e]
                    .scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
                requestAnimationFrame(r)
            }
            function n() {
                var t = "function" == typeof e.onclick && e.onclick;
                e.onclick = function (e) {
                    t && t(), o(e)
                }
            }
 
            function o(e) {
                var a = t.createElement("div");
                a.className = "heart", s.push({
                    el: a,
                    x: e.clientX - 5,
                    y: e.clientY - 5,
                    scale: 1,
                    alpha: 1,
                    color: c()
                }), t.body.appendChild(a)
            }
 
            function i(e) {
                var a = t.createElement("style");
                a.type = "text/css";
                try {
                    a.appendChild(t.createTextNode(e))
                } catch (t) {
                    a.styleSheet.cssText = e
                }
                t.getElementsByTagName("head")[0].appendChild(a)
            }
 
            function c() {
                return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math
                    .random()) + ")"
            }
            var s = [];
            e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
                .mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 1e3 / 60)
                }, i(
                    ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
                ), n(), r()
        }(window, document);
    </script>
```

## 隐藏右上角复制直链、下载切换布局等

```css
<!--隐藏右上角-->
<style>
.css-neion{
    display:none;
}
</style>
```

## 全白无框

```css
<!--全白无框-->
<style>
.chakra-ui-light{
  background-color: #FFFFFF;
}
.main-box {
  border-radius: 15px !important;
  box-shadow: unset !important;
}
.chakra-ui-light .main-box {
  background-color: rgba(255,255,255,0.9) !important;
}
.chakra-ui-light .readme-box {
  background-color: rgba(255,255,255,0.9) !important;
}
.readme-box {
  border-radius: 15px !important;
  box-shadow: unset !important;
}
</style>
```

## 备案信息

```css
<!--备案信息--> 
</style>
    <link href="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css" rel=" stylesheet ">
    <div id="customize" style="display:none;
 text-align:center;
 ">
        <br />
        <div style="font-size:13px;
 ">
            <span class="nav-item">
                <a class="nav-link" href="http://lizong.top/" target="_blank">
                    <i class="fa-solid fa-copyright" style="color:#9932CC" aria-hidden="true"></i>
                     2022 LIZONG.TOP |
                </a>
            </span>
            <span class="nav-item">
                <a class="nav-link" href="https://beian.miit.gov.cn/" target="_blank">
                    <i class="fa fa-balance-scale" style="color:#9932CC;
 " aria-hidden="true"></i>
                     鄂ICP备xxxxxx号-x |
                </a>
            </span>
            <span class="nav-item">
                <a class="nav-link" href="https://github.com/Xhofe/alist" target="_blank">
                    <i class="fa fa-heart" style="color:#9932CC;
 " aria-hidden="true"></i>
                     由Alist驱动
                </a>
            </span>
        </div>
        <br />
    </div>
    <script>
        let interval = setInterval(() => {
 if (document.querySelector(".footer")) {
 document.querySelector("#customize").style.display = "";
 clearInterval(interval);
}
},200);
 </script>
</font>
```

## 底部网站运行时间

```css
<!--开站时间开始-->       
<center>
        <br />
  </span>
            <span class="nav-item">
                <a class="nav-link" href="https://nodepanels.com/share/server?auth=c3ce0f96aab24a63b88044dede67165d&key=MzkxZjI4OTI0ODJmNDg5MWFjZDFlZDI2ZmUwYTJiYTR8bDEzMTQ0QHFxLmNvbXxqYzhidHd4bmZueDQ=" target="_blank">
             <span id="timeDate">载入天数...</span><span id="times">载入时分秒...</span> <script language="javascript"> 
    var now = new Date();
    function createtime(){
        var grt= new Date("04/17/2022 00:00:00");/*---这里是网站的启用时间--*/
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;}
        minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("timeDate").innerHTML = "⏱️本站已稳定运行"+dnum+"天";
        document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
    }
    setInterval("createtime()",250); 
</script> 
```

## 自定义背景：替换 url 即可

```css
<!--自定义背景-->
<style>
.chakra-ui-light{
  background-image: url("https://www.dmoe.cc/random.php") !important;
  background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position-x:center;
}
.main-box {
  border-radius: 15px !important;
}
.chakra-ui-light .main-box {
  background-color: #ffffff70 !important;
}
.chakra-ui-light .readme-box {
  background-color: white !important;
}
.readme-box {
  border-radius: 15px !important;
 
}
</style>
```

**不建议删除底部文字 请尊重开发者的劳动成果，谢谢**

## **去掉底部的管理文字**

```css
<!---去掉底部管理--->
<style>
.footer span,.footer a:nth-of-type(2){
  display:none;
}
</style>
```

## 去掉底部的 Powered by Alist

```css
<!--去掉底部Powered by Alist--->
<style>
.footer span,.footer a:nth-of-type(1){
  display:none;
}
</style>
```

## 去掉底部`Powered by Alist`和管理文字

```css
<!---去掉底部文字--->
<style
type="text/css"> .footer { 
display: none !important; } 
</style>
```
