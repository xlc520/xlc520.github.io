import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const n={},a=s(`<h1 id="\u4F7F\u7528docker\u5FEB\u901F\u5B89\u88C5oracle" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker\u5FEB\u901F\u5B89\u88C5oracle" aria-hidden="true">#</a> \u4F7F\u7528docker\u5FEB\u901F\u5B89\u88C5oracle</h1><p>1.\u62C9\u53D6\u955C\u50CF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.\u521B\u5EFA\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d -p 1521:1521 --name oracle11g registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.\u8FDB\u5165\u955C\u50CF\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker exec -it oracle11g bash

su root;

\u5BC6\u7801:helowin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7F16\u8F91\u73AF\u5883\u53D8\u91CF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vi /etc/profile
export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
export ORACLE_SID=helowin
export PATH=$ORACLE_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u521B\u5EFA\u8F6F\u8FDE\u63A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ln -s $ORACLE_HOME/bin/sqlplus /usr/bin

source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5207\u6362\u5230oracle \u7528\u6237</p><p><code>su - oracle</code></p><p>\u767B\u5F55sqlplus\u5E76\u4FEE\u6539sys\u3001system\u7528\u6237\u5BC6\u7801</p><ul><li>\u767B\u5F55sqlplus</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>sqlplus /nolog

conn /as sysdba
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u63A5\u7740\u66F4\u6539\u7528\u6237\u5BC6\u7801</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>alter user system identified by system;

alter user sys identified by sys;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u8BBE\u7F6E\u5BC6\u7801\u6C38\u4E0D\u8FC7\u671F</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>scott\u7528\u6237\u7684\u5F00\u542F</p><p>SCOTT \u662F ORACLE \u5185\u90E8\u7684\u4E00\u4E2A\u5B9E\u4F8B\u7528\u6237\uFF0C\u4E0B\u9762\u6709 emp\u3001dept \u7B49\u5B9E\u4F8B\u8868\uFF0C\u8FD9\u4E9B\u8868\u548C\u8868\u95F4\u7684\u5173\u7CFB\u6F14\u793A\u4E86\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u57FA\u672C\u539F\u7406\u3002</p></li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>alter user scott account unlock;
alter user scott identified by abc;
commit;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4.\u91CD\u542F\u5BB9\u5668\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u7528\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker restart oracle11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u73B0\u5728\u53EF\u4EE5\u7528<code>system</code>\u7528\u6237\u8FDE\u63A5,\u5BC6\u7801:<code>system</code></p>`,25);function l(r,i){return a}var p=e(n,[["render",l],["__file","\u4F7F\u7528docker\u5FEB\u901F\u5B89\u88C5oracle.html.vue"]]);export{p as default};
