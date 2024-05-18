import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as d,d as e,e as n,b as a,a as s}from"./app-Clq2mtAP.js";const c={},o=e("h1",{id:"springboot-快速实现-api-加密",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springboot-快速实现-api-加密"},[e("span",null,"SpringBoot 快速实现 api 加密")])],-1),p=e("p",null,"在项目中，为了保证数据的安全，我们常常会对传递的数据进行加密。常用的加密算法包括对称加密（AES）和非对称加密（RSA），博主选取码云上最简单的 API 加密项目进行下面的讲解。",-1),u={href:"https://gitee.com/isuperag/rsa-encrypt-body-spring-boot",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h3><p>该项目使用 RSA 加密方式对 API 接口返回的数据加密，让 API 数据更加安全。别人无法对提供的数据进行破解。Spring Boot 接口加密，可以对返回值、参数值通过注解的方式自动加解密 。</p><h3 id="什么是-rsa-加密" tabindex="-1"><a class="header-anchor" href="#什么是-rsa-加密"><span>什么是 RSA 加密</span></a></h3><p>首先我们当然是了解 RSA 加密</p><p>RSA 加密是一种非对称加密。可以在不直接传递密钥的情况下，完成解密。这能够确保信息的安全性，避免了直接传递密钥所造成的被破解的风险。是由一对密钥来进行加解密的过程，分别称为公钥和私钥。两者之间有数学相关，该加密算法的原理就是对一极大整数做因数分解的困难性来保证安全性。通常个人保存私钥，公钥是公开的（可能同时多人持有）。</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-0.png" alt="图片" loading="lazy"></span></a></h1><p><strong>举例子大法</strong></p><p>加密和签名都是为了安全性考虑，但略有不同。常有人问加密和签名是用私钥还是公钥？其实都是对加密和签名的作用有所混淆。简单的说，加密是为了防止信息被泄露，而签名是为了防止信息被篡改。这里举 2 个例子说明。</p><p>**「第一个场景：」**战场上，B 要给 A 传递一条消息，内容为某一指令。</p><p>RSA 的加密过程如下：</p><ul><li>A 生成一对密钥（公钥和私钥），私钥不公开，A 自己保留。公钥为公开的，任何人可以获取。</li><li>A 传递自己的公钥给 B，B 用 A 的公钥对消息进行加密。</li><li>A 接收到 B 加密的消息，利用 A 自己的私钥对消息进行解密。</li></ul><p>在这个过程中，只有 2 次传递过程，第一次是 A 传递公钥给 B，第二次是 B 传递加密消息给 A，即使都被敌方截获，也没有危险性，因为只有 A 的私钥才能对消息进行解密，防止了消息内容的泄露。</p><p>**「第二个场景：」**A 收到 B 发的消息后，需要进行回复“收到”。</p><p>RSA 签名的过程如下：</p><ul><li>A 生成一对密钥（公钥和私钥），私钥不公开，A 自己保留。公钥为公开的，任何人可以获取。</li><li>A 用自己的私钥对消息加签，形成签名，并将加签的消息和消息本身一起传递给 B。</li><li>B 收到消息后，在获取 A 的公钥进行验签，如果验签出来的内容与消息本身一致，证明消息是 A 回复的。</li></ul><p>在这个过程中，只有 2 次传递过程，第一次是 A 传递加签的消息和消息本身给 B，第二次是 B 获取 A 的公钥，即使都被敌方截获，也没有危险性，因为只有 A 的私钥才能对消息进行签名，即使知道了消息内容，也无法伪造带签名的回复给 B，防止了消息内容的篡改。</p><p>但是，综合两个场景你会发现，第一个场景虽然被截获的消息没有泄露，但是可以利用截获的公钥，将假指令进行加密，然后传递给 A。第二个场景虽然截获的消息不能被篡改，但是消息的内容可以利用公钥验签来获得，并不能防止泄露。所以在实际应用中，要根据情况使用，也可以同时使用加密和签名，比如 A 和 B 都有一套自己的公钥和私钥，当 A 要给 B 发送消息时，先用 B 的公钥对消息加密，再对加密的消息使用 A 的私钥加签名，达到既不泄露也不被篡改，更能保证消息的安全性。</p><h3 id="加密实战" tabindex="-1"><a class="header-anchor" href="#加密实战"><span>加密实战</span></a></h3><p>博主你哔哩哔哩这么多，我已经知道了 RSA 是干什么了。不就是 公钥加密、私钥解密、私钥签名、公钥验签</p><h4 id="实战准备" tabindex="-1"><a class="header-anchor" href="#实战准备"><span>实战准备</span></a></h4><h5 id="_1、新建一个-springboot-项目" tabindex="-1"><a class="header-anchor" href="#_1、新建一个-springboot-项目"><span>1、新建一个 springboot 项目</span></a></h5><p>springboot_api_encryption</p><h5 id="_2、引入-maven-依来" tabindex="-1"><a class="header-anchor" href="#_2、引入-maven-依来"><span>2、引入 maven 依来</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.shuibo&lt;/groupId&gt;
    &lt;artifactId&gt;rsa-encrypt-body-spring-boot&lt;/artifactId&gt;
    &lt;version&gt;1.0.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、启动类-application-中添加-enablesecurity-注解" tabindex="-1"><a class="header-anchor" href="#_3、启动类-application-中添加-enablesecurity-注解"><span>3、启动类 Application 中添加@EnableSecurity 注解</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@SpringBootApplication
@EnableSecurity
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、在-application-yml-或者-application-properties-中添加-rsa-公钥及私钥" tabindex="-1"><a class="header-anchor" href="#_4、在-application-yml-或者-application-properties-中添加-rsa-公钥及私钥"><span>4、在 application.yml 或者 application.properties 中添加 RSA 公钥及私钥</span></a></h5><p>公钥私钥的生成文章后面会放出生成工具</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>rsa:
  encrypt:
    open: false # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、对-controller-里面的-api-方法进行加密" tabindex="-1"><a class="header-anchor" href="#_5、对-controller-里面的-api-方法进行加密"><span>5、对 Controller 里面的 API 方法进行加密</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Encrypt
@GetMapping(&quot;/encryption&quot;)
public TestBean encryption(){
    TestBean testBean = new TestBean();
    testBean.setName(&quot;shuibo.cn&quot;);
    testBean.setAge(18);
    return testBean;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6、对传过来的加密参数解密" tabindex="-1"><a class="header-anchor" href="#_6、对传过来的加密参数解密"><span>6、对传过来的加密参数解密</span></a></h5><p>其他 java 端程序可以用注解，如果是 vue，请用 RSA 密钥解密</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Decrypt
@PostMapping(&quot;/decryption&quot;)
public String Decryption(@RequestBody TestBean testBean){
    return testBean.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="真刀真枪" tabindex="-1"><a class="header-anchor" href="#真刀真枪"><span>真刀真枪</span></a></h4><h5 id="_1、引入-maven" tabindex="-1"><a class="header-anchor" href="#_1、引入-maven"><span>1、引入 maven</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560239-1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_2、启动类添加注解" tabindex="-1"><a class="header-anchor" href="#_2、启动类添加注解"><span>2、启动类添加注解</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-2.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_3、yml-添加配置密钥" tabindex="-1"><a class="header-anchor" href="#_3、yml-添加配置密钥"><span>3、YML 添加配置密钥</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-3.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_4、创建一个实体类" tabindex="-1"><a class="header-anchor" href="#_4、创建一个实体类"><span>4、创建一个实体类</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-4.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_5、写一个对外-api-接口" tabindex="-1"><a class="header-anchor" href="#_5、写一个对外-api-接口"><span>5、写一个对外 API 接口</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-5.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_6、启动项目" tabindex="-1"><a class="header-anchor" href="#_6、启动项目"><span>6、启动项目</span></a></h5>`,46),b=e("p",null,"❝",-1),g={href:"http://localhost:8080/encryption",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"❞",-1),h=s(`<p>我们看到返回的数据未加密</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-6.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_7、修改" tabindex="-1"><a class="header-anchor" href="#_7、修改"><span>7、修改</span></a></h5><p>修改 open 为 true 打开加密</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>rsa:
  encrypt:
    open: true # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8、再次重启项目" tabindex="-1"><a class="header-anchor" href="#_8、再次重启项目"><span>8、再次重启项目</span></a></h5>`,6),y=e("p",null,"❝",-1),f={href:"http://localhost:8080/encryption",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"❞",-1),_=s(`<p>我们看到返回的数据已加密</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-7.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_9、加密日志" tabindex="-1"><a class="header-anchor" href="#_9、加密日志"><span>9、加密日志</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-8.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="解密实战" tabindex="-1"><a class="header-anchor" href="#解密实战"><span>解密实战</span></a></h3><p>如果是其他 springboot 项目，跟前面一样。我们这儿就当客户端是 springboot 项目，其他的请使用 RSA 解密协议解密！</p><p>服务端有私密钥、公密钥</p><p>前端只需要公密钥就可以</p><h4 id="实战准备-1" tabindex="-1"><a class="header-anchor" href="#实战准备-1"><span>实战准备</span></a></h4><p>在原来的 springboot 基础上写一份解密方法</p><h5 id="_1、前端-js-解密方法" tabindex="-1"><a class="header-anchor" href="#_1、前端-js-解密方法"><span>1、前端 js 解密方法</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、后台增加解密方法" tabindex="-1"><a class="header-anchor" href="#_2、后台增加解密方法"><span>2、后台增加解密方法</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、js-方法" tabindex="-1"><a class="header-anchor" href="#_3、js-方法"><span>3、js 方法</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#公钥
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="真刀真枪-1" tabindex="-1"><a class="header-anchor" href="#真刀真枪-1"><span>真刀真枪</span></a></h4><h5 id="_1、-controller-添加解密方法接口" tabindex="-1"><a class="header-anchor" href="#_1、-controller-添加解密方法接口"><span>1、 Controller 添加解密方法接口</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-9.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_2、前端页面引入-js-以及方法" tabindex="-1"><a class="header-anchor" href="#_2、前端页面引入-js-以及方法"><span>2、前端页面引入 js 以及方法</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>&lt;!DOCTYPE html&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、启动访问" tabindex="-1"><a class="header-anchor" href="#_3、启动访问"><span>3、启动访问</span></a></h5>`,22),A={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},B=s(`<figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-10.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_4、后台解密日志" tabindex="-1"><a class="header-anchor" href="#_4、后台解密日志"><span>4、后台解密日志</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-11.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>经过上面的接口加密解密操作。可以看出我们的接口如果没有公钥、或者私钥别人根本无法解密！这样就对 API 接口起到了很好的保护作用，防止别人抓包！</p><p>祝大家：每天学习一点，技术成长飞快</p><h4 id="项目坑点" tabindex="-1"><a class="header-anchor" href="#项目坑点"><span>项目坑点</span></a></h4><p>此项目的 demo 无法访问，难点就在前端如何加密回传到后台解密，此坑我带大家爬出来了！</p><p>以下是主意事项：</p><p>1、主意 ajax 的 contentType: “application/json;charset=utf-8”</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>$.ajax({
    url: &quot;/decryption&quot;,
    type : &quot;POST&quot;,
    contentType: &quot;application/json;charset=utf-8&quot;,
    data : RSA_encryption(str) ,
    success : function(data) {
        alert(data);
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、解密方法必须 @RequestBody</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@PostMapping(&quot;/decryption&quot;)
@Decrypt
@ResponseBody
public String Decryption(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源代码获取：</p>`,14),q=e("p",null,"❝",-1),S={href:"https://github.com/pengziliu/GitHub-code-practice",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"❞",-1);function E(j,w){const i=l("ExternalLinkIcon");return r(),d("div",null,[o,p,e("blockquote",null,[e("p",null,[e("a",u,[n("https://gitee.com/isuperag/rsa-encrypt-body-spring-boot"),a(i)])])]),v,e("blockquote",null,[b,e("p",null,[n("请求地址: "),e("a",g,[n("http://localhost:8080/encryption"),a(i)])]),m]),h,e("blockquote",null,[y,e("p",null,[n("请求地址: "),e("a",f,[n("http://localhost:8080/encryption"),a(i)])]),x]),_,e("p",null,[e("a",A,[n("http://localhost:8080"),a(i)])]),B,e("blockquote",null,[q,e("p",null,[e("a",S,[n("https://github.com/pengziliu/GitHub-code-practice"),a(i)])]),k])])}const P=t(c,[["render",E],["__file","SpringBoot 快速实现 api 加密.html.vue"]]),T=JSON.parse('{"path":"/dev/SpringBoot%20%E5%BF%AB%E9%80%9F%E5%AE%9E%E7%8E%B0%20api%20%E5%8A%A0%E5%AF%86.html","title":"SpringBoot 快速实现 api 加密","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot 快速实现 api 加密","excerpt":null,"description":"SpringBoot 快速实现 api 加密 在项目中，为了保证数据的安全，我们常常会对传递的数据进行加密。常用的加密算法包括对称加密（AES）和非对称加密（RSA），博主选取码云上最简单的 API 加密项目进行下面的讲解。 https://gitee.com/isuperag/rsa-encrypt-body-spring-boot 项目介绍 该项目...","date":"2023-10-25T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%20%E5%BF%AB%E9%80%9F%E5%AE%9E%E7%8E%B0%20api%20%E5%8A%A0%E5%AF%86.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"SpringBoot 快速实现 api 加密"}],["meta",{"property":"og:description","content":"SpringBoot 快速实现 api 加密 在项目中，为了保证数据的安全，我们常常会对传递的数据进行加密。常用的加密算法包括对称加密（AES）和非对称加密（RSA），博主选取码云上最简单的 API 加密项目进行下面的讲解。 https://gitee.com/isuperag/rsa-encrypt-body-spring-boot 项目介绍 该项目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 快速实现 api 加密\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-0.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560239-1.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-2.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-3.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-4.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-5.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-6.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-7.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-8.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-9.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-10.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1698158560240-11.png\\"],\\"datePublished\\":\\"2023-10-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"项目介绍","slug":"项目介绍","link":"#项目介绍","children":[]},{"level":3,"title":"什么是 RSA 加密","slug":"什么是-rsa-加密","link":"#什么是-rsa-加密","children":[]},{"level":3,"title":"加密实战","slug":"加密实战","link":"#加密实战","children":[]},{"level":3,"title":"解密实战","slug":"解密实战","link":"#解密实战","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1699443576000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":4}]},"readingTime":{"minutes":7.24,"words":2171},"filePathRelative":"dev/SpringBoot 快速实现 api 加密.md","localizedDate":"2023年10月25日","autoDesc":true}');export{P as comp,T as data};
