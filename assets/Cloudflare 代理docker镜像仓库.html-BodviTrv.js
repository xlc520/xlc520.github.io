import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as d,c as r,b as a,n as t,g as s,a as o}from"./app-BkZy1zYI.js";const c={},u=o(`<p>前提条件：</p><p>1、一个cloudflare账号</p><p>2、一个域名</p><p>使用 Cloudflare Workers 来部署我们的镜像加速服务，这里我的账号是使用的免费计划，每天100,000次请求，个人用足够了</p><p>首先安装 wrangler 命令行工具 https://developers.cloudflare.com/workers/cli-wrangler/install-update</p><p>安装后执行<code> wrangler login</code> 会自动跳转到浏览器进行身份验证，我们在页面中选择allow</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-32.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一"><span>方式一</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>这里使用hammal这个项目，首先将项目下载到本地</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/ImSingee/hammal.git
cd hammal
mv wrangler.toml.sample wrangler.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取 account_id id</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wrangler whoami
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者页面上查看</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-33.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>#创建 KV namespace</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>➜  hammal-demo: wrangler kv:namespace create docker_cache
 ⛅️ wrangler 3.59.0 (update available 3.60.1)
-------------------------------------------------------
🌀 Creating namespace with title &quot;docker-proxy-docker_cache&quot;
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = &quot;docker_cache&quot;, id = &quot;00fe55d37f61**********47bf&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改wrangler.toml文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>name = &quot;docker-proxy&quot; //要创建的cloudflare worlers 应用程序的名称
account_id = &quot;1492*********&quot; //上一步查看到的account id
workers_dev = true
main = &quot;./src/index.ts&quot;
compatibility_date = &quot;2021-12-07&quot;
//将创建KV namespace 中的id 写入下方，注意 binding = &quot;HAMMAL_CACHE&quot; 不需要修改
kv_namespaces = [
         { binding = &quot;HAMMAL_CACHE&quot;, id = &quot;00fe55d3*****95ac1063847bf&quot; }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>### 部署应用 ➜ hammal-demo git:(main) ✗ wrangler deploy ⛅️ wrangler 3.59.0 (update available 3.60.1) ------------------------------------------------------- Total Upload: 5.59 KiB / gzip: 1.78 KiB Your worker has access to the following bindings: - KV Namespaces: - HAMMAL_CACHE: 00fe5*******1063847bf Uploaded docker-proxy (1.05 sec) Published docker-proxy (4.16 sec) https://docker-proxy.121324124.workers.dev Current Deployment ID: 0794aebc-*****087e01014b44 Current Version ID: 0794aeb*******087e01014b44 Note: Deployment ID has been renamed to Version ID. Deployment ID is present to maintain compatibility with the previous behavior of this command. This output will change in a future version of Wrangler. To learn more visit: https://developers.cloudflare.com/workers/configuration/versions-and-deployments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>部署后我们就可以在页面上看到这个应用了</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-34.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>添加自定义域名</p><p>虽然Cloudflare Workers为我们应用提供了<code>workers.dev</code> 域名,但是该域名被墙，这里我们还需要自定义一个域名，我的lishuai.fun的域名就是在Cloudflare ，这里添加自定义域后Cloudflare 会帮我做dns解析以及证书。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-35.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>添加后如下</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-36.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><h4 id="直接使用" tabindex="-1"><a class="header-anchor" href="#直接使用"><span>直接使用</span></a></h4><p>比如我们要下载busybox:1.30 这个镜像，直接使用就是下载 proxy.lishuai.fun/busybox:1.30</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# docker pull proxy.lishuai.fun/busybox:1.30
1.30: Pulling from busybox
53071b97a884: Pull complete 
Digest: sha256:4b6ad3a68d34da29bf7c8ccb5d355ba8b4babcad1f99798204e7abb43e54ee3d
Status: Downloaded newer image for proxy.lishuai.fun/busybox:1.30
proxy.lishuai.fun/busybox:1.30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="作为-docker-registry-mirro使用" tabindex="-1"><a class="header-anchor" href="#作为-docker-registry-mirro使用"><span>作为 docker registry mirro使用</span></a></h4><p>没添加前我们pull nginx镜像会报错</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# docker pull nginx:1.20 
1.20: Pulling from library/nginx
214ca5fb9032: Pulling fs layer 
50836501937f: Pulling fs layer 
d838e0361e8e: Pulling fs layer 
fcc7a415e354: Waiting 
dc73b4533047: Waiting 
e8750203e985: Waiting 
error pulling image configuration: Get &quot;https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/05/0584b370e957bf9d09e10f424859a02ab0fda255103f75b3f8c7d410a4e96ed5/data?verify=1718097591-sHWoUPhk%2BwR4vjhRQiG7UTsSwLM%3D&quot;: read tcp 192.168.3.24:54228-&gt;104.16.98.215:443: read: connection reset by peer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置registry mirror,创建/etc/docker/daemon.json 文件，并将下面内容写入文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat  /etc/docker/daemon.json 
{
  &quot;registry-mirrors&quot;: [&quot;https://proxy.lishuai.fun&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启docker</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl  daemon-reload
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次下载镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# docker pull nginx:1.20 
1.20: Pulling from library/nginx
214ca5fb9032: Pull complete 
50836501937f: Pull complete 
d838e0361e8e: Pull complete 
fcc7a415e354: Pull complete 
dc73b4533047: Pull complete 
e8750203e985: Pull complete 
Digest: sha256:38f8c1d9613f3f42e7969c3b1dd5c3277e635d4576713e6453c6193e66270a6d
Status: Downloaded newer image for nginx:1.20
docker.io/library/nginx:1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以查看访问日志</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-37.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h4 id="获取其他镜像源镜像" tabindex="-1"><a class="header-anchor" href="#获取其他镜像源镜像"><span>获取其他镜像源镜像</span></a></h4><p>目前 hammal 支持获取 <code>k8s.gcr.io</code>, <code>gcr.io</code>, <code>quay.io</code> 的镜像，可以通过修改 handler.ts 中的 DEFAULT_BACKEND_HOST 添加</p><h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><p>使用cloudflare-docker-proxy 这个项目，这个项目可以一个服务代理多个镜像仓库，比如<code>docker</code>,<code>k8s.gcr.io</code>, <code>gcr.io</code>, <code>quay.io</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/ciiiii/cloudflare-docker-proxy.git
 cd cloudflare-docker-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置代理仓库" tabindex="-1"><a class="header-anchor" href="#配置代理仓库"><span>配置代理仓库</span></a></h3><p>注意：这里将docker.libcuda.so 改为你自己的域名</p><p>如果你只想代理dockerhub 修改为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const routes = {
  &quot;docker.libcuda.so&quot;: &quot;https://registry-1.docker.io&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果代理多个仓库则修改为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const routes = {
  &quot;docker.libcuda.so&quot;: &quot;https://registry-1.docker.io&quot;,
  &quot;quay.libcuda.so&quot;: &quot;https://quay.io&quot;,
  &quot;gcr.libcuda.so&quot;: &quot;https://gcr.io&quot;,
  &quot;k8s-gcr.libcuda.so&quot;: &quot;https://k8s.gcr.io&quot;,
  &quot;k8s.libcuda.so&quot;: &quot;https://registry.k8s.io&quot;,
  &quot;ghcr.libcuda.so&quot;: &quot;https://ghcr.io&quot;,
  &quot;cloudsmith.libcuda.so&quot;: &quot;https://docker.cloudsmith.io&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想修改应用程序名称，则修改wrangler.toml 文件</p><h3 id="部署-wrangler-deploy" tabindex="-1"><a class="header-anchor" href="#部署-wrangler-deploy"><span>部署 wrangler deploy</span></a></h3><p>部署后还需要在应用程序要添加自定义域名，如果代理多个仓库这里就需要添加多个</p><p>这里我部署时候只代理了dockerhub ，这里也就添加一个域名，还是使用proxy-demo.lishuai.fun 这个域名，用来和方式一做区分</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-38.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h3><h4 id="直接使用-1" tabindex="-1"><a class="header-anchor" href="#直接使用-1"><span>直接使用</span></a></h4><p>可以看到 通过proxy-demo.lishuai.fun/grafana/grafana:8.3.1 下载镜像可以正常下载</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# ls /etc/docker/
key.json
[root@dev-tools ~]# docker pull  grafana/grafana:8.3.1
8.3.1: Pulling from grafana/grafana
97518928ae5f: Already exists 
a8f5f0c09c3c: Pulling fs layer 
9643e582a667: Pulling fs layer 
ad4af0290117: Pulling fs layer 
d096601a4afa: Waiting 
65e4610b9997: Waiting 
e64bd165f497: Waiting 
6f30ef190861: Waiting 
48ef5f0dbcfe: Waiting 
d095202b1b92: Waiting 
error pulling image configuration: Get &quot;https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/3b/3b1fc05e7c9aadd934d297ffe7804b61beb33a71b80c124c49f2a974a66e6ac5/data?verify=1718099366-5KAdXT8gn5AZ6gSj0I38FWgAOgc%3D&quot;: dial tcp 104.23.124.189:443: i/o timeout
[root@dev-tools ~]# docker pull  proxy-demo.lishuai.fun/grafana/grafana:8.3.1
8.3.1: Pulling from grafana/grafana
97518928ae5f: Already exists 
a8f5f0c09c3c: Pull complete 
9643e582a667: Pull complete 
ad4af0290117: Pull complete 
d096601a4afa: Pull complete 
65e4610b9997: Pull complete 
e64bd165f497: Pull complete 
6f30ef190861: Pull complete 
48ef5f0dbcfe: Pull complete 
d095202b1b92: Pull complete 
Digest: sha256:259b847ed7e3f58e6056438fd3bc353f48fbe9b77ed3b204ae619ba80e10aed9
Status: Downloaded newer image for proxy-demo.lishuai.fun/grafana/grafana:8.3.1
proxy-demo.lishuai.fun/grafana/grafana:8.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="作为-docker-registry-mirro使用-1" tabindex="-1"><a class="header-anchor" href="#作为-docker-registry-mirro使用-1"><span>作为 docker registry mirro使用</span></a></h4><p>创建/etc/docker/daemon.json ，并重启docker服务</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# cat /etc/docker/daemon.json
{
  &quot;registry-mirrors&quot;: [&quot;https://proxy-demo.lishuai.fun&quot;]
}
[root@dev-tools ~]# systemctl daemon-reload 
[root@dev-tools ~]# systemctl  restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接下载 <code>grafana/grafana:8.4.1</code>的镜像是可以成功下载的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@dev-tools ~]# docker pull  grafana/grafana:8.4.1
8.4.1: Pulling from grafana/grafana
59bf1c3509f3: Already exists 
4164a319d242: Pull complete 
4a2f14a47a81: Pull complete 
dc89330ee24a: Pull complete 
380ee6bf29fe: Pull complete 
85f29e9b1e76: Pull complete 
b08bc2f18db4: Pull complete 
6e094f1959b8: Pull complete 
c2264af70d0b: Pull complete 
c4d0c131d223: Pull complete 
Digest: sha256:6dab2275e060b2fbb5dd9813e79b4aa3bde71aa6c8d340180a0bfa6c047605f2
Status: Downloaded newer image for grafana/grafana:8.4.1
docker.io/grafana/grafana:8.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用cloudflare-docker-proxy-代理docker镜像仓库的一些补充说明" tabindex="-1"><a class="header-anchor" href="#使用cloudflare-docker-proxy-代理docker镜像仓库的一些补充说明"><span>使用cloudflare-docker-proxy 代理docker镜像仓库的一些补充说明</span></a></h2><p>在前面cloudflare-docker-proxy 的项目例子里我们使用<code>docker pull proxy-demo.lishuai.fun/grafana/grafana:8.3.1</code></p><p>下载正常，但是很多小伙伴使用时候会发现这样下载一些镜像比如 <code>nginx</code>会出现如下错误：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@ops-prod-tools ~]# docker pull proxy-demo.lishuai.fun/nginx:1.21 
Error response from daemon: pull access denied for proxy-demo.lishuai.fun/nginx, repository does not exist or may require &#39;docker login&#39;: denied: requested access to the resource is denied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是这样的，如果是docker官方提供的镜像，默认是在library这个命名空间下的，<code>library</code></p><p>命名空间下的镜像是docker官方维护的,我们通过docker官方地址下载是可以省略命名空间的名字，下载nginx镜像实际上下载的是<code>docker.io/library/nginx:1.21</code></p><p>我们使用代理的地址下载时候命名空间名称就不能省略，需要使用<code>proxy-demo.lishuai.fun/library/nginx:1.21</code></p><p>下载，如果是镜像本身就有命名空间，比如<code>docker.io/grafana/grafana:8.3.1</code> 是由 Grafana Labs</p><p>维护的镜像,就直接使用<code>proxy-demo.lishuai.fun/grafana/grafana:8.3.1</code>下载即可</p>`,77);function m(p,v){const i=e("VPBanner"),n=e("Share");return d(),r("div",null,[a(i,t(s({title:"Linux",content:"Cloudflare 代理docker镜像仓库",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Cloudflare 代理docker镜像仓库",link:"/Cloudflare 代理docker镜像仓库/"}]})),null,16),u,a(n,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const f=l(c,[["render",m],["__file","Cloudflare 代理docker镜像仓库.html.vue"]]),h=JSON.parse('{"path":"/linux/Cloudflare%20%E4%BB%A3%E7%90%86docker%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93.html","title":"Cloudflare 代理docker镜像仓库","lang":"zh-CN","frontmatter":{"title":"Cloudflare 代理docker镜像仓库","excerpt":"Cloudflare 代理docker镜像仓库","description":"Cloudflare 代理docker镜像仓库","date":"2024-06-20T00:00:00.000Z","category":"Linux","tag":"Linux","author":"xlc520","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Cloudflare%20%E4%BB%A3%E7%90%86docker%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Cloudflare 代理docker镜像仓库"}],["meta",{"property":"og:description","content":"Cloudflare 代理docker镜像仓库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-32.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-04T13:46:03.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-06-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-04T13:46:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cloudflare 代理docker镜像仓库\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-32.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-33.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-34.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-35.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-36.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-37.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-38.webp\\"],\\"datePublished\\":\\"2024-06-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-04T13:46:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"方式一","slug":"方式一","link":"#方式一","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"方式二","slug":"方式二","link":"#方式二","children":[{"level":3,"title":"安装","slug":"安装-1","link":"#安装-1","children":[]},{"level":3,"title":"配置代理仓库","slug":"配置代理仓库","link":"#配置代理仓库","children":[]},{"level":3,"title":"部署 wrangler deploy","slug":"部署-wrangler-deploy","link":"#部署-wrangler-deploy","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]}]},{"level":2,"title":"使用cloudflare-docker-proxy 代理docker镜像仓库的一些补充说明","slug":"使用cloudflare-docker-proxy-代理docker镜像仓库的一些补充说明","link":"#使用cloudflare-docker-proxy-代理docker镜像仓库的一些补充说明","children":[]}],"git":{"createdTime":1722778447000,"updatedTime":1722779163000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":5.26,"words":1577},"filePathRelative":"linux/Cloudflare 代理docker镜像仓库.md","localizedDate":"2024年6月20日"}');export{f as comp,h as data};
