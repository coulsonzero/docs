import{_ as n,e as a}from"./app.afb47d0b.js";const s={},t=a(`<h1 id="\u4E8B\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u4EF6\u5904\u7406</h1><h2 id="\u57FA\u7840\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BBE\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u8BBE\u7F6E</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// 1. \u521D\u59CB\u5316ECharts\u5B9E\u4F8B</span>
<span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. \u6307\u5B9A\u56FE\u8868\u7684\u914D\u7F6E\u9879\u548C\u6570\u636E</span>
<span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 3. \u4F7F\u7528\u914D\u7F6E\u9879\u548C\u6570\u636E\u663E\u793A\u56FE\u8868</span>
myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6" aria-hidden="true">#</a> \u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// \u5904\u7406\u70B9\u51FB\u4E8B\u4EF6\u5E76\u4E14\u8DF3\u8F6C\u5230\u76F8\u5E94\u7684\u767E\u5EA6\u641C\u7D22\u9875\u9762</span>
myChart<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/s?wd=&#39;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> \u6DFB\u52A0\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>myChart.setOption({
    title: {
      backgroundColor: &#39;#333&#39;,
      text: &#39;SELECTED DATA INDICES: \\n&#39; + brushed.join(&#39;\\n&#39;),
      bottom: 0,
      right: &#39;10%&#39;,
      width: 100,
      textStyle: {
        fontSize: 12,
        color: &#39;#fff&#39;
      }
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A0\u8F7D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u52A8\u753B" aria-hidden="true">#</a> \u52A0\u8F7D\u52A8\u753B</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>myChart<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8DDF\u968F\u6D4F\u89C8\u5668\u7F29\u653E" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u968F\u6D4F\u89C8\u5668\u7F29\u653E" aria-hidden="true">#</a> \u8DDF\u968F\u6D4F\u89C8\u5668\u7F29\u653E</h3><div class="language-text ext-text"><pre class="language-text"><code>window.addEventListener(&quot;resize&quot;, function() {
	mychart.resize();
})
</code></pre></div><h3 id="\u7EA6\u675F\u7F29\u653E\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u675F\u7F29\u653E\u5C3A\u5BF8" aria-hidden="true">#</a> \u7EA6\u675F\u7F29\u653E\u5C3A\u5BF8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@media screen and (max-width: 1024px) {
	html {
		font-size: 42px !important;
	}
}
@media screen and (max-width: 1920px) {
	html {
		font-size: 80px !important;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function e(p,c){return t}var o=n(s,[["render",e],["__file","event.html.vue"]]);export{o as default};
