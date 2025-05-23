import{_ as i,r as p,o as c,c as u,a,w as e,F as r,e as l,b as s,d as n}from"./app.afb47d0b.js";const d={},k=l(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>shell \u6587\u4EF6\u4EE5 <code>.sh</code> \u4E3A\u540E\u7F00</p><p>\u4F7F\u7528 <code>bash main.sh</code> \u547D\u4EE4\u6267\u884C shell \u811A\u672C</p><p>\u53EF\u5B9A\u4E49\u8F93\u5165\u53C2\u6570\u8FDB\u884C\u7EC8\u7AEF<code>\u4EA4\u4E92</code>\uFF1A <code>bash main.sh start -l</code></p><p>#!\u58F0\u660Ebash\u89E3\u91CA\u5668\u7684\u4F4D\u7F6E <code>#!/bin/bash</code>, \u56E0\u4E3A\u53EF\u80FD\u4F1A\u6709\u591A\u4E2Abash\u7248\u672C, \u5982\u679C\u5347\u7EA7\u4E86bash\u7248\u672C\u540E\u53EF\u8BBE\u7F6E\u4E3A <code>#!/usr/bin/env bash</code></p></div><p><strong>hello.sh</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre></div><h3 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> Variable</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><ol><li>\u533A\u5206\u5927\u5C0F\u5199</li><li>\u8D4B\u503C<code>=</code>\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C</li></ol></div><p><strong>\u53D8\u91CF\u5B9A\u4E49</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u65B9\u5F0F\u4E00: \u76F4\u63A5\u521D\u59CB\u5316\u53D8\u91CF\u503C</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;john&quot;</span>

<span class="token comment"># \u65B9\u5F0F\u4E8C: \u901A\u8FC7\u547D\u4EE4\u83B7\u53D6\u5E76\u8BBE\u7F6E\u53D8\u91CF\u503C</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CURPATH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> -c <span class="token string">&quot;ssh&quot;</span><span class="token variable">)</span></span>

<span class="token comment"># \u65B9\u5F0F\u4E09: \u8BFB\u53D6\u7EC8\u7AEF\u8F93\u5165\u53C2\u6570</span>
<span class="token builtin class-name">read</span> -t <span class="token number">20</span> -p <span class="token string">&quot;enter version &gt;&gt;&gt; &quot;</span> version
</code></pre></div><p><strong>\u53D8\u91CF\u4F7F\u7528</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B9\u5F0F\u4E00\uFF1A&quot;$p&quot;</span>
<span class="token comment"># \u4F7F\u7528\u53D8\u91CF</span>
<span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$CURPATH</span>&quot;</span>
<span class="token comment"># \u63A7\u5236\u53F0\u8F93\u5165\u53C2\u6570</span>
<span class="token string">&quot;<span class="token variable">$#</span>&quot;</span>   <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>   <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>

<span class="token comment"># \u65B9\u5F0F\u4E8C: $p</span>
<span class="token variable">$CURPATH</span>

<span class="token comment"># \u65B9\u5F0F\u4E09: \${p}</span>
<span class="token variable">\${p}</span>  <span class="token variable">\${<span class="token operator">#</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53D8\u91CF\u7684\u64CD\u4F5C</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u53EA\u8BFB(\u4E0D\u53EF\u66F4\u6539)</span>
<span class="token builtin class-name">readonly</span> name
<span class="token comment"># \u5220\u9664</span>
<span class="token builtin class-name">unset</span> name
</code></pre></div><p>\u53D8\u91CF\u7C7B\u578B</p><ul><li>\u73AF\u5883\u53D8\u91CF</li><li>\u5C40\u90E8\u53D8\u91CF</li><li>shell\u53D8\u91CF</li></ul><p><strong>\u793A\u4F8B</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">basePath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> public <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${basePath}</span>    <span class="token comment"># /Users/coulsonzero/Documents/web/public</span>
</code></pre></div><h3 id="\u63A7\u5236\u53F0\u8F93\u5165\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u8F93\u5165\u53C2\u6570" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u8F93\u5165\u53C2\u6570</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4ECE\u7EC8\u7AEF\u4F20\u9012\u53C2\u6570\u4F5C\u7528:</p><ol><li>\u8FDB\u884C<code>\u7EC8\u7AEF\u4EA4\u4E92</code></li><li>\u8BBE\u7F6E<code>\u53EF\u6267\u884C\u6743\u9650</code></li></ol></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token variable">$0</span>          <span class="token comment"># sh\u6587\u4EF6\u540D(\u8DEF\u5F84)</span>
<span class="token variable">$#</span>          <span class="token comment"># \u6240\u6709\u4ECE\u7EC8\u7AEF\u4F20\u9012\u5230shell\u811A\u672C\u7684\u53C2\u6570\u7684\u6570</span>
<span class="token variable">$1</span>  <span class="token variable">$2</span>  <span class="token variable">$3</span>  <span class="token comment"># \u8F93\u51FA\u53C2\u6570</span>
</code></pre></div><p><strong>\u8F93\u5165\u53C2\u6570\u793A\u4F8B</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># bash | sh</span>
$ <span class="token function">bash</span> push.sh dev      <span class="token comment"># $#: 2, #0: &quot;push.sh&quot;, $1: &quot;dev&quot;</span>
$ <span class="token function">bash</span> push.sh tag -d   <span class="token comment"># $#: 3, $0: &quot;push.sh&quot;, $1: &quot;tag&quot;, $2=&quot;-d&quot;</span>
</code></pre></div><p><strong>\u8F93\u5165\u53C2\u6570\u6570\u91CF</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5224\u65AD\u8F93\u5165\u53C2\u6570\u6570\u91CF &gt; 1 \uFF1F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement</span>
<span class="token keyword">else</span>
    <span class="token comment"># statement</span>
<span class="token keyword">fi</span>
</code></pre></div><p><strong>\u8F93\u5165\u53C2\u6570\u503C</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5224\u65AD\u7B2C\u4E8C\u4E2A\u8F93\u5165\u53C2\u6570\u662F\u5426\u4E3A&#39;-l&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;-l&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement</span>
<span class="token comment"># \u5224\u65AD\u7B2C\u4E8C\u4E2A\u8F93\u5165\u53C2\u6570\u662F\u5426\u4E3A\u7A7A -z \u76F8\u5F53\u4E8E ! -n</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -z <span class="token variable">$2</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;undefined the second argument&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;hello shell !&quot;</span>     <span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token string">&quot;hello <span class="token variable">$name</span>&quot;</span>       <span class="token comment"># \u5B57\u7B26\u4E32\u683C\u5F0F\u5316</span>
<span class="token variable">\${<span class="token operator">#</span>name}</span>            <span class="token comment"># \u957F\u5EA6</span>
<span class="token variable">\${<span class="token operator">#</span>name<span class="token operator">:</span>1<span class="token operator">:</span>4}</span>        <span class="token comment"># \u5B50\u4E32\u5207\u7247</span>
<span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> io<span class="token variable">\`</span></span> <span class="token comment"># \u67E5\u627E\u5B57\u7B26i\u6216o\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u7D22\u5F15</span>
</code></pre></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span>, <span class="token string">&quot;pie&quot;</span>, <span class="token string">&quot;pear&quot;</span><span class="token punctuation">)</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;orange&quot;</span>     <span class="token comment"># arr[i]\u8BBE\u7F6E\u503C</span>
<span class="token variable">\${arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>           <span class="token comment"># \u8BFB\u53D6\u6570\u7EC4\u503C</span>
<span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>           <span class="token comment"># \u8BFB\u53D6\u6570\u7EC4\u6240\u6709\u5143\u7D20</span>
<span class="token variable">\${<span class="token operator">#</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>          <span class="token comment"># \u6570\u7EC4\u957F\u5EA6</span>
<span class="token variable">\${<span class="token operator">#</span>arr<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>          <span class="token comment"># \u6570\u7EC4\u957F\u5EA6</span>
</code></pre></div><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># This is a single-line comment.</span>

:<span class="token operator">&lt;&lt;</span><span class="token string">EOF
This is a milt-line comment
EOF</span>

:<span class="token operator">&lt;&lt;</span><span class="token string">&#39;
This is a milt-line comment also
&#39;</span>

:<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
This is a milt-line comment also
<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input-output" tabindex="-1"><a class="header-anchor" href="#input-output" aria-hidden="true">#</a> Input &amp; Output</h3><p><strong>input</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># -t \u7B49\u5F85\u65F6\u95F4(\u79D2), -p \u63D0\u793A\u8F93\u5165</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter name: &quot;</span> name
<span class="token builtin class-name">read</span> -t <span class="token number">30</span> -p <span class="token string">&quot;Enter name: &quot;</span> name
</code></pre></div><p><strong>output</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>

<span class="token comment"># \u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u8F93\u51FA</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello <span class="token variable">$name</span>&quot;</span>

<span class="token comment"># \u6362\u884C\u8F93\u51FA</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;please enter your name: &quot;</span>


<span class="token builtin class-name">printf</span> <span class="token string">&quot;Input a character: &quot;</span> <span class="token comment"># \u5B9A\u4E49\u8F93\u51FA\u524D\u7F00</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>letter<span class="token entity" title="\\n">\\n</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbols" tabindex="-1"><a class="header-anchor" href="#symbols" aria-hidden="true">#</a> Symbols</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># &amp;&amp; \u547D\u4EE4\u987A\u5E8F\u6267\u884C</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span>
<span class="token comment"># |  \u7BA1\u9053 \uFF08\u8FDE\u7ED3\u4E0A\u4E2A\u6307\u4EE4\u7684\u6807\u51C6\u8F93\u51FA\uFF0C\u505A\u4E3A\u4E0B\u4E2A\u6307\u4EE4\u7684\u6807\u51C6\u8F93\u5165\uFF09</span>
<span class="token function">who</span> <span class="token operator">|</span> <span class="token function">wc</span> -l
</code></pre></div><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> operators</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&amp;&amp;</span> <span class="token operator">||</span> <span class="token operator">!</span>
<span class="token comment"># ==</span>
-eq
<span class="token comment"># !=</span>
-ne
<span class="token comment"># &gt;</span>
-gt
<span class="token comment"># &lt;</span>
-lt
<span class="token comment"># &gt;=</span>
-ge
<span class="token comment"># &lt;=</span>
-le
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-statement" tabindex="-1"><a class="header-anchor" href="#if-statement" aria-hidden="true">#</a> If Statement</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5199\u6CD5\u4E00</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">else</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">fi</span>

<span class="token comment"># \u5199\u6CD5\u4E8C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">else</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">fi</span>


<span class="token comment"># \u5199\u6CD5\u4E8C</span>
<span class="token keyword">if</span>   <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;a&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;c&quot;</span>
<span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;other&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Tips</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># [ ]\u4E2D\u95F4\u9700\u8981\u7A7A\u683C\u9694\u5F00!</span>
<span class="token comment"># ==</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;--l&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># !=</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;--l&quot;</span> <span class="token punctuation">]</span>

<span class="token comment"># \u957F\u5EA6\u4E0D\u4E3A0 (not null)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># \u957F\u5EA6\u4E3A0 (null)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token punctuation">]</span>     <span class="token comment"># ! -n &quot;$p&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f run.bash <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5176\u4ED6\u5199\u6CD5</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># ==</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$p</span> <span class="token operator">==</span> <span class="token string">&quot;--l&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># -z</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> -n <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># [[ ]] \u91CC\u9762\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 &amp;&amp;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span>  <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
</code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> -c <span class="token string">&quot;ssh&quot;</span><span class="token variable">)</span></span> -gt <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre></div><h3 id="case-statement" tabindex="-1"><a class="header-anchor" href="#case-statement" aria-hidden="true">#</a> Case Statement</h3><blockquote><p>case\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5199\u8D77\u6765\u66F4\u7B80\u6D01\u660E\u4E86\uFF0C\u4F46\u662F\u4E0D\u80FD\u4F7F\u7528-z\u4E4B\u7C7B\u7684\u5224\u65AD\uFF01</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;dev&quot;</span>   <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh                        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span> <span class="token function">bash</span> master-push.sh                     <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;both&quot;</span>  <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> master-push.sh <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;tag&quot;</span>   <span class="token punctuation">)</span> main                                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *       <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>   <span class="token string">&quot;not input argument&quot;</span>             <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">$str</span> <span class="token keyword">in</span>
    <span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5B57\u6BCD&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token number">0</span>-99999<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6570\u5B57&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>,.?<span class="token operator">!</span><span class="token punctuation">]</span>   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B26\u53F7&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *        <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5176\u4ED6&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre></div><h3 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> For Loop</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><h3 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> While Loop</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span> $i<span class="token operator">&lt;=</span><span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;int++&quot;</span>
<span class="token keyword">done</span>
</code></pre></div><h3 id="break-and-continue" tabindex="-1"><a class="header-anchor" href="#break-and-continue" aria-hidden="true">#</a> break and continue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;\u8F93\u5165 1 \u5230 5 \u4E4B\u95F4\u7684\u6570\u5B57:&quot;</span>
    <span class="token builtin class-name">read</span> num
    <span class="token keyword">case</span> <span class="token variable">$num</span> <span class="token keyword">in</span>
        <span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token operator">|</span><span class="token number">4</span><span class="token operator">|</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u6570\u5B57\u4E3A <span class="token variable">$num</span>!&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u6570\u5B57\u4E0D\u662F 1 \u5230 5 \u4E4B\u95F4\u7684! \u6E38\u620F\u7ED3\u675F&quot;</span>
            <span class="token builtin class-name">continue</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6E38\u620F\u7ED3\u675F&quot;</span>    <span class="token comment"># break</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u542F\u52A8\u51FD\u6570\u5FC5\u987B\u7F6E\u4E8E\u9876\u90E8</span>
main
</code></pre></div><h3 id="\u6267\u884C-bash-shell-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C-bash-shell-\u811A\u672C" aria-hidden="true">#</a> \u6267\u884C Bash shell \u811A\u672C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6267\u884Cshell\u6587\u4EF6</span>
<span class="token function">sh</span> deploy.sh
<span class="token function">bash</span> deploy.sh

<span class="token comment"># \u5237\u65B0</span>
<span class="token builtin class-name">source</span> shellFile.sh
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49-shell-\u4EA4\u4E92\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-shell-\u4EA4\u4E92\u547D\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 shell \u4EA4\u4E92\u547D\u4EE4</h3>`,66),v=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("$ "),s("span",{class:"token function"},"sh"),n(` ./start.sh stop
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"close"'),n(`

$ `),s("span",{class:"token function"},"sh"),n(` start.sh start
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"running"'),n(`

$ `),s("span",{class:"token function"},"sh"),n(` start.sh deploy
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"deploy\u65E0\u4EFB\u4F55\u64CD\u4F5C"'),n(`
`)])])],-1),m=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`

`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("}")]),n(" -ge "),s("span",{class:"token number"},"1"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"$1"),n(),s("span",{class:"token keyword"},"in"),n(`
        `),s("span",{class:"token string"},'"start"'),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"running"'),n("      "),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token string"},'"stop"'),n(),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"close"'),n("        "),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        *      `),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('\u65E0\u4EFB\u4F55\u64CD\u4F5C"')]),n("   "),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"else"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"
    [\u57FA\u7840\u547D\u4EE4]
    1) start: \u542F\u52A8
    2) stop : \u505C\u6B62\u8FDB\u7A0B

    \u793A\u4F8B\uFF1Abash main.sh start
    "`),n(`
