import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,d}from"./app.615e0b68.js";const t={},l=d(`<h1 id="七大排序-代码-动图演示" tabindex="-1"><a class="header-anchor" href="#七大排序-代码-动图演示" aria-hidden="true">#</a> 七大排序（代码+动图演示）</h1><h2 id="_1-排序的概念及其运用" tabindex="-1"><a class="header-anchor" href="#_1-排序的概念及其运用" aria-hidden="true">#</a> 1.排序的概念及其运用</h2><h3 id="_1-1排序的概念" tabindex="-1"><a class="header-anchor" href="#_1-1排序的概念" aria-hidden="true">#</a> 1.1排序的概念</h3><blockquote><p><strong>排序</strong>：所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。</p><p><strong>稳定性</strong>：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次 序保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排 序算法是稳定的；否则称为不稳定的。</p><p><strong>稳定性的意义</strong>：在根据多种属性进行排序时会有巨大的意义。比如我们先对学生按照学号进行了排序，再对学生进行了按照成绩进行排序，此时学号和成绩成为了两种决定因素，如果我们在按照成绩进行排序时，所使用的算法是不具有稳定性的，那么在对成绩排序后，之前根据学号进行的排序就没有意义了，此时就会出现相同成绩，但是学号靠后的在前面，反之，如果我们选择的排序具有稳定性，那么成绩相同，学号靠前的应该在前面。</p><p><strong>内部排序</strong>：数据元素全部放在内存中的排序。</p><p><strong>外部排序</strong>：数据元素太多不能同时放在内存中，根据排序过程的要求不能在内外存之间移动数据的排序。<strong>一般数据是存储在磁盘中的。</strong></p></blockquote><p>区分内外排序：</p><table><thead><tr><th>排序类型</th><th>数据存储</th><th>访问速度</th><th>支持的访问形式</th></tr></thead><tbody><tr><td>内排序</td><td>数据在内存中（数组）</td><td>快</td><td>下标随机访问</td></tr><tr><td>外排序</td><td>数据在磁盘中，数据量很大</td><td>慢</td><td>串行访问</td></tr></tbody></table><h3 id="_1-2-排序的运用" tabindex="-1"><a class="header-anchor" href="#_1-2-排序的运用" aria-hidden="true">#</a> 1.2 排序的运用</h3><p>下面就是按价格对手机进行排序：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/6341d7a797684a31ae2e6f567c9057fd.png" alt="image-20220424103625642" loading="lazy"></p><p>下面是根据综合得分对大学进行排名：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/d2d1f6a92aca95da78de2198ce021a3d.png" alt="image-20220424103843298" loading="lazy"></p><h3 id="_1-3-常见的排序算法" tabindex="-1"><a class="header-anchor" href="#_1-3-常见的排序算法" aria-hidden="true">#</a> 1.3 常见的排序算法</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/800519b135762278631075369f949b9c.png" alt="image-20220424104112902" loading="lazy"></p><h2 id="_2-常见排序算法的实现" tabindex="-1"><a class="header-anchor" href="#_2-常见排序算法的实现" aria-hidden="true">#</a> 2. 常见排序算法的实现</h2><h3 id="_2-1-插入排序" tabindex="-1"><a class="header-anchor" href="#_2-1-插入排序" aria-hidden="true">#</a> 2.1 插入排序</h3><h4 id="_2-1-1-基本思想" tabindex="-1"><a class="header-anchor" href="#_2-1-1-基本思想" aria-hidden="true">#</a> 2.1.1 基本思想</h4><p>直接插入排序是一种简单的插入排序法，其基本思想是：</p><p><strong>把待排序的记录按其关键码值的大小逐个插入到一个已经排好序的有序序列中，直到所有的记录插入完为止，得到一个新的有序序列 。</strong></p><p>简单来说就是：有一个有序区间，插入一个数据，依旧保持它有序。</p><h4 id="_2-1-2直接插入排序" tabindex="-1"><a class="header-anchor" href="#_2-1-2直接插入排序" aria-hidden="true">#</a> 2.1.2直接插入排序</h4><p><strong>当插入第i(i&gt;=1)个元素时，前面的array[0],array[1],…,array[i-1]已经排好序，此时用array[i]的排序码与 array[i-1],array[i-2],…的排序码顺序进行比较，找到插入位置即将array[i]插入，原来位置上的元素顺序后移。</strong></p><p>动图展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/627d7b9813a49e036cd717b3d60b50d0.gif" alt="20210223174254141" loading="lazy"></p><p>代码实现：（此处排的是升序）</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void InsertSort(int *a,int n)
{
	for (int i = 0; i &lt; n-1;i++)//end:[0:n-2]  end+1:[1:n-1]
	{
		int end = i;
		//[0,end]有序 把[end+1]插入进去，保持它依旧有序
		int tmp = a[end + 1];
		while (end &gt;= 0)
		{
			if (tmp &lt; a[end])//降序就是把 &lt; 变为 &gt; 
			{
				a[end + 1] = a[end];
				--end;
			}
			else
			{
				break;
			}
		}
		a[end + 1] = tmp;
		//此处有两种情况，第一种就是数据到了应该插入的位置（非a[0]），另一种就是数据要插入到a[0]的位置
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>直接插入排序的特性总结：</p><ol><li>元素集合越接近有序，直接插入排序算法的时间效率越高</li><li>时间复杂度：O(N^2) 最坏的情况（逆序）：1 + 2 + ······ + N 时间复杂度：O(N2) 最好：（有序）O(N)</li><li>空间复杂度：O(1)，它是一种稳定的排序算法</li><li>稳定性：稳定</li></ol></blockquote><h4 id="_2-1-3-希尔排序" tabindex="-1"><a class="header-anchor" href="#_2-1-3-希尔排序" aria-hidden="true">#</a> 2.1.3 希尔排序</h4><blockquote><p>希尔排序（ShellSort）又称为“缩小增量排序”。是1959年由D.L.Shell提出来的。该方法的基本思想是：<strong>先将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序</strong>。因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是很高的，因此希尔排序在时间效率上比前两种方法有较大提高。</p></blockquote><p>具体做法：首先确定一组增量d0，d1，d2，d3，…,dt-1()其中n&gt;d0&gt;d1&gt;…&gt;dt-1=1),对于i=0,1,2,…,t-1,依次进行下面的各趟处理:根据当前增量di将n个元素分成di个组,每组中元素的下标相隔为di;再对各组中元素进行直接插入排序.</p><p>动图展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/76f44ea58c9e4af381670fe28e1ce217.gif" alt="v2-f9616f6892819e579a2d4ab10256a732_b" loading="lazy"></p><p>1、<strong>预排序：大的数更快的到后面去，小的数更快的到前面去，尽可能地接近有序。</strong></p><p>举例：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/78da1877163e9f0987a1f73d42667a0f.png" alt="image-20220417091054918" loading="lazy"></p><p>gap为几，就将数字划分为几组数据，然后分别对这几组数据进行插入排序，例如在上面地例子中，首先对9、5、8、5进行插入排序，然后对1、7、4进行插入排序，然后再对2、6、3进行插入排序。这就是预排序。</p><blockquote><p>问：gap的大小和预排序后的数据有什么关系？</p><p>答：如果gap越小，数据跳跃越慢，但是预排序后的数据就越接近有序；如果gap越大，大的数据可以更快的到达最后，小的数据可以更快的到达前面，但它越不接近有序，只能说是相对有序。</p></blockquote><blockquote><p>问：希尔排序就一定比直接插入排序快吗？</p><p>答：不一定，当所给数组本来就是升序或者接近升序的时候，进行的预排序就相当于是无用功，相当于是白做的，此时的效率就不如直接插入排序了。当然，这种情况是很少的，一般所给的数据都是乱序或者接近逆序的，所以这种情况一般不去考虑。</p></blockquote><p>2、<strong>直接插入排序</strong></p><p><strong>直接插入排序就是gap为1时候的排序，就是直接插入排序，由于此时地数据已经接近有序，所以插入排序起来更为容易。</strong></p><blockquote><p>问：插入排序的效率在哪体现呢？</p><p>答：在间隔gap个数据进行插入排序时，相当于一次跨越gap个数据进行移动，这样从本质上来看相对于直接插入排序节省了很多次循环所花费的时间，下面举个例子来看：</p></blockquote><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/3660714e7c614d97bbee9b2d7f7c2352.png" alt="image-20220417092754508" loading="lazy"></p><blockquote><p>在经过一次gap为3的插入排序后，较小的三个数字3、2、1已经排到了最前面，中间的三个数字6、5、4已经到了中间，较大的三个数字9、8、7已经到了最后，这样我们在进行直接插入排序的时候，1只需要移动两次就能到达最前面，而如果没有进行gap为3的那次预排序的话，1需要移动8次进行8次循环才能到达它需要到达的位置，这就是希尔排序提高的效率所在。</p></blockquote><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//希尔排序:传统写法
void ShellSort(int* a, int n)
{
	int gap = n;
	while (gap &gt; 1)//这个地方不能是&gt;=1，因为经过后面的控制后，gap始终大于1，如果是&gt;=1，就会陷入死循环
	{
		gap = gap / 3 + 1;//保证最后一次一定是1，即最后有一次直接插入排序
		for (int k = 0; k &lt; gap; k++)
		{
			for (int i = k; i &lt; n - gap; i += gap)//为什么是n - gap?因为最后一个end是n-1-gap,end+gap一定小于n
			{
				int end = i;
				int tmp = a[end + gap];
				while (end &gt;= 0)
				{
					if (tmp &lt; a[end])
					{
						a[end + gap] = a[end];
						end -= gap;
					}
					else
						break;
				}
				a[end + gap] = tmp;
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是希尔排序的优化写法：</p><p><strong>将四层循环变为3层循环，当然，效率并没有提升，只是将代码的循环层数减少了一层，两者时间复杂度其实并没有太大的区别</strong></p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//希尔排序：优化写法
void ShellSort(int* a, int n)
{
	int gap = n;
	while (gap &gt; 1)//这个地方不能是&gt;=1，因为经过后面的控制后，gap始终大于1，如果是&gt;=1，就会陷入死循环
	{
		gap =gap/3 + 1;//保证最后一次一定是1，即最后有一次直接插入排序
		for (int i = 0; i &lt; n - gap; ++i)//为什么是n - gap?因为最后一个end是n-1-gap,end+gap一定小于n
		{
			int end = i;
			int tmp = a[end + gap];
			while (end &gt;= 0)
			{
				if (tmp &lt; a[end])
				{
					a[end + gap] = a[end];
					end -= gap;
				}
				else
					break;
			}
			a[end + gap] = tmp;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>希尔排序的特性总结：</p><blockquote><ol><li><p>希尔排序是对直接插入排序的优化。</p></li><li><p>当gap &gt; 1时都是预排序，目的是让数组更接近于有序。当gap == 1时，数组已经接近有序的了，这样就 会很快。这样整体而言，可以达到优化的效果。我们实现后可以进行性能测试的对比。</p></li><li><p>希尔排序的时间复杂度不好计算，因为gap的取值方法很多，导致很难去计算，因此在好些书中给出的 希尔排序的时间复杂度都不固定：</p><p>《数据结构(C语言版)》— 严蔚敏</p></li></ol></blockquote><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/5b8e5ee2709631acece6763009ed51c5.png" alt="image-20220417104317401" loading="lazy"></p><blockquote><p>《数据结构-用面相对象方法与C++描述》— 殷人昆</p></blockquote><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/11267f038cd6ddce4e0cfcd02e5a9a0b.png" alt="image-20220417104337855" loading="lazy"></p><blockquote><p>因为我们的gap是按照Knuth提出的方式取值的，而且Knuth进行了大量的实验统计，我们就暂时按照：==O(n1.25)到O(1.6*n1.25)==来算</p><ol start="4"><li>稳定性：不稳定</li></ol></blockquote><blockquote><p>如果我们自己算希尔排序的时间复杂度的话：</p><p><strong>预排序</strong>：</p><p>gap很大时，数据跳的很快，差不多是O(N)，内层循环几乎忽略不计，跳跃的很快（每次跳跃gap次）。</p><p>gap很小时，数据很接近有序，几乎不需要挪动，此时差不多也是O(N)。</p><p><strong>最外层循环：</strong></p><p>总共循环log3N次</p><p>所以我们粗略进行计算的时候时间复杂度：O(N*log3N)</p></blockquote><h3 id="_2-2-选择排序" tabindex="-1"><a class="header-anchor" href="#_2-2-选择排序" aria-hidden="true">#</a> 2.2 选择排序</h3><h4 id="_2-2-1-基本思想" tabindex="-1"><a class="header-anchor" href="#_2-2-1-基本思想" aria-hidden="true">#</a> 2.2.1 基本思想</h4><p>每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完 。</p><h4 id="_2-2-2-直接选择排序" tabindex="-1"><a class="header-anchor" href="#_2-2-2-直接选择排序" aria-hidden="true">#</a> 2.2.2 直接选择排序</h4><ul><li>在元素集合array[i]–array[n-1]中选择关键码最大(小)的数据元素</li><li>若它不是这组元素中的最后一个(第一个)元素，则将它与这组元素中的最后一个（第一个）元素交换</li><li>在剩余的array[i]–array[n-2]（array[i+1]–array[n-1]）集合中，重复上述步骤，直到集合剩余1个元素</li></ul><p>动态图：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/a2c7cbf6ea0c17a87a4b0831d7c60cec.gif" alt="SEL" loading="lazy"></p><blockquote><p>直接选择排序的特性总结：</p><ol><li>直接选择排序思考非常好理解，但是效率不是很好。实际中很少使用</li><li>时间复杂度：O(N^2)</li><li>空间复杂度：O(1)</li><li>稳定性：不稳定</li></ol></blockquote><p>选择排序代码实现：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void SelectSort(int* a, int n)
{
	
	int left = 0;
	int right = n - 1;
	while (left &lt; right)
	{
		int maxi = left;
		int mini = left;
        //下面为什么是左开右闭区间？因为maxi和mini已经假设left是最小或者最大的数了，所以不必再包含left了，但是rightb
		for (int i = left + 1; i &lt;= right; i++)
		{
			if (a[i] &lt; a[mini])
			{
				mini = i;
			}
			if (a[i] &gt; a[maxi])
			{
				maxi = i;
			}
		}
		Swap(&amp;a[left], &amp;a[mini]);
		//如果left和maxi重叠，在将mini和left交换之后，mini此时就等于maxi
		if (left == maxi)
		{
			maxi = mini;
		}
		Swap(&amp;a[right], &amp;a[maxi]);
		left++;
		right--;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-堆排序" tabindex="-1"><a class="header-anchor" href="#_2-2-3-堆排序" aria-hidden="true">#</a> 2.2.3 堆排序</h4><p>堆排序(Heapsort)是指利用堆积树（堆）这种数据结构所设计的一种排序算法，它是选择排序的一种。它是 通过堆来进行选择数据。需要注意的是排升序要建大堆，排降序建小堆。</p><h3 id="_2-3-交换排序" tabindex="-1"><a class="header-anchor" href="#_2-3-交换排序" aria-hidden="true">#</a> 2.3 交换排序</h3><blockquote><p>基本思想：所谓交换，就是根据序列中两个记录键值的比较结果来对换这两个记录在序列中的位置，交换排序的特点是：将键值较大的记录向序列的尾部移动，键值较小的记录向序列的前部移动。</p></blockquote><h4 id="_2-3-1冒泡排序" tabindex="-1"><a class="header-anchor" href="#_2-3-1冒泡排序" aria-hidden="true">#</a> 2.3.1冒泡排序</h4><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/8b8b46206ecca895870276ca5149d2c1.gif" alt="1145616330" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void BubbleSort(int* a, int n)
{
	for (int i = 0; i &lt; n; i++)
	{
        int exange = 0;
		for (int j = 0; j &lt; n - i - 1; j++)
		{
			if (a[j] &gt; a[j + 1])
			{
				Swap(&amp;a[j], &amp;a[j + 1]);
                exange = 1;
			}
		}
        if(exange == 0)//当有序的时候直接退出
            break;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冒泡排序的特性总结：</p><p>1.冒泡排序是一种非常容易理解的排序</p><p>2.时间复杂度：O(N^2) 最好情况：顺序有序：O(N)（最少得执行一次内层循环）</p><p>3.空间复杂度：O(1)</p><p>4.稳定性：稳定</p><h4 id="冒泡排序与插入排序的比较" tabindex="-1"><a class="header-anchor" href="#冒泡排序与插入排序的比较" aria-hidden="true">#</a> 冒泡排序与插入排序的比较</h4><p>相比之下，插入排序会更好一些，例如下面的这种情况：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 2 3 4 5 6 8 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种情况下插入排序要比较8此，但是冒泡排序要比较7 + 6 = 13次。当然。此时的时间复杂度都是O(N)。</p><p>但是在局部有序的情况下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 4 2 8 7 9 5 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>冒泡排序的优化基本不会体现出什么价值，但是插入排序却能充分利用局部有序的情况，使比较次数减少。</p><p><strong>总结：如果是顺序有序的情况，那么插入和冒泡是一样的；但是如果是局部有序，或者接近有序，那么插入的适应性更好，比较次数更少。</strong></p><h3 id="_2-3-2-快速排序" tabindex="-1"><a class="header-anchor" href="#_2-3-2-快速排序" aria-hidden="true">#</a> 2.3.2 快速排序</h3><h4 id="_2-3-2-1-快速排序的代码实现-三种思路" tabindex="-1"><a class="header-anchor" href="#_2-3-2-1-快速排序的代码实现-三种思路" aria-hidden="true">#</a> 2.3.2.1 快速排序的代码实现（三种思路）</h4><p>快速排序是Hoare于1962年提出的一种二叉树结构的交换排序方法，其基本思想为：<strong>任取待排序元素序列中的某元素作为基准值，按照该排序码将待排序集合分割成两子序列，左子序列中所有元素均小于基准值，右子序列中所有元素均大于基准值，然后最左右子序列重复该过程，直到所有元素都排列在相应位置上为止</strong>。</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>// 假设按照升序对array数组中[left, right)区间中的元素进行排序
void QuickSort(int array[], int left, int right)
{
	if (right - left &lt;= 1)
		return;

	// 按照基准值对array数组的 [left, right)区间中的元素进行划分
	int div = partion(array, left, right);

	// 划分成功后以div为边界形成了左右两部分 [left, div) 和 [div+1, right)
	// 递归排[left, div)
	QuickSort(array, left, div);

	// 递归排[div+1, right)
	QuickSort(array, div + 1, right);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述为快速排序递归实现的主框架，发现与二叉树前序遍历规则非常像，我们在写递归框架时可想想二叉树前序遍历规则即可快速写出来，后续只需分析如何按照基准值来对区间中数据进行划分的方式即可。</p><p>将区间按照基准值划分为左右两半部分的常见方式有：</p><ol><li><p><strong>hoare版本</strong></p><p>单趟排序：选出一个key，一般是第一个数或者最后一个数</p><p>要求：左边的值都比key要小，右边的值都比key要大。</p><p>动图展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/e2ef543195516b5ef4c44adc5eabce70.gif" alt="hoare" loading="lazy"></p><p>图像展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20fadbe0e8794591ce048476c67ef15a.png" alt="image-20220417161341875" loading="lazy"></p><p>总结：R找比key小的值，L找比key大的值，找到后交换，再重复上述过程，相遇之后，把相遇位置的值跟key交换。</p><p>问：当数字数目为偶数的时候，是否会出现不相遇的情况或者如何保证相遇位置的值一定比key小呢？</p><p>答：不会，因为R总是先于L移动，总会找到一个比key小的位置，即使L的后面不是一个小于key的数字，此时的R也会到达L所处的位置，因为之前经过交换，此时一定是一个比key小的数字。简单来收就是只有两种情况：R去碰L，或者L去碰R，无论哪一种，两者相遇的地方都是一个比key小的位置。</p><p>问：如果右边作key，那么第一轮排序后会变成什么样子的？</p><p>答：第一轮排序后如图所示： <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/b5d1140514dca8c0ff1931e554984ee9.png" alt="image-20220417170238685" loading="lazy"></p><p>此时要注意必须让左边先走，为了保证相遇点一定是一个比key大的数据。</p><p>快速排序单趟排序写法思路：</p><p>初始代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int PartSort(int *a,int left,int right)//快速排序单趟排序
{
	int keyi = left;
	while (left &lt; right)
	{
		//右边找小
		while (a[right] &gt; a[keyi])
		{
			right--;
		}
		//左边找大
		while (a[left] &lt; a[keyi])
		{
			left++;
		}
        Swap(&amp;a[left], &amp;a[right]);
	}
    Swap(&amp;a[keyi], &amp;a[left]);
    return left;//返回相遇的位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>很明显，上面的代码并不完善，无法处理两种情况，即下面的两种情况：</p><p><code>1 2 3 4 5</code></p><p><code>5 5 2 3 5</code>在这种情况下就会陷入死循环，因为5不大于5，right始终无法进行–操作，left也同样无法进行++操作，此时就会陷入死循环。</p><p>此时进行优化，在相等的时候也要进行–操作：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>   int PartSort(int *a,int left,int right)//快速排序单趟排序
   {
   	int keyi = left;
   	while (left &lt; right)
   	{
   		//右边找小
   		while (a[right] &gt;= a[keyi])
   		{
   			right--;
   		}
   		//左边找大
   		while (a[left] &lt;= a[keyi])
   		{
   			left++;
   		}
           Swap(&amp;a[left], &amp;a[right]);
   	}
       Swap(&amp;a[keyi], &amp;a[left]);
       return left;//返回相遇的位置
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时又出现了新的问题：如果right找不到比key小的，就会出现越界的风险，所以在进行<code>a[right]&gt;=a[keyi]</code>条件判断的前面还要加上一个条件，下面是代码的进一步优化：（最终版）</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int PartSort(int *a,int left,int right)//快速排序单趟排序
{
	int keyi = left;
	while (left &lt; right)
	{
		//右边找小
		while (left&lt;right &amp;&amp; a[right] &gt;= a[keyi])
		{
			right--;
		}
		//左边找大
		while (left &lt; right &amp;&amp; a[left] &lt;= a[keyi])
		{
			left++;
		}
        Swap(&amp;a[left], &amp;a[right]);
	}
    Swap(&amp;a[keyi], &amp;a[left]);
    return left;//返回相遇的位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时进行接下来的分析及操作：</p><p><strong>此时keyi所在的数据就不需要再进行移动了，已经放在了正确的位置。如果keyi的左边有序，右边再有序，那么整体就是有序的</strong>。此时就需要运用分治的思想，此时分别对右边进行单趟排序的递归，直到所有数据都有序，然后重复上面的数据，直到只有一个数据时为止，此时退出递归，整体就是有序的。</p><p><strong>快速排序主函数代码：</strong></p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>   void QuickSort(int* a,int begin,int end)
{
   	//当出现错位或者二者相等的时候就停止
   	if (begin &gt;= end)
   		return;
   
   	int keyi = PartSort(a, begin, end);
   	//分割出了两个子区间：[begin,keyi-1]keyi[keyi+1,end]
   	QuickSort(a, begin, keyi - 1);
   	QuickSort(a, keyi+1, end);
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>问：return的条件判断为什么是<code>begin &gt;= end</code>？而不能只是一个==呢？</strong></p><p><strong>答：比如当进入这个函数时，begin = 0，end = 2，keyi = 1，此时就会出现两个区间，就是[0,0]和[2,1]，如果只是相等的话，判断前面的条件自然没有什么问题，但是判断后面的不存在的区间时就不行了。</strong></p></blockquote><ol start="2"><li><p>挖坑法</p><p>动图展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2ffc140a0e4bf8d13f559eb0fbe6345a.gif" alt="挖坑法" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int PartSort2(int* a, int left, int right)
{
	int key = a[left];
	int hole = left;//记录坑的下标
	while (left &lt; right)
	{
		while (left&lt;right&amp;&amp; a[right] &gt;= key)//从右边找小于key的
		{
			right--;
		}
		a[hole] = a[right];//把找到的值放到坑位上去
		hole = right;//形成新的坑
		while (left&lt;right&amp;&amp;a[left] &lt;= key)//从左边找大于key的
		{
			left++;
		}
		a[hole] = a[left];//把找到的值放到坑位上去
		hole = left;//形成新的坑
	}
	a[left] = key;//将key放到相遇的位置上去（相遇的位置一定是坑）
	return left;//返回相遇位置的下标
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>问：挖坑法和hoare有什么区别吗？两个的效率是否一样？挖坑法是否就一定比hoare方法好呢？</strong></p><p><strong>答：挖坑法和hoare方法没有本质的区别，两个的时间复杂度也都是一样的，不存在谁优谁劣的问题，两者的好坏并没有严格的限定，挖坑法相对hoare方法来说，更容易理解，hoare方法过于抽象，有些不太好理解。需要注意的是：在使用两种方法经过第一轮排序后形成的结果并不一定是相同的，或者说二者大多数情况下都是不相同的，只有少数情况下才是相同的。</strong></p></blockquote></li><li><p>前后指针法</p><p>动图展示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/6a192f147c7020e2f75021611f0eadfc.gif" alt="前后指针" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//left作keyi
int PartSort3(int* a, int left, int right)
{
	int keyi = left;
	int prev = left;
	int cur = left + 1;
	while (cur &lt;= right)
	{
		//下面这一行代码的作用：当cur遇到比a[keyi]小的值后++prev，并且防止自己跟自己进行交换
		if (a[cur] &lt; a[keyi] &amp;&amp; a[++prev]!= a[cur])
			Swap(&amp;a[cur], &amp;a[prev]);

		cur++;
	}
	Swap(&amp;a[prev], &amp;a[keyi]);//将a[prev]和a[keyi]进行交换
	return prev;
}
//right作keyi
int PartSort3(int* a, int left, int right)
{
	int keyi = right;
	int cur = left;
	int prev = left - 1;
	while (cur&lt;right)
	{
		if (a[cur] &lt; a[keyi] &amp;&amp; a[++prev] != a[cur])
		{
			Swap(&amp;a[cur], &amp;a[prev]);
		}
		cur++;
	}
	Swap(&amp;a[++prev], &amp;a[keyi]);
	return prev;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>prev和cur的关系：</strong></p><p><strong>1、cur还没遇到比key大的值时，prev紧跟着cur，一前一后。</strong></p><p><strong>2、cur遇到比key大的值时，prev和cur之间间隔着一段比key大的值的区间。</strong></p></blockquote></li></ol><h4 id="_2-3-2-2-时间复杂度" tabindex="-1"><a class="header-anchor" href="#_2-3-2-2-时间复杂度" aria-hidden="true">#</a> 2.3.2.2 时间复杂度</h4><p>快速排序的时间复杂度：</p><p>最好情况：每次选的都是中位数O(N*log2N)</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/822e6a187d4fc340de2346382edcff5e.png" alt="image-20220419170635866" loading="lazy"></p><p>最坏情况：每次选的key是最小的或最大的O(N2)</p><h4 id="_2-3-2-3-快速排序的优化" tabindex="-1"><a class="header-anchor" href="#_2-3-2-3-快速排序的优化" aria-hidden="true">#</a> 2.3.2.3 快速排序的优化</h4><p><strong>1.随机选key</strong></p><p><strong>2.三数选中</strong></p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int GetMidIndex(int*a,int  left,int  right)
{
	int mid = left + (right- left) / 2;
	if (a[left] &lt; a[mid])// left mid
	{
		if (a[mid] &lt; a[right])//left mid right
		{
			return mid;
		}
		else if (a[left] &gt; a[right])//right left mid
		{
			return left;
		}
		else//left right mid
		{
			return right;
		}
	}
	else//mid   left
	{
		if (a[right] &gt; a[left])//mid left right
		{
			return left;
		}
		else if (a[mid] &lt; a[right])//mid right left
		{
			return right;
		}
		else//right mid left
		{
			return mid;
		}
	}
}

//left作keyi
int PartSort3(int* a, int left, int right)
{
	int midi = GetMidIndex(a, left, right);
    Swap(&amp;a[midi], &amp;a[left]);
	int keyi = left;
	int prev = left;
	int cur = left + 1;
	while (cur &lt;= right)
	{
		//下面这一行代码的作用：当cur遇到比a[keyi]小的值后++prev，并且防止自己跟自己进行交换
		if (a[cur] &lt; a[keyi] &amp;&amp; a[++prev]!= a[cur])
			Swap(&amp;a[cur], &amp;a[prev]);

		cur++;
	}
	Swap(&amp;a[prev], &amp;a[keyi]);//将a[prev]和a[keyi]进行交换
	return prev;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：三数取中法依然无法完全解决针对某种特殊情况序列复杂度变为O(n2)的情况。</p><p>3.小区间优化</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/1a67e55fa6d320383e8a72b03a386d1f.png" alt="image-20220419192053842" loading="lazy"></p><p><strong>快排递归调用就是展开简化图就是一个二叉树，我们从上图中可以看到，快速排序的主要花销在数据比较少的时候，就是begin和end之间的数比较少或者begin和end相等的时候，这个时候的递归次数相当多，我们可以在数字比较少的时候去调用其它的排序函数，以此来达到优化开快排的目的。</strong></p><p>简而言之：区间很小时，不再使用递归划分的思路让它有序，而是直接使用插入排序对小区间排序，减少递归调用。</p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void QuickSort(int* a,int begin,int end)
{
	//当出现错位或者二者相等的时候就停止
	if (begin &gt;= end)
		return;
	
	//小区间直接使用插入排序控制有序
	if (end - begin &lt;= 10)
	{
		InsertSort(a + begin, end - begin + 1);
	}
	int keyi = PartSort3(a, begin, end);
	//分割出了两个子区间：[begin,keyi-1]keyi[keyi+1,end]
	QuickSort(a, begin, keyi - 1);
	QuickSort(a, keyi+1, end);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-3-快速排序非递归" tabindex="-1"><a class="header-anchor" href="#_2-3-2-3-快速排序非递归" aria-hidden="true">#</a> 2.3.2.3 快速排序非递归</h4><p>两种思路进行实现：</p><h5 id="_2-3-2-3-1-栈模拟递归实现" tabindex="-1"><a class="header-anchor" href="#_2-3-2-3-1-栈模拟递归实现" aria-hidden="true">#</a> 2.3.2.3.1 栈模拟递归实现</h5><p>思路：</p><p><strong>将需要使用到的下标放到栈上临时存储（为什么只存下标？因为PartSort()函数只需要用到函数名和下标），然后使用栈的性质，每当拿出一对下标时，将得到的新下标依次压入栈中，这样，始终都是先对右边的下标进行排序，模拟了递归的性质。</strong></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/079858f522d812594312eab72b433dcb.png" alt="image-20220422195516422" loading="lazy"></p><p>代码实现：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//快速排序的非递归形式1：通过栈来实现
void QuickSort3(int* a, int begin, int end)
{
	ST st;
	StackInit(&amp;st);
	StackPush(&amp;st, begin);
	StackPush(&amp;st, end);
	while (!StackEmpty(&amp;st))
	{
		int end = StackTop(&amp;st);
		StackPop(&amp;st);
		int begin = StackTop(&amp;st);
		StackPop(&amp;st);
		int keyi = PartSort(a, begin, end);
		//[begin , keyi - 1] [keyi+1,end]
		if (begin &lt; keyi - 1)
		{
			StackPush(&amp;st, begin);
			StackPush(&amp;st, keyi - 1);
		}
		if (keyi + 1 &lt; end)
		{
			StackPush(&amp;st, keyi + 1);
			StackPush(&amp;st, end);
		}
	}
	StackDestory(&amp;st);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-2-3-2-队列模拟二叉树遍历实现" tabindex="-1"><a class="header-anchor" href="#_2-2-2-3-2-队列模拟二叉树遍历实现" aria-hidden="true">#</a> 2.2.2.3.2 队列模拟二叉树遍历实现</h5><p>思路：</p><p>将需要使用到的下标放到队列中来进行临时存储，每次从队列中拿出一对下标时，又将新形成的下标放入到队列中去，直到队列为空时停止。</p><p>图示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/f0c813bb9c8eccf06e81e5e78dddb445.png" alt="image-20220422204533821" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//快速排序的非递归形式1：通过队列来实现
void QuickSort3(int* a, int begin, int end)
{
	Queue q;
	QueueInit(&amp;q);
	QueuePush(&amp;q, begin);
	QueuePush(&amp;q, end);
	while (!QueueEmpty(&amp;q))
	{
		int left = QueueFront(&amp;q);
		QueuePop(&amp;q);
		int right = QueueFront(&amp;q);
		QueuePop(&amp;q);
		int keyi = PartSort(a, left, end);//[left,keyi-1][keyi+1,right]
		if (left &lt; keyi - 1)
		{
			QueuePush(&amp;q, left);
			QueuePush(&amp;q, keyi - 1);
		}
		if (keyi + 1 &lt; right)
		{
			QueuePush(&amp;q, keyi + 1);
			QueuePush(&amp;q, right);
		}
	}
	QueueDestory(&amp;q);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-归并排序" tabindex="-1"><a class="header-anchor" href="#_2-4-归并排序" aria-hidden="true">#</a> 2.4 归并排序</h3><h4 id="_2-4-1-基本思想" tabindex="-1"><a class="header-anchor" href="#_2-4-1-基本思想" aria-hidden="true">#</a> 2.4.1 基本思想</h4><p><strong>归并排序（MERGE-SORT）是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有 序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。 归并排序</strong></p><p>核心步骤：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/409b11fc280352b94999019532a04a6b.png" alt="image-20220422210059119" loading="lazy"></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/982cc6fad502de29d4af238100569cdf.gif" alt="查看源图像" loading="lazy"></p><h4 id="_2-4-2-归并排序的实现" tabindex="-1"><a class="header-anchor" href="#_2-4-2-归并排序的实现" aria-hidden="true">#</a> 2.4.2 归并排序的实现</h4><h5 id="_2-4-2-1-方法一-递归版" tabindex="-1"><a class="header-anchor" href="#_2-4-2-1-方法一-递归版" aria-hidden="true">#</a> 2.4.2.1 方法一：递归版</h5><p>分解思路：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/c82035cdcc62be64dedd60a1668eddec.png" alt="image-20220423161317000" loading="lazy"></p><p>归并思路：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/4ac55bc76b4845fd6ccfeeca35191d92.png" alt="image-20220423162141519" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//归并排序
void _MergeSort(int* a, int begin, int end,int*tmp)//辅助函数
{
	if (begin &gt;= end)
	{
		return;
	}
	int mid = (begin + end) / 2;
	//[begin,mid][mid+1,end]
	_MergeSort(a, begin, mid, tmp);
	_MergeSort(a, mid + 1, end, tmp);
	//此处必须这样划分区间，如果划分为[begin,mid-1][mid,end]时就会出现死循环的现象,比如[1,2]
	//归并
	int begin1 = begin, end1 = mid;//begin1和end1用来控制第一个区间
	int begin2 = mid + 1, end2 = end;//begin2和end2用来控制第二个区间
	int index = begin;//下标每次都从begin位置开始
	while (begin1 &lt;= end1 &amp;&amp; begin2 &lt;= end2)//当两个区间有一个区间到达最后时就停止
	{
		if (a[begin1] &lt; a[begin2])
		{
			tmp[index++] = a[begin1++];
		}
		else
		{
			tmp[index++] = a[begin2++];
		}
	}
	while (begin1 &lt;= end1)//如果第一个区间没有结束就从第一个区间继续挪动数据
	{
		tmp[index++] = a[begin1++];
	}
	while (begin2 &lt;= end2)//如果第二个区间没有结束就从第二个区间继续把挪动数据
	{
		tmp[index++] = a[begin2++];
	}
	memcpy(a+begin, tmp+begin, (end - begin + 1) * sizeof(int));//运用内存拷贝函数
}
void MergeSort(int* a,int n)
{
	int* tmp = (int*)malloc(sizeof(int) * n);//开辟临时数组空间
	assert(tmp);//防止开辟失败
	_MergeSort(a, 0, n - 1,tmp);
	free(tmp);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-4-2-2-方法二-非递归版" tabindex="-1"><a class="header-anchor" href="#_2-4-2-2-方法二-非递归版" aria-hidden="true">#</a> 2.4.2.2 方法二：非递归版</h5><p>第一个版本：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void MergeSort(int* a, int n)
{
	int* tmp = (int*)malloc(sizeof(int) * n);
	assert(tmp);
	int gap = 1;
	while (gap&lt;n)
	{
		for (int i = 0;i&lt;n;i+=2*gap)//为什么在gap前面有一个2，因为是两组数据进行归并
		{
			int begin1 = i, end1 = i + gap - 1;
			int begin2 = i+gap, end2 = i + 2 * gap - 1;
			int index = i;
            //printf(&quot;[%d,%d] [%d,%d]\\n&quot;, begin1 , end1 , begin2 , end2);
			while (begin1 &lt;= end1 &amp;&amp; begin2 &lt;= end2)
			{
				if (a[begin1] &lt; a[begin2])
				{
					tmp[index++] = a[begin1++];
				}
				else
				{
					tmp[index++] = a[begin2++];
				}
			}
			while (begin1 &lt;= end1)
			{
				tmp[index++] = a[begin1++];
			}
			while (begin2 &lt;= end2)
			{
				tmp[index++] = a[begin2++];
			}
		}
		memcpy(a, tmp, n*sizeof(int));
		gap *= 2;
	}
	free(tmp);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码经过打印，在测试非2的幂次方个数目的数组时程序就会出现问题，例如当我们测试10个数时看一下打印的下标：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2f5e6483ad4313ba5adaedf519b4a551.png" alt="image-20220423185520974" loading="lazy"></p><p>发生了越界（总共有10个数字，下标最大为9，所以程序出现了问题）</p><p>下面将进行一次修正，将越界的下标数字强制修改为n-1，修正部分的代码如下所示：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>if (end1 &gt;= n)
{
	end1 = n - 1;
}
if (begin2 &gt;= n)
{
	begin2 = n - 1;
}
if (end2 &gt;= n)
{
	end2 = n - 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修正后打印结果为：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/0c096d16fb242c92fbe5abb24b518524.png" alt="image-20220423190011161" loading="lazy"></p><p><strong>此时程序依旧不对，为什么？因为index会发生越界，当下标为[8,9]和[9,9]的时候，程序会在<code>while(begin1 &lt;= end1 &amp;&amp; begin2 &lt;= end2)</code>这个位置进入循环两次，然后此时index会变成10（最开始的index为8），然后后面因为<code>begin2==end2</code>会再次进入循环，此时的index就会出现越界访问的现象。</strong></p><p>此处进行分析：如果end1越界，我们是可以修正的，如果end2越界，begin2没有越界，我们也是可以修正end2的，如果begin2越界了，那么第二个区间就会直接不存在，此时需要再对上面的代码进行修改。</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>if (end1 &gt;= n)
{
	end1 = n - 1;
}
if (begin2 &gt;= n)
{
	begin2 = n;
    end2 = n - 1;
}
if (end2 &gt;= n)
{
	end2 = n - 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改的部分就是：如果begin2越界，直接让[begin2,end2]这个区间不存在即可。</p><p>完整代码如下所示：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void MergeSort(int* a, int n)
{
	int* tmp = (int*)malloc(sizeof(int) * n);
	assert(tmp);
	int gap = 1;
	while (gap&lt;n)
	{
		for (int i = 0;i&lt;n;i+=2*gap)//为什么在gap前面有一个2，因为是两组数据进行归并
		{
			int begin1 = i, end1 = i + gap - 1;
			int begin2 = i+gap, end2 = i + 2 * gap - 1;
			//end1越界
			if (end1 &gt;= n)
			{
				end1 = n - 1;
			}
			//begin2越界
			if (begin2 &gt;= n)
			{
				begin2 = n;
				end2 = n - 1;
			}
			//只有end2越界
			if (end2 &gt;= n)
			{
				end2 = n - 1;
			}
			
			int index = i;
			
			while (begin1 &lt;= end1 &amp;&amp; begin2 &lt;= end2)
			{
				if (a[begin1] &lt; a[begin2])
				{
					tmp[index++] = a[begin1++];
				}
				else
				{
					tmp[index++] = a[begin2++];
				}
			}
			while (begin1 &lt;= end1)
			{
				tmp[index++] = a[begin1++];
			}
			
			while (begin2 &lt;= end2)
			{
				tmp[index++] = a[begin2++];
			}
		}
		memcpy(a, tmp, n*sizeof(int));
		gap *= 2;
	}
	free(tmp);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-归并排序的外排序" tabindex="-1"><a class="header-anchor" href="#_2-4-3-归并排序的外排序" aria-hidden="true">#</a> 2.4.3 归并排序的外排序</h4><h5 id="_2-4-3-1-归并外排序的思想" tabindex="-1"><a class="header-anchor" href="#_2-4-3-1-归并外排序的思想" aria-hidden="true">#</a> 2.4.3.1 归并外排序的思想</h5><p><strong>思想：当所要排序的的数据量太多或者文件太大，无法直接在内存里排序，而需要依赖外部设备时，就会使用到外部排序。</strong></p><blockquote><p>算法描述：</p><ol><li>将所要排序的文件平均分割成若干个可以加载到内存中的小文件</li><li>将每个小文件中的数据加载到内存中，使用快速排序法或者其它排序方法将每个小文件中的数据排成有序</li><li>将内存中有序的数据重新写回到文件中，此时达到了文件中归并的先决条件</li></ol></blockquote><ol><li><p>归并思路如下图所示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/fd64f57d8edc5f293c35abcfd1fff68f.png" alt="image-20220425150548589" loading="lazy"></p><p>上图中的(1)和(2)和(3)和(4)分别是第一次归并、第二次归并、第三次归并和第四次归并，后面的没有再列举出来。</p><p>注意：实际中的归并思路有很多种，并不是只有这一种，此处把这个思路列举出来只是为了后面的应用举例。</p></li></ol><h4 id="_2-4-3-2-归并外排序的实现" tabindex="-1"><a class="header-anchor" href="#_2-4-3-2-归并外排序的实现" aria-hidden="true">#</a> 2.4.3.2 归并外排序的实现</h4><p>归并排序外排序函数代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>//归并排序的文件排序
//file1和file2是要被归并的文件，mfile是存放归并后的数据的文件
void _MergeFile(const char*file1, const char*file2,const char* mfile)
{
    //将三个文件打开
	FILE* fout1 = fopen(file1, &quot;r&quot;);
	if (fout1 == NULL)
	{
		printf(&quot;打开文件失败！\\n&quot;);
		exit(-1);
	}

	FILE* fout2 = fopen(file2, &quot;r&quot;);
	if (fout2 == NULL)
	{
		printf(&quot;打开文件失败！\\n&quot;);
		exit(-1);
	}

	FILE* fin = fopen(mfile, &quot;w&quot;);
	if (fin == NULL)
	{
		printf(&quot;打开文件失败！\\n&quot;);
		exit(-1);
	}
	//开始归并
	int num1, num2;//存储file1和file2中读取的数据
    //先从文件中读取出一个数据，ret1是为了判断是否读取结束，如果等于EOF就说明已经读取结束
	int ret1 = fscanf(fout1, &quot;%d\\n&quot;, &amp;num1);
	int ret2 = fscanf(fout2, &quot;%d\\n&quot;, &amp;num2);
    //存放新的数据
	while (ret1!= EOF &amp;&amp; ret2 != EOF)//当有一个文件读取结束时读取就结束
	{
        //此处是因为要排升序，所以将小的数据读入新的文件中
		if (num1 &lt; num2)
		{
			fprintf(fin, &quot;%d\\n&quot;, num1);//将小的数据num1读入新的文件中
			ret1 = fscanf(fout1, &quot;%d\\n&quot;, &amp;num1);//重新读入新的数据
		}
		else
		{
			fprintf(fin, &quot;%d\\n&quot;, num2);//同上
			ret2 = fscanf(fout2, &quot;%d\\n&quot;, &amp;num2);
		}
	}
    //如果存在未读取完的文件，将剩余的数据读取到新的文件mfile中
	while (ret1!=EOF)
	{
		fprintf(fin, &quot;%d\\n&quot;, num1);
		ret1 = fscanf(fout1, &quot;%d\\n&quot;, &amp;num1);
	}
	while (ret2!=EOF)
	{
		fprintf(fin, &quot;%d\\n&quot;, num2);
		ret2 = fscanf(fout1, &quot;%d\\n&quot;, &amp;num2);
	}
	fclose(fout1);
	fclose(fout2);
	fclose(fin);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-3-归并外排序使用举例" tabindex="-1"><a class="header-anchor" href="#_2-4-3-3-归并外排序使用举例" aria-hidden="true">#</a> 2.4.3.3 归并外排序使用举例</h4><p>这个例子中有文件file，此文件中总共是有100个数据，我们是要将它分成10组，每组数据有10个数据，每个数据放在一个文件中，文件名从<code>1到10</code>，然后存放新文件的名字最开始是<code>12</code>，表示这个文件要存放文件1和2归并后的数据，同理，后面的123就是存放文件12和3归并后的数据。</p><p>代码实现：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void MergeSortFile(const char* file)//此处的file是要被排序的文件
{
	FILE* fout = fopen(file, &quot;r&quot;);
	if (fout == NULL)
	{
		printf(&quot;打开文件失败！\\n&quot;);
		exit(-1);
	}
	//分割成一段一段数据，内存排序后写到小文件
	int n = 10;
	int a[10];
	int i = 0;
	int num = 0;
	char subfile[20] = { 0 };
	int filei = 1;
	while (fscanf(fout, &quot;%d\\n&quot;, &amp;num) != EOF)
	{
		if (i &lt; n-1)//前9个数据进去
		{
			a[i++] = num;
		}
		else
		{
			a[i] = num;//这是第10个数据
			QuickSort(a, 0, n - 1);
			sprintf(subfile, &quot;%d&quot;, filei++);
			FILE* fin = fopen(subfile, &quot;w&quot;);
			if (fin == NULL)
			{
				printf(&quot;打开文件失败\\n&quot;);
				exit(-1);
			}
			for (int i = 0; i &lt; n; i++)
			{
				fprintf(fin, &quot;%d\\n&quot;, a[i]);
			}
			fclose(fin);
			i = 0;
			memset(a, 0, sizeof(int)*n);
		}
	}
	//利用互相归并到文件，实现整体有序
	//····
	char mfile[100] = &quot;12&quot;;
	char file1[100] = &quot;1&quot;;
	char file2[100] = &quot;2&quot;;
	for (int i = 2; i &lt;= n; i++)
	{
		//读取file1和file2，进行归并出mfile
		_MergeFile(file1, file2, mfile);//将file1和file2进行归并到mfile中	
		strcpy(file1, mfile);//此处将mfile的名字复制给file1
		sprintf(file2, &quot;%d&quot;, i+1);
		sprintf(mfile, &quot;%s%d&quot;, mfile,i + 1);
	}
	fclose(fout);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-4-归并排序的特性总结" tabindex="-1"><a class="header-anchor" href="#_2-4-4-归并排序的特性总结" aria-hidden="true">#</a> 2.4.4 归并排序的特性总结</h4><ol><li>归并的缺点在于需要O(N)的空间复杂度，归并排序的思考更多的是解决在磁盘中的外排序问题。</li><li>时间复杂度：O(N*logN) 如何理解归并排序的时间复杂度？ <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/57c171c5539166024671fba819d5533b.png" alt="image-20220423205120424" loading="lazy"></li><li>空间复杂度：O(N) 注意：实际上应该是O(N + log2N)（N是开辟的数组的空间，log2N是开辟栈帧的层数（递归版本，非递归就没有），log2N太小，可以看成是常数，几乎忽略不计，所以就是O(N)）</li><li>稳定性：稳定</li></ol><h3 id="_2-5-七大排序性能测试比较" tabindex="-1"><a class="header-anchor" href="#_2-5-七大排序性能测试比较" aria-hidden="true">#</a> 2.5 七大排序性能测试比较</h3><h4 id="_2-5-1-测试比较代码" tabindex="-1"><a class="header-anchor" href="#_2-5-1-测试比较代码" aria-hidden="true">#</a> 2.5.1 测试比较代码</h4><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>// 测试排序的性能对比
void TestOP()
{
	srand((unsigned)time(0));
	const int N = 100000;
	int* a1 = (int*)malloc(sizeof(int) * N);
	int* a2 = (int*)malloc(sizeof(int) * N);
	int* a3 = (int*)malloc(sizeof(int) * N);
	int* a4 = (int*)malloc(sizeof(int) * N);
	int* a5 = (int*)malloc(sizeof(int) * N);
	int* a6 = (int*)malloc(sizeof(int) * N);
	int* a7 = (int*)malloc(sizeof(int) * N);
	assert(a1);
	assert(a2);
	assert(a3);
	assert(a4);
	assert(a5);
	assert(a6);
	assert(a7);

	for (int i = 0; i&lt;N; i++)
	{
		a1[i] = rand();
		a1[i] = N-i;
		a2[i] = a1[i];
		a3[i] = a1[i];
		a4[i] = a1[i];
		a5[i] = a1[i];
		a6[i] = a1[i];
		a7[i] = a1[i];
	}
	int begin1 = clock();
	InsertSort(a1, N);
	int end1 = clock();
	int begin2 = clock();
	ShellSort(a2, N);
	int end2 = clock();
	int begin3 = clock();
	SelectSort(a3, N);
	int end3 = clock();
	int begin4 = clock();
	HeapSort(a4, N);
	int end4 = clock();
	int begin5 = clock();
	QuickSort(a5, 0, N - 1);
	int end5 = clock();
	int begin6 = clock();
	MergeSort(a6, N);
	int end6 = clock();
	int begin7 = clock();
	BubbleSort(a7, N);
	int end7 = clock();
	printf(&quot;InsertSort:%d\\n&quot;, end1 - begin1);
	printf(&quot;ShellSort:%d\\n&quot;, end2 - begin2);
	printf(&quot;SelectSort:%d\\n&quot;, end3 - begin3);
	printf(&quot;HeapSort:%d\\n&quot;, end4 - begin4);
	printf(&quot;QuickSort:%d\\n&quot;, end5 - begin5);
	printf(&quot;MergeSort:%d\\n&quot;, end6 - begin6);
	printf(&quot;BubbleSort:%d\\n&quot;, end7 - begin7);

	free(a1);
	free(a2);
	free(a3);
	free(a4);
	free(a5);
	free(a6);
	free(a7);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-测试比较结果" tabindex="-1"><a class="header-anchor" href="#_2-5-2-测试比较结果" aria-hidden="true">#</a> 2.5.2 测试比较结果</h4><p>注意：在VS2019release版本下进行测试，此时编译器进行了一系列优化。</p><p>当N为10000时：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/272d7fcd1c7f55637c2cdbcb574d25f2.png" alt="image-20220423221717247" loading="lazy"></p><p>当N为100000时：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/84905c3c406f63c1d0094334b37d5394.png" alt="image-20220423221808048" loading="lazy"></p><p>此时继续进行测试快速排序、堆排序、希尔排序、归并排序：</p><p>当N为1000000：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/e793df554c6fe4802b1d8760d8b8a427.png" alt="image-20220423221907517" loading="lazy"></p><p>当N为10000000：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/45545554598f0000996cfaba74b5f33e.png" alt="image-20220423221948756" loading="lazy"></p><p>当N为20000000：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/e466a1ec3265678865ceea33d613a66e.png" alt="image-20220423222352147" loading="lazy"></p><h3 id="_2-6-非比较排序" tabindex="-1"><a class="header-anchor" href="#_2-6-非比较排序" aria-hidden="true">#</a> 2.6 非比较排序</h3><h4 id="_2-6-1-计数排序" tabindex="-1"><a class="header-anchor" href="#_2-6-1-计数排序" aria-hidden="true">#</a> 2.6.1 计数排序</h4><h5 id="_2-6-1-1-计数排序的思想" tabindex="-1"><a class="header-anchor" href="#_2-6-1-1-计数排序的思想" aria-hidden="true">#</a> 2.6.1.1 计数排序的思想</h5><p>思想：计数排序又称为鸽巢原理，是对哈希直接定址法的变形应用。 操作步骤：</p><ol><li>统计相同元素出现次数</li><li>根据统计的结果将序列回收到原来的序列中</li></ol><p>图示： <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/8ff0ea2f54b5a345787eb2ac52513ed3.png" alt="image-20220424121029857" loading="lazy"></p><p>代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void CountSort(int* a,int n)
{
	//求出最大值和最小值
	int max = a[0];
	int min = a[0];
	for (int i = 1; i &lt; n; i++)
	{
		if (a[i] &gt; max)
		{
			max = a[i];
		}
		if (a[i] &lt; min)
		{
			min = a[i];
		}
	}
	int size = max - min + 1;//映射表数组的大小
	//建立映射数组
	int* countArray = (int*)calloc(size,sizeof(int));
	assert(countArray);
	//计数
	for (int i = 0; i &lt; n; i++)
	{
		countArray[a[i] - min]++;
	}
	//放回到原来的数组中：排序
	int j = 0;//j用来记录原来数组的下标
	for (int i = 0; i &lt; size; i++)//i用来记录映射表数组元素的小标
	{
		while(countArray[i]--)
		{
			a[j++] = i + min;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-1-2-计数排序的复杂度" tabindex="-1"><a class="header-anchor" href="#_2-6-1-2-计数排序的复杂度" aria-hidden="true">#</a> 2.6.1.2 计数排序的复杂度</h5><blockquote><p>时间复杂度：O(N + range)</p><p>空间复杂度：O(range)</p></blockquote><p><strong>注意：range = max - min +1</strong></p><p>说明：计数排序适用于范围集中的数据</p><p>注意：计数排序支持负数但是不支持浮点数、字符串等。</p><h2 id="_3-排序算法复杂度及稳定性分析" tabindex="-1"><a class="header-anchor" href="#_3-排序算法复杂度及稳定性分析" aria-hidden="true">#</a> 3.排序算法复杂度及稳定性分析</h2><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/06054fbb0eb0066e3dc1bbb5aff69b55.png" alt="image-20220424150445356" loading="lazy"></p><p>稳定性分析：</p><p>直接插入排序：稳定。</p><p>希尔排序：不稳定。<strong>相同的数可能被分配到不同的gap组中。</strong></p><p>选择排序：不稳定。如下图所示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/e715fdf6491b319305f1d9e11e4a008e.png" alt="image-20220424150957648" loading="lazy"></p><p>在上图中，选出最小的数字1，和前面的3交换之后两个3的相对位置就发生了交换，说明选择排序是不稳定的。</p><p>堆排序：不稳定。如下图所示：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/7382f7031da7b403a9057df9f74a81d3.png" alt="image-20220424151402859" loading="lazy"></p><p>此时是一个大堆，我们想要得到的是升序的数据，此时如果将8和4进行交换后，此时两个8的相对位置就发生了改变，所以堆排序不具有稳定性。</p><p>冒泡排序：稳定。</p><p>快速排序：不稳定。因为最终keyi要放到中间去。</p><p>归并排序：稳定。因为在归并的时候，左边的先下就始终是稳定的。</p><p>图表总结：</p><table><thead><tr><th>排序方法</th><th>平均情况</th><th>最好情况</th><th>最坏情况</th><th>辅助空间</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n2)</td><td>O(n2)</td><td>O(n2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>简单选择排序</td><td>O(n2)</td><td>O(n2)</td><td>O(n2)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>直接插入排序</td><td>O(n2)</td><td>O(n)</td><td>O(n2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>希尔排序</td><td>O(nlog2n)~O(n2)</td><td>O(n1.3)</td><td>O(n2)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>堆排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>归并排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n)</td><td>稳定</td></tr><tr><td>快速排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n2)</td><td>O(log2n)~O(n)</td><td>不稳定</td></tr></tbody></table>`,226),a=[l];function s(v,r){return n(),e("div",null,a)}const m=i(t,[["render",s],["__file","七大排序.html.vue"]]);export{m as default};
