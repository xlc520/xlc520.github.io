import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as p,c as t,b as n,n as r,g as d,r as a,a as c}from"./app-DWXdHMII.js";const o={};function u(m,s){const e=a("VPBanner"),i=a("Share");return p(),t("div",null,[n(e,r(d({title:"Java-Stream集合筛选、归约、分组与聚合操作",content:"Java-Stream集合筛选、归约、分组与聚合操作",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Java-Stream集合筛选、归约、分组与聚合操作",link:"/dev/Java-Stream集合筛选、归约、分组与聚合操作"}]})),null,16),s[0]||(s[0]=c(`<h1 id="java-stream集合筛选、归约、分组与聚合操作" tabindex="-1"><a class="header-anchor" href="#java-stream集合筛选、归约、分组与聚合操作"><span>Java-Stream集合筛选、归约、分组与聚合操作</span></a></h1><ul><li>一、Stream流的特点和使用流程 <ul><li><ol><li>特点</li></ol></li><li><ol start="2"><li>使用流程</li></ol></li></ul></li><li>二、Stream流的魅力</li><li>三、stream流的创建 <ul><li><ol><li>通过集合创建</li></ol></li><li><ol start="2"><li>通过数组创建</li></ol></li><li><ol start="3"><li>通过Stream的静态方法</li></ol></li><li><ol start="4"><li>通过随机数生成</li></ol></li><li><ol start="5"><li>通过文件I/O</li></ol></li><li><ol start="6"><li>无限流</li></ol></li><li><ol start="7"><li>通过范围创建</li></ol></li></ul></li><li>四、Stream流的应用 <ul><li><ol><li>中间操作</li></ol></li><li><ol start="2"><li>终端操作</li></ol></li><li><ol start="3"><li>收集操作</li></ol></li><li>4 其他操作：sequential(顺序流)/parallel(并行流)</li></ul></li></ul><h2 id="一、stream流的特点和使用流程" tabindex="-1"><a class="header-anchor" href="#一、stream流的特点和使用流程"><span><strong>一、Stream流的特点和使用流程</strong></span></a></h2><p>Stream API允许开发者以声明性方式处理数据集合。可以简化复杂的数据操作，并且支持并行处理以提高性能。</p><h3 id="_1-特点" tabindex="-1"><a class="header-anchor" href="#_1-特点"><span><strong>1. 特点</strong></span></a></h3><ul><li><strong>声明性：</strong> Stream API允许你描述你想要做什么，而不是详细说明怎么做。</li><li><strong>链式操作：</strong> 可将多个操作链接在一起，形成一个流水线，每个操作都会生成一个新的流供下一个操作使用。</li><li><strong>函数式编程：</strong> Stream API鼓励使用无副作用的函数和 lambda 表达式。</li><li><strong>并行处理：</strong> Stream API支持并行流，可以充分利用多核处理器。</li><li><strong>延迟执行：</strong> Stream 操作是惰性的，只有在终端操作（如 collect、forEach）被调用时，整个流水线才会执行。</li><li><strong>短路操作：</strong> 某些终端操作（如 anyMatch、allMatch、noneMatch、findFirst）在找到结果后会立即停止处理。</li></ul><h3 id="_2-使用流程" tabindex="-1"><a class="header-anchor" href="#_2-使用流程"><span><strong>2. 使用流程</strong></span></a></h3><ul><li><strong>创建流：</strong> 从数据源（如集合、数组、文件等）创建一个流。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  List&lt;String&gt; list = Arrays.asList(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;);   </span></span>
<span class="line"><span>  Stream&lt;String&gt; stream = list.stream();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>中间操作：</strong> 对流进行一系列转换操作，如 filter（过滤）、map（映射）、sorted（排序）等。这些操作会返回一个新的流，不会立即执行。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Stream&lt;String&gt; filteredStream = stream.filter(s -&gt; s.startsWith(&quot;a&quot;));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>终端操作：</strong> 执行一个终端操作来结束流的处理并产生结果。终端操作会触发整个流水线的执行，并且不会返回一个新的流。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;String&gt; result = filteredStream.collect(Collectors.toList());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>处理结果：</strong> 使用终端操作返回的结果进行后续处理。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> result.forEach(System.out::println);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>流只能被使用一次。一旦终端操作被触发，流就会被关闭，无法再次使用。</p><h2 id="二、stream流的魅力" tabindex="-1"><a class="header-anchor" href="#二、stream流的魅力"><span><strong>二、Stream流的魅力</strong></span></a></h2><p>以下是一个：分组、排序然后提取每组中最小和最大值的案例，我们来看一下使用stream和不使用stream的代码实现。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Integer&gt; numbers = Arrays.asList(1, 5, 3, 8, 10, 2, 6, 7, 4, 9);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 分组、排序并提取最小和最大值  </span></span>
<span class="line"><span> Map&lt;Boolean, List&lt;Integer&gt;&gt; result = numbers.stream()  </span></span>
<span class="line"><span>      .collect(Collectors.groupingBy(n -&gt; n % 2 == 0, </span></span>
<span class="line"><span>      // 分组：奇数和偶数  </span></span>
<span class="line"><span>       Collectors.collectingAndThen(  </span></span>
<span class="line"><span>                Collectors.toList(), </span></span>
<span class="line"><span>                // 收集到列表  </span></span>
<span class="line"><span>                list -&gt; {  </span></span>
<span class="line"><span>                     // 对列表进行排序  </span></span>
<span class="line"><span>                    Collections.sort(list);  </span></span>
<span class="line"><span>                    // 提取并返回最小和最大值</span></span>
<span class="line"><span>                    return Lists.newArrayList(list.get(0),list.get(list.size() - 1));  </span></span>
<span class="line"><span>               }  </span></span>
<span class="line"><span>)));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果我们不使用stream，代码可能是这样的</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.ArrayList;  </span></span>
<span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.Collections;  </span></span>
<span class="line"><span>import java.util.HashMap;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.Map;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class GroupAndSort {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = Arrays.asList(1, 5, 3, 8, 10, 2, 6, 7, 4, 9);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        Map&lt;Boolean, List&lt;Integer&gt;&gt; result = new HashMap&lt;&gt;();  </span></span>
<span class="line"><span>        result.put(true, new ArrayList&lt;&gt;()); </span></span>
<span class="line"><span>        // 偶数分组  </span></span>
<span class="line"><span>        result.put(false, new ArrayList&lt;&gt;()); </span></span>
<span class="line"><span>        // 奇数分组  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        for (Integer number : numbers) {  </span></span>
<span class="line"><span>            if (number % 2 == 0) {  </span></span>
<span class="line"><span>                result.get(true).add(number);  </span></span>
<span class="line"><span>            } else {  </span></span>
<span class="line"><span>                result.get(false).add(number);  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 对分组后的列表进行排序  </span></span>
<span class="line"><span>        Collections.sort(result.get(true));  </span></span>
<span class="line"><span>        Collections.sort(result.get(false));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 提取并设置最小和最大值（注意这里需要使用get(list.size() - 1)来获取最大值）  </span></span>
<span class="line"><span>        List&lt;Integer&gt; evenResult = result.get(true);  </span></span>
<span class="line"><span>        if (evenResult.size() &gt; 1) {  </span></span>
<span class="line"><span>            result.put(true, Arrays.asList(evenResult.get(0), evenResult.get(evenResult.size() - 1)));  </span></span>
<span class="line"><span>        } else if (evenResult.size() == 1) {  </span></span>
<span class="line"><span>            result.put(true, Arrays.asList(evenResult.get(0), evenResult.get(0))); </span></span>
<span class="line"><span>            // 如果只有一个元素，则最小值和最大值相同  </span></span>
<span class="line"><span>        } else {  </span></span>
<span class="line"><span>            result.put(true, Collections.emptyList()); </span></span>
<span class="line"><span>            // 如果没有元素，则为空列表  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        List&lt;Integer&gt; oddResult = result.get(false);  </span></span>
<span class="line"><span>        if (oddResult.size() &gt; 1) {  </span></span>
<span class="line"><span>            result.put(false, Arrays.asList(oddResult.get(0), oddResult.get(oddResult.size() - 1)));  </span></span>
<span class="line"><span>        } else if (oddResult.size() == 1) {  </span></span>
<span class="line"><span>            result.put(false, Arrays.asList(oddResult.get(0), oddResult.get(0))); </span></span>
<span class="line"><span>            // 如果只有一个元素，则最小值和最大值相同  </span></span>
<span class="line"><span>        } else {  </span></span>
<span class="line"><span>            result.put(false, Collections.emptyList()); </span></span>
<span class="line"><span>            // 如果没有元素，则为空列表  </span></span>
<span class="line"><span>        }   </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、stream流的创建" tabindex="-1"><a class="header-anchor" href="#三、stream流的创建"><span><strong>三、stream流的创建</strong></span></a></h2><h3 id="_1-通过集合创建" tabindex="-1"><a class="header-anchor" href="#_1-通过集合创建"><span><strong>1. 通过集合创建</strong></span></a></h3><p>调用集合对象的stream()方法来获取一个流</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;String&gt; list = Arrays.asList(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;);  </span></span>
<span class="line"><span>Stream&lt;String&gt; streamFromList = list.stream();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-通过数组创建" tabindex="-1"><a class="header-anchor" href="#_2-通过数组创建"><span><strong>2. 通过数组创建</strong></span></a></h3><p>使用Arrays.stream()方法从数组创建流，这适用于任何类型的数组。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int[] array = {1, 2, 3, 4, 5};  </span></span>
<span class="line"><span>IntStream intStream = Arrays.stream(array);  </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 或者对于对象数组  </span></span>
<span class="line"><span>String[] strArray = {&quot;a&quot;, &quot;b&quot;, &quot;c&quot;};  </span></span>
<span class="line"><span>Stream&lt;String&gt; stringStream = Arrays.stream(strArray);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本类型的数组，Arrays.stream()会返回特定类型的流，如IntStream、LongStream或DoubleStream。如果需要将这些流转换为通用Stream，你可以使用boxed()方法。</p><h3 id="_3-通过stream的静态方法" tabindex="-1"><a class="header-anchor" href="#_3-通过stream的静态方法"><span><strong>3. 通过Stream的静态方法</strong></span></a></h3><p>Stream类提供了几个静态方法来创建流</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Stream&lt;String&gt; stream = Stream.of(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-通过随机数生成" tabindex="-1"><a class="header-anchor" href="#_4-通过随机数生成"><span><strong>4. 通过随机数生成</strong></span></a></h3><p>Random类可以用于生成随机数，并且你可以使用ints()、longs()或doubles()方法创建一个无限流。但通常会结合limit()方法来限制流的长度。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Random random = new Random();  </span></span>
<span class="line"><span>IntStream randomIntStream = random.ints(10, 0, 100);</span></span>
<span class="line"><span>  // 生成10个0到100之间的随机数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-通过文件i-o" tabindex="-1"><a class="header-anchor" href="#_5-通过文件i-o"><span><strong>5. 通过文件I/O</strong></span></a></h3><p>在处理文件时，可以使用Files类中的方法，如lines()，从文件中读取行并创建一个流。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Path path = Paths.get(&quot;path/to/file.txt&quot;);  </span></span>
<span class="line"><span>Stream&lt;String&gt; linesStream = Files.lines(path);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-无限流" tabindex="-1"><a class="header-anchor" href="#_6-无限流"><span><strong>6. 无限流</strong></span></a></h3><p>Stream API 提供了能够生成无限序列的流</p><ul><li>Stream.iterate(T seed, UnaryOperatorf): 创建一个无限顺序的流，通过反复应用函数f来生成元素。</li><li>Stream.generate(Suppliers): 创建一个无限无序的流，其中每个元素由提供的Supplier生成。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 使用iterate生成一个无限递增的整数流  </span></span>
<span class="line"><span>Stream&lt;Integer&gt; infiniteIntegerStream = Stream.iterate(0, i -&gt; i + 1);  </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 使用generate生成一个无限的随机数流  </span></span>
<span class="line"><span>Stream&lt;Double&gt; infiniteRandomStream = Stream.generate(Math::random);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-通过范围创建" tabindex="-1"><a class="header-anchor" href="#_7-通过范围创建"><span><strong>7. 通过范围创建</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>IntStream.range(int startInclusive, int endExclusive): </span></span>
<span class="line"><span>LongStream.range(int startInclusive, int endExclusive):</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个包含从startInclusive（包含）到endExclusive（不包含）之间的整数的流。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个从0（包含）到10（不包含）的整数流  </span></span>
<span class="line"><span>IntStream intStream = IntStream.range(0, 10);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>无限流应该结合limit()或其他短路操作。</p><h2 id="四、stream流的应用" tabindex="-1"><a class="header-anchor" href="#四、stream流的应用"><span><strong>四、Stream流的应用</strong></span></a></h2><h3 id="_1-中间操作" tabindex="-1"><a class="header-anchor" href="#_1-中间操作"><span><strong>1. 中间操作</strong></span></a></h3><h4 id="_1-1-filter-过滤-map-转换-maptoint-maptodouble-maptolong" tabindex="-1"><a class="header-anchor" href="#_1-1-filter-过滤-map-转换-maptoint-maptodouble-maptolong"><span><strong>1.1 Filter(过滤)/map(转换)/mapToInt/mapToDouble/mapToLong</strong></span></a></h4><p>filter方法用于过滤流中的元素，而map方法用于对流中的每个元素执行某种操作，并返回一个新的流。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.stream.Collectors;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class EmployeeFilterMapDemo {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个员工列表:包含姓名和薪水两个属性  </span></span>
<span class="line"><span>        List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>                new Employee(&quot;Alice&quot;, 5500.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Bob&quot;, 6000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Charlie&quot;, 4500.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Diana&quot;, 5700.0)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用Stream API的filter方法过滤出工资超过5000的员工，  </span></span>
<span class="line"><span>        // 然后使用map方法将每个员工映射成他们的名字，并收集到一个新的列表中  </span></span>
<span class="line"><span>        List&lt;String&gt; namesOfHighSalaryEmployees = employees.stream()  </span></span>
<span class="line"><span>                .filter(e -&gt; e.getSalary() &gt; 5000.0)  </span></span>
<span class="line"><span>                .map(Employee::getName)  </span></span>
<span class="line"><span>                .collect(Collectors.toList());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印过滤并映射后的员工名字列表  </span></span>
<span class="line"><span>        System.out.println(&quot;Names of employees with salary &gt; 5000: &quot; + namesOfHighSalaryEmployees);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外streamAPI中还有指定类型的map方法：</p><ul><li><strong>mapToInt(ToIntFunction&lt;? super T&gt; mapper)</strong>: 将流中的元素转换成int类型。</li><li><strong>mapToLong(ToLongFunction&lt;? super T&gt; mapper)</strong>: 将流中的元素转换成long类型。</li><li><strong>mapToDouble(ToDoubleFunction&lt;? super T&gt; mapper):</strong> 将流中的元素转换成double类型。</li></ul><h4 id="_1-2-flatmap-转换" tabindex="-1"><a class="header-anchor" href="#_1-2-flatmap-转换"><span><strong>1.2 flatMap(转换)</strong></span></a></h4><p>flatMap方法在Java Stream API中用于将流中的每个元素转换成一个新的流，然后将这些新生成的流合并成一个单一的流。用于处理流中的集合或数组元素，以将它们“展平”成一个单一的元素流。</p><p>一个包含字符串列表的列表使用flatMap将其转换成一个包含所有字符串的单一流：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.stream.Collectors;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class FlatMapExample {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个包含列表的列表  </span></span>
<span class="line"><span>        List&lt;List&lt;String&gt;&gt; listOfLists = Arrays.asList(  </span></span>
<span class="line"><span>            Arrays.asList(&quot;A&quot;, &quot;B&quot;, &quot;C&quot;),  </span></span>
<span class="line"><span>            Arrays.asList(&quot;D&quot;, &quot;E&quot;),  </span></span>
<span class="line"><span>            Arrays.asList(&quot;F&quot;, &quot;G&quot;, &quot;H&quot;, &quot;I&quot;)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用flatMap将内部列表展平成一个单一列表  </span></span>
<span class="line"><span>        List&lt;String&gt; flatList = listOfLists.stream()  </span></span>
<span class="line"><span>            .flatMap(List::stream) // 使用List的stream方法将每个列表转换成流，然后合并  </span></span>
<span class="line"><span>            .collect(Collectors.toList());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印结果  </span></span>
<span class="line"><span>        System.out.println(flatList);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/// 输出结果将是：</span></span>
<span class="line"><span>[A, B, C, D, E, F, G, H, I]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-distinct-去重" tabindex="-1"><a class="header-anchor" href="#_1-3-distinct-去重"><span><strong>1.3 Distinct(去重)</strong></span></a></h4><p>distinct方法用于去除流中的重复元素。基于元素的 equals 和 hashCode 方法来确定哪些元素是重。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.stream.Collectors;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class DistinctExample {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个包含重复元素的列表  </span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5, 5, 1);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用distinct方法去除重复元素  </span></span>
<span class="line"><span>        List&lt;Integer&gt; distinctNumbers = numbers.stream()  </span></span>
<span class="line"><span>            .distinct()  </span></span>
<span class="line"><span>            .collect(Collectors.toList());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印结果  </span></span>
<span class="line"><span>        System.out.println(distinctNumbers);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输出结果将是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1, 2, 3, 4, 5]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-limit-限制-skip-跳过-peek-展示" tabindex="-1"><a class="header-anchor" href="#_1-4-limit-限制-skip-跳过-peek-展示"><span><strong>1.4 Limit(限制)/Skip(跳过)/Peek(展示)</strong></span></a></h4><p>limit用于限制流中的元素数量，skip用于跳过流中的前N个元素，而peek则允许对流中的每个元素执行某种操作（如打印、修改等）而不改变流本身。peek通常用于调试或查看流中的元素。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.stream.Collectors;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class LimitSkipPeekExample {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个整数列表  </span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用peek打印流中的元素，然后使用limit和skip获取特定元素  </span></span>
<span class="line"><span>        List&lt;Integer&gt; result = numbers.stream()  </span></span>
<span class="line"><span>                .peek(System.out::println) // 打印每个元素  </span></span>
<span class="line"><span>                .skip(2)                   // 跳过前两个元素  </span></span>
<span class="line"><span>                .limit(3)                  // 获取接下来的三个元素  </span></span>
<span class="line"><span>                .collect(Collectors.toList()); // 收集结果  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印最终结果  </span></span>
<span class="line"><span>        System.out.println(&quot;Result after skip and limit: &quot; + result);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果将是：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1  </span></span>
<span class="line"><span>2  </span></span>
<span class="line"><span>3  </span></span>
<span class="line"><span>4  </span></span>
<span class="line"><span>5  </span></span>
<span class="line"><span>Result after skip and limit: [3, 4, 5]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>peek方法虽然执行了操作，但它不会改变流中的元素或流的结构。</p><h4 id="_1-5-sorted-排序" tabindex="-1"><a class="header-anchor" href="#_1-5-sorted-排序"><span><strong>1.5 Sorted(排序)</strong></span></a></h4><p>排序可以通过sorted()方法实现，该方法有两种形式：</p><ul><li>无参的sorted()，它使用元素的自然顺序进行排序（要求元素实现Comparable接口）；</li><li>以及接受Comparator参数的sorted(Comparator&lt;? super T&gt; comparator)，它允许自定义排序规则。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.stream.Collectors;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class SortingExample {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个字符串列表  </span></span>
<span class="line"><span>        List&lt;String&gt; words = Arrays.asList(&quot;banana&quot;, &quot;apple&quot;, &quot;cherry&quot;, &quot;date&quot;, &quot;elderberry&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用sorted()方法按自然顺序排序  </span></span>
<span class="line"><span>        List&lt;String&gt; sortedWords = words.stream()  </span></span>
<span class="line"><span>                .sorted()  </span></span>
<span class="line"><span>                .collect(Collectors.toList());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印排序后的结果  </span></span>
<span class="line"><span>        System.out.println(&quot;Sorted words in natural order: &quot; + sortedWords);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 创建一个整数列表  </span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = Arrays.asList(5, 2, 9, 1, 7);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用sorted()方法和自定义Comparator进行排序  </span></span>
<span class="line"><span>        List&lt;Integer&gt; sortedNumbers = numbers.stream()  </span></span>
<span class="line"><span>                .sorted((a, b) -&gt; b - a) // 降序排序  </span></span>
<span class="line"><span>                .collect(Collectors.toList());  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 打印排序后的结果  </span></span>
<span class="line"><span>        System.out.println(&quot;Sorted numbers in descending order: &quot; + sortedNumbers);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sorted words in natural order: [apple, banana, cherry, date, elderberry]  </span></span>
<span class="line"><span>Sorted numbers in descending order: [9, 7, 5, 2, 1]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-6-concat-两个流连接成一个流" tabindex="-1"><a class="header-anchor" href="#_1-6-concat-两个流连接成一个流"><span><strong>1.6 concat(两个流连接成一个流)</strong></span></a></h4><p>concat(Stream&lt;? extends T&gt; a, Stream&lt;? extends T&gt; b): 静态方法，用于将两个流连接成一个流。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> // 创建两个整数列表  </span></span>
<span class="line"><span>List&lt;Integer&gt; list1 = Arrays.asList(1, 2, 3);  </span></span>
<span class="line"><span>List&lt;Integer&gt; list2 = Arrays.asList(4, 5, 6);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 将两个列表转换为流，并使用 concat 方法连接它们  </span></span>
<span class="line"><span>Stream&lt;Integer&gt; concatenatedStream = Stream.concat(list1.stream(), list2.stream());  </span></span>
<span class="line"><span>// 使用连接后的流进行一些操作，比如打印所有元素  </span></span>
<span class="line"><span>concatenatedStream.forEach(System.out::println);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-终端操作" tabindex="-1"><a class="header-anchor" href="#_2-终端操作"><span><strong>2. 终端操作</strong></span></a></h3><h4 id="_2-1-foreach-findfirst-findany" tabindex="-1"><a class="header-anchor" href="#_2-1-foreach-findfirst-findany"><span><strong>2.1 forEach/findFirst/findAny</strong></span></a></h4><p>Stream API中，forEach、findFirst和findAny都是终端操作。forEach用于迭代流中的每个元素并执行一个操作，findFirst用于获取流中的第一个元素，而findAny则用于获取流中的任意元素（并行流特别有用，因为它可能更快）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import java.util.Arrays;  </span></span>
<span class="line"><span>import java.util.List;  </span></span>
<span class="line"><span>import java.util.Optional;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>public class StreamMethodsExample {  </span></span>
<span class="line"><span>    public static void main(String[] args) {  </span></span>
<span class="line"><span>        // 创建一个整数列表  </span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用forEach打印每个元素  </span></span>
<span class="line"><span>        numbers.stream()  </span></span>
<span class="line"><span>                .forEach(System.out::println);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用findFirst获取第一个元素  </span></span>
<span class="line"><span>        Optional&lt;Integer&gt; firstNumber = numbers.stream()  </span></span>
<span class="line"><span>                .findFirst();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        System.out.println(&quot;First number: &quot; + firstNumber.orElse(null));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用findAny获取任意元素  </span></span>
<span class="line"><span>        Optional&lt;Integer&gt; anyNumber = numbers.stream()  </span></span>
<span class="line"><span>                .findAny();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        System.out.println(&quot;Any number: &quot; + anyNumber.orElse(null));  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果将是流中的每个数字</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1  </span></span>
<span class="line"><span>2  </span></span>
<span class="line"><span>3  </span></span>
<span class="line"><span>First number: 1  </span></span>
<span class="line"><span>Any number: 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>findFirst和findAny返回的是一个Optional对象，这是因为流可能是空的。</p><h4 id="_2-3-count-sum-max-min" tabindex="-1"><a class="header-anchor" href="#_2-3-count-sum-max-min"><span><strong>2.3 count/sum/max/min</strong></span></a></h4><p>count、sum、max和min都是终端操作，用于对流中的元素进行计数、求和、找最大值和最小值。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个整数列表  </span></span>
<span class="line"><span>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用count计算元素数量  </span></span>
<span class="line"><span>long count = numbers.stream()  </span></span>
<span class="line"><span>        .count();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Count of elements: &quot; + count);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用sum计算元素总和  </span></span>
<span class="line"><span>int sum = numbers.stream()  </span></span>
<span class="line"><span>        .mapToInt(Integer::intValue) // 转换为IntStream以使用sum  </span></span>
<span class="line"><span>        .sum();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Sum of elements: &quot; + sum);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用max获取最大值  </span></span>
<span class="line"><span>OptionalDouble max = numbers.stream()  </span></span>
<span class="line"><span>        .mapToDouble(Integer::doubleValue) // 转换为DoubleStream以使用max  </span></span>
<span class="line"><span>        .max();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Max value: &quot; + max.orElse(Double.NaN));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用min获取最小值  </span></span>
<span class="line"><span>OptionalDouble min = numbers.stream()  </span></span>
<span class="line"><span>        .mapToDouble(Integer::doubleValue) // 转换为DoubleStream以使用min  </span></span>
<span class="line"><span>        .min();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Min value: &quot; + min.orElse(Double.NaN));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Count of elements: 10  </span></span>
<span class="line"><span>Sum of elements: 55  </span></span>
<span class="line"><span>Max value: 10.0  </span></span>
<span class="line"><span>Min value: 1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-anymatch-allmatch-nonematch" tabindex="-1"><a class="header-anchor" href="#_2-4-anymatch-allmatch-nonematch"><span><strong>2.4 anyMatch/allMatch/noneMatch</strong></span></a></h4><p>anyMatch、allMatch和noneMatch是终端操作，用于检查流中的元素是否满足给定的谓词（条件）。anyMatch检查是否有任何元素满足条件，allMatch检查是否所有元素都满足条件，而noneMatch检查是否没有任何元素满足条件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个整数列表  </span></span>
<span class="line"><span>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用anyMatch检查是否有任何偶数  </span></span>
<span class="line"><span>boolean hasEven = numbers.stream()  </span></span>
<span class="line"><span>        .anyMatch(n -&gt; n % 2 == 0);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Has any even number? &quot; + hasEven);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用allMatch检查是否所有数字都小于11  </span></span>
<span class="line"><span>boolean allLessThan11 = numbers.stream()  </span></span>
<span class="line"><span>        .allMatch(n -&gt; n &lt; 11);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Are all numbers less than 11? &quot; + allLessThan11);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用noneMatch检查是否没有任何数字等于0  </span></span>
<span class="line"><span>boolean noZeros = numbers.stream()  </span></span>
<span class="line"><span>        .noneMatch(n -&gt; n == 0);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Are there no zeros? &quot; + noZeros);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Has any even number? true  </span></span>
<span class="line"><span>Are all numbers less than 11? true  </span></span>
<span class="line"><span>Are there no zeros? true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-归约reduce" tabindex="-1"><a class="header-anchor" href="#_2-5-归约reduce"><span><strong>2.5 归约reduce</strong></span></a></h4><p>reduce方法是一个终端操作，用于将流中的所有元素组合成一个单一的结果。它通常用于执行某种累积操作，比如计算元素的总和、乘积或连接字符串等。</p><ul><li>reduce(T identity, BinaryOperatoraccumulator) 此方法接受一个初始值和一个累积函数，用于归约流中的元素。</li><li>reduce(BinaryOperatoraccumulator) 此方法不接受初始值，而是使用流中的第一个元素作为初始值，然后应用累积函数。</li></ul><p>计算一个员工列表中所有员工的总薪水，同时找出薪水最高的员工。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class Employee {  </span></span>
<span class="line"><span>    private String name;  </span></span>
<span class="line"><span>    private double salary;  </span></span>
<span class="line"><span>    ... </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用reduce方法来计算总薪水和找出薪水最高的员工：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个员工列表  </span></span>
<span class="line"><span>List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>        new Employee(&quot;Alice&quot;, 5000.0),  </span></span>
<span class="line"><span>        new Employee(&quot;Bob&quot;, 6000.0),  </span></span>
<span class="line"><span>        new Employee(&quot;Charlie&quot;, 5500.0),  </span></span>
<span class="line"><span>        new Employee(&quot;David&quot;, 6500.0)  </span></span>
<span class="line"><span>);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用初始值的 reduce 方法来计算所有员工的总薪水 </span></span>
<span class="line"><span>doubletotalSalary = employees.stream()  </span></span>
<span class="line"><span>                .reduce(0, (acc, employee) -&gt; acc + employee.getSalary(), Integer::sum); </span></span>
<span class="line"><span>System.out.println(&quot;Total salary of all employees: &quot; + totalSalary);  </span></span>
<span class="line"><span>// 不使用初始值的 reduce 方法来连接所有员工的名字  </span></span>
<span class="line"><span>Optional&lt;String&gt; combinedNames = employees.stream()  </span></span>
<span class="line"><span>                .map(Employee::getName)  </span></span>
<span class="line"><span>                .reduce((name1, name2) -&gt; name1 + &quot;, &quot; + name2);    </span></span>
<span class="line"><span>// 使用reduce找出薪水最高的员工  </span></span>
<span class="line"><span>Optional&lt;Employee&gt; highestPaidEmployee = employees.stream()  </span></span>
<span class="line"><span>        .reduce((emp1, emp2) -&gt; emp1.getSalary() &gt; emp2.getSalary() ? emp1 : emp2); </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Highest paid employee: &quot; + highestPaidEmployee.orElse(null));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 或者使用max方法找出薪水最高的员工（更简洁）  </span></span>
<span class="line"><span>Optional&lt;Employee&gt; highestPaidEmployeeWithMax = employees.stream()  </span></span>
<span class="line"><span>        .max(Comparator.comparingDouble(Employee::getSalary));  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>System.out.println(&quot;Highest paid employee (using max): &quot; + highestPaidEmployeeWithMax.orElse(null));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用max方法和Comparator.comparingDouble来更简洁地找出薪水最高的员工。它更清晰地表达了我们的意图，并且代码更简洁。</p><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Total salary of all employees: 23000.0  </span></span>
<span class="line"><span>Highest paid employee: Employee{name=&#39;David&#39;, salary=6500.0}  </span></span>
<span class="line"><span>Highest paid employee (using max): Employee{name=&#39;David&#39;, salary=6500.0}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-收集操作" tabindex="-1"><a class="header-anchor" href="#_3-收集操作"><span><strong>3. 收集操作</strong></span></a></h3><h4 id="_3-1-collect收集-三个参数" tabindex="-1"><a class="header-anchor" href="#_3-1-collect收集-三个参数"><span><strong>3.1 collect收集(三个参数)</strong></span></a></h4><p>collect方法在Java Stream API中通常用于收集流中的元素到某种集合或其他数据结构中。</p><ul><li>collect(Suppliersupplier, BiConsumer&lt;R, ? super T&gt; accumulator, BiConsumer&lt;R, R&gt; combiner):</li></ul><p>重载版本的collect方法提供了更高的灵活性，允许你自定义收集过程。 这个collect方法接受三个参数：</p><ul><li>Suppliersupplier：一个供应器，用于创建新的结果容器。</li><li>BiConsumer&lt;R, ? super T&gt; accumulator：一个累加器，用于将流中的元素添加到结果容器中。</li><li>BiConsumer&lt;R, R&gt; combiner：一个组合器，用于合并两个结果容器（通常用于并行流）。</li></ul><p>自定义一个收集过程，将流中的字符串连接成一个单独的字符串：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  // 创建一个字符串流  </span></span>
<span class="line"><span>Stream&lt;String&gt; stringStream = Stream.of(&quot;Hello&quot;, &quot; &quot;, &quot;World&quot;, &quot;!&quot;, &quot; &quot;, &quot;Welcome&quot;, &quot; &quot;, &quot;to&quot;, &quot; &quot;, &quot;Java&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用自定义的 collect 方法来连接字符串  </span></span>
<span class="line"><span>String concatenated = stringStream.collect(  </span></span>
<span class="line"><span>            // 供应器：创建一个 StringBuilder  </span></span>
<span class="line"><span>            StringBuilder::new,  </span></span>
<span class="line"><span>            // 累加器：将每个字符串添加到 StringBuilder  </span></span>
<span class="line"><span>            StringBuilder::append,  </span></span>
<span class="line"><span>            // 组合器：将两个 StringBuilder 合并（这里其实不需要，因为我们是顺序处理的，但为了示例完整性还是提供了）  </span></span>
<span class="line"><span>            (left, right) -&gt; left.append(right)  </span></span>
<span class="line"><span>        ).toString();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 输出结果  </span></span>
<span class="line"><span>System.out.println(concatenated);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-tolist-tomap-toset-toarray" tabindex="-1"><a class="header-anchor" href="#_3-1-tolist-tomap-toset-toarray"><span><strong>3.1 toList/toMap/toSet/toArray()</strong></span></a></h4><p>toList(), toMap(), 和 toSet() 是非常有用的终端操作，它们可以将流中的元素收集到相应的集合中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>                new Employee(&quot;Alice&quot;, 5000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Bob&quot;, 6000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Charlie&quot;, 5500.0),  </span></span>
<span class="line"><span>                new Employee(&quot;David&quot;, 6500.0)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // toList  </span></span>
<span class="line"><span>        List&lt;String&gt; employeeNames = employees.stream()  </span></span>
<span class="line"><span>                .map(Employee::getName)  </span></span>
<span class="line"><span>                .collect(Collectors.toList());  </span></span>
<span class="line"><span>        System.out.println(&quot;Employee Names (toList): &quot; + employeeNames);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // toSet  </span></span>
<span class="line"><span>        Set&lt;Double&gt; uniqueSalaries = employees.stream()  </span></span>
<span class="line"><span>                .map(Employee::getSalary)  </span></span>
<span class="line"><span>                .collect(Collectors.toSet());  </span></span>
<span class="line"><span>        System.out.println(&quot;Unique Salaries (toSet): &quot; + uniqueSalaries);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // toMap </span></span>
<span class="line"><span>        Map&lt;String, Double&gt; employeeSalaries = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.toMap(  </span></span>
<span class="line"><span>                        Employee::getName,  </span></span>
<span class="line"><span>                        Employee::getSalary  </span></span>
<span class="line"><span>                ));  </span></span>
<span class="line"><span>        System.out.println(&quot;Employee Salaries (toMap): &quot; + employeeSalaries);  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // 使用 Stream API 将员工列表转换为 Employee[] 数组  </span></span>
<span class="line"><span>        Person[] employeeArray = employees.stream()  </span></span>
<span class="line"><span>            .toArray(Employee[]::new); </span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-summing-averaging-summarizing" tabindex="-1"><a class="header-anchor" href="#_3-3-summing-averaging-summarizing"><span><strong>3.3 summing/averaging/summarizing</strong></span></a></h4><p>Collectors 类提供了几个用于数据统计的收集器，如 averagingDouble、summarizingDouble 和 summingDouble。这些收集器通常与流的 collect 方法一起使用，用于对数值流（如员工薪水）进行统计。 Collectors提供了一系列用于数据统计的静态方法： 计数：count 平均值：averagingInt、averagingLong、averagingDouble 最值：maxBy、minBy 求和：summingInt、summingLong、summingDouble 统计以上所有：summarizingInt、summarizingLong、summarizingDouble</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>                new Employee(&quot;Alice&quot;, 5000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Bob&quot;, 6000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Charlie&quot;, 5500.0),  </span></span>
<span class="line"><span>                new Employee(&quot;David&quot;, 6500.0)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 averagingDouble 计算平均薪水  </span></span>
<span class="line"><span>        double averageSalary = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.averagingDouble(Employee::getSalary));  </span></span>
<span class="line"><span>        System.out.println(&quot;Average Salary (averagingDouble): &quot; + averageSalary);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 summarizingDouble 获取薪水的统计信息  </span></span>
<span class="line"><span>        DoubleSummaryStatistics salaryStats = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.summarizingDouble(Employee::getSalary));  </span></span>
<span class="line"><span>        System.out.println(&quot;Salary Statistics (summarizingDouble): &quot; + salaryStats);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 summingDouble 计算薪水总和  </span></span>
<span class="line"><span>        double sumSalary = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.summingDouble(Employee::getSalary));  </span></span>
<span class="line"><span>        System.out.println(&quot;Sum of Salaries (summingDouble): &quot; + sumSalary);  </span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Average Salary (averagingDouble): 5750.0  </span></span>
<span class="line"><span>Salary Statistics (summarizingDouble): DoubleSummaryStatistics{count=4, sum=23000.000000, min=5000.000000, average=5750.000000, max=6500.000000}  </span></span>
<span class="line"><span>Sum of Salaries (summingDouble): 23000.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-summarystatistics" tabindex="-1"><a class="header-anchor" href="#_3-4-summarystatistics"><span><strong>3.4 summaryStatistics()</strong></span></a></h4><p>对于数值流（如 IntStream, LongStream, DoubleStream），summaryStatistics返回描述该流统计信息的对象，如最小值、最大值、平均值等。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个包含一些双精度浮点数的数组  </span></span>
<span class="line"><span>double[] numbers = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用 DoubleStream 的 of 方法创建一个流，然后调用 summaryStatistics 方法  </span></span>
<span class="line"><span> DoubleSummaryStatistics stats = Arrays.stream(numbers).summaryStatistics();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> // 输出统计信息  </span></span>
<span class="line"><span>System.out.println(&quot;最小值: &quot; + stats.getMin());  </span></span>
<span class="line"><span>System.out.println(&quot;最大值: &quot; + stats.getMax());  </span></span>
<span class="line"><span>System.out.println(&quot;平均值: &quot; + stats.getAverage());  </span></span>
<span class="line"><span>System.out.println(&quot;元素数量: &quot; + stats.getCount());  </span></span>
<span class="line"><span>System.out.println(&quot;元素总和: &quot; + stats.getSum());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-接合joining" tabindex="-1"><a class="header-anchor" href="#_3-6-接合joining"><span><strong>3.6 接合joining</strong></span></a></h4><p>Collectors.joining可以将流中的元素连接成一个字符串。这对将列表、集合或其他流数据结构转换为单个字符串表示形式特别有用。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>                new Employee(&quot;Alice&quot;, 5000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Bob&quot;, 6000.0),  </span></span>
<span class="line"><span>                new Employee(&quot;Charlie&quot;, 5500.0),  </span></span>
<span class="line"><span>                new Employee(&quot;David&quot;, 6500.0)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 joining 将员工名字连接成一个字符串，逗号分隔  </span></span>
<span class="line"><span>        String namesJoined = employees.stream()  </span></span>
<span class="line"><span>                .map(Employee::getName) </span></span>
<span class="line"><span>// 提取员工的名字  </span></span>
<span class="line"><span>                .collect(Collectors.joining(&quot;, &quot;)); </span></span>
<span class="line"><span>// 使用逗号和空格作为分隔符连接名字  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        System.out.println(&quot;Employee names joined: &quot; + namesJoined);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Employee names joined: Alice, Bob, Charlie, David</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-7-分组-partitioningby-groupingby" tabindex="-1"><a class="header-anchor" href="#_3-7-分组-partitioningby-groupingby"><span><strong>3.7 分组(partitioningBy/groupingBy)</strong></span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Employee&gt; employees = Arrays.asList(  </span></span>
<span class="line"><span>                new Employee(&quot;Alice&quot;, 5000.0, &quot;Development&quot;),  </span></span>
<span class="line"><span>                new Employee(&quot;Bob&quot;, 6000.0, &quot;Management&quot;),  </span></span>
<span class="line"><span>                new Employee(&quot;Charlie&quot;, 5500.0, &quot;Development&quot;),  </span></span>
<span class="line"><span>                new Employee(&quot;David&quot;, 6500.0, &quot;Management&quot;),  </span></span>
<span class="line"><span>                new Employee(&quot;Eve&quot;, 5200.0, &quot;HR&quot;)  </span></span>
<span class="line"><span>        );  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 partitioningBy 根据薪水是否高于6000进行分区  </span></span>
<span class="line"><span>        Predicate&lt;Employee&gt; salaryAbove6000 = employee -&gt; employee.getSalary() &gt; 6000;  </span></span>
<span class="line"><span>        Map&lt;Boolean, List&lt;Employee&gt;&gt; partitionedBySalary = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.partitioningBy(salaryAbove6000));  </span></span>
<span class="line"><span>        System.out.println(&quot;Employees partitioned by salary &gt; 6000: &quot; + partitionedBySalary);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        // 使用 groupingBy 根据部门进行分组  </span></span>
<span class="line"><span>        Map&lt;String, List&lt;Employee&gt;&gt; groupedByDepartment = employees.stream()  </span></span>
<span class="line"><span>                .collect(Collectors.groupingBy(Employee::getDepartment));  </span></span>
<span class="line"><span>        System.out.println(&quot;Employees grouped by department: &quot; + groupedByDepartment);  </span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Collectors.partitioningBy 方法用于根据提供的谓词（Predicate）对流中的元素进行分区。</li><li>Collectors.groupingBy 方法用于根据提供的分类函数对流中的元素进行分组。在这个例子中，分类函数是 Employee::getDepartment，它根据员工的部门对员工进行分组。结果是一个映射，其中键是部门名称，值是对应部门的员工列表。</li></ul><h3 id="_4-其他操作-sequential-顺序流-parallel-并行流" tabindex="-1"><a class="header-anchor" href="#_4-其他操作-sequential-顺序流-parallel-并行流"><span><strong>4 其他操作：sequential(顺序流)/parallel(并行流)</strong></span></a></h3><p>parallel和sequential是用来指定流的执行模式的方法。这两种模式决定了流中的元素是如何被处理的。</p><h4 id="_4-1parallel-并行流-基于forkjoinpool" tabindex="-1"><a class="header-anchor" href="#_4-1parallel-并行流-基于forkjoinpool"><span><strong>4.1parallel（并行流，基于ForkJoinPool）</strong></span></a></h4><p>调用parallelStream()或者对一个已经存在的流调用parallel()时，这个流以并行方式执行操作。并行流会尝试利用多个线程来同时处理多个元素，以提高处理速度。并行流是基于Java的ForkJoinPool实现的，它是一个特殊的线程池，适合执行可以并行处理的任务。</p><h4 id="_4-2sequential-顺序流" tabindex="-1"><a class="header-anchor" href="#_4-2sequential-顺序流"><span><strong>4.2sequential（顺序流）</strong></span></a></h4><p>对一个流调用sequential()时，这个流以顺序方式执行操作。顺序流中的元素按照它们在数据源中出现的顺序逐个进行处理。顺序流是在单个线程中执行的，因此不存在线程安全问题。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> // 使用顺序流  </span></span>
<span class="line"><span>System.out.println(&quot;Sequential Stream:&quot;);  </span></span>
<span class="line"><span>numbers.stream()  </span></span>
<span class="line"><span>           .sequential() // 默认就是顺序流，这里显式指定  </span></span>
<span class="line"><span>           .forEach(n -&gt; {  </span></span>
<span class="line"><span>               System.out.print(n + &quot; &quot;);  </span></span>
<span class="line"><span>               try {  </span></span>
<span class="line"><span>                   Thread.sleep(100);</span></span>
<span class="line"><span>// 耗时操作  </span></span>
<span class="line"><span>               } catch (InterruptedException e) {  </span></span>
<span class="line"><span>                   e.printStackTrace();  </span></span>
<span class="line"><span>               }  </span></span>
<span class="line"><span>           });  </span></span>
<span class="line"><span>System.out.println(&quot;\\n&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用并行流  </span></span>
<span class="line"><span>System.out.println(&quot;Parallel Stream:&quot;);  </span></span>
<span class="line"><span>numbers.stream()  </span></span>
<span class="line"><span>           .parallel()  </span></span>
<span class="line"><span>           .forEach(n -&gt; {  </span></span>
<span class="line"><span>               System.out.print(n + &quot; &quot;);  </span></span>
<span class="line"><span>               try {  </span></span>
<span class="line"><span>                   Thread.sleep(100); </span></span>
<span class="line"><span>// 耗时操作  </span></span>
<span class="line"><span>               } catch (InterruptedException e) {  </span></span>
<span class="line"><span>                   e.printStackTrace();  </span></span>
<span class="line"><span>               }  </span></span>
<span class="line"><span>           });  </span></span>
<span class="line"><span>System.out.println(&quot;\\n&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺序流的可能输出（每次运行都应该相同）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sequential Stream:  </span></span>
<span class="line"><span>1 2 3 4 5 6 7 8 9 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>并行流的可能输出（每次运行都可能不同）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Parallel Stream:  </span></span>
<span class="line"><span>4 2 6 8 1 3 9 5 7 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>不应该在forEach操作中执行有副作用的操作（比如修改共享变量），因为并行流不保证操作的顺序性。如果需要收集结果或者执行有状态的操作，应该使用像collect这样的终端操作来代替。</p>`,142)),n(i,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const h=l(o,[["render",u],["__file","Java-Stream集合筛选、归约、分组与聚合操作.html.vue"]]),g=JSON.parse('{"path":"/dev/Java-Stream%E9%9B%86%E5%90%88%E7%AD%9B%E9%80%89%E3%80%81%E5%BD%92%E7%BA%A6%E3%80%81%E5%88%86%E7%BB%84%E4%B8%8E%E8%81%9A%E5%90%88%E6%93%8D%E4%BD%9C.html","title":"Java-Stream集合筛选、归约、分组与聚合操作","lang":"zh-CN","frontmatter":{"title":"Java-Stream集合筛选、归约、分组与聚合操作","excerpt":null,"description":"Java-Stream集合筛选、归约、分组与聚合操作","date":"2024-10-30T00:00:00.000Z","category":"Java","tag":"Java","author":"xlc520","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java-Stream%E9%9B%86%E5%90%88%E7%AD%9B%E9%80%89%E3%80%81%E5%BD%92%E7%BA%A6%E3%80%81%E5%88%86%E7%BB%84%E4%B8%8E%E8%81%9A%E5%90%88%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Java-Stream集合筛选、归约、分组与聚合操作"}],["meta",{"property":"og:description","content":"Java-Stream集合筛选、归约、分组与聚合操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T14:38:03.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-10-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T14:38:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-Stream集合筛选、归约、分组与聚合操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T14:38:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、Stream流的特点和使用流程","slug":"一、stream流的特点和使用流程","link":"#一、stream流的特点和使用流程","children":[{"level":3,"title":"1. 特点","slug":"_1-特点","link":"#_1-特点","children":[]},{"level":3,"title":"2. 使用流程","slug":"_2-使用流程","link":"#_2-使用流程","children":[]}]},{"level":2,"title":"二、Stream流的魅力","slug":"二、stream流的魅力","link":"#二、stream流的魅力","children":[]},{"level":2,"title":"三、stream流的创建","slug":"三、stream流的创建","link":"#三、stream流的创建","children":[{"level":3,"title":"1. 通过集合创建","slug":"_1-通过集合创建","link":"#_1-通过集合创建","children":[]},{"level":3,"title":"2. 通过数组创建","slug":"_2-通过数组创建","link":"#_2-通过数组创建","children":[]},{"level":3,"title":"3. 通过Stream的静态方法","slug":"_3-通过stream的静态方法","link":"#_3-通过stream的静态方法","children":[]},{"level":3,"title":"4. 通过随机数生成","slug":"_4-通过随机数生成","link":"#_4-通过随机数生成","children":[]},{"level":3,"title":"5. 通过文件I/O","slug":"_5-通过文件i-o","link":"#_5-通过文件i-o","children":[]},{"level":3,"title":"6. 无限流","slug":"_6-无限流","link":"#_6-无限流","children":[]},{"level":3,"title":"7. 通过范围创建","slug":"_7-通过范围创建","link":"#_7-通过范围创建","children":[]}]},{"level":2,"title":"四、Stream流的应用","slug":"四、stream流的应用","link":"#四、stream流的应用","children":[{"level":3,"title":"1. 中间操作","slug":"_1-中间操作","link":"#_1-中间操作","children":[]},{"level":3,"title":"2. 终端操作","slug":"_2-终端操作","link":"#_2-终端操作","children":[]},{"level":3,"title":"3. 收集操作","slug":"_3-收集操作","link":"#_3-收集操作","children":[]},{"level":3,"title":"4 其他操作：sequential(顺序流)/parallel(并行流)","slug":"_4-其他操作-sequential-顺序流-parallel-并行流","link":"#_4-其他操作-sequential-顺序流-parallel-并行流","children":[]}]}],"git":{"createdTime":1731681483000,"updatedTime":1731681483000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":17.92,"words":5375},"filePathRelative":"dev/Java-Stream集合筛选、归约、分组与聚合操作.md","localizedDate":"2024年10月30日","excerpt":""}');export{h as comp,g as data};
