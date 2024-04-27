import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-CXNU22eb.js";const s={},l=i(`<h1 id="java-性能优化的-50-个细节" tabindex="-1"><a class="header-anchor" href="#java-性能优化的-50-个细节"><span>Java 性能优化的 50 个细节</span></a></h1><p>在 JAVA 程序中，性能问题的大部分原因并不在于 JAVA 语言，而是程序本身。养成良好的编码习惯非常重要，能够显著地提升程序性能。</p><p><strong>1. 尽量在合适的场合使用单例</strong></p><p>使用单例可以减轻加载的负担，缩短加载的时间，提高加载的效率，但并不是所有地方都适用于单例，简单来说，单例主要适用于以下三个方面：</p><p>第一，控制资源的使用，通过线程同步来控制资源的并发访问；</p><p>第二，控制实例的产生，以达到节约资源的目的；</p><p>第三，控制数据共享，在不建立直接关联的条件下，让多个不相关的进程或线程之间实现通信。</p><p><strong>2. 尽量避免随意使用静态变量</strong></p><p>当某个对象被定义为 static 变量所引用，那么 GC 通常是不会回收这个对象所占有的内存，如</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class A{
private static B b = new B();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时静态变量 b 的生命周期与 A 类同步，如果 A 类不会卸载，那么 b 对象会常驻内存，直到程序终止。</p><p><strong>3. 尽量避免过多过常地创建 Java 对象</strong></p><p>尽量避免在经常调用的方法，循环中 new 对象，由于系统不仅要花费时间来创建对象，而且还要花时间对这些对象进行垃圾回收和处理，在我们可以控制的范围内，最大限度地重用对象，最好能用基本的数据类型或数组来替代对象。</p><p><strong>4. 尽量使用 final 修饰符</strong></p><p>带有 final 修饰符的类是不可派生的。在 JAVA 核心 API 中，有许多应用 final 的例子，例如 java、lang、String，为 String 类指定 final 防止了使用者覆盖 length()方法。另外，如果一个类是 final 的，则该类所有方法都是 final 的。java 编译器会寻找机会内联（inline）所有的 final 方法（这和具体的编译器实现有关），此举能够使性能平均提高 50%。</p><p>如：让访问实例内变量的 getter/setter 方法变成”final：</p><p>简单的 getter/setter 方法应该被置成 final，这会告诉编译器，这个方法不会被重载，所以，可以变成”inlined”,例子：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>class MAF {
public void setSize (int size) {
_size = size;
}
private int _size;
}
更正
class DAF_fixed {
final public void setSize (int size) {
_size = size;
}
private int _size;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 尽量使用局部变量</strong></p><p>调用方法时传递的参数以及在调用中创建的临时变量都保存在栈（Stack）中，速度较快；其他变量，如静态变量、实例变量等，都在堆（Heap）中创建，速度较慢。</p><p><strong>6. 尽量处理好包装类型和基本类型两者的使用场所</strong></p><p>虽然包装类型和基本类型在使用过程中是可以相互转换，但它们两者所产生的内存区域是完全不同的，基本类型数据产生和处理都在栈中处理，包装类型是对象，是在堆中产生实例。在集合类对象，有对象方面需要的处理适用包装类型，其他的处理提倡使用基本类型。</p><p><strong>7. 慎用 synchronized，尽量减小 synchronize 的方法</strong></p><p>都知道，实现同步是要很大的系统开销作为代价的，甚至可能造成死锁，所以尽量避免无谓的同步控制。synchronize 方法被调用时，直接会把当前对象锁了，在方法执行完之前其他线程无法调用当前对象的其他方法。所以，synchronize 的方法尽量减小，并且应尽量使用方法同步代替代码块同步。</p><p><strong>9. 尽量不要使用 finalize 方法</strong></p><p>实际上，将资源清理放在 finalize 方法中完成是非常不好的选择，由于 GC 的工作量很大，尤其是回收 Young 代内存时，大都会引起应用程序暂停，所以再选择使用 finalize 方法进行资源清理，会导致 GC 负担更大，程序运行效率更差。</p><p><strong>10. 尽量使用基本数据类型代替对象</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>String str = &quot;hello&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这种方式会创建一个“hello”字符串，而且 JVM 的字符缓存池还会缓存这个字符串；</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>String str = new String(&quot;hello&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时程序除创建字符串外，str 所引用的 String 对象底层还包含一个 char[]数组，这个 char[]数组依次存放了 h,e,l,l,o</p><p><strong>11. 多线程在未发生线程安全前提下应尽量使用 HashMap、ArrayList</strong></p><p>HashTable、Vector 等使用了同步机制，降低了性能。</p><p><strong>12. 尽量合理的创建 HashMap</strong></p><p>当你要创建一个比较大的 hashMap 时，充分利用这个构造函数</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public HashMap(int initialCapacity, float loadFactor);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>避免 HashMap 多次进行了 hash 重构,扩容是一件很耗费性能的事，在默认中 initialCapacity 只有 16，而 loadFactor 是 0.75，需要多大的容量，你最好能准确的估计你所需要的最佳大小，同样的 Hashtable，Vectors 也是一样的道理。</p><p><strong>13. 尽量减少对变量的重复计算</strong></p><p>如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>for(int i=0;i&lt;list.size();i++)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应该改为：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>for(int i=0,len=list.size();i&lt;len;i++)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并且在循环中应该避免使用复杂的表达式，在循环中，循环条件会被反复计算，如果不使用复杂表达式，而使循环条件值不变的话，程序将会运行的更快。</p><p><strong>14. 尽量避免不必要的创建</strong></p><p>如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>A a = new A();
if(i==1){
list.add(a);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应该改为：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>if(i==1){
A a = new A();
list.add(a);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>15. 尽量在 finally 块中释放资源</strong></p><p>程序中使用到的资源应当被释放，以避免资源泄漏，这最好在 finally 块中去做。不管程序执行的结果如何，finally 块总是会执行的，以确保资源的正确关闭。</p><p><strong>16. 尽量使用移位来代替&#39;a/b&#39;的操作</strong></p><p>&quot;/&quot;是一个代价很高的操作，使用移位的操作将会更快和更有效</p><p>如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>int num = a / 4;
int num = a / 8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应该改为：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>int num = a &gt;&gt; 2;
int num = a &gt;&gt; 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但注意的是使用移位应添加注释，因为移位操作不直观，比较难理解。</p><p><strong>17.尽量使用移位来代替&#39;a*b&#39;的操作</strong></p><p>同样的，对于&#39;*&#39;操作，使用移位的操作将会更快和更有效</p><p>如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>int num = a * 4;
int num = a * 8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应该改为：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>int num = a &lt;&lt; 2;
int num = a &lt;&lt; 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>18. 尽量确定 StringBuffer 的容量</strong></p><p>StringBuffer 的构造器会创建一个默认大小（通常是 16）的字符数组。在使用中，如果超出这个大小，就会重新分配内存，创建一个更大的数组，并将原先的数组复制过来，再丢弃旧的数组。在大多数情况下，你可以在创建 StringBuffer 的时候指定大小，这样就避免了在容量不够的时候自动增长，以提高性能。</p><p>如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>StringBuffer buffer = new StringBuffer(1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>19. 尽量早释放无用对象的引用</strong></p><p>大部分时，方法局部引用变量所引用的对象会随着方法结束而变成垃圾，因此，大部分时候程序无需将局部，引用变量显式设为 null。</p><p>例如：</p><p>Java 代码</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>Public void test(){
Object obj = new Object();
……
Obj=null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个就没必要了，随着方法 test()的执行完成，程序中 obj 引用变量的作用域就结束了。但是如果是改成下面：</p><p>Java 代码</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>Public void test(){
Object obj = new Object();
……
Obj=null;
//执行耗时，耗内存操作；或调用耗时，耗内存的方法
……
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候就有必要将 obj 赋值为 null，可以尽早的释放对 Object 对象的引用。</p><p><strong>20. 尽量避免使用二维数组</strong></p><p>二维数据占用的内存空间比一维数组多得多，大概 10 倍以上。</p><p><strong>21. 尽量避免使用 split</strong></p><p>除非是必须的，否则应该避免使用 split，split 由于支持正则表达式，所以效率比较低，如果是频繁的几十，几百万的调用将会耗费大量资源，如果确实需要频繁的调用 split，可以考虑使用 apache 的 StringUtils.split(string,char)，频繁 split 的可以缓存结果。</p><p><strong>22. ArrayList &amp; LinkedList</strong></p><p>一个是线性表，一个是链表，一句话，随机查询尽量使用 ArrayList，ArrayList 优于 LinkedList，LinkedList 还要移动指针，添加删除的操作 LinkedList 优于 ArrayList，ArrayList 还要移动数据，不过这是理论性分析，事实未必如此，重要的是理解好 2 者得数据结构，对症下药。</p><p><strong>23. 尽量使用 System.arraycopy ()代替通过来循环复制数组</strong></p><p>System.arraycopy() 要比通过循环来复制数组快的多。</p><p><strong>24. 尽量缓存经常使用的对象</strong></p><p>尽可能将经常使用的对象进行缓存，可以使用数组，或 HashMap 的容器来进行缓存，但这种方式可能导致系统占用过多的缓存，性能下降，推荐可以使用一些第三方的开源工具，如 EhCache，Oscache 进行缓存，他们基本都实现了 FIFO/FLU 等缓存算法。</p><p><strong>25. 尽量避免非常大的内存分配</strong></p><p>有时候问题不是由当时的堆状态造成的，而是因为分配失败造成的。分配的内存块都必须是连续的，而随着堆越来越满，找到较大的连续块越来越困难。</p><p><strong>26. 慎用异常</strong></p><p>当创建一个异常时，需要收集一个栈跟踪(stack track)，这个栈跟踪用于描述异常是在何处创建的。构建这些栈跟踪时需要为运行时栈做一份快照，正是这一部分开销很大。</p><p>当需要创建一个 Exception 时，JVM 不得不说：先别动，我想就您现在的样子存一份快照，所以暂时停止入栈和出栈操作。栈跟踪不只包含运行时栈中的一两个元素，而是包含这个栈中的每一个元素。</p><p>如果您创建一个 Exception ，就得付出代价，好在捕获异常开销不大，因此可以使用 try-catch 将核心内容包起来。从技术上讲，你甚至可以随意地抛出异常，而不用花费很大的代价。</p><p>招致性能损失的并不是 throw 操作——尽管在没有预先创建异常的情况下就抛出异常是有点不寻常。真正要花代价的是创建异常，幸运的是，好的编程习惯已教会我们，不应该不管三七二十一就抛出异常。异常是为异常的情况而设计的，使用时也应该牢记这一原则。</p><p><strong>27. 尽量重用对象</strong></p><p>特别是 String 对象的使用中，出现字符串连接情况时应使用 StringBuffer 代替，由于系统不仅要花时间生成对象，以后可能还需要花时间对这些对象进行垃圾回收和处理。因此生成过多的对象将会给程序的性能带来很大的影响。</p><p><strong>28. 不要重复初始化变量</strong></p><p>默认情况下，调用类的构造函数时，java 会把变量初始化成确定的值，所有的对象被设置成 null，整数变量设置成 0，float 和 double 变量设置成 0.0，逻辑值设置成 false。当一个类从另一个类派生时，这一点尤其应该注意，因为用 new 关键字创建一个对象时，构造函数链中的所有构造函数都会被自动调用。</p><p>这里有个注意，给成员变量设置初始值但需要调用其他方法的时候，最好放在一个方法。比如 initXXX() 中，因为直接调用某方法赋值可能会因为类尚未初始化而抛空指针异常，如：public int state = this.getState()。</p><p><strong>29. 在 java+Oracle 的应用系统开发中，java 中内嵌的 SQL 语言应尽量使用大写形式，以减少 Oracle 解析器的解析负担。</strong></p><p>**30. 在 java 编程过程中，进行数据库连接，I/O 流操作，在使用完毕后，及时关闭以释放资源。因为对这些大对象的操作会造成系统大的开销。 **</p><p><strong>31. 过分的创建对象会消耗系统的大量内存，严重时，会导致内存泄漏，因此，保证过期的对象的及时回收具有重要意义。JVM 的 GC 并非十分智能，因此建议在对象使用完毕后，手动设置成 null。</strong></p><p><strong>32. 在使用同步机制时，应尽量使用方法同步代替代码块同步。</strong></p><p><strong>33. 不要在循环中使用 Try/Catch 语句，应把 Try/Catch 放在循环最外层</strong></p><p>Error 是获取系统错误的类，或者说是虚拟机错误的类。不是所有的错误 Exception 都能获取到的，虚拟机报错 Exception 就获取不到，必须用 Error 获取。</p><p><strong>34. 通过 StringBuffer 的构造函数来设定它的初始化容量，可以明显提升性能</strong></p><p>StringBuffer 的默认容量为 16，当 StringBuffer 的容量达到最大容量时，它会将自身容量增加到当前的 2 倍+2，也就是 2*n+2。无论何时，只要 StringBuffer 到达它的最大容量，它就不得不创建一个新的对象数组，然后复制旧的对象数组，这会浪费很多时间。所以给 StringBuffer 设置一个合理的初始化容量值，是很有必要的！</p><p><strong>35. 合理使用 java.util.Vector</strong></p><p>Vecor 与 StringBuffer 类似，每次扩展容量时，所有现有元素都要赋值到新的存储空间中。Vector 的默认存储能力为 10 个元素，扩容加倍。</p><p>vector.add(index,obj) 这个方法可以将元素 obj 插入到 index 位置，但 index 以及之后的元素依次都要向下移动一个位置（将其索引加 1）。 除非必要，否则对性能不利。</p><p>同样规则适用于 remove(int index)方法，移除此向量中指定位置的元素。将所有后续元素左移（将其索引减 1）。返回此向量中移除的元素。所以删除 vector 最后一个元素要比删除第 1 个元素开销低很多。删除所有元素最好用 removeAllElements()方法。</p><p>如果要删除 vector 里的一个元素可以使用 vector.remove(obj)；而不必自己检索元素位置，再删除，如 int index = indexOf（obj）;vector.remove(index)。</p><p><strong>36. 不用 new 关键字创建对象的实例</strong></p><p>用 new 关键词创建类的实例时，构造函数链中的所有构造函数都会被自动调用。但如果一个对象实现了 Cloneable 接口，我们可以调用它的 clone()方法。clone()方法不会调用任何类构造函数。</p><p>下面是 Factory 模式的一个典型实现：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public static Credit getNewCredit()
{
return new Credit();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改进后的代码使用 clone()方法：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>private static Credit BaseCredit = new Credit();
public static Credit getNewCredit()
{
return (Credit)BaseCredit.clone();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>不要将数组声明为：public static final</li></ol><p><strong>37. HaspMap 的遍历：</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>Map&lt;String, String[]&gt; paraMap = new HashMap&lt;String, String[]&gt;();
for( Entry&lt;String, String[]&gt; entry : paraMap.entrySet() )
{
String appFieldDefId = entry.getKey();
String[] values = entry.getValue();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用散列值取出相应的 Entry 做比较得到结果，取得 entry 的值之后直接取 key 和 value。</p><p><strong>38. array(数组)和 ArrayList 的使用</strong></p><p>array 数组效率最高，但容量固定，无法动态改变，ArrayList 容量可以动态增长，但牺牲了效率。</p><p><strong>39. 单线程应尽量使用 HashMap, ArrayList,除非必要，否则不推荐使用 HashTable,Vector，它们使用了同步机制，而降低了性能。</strong></p><p><strong>40. StringBuffer,StringBuilder 的区别在于</strong></p><p>java.lang.StringBuffer 线程安全的可变字符序列。一个类似于 String 的字符串缓冲区，但不能修改。StringBuilder 与该类相比，通常应该优先使用 StringBuilder 类，因为它支持所有相同的操作，但由于它不执行同步，所以速度更快。</p><p>为了获得更好的性能，在构造 StringBuffer 或 StringBuilder 时应尽量指定她的容量。当然如果不超过 16 个字符时就不用了。 相同情况下，使用 StringBuilder 比使用 StringBuffer 仅能获得 10%~15%的性能提升，但却要冒多线程不安全的风险。综合考虑还是建议使用 StringBuffer。</p><p><strong>41. 尽量使用基本数据类型代替对象。</strong></p><p><strong>42. 使用具体类比使用接口效率高，但结构弹性降低了，但现代 IDE 都可以解决这个问题。</strong></p><p>**43. 考虑使用静态方法，如果你没有必要去访问对象的外部，那么就使你的方法成为静态方法。它会被更快地调用，因为它不需要一个虚拟函数导向表。这同时也是一个很好的实践，因为它告诉你如何区分方法的性质，调用这个方法不会改变对象的状态。 **</p><p><strong>44. 应尽可能避免使用内在的 GET,SET 方法。</strong></p><p><strong>45.避免枚举，浮点数的使用。</strong></p><p>以下举几个实用优化的例子：</p><p><strong>一、避免在循环条件中使用复杂表达式</strong></p><p>在不做编译优化的情况下，在循环中，循环条件会被反复计算，如果不使用复杂表达式，而使循环条件值不变的话，程序将会运行的更快。例子：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>import java.util.Vector;
class CEL {
void method (Vector vector) {
for (int i = 0; i &lt; vector.size (); i++) // Violation
; // ...
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>class CEL_fixed {
void method (Vector vector) {
int size = vector.size ()
for (int i = 0; i &lt; size; i++)
; // ...
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>二、为&#39;Vectors&#39; 和 &#39;Hashtables&#39;定义初始大小</strong></p><p>JVM 为 Vector 扩充大小的时候需要重新创建一个更大的数组，将原原先数组中的内容复制过来，最后，原先的数组再被回收。可见 Vector 容量的扩大是一个颇费时间的事。</p><p>通常，默认的 10 个元素大小是不够的。你最好能准确的估计你所需要的最佳大小。例子：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>import java.util.Vector;
public class DIC {
public void addObjects (Object[] o) {
// if length &gt; 10, Vector needs to expand
for (int i = 0; i&lt; o.length;i++) {
v.add(o); // capacity before it can add more elements.
}
}
public Vector v = new Vector(); // no initialCapacity.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：</p><p>自己设定初始大小。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public Vector v = new Vector(20);
public Hashtable hash = new Hashtable(10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>三、在 finally 块中关闭 Stream</strong></p><p>程序中使用到的资源应当被释放，以避免资源泄漏。这最好在 finally 块中去做。不管程序执行的结果如何，finally 块总是会执行的，以确保资源的正确关闭。</p><p><strong>四、使用&#39;System.arraycopy ()&#39;代替通过来循环复制数组</strong></p><p>例子：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class IRB
{
void method () {
int[] array1 = new int [100];
for (int i = 0; i &lt; array1.length; i++) {
array1 [i] = i;
}
int[] array2 = new int [100];
for (int i = 0; i &lt; array2.length; i++) {
array2 [i] = array1 [i]; // Violation
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class IRB
{
void method () {
int[] array1 = new int [100];
for (int i = 0; i &lt; array1.length; i++) {
array1 [i] = i;
}
int[] array2 = new int [100];
System.arraycopy(array1, 0, array2, 0, 100);
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>五、让访问实例内变量的 getter/setter 方法变成”final”</strong></p><p>简单的 getter/setter 方法应该被置成 final，这会告诉编译器，这个方法不会被重载，所以，可以变成”inlined”,例子：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>class MAF {
public void setSize (int size) {
_size = size;
}
private int _size;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>class DAF_fixed {
final public void setSize (int size) {
_size = size;
}
private int _size;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>六、对于常量字符串，用&#39;String&#39; 代替 &#39;StringBuffer&#39;</strong></p><p>常量字符串并不需要动态改变长度。</p><p>例子：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">USC</span> <span class="token punctuation">{</span>
<span class="token class-name">String</span> method <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">StringBuffer</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span> <span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> t <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token string">&quot;World!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：把 StringBuffer 换成 String，如果确定这个 String 不会再变的话，这将会减少运行开销提高性能。</p><p><strong>七、在字符串相加的时候，使用 &#39; &#39; 代替 &quot; &quot;，如果该字符串只有一个字符的话</strong></p><p><strong>例子：</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">STR</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">String</span> string <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token string">&quot;d&quot;</span> <span class="token comment">// violation.</span>
string <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;d&quot;</span> <span class="token comment">// violation.</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：</p><p>将一个字符的字符串替换成&#39; &#39;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">STR</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">String</span> string <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token char">&#39;d&#39;</span>
string <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">+</span> <span class="token char">&#39;d&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上仅是 Java 方面编程时的性能优化，性能优化大部分都是在时间、效率、代码结构层次等方面的权衡，各有利弊，不要把上面内容当成教条，或许有些对我们实际工作适用，有些不适用，还望根据实际工作场景进行取舍，活学活用，变通为宜。</p>`,169),t=[l];function r(d,p){return a(),e("div",null,t)}const v=n(s,[["render",r],["__file","Java性能优化的50个细节.html.vue"]]),u=JSON.parse('{"path":"/dev/Java%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%9A%8450%E4%B8%AA%E7%BB%86%E8%8A%82.html","title":"Java性能优化的50个细节","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Java性能优化的50个细节","excerpt":null,"description":"Java 性能优化的 50 个细节 在 JAVA 程序中，性能问题的大部分原因并不在于 JAVA 语言，而是程序本身。养成良好的编码习惯非常重要，能够显著地提升程序性能。 1. 尽量在合适的场合使用单例 使用单例可以减轻加载的负担，缩短加载的时间，提高加载的效率，但并不是所有地方都适用于单例，简单来说，单例主要适用于以下三个方面： 第一，控制资源的使用...","date":"2024-01-30T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%9A%8450%E4%B8%AA%E7%BB%86%E8%8A%82.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Java性能优化的50个细节"}],["meta",{"property":"og:description","content":"Java 性能优化的 50 个细节 在 JAVA 程序中，性能问题的大部分原因并不在于 JAVA 语言，而是程序本身。养成良好的编码习惯非常重要，能够显著地提升程序性能。 1. 尽量在合适的场合使用单例 使用单例可以减轻加载的负担，缩短加载的时间，提高加载的效率，但并不是所有地方都适用于单例，简单来说，单例主要适用于以下三个方面： 第一，控制资源的使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-01-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java性能优化的50个细节\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1706885633000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":17.06,"words":5118},"filePathRelative":"dev/Java性能优化的50个细节.md","localizedDate":"2024年1月30日","autoDesc":true}');export{v as comp,u as data};
