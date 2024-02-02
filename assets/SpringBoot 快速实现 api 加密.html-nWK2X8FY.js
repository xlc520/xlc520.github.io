import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-aq8PVJpR.js";const s={},t=a(`<h1 id="springboot-快速实现-api-加密" tabindex="-1"><a class="header-anchor" href="#springboot-快速实现-api-加密"><span>SpringBoot 快速实现 api 加密</span></a></h1><p>在项目中，为了保证数据的安全，我们常常会对传递的数据进行加密。常用的加密算法包括对称加密（AES）和非对称加密（RSA），博主选取码云上最简单的API加密项目进行下面的讲解。</p><blockquote><p>https://gitee.com/isuperag/rsa-encrypt-body-spring-boot</p></blockquote><h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h3><p>该项目使用RSA加密方式对API接口返回的数据加密，让API数据更加安全。别人无法对提供的数据进行破解。Spring Boot接口加密，可以对返回值、参数值通过注解的方式自动加解密 。</p><h3 id="什么是rsa加密" tabindex="-1"><a class="header-anchor" href="#什么是rsa加密"><span>什么是RSA加密</span></a></h3><p>首先我们当然是了解RSA加密</p><p>RSA加密是一种非对称加密。可以在不直接传递密钥的情况下，完成解密。这能够确保信息的安全性，避免了直接传递密钥所造成的被破解的风险。是由一对密钥来进行加解密的过程，分别称为公钥和私钥。两者之间有数学相关，该加密算法的原理就是对一极大整数做因数分解的困难性来保证安全性。通常个人保存私钥，公钥是公开的（可能同时多人持有）。</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://static.xlc520.tk/blogImage/640-1698158560240-0.png" alt="图片" loading="lazy"></span></a></h1><p><strong>举例子大法</strong></p><p>加密和签名都是为了安全性考虑，但略有不同。常有人问加密和签名是用私钥还是公钥？其实都是对加密和签名的作用有所混淆。简单的说，加密是为了防止信息被泄露，而签名是为了防止信息被篡改。这里举2个例子说明。</p><p>**「第一个场景：」**战场上，B要给A传递一条消息，内容为某一指令。</p><p>RSA的加密过程如下：</p><ul><li>A生成一对密钥（公钥和私钥），私钥不公开，A自己保留。公钥为公开的，任何人可以获取。</li><li>A传递自己的公钥给B，B用A的公钥对消息进行加密。</li><li>A接收到B加密的消息，利用A自己的私钥对消息进行解密。</li></ul><p>在这个过程中，只有2次传递过程，第一次是A传递公钥给B，第二次是B传递加密消息给A，即使都被敌方截获，也没有危险性，因为只有A的私钥才能对消息进行解密，防止了消息内容的泄露。</p><p>**「第二个场景：」**A收到B发的消息后，需要进行回复“收到”。</p><p>RSA签名的过程如下：</p><ul><li>A生成一对密钥（公钥和私钥），私钥不公开，A自己保留。公钥为公开的，任何人可以获取。</li><li>A用自己的私钥对消息加签，形成签名，并将加签的消息和消息本身一起传递给B。</li><li>B收到消息后，在获取A的公钥进行验签，如果验签出来的内容与消息本身一致，证明消息是A回复的。</li></ul><p>在这个过程中，只有2次传递过程，第一次是A传递加签的消息和消息本身给B，第二次是B获取A的公钥，即使都被敌方截获，也没有危险性，因为只有A的私钥才能对消息进行签名，即使知道了消息内容，也无法伪造带签名的回复给B，防止了消息内容的篡改。</p><p>但是，综合两个场景你会发现，第一个场景虽然被截获的消息没有泄露，但是可以利用截获的公钥，将假指令进行加密，然后传递给A。第二个场景虽然截获的消息不能被篡改，但是消息的内容可以利用公钥验签来获得，并不能防止泄露。所以在实际应用中，要根据情况使用，也可以同时使用加密和签名，比如A和B都有一套自己的公钥和私钥，当A要给B发送消息时，先用B的公钥对消息加密，再对加密的消息使用A的私钥加签名，达到既不泄露也不被篡改，更能保证消息的安全性。</p><h3 id="加密实战" tabindex="-1"><a class="header-anchor" href="#加密实战"><span>加密实战</span></a></h3><p>博主你哔哩哔哩这么多，我已经知道了RSA是干什么了。不就是 公钥加密、私钥解密、私钥签名、公钥验签</p><h4 id="实战准备" tabindex="-1"><a class="header-anchor" href="#实战准备"><span>实战准备</span></a></h4><h5 id="_1、新建一个springboot项目" tabindex="-1"><a class="header-anchor" href="#_1、新建一个springboot项目"><span>1、新建一个springboot项目</span></a></h5><p>springboot_api_encryption</p><h5 id="_2、引入maven依来" tabindex="-1"><a class="header-anchor" href="#_2、引入maven依来"><span>2、引入maven依来</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.shuibo&lt;/groupId&gt;
    &lt;artifactId&gt;rsa-encrypt-body-spring-boot&lt;/artifactId&gt;
    &lt;version&gt;1.0.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、启动类application中添加-enablesecurity注解" tabindex="-1"><a class="header-anchor" href="#_3、启动类application中添加-enablesecurity注解"><span>3、启动类Application中添加@EnableSecurity注解</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@SpringBootApplication
