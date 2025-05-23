import{_ as n,e}from"./app.afb47d0b.js";const a={},s=e(`<h1 id="\u4EEA\u8868\u76D8" tabindex="-1"><a class="header-anchor" href="#\u4EEA\u8868\u76D8" aria-hidden="true">#</a> \u4EEA\u8868\u76D8</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> OverView</h2><h3 id="\u57FA\u7840\u4EEA\u8868\u76D8" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4EEA\u8868\u76D8" aria-hidden="true">#</a> @\u57FA\u7840\u4EEA\u8868\u76D8</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;SCORE&#39;</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
    formatter<span class="token operator">:</span> <span class="token string">&#39;{a} &lt;br/&gt;{b} : {c}%&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Pressure&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
      progress<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      detail<span class="token operator">:</span> <span class="token punctuation">{</span>
        valueAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;{value}&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;SCORE&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="series" tabindex="-1"><a class="header-anchor" href="#series" aria-hidden="true">#</a> Series</h2><h3 id="overview-1" tabindex="-1"><a class="header-anchor" href="#overview-1" aria-hidden="true">#</a> <u>OverView</u></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4EEA\u8868\u76D8</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// \u6307\u9488</span>
	<span class="token literal-property property">pointer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// \u8FDB\u5EA6\u6761</span>
	<span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6570\u636E\u6807\u7B7E</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{value}%&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u80CC\u666F\u8F74\u7EBF</span>
    axisLine
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7EBF" aria-hidden="true">#</a> \u7EBF</h3><h4 id="axisline-\u8F74\u7EBF-\u5E95\u8272" tabindex="-1"><a class="header-anchor" href="#axisline-\u8F74\u7EBF-\u5E95\u8272" aria-hidden="true">#</a> axisLine [\u8F74\u7EBF(\u5E95\u8272)]</h4><div class="language-text ext-text"><pre class="language-text"><code>axisLine: {
	lineStyle: {width: 10},
}
</code></pre></div><h5 id="linestyle" tabindex="-1"><a class="header-anchor" href="#linestyle" aria-hidden="true">#</a> lineStyle</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9ED8\u8BA4\u957F\u5EA6\u4E3A10
lineStyle: {
	width: 10,
	color: [
        [0.3, &#39;#67e0e3&#39;],
        [0.7, &#39;#37a2da&#39;],
        [1, &#39;#fd666d&#39;]
    ]
},

detail: {
	valueAnimation: true,
	formatter: &#39;{value} km/h&#39;,
	formatter: function (value) {
		if (value &gt; 100) {
			return &#39;100&#39;;
		}
		return value;
	},
	color: &#39;auto&#39;
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="progress-\u8FDB\u5EA6\u6761-\u8F74\u7EBF\u8868\u8272" tabindex="-1"><a class="header-anchor" href="#progress-\u8FDB\u5EA6\u6761-\u8F74\u7EBF\u8868\u8272" aria-hidden="true">#</a> progress [\u8FDB\u5EA6\u6761 (\u8F74\u7EBF\u8868\u8272)]</h4><blockquote><p>\u9ED8\u8BA4\u4E0D\u663E\u793A</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FDB\u5EA6\u6761\u663E\u793A</span>
	show
    <span class="token comment">// \u8FDB\u5EA6\u6761\u6837\u5F0F</span>
	itemStyle
    <span class="token comment">// \u8FDB\u5EA6\u6761\u5706\u89D2</span>
	roundCap
<span class="token punctuation">}</span>
</code></pre></div><h5 id="_1-\u663E\u793A\u8FDB\u5EA6\u6761" tabindex="-1"><a class="header-anchor" href="#_1-\u663E\u793A\u8FDB\u5EA6\u6761" aria-hidden="true">#</a> 1. \u663E\u793A\u8FDB\u5EA6\u6761</h5><div class="language-text ext-text"><pre class="language-text"><code>show: true,
</code></pre></div><h5 id="_2-\u8FDB\u5EA6\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u8FDB\u5EA6\u6761\u6837\u5F0F" aria-hidden="true">#</a> 2. \u8FDB\u5EA6\u6761\u6837\u5F0F</h5><div class="language-text ext-text"><pre class="language-text"><code>itemStyle: {
	color: &#39;#58D9F9&#39;,
    shadowColor: &#39;rgba(0,138,255,0.45)&#39;,
    shadowBlur: 10,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
},
</code></pre></div><h5 id="_3-\u8FDB\u5EA6\u6761\u4E24\u7AEF\u5706\u89D2" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u5EA6\u6761\u4E24\u7AEF\u5706\u89D2" aria-hidden="true">#</a> 3. \u8FDB\u5EA6\u6761\u4E24\u7AEF\u5706\u89D2</h5><div class="language-text ext-text"><pre class="language-text"><code>roundCap: &#39;round&#39;,
</code></pre></div><h4 id="axistick-\u523B\u5EA6\u7EBF" tabindex="-1"><a class="header-anchor" href="#axistick-\u523B\u5EA6\u7EBF" aria-hidden="true">#</a> axisTick [\u523B\u5EA6\u7EBF]</h4><blockquote><p>\u523B\u5EA6\u7EBF\u9ED8\u8BA4\u663E\u793A</p></blockquote><ul><li><p>\u4E0D\u663E\u793A\u523B\u5EA6\u7EBF</p><p>axisTick: { show: false },</p></li></ul><h4 id="splitline-\u5206\u9694\u7EBF" tabindex="-1"><a class="header-anchor" href="#splitline-\u5206\u9694\u7EBF" aria-hidden="true">#</a> splitLine [\u5206\u9694\u7EBF]</h4><div class="language-text ext-text"><pre class="language-text"><code>splitLine: {
	length
	lineStyle: {
		width: 2,
        color: &#39;#999&#39;
    },
    distance
},
</code></pre></div><h5 id="\u5206\u9694\u7EBF\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5206\u9694\u7EBF\u957F\u5EA6" aria-hidden="true">#</a> \u5206\u9694\u7EBF\u957F\u5EA6</h5><div class="language-text ext-text"><pre class="language-text"><code>// \u9ED8\u8BA4\u4E3A10
length: 10,
</code></pre></div><h5 id="\u5206\u9694\u7EBF\u4E0E\u8F74\u7EBF\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u5206\u9694\u7EBF\u4E0E\u8F74\u7EBF\u8DDD\u79BB" aria-hidden="true">#</a> \u5206\u9694\u7EBF\u4E0E\u8F74\u7EBF\u8DDD\u79BB</h5><div class="language-text ext-text"><pre class="language-text"><code>// \u9ED8\u8BA4\u4E3A10
distance: 10,
</code></pre></div><h3 id="\u6807\u7B7E\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u6587\u672C" aria-hidden="true">#</a> \u6807\u7B7E\u6587\u672C</h3><h4 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h4><div class="language-text ext-text"><pre class="language-text"><code>data: [{
    value: 50,
    name: &#39;SCORE&#39;
}]
</code></pre></div><h4 id="detail-\u6570\u636E\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#detail-\u6570\u636E\u8BE6\u60C5" aria-hidden="true">#</a> detail [\u6570\u636E\u8BE6\u60C5]</h4><div class="language-text ext-text"><pre class="language-text"><code>detail: {
	formatter
	valueAnimation
	offsetCenter
}
</code></pre></div><h5 id="_1-\u6587\u672C\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u672C\u683C\u5F0F\u5316" aria-hidden="true">#</a> 1. \u6587\u672C\u683C\u5F0F\u5316</h5><div class="language-text ext-text"><pre class="language-text"><code>formatter: &#39;{value}%&#39;
</code></pre></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>formatter: function (value) {
          return &#39;{value|&#39; + value.toFixed(0) + &#39;}{unit|km/h}&#39;;
        },
rich: {
	value: {
		fontSize: 50,
		fontWeight: &#39;bolder&#39;,
		color: &#39;#777&#39;
	},
    unit: {
    	fontSize: 20,
    	color: &#39;#999&#39;,
    	padding: [0, 0, -20, 10]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-\u5F00\u542F\u6807\u7B7E\u7684\u6570\u5B57\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_2-\u5F00\u542F\u6807\u7B7E\u7684\u6570\u5B57\u52A8\u753B" aria-hidden="true">#</a> 2. \u5F00\u542F\u6807\u7B7E\u7684\u6570\u5B57\u52A8\u753B</h5><div class="language-text ext-text"><pre class="language-text"><code>valueAnimation: true,
</code></pre></div><h5 id="_3-\u504F\u79FB\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u504F\u79FB\u91CF" aria-hidden="true">#</a> 3.\u504F\u79FB\u91CF</h5><div class="language-text ext-text"><pre class="language-text"><code>offsetCenter: [&#39;0%&#39;, &#39;70%&#39;],
</code></pre></div><h4 id="axislabel-\u8F74\u7EBF\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#axislabel-\u8F74\u7EBF\u6807\u7B7E" aria-hidden="true">#</a> axisLabel [\u8F74\u7EBF\u6807\u7B7E]</h4><div class="language-text ext-text"><pre class="language-text"><code>axisLabel: {
	show: false,
	distance: 25,
	color: &#39;#999&#39;,
	fontSize: 20
},
</code></pre></div><h5 id="\u4E0D\u663E\u793A\u523B\u5EA6\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u663E\u793A\u523B\u5EA6\u6807\u7B7E" aria-hidden="true">#</a> \u4E0D\u663E\u793A\u523B\u5EA6\u6807\u7B7E</h5><div class="language-text ext-text"><pre class="language-text"><code>show: false,
</code></pre></div><h4 id="title-\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#title-\u6807\u9898" aria-hidden="true">#</a> title [\u6807\u9898]</h4><div class="language-text ext-text"><pre class="language-text"><code>title: {
	show: true,
	offsetCenter
	color
	fontSize
	rich
}
</code></pre></div><h3 id="pointer-\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#pointer-\u6307\u9488" aria-hidden="true">#</a> pointer [\u6307\u9488]</h3><div class="language-text ext-text"><pre class="language-text"><code>pointer: {
	show: false,
},
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>length: &#39;75%&#39;,
width: 16,
offsetCenter: [0, &#39;5%&#39;],
</code></pre></div><h3 id="anchor-\u951A\u70B9" tabindex="-1"><a class="header-anchor" href="#anchor-\u951A\u70B9" aria-hidden="true">#</a> anchor [\u951A\u70B9]</h3><div class="language-text ext-text"><pre class="language-text"><code>anchor: {
	show: true,
	showAbove: true,
	size: 15,
	itemStyle: {
          borderWidth: 30
	}
},
</code></pre></div><h2 id="for-example" tabindex="-1"><a class="header-anchor" href="#for-example" aria-hidden="true">#</a> For Example</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>option = {
    tooltip: {
        formatter: &quot;{a} &lt;br/&gt;{b} : {c}%&quot;
    },
    series: [{
        // name: &#39;\u4E1A\u52A1\u6307\u6807&#39;,
        type: &#39;gauge&#39;,
        detail: {
            formatter: &#39;{value}%&#39;,
            color: &#39;#fff&#39;,
        },
        title: {
            color: &#39;#fff&#39;,
            fontSize: 30,
            rich: {
                a: {
                    fontWeight: &#39;normal&#39;,
                    fontSize: 30,
                    color: &#39;rgba(255,255,255,0.5)&#39;,
                    padding: [0, 0, 80, 0]
                }
            },
            // offsetCenter: [0, -50],
        },
        data: [{
            // name: &#39;CPU&#39;,
            name: &#39;{a|&#39; + &#39;CPU&#39; + &#39;}&#39;,
            value: 23,
            valueAnimation: true,

        }],
        radius: &#39;40%&#39;,
        progress: {
            show: true,
            itemStyle: {
                color: &#39;#fff&#39;,
            },
            roundCap: &#39;round&#39;,
        },
        // \u6307\u9488
        pointer: {show: false},
        // \u5206\u9694\u7EBF
        splitLine: {show: false},
        // \u523B\u5EA6\u7EBF
        axisTick: {show: false},
        // \u523B\u5EA6\u6807\u7B7E
        axisLabel: {show: false},
        // \u4EEA\u8868\u76D8\u8F74\u7EBF\u80CC\u666F\u8272
        axisLine: {
            roundCap: &#39;round&#39;,
            lineStyle: {
                color: [
                    [1, &#39;rgba(18, 155, 251, 0.2)&#39;]
                ]
            },
        },
    }, ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6307\u9488\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u52A8\u753B" aria-hidden="true">#</a> \u6307\u9488\u52A8\u753B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// data:[{value: v}]

var v = 20
setInterval(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {
            // value: +(Math.random() * 100).toFixed(2)
            value: v++
          }
        ]
      }
    ]
  });
}, 100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function i(t,l){return s}var r=n(a,[["render",i],["__file","gauge.html.vue"]]);export{r as default};
