import{_ as n,e as s}from"./app.afb47d0b.js";const a={},t=s(`<h1 id="fwp\u6761\u5F62\u56FE\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#fwp\u6761\u5F62\u56FE\u6837\u5F0F" aria-hidden="true">#</a> FWP\u6761\u5F62\u56FE\u6837\u5F0F</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="\u57FA\u7840\u6761\u5F62\u56FE" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6761\u5F62\u56FE" aria-hidden="true">#</a> \u57FA\u7840\u6761\u5F62\u56FE</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u53EF\u4EE5\u5728\u6BCF\u884C\u540E\u9762\u52A0\u4E2A\u9017\u53F7!</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> xdata <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5468\u4E00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u4E8C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u56DB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u4E94&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u516D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5468\u65E5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ydata <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//\u80CC\u666F\u8272</span>
    <span class="token comment">//backgroundColor: &quot;#1A253A&quot;,</span>
    <span class="token comment">//\u6807\u9898</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span>text<span class="token punctuation">,</span> subtext<span class="token punctuation">,</span> textStyle<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//\u67F1\u4F53</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> type<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//x\u8F74</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>type<span class="token punctuation">,</span> data<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//y\u8F74</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>type<span class="token punctuation">,</span> name<span class="token punctuation">,</span> splitLine<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">//\u9009\u9879</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span>
	<span class="token comment">//\u60AC\u6D6E\u63D0\u793A</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span> axisPointer<span class="token operator">:</span><span class="token punctuation">{</span>type<span class="token operator">:</span><span class="token string">&#39;cross&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//\u5DE5\u5177\u680F</span>
    toolbox<span class="token operator">:</span> <span class="token punctuation">{</span>feature<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	dataZoom<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="i-title" tabindex="-1"><a class="header-anchor" href="#i-title" aria-hidden="true">#</a> \u2160 Title</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>title<span class="token operator">:</span> <span class="token punctuation">{</span>
	text<span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898&quot;</span><span class="token punctuation">,</span>
	subtext<span class="token operator">:</span> <span class="token string">&quot;\u526F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
	textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">}</span>	<span class="token comment">//\u5B57\u4F53\u989C\u8272</span>
	<span class="token comment">//\u5C45\u4E2D\u663E\u793A</span>
	<span class="token comment">//left: &#39;center&#39;,</span>
    <span class="token comment">//\u5782\u76F4\u5C45\u4E2D</span>
    <span class="token comment">//top: &#39;center&#39;,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="subtext" tabindex="-1"><a class="header-anchor" href="#subtext" aria-hidden="true">#</a> SubText</h3><div class="language-text ext-text"><pre class="language-text"><code>subtextStyle: {
	color: &#39;white&#39;,
	fontSize: 20
}
</code></pre></div><hr><h3 id="ii-series-\u67F1\u4F53" tabindex="-1"><a class="header-anchor" href="#ii-series-\u67F1\u4F53" aria-hidden="true">#</a> \u2161 Series ------ \u67F1\u4F53</h3><h4 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> @\u521D\u59CB\u5316</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
	data<span class="token operator">:</span> arr<span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>  	<span class="token comment">//\u9700\u7ED1\u5B9Alegend\u5B50\u9009\u9879(\u53EF\u9009)</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_1-\u5BBD\u5EA6-barwidth" tabindex="-1"><a class="header-anchor" href="#_1-\u5BBD\u5EA6-barwidth" aria-hidden="true">#</a> 1. \u5BBD\u5EA6 barWidth</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>barWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_2-\u5706\u89D2\u3001\u989C\u8272-itemstyle" tabindex="-1"><a class="header-anchor" href="#_2-\u5706\u89D2\u3001\u989C\u8272-itemstyle" aria-hidden="true">#</a> 2. \u5706\u89D2\u3001\u989C\u8272 itemStyle</h4><ul><li>\u5706\u89D2</li></ul><div class="language-text ext-text"><pre class="language-text"><code>itemStyle: {
	normal: {
		barBorderRadius: [8, 8, 0, 0],
	}
},
</code></pre></div><ul><li>\u989C\u8272</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>itemStyle: {
	normal: {
		barBorderRadius: [8, 8, 0, 0],
			color: &#39;skyblue&#39;
	}
},
itemStyle: {
	normal: {barBorderRadius: [8, 8, 0, 0],	color: &#39;skyblue&#39;},
	emphasis: {focus: &#39;series&#39;},	//hover\u6837\u5F0F: \u5176\u4ED6\u67F1\u4F53\u9690\u85CF
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9F20\u6807\u60AC\u505C\uFF08hover\u6837\u5F0F\uFF09: \u5176\u4ED6\u67F1\u4F53\u9690\u85CF</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code>itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
	emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>focus<span class="token operator">:</span> <span class="token string">&#39;series&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//\u6C34\u5E73\u67F1\u72B6\u56FE\u5706\u89D2\uFF1A[0, 8, 8, 0]</span>
</code></pre></div><h4 id="_3-\u6E10\u53D8\u8272-itemstyle" tabindex="-1"><a class="header-anchor" href="#_3-\u6E10\u53D8\u8272-itemstyle" aria-hidden="true">#</a> 3. \u6E10\u53D8\u8272 itemStyle</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>   color<span class="token operator">:</span> <span class="token string">&#39;#99FF1A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>   color<span class="token operator">:</span> <span class="token string">&#39;#699800&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//\u6C34\u5E73\u67F1\u72B6\u56FE\uFF1A 0, 0, 1, 1</span>
</code></pre></div><h4 id="_4-\u5806\u53E0\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_4-\u5806\u53E0\u5408\u5E76" aria-hidden="true">#</a> 4. \u5806\u53E0\u5408\u5E76</h4><ul><li>\u603B\u4F53\u5408\u5E76</li></ul><div class="language-text ext-text"><pre class="language-text"><code>stack: &#39;total&#39;,
</code></pre></div><ul><li>\u5408\u5E76\u5230\u6307\u5B9A\u6570\u636E\u4E2D</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code>stack<span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span><span class="token punctuation">,</span>		<span class="token comment">//\u67F1\u4F53\u5408\u5E76(\u6539\uFF1A\u5706\u89D2+\u503C\u8303\u56F4)</span>
yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">//\u81EA\u9002\u5E94\u9AD8\u5EA6</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h4 id="_5-y\u8F74\u9AD8\u5EA6\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#_5-y\u8F74\u9AD8\u5EA6\u81EA\u9002\u5E94" aria-hidden="true">#</a> 5. y\u8F74\u9AD8\u5EA6\u81EA\u9002\u5E94</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_6-\u6700\u503C\u548C\u5E73\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#_6-\u6700\u503C\u548C\u5E73\u5747\u503C" aria-hidden="true">#</a> 6. \u6700\u503C\u548C\u5E73\u5747\u503C</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>markPoint<span class="token operator">:</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">,</span>name<span class="token operator">:</span> <span class="token string">&#39;Max&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;min&#39;</span><span class="token punctuation">,</span>name<span class="token operator">:</span> <span class="token string">&#39;Min&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
markLine<span class="token operator">:</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;average&#39;</span><span class="token punctuation">,</span>name<span class="token operator">:</span> <span class="token string">&#39;Avg&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7-\u80CC\u666F\u60AC\u6D6E\u6846" tabindex="-1"><a class="header-anchor" href="#_7-\u80CC\u666F\u60AC\u6D6E\u6846" aria-hidden="true">#</a> 7. \u80CC\u666F\u60AC\u6D6E\u6846</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>showBackground<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
backgroundStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
	color<span class="token operator">:</span> <span class="token string">&#39;rgba(180, 180, 180, 0.2)&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_8-\u67F1\u4F53\u9876\u90E8\u692D\u5706" tabindex="-1"><a class="header-anchor" href="#_8-\u67F1\u4F53\u9876\u90E8\u692D\u5706" aria-hidden="true">#</a> 8. \u67F1\u4F53\u9876\u90E8\u692D\u5706</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span> <span class="token comment">//\u67F1\u5B50\u9876\u90E8\u692D\u5706</span>
	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pictorialBar&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span>
	<span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;symbolOffset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;symbolPosition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
	itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
		opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>color<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>color<span class="token operator">:</span> <span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>color<span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        position<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-\u81EA\u5B9A\u4E49\u6BCF\u6839\u67F1\u4F53\u989C\u8272-data" tabindex="-1"><a class="header-anchor" href="#_9-\u81EA\u5B9A\u4E49\u6BCF\u6839\u67F1\u4F53\u989C\u8272-data" aria-hidden="true">#</a> 9. \u81EA\u5B9A\u4E49\u6BCF\u6839\u67F1\u4F53\u989C\u8272 data</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>data<span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token number">120</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;#a90000&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token number">150</span><span class="token punctuation">,</span>
	<span class="token number">80</span><span class="token punctuation">,</span>
	<span class="token number">70</span><span class="token punctuation">,</span>
	<span class="token number">110</span><span class="token punctuation">,</span>
	<span class="token number">130</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_10-\u7011\u5E03\u56FE-stack" tabindex="-1"><a class="header-anchor" href="#_10-\u7011\u5E03\u56FE-stack" aria-hidden="true">#</a> 10. \u7011\u5E03\u56FE stack</h4><div class="language-text ext-text"><pre class="language-text"><code>stack: &#39;Total&#39;,
</code></pre></div><h4 id="_11-\u6807\u7B7E-label" tabindex="-1"><a class="header-anchor" href="#_11-\u6807\u7B7E-label" aria-hidden="true">#</a> 11. \u6807\u7B7E label</h4><div class="language-text ext-text"><pre class="language-text"><code>label: {
    show: true,
    position: &#39;bottom&#39;,  //&#39;top&#39;,&#39;inside&#39;
    fontSize: 16,
    color: &#39;#fff&#39;,
    formatter: &#39;{b}: {c}&#39;,
    distance: 50
},
</code></pre></div><h4 id="_12-\u6B63\u8D1F\u4EA4\u9519\u8F74" tabindex="-1"><a class="header-anchor" href="#_12-\u6B63\u8D1F\u4EA4\u9519\u8F74" aria-hidden="true">#</a> 12.\u6B63\u8D1F\u4EA4\u9519\u8F74</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>data: [
    { value: -0.07, label: labelRight },
    { value: -0.09, label: labelRight },
    0.2,
    0.44,
    { value: -0.23, label: labelRight },
    0.08,
    { value: -0.17, label: labelRight },
    0.47,
    { value: -0.36, label: labelRight },
    0.18
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="iii-xaxis-yaxis-\u5750\u6807\u8F74" tabindex="-1"><a class="header-anchor" href="#iii-xaxis-yaxis-\u5750\u6807\u8F74" aria-hidden="true">#</a> \u2162 xAxis/yAxis (\u5750\u6807\u8F74)</h3><h4 id="\u521D\u59CB\u5316-1" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-1" aria-hidden="true">#</a> @\u521D\u59CB\u5316</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> xdata<span class="token punctuation">,</span>	<span class="token comment">//\u6570\u636E</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
	type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>		<span class="token comment">//\u4E0D\u663E\u793A\u7EBF\u6761</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
	type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span>
    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>		<span class="token comment">//\u4E0D\u663E\u793A\u7EBF\u6761</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
legend<span class="token operator">:</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7EBF" aria-hidden="true">#</a> \u7EBF</h4><h5 id="_1-splitline-\u7F51\u683C\u7EBF" tabindex="-1"><a class="header-anchor" href="#_1-splitline-\u7F51\u683C\u7EBF" aria-hidden="true">#</a> 1. splitLine \u7F51\u683C\u7EBF</h5><div class="language-text ext-text"><pre class="language-text"><code>splitLine: {show: false},
</code></pre></div><h4 id="_2-\u80CC\u666F\u8272-\u8F74\u8272-\u5B57\u4F53\u3001\u8F74\u7EBF-\u67F1\u4F53\u8272\u3001\u9009\u9879\u8272\u3001\u6807\u9898\u8272\u3001\u5DE5\u5177\u680F\u5B57\u4F53\u8272" tabindex="-1"><a class="header-anchor" href="#_2-\u80CC\u666F\u8272-\u8F74\u8272-\u5B57\u4F53\u3001\u8F74\u7EBF-\u67F1\u4F53\u8272\u3001\u9009\u9879\u8272\u3001\u6807\u9898\u8272\u3001\u5DE5\u5177\u680F\u5B57\u4F53\u8272" aria-hidden="true">#</a> 2. \u80CC\u666F\u8272 =&gt; \u8F74\u8272 (\u5B57\u4F53\u3001\u8F74\u7EBF =&gt; \u67F1\u4F53\u8272\u3001\u9009\u9879\u8272\u3001\u6807\u9898\u8272\u3001\u5DE5\u5177\u680F\u5B57\u4F53\u8272?)</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>background<span class="token operator">:</span> <span class="token string">&#39;#323232&#39;</span><span class="token punctuation">,</span>
xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">//inside: true  \u5B57\u4F53\u7F6E\u4E8E\u67F1\u5185</span>
    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&quot;#c1c1c1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">//inside: true  \u5B57\u4F53\u7F6E\u4E8E\u67F1\u5185</span>
    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&quot;#c1c1c1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
	normal<span class="token operator">:</span> <span class="token punctuation">{</span>barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>	color<span class="token operator">:</span> <span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
legend<span class="token operator">:</span> <span class="token punctuation">{</span>
    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
title<span class="token operator">:</span> <span class="token punctuation">{</span>
	textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">}</span>	<span class="token comment">//\u5B57\u4F53\u989C\u8272</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u5750\u6807\u503C\u8303\u56F4-\u6700\u503C\u3001\u95F4\u8DDD\u3001\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_3-\u5750\u6807\u503C\u8303\u56F4-\u6700\u503C\u3001\u95F4\u8DDD\u3001\u5355\u4F4D" aria-hidden="true">#</a> 3. \u5750\u6807\u503C\u8303\u56F4 (\u6700\u503C\u3001\u95F4\u8DDD\u3001\u5355\u4F4D)</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span>
    interval<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>	<span class="token comment">//\u503C\u95F4\u8DDD</span>
    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>formatter<span class="token operator">:</span> <span class="token string">&#39;{value} ml&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">//\u5355\u4F4D</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_4-\u5782\u76F4-\u6C34\u5E73\u6761\u5F62\u56FE" tabindex="-1"><a class="header-anchor" href="#_4-\u5782\u76F4-\u6C34\u5E73\u6761\u5F62\u56FE" aria-hidden="true">#</a> 4. \u5782\u76F4 ---&gt; \u6C34\u5E73\u6761\u5F62\u56FE</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">//\u5C06yAxis\u7684type\u6539\u4E3Acategory, xAxis\u6539\u4E3Avalue</span>
xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Brazil&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Indonesia&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;USA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;India&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="_5-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_5-\u5176\u4ED6" aria-hidden="true">#</a> 5. \u5176\u4ED6</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token comment">//axisPointer: {type: &#39;shadow&#39;},  //hover\u6837\u5F0F</span>
    <span class="token comment">//axisTick: {show: false}</span>
    <span class="token comment">//z: 10</span>
    <span class="token comment">//boundaryGap: true,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    dataZoom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;inside&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>    <span class="token comment">//\u9F20\u6807\u6EDA\u8F6E\u7F29\u653E</span>
    <span class="token comment">//boundaryGap: [0.2, 0.2],</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-\u8F74\u7EBF\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_6-\u8F74\u7EBF\u5BF9\u9F50" aria-hidden="true">#</a> 6.\u8F74\u7EBF\u5BF9\u9F50</h4><div class="language-text ext-text"><pre class="language-text"><code>axisTick: {
	alignWithLabel: true
}
</code></pre></div><hr><h3 id="iv-tooltip-\u63D0\u793A\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#iv-tooltip-\u63D0\u793A\u5DE5\u5177" aria-hidden="true">#</a> \u2163 Tooltip (\u63D0\u793A\u5DE5\u5177)</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
    trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
    axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;cross&#39;</span><span class="token punctuation">,</span> crossStyle<span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;#999&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">//\u7EBF\u6761</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><hr><h3 id="v-toolbox-\u5DE5\u5177\u680F" tabindex="-1"><a class="header-anchor" href="#v-toolbox-\u5DE5\u5177\u680F" aria-hidden="true">#</a> \u2164 Toolbox ( \u5DE5\u5177\u680F )</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>toolbox<span class="token operator">:</span> <span class="token punctuation">{</span>
    feature<span class="token operator">:</span> <span class="token punctuation">{</span>
        dataView<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> readOnly<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    	magicType<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//type:[&#39;line&#39;]</span>
   	 	restore<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    	saveAsImage<span class="token operator">:</span> <span class="token punctuation">{</span>show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><hr><h3 id="vi-legend-\u5B50\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#vi-legend-\u5B50\u9009\u9879" aria-hidden="true">#</a> \u2165 Legend (\u5B50\u9009\u9879)</h3><h4 id="\u521D\u59CB\u5316-2" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-2" aria-hidden="true">#</a> @\u521D\u59CB\u5316</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code>legend<span class="token operator">:</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u95F4\u8DDD" aria-hidden="true">#</a> \u95F4\u8DDD</h4><h5 id="\u5B50\u9879\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9879\u95F4\u8DDD" aria-hidden="true">#</a> \u5B50\u9879\u95F4\u8DDD</h5><div class="language-text ext-text"><pre class="language-text"><code>itemGap: 10
</code></pre></div><h5 id="\u9879\u76EE\u4E0E\u6807\u7B7E\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E0E\u6807\u7B7E\u95F4\u8DDD" aria-hidden="true">#</a> \u9879\u76EE\u4E0E\u6807\u7B7E\u95F4\u8DDD</h5><div class="language-text ext-text"><pre class="language-text"><code>formatter: &#39;   {name}&#39;,
</code></pre></div><ul><li>\u5B50\u9009\u9879\u683C\u5F0F\u5316</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// \u4F7F\u7528\u5B57\u7B26\u4E32\u6A21\u677F\uFF0C\u6A21\u677F\u53D8\u91CF\u4E3A\u56FE\u4F8B\u540D\u79F0 {name}</span>
formatter<span class="token operator">:</span> <span class="token string">&#39;Legend {name}&#39;</span>
<span class="token comment">// \u4F7F\u7528\u56DE\u8C03\u51FD\u6570</span>
<span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Legend &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>legend<span class="token operator">:</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	top<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> 			<span class="token comment">//\u95F4\u8DDD</span>
   itemGap<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> 		<span class="token comment">//\u5B50\u9879\u95F4\u8DDD</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span> 	<span class="token comment">//\u5706\u5F62\u5355\u9009\u6846</span>
    textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5B57\u4F53\u6837\u5F0F\u8BBE\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">4.9</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">23.2</span><span class="token punctuation">,</span> <span class="token number">25.6</span><span class="token punctuation">,</span> <span class="token number">76.7</span><span class="token punctuation">,</span> <span class="token number">135.6</span><span class="token punctuation">,</span> <span class="token number">162.2</span><span class="token punctuation">,</span> <span class="token number">32.6</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.6</span><span class="token punctuation">,</span> <span class="token number">5.9</span><span class="token punctuation">,</span> <span class="token number">9.0</span><span class="token punctuation">,</span> <span class="token number">26.4</span><span class="token punctuation">,</span> <span class="token number">28.7</span><span class="token punctuation">,</span> <span class="token number">70.7</span><span class="token punctuation">,</span> <span class="token number">175.6</span><span class="token punctuation">,</span> <span class="token number">182.2</span><span class="token punctuation">,</span> <span class="token number">48.7</span><span class="token punctuation">,</span> <span class="token number">18.8</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>   <span class="token comment">//\u6298\u7EBF</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.5</span><span class="token punctuation">,</span> <span class="token number">6.3</span><span class="token punctuation">,</span> <span class="token number">10.2</span><span class="token punctuation">,</span> <span class="token number">20.3</span><span class="token punctuation">,</span> <span class="token number">23.4</span><span class="token punctuation">,</span> <span class="token number">23.0</span><span class="token punctuation">,</span> <span class="token number">16.5</span><span class="token punctuation">,</span> <span class="token number">12.0</span><span class="token punctuation">,</span> <span class="token number">6.2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vii-grid-\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#vii-grid-\u5E03\u5C40" aria-hidden="true">#</a> \u2166 grid \u5E03\u5C40</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>grid<span class="token operator">:</span> <span class="token punctuation">{</span>
  left<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token string">&#39;14%&#39;</span><span class="token punctuation">,</span>
  bottom<span class="token operator">:</span> <span class="token string">&#39;13%&#39;</span><span class="token punctuation">,</span>
     containLabel<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="viii-datazoom-\u8D8B\u52BF\u7EBF" tabindex="-1"><a class="header-anchor" href="#viii-datazoom-\u8D8B\u52BF\u7EBF" aria-hidden="true">#</a> \u2167 dataZoom \u8D8B\u52BF\u7EBF</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>dataZoom<span class="token operator">:</span> <span class="token punctuation">{</span>
    show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    start<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    end<span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="ix-\u65F6\u95F4\u8F74-timeline" tabindex="-1"><a class="header-anchor" href="#ix-\u65F6\u95F4\u8F74-timeline" aria-hidden="true">#</a> \u2168 \u65F6\u95F4\u8F74 timeline</h3><h4 id="\u57FA\u7840\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BBE\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u8BBE\u7F6E</h4><div class="language-text ext-text"><pre class="language-text"><code>timeline: {
	axisType: &#39;category&#39;,
	data: [&#39;2019&#39;, &#39;2020&#39;, &#39;2021&#39;],
}
</code></pre></div><h4 id="\u81EA\u52A8\u64AD\u653E-autoplay" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u64AD\u653E-autoplay" aria-hidden="true">#</a> \u81EA\u52A8\u64AD\u653E autoPlay</h4><ul><li>\u9ED8\u8BA4\u4E3Atrue</li><li>\u5173\u95ED\u81EA\u52A8\u64AD\u653E</li></ul><div class="language-text ext-text"><pre class="language-text"><code>autoPlay: false,
</code></pre></div><ul><li>\u64AD\u653E\u95F4\u9694</li></ul><div class="language-text ext-text"><pre class="language-text"><code>playInterval: 2000
</code></pre></div><h4 id="\u5BBD\u5EA6-width" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u5EA6-width" aria-hidden="true">#</a> \u5BBD\u5EA6 width</h4><div class="language-text ext-text"><pre class="language-text"><code>width: &#39;80%&#39;,  //&#39;180&#39;
</code></pre></div><h4 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h4><div class="language-text ext-text"><pre class="language-text"><code>left: &#39;10%&#39;,
right: &#39;10%&#39;,
//bottom: &#39;2%&#39;,
</code></pre></div><h4 id="\u6807\u7B7E-label" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E-label" aria-hidden="true">#</a> \u6807\u7B7E label</h4><ul><li>\u6587\u672C\u683C\u5F0F\u5316</li></ul><div class="language-text ext-text"><pre class="language-text"><code>label: {
	formatter: function (s) {
		return new Date(s).getFullYear();
	}
},
</code></pre></div><ul><li>\u989C\u8272</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>label: {
	normal: {
		textStyle: {
			color: &#39;rgb(179, 239, 255)&#39;
		}
	},
	emphasis: {
		textStyle: {
			color: &#39;#fff&#39;
		}
	}
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9ED8\u8BA4\u7D22\u5F15-currentindex" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7D22\u5F15-currentindex" aria-hidden="true">#</a> \u9ED8\u8BA4\u7D22\u5F15 currentIndex</h4><div class="language-text ext-text"><pre class="language-text"><code>currentIndex: 0,
</code></pre></div><h4 id="\u70B9" tabindex="-1"><a class="header-anchor" href="#\u70B9" aria-hidden="true">#</a> \u70B9</h4><h5 id="\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F" aria-hidden="true">#</a> \u5927\u5C0F</h5><p>symbolSize</p><div class="language-text ext-text"><pre class="language-text"><code>symbolSize: 10,
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>symbol: &#39;diamond&#39;,
</code></pre></div><h5 id="\u9009\u4E2D\u70B9\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9009\u4E2D\u70B9\u6837\u5F0F" aria-hidden="true">#</a> \u9009\u4E2D\u70B9\u6837\u5F0F</h5><div class="language-text ext-text"><pre class="language-text"><code>checkpointStyle: {
  borderColor: &#39;#8df4f4&#39;,
  color: &#39;#53D9FF&#39;,
  borderWidth: 2,
},
</code></pre></div><h4 id="\u7EBF\u989C\u8272-linestyle" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u989C\u8272-linestyle" aria-hidden="true">#</a> \u7EBF\u989C\u8272 lineStyle</h4><div class="language-text ext-text"><pre class="language-text"><code>lineStyle: {
	color: &#39;#8df4f4&#39;
},
</code></pre></div><h4 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>option = {
    baseOption: {
        timeline: {
            axisType: &#39;category&#39;,
            data: [&#39;2019&#39;, &#39;2020&#39;, &#39;2021&#39;],
        },
        title: {
            text: &#39;\u67F1\u72B6\u56FE&#39;
        },
        tooltip: {
            trigger: &#39;axis&#39;
        },
        xAxis: {
            type: &#39;category&#39;,
            data: [&#39;\u5468\u4E00&#39;, &#39;\u5468\u4E8C&#39;, &#39;\u5468\u4E09&#39;, &#39;\u5468\u56DB&#39;, &#39;\u5468\u4E94&#39;, &#39;\u5468\u516D&#39;, &#39;\u5468\u65E5&#39;]
        },
        yAxis: {
            type: &#39;value&#39;
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: &#39;bar&#39;
        }]
    },
    options: [
        {
            title: {text: &#39;2019\u67F1\u72B6\u56FE&#39;},
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: &#39;bar&#39;
            }]
        },
        {
            title: {text: &#39;2020\u67F1\u72B6\u56FE&#39;},
            series: [{
                data: [58, 160, 150, 80, 70, 110, 50],
                type: &#39;bar&#39;
            }]
        },
    ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>timeline<span class="token operator">:</span> <span class="token punctuation">{</span>
        axisType<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// realtime: false,</span>
        <span class="token comment">//   loop: false,</span>
        autoPlay<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        currentIndex<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        playInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token comment">// controlStyle: {</span>
        <span class="token comment">//     position: &#39;left&#39;</span>
        <span class="token comment">// },</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;2002-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2003-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2004-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token string">&#39;2005-01-01&#39;</span><span class="token punctuation">,</span>
                tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
                    formatter<span class="token operator">:</span> <span class="token string">&#39;{b} GDP\u8FBE\u5230\u4E00\u4E2A\u9AD8\u5EA6&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;diamond&#39;</span><span class="token punctuation">,</span>
                symbolSize<span class="token operator">:</span> <span class="token number">16</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2006-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2007-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2008-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2009-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;2010-01-01&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token string">&#39;2011-01-01&#39;</span><span class="token punctuation">,</span>
                tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> params<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;GDP\u8FBE\u5230\u53C8\u4E00\u4E2A\u9AD8\u5EA6&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;diamond&#39;</span><span class="token punctuation">,</span>
                symbolSize<span class="token operator">:</span> <span class="token number">18</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="for-example" tabindex="-1"><a class="header-anchor" href="#for-example" aria-hidden="true">#</a> For Example</h2><h3 id="\u6761\u5F62\u56FEdemo" tabindex="-1"><a class="header-anchor" href="#\u6761\u5F62\u56FEdemo" aria-hidden="true">#</a> \u6761\u5F62\u56FEdemo</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">EChartsOption</span> <span class="token operator">=</span> echarts<span class="token punctuation">.</span>EChartsOption<span class="token punctuation">;</span>

<span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> option<span class="token operator">:</span> EChartsOption<span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
  tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
    trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
    axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;cross&#39;</span><span class="token punctuation">,</span>
      crossStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#999&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  toolbox<span class="token operator">:</span> <span class="token punctuation">{</span>
    feature<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataView<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> readOnly<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      magicType<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      restore<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      saveAsImage<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  legend<span class="token operator">:</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  xAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
      min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      max<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
      interval<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;{value} ml&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">,</span>
      min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      max<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      interval<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;{value} \xB0C&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">4.9</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">23.2</span><span class="token punctuation">,</span> <span class="token number">25.6</span><span class="token punctuation">,</span> <span class="token number">76.7</span><span class="token punctuation">,</span> <span class="token number">135.6</span><span class="token punctuation">,</span> <span class="token number">162.2</span><span class="token punctuation">,</span> <span class="token number">32.6</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">3.3</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">2.6</span><span class="token punctuation">,</span> <span class="token number">5.9</span><span class="token punctuation">,</span> <span class="token number">9.0</span><span class="token punctuation">,</span> <span class="token number">26.4</span><span class="token punctuation">,</span> <span class="token number">28.7</span><span class="token punctuation">,</span> <span class="token number">70.7</span><span class="token punctuation">,</span> <span class="token number">175.6</span><span class="token punctuation">,</span> <span class="token number">182.2</span><span class="token punctuation">,</span> <span class="token number">48.7</span><span class="token punctuation">,</span> <span class="token number">18.8</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">,</span> <span class="token number">2.3</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.5</span><span class="token punctuation">,</span> <span class="token number">6.3</span><span class="token punctuation">,</span> <span class="token number">10.2</span><span class="token punctuation">,</span> <span class="token number">20.3</span><span class="token punctuation">,</span> <span class="token number">23.4</span><span class="token punctuation">,</span> <span class="token number">23.0</span><span class="token punctuation">,</span> <span class="token number">16.5</span><span class="token punctuation">,</span> <span class="token number">12.0</span><span class="token punctuation">,</span> <span class="token number">6.2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

option <span class="token operator">&amp;&amp;</span> myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u5F62\u56FE\u52A0\u5F3A\u7248" tabindex="-1"><a class="header-anchor" href="#\u6761\u5F62\u56FE\u52A0\u5F3A\u7248" aria-hidden="true">#</a> \u6761\u5F62\u56FE\u52A0\u5F3A\u7248</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
        axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;cross&#39;</span><span class="token punctuation">,</span>
            crossStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#999&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    toolbox<span class="token operator">:</span> <span class="token punctuation">{</span>
        feature<span class="token operator">:</span> <span class="token punctuation">{</span>
            dataView<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                readOnly<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            magicType<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            restore<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            saveAsImage<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//\u95F4\u8DDD</span>
        itemGap<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//\u5B50\u9879\u95F4\u8DDD</span>
        <span class="token comment">// icon: &quot;circle&quot;, 	//\u5706\u5F62\u5355\u9009\u6846</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5B57\u4F53\u6837\u5F0F\u8BBE\u7F6E</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
            min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            max<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            interval<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                formatter<span class="token operator">:</span> <span class="token string">&#39;{value} ml&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">,</span>
            min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            max<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
            interval<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                formatter<span class="token operator">:</span> <span class="token string">&#39;{value} \xB0C&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Evaporation&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">4.9</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">23.2</span><span class="token punctuation">,</span> <span class="token number">25.6</span><span class="token punctuation">,</span> <span class="token number">76.7</span><span class="token punctuation">,</span> <span class="token number">135.6</span><span class="token punctuation">,</span> <span class="token number">162.2</span><span class="token punctuation">,</span> <span class="token number">32.6</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;skyblue&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Precipitation&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.6</span><span class="token punctuation">,</span> <span class="token number">5.9</span><span class="token punctuation">,</span> <span class="token number">9.0</span><span class="token punctuation">,</span> <span class="token number">26.4</span><span class="token punctuation">,</span> <span class="token number">28.7</span><span class="token punctuation">,</span> <span class="token number">70.7</span><span class="token punctuation">,</span> <span class="token number">175.6</span><span class="token punctuation">,</span> <span class="token number">182.2</span><span class="token punctuation">,</span> <span class="token number">48.7</span><span class="token punctuation">,</span> <span class="token number">18.8</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#353535&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#d54ff2&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Temperature&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// type: &#39;bar&#39;,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token number">4.5</span><span class="token punctuation">,</span> <span class="token number">6.3</span><span class="token punctuation">,</span> <span class="token number">10.2</span><span class="token punctuation">,</span> <span class="token number">20.3</span><span class="token punctuation">,</span> <span class="token number">23.4</span><span class="token punctuation">,</span> <span class="token number">23.0</span><span class="token punctuation">,</span> <span class="token number">16.5</span><span class="token punctuation">,</span> <span class="token number">12.0</span><span class="token punctuation">,</span> <span class="token number">6.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#f234e2&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text"><pre class="language-text"><code>[&#39;Jan&#39;, &#39;Feb&#39;, &#39;Mar&#39;, &#39;Apr&#39;, &#39;May&#39;, &#39;Jun&#39;, &#39;Jul&#39;, &#39;Aug&#39;, &#39;Sep&#39;, &#39;Oct&#39;, &#39;Nov&#39;, &#39;Dec&#39;]
</code></pre></div>`,123);function p(e,o){return t}var i=n(a,[["render",p],["__file","bar.html.vue"]]);export{i as default};
