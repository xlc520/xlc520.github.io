import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const e={},a=s(`<h1 id="fastjson-\u4E2Djsonobject\u7684\u5E38\u7528\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#fastjson-\u4E2Djsonobject\u7684\u5E38\u7528\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> fastjson \u4E2DJSONObject\u7684\u5E38\u7528\u4F7F\u7528\u65B9\u6CD5</h1><h3 id="_1\u3001\u5BFC\u5165\u9700\u8981\u7684jar\u5305" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5BFC\u5165\u9700\u8981\u7684jar\u5305" aria-hidden="true">#</a> 1\u3001\u5BFC\u5165\u9700\u8981\u7684jar\u5305</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>		&lt;dependency&gt;
            &lt;groupId&gt;net.oschina.zcx7878&lt;/groupId&gt;
            &lt;artifactId&gt;fastdfs-client-java&lt;/artifactId&gt;
            &lt;version&gt;1.27.0.0&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2\u3001\u5E38\u7528\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Test {
    @org.junit.jupiter.api.Test
    void test()  {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put(&quot;name&quot;,&quot;yangjuan&quot;);
        jsonObject.put(&quot;age&quot;,23);
        jsonObject.put(&quot;gender&quot;,&quot;\u5973&quot;);
        jsonObject.put(&quot;score&quot;,false);

        //1 get()\u83B7\u53D6\u503C
        final Object age = jsonObject.get(&quot;age&quot;);
        final String age1 = jsonObject.getString(&quot;age&quot;)
        //2 containsKey()\u5224\u65ADjsonObject \u662F\u5426\u542B\u6709key
        final boolean name = jsonObject.containsKey(&quot;name&quot;);
        //3 isEmpty()\u5224\u65ADjsonObject\u662F\u5426\u4E3A\u7A7A
        final boolean name1 = jsonObject.isEmpty();
        //4 remove() \u79FB\u9664\u5BF9\u5E94\u7684key \u548Cvalue
        final Object score = jsonObject.remove(&quot;score&quot;);
        //5 containsValue()\u5224\u65AD\u662F\u5426\u542B\u6709\u8BE5\u503C
        final boolean b = jsonObject.containsValue(23);
        //6 size() \u5224\u65AD\u952E\u503C\u5BF9\u5F97\u6570\u91CF
        final int size = jsonObject.size();
        //7 \u79FB\u9664\u4E00\u4E2A\u952E\u503C\u5BF9
        final Object age2 = jsonObject.remove(&quot;age&quot;);
        //\u7531\u4E8EJSONObject\u662F\u4E00\u4E2Amap\uFF0C\u5B83\u8FD8\u5177\u6709map\u7279\u6709\u7684\u4E24\u4E2A\u65B9\u6CD5\uFF1A
        //.8  Set&lt;String&gt; keySet() \uFF1A\u83B7\u53D6JSONObject\u4E2D\u7684key\uFF0C\u5E76\u5C06\u5176\u653E\u5165Set\u96C6\u5408\u4E2D
        final Set&lt;String&gt; keySet = jsonObject.keySet();
        for (String s1 : keySet) {
            System.out.println(s1);
        }
        //9.Set&lt;Map.Entry&lt;String, Object&gt;&gt; entrySet()\uFF1A\u5728\u5FAA\u73AF\u904D\u5386\u65F6\u4F7F\u7528\uFF0C\u53D6\u5F97\u662F\u952E\u548C\u503C\u7684\u6620\u5C04\u5173\u7CFB\uFF0CEntry\u5C31\u662FMap\u63A5\u53E3\u4E2D\u7684\u5185\u90E8\u63A5\u53E3
        final Set&lt;Map.Entry&lt;String, Object&gt;&gt; entries = jsonObject.entrySet();
        for (Map.Entry&lt;String, Object&gt; entry : entries) {
            System.out.println(entry.getKey()+&quot;===&quot;+entry.getValue());
        }
        //10 JsonObject\u8F6Cstring  toString()  toJSONString()
        final String s1 = jsonObject.toString();
        final String s3 = jsonObject.toJSONString();
        //11 JsonObject \u8F6CMap
        final Map&lt;String,Object&gt; parse = (Map) JSONObject.parse(s1);
        parse.entrySet();
        for (Map.Entry m :parse.entrySet()){
            System.out.println(m.getKey()+&quot;====&quot;+m.getValue());
        }
        System.out.println(s3);
        System.out.println(s1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,5);function t(r,l){return a}var i=n(e,[["render",t],["__file","fastjson\u4E2DJSONObject\u7684\u5E38\u7528\u4F7F\u7528\u65B9\u6CD5.html.vue"]]);export{i as default};
