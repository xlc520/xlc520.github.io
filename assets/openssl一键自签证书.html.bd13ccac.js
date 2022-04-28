import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const a={},e=s(`<h1 id="openssl\u4E00\u952E\u81EA\u7B7E\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#openssl\u4E00\u952E\u81EA\u7B7E\u8BC1\u4E66" aria-hidden="true">#</a> Openssl\u4E00\u952E\u81EA\u7B7E\u8BC1\u4E66</h1><p><code>vim openssl.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
while [[ -z &quot;$domain&quot; ]];do
    read -p &quot;\u8F93\u5165\u57DF\u540D/IP(\u5FC5\u586B,\u5982 *.haoduck.com): &quot; domain
done
read -p &quot;\u8F93\u5165\u90AE\u7BB1(\u9009\u586B,\u9ED8\u8BA4admin@haoduck.com): &quot; mail
[[ -z &quot;$mail&quot; ]] &amp;&amp; mail=admin@haoduck.com
read -p &quot;\u8F93\u5165\u65E5\u671F(\u9009\u586B,\u9ED8\u8BA43650): &quot; day
[[ -z &quot;$day&quot; ]] &amp;&amp; day=3650
dir=$domain &amp;&amp; mkdir -p $dir
crt_file=&quot;$dir/\${domain}.crt&quot;
key_file=&quot;$dir/\${domain}.key&quot;
if [[ &quot;$(command -v openssl)&quot; ]];then
    openssl req -x509 -nodes -newkey rsa:2048 -days $day -keyout $key_file -out $crt_file -subj &quot;/C=US/ST=California/L=Los Angeles/O=Haoduck/OU=Aoao/CN=\${domain}/emailAddress=\${mail}&quot;
    echo -e &quot;\\t\u8BC1\u4E66\uFF1A$(pwd)/$crt_file\\n\\t\u79C1\u94A5\uFF1A$(pwd)/$key_file&quot;
else
    echo &quot;openssl \u672A\u5B89\u88C5&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>bash openssl.sh</code></p>`,4);function o(r,l){return e}var u=n(a,[["render",o],["__file","openssl\u4E00\u952E\u81EA\u7B7E\u8BC1\u4E66.html.vue"]]);export{u as default};
