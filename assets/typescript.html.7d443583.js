import{_ as e,r as t,o as p,c as o,b as n,d as s,a as l,F as c,e as i}from"./app.afb47d0b.js";const r={},u={id:"typescript",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#",-1),k={href:"https://www.tslang.cn",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="getting-start" tabindex="-1"><a class="header-anchor" href="#getting-start" aria-hidden="true">#</a> Getting Start</h2><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> global <span class="token function">add</span> typescript
</code></pre></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ tsc -v
</code></pre></div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> OverView</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> hello<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span>
</code></pre></div><h3 id="data-type" tabindex="-1"><a class="header-anchor" href="#data-type" aria-hidden="true">#</a> Data type</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// Basic type</span>
<span class="token keyword">const</span> num <span class="token operator">:</span> <span class="token builtin">number</span>  <span class="token operator">=</span> <span class="token number">12</span>
<span class="token keyword">const</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> name<span class="token operator">:</span> <span class="token builtin">string</span>  <span class="token operator">=</span> <span class="token string">&#39;John Smith&#39;</span>
</code></pre></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Array</span>
<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// Tuple</span>
<span class="token keyword">let</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;John Smith&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Enum</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span> Red<span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue <span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// any</span>
<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">12</span>
x <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>	<span class="token comment">// ok</span>
x <span class="token operator">=</span> <span class="token boolean">false</span>   <span class="token comment">// ok</span>

<span class="token comment">// any[]</span>
<span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;free&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// \`|\` (or)</span>
<span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
z <span class="token operator">=</span> <span class="token number">12</span>
z <span class="token operator">=</span> <span class="token string">&#39;John Smith&#39;</span>
z <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// ?   (option)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5B57\u6BB5</span>
	engine<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token comment">// \u6784\u9020\u51FD\u6570</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>engine<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
	<span class="token punctuation">}</span>

	<span class="token comment">// \u65B9\u6CD5</span>
	<span class="token function">disp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u52A8\u673A\u4E3A :   &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	firstName<span class="token operator">:</span> <span class="token builtin">string</span>
	lastName<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> customer<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	firstName<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
	lastName<span class="token operator">:</span> <span class="token string">&quot;Hanks&quot;</span><span class="token punctuation">,</span>
	sayHi<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Hi there&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ILoan</span> <span class="token punctuation">{</span>
	interest<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AgriLoan</span> <span class="token keyword">implements</span> <span class="token class-name">ILoan</span> <span class="token punctuation">{</span>
	interest<span class="token operator">:</span> <span class="token builtin">number</span>
	rebate<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>interest<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rebate<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>interest <span class="token operator">=</span> interest
		<span class="token keyword">this</span><span class="token punctuation">.</span>rebate <span class="token operator">=</span> rebate
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><ul><li>TypeScript vscode /bin/sh: ts-node: command not found</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> global <span class="token function">add</span> ts-node
</code></pre></div>`,22);function m(b,h){const a=t("ExternalLinkIcon");return p(),o(c,null,[n("h1",u,[d,s(),n("a",k,[s("TypeScript"),l(a)])]),v],64)}var y=e(r,[["render",m],["__file","typescript.html.vue"]]);export{y as default};