`),s("span",{class:"token keyword"},"fi"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=l(`<h3 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u76F4\u63A5\u9000\u51FAshell\u811A\u672C, \u540E\u7EED\u547D\u4EE4\u4E0D\u518D\u6267\u884C</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>  <span class="token comment"># success</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>  <span class="token comment"># failure: \u975E0</span>
</code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><h3 id="push-sh" tabindex="-1"><a class="header-anchor" href="#push-sh" aria-hidden="true">#</a> push.sh</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token builtin class-name">set</span> -e


<span class="token builtin class-name">echo</span> <span class="token string">&#39;&gt;&gt;&gt; ===== starting push... ===== &lt;&lt;&lt;&#39;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> status
<span class="token comment"># shellcheck disable=SC2162</span>
<span class="token builtin class-name">read</span> -t <span class="token number">60</span> -p <span class="token string">&quot;[commit] &gt;&gt;&gt; &quot;</span> commit_msg
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$commit_msg</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">git</span> reset
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;[dev] You haven&#39;t entered any comments !&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">else</span>
  <span class="token function">git</span> commit -m <span class="token string">&quot;[commit]: <span class="token variable">$commit_msg</span>&quot;</span>
  <span class="token function">git</span> pull origin main
  <span class="token function">git</span> push origin main
  <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&gt;&gt;&gt; ===== ending push... ===== &lt;&lt;&lt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="golang\u9879\u76EEpush" tabindex="-1"><a class="header-anchor" href="#golang\u9879\u76EEpush" aria-hidden="true">#</a> golang\u9879\u76EEpush</h3><details class="custom-container details"><summary>golang\u9879\u76EE\u53D1\u5E03</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUR</span><span class="token operator">=</span><span class="token string">&quot;shell&quot;</span>

