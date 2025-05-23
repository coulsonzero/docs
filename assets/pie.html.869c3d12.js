import{_ as n,e as s}from"./app.afb47d0b.js";const a={},t=s(`<h1 id="\u997C\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u997C\u72B6\u56FE" aria-hidden="true">#</a> \u997C\u72B6\u56FE</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="\u57FA\u7840\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u997C\u56FE" aria-hidden="true">#</a> \u57FA\u7840\u997C\u56FE</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Email&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Union Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Video Ads&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="series" tabindex="-1"><a class="header-anchor" href="#series" aria-hidden="true">#</a> Series</h2><h3 id="_1-radius-\u5706\u73AF" tabindex="-1"><a class="header-anchor" href="#_1-radius-\u5706\u73AF" aria-hidden="true">#</a> 1. radius [\u5706\u73AF]</h3><h4 id="\u5355\u4E2A\u4E3A\u7F29\u653E\u6BD4\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u4E3A\u7F29\u653E\u6BD4\u4F8B" aria-hidden="true">#</a> \u5355\u4E2A\u4E3A\u7F29\u653E\u6BD4\u4F8B</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h4 id="\u591A\u4E2A\u4E3A\u5706\u73AF-\u4E2D\u5FC3\u4E3A\u7A7A" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u4E3A\u5706\u73AF-\u4E2D\u5FC3\u4E3A\u7A7A" aria-hidden="true">#</a> \u591A\u4E2A\u4E3A\u5706\u73AF (\u4E2D\u5FC3\u4E3A\u7A7A)</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;64%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u5706\u73AF\u95F4\u9694-itemstyle" tabindex="-1"><a class="header-anchor" href="#\u5706\u73AF\u95F4\u9694-itemstyle" aria-hidden="true">#</a> \u5706\u73AF\u95F4\u9694 itemStyle</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    borderRadius<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    borderColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
    borderWidth<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code>itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#c23531&#39;</span><span class="token punctuation">,</span>
    shadowBlur<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    shadowColor<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u73AB\u7470\u56FE-rosetype" tabindex="-1"><a class="header-anchor" href="#\u73AB\u7470\u56FE-rosetype" aria-hidden="true">#</a> \u73AB\u7470\u56FE roseType</h3><div class="language-text ext-text"><pre class="language-text"><code>roseType: &#39;area&#39;,
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>roseType: <span class="token string">&#39;radius&#39;</span>,
</code></pre></div><h3 id="\u4F4D\u7F6E\u5E03\u5C40-\u5C45\u4E2D\u663E\u793A-center" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E\u5E03\u5C40-\u5C45\u4E2D\u663E\u793A-center" aria-hidden="true">#</a> \u4F4D\u7F6E\u5E03\u5C40(\u5C45\u4E2D\u663E\u793A) center</h3><div class="language-text ext-text"><pre class="language-text"><code>center: [&#39;50%&#39;, &#39;50%&#39;],
</code></pre></div><h3 id="\u9009\u4E2D\u6548\u679C-selectedmode" tabindex="-1"><a class="header-anchor" href="#\u9009\u4E2D\u6548\u679C-selectedmode" aria-hidden="true">#</a> \u9009\u4E2D\u6548\u679C selectedMode</h3><div class="language-text ext-text"><pre class="language-text"><code>selectedMode: &#39;single&#39;,
</code></pre></div><h3 id="\u6807\u7B7E-label" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E-label" aria-hidden="true">#</a> \u6807\u7B7E label</h3><p><strong>\u9ED8\u8BA4\u663E\u793A\u4E00\u4E2A\uFF0C\u5207\u6362\u663E\u793A\u4E0D\u91CD\u53E0</strong> \u5199\u6CD5\u4E00</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>label<span class="token operator">:</span> <span class="token punctuation">{</span>
    normal<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>		<span class="token comment">//&#39;inner&#39;</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;{b}\\n\\n{c}%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4F7F\u6807\u7B7E\u4E0D\u91CD\u53E0</span>
        focus<span class="token operator">:</span> <span class="token string">&#39;self&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5199\u6CD5\u4E8C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>label<span class="token operator">:</span> <span class="token punctuation">{</span>
    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
    focus<span class="token operator">:</span> <span class="token string">&#39;self&#39;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6807\u7B7E\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u989C\u8272" aria-hidden="true">#</a> \u6807\u7B7E\u989C\u8272</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>label<span class="token operator">:</span> <span class="token punctuation">{</span>
	color<span class="token operator">:</span> <span class="token string">&#39;rgba(255, 255, 255, 0.3)&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="\u6807\u7B7E\u7EBF-labelline" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u7EBF-labelline" aria-hidden="true">#</a> \u6807\u7B7E\u7EBF labelLine</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    	color<span class="token operator">:</span> <span class="token string">&#39;rgba(255, 255, 255, 0.3)&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    smooth<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    length2<span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u60AC\u6D6E-emphasis" tabindex="-1"><a class="header-anchor" href="#\u60AC\u6D6E-emphasis" aria-hidden="true">#</a> \u60AC\u6D6E emphasis</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token string">&#39;40&#39;</span><span class="token punctuation">,</span>
        fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="\u5185\u6807\u7B7E\u60AC\u6D6E-\u9ED8\u8BA4\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u6807\u7B7E\u60AC\u6D6E-\u9ED8\u8BA4\u9690\u85CF" aria-hidden="true">#</a> \u5185\u6807\u7B7E\u60AC\u6D6E\uFF08\u9ED8\u8BA4\u9690\u85CF\uFF09</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>label<span class="token operator">:</span> <span class="token punctuation">{</span>
    show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
	show<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5916\u6807\u7B7E\u60AC\u6D6E" tabindex="-1"><a class="header-anchor" href="#\u5916\u6807\u7B7E\u60AC\u6D6E" aria-hidden="true">#</a> \u5916\u6807\u7B7E\u60AC\u6D6E</h4><ul><li><code>label:{show: false}</code>\u6539\u4E3A<code>true</code></li><li>\u6CE8\u91CA\u6389<code>// position: &#39;center&#39;</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>label<span class="token operator">:</span> <span class="token punctuation">{</span>
    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// position: &#39;center&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
	show<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A0\u8F7D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u52A8\u753B" aria-hidden="true">#</a> \u52A0\u8F7D\u52A8\u753B</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>animationType<span class="token operator">:</span> <span class="token string">&#39;scale&#39;</span><span class="token punctuation">,</span>
animationEasing<span class="token operator">:</span> <span class="token string">&#39;elasticOut&#39;</span><span class="token punctuation">,</span>
<span class="token function-variable function">animationDelay</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u591A\u5C42\u997C\u56FE\u5D4C\u5957-radius" tabindex="-1"><a class="header-anchor" href="#\u591A\u5C42\u997C\u56FE\u5D4C\u5957-radius" aria-hidden="true">#</a> \u591A\u5C42\u997C\u56FE\u5D4C\u5957 radius</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;30%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u8BBF\u95EE\u6765\u6E90&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">335</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u76F4\u63A5\u8BBF\u95EE&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">310</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u90AE\u4EF6\u8425\u9500&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">234</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u8054\u76DF\u5E7F\u544A&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">135</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u89C6\u9891\u5E7F\u544A&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">1548</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u641C\u7D22\u5F15\u64CE&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
                shadowBlur<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                shadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                shadowColor<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    	name<span class="token operator">:</span> <span class="token string">&#39;Access From&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;30%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
           fontSize<span class="token operator">:</span> <span class="token number">14</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1548</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">775</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">679</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Marketing&#39;</span><span class="token punctuation">,</span> selected<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="visualmap-\u5BF9\u6BD4\u8272\u56FE" tabindex="-1"><a class="header-anchor" href="#visualmap-\u5BF9\u6BD4\u8272\u56FE" aria-hidden="true">#</a> VisualMap(\u5BF9\u6BD4\u8272\u56FE)</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code>visualMap<span class="token operator">:</span> <span class="token punctuation">{</span>
    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    min<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    inRange<span class="token operator">:</span> <span class="token punctuation">{</span>
    	colorLightness<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="legend\u5B50\u9879" tabindex="-1"><a class="header-anchor" href="#legend\u5B50\u9879" aria-hidden="true">#</a> Legend\u5B50\u9879</h2><h3 id="\u5B50\u9879\u6392\u5217-4-x-2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9879\u6392\u5217-4-x-2" aria-hidden="true">#</a> \u5B50\u9879\u6392\u5217\uFF084 x 2\uFF09</h3><div class="language-text ext-text"><pre class="language-text"><code>data:nameArray.slice(0,4),
data:nameArray.slice(4,8),
</code></pre></div><h3 id="\u6C34\u5E73-\u5782\u76F4\u6392\u5217-\u9ED8\u8BA4-\u6C34\u5E73" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73-\u5782\u76F4\u6392\u5217-\u9ED8\u8BA4-\u6C34\u5E73" aria-hidden="true">#</a> \u6C34\u5E73/\u5782\u76F4\u6392\u5217 (\u9ED8\u8BA4\uFF1A\u6C34\u5E73)</h3><div class="language-text ext-text"><pre class="language-text"><code>orient: &#39;horizontal&#39;,
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>orient: &#39;vertical&#39;,
</code></pre></div><h3 id="\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</h3><div class="language-text ext-text"><pre class="language-text"><code>top: &#39;center&#39;,
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>bottom: 150,
</code></pre></div><h3 id="\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> \u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</h3><div class="language-text ext-text"><pre class="language-text"><code>left: &#39;60%&#39;,
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>right: 80,
</code></pre></div><h3 id="\u95F4\u8DDD-\u9ED8\u8BA4-10" tabindex="-1"><a class="header-anchor" href="#\u95F4\u8DDD-\u9ED8\u8BA4-10" aria-hidden="true">#</a> \u95F4\u8DDD \uFF08\u9ED8\u8BA4\uFF1A10\uFF09</h3><div class="language-text ext-text"><pre class="language-text"><code>itemGap: 10,
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>formatter: &#39;  {name}&#39;,
</code></pre></div><h3 id="\u56FE\u6807-\u9ED8\u8BA4-\u957F\u65B9\u4F53" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807-\u9ED8\u8BA4-\u957F\u65B9\u4F53" aria-hidden="true">#</a> \u56FE\u6807 \uFF08\u9ED8\u8BA4\uFF1A\u957F\u65B9\u4F53\uFF09</h3><p><code>icon</code>: \u56FE\u6807\u6837\u5F0F(\u5706\u5F62)</p><h3 id="\u56FE\u6807\u5BF9\u9F50\u65B9\u5F0F-\u9ED8\u8BA4-left" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807\u5BF9\u9F50\u65B9\u5F0F-\u9ED8\u8BA4-left" aria-hidden="true">#</a> \u56FE\u6807\u5BF9\u9F50\u65B9\u5F0F\uFF08\u9ED8\u8BA4\uFF1Aleft\uFF09</h3><div class="language-text ext-text"><pre class="language-text"><code>align: &#39;left&#39;,
</code></pre></div><h3 id="\u6587\u672C\u989C\u8272-\u9ED8\u8BA4-\u9ED1\u8272" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u989C\u8272-\u9ED8\u8BA4-\u9ED1\u8272" aria-hidden="true">#</a> \u6587\u672C\u989C\u8272 \uFF08\u9ED8\u8BA4\uFF1A\u9ED1\u8272\uFF09</h3><div class="language-text ext-text"><pre class="language-text"><code>textStyle: {
	color: &quot;#fff&quot;
},
</code></pre></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> trafficWay <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u75C5\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u4E8B\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u5A5A\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u4E27\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u5E74\u4F11\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u4EA7\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u8C03\u4F11&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u966A\u4EA7\u5047&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> nameArray <span class="token operator">=</span> trafficWay<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item<span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name
<span class="token punctuation">}</span><span class="token punctuation">)</span>
legend<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// x: &#39;left&#39;,</span>
        data<span class="token operator">:</span>nameArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        align<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        itemGap<span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// x: &#39;left&#39;,</span>
        data<span class="token operator">:</span>nameArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        align<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        itemGap<span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u672C\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u6587\u672C\u683C\u5F0F\u5316</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*
formatter: function(name) {
	if (chartdata.length) {
		const item = chartdata.filter((item) =&gt; item.name === name)[0];
		const percentage = item.value/sum*100;
		return \`\${name}:    \${percentage.toFixed(2)}% \`;
	}
}
 */

formatter: function(name) {
	if (chartdata.length) {
		const item = chartdata.filter((item) =&gt; item.name === name)[0];
		const percentage = item.value / sum * 100;
		name = (item.name.length === 2) ? \`  \${name}\` : name;
		const DecimalPoint = 2;
		var per = percentage.toFixed(DecimalPoint);
		return (per.length &gt; DecimalPoint + 2) ? \`\${name}:  \${per}%\` : \`\${name}:    \${per}%\`;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h2><div class="language-text ext-text"><pre class="language-text"><code>&quot;color&quot;: [&quot;#41DEBB&quot;, &quot;#41DDFF&quot;, &quot;#1CB4FF&quot;, &quot;#787FF6&quot;, &quot;#4E6BFF&quot;, &quot;#102088&quot;, &quot;#4ADEDE&quot;, &quot;#0036FF&quot;, &quot;#3A0CA3&quot;, &quot;#7209B7&quot;, &quot;#F72585&quot;]
</code></pre></div><h2 id="\u9ED8\u8BA4\u6807\u7B7E\u663E\u793A\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u6807\u7B7E\u663E\u793A\u5207\u6362" aria-hidden="true">#</a> \u9ED8\u8BA4\u6807\u7B7E\u663E\u793A\u5207\u6362</h2><h3 id="\u6807\u7B7E\u663E\u793A\u5207\u63621" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u663E\u793A\u5207\u63621" aria-hidden="true">#</a> \u6807\u7B7E\u663E\u793A\u5207\u63621</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8BA1\u5212&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.175</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8BA1\u5212&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u672A\u8BA1\u5212&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.825</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u672A\u8BA1\u5212&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> defaultValue <span class="token operator">=</span> seriesData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>


option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;colorStops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0776FF&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0776FF&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;#cccccc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> defaultValue<span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">400</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;radius&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;45%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;60%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;center&quot;: [&quot;50%&quot;, &quot;35%&quot;],</span>
        <span class="token string-property property">&quot;avoidLabelOverlap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;hoverAnimation&quot;: false,</span>
        <span class="token string-property property">&quot;selectedOffset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{d}%&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#575760&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;labelLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> seriesData
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>



<span class="token comment">// \u9ED8\u8BA4\u503C\u663E\u793A\u5207\u6362</span>
myChart<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
myChart<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;mouseout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6807\u7B7E\u663E\u793A\u5207\u63622" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u663E\u793A\u5207\u63622" aria-hidden="true">#</a> \u6807\u7B7E\u663E\u793A\u5207\u63622</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ffd200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#1affff&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#92ff0a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#129bfb&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ffd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#1fb0aa&#39;</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;item&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;30%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&#39;A&#39;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;\uFF1A    30%&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&#39;B&#39;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;\uFF1A 40%&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&#39;C&#39;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;\uFF1A    10%&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&#39;D&#39;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;\uFF1A 20%&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span>
        avoidLabelOverlap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            borderColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            borderWidth<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{b}\\n{d}%&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token string">&#39;30&#39;</span><span class="token punctuation">,</span>
            fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            focus<span class="token operator">:</span> <span class="token string">&#39;self&#39;</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token string">&#39;30&#39;</span><span class="token punctuation">,</span>
                fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        blur<span class="token operator">:</span> <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#1fb0aa&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
            position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;B&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;C&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;D&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75);function p(e,o){return t}var l=n(a,[["render",p],["__file","pie.html.vue"]]);export{l as default};
