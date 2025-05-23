import{_ as n,e as s}from"./app.afb47d0b.js";const a={},t=s(`<h1 id="\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u6298\u7EBF\u56FE</h1><h2 id="\u57FA\u7840\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u57FA\u7840\u6298\u7EBF\u56FE</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="i-series" tabindex="-1"><a class="header-anchor" href="#i-series" aria-hidden="true">#</a> \u2160 Series</h2><h3 id="a-\u7EBF" tabindex="-1"><a class="header-anchor" href="#a-\u7EBF" aria-hidden="true">#</a> A. \u7EBF</h3><h4 id="\u5E73\u6ED1\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u5E73\u6ED1\u66F2\u7EBF" aria-hidden="true">#</a> \u5E73\u6ED1\u66F2\u7EBF</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>smooth<span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre></div><h4 id="\u9636\u7EA7\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u9636\u7EA7\u7EBF" aria-hidden="true">#</a> \u9636\u7EA7\u7EBF</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>step<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//&#39;middle&#39;, &#39;end&#39;</span>
</code></pre></div><h4 id="\u5806\u53E0-\u591A\u6761\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u5806\u53E0-\u591A\u6761\u7EBF" aria-hidden="true">#</a> \u5806\u53E0(\u591A\u6761\u7EBF)</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>stack<span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="\u6298\u7EBF\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6298\u7EBF\u6837\u5F0F" aria-hidden="true">#</a> \u6298\u7EBF\u6837\u5F0F</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="b-\u70B9-symbol" tabindex="-1"><a class="header-anchor" href="#b-\u70B9-symbol" aria-hidden="true">#</a> B. \u70B9 symbol</h3><h4 id="\u53BB\u6389\u5706\u70B9-\u9ED8\u8BA4-\u6709" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u5706\u70B9-\u9ED8\u8BA4-\u6709" aria-hidden="true">#</a> \u53BB\u6389\u5706\u70B9 (\u9ED8\u8BA4\uFF1A\u6709)</h4><ul><li>method 1</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&quot;symbol&quot;: &quot;none&quot;,
</code></pre></div><ul><li>method 2</li></ul><div class="language-text ext-text"><pre class="language-text"><code>showSymbol: false,
</code></pre></div><h4 id="\u66F4\u6539\u5706\u70B9\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u5706\u70B9\u5927\u5C0F" aria-hidden="true">#</a> \u66F4\u6539\u5706\u70B9\u5927\u5C0F</h4><div class="language-text ext-text"><pre class="language-text"><code>&quot;symbolSize&quot;: 5,
</code></pre></div><h3 id="c-\u9762-areastyle" tabindex="-1"><a class="header-anchor" href="#c-\u9762-areastyle" aria-hidden="true">#</a> C. \u9762 areaStyle</h3><h4 id="\u9762\u79EF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9762\u79EF\u56FE" aria-hidden="true">#</a> \u9762\u79EF\u56FE</h4><div class="language-text ext-text"><pre class="language-text"><code>areaStyle: {},
</code></pre></div><h4 id="\u9762\u79EF\u6E10\u53D8\u8272" tabindex="-1"><a class="header-anchor" href="#\u9762\u79EF\u6E10\u53D8\u8272" aria-hidden="true">#</a> \u9762\u79EF\u6E10\u53D8\u8272</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        	<span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
        	<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
          		<span class="token punctuation">{</span><span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(128, 255, 165)&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          		<span class="token punctuation">{</span><span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(1, 191, 236)&#39;</span><span class="token punctuation">}</span>
        	<span class="token punctuation">]</span><span class="token punctuation">)</span>
      	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="d-\u805A\u7126-\u9F20\u6807\u653E\u7F6E\u6548\u679C-emphasis" tabindex="-1"><a class="header-anchor" href="#d-\u805A\u7126-\u9F20\u6807\u653E\u7F6E\u6548\u679C-emphasis" aria-hidden="true">#</a> D. \u805A\u7126 (\u9F20\u6807\u653E\u7F6E\u6548\u679C) emphasis</h3><div class="language-text ext-text"><pre class="language-text"><code>emphasis: {
    focus: &#39;series&#39;
},
</code></pre></div><hr><h2 id="ii-xaxis-yaxis" tabindex="-1"><a class="header-anchor" href="#ii-xaxis-yaxis" aria-hidden="true">#</a> \u2161 xAxis/yAxis</h2><h3 id="a-\u5750\u6807\u8F74\u4E24\u7AEF\u7559\u767D-boundarygap-\u9ED8\u8BA4-true" tabindex="-1"><a class="header-anchor" href="#a-\u5750\u6807\u8F74\u4E24\u7AEF\u7559\u767D-boundarygap-\u9ED8\u8BA4-true" aria-hidden="true">#</a> A. \u5750\u6807\u8F74\u4E24\u7AEF\u7559\u767D boundaryGap (\u9ED8\u8BA4: true)</h3><h4 id="_1-default" tabindex="-1"><a class="header-anchor" href="#_1-default" aria-hidden="true">#</a> <strong>1. default</strong></h4><div class="language-text ext-text"><pre class="language-text"><code>&quot;boundaryGap&quot;: true,
</code></pre></div><h4 id="_2-\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> <strong>2. \u81EA\u5B9A\u4E49</strong></h4><div class="language-text ext-text"><pre class="language-text"><code> boundaryGap: [&#39;20%&#39;, &#39;20%&#39;],
</code></pre></div><h4 id="_3-\u4E0D\u7559\u7A7A\u767D" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0D\u7559\u7A7A\u767D" aria-hidden="true">#</a> <strong>3. \u4E0D\u7559\u7A7A\u767D</strong></h4><div class="language-text ext-text"><pre class="language-text"><code>&quot;boundaryGap&quot;: false,
</code></pre></div><h3 id="b-\u8F74\u7EBF\u989C\u8272-axisline" tabindex="-1"><a class="header-anchor" href="#b-\u8F74\u7EBF\u989C\u8272-axisline" aria-hidden="true">#</a> B. \u8F74\u7EBF\u989C\u8272 axisLine</h3><div class="language-text ext-text"><pre class="language-text"><code>&quot;axisLine&quot;: {
	&quot;lineStyle&quot;: {
		&quot;type&quot;: &quot;solid&quot;,
		&quot;color&quot;: &quot;#E1E1E1&quot;
	}
},
</code></pre></div><h3 id="c-\u8F74\u5B57\u4F53\u989C\u8272-axislabel" tabindex="-1"><a class="header-anchor" href="#c-\u8F74\u5B57\u4F53\u989C\u8272-axislabel" aria-hidden="true">#</a> C. \u8F74\u5B57\u4F53\u989C\u8272 axisLabel</h3><div class="language-text ext-text"><pre class="language-text"><code>&quot;axisLabel&quot;: {
	&quot;textStyle&quot;: {&quot;color&quot;: &quot;#868C97&quot;}
},
</code></pre></div><h3 id="d-\u7F51\u683C\u7EBF-splitline" tabindex="-1"><a class="header-anchor" href="#d-\u7F51\u683C\u7EBF-splitline" aria-hidden="true">#</a> D. \u7F51\u683C\u7EBF splitLine</h3><div class="language-text ext-text"><pre class="language-text"><code>splitLine: {
     show: false
	&quot;lineStyle&quot;: {
		&quot;type&quot;: &quot;solid&quot;,
		&quot;color&quot;: &quot;#868C97&quot;
	}
},
</code></pre></div><h3 id="e-\u805A\u7126\u8F74\u7EBF-axispointer" tabindex="-1"><a class="header-anchor" href="#e-\u805A\u7126\u8F74\u7EBF-axispointer" aria-hidden="true">#</a> E. \u805A\u7126\u8F74\u7EBF axisPointer</h3><div class="language-text ext-text"><pre class="language-text"><code>&quot;axisPointer&quot;: {
	show: false,
	&quot;lineStyle&quot;: {&quot;color&quot;: &quot;#4E6BFF&quot;}
},
</code></pre></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.\u80CC\u666F\u8272</span>
    <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 2.\u6298\u7EBF\u989C\u8272</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#00FFD2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#00E4FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0084FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#7916FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#00AEFF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0042FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0034C9&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#1FE5C2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0AE192&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#5200C1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#A132E8&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6298\u7EBF\u56FE&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5468\u4E00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u56DB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u4E94&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u516D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5468\u65E5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5DE6\u5BF9\u9F50\uFF0C\u95F4\u8DDD\u4E3A0</span>
        <span class="token string-property property">&quot;boundaryGap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">//true</span>
        <span class="token comment">// 3.\u8F74\u7EBF\u989C\u8272</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#E1E1E1&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 4.\u8F74\u5B57\u4F53\u989C\u8272</span>
        <span class="token string-property property">&quot;axisLabel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 5.\u7F51\u683C\u7EBF(dashed)</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 6.\u60AC\u6D6E\u6307\u9488\u8F74\u7EBF</span>
        <span class="token string-property property">&quot;axisPointer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#4E6BFF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5DE6\u5BF9\u9F50\uFF0C\u95F4\u8DDD\u4E3A0</span>
        <span class="token string-property property">&quot;boundaryGap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8F74\u7EBF\u989C\u8272</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#E1E1E1&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8F74\u5B57\u4F53\u989C\u8272</span>
        <span class="token string-property property">&quot;axisLabel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7F51\u683C\u7EBF</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u60AC\u6D6E\u6307\u9488\u8F74\u7EBF</span>
        <span class="token string-property property">&quot;axisPointer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// &quot;color&quot;: &quot;#4E6BFF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8.1</span><span class="token punctuation">,</span> <span class="token number">8.5</span><span class="token punctuation">,</span> <span class="token number">9.5</span><span class="token punctuation">,</span> <span class="token number">8.3</span><span class="token punctuation">,</span> <span class="token number">8.3</span><span class="token punctuation">,</span> <span class="token number">8.5</span><span class="token punctuation">,</span> <span class="token number">8.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u53BB\u6389\u6570\u503C\u5706\u70B9</span>
        <span class="token string-property property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5706\u70B9\u5927\u5C0F</span>
        <span class="token comment">// &quot;symbolSize&quot;: 5,</span>
        <span class="token comment">// \u5E73\u6ED1\u66F2\u7EBF</span>
        <span class="token string-property property">&quot;smooth&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6E10\u53D8\u9762\u79EF\u56FE</span>
        <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;areaStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&quot;colorStops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF7B33&quot;</span>
                            <span class="token comment">// color: &#39;yellow&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#553B38&quot;</span>
                            <span class="token comment">// color: &#39;green&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span>
                            <span class="token comment">// color: &#39;red&#39;</span>

                        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u6E10\u53D8\u8272\u65B9\u5411</span>
                        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;x2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;y2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u4E2A\u56FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u56FE\u8868" aria-hidden="true">#</a> \u591A\u4E2A\u56FE\u8868</h2><div class="language-text ext-text"><pre class="language-text"><code>xAxis: [
    { type: &#39;category&#39;, gridIndex: 0 },
    { type: &#39;category&#39;, gridIndex: 1 }
],
yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
</code></pre></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u503C\u5F88\u91CD\u8981\uFF0C\u7528\u4E8E\u6307\u5B9A\u56FE\u8868\u7EC4\u4EF6\u5C5E\u4E8E\u54EA\u4E2A\u753B\u5E03</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u503C\u5F88\u91CD\u8981\uFF0C\u7528\u4E8E\u6307\u5B9A\u56FE\u8868\u7EC4\u4EF6\u5C5E\u4E8E\u54EA\u4E2A\u753B\u5E03</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            gridIndex<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            gridIndex<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            gridIndex<span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;SO2&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;CO&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;SO2&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;CO&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;SO2&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;CO&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;CSO2&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;QCO&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;TSO2&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;DCO&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function p(e,o){return t}var l=n(a,[["render",p],["__file","line.html.vue"]]);export{l as default};