<span class="token comment"># shellcheck disable=SC2120</span>
<span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;-d&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>         <span class="token comment"># \u5224\u65AD\u7B2C\u4E8C\u4E2A\u8F93\u5165\u53C2\u6570\u4E3A&#39;-d&#39; ?</span>
       <span class="token function">bash</span> tag-delete.sh
   <span class="token keyword">elif</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>           <span class="token comment"># \u5224\u65AD\u7B2C\u4E8C\u4E2A\u8F93\u5165\u53C2\u6570\u4E3A\u7A7A ?</span>
       <span class="token function">bash</span> tag-release.sh
   <span class="token keyword">else</span>                             <span class="token comment"># \u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u53C2\u6570</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&#39;undefined the second argument &#39;</span>
   <span class="token keyword">fi</span>
   <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># shellcheck disable=SC2164</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$CUR</span>
<span class="token comment"># \u5224\u65AD\u8F93\u5165\u53C2\u6570\u6570\u91CF &gt; 1 \uFF1F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>}</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;dev&quot;</span>   <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh                        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span> <span class="token function">bash</span> master-push.sh                     <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;both&quot;</span>  <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> master-push.sh <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;tag&quot;</span>   <span class="token punctuation">)</span> main                                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>   <span class="token string">&quot;not input argument&quot;</span>                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;
    [Bash\u57FA\u7840\u547D\u4EE4]:
    1) dev    : \u63A8\u9001dev
    2) master : \u63A8\u9001master
    3) both   : \u540C\u65F6\u63A8\u9001dev\u4E0Emaster
    4) tag    : \u63A8\u9001tag
    5) tag -d : \u5220\u9664tag

    \u547D\u4EE4\u793A\u4F8B: sh push.sh dev
    &quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sprintboot\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#sprintboot\u90E8\u7F72" aria-hidden="true">#</a> SprintBoot\u90E8\u7F72</h3><details class="custom-container details"><summary>SpringBoot \u90E8\u7F72\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#\u53EF\u53D8\u53C2\u6570\u53D8\u91CF</span>
