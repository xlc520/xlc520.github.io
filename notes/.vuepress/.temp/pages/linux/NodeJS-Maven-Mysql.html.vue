<template><h1 id="安装nodejs-maven-mysql" tabindex="-1"><a class="header-anchor" href="#安装nodejs-maven-mysql" aria-hidden="true">#</a> 安装NodeJS-Maven-Mysql</h1>
<h2 id="安装nodejs" tabindex="-1"><a class="header-anchor" href="#安装nodejs" aria-hidden="true">#</a> 安装NodeJS</h2>
<p>litemall的管理端和用户端的前端界面是由Vue.js开发，编译这两部分的时候需要用到NodeJS环境，以下操作将安装一个NodeJS环境。</p>
<p>1.  从淘宝镜像下载NodeJS的安装包。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://npm.taobao.org/mirrors/node/v12.4.0/node-v12.4.0-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.  将下载的安装包解压到/usr/local/目录。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -xvf node-v12.4.0-linux-x64.tar.xz -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.  将NodeJS安装目录重命名。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mv /usr/local/node-v12.4.0-linux-x64/ /usr/local/node
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.  将NodeJS的可执行文件目录加入到系统环境变量中，并使用source命令使配置文件立即生效。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "export PATH=$PATH:/usr/local/node/bin" >> /etc/profile
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>5.   安装淘宝cnpm镜像。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install cnpm -g --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>6.  安装cross-env。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install -g cross-env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装maven" tabindex="-1"><a class="header-anchor" href="#安装maven" aria-hidden="true">#</a> 安装Maven</h2>
<ol>
<li>安装OpenJDK1.8，litemall要求JDK版本1.8以上</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install java-1.8.0-openjdk-devel.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>下载Maven安装包。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget --no-check-certificate https://mirror.bit.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>将下载的安装包解压到/usr/local/目录，并将安装目录重命名。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf apache-maven-3.6.3-bin.tar.gz -C /usr/local/
mv /usr/local/apache-maven-3.6.3/ /usr/local/maven
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4">
<li>将maven的可执行文件目录加入到系统环境变量中，并使用 source 命令使/etc/profile文件中的内容立即生效。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "export PATH=$PATH:/usr/local/maven/bin" >> /etc/profile
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5">
<li>执行以下命令打开镜像仓库配置文件，添加阿里云镜像仓库配置。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /usr/local/maven/conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入Vim编辑器页面后输入 <code>:/mirrors</code>，搜索并跳转到 <code>&lt;mirrors&gt;</code>标签的位置。
按下n键跳转到第二个没有被注释的标签位置。
按下o键，另起一行进行编辑，粘贴以下内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>mirror<span class="token operator">></span>
       <span class="token operator">&lt;</span>id<span class="token operator">></span>nexus-aliyun<span class="token operator">&lt;</span>/id<span class="token operator">></span>
       <span class="token operator">&lt;</span>mirrorOf<span class="token operator">></span>central<span class="token operator">&lt;</span>/mirrorOf<span class="token operator">></span>
       <span class="token operator">&lt;</span>name<span class="token operator">></span>Nexus aliyun<span class="token operator">&lt;</span>/name<span class="token operator">></span>
       <span class="token operator">&lt;</span>url<span class="token operator">></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token operator">&lt;</span>/url<span class="token operator">></span>
<span class="token operator">&lt;</span>/mirror<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>按下ECS退出编辑模式，输入:wq保存并退出Vim编辑器。</p>
<h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装MySQL</h2>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<p>1.  下载安装MySQL的Yum源。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2.  安装mysql-server。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.  启动mysql-server。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.  修改默认密码。 
a. 查询root密码。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grep "password" /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>命令输出如下所示。

b. 使用查询到的密码登录到mysql。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>命令输出如下所示。

c. 修改密码安全策略为低（只校验密码长度，至少8位）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>set global validate_password_policy=0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>d.  修改密码。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>alter user root@'localhost' identified by '12345678';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>e.  授予root用户远程管理权限。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>f.  退出MySQL命令行。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>quit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>初始化数据库
参考以下步骤将商城项目的初始数据导入到数据库中。请将下面命令中的 12345678修改为您设置的数据库密码。
1.  创建数据库和用户。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd litemall &amp;&amp; mysql -uroot -p12345678 &lt; litemall-db/sql/litemall_schema.sql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.  初始化数据库表结构。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -uroot -p12345678 litemall &lt; litemall-db/sql/litemall_table.sql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.  插入测试数据。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -uroot -p12345678 litemall &lt; litemall-db/sql/litemall_data.sql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