@EnableSecurity
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、在application-yml或者application-properties中添加rsa公钥及私钥" tabindex="-1"><a class="header-anchor" href="#_4、在application-yml或者application-properties中添加rsa公钥及私钥"><span>4、在application.yml或者application.properties中添加RSA公钥及私钥</span></a></h5><p>公钥私钥的生成文章后面会放出生成工具</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rsa:
  encrypt:
    open: false # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、对controller-里面的api方法进行加密" tabindex="-1"><a class="header-anchor" href="#_5、对controller-里面的api方法进行加密"><span>5、对Controller 里面的API方法进行加密</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Encrypt
@GetMapping(&quot;/encryption&quot;)
public TestBean encryption(){
    TestBean testBean = new TestBean();
    testBean.setName(&quot;shuibo.cn&quot;);
    testBean.setAge(18);
    return testBean;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6、对传过来的加密参数解密" tabindex="-1"><a class="header-anchor" href="#_6、对传过来的加密参数解密"><span>6、对传过来的加密参数解密</span></a></h5><p>其他java端程序可以用注解，如果是vue，请用RSA密钥解密</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Decrypt
@PostMapping(&quot;/decryption&quot;)
public String Decryption(@RequestBody TestBean testBean){
    return testBean.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="真刀真枪" tabindex="-1"><a class="header-anchor" href="#真刀真枪"><span>真刀真枪</span></a></h4><h5 id="_1、引入maven" tabindex="-1"><a class="header-anchor" href="#_1、引入maven"><span>1、引入maven</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560239-1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_2、启动类添加注解" tabindex="-1"><a class="header-anchor" href="#_2、启动类添加注解"><span>2、启动类添加注解</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-2.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_3、yml添加配置密钥" tabindex="-1"><a class="header-anchor" href="#_3、yml添加配置密钥"><span>3、YML添加配置密钥</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-3.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_4、创建一个实体类" tabindex="-1"><a class="header-anchor" href="#_4、创建一个实体类"><span>4、创建一个实体类</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-4.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_5、写一个对外api接口" tabindex="-1"><a class="header-anchor" href="#_5、写一个对外api接口"><span>5、写一个对外API接口</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-5.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_6、启动项目" tabindex="-1"><a class="header-anchor" href="#_6、启动项目"><span>6、启动项目</span></a></h5><blockquote><p>❝</p><p>请求地址: http://localhost:8080/encryption</p><p>❞</p></blockquote><p>我们看到返回的数据未加密</p><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-6.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_7、修改" tabindex="-1"><a class="header-anchor" href="#_7、修改"><span>7、修改</span></a></h5><p>修改open为true 打开加密</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rsa:
  encrypt:
    open: true # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8、再次重启项目" tabindex="-1"><a class="header-anchor" href="#_8、再次重启项目"><span>8、再次重启项目</span></a></h5><blockquote><p>❝</p><p>请求地址: http://localhost:8080/encryption</p><p>❞</p></blockquote><p>我们看到返回的数据已加密</p><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-7.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_9、加密日志" tabindex="-1"><a class="header-anchor" href="#_9、加密日志"><span>9、加密日志</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-8.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="解密实战" tabindex="-1"><a class="header-anchor" href="#解密实战"><span>解密实战</span></a></h3><p>如果是其他springboot项目，跟前面一样。我们这儿就当客户端是springboot项目，其他的请使用RSA解密协议解密！</p><p>服务端有私密钥、公密钥</p><p>前端只需要公密钥就可以</p><h4 id="实战准备-1" tabindex="-1"><a class="header-anchor" href="#实战准备-1"><span>实战准备</span></a></h4><p>在原来的springboot基础上写一份解密方法</p><h5 id="_1、前端js解密方法" tabindex="-1"><a class="header-anchor" href="#_1、前端js解密方法"><span>1、前端js解密方法</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、后台增加解密方法" tabindex="-1"><a class="header-anchor" href="#_2、后台增加解密方法"><span>2、后台增加解密方法</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 解密
 * @param user
 * @return
 */
@PostMapping(&quot;/decryption&quot;)
@Decrypt
@ResponseBody
public String Decryption(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、js方法" tabindex="-1"><a class="header-anchor" href="#_3、js方法"><span>3、js方法</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#公钥
 var PUBLIC_KEY = &#39;MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAobhGH4WMwMvJRUlTxWrCVIOQtsHijAxPJNvAWAgq80ADpFEWrpbcGB9cKqp6XHRH4k/CVtCUZ7jm9UKwhaeAm18sKtcwe+M8JFNX6FSHpgde0o8C9S/QpcmLxf4iN7nGZ7P3ZTvMdmKUcdRMsVQnsydG2Bj6gRxP2+kexEebTeODbdM7dHlkxAL0RxGWmX/ZOBzsoWZw2gKcC0vxwyIZBGHUdImG2T3nEA+VMfK2Yqv3uSYukmlKP+0mjfhrTtLFDuTV1VER9BfryBMvpQCxLO4pqgZnXPd+SOQcZHZ2OL0wqo5OX1+GPYx7TNxz5Qi76pK//T2mH7s6X/BuyT21HQIDAQAB&#39;;

/**
 * 加密方法
 * @returns {PromiseLike&lt;ArrayBuffer&gt;}
 * @constructor
 */
function RSA_encryption(jsonData) {
 var encrypt = new JSEncrypt();
 encrypt.setPublicKey(&#39;-----BEGIN PUBLIC KEY-----&#39; + PUBLIC_KEY + &#39;-----END PUBLIC KEY-----&#39;);
 var encrypted = encrypt.encrypt(JSON.stringify(jsonData));
 console.log(&#39;加密前数据:%o&#39;, str);
 console.log(&#39;加密后数据:%o&#39;, encrypted);
 return encrypted;
}


/**
 * 提交方法
 */
function tijiao() {
 var str = {
  &quot;name&quot;:&quot;1223334&quot;,
  &quot;password&quot;:&quot;asd&quot;,
  age:1
 };
  $.ajax({
   url: &quot;/decryption&quot;,
   type : &quot;POST&quot;,
   contentType: &quot;application/json;charset=utf-8&quot;,
   data : RSA_encryption(str) ,
   success : function(data) {
    alert(data);
   }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="真刀真枪-1" tabindex="-1"><a class="header-anchor" href="#真刀真枪-1"><span>真刀真枪</span></a></h4><h5 id="_1、-controller添加解密方法接口" tabindex="-1"><a class="header-anchor" href="#_1、-controller添加解密方法接口"><span>1、 Controller添加解密方法接口</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-9.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_2、前端页面引入js以及方法" tabindex="-1"><a class="header-anchor" href="#_2、前端页面引入js以及方法"><span>2、前端页面引入js以及方法</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
加密传后端，后端解密
&lt;button id=&quot;jiami&quot; onclick=&quot;tijiao()&quot;&gt;加密传后端&lt;/button&gt;
&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    var PUBLIC_KEY = &#39;MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAobhGH4WMwMvJRUlTxWrCVIOQtsHijAxPJNvAWAgq80ADpFEWrpbcGB9cKqp6XHRH4k/CVtCUZ7jm9UKwhaeAm18sKtcwe+M8JFNX6FSHpgde0o8C9S/QpcmLxf4iN7nGZ7P3ZTvMdmKUcdRMsVQnsydG2Bj6gRxP2+kexEebTeODbdM7dHlkxAL0RxGWmX/ZOBzsoWZw2gKcC0vxwyIZBGHUdImG2T3nEA+VMfK2Yqv3uSYukmlKP+0mjfhrTtLFDuTV1VER9BfryBMvpQCxLO4pqgZnXPd+SOQcZHZ2OL0wqo5OX1+GPYx7TNxz5Qi76pK//T2mH7s6X/BuyT21HQIDAQAB&#39;;

    /**
     * 加密方法
     * @returns {PromiseLike&lt;ArrayBuffer&gt;}
     * @constructor
     */
    function RSA_encryption(jsonData) {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(&#39;-----BEGIN PUBLIC KEY-----&#39; + PUBLIC_KEY + &#39;-----END PUBLIC KEY-----&#39;);
        var encrypted = encrypt.encrypt(JSON.stringify(jsonData));
        console.log(&#39;加密前数据:%o&#39;, jsonData);
        console.log(&#39;加密后数据:%o&#39;, encrypted);
        return encrypted;
    }

    /**
     * 提交方法
     */
    function tijiao() {
        var str = {
            &quot;name&quot;:&quot;1223334&quot;,
            &quot;password&quot;:&quot;asd&quot;,
            age:1
        };
            $.ajax({
                url: &quot;/decryption&quot;,
                type : &quot;POST&quot;,
                contentType: &quot;application/json;charset=utf-8&quot;,
                data : RSA_encryption(str) ,
                success : function(data) {
                    alert(data);
                }
            })
    }

&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、启动访问" tabindex="-1"><a class="header-anchor" href="#_3、启动访问"><span>3、启动访问</span></a></h5><p>http://localhost:8080</p><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-10.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_4、后台解密日志" tabindex="-1"><a class="header-anchor" href="#_4、后台解密日志"><span>4、后台解密日志</span></a></h5><figure><img src="https://static.xlc520.tk/blogImage/640-1698158560240-11.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>经过上面的接口加密解密操作。可以看出我们的接口如果没有公钥、或者私钥别人根本无法解密！这样就对API接口起到了很好的保护作用，防止别人抓包！</p><p>祝大家：每天学习一点，技术成长飞快</p><h4 id="项目坑点" tabindex="-1"><a class="header-anchor" href="#项目坑点"><span>项目坑点</span></a></h4><p>此项目的demo无法访问，难点就在前端如何加密回传到后台解密，此坑我带大家爬出来了！</p><p>以下是主意事项：</p><p>1、主意ajax的 contentType: “application/json;charset=utf-8”</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$.ajax({
    url: &quot;/decryption&quot;,
    type : &quot;POST&quot;,
    contentType: &quot;application/json;charset=utf-8&quot;,
    data : RSA_encryption(str) ,
    success : function(data) {
        alert(data);
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、解密方法必须 @RequestBody</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@PostMapping(&quot;/decryption&quot;)
@Decrypt
@ResponseBody
public String Decryption(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源代码获取：</p><blockquote><p>❝</p><p>https://github.com/pengziliu/GitHub-code-practice</p><p>❞</p></blockquote>`,95),l=[t];function d(r,c){return n(),i("div",null,l)}const u=e(s,[["render",d],["__file","SpringBoot 快速实现 api 加密.html.vue"]]);export{u as default};