<span class="token assign-left variable">languageType</span><span class="token operator">=</span><span class="token string">&quot;javac&quot;</span> <span class="token comment">#\u652F\u6301 java,javac,netcore \u53D1\u5E03</span>
<span class="token comment">#\u53C2\u6570\u503C\u7531pom\u6587\u4EF6\u4F20\u9012</span>
<span class="token assign-left variable">baseZipName</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${package-name}</span>-<span class="token variable">\${activeProfile}</span>&quot;</span> <span class="token comment">#\u538B\u7F29\u5305\u540D\u79F0 publish-test.zip\u7684publish</span>
<span class="token assign-left variable">packageName</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${package-name}</span>&quot;</span> <span class="token comment">#\u547D\u4EE4\u542F\u52A8\u5305\u540D xx.jar\u7684xx</span>
<span class="token assign-left variable">mainclass</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${boot-main}</span>&quot;</span> <span class="token comment">#java -cp\u542F\u52A8\u65F6\uFF0C\u6307\u5B9Amain\u5165\u53E3\u7C7B;\u547D\u4EE4\uFF1Ajava -cp conf;lib\\*.jar;\${packageName}.jar \${mainclass}</span>

<span class="token comment">#\u4F8B\u5B50</span>
<span class="token comment"># baseZipName=&quot;publish-test&quot; #\u538B\u7F29\u5305\u540D\u79F0 publish-test.zip\u7684publish</span>
<span class="token comment"># packageName=&quot;publish&quot; #\u547D\u4EE4\u542F\u52A8\u5305\u540D publish.jar\u7684xx</span>

<span class="token comment">#\u56FA\u5B9A\u53D8\u91CF</span>
<span class="token assign-left variable">basePath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\`/<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token assign-left variable">baseZipPath</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${basePath}</span>/<span class="token variable">\${baseZipName}</span>.zip&quot;</span>  <span class="token comment">#\u538B\u7F29\u5305\u8DEF\u5F84</span>
<span class="token assign-left variable">baseDirPath</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${basePath}</span>&quot;</span> <span class="token comment">#\u89E3\u538B\u90E8\u7F72\u78C1\u76D8\u8DEF\u5F84</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span> <span class="token comment">#\u8FDB\u7A0Bpid</span>

<span class="token comment">#\u89E3\u538B</span>
<span class="token keyword">function</span> <span class="token function-name function">shenniu_unzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B---------------------------------------------&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u538B\u7F29\u5305\u8DEF\u5F84\uFF1A<span class="token variable">\${baseZipPath}</span>&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> $<span class="token punctuation">{</span>baseZipPath<span class="token punctuation">}</span><span class="token variable">\`</span></span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E0D\u5B58\u5728\u538B\u7F29\u5305\uFF1A<span class="token variable">\${baseZipPath}</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B\u78C1\u76D8\u8DEF\u5F84\uFF1A<span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F00\u59CB\u89E3\u538B...&quot;</span>

        <span class="token comment">#\u89E3\u538B\u547D\u4EE4</span>
        <span class="token function">unzip</span> -od <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span> <span class="token variable">\${baseZipPath}</span>

        <span class="token comment">#\u8BBE\u7F6E\u6267\u884C\u6743\u9650</span>
        <span class="token function">chmod</span> +x <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span>

        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B\u5B8C\u6210\u3002&quot;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">#\u68C0\u6D4Bpid</span>
<span class="token keyword">function</span> <span class="token function-name function">getPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u68C0\u6D4B\u72B6\u6001---------------------------------------------&quot;</span>
    <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> -n $<span class="token punctuation">{</span>packageName<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FD0\u884Cpid\uFF1A<span class="token variable">\${pid}</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u672A\u8FD0\u884C&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u542F\u52A8\u7A0B\u5E8F</span>
<span class="token keyword">function</span> <span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">#\u542F\u52A8\u524D\uFF0C\u5148\u505C\u6B62\u4E4B\u524D\u7684</span>
    stop
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u7A0B\u5E8F\u5931\u8D25\uFF0C\u65E0\u6CD5\u542F\u52A8&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u7A0B\u5E8F---------------------------------------------&quot;</span>

        <span class="token comment">#\u9009\u62E9\u8BED\u8A00\u7C7B\u578B</span>
        <span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7A0B\u5E8F\u7C7B\u578B(java,javac,netcore)\uFF0C\u4E0B\u4E00\u6B65\u6309\u56DE\u8F66\u952E(\u9ED8\u8BA4\uFF1A<span class="token variable">\${languageType}</span>)\uFF1A&quot;</span> read_languageType
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${read_languageType}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">languageType</span><span class="token operator">=</span><span class="token variable">\${read_languageType}</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u9009\u62E9\u7A0B\u5E8F\u7C7B\u578B\uFF1A<span class="token variable">\${languageType}</span>&quot;</span>

        <span class="token comment">#\u8FDB\u5165\u8FD0\u884C\u5305\u76EE\u5F55</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>

        <span class="token comment">#\u5206\u7C7B\u542F\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;javac&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${mainclass}</span> <span class="token punctuation">]</span>
            <span class="token keyword">then</span>
                <span class="token function">nohup</span> java -cp conf:lib<span class="token punctuation">\\</span>*.jar:<span class="token variable">\${packageName}</span>.jar <span class="token variable">\${mainclass}</span> <span class="token operator">&gt;</span><span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${packageName}</span>.out <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
               <span class="token comment">#nohup java -cp conf:lib\\*.jar:\${packageName}.jar \${mainclass} &gt;/dev/null 2&gt;&amp;1 &amp;</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;java&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token function">nohup</span> java -jar <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span>.jar <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
            <span class="token comment"># java -jar \${baseDirPath}/\${baseZipName}/\${packageName}.jar</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;netcore&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token comment">#nohup dotnet run \${baseDirPath}/\${baseZipName}/\${packageName} &gt;/dev/null 2&gt;&amp;1 &amp;</span>
            <span class="token function">nohup</span> <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
        <span class="token keyword">fi</span>

        <span class="token comment">#\u67E5\u8BE2\u662F\u5426\u6709\u542F\u52A8\u8FDB\u7A0B</span>
        getPid
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u542F\u52A8&quot;</span>
            <span class="token comment">#nohup\u65E5\u5FD7</span>
            <span class="token function">tail</span> -n <span class="token number">50</span> -f <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${packageName}</span>.out
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u5931\u8D25&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u505C\u6B62\u7A0B\u5E8F</span>
<span class="token keyword">function</span> <span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    getPid
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u7A0B\u5E8F---------------------------------------------&quot;</span>
        <span class="token function">kill</span> -9 <span class="token variable">\${pid}</span>

        getPid
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token comment">#stop</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u5931\u8D25&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u6210\u529F&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u542F\u52A8\u65F6\u5E26\u53C2\u6570\uFF0C\u6839\u636E\u53C2\u6570\u6267\u884C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>}</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token keyword">case</span> <span class="token variable">\${1}</span> <span class="token keyword">in</span>
        <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
            stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;unzip&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">#\u6267\u884C\u89E3\u538B</span>
            shenniu_unzip
            <span class="token comment">#\u6267\u884C\u542F\u52A8</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${1}</span>\u65E0\u4EFB\u4F55\u64CD\u4F5C&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;
    command\u5982\u4E0B\u547D\u4EE4\uFF1A
    unzip\uFF1A\u89E3\u538B\u5E76\u542F\u52A8
    start\uFF1A\u542F\u52A8
    stop\uFF1A\u505C\u6B62\u8FDB\u7A0B
    restart\uFF1A\u91CD\u542F

    \u793A\u4F8B\u547D\u4EE4\u5982\uFF1A./shenniu_publish start
    &quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u8F93\u5165\u53C2\u6570\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u53C2\u6570\u5224\u65AD" aria-hidden="true">#</a> \u8F93\u5165\u53C2\u6570\u5224\u65AD</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">set</span> -e

<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUR</span><span class="token operator">=</span><span class="token string">&quot;shell&quot;</span>

<span class="token comment"># shellcheck disable=SC2164</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$CUR</span>
<span class="token comment"># \u5224\u65AD\u8F93\u5165\u53C2\u6570\u6570\u91CF &gt; 1 \uFF1F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>}</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;dev&quot;</span>   <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh                        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span> <span class="token function">bash</span> master-push.sh                     <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;both&quot;</span>  <span class="token punctuation">)</span> <span class="token function">bash</span> dev-push.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> master-push.sh <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;tag&quot;</span>   <span class="token punctuation">)</span> <span class="token keyword">case</span> <span class="token variable">$2</span> <span class="token keyword">in</span>
              <span class="token string">&quot;-d&quot;</span><span class="token punctuation">)</span> <span class="token function">bash</span> tag-delete.sh                <span class="token punctuation">;</span><span class="token punctuation">;</span>
              <span class="token string">&quot;&quot;</span>  <span class="token punctuation">)</span> <span class="token function">bash</span> tag-release.sh               <span class="token punctuation">;</span><span class="token punctuation">;</span>
              *   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;undefined second argument!&#39;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
              <span class="token keyword">esac</span>                                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>   <span class="token string">&quot;not input argument&quot;</span>                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;
    [Bash\u57FA\u7840\u547D\u4EE4]:
    1) dev    : \u63A8\u9001dev
    2) master : \u63A8\u9001master
    3) both   : \u540C\u65F6\u63A8\u9001dev\u4E0Emaster
    4) tag    : \u63A8\u9001tag
    5) tag -d : \u5220\u9664tag

    \u547D\u4EE4\u793A\u4F8B: bash push.sh dev
    &quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><ul><li>name: command not found</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u53D8\u91CF\u8D4B\u503C&quot;=&quot;\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulsonzero&quot;</span>
</code></pre></div><ul><li>[] &amp; if[ ]: command not found</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># if [ ]: \u4E2D\u95F4\u9700\u8981\u7A7A\u683C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;great&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;pope&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div><ul><li>linux \u7A7A\u683C\u548C window \u7A7A\u683C\u4E0D\u4E00\u81F4</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> start.sh
<span class="token comment"># \u6DFB\u52A0\u6B64\u547D\u4EE4\u4FDD\u5B58</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">ff</span><span class="token operator">=</span>unix
</code></pre></div>`,18);function h(g,q){const t=p("CodeGroupItem"),o=p("CodeGroup");return c(),u(r,null,[k,a(o,null,{default:e(()=>[a(t,{title:"Bash"},{default:e(()=>[v]),_:1}),a(t,{title:"start.sh"},{default:e(()=>[m]),_:1})]),_:1}),b],64)}var y=i(d,[["render",h],["__file","shell.html.vue"]]);export{y as default};
