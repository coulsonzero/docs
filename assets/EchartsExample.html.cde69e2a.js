import{_ as n,e as s}from"./app.e9358ffe.js";const a={},p=s(`<h1 id="echartsexample" tabindex="-1"><a class="header-anchor" href="#echartsexample" aria-hidden="true">#</a> EchartsExample</h1><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> Bar</h2><h3 id="bar1" tabindex="-1"><a class="header-anchor" href="#bar1" aria-hidden="true">#</a> bar1</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u56FE\u8868\u4F4D\u7F6E</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        top<span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;18%&#39;</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> yData<span class="token punctuation">,</span>
        <span class="token comment">// \u9690\u85CFy\u8F74\u7EBF</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9690\u85CF\u523B\u5EA6\u7EBF</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5750\u6807\u8F74\u6807\u7B7E\u6837\u5F0F</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u67F1\u4F53\u5BBD\u5EA6</span>
        barWidth<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// \u67F1\u4F53\u5706\u89D2</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>






<span class="token comment">// y\u8F74\u6570\u636E</span>
<span class="token keyword">var</span> yData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// series\u6570\u636E</span>
<span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1105</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#99FF1A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#699800&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">2335</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#E5FF1A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#999200&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">3335</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#1AC7FF&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#008998&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1935</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#4490FC&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#1672ED&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar2" tabindex="-1"><a class="header-anchor" href="#bar2" aria-hidden="true">#</a> bar2</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">709</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token number">709</span><span class="token punctuation">,</span> <span class="token number">2299</span><span class="token punctuation">,</span> <span class="token number">3299</span><span class="token punctuation">,</span> <span class="token number">2299</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token number">2999</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token number">709</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token number">709</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">xData</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">13</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;\u6708&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#020D20&#39;,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
        axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#05294D&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#05294D&#39;</span><span class="token punctuation">,</span>
        borderColor<span class="token operator">:</span> <span class="token string">&#39;#135469&#39;</span><span class="token punctuation">,</span>
        borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;15%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;15%&#39;</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        top<span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token string">&#39;20px&#39;</span><span class="token punctuation">,</span>
            fontFamily<span class="token operator">:</span> <span class="token string">&#39;MicrosoftYaHeiUI&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
        itemHeight<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;\u8D8B\u52BF&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.5)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitArea<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.7)&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> xData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotted&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;solid&quot;\u5B9E\u7EBF,&quot;dotted&quot;\u865A\u7EBF</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.5)&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitArea<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;stack&quot;: &quot;\u603B\u91CF&quot;,</span>
        barMaxWidth<span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
        barGap<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token punctuation">{</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;linear&#39;</span><span class="token punctuation">,</span>
                    x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    x2<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    y2<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    colorStops<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#43c6f2&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 0% \u5904\u7684\u989C\u8272</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#162c45&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 100% \u5904\u7684\u989C\u8272</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    global<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u7F3A\u7701\u4E3A false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar3" tabindex="-1"><a class="header-anchor" href="#bar3" aria-hidden="true">#</a> bar3</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> ydata <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1105</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">2335</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">3335</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1935</span><span class="token punctuation">,</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">var</span> yAxis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> bgData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> ydata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bgData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>

    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">16</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// formatter: function (res) {</span>
        <span class="token comment">//   return \`\${res.name} : \${res.data}\u5355\u4F4D\`;</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        selectedMode<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        left<span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        containLabel<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y\u8F74</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        inverse<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">/// \u67F1\u72B6\u56FE\u987A\u5E8F</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> yAxis<span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token string">&#39;16px&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        inverse<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token string">&#39;18px&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> ydata
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u80CC\u666F&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            barGap<span class="token operator">:</span> <span class="token string">&#39;-100%&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> bgData<span class="token punctuation">,</span>

            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#889AB8&#39;</span><span class="token punctuation">,</span>
                    barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// name: &#39;\u672C\u5E74\u7D2F\u8BA1&#39;,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u67F1\u5B50\u5BBD\u5EA6</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                position<span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F4D\u7F6E</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                distance<span class="token operator">:</span> <span class="token number">300</span> <span class="token comment">// \u8DDD\u79BB</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u67F1\u5B50\u4E0A\u65B9\u7684\u6570\u503C</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> ydata
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar4" tabindex="-1"><a class="header-anchor" href="#bar4" aria-hidden="true">#</a> bar4</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    baseOption<span class="token operator">:</span> <span class="token punctuation">{</span>
        timeline<span class="token operator">:</span> <span class="token punctuation">{</span>
            axisType<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            currentIndex<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
            playInterval<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
            controlStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                position<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;1\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;2\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;3\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;4\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;5\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;6\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;7\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;8\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;9\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;10\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;11\u6708&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;12\u6708&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// backgroundColor: &#39;#00265f&#39;,</span>
        tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
            trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
            axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
                type<span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        legend<span class="token operator">:</span> <span class="token punctuation">{</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u6570\u636E\u540D\u79F0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6570\u636E\u540D\u79F01&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            align<span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            itemWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            itemHeight<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            itemGap<span class="token operator">:</span> <span class="token number">35</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        grid<span class="token operator">:</span> <span class="token punctuation">{</span>
            left<span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
            bottom<span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
            containLabel<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11\u6708&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12\u6708&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&quot;#063374&quot;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
            axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                margin<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&quot;#00c7ff&quot;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;dashed&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&quot;#1A466B&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
                barWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//\u67F1\u5B50\u5BBD\u5EA6</span>
                barGap<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u67F1\u5B50\u4E4B\u95F4\u95F4\u8DDD</span>
                itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 120, 255, 0)&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u540D\u79F01&#39;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
                barWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                barGap<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#00FFE4&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(1, 241, 218, 0)&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;axisLabel&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;interval&#39;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;12\u6708&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                    show<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">]</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar5" tabindex="-1"><a class="header-anchor" href="#bar5" aria-hidden="true">#</a> bar5</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#323232&#39;,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        left<span class="token operator">:</span> <span class="token string">&#39;8%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;8%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;1%&#39;</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token string">&#39;1%&#39;</span><span class="token punctuation">,</span>
        containLabel<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token comment">// name: &#39;A&#39;,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                fontFamily<span class="token operator">:</span> <span class="token string">&quot;digital&quot;</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// barBorderRadius: [20, 0, 0, 20],</span>
                    <span class="token comment">// color: &#39;lightgreen&#39;</span>
                    color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#041431&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#05727a&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#00FFE4&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
                    focus<span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">62</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// name: &#39;B&#39;,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// barBorderRadius: [0, 20, 20, 0],</span>
                    <span class="token comment">// color: &#39;#0078FF&#39;</span>
                    color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#053573&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;#071835&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
                    focus<span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bar6" tabindex="-1"><a class="header-anchor" href="#bar6" aria-hidden="true">#</a> bar6</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;formatter&quot;: &quot;{c}%&quot;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;27%&#39;</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token string">&#39;15%&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.4)&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> yAxisData<span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> oilData<span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> nature_gasData<span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> coalData<span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> powerData<span class="token punctuation">,</span>
            stack<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>





<span class="token keyword">var</span> yAxisData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Q&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;W&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> oilData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> nature_gasData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> coalData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> powerData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="line" tabindex="-1"><a class="header-anchor" href="#line" aria-hidden="true">#</a> Line</h2><h3 id="line1" tabindex="-1"><a class="header-anchor" href="#line1" aria-hidden="true">#</a> line1</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">193</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#18FFFC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#129BFB&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4E24\u7AEF\u4E0D\u7559\u767D</span>
        boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9690\u85CF\u523B\u5EA6\u7EBF</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8F74\u7EBF</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.3)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// show: false</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                type<span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255, 255, 255, 0.1)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.3)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        left<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u7D2F\u8BA1\u8BBF\u95EE&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> seriesData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5E73\u6ED1\u66F2\u7EBF</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">// \u9762\u79EF\u6E10\u53D8</span>
            areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(109, 252, 255, 1)&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(109, 252, 255, 0)&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    shadowColor<span class="token operator">:</span> <span class="token string">&#39;rgba(109, 252, 255, 0.5)&#39;</span><span class="token punctuation">,</span>
                    shadowBlur<span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u53BB\u6389\u5706\u70B9</span>
            showSymbol<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token comment">// \u7EBF\u6761\u6837\u5F0F</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&quot;rgba(24, 255, 252, 0.8)&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;\u6BCF\u65E5\u8BBF\u95EE&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> seriesData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(18, 155, 251, 1)&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(18, 155, 251, 0)&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    shadowColor<span class="token operator">:</span> <span class="token string">&#39;rgba(18, 155, 251, 0.5)&#39;</span><span class="token punctuation">,</span>
                    shadowBlur<span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            showSymbol<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(18, 155, 251, 0.8)&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line2" tabindex="-1"><a class="header-anchor" href="#line2" aria-hidden="true">#</a> line2</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;legend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;orient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;horizontal&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;icon&quot;: &quot;circle&quot;,</span>
        <span class="token string-property property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token string">&quot;70%&quot;</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            borderWidth<span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6BCF\u65E5\u8BBF\u95EE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7D2F\u8BA1\u8BBF\u95EE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;boundaryGap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#E1E1E1&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisLabel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisPointer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#4E6BFF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9\u6708&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10\u6708&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">//&quot;name&quot;: &quot;\u4FE1\u606F\u91CF&quot;,</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#E1E1E1&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisLabel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotted&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;solid&quot;\u5B9E\u7EBF,&quot;dotted&quot;\u865A\u7EBF</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#868C97&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6BCF\u65E5\u8BBF\u95EE&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">595</span><span class="token punctuation">,</span> <span class="token number">640</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">795</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">760</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;smooth&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;areaStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &quot;type&quot;: &quot;default&quot;,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;colorStops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8C25FF&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;#FF7B33&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8C25FF&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span> <span class="token comment">//&quot;#1A253A&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;x2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;y2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7D2F\u8BA1\u8BBF\u95EE&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">430</span><span class="token punctuation">,</span> <span class="token number">430</span><span class="token punctuation">,</span> <span class="token number">395</span><span class="token punctuation">,</span> <span class="token number">450</span><span class="token punctuation">,</span> <span class="token number">380</span><span class="token punctuation">,</span> <span class="token number">510</span><span class="token punctuation">,</span> <span class="token number">420</span><span class="token punctuation">,</span> <span class="token number">490</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">580</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;smooth&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;areaStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;colorStops&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0078FF&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0078FF&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span> <span class="token comment">//&quot;#0078FF&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;x2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;y2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#8C25FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0078FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FF4040&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#E60636&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F65A70&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EA5A94&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FF5BE2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F56134&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FF9D4D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F1F406&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#BBF25B&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line3" tabindex="-1"><a class="header-anchor" href="#line3" aria-hidden="true">#</a> line3</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> nameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u4E00\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E8C\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E09\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u56DB\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E94\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u516D\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E03\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u516B\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E5D\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5341\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5341\u4E00\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">]</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E3196A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#5157C7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#0E9CFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#00FF42&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#A2FF00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E60012&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#22AC38&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#5F52A0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FF8A00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#F600FF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// backgroundColor: &#39;#1b1d3d&#39;,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">&quot;roundRect&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// symbol: &#39;&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token comment">// itemStyle:{</span>
        <span class="token comment">//     borderColor:[&#39;#FFC20A&#39;,&#39;green&#39;],</span>
        <span class="token comment">//     borderWidth:3,</span>
        <span class="token comment">// },</span>
        <span class="token comment">// borderColor:&#39;red&#39;,</span>
        <span class="token comment">// borderWidth:5,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        selected<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;\u4E94\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u516D\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u4E03\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u516B\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u4E5D\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u5341\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;\u5341\u4E00\u751F\u4EA7\u7EBF&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        itemHeight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token comment">// orient: &#39;vertical&#39;,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        itemGap<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        left<span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
        containLabel<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10/09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/11&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/12&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/13&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/14&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10/15&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{value}&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u683C\u5F0F\u5316</span>
            fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
            margin<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotted&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#163150&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E00\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// zlevel: 3, //\u5C42\u7EA7</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// emphasis: { //\u9009\u4E2D\u7684\u805A\u7126\u6548\u679C</span>
            <span class="token comment">//     color: &#39;red&#39;,</span>
            <span class="token comment">//     borderWidth: 10,</span>
            <span class="token comment">//     borderColor: &#39;red&#39;,</span>
            <span class="token comment">//     // symbolSize:20,</span>
            <span class="token comment">// }</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E8C\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">412</span><span class="token punctuation">,</span> <span class="token number">302</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">270</span><span class="token punctuation">,</span> <span class="token number">530</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#E3196A&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E09\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">912</span><span class="token punctuation">,</span> <span class="token number">902</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">873</span><span class="token punctuation">,</span> <span class="token number">880</span><span class="token punctuation">,</span> <span class="token number">910</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#5157C7&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u56DB\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">812</span><span class="token punctuation">,</span> <span class="token number">802</span><span class="token punctuation">,</span> <span class="token number">801</span><span class="token punctuation">,</span> <span class="token number">803</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">850</span><span class="token punctuation">,</span> <span class="token number">860</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#18FFFC&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E94\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">712</span><span class="token punctuation">,</span> <span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">701</span><span class="token punctuation">,</span> <span class="token number">703</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">750</span><span class="token punctuation">,</span> <span class="token number">760</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#00FF42&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u516D\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">612</span><span class="token punctuation">,</span> <span class="token number">602</span><span class="token punctuation">,</span> <span class="token number">601</span><span class="token punctuation">,</span> <span class="token number">603</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">650</span><span class="token punctuation">,</span> <span class="token number">660</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#A2FF00&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E03\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">502</span><span class="token punctuation">,</span> <span class="token number">501</span><span class="token punctuation">,</span> <span class="token number">503</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">550</span><span class="token punctuation">,</span> <span class="token number">560</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#E60012&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u516B\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">412</span><span class="token punctuation">,</span> <span class="token number">402</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">,</span> <span class="token number">403</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">450</span><span class="token punctuation">,</span> <span class="token number">460</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#22AC38&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u4E5D\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">312</span><span class="token punctuation">,</span> <span class="token number">302</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">303</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#5F52A0&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5341\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FF8A00&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u5341\u4E00\u751F\u4EA7\u7EBF&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">212</span><span class="token punctuation">,</span> <span class="token number">202</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">203</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5E73\u6ED1\u66F2\u7EBF</span>
        showSymbol<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u503C\u6298\u70B9\u7684\u5C55\u73B0</span>
        <span class="token comment">// symbol: &#39;circle&#39;, //\u5B9E\u5FC3\u5706</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        zlevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;#FFFFFF&#39;,</span>
                borderColor<span class="token operator">:</span> <span class="token string">&#39;#FFC20A&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#F600FF&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line4" tabindex="-1"><a class="header-anchor" href="#line4" aria-hidden="true">#</a> line4</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;roundRect&#39;</span><span class="token punctuation">,</span>
        itemGap<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;   {name}&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;9%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//itemWidth: 0,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">17</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">1320</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">310</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">1320</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            x<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">550</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">1320</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u503C\u5F88\u91CD\u8981\uFF0C\u7528\u4E8E\u6307\u5B9A\u56FE\u8868\u7EC4\u4EF6\u5C5E\u4E8E\u54EA\u4E2A\u753B\u5E03</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;05&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;06&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;07&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                margin<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;05&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;06&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;07&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                margin<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u503C\u5F88\u91CD\u8981\uFF0C\u7528\u4E8E\u6307\u5B9A\u56FE\u8868\u7EC4\u4EF6\u5C5E\u4E8E\u54EA\u4E2A\u753B\u5E03</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;05&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;06&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;07&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                margin<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(6, 31, 55, 1.00)&#39;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;dashed&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#4D6386&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(6, 31, 55, 1.00)&#39;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;dashed&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#4D6386&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#7892BC&#39;</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(6, 31, 55, 1.00)&#39;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    type<span class="token operator">:</span> <span class="token string">&#39;dashed&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#4D6386&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            gridIndex<span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2161&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">//borderColor: &#39;rgba(0, 255, 222, 1)&#39;,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2161&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">//borderColor: &#39;rgba(0, 255, 222, 1)&#39;,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2161&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">//borderColor: &#39;rgba(0, 255, 222, 1)&#39;,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#A9F8FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span><span class="token punctuation">,</span>

                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span><span class="token punctuation">,</span>

                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#47D2FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>

                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;  \u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>

                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   1\u53F7\u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   1\u53F7\u2160&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#004EFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#E27A41&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#00A06D&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#B1E96E&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   \u2160&#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#F0BB1A&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#EE7C65&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#D086D1&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;   &#39;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            xAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            yAxisIndex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            symbolSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span><span class="token punctuation">,</span>
                    lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#8DABFF&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="line5" tabindex="-1"><a class="header-anchor" href="#line5" aria-hidden="true">#</a> line5</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> xData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;03:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;04:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;05:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;06:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;07:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;08:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;09:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10:00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11:00&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">118</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">61</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> seriesNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&quot;#1A253A&quot;</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#18FFFC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#129BFB&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> xData<span class="token punctuation">,</span>
        <span class="token comment">// \u4E24\u7AEF\u4E0D\u7559\u767D</span>
        boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9690\u85CF\u523B\u5EA6\u7EBF</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8F74\u7EBF</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.3)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;transparent&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        min<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{value} kPa&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// show: false</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                type<span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255, 255, 255, 0.1)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.3)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.8)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        left<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            name<span class="token operator">:</span> seriesNames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> seriesData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u53BB\u6389\u5706\u70B9</span>
            showSymbol<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> seriesNames<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> seriesData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
            showSymbol<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="pie" tabindex="-1"><a class="header-anchor" href="#pie" aria-hidden="true">#</a> Pie</h2><h3 id="_1-\u8FDB\u5EA6\u6761" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDB\u5EA6\u6761" aria-hidden="true">#</a> 1. \u8FDB\u5EA6\u6761</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">96</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;{a|&#39;</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">&#39;}{c|%}&#39;</span><span class="token punctuation">,</span>
        x<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            rich<span class="token operator">:</span> <span class="token punctuation">{</span>
                a<span class="token operator">:</span> <span class="token punctuation">{</span>
                    fontSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                c<span class="token operator">:</span> <span class="token punctuation">{</span>
                    fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.7)&#39;</span><span class="token punctuation">,</span>
                    padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            silent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            clockwise<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            startAngle<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">72</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;clockwise&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u9006\u65F6\u9488</span>
            z<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            zlevel<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    position<span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    value<span class="token operator">:</span> value<span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                            color<span class="token operator">:</span> <span class="token string">&#39;rgba(0,250,0,5)&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token number">100</span> <span class="token operator">-</span> value<span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token punctuation">{</span>
                        normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                            show<span class="token operator">:</span> <span class="token boolean">false</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                        normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                            color<span class="token operator">:</span> <span class="token string">&quot;rgba(0,250,0,0.2)&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
            radius<span class="token operator">:</span> <span class="token string">&quot;72%&quot;</span><span class="token punctuation">,</span>
            center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            startAngle<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            endAngle<span class="token operator">:</span> <span class="token number">359.9</span><span class="token punctuation">,</span>
            splitNumber<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            hoverAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    width<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token comment">// color: &quot;#1c2043&quot;</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(28,32,67,0.7)&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    opacity<span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            detail<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-pie2" tabindex="-1"><a class="header-anchor" href="#_2-pie2" aria-hidden="true">#</a> 2. pie2</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u5706\u73AF\u548C\u5B50\u9879\u989C\u8272</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#FFD200&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#18FFFC&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#92FF0A&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#129BFB&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>




option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#1b1d3d&#39;,</span>
    <span class="token comment">// \u66F4\u6539\u5706\u73AF\u989C\u8272</span>
    color<span class="token operator">:</span> color<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;item&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>

        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u767E\u5206\u6BD4\u683C\u5F0F\u5316</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">function</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            sum <span class="token operator">=</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>seriesData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>seriesData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> item <span class="token operator">=</span> seriesData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> percentage <span class="token operator">=</span> item<span class="token punctuation">.</span>value <span class="token operator">/</span> sum <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
                name <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> name<span class="token punctuation">;</span>
                <span class="token comment">// \u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u51E0\u4F4D</span>
                <span class="token keyword">const</span> DecimalPoint <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> per <span class="token operator">=</span> percentage<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>DecimalPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>per<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> DecimalPoint <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>per<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>per<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;25%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5706\u73AF(\u4E2D\u5FC3\u4E3A\u7A7A)</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;54%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
            fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{b}\\n\\n{c}%&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_4-pie4" tabindex="-1"><a class="header-anchor" href="#_4-pie4" aria-hidden="true">#</a> 4. pie4</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;title&quot;: {</span>
    <span class="token comment">//     &quot;x&quot;: &quot;center&quot;</span>
    <span class="token comment">// },</span>
    <span class="token string-property property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{b} : {c}\u4EBF\u5428 ({d}%)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;156px&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;center&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;clockwise&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14px&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{b}\\n{d}%&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;emphasis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;shadowBlur&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;shadowOffsetX&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;shadowColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.5)&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#004EFF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#8C25FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#E27A41&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#47D2FF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#0078FF&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token comment">/*
var seriesData = [];
var value = [];
var country = [];

// 1.\u914D\u7F6EcosmoData\u81EA\u5B9A\u4E49\u6570\u636E\u5E93(\u6570\u636E\u6E90\u540D\u79F0\u9700\u4E00\u81F4)
var result = cosmo.data({
    name: &#39;&#39;,
});

// 2.\u5C06\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u6DFB\u52A0\u5230\u6570\u7EC4\u4E2D
result.map(item =&gt; {
    country.push(item[&#39;country&#39;])
    value.push(item[&#39;total&#39;])

});

// \u5C06\u6570\u7EC4\u6570\u636E\u914D\u7F6E\u5230seriesData\u4E2D
for (var i = 0; i &lt; country.length; i++) {
    seriesData.push({
        &quot;name&quot;: country[i],
        &quot;value&quot;: value[i],
    })
};
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_5-pie5" tabindex="-1"><a class="header-anchor" href="#_5-pie5" aria-hidden="true">#</a> 5.pie5</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u5706\u73AF\u548C\u5B50\u9879\u989C\u8272</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;#18FFFC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#129BFB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#92FF0A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>




option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#1b1d3d&#39;,</span>
    <span class="token comment">// \u66F4\u6539\u5706\u73AF\u989C\u8272</span>
    color<span class="token operator">:</span> color<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&#39;item&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// top: &#39;85%&#39;,</span>
        bottom<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;8%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// left: &#39;30%&#39;,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u5BBD\u5EA6</span>
        itemHeight<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u9AD8\u5EA6</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// orient: &#39;evaporation&#39;,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: &#39;{b}&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;25%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;40%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5706\u73AF(\u4E2D\u5FC3\u4E3A\u7A7A)</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;54%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">// position: &#39;center&#39;,</span>
            fontSize<span class="token operator">:</span> <span class="token string">&#39;13&#39;</span><span class="token punctuation">,</span>
            fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{c}%&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u767E\u5206\u6BD4\u683C\u5F0F\u5316</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                fontSize<span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_6-pie6" tabindex="-1"><a class="header-anchor" href="#_6-pie6" aria-hidden="true">#</a> 6. pie6</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u989C\u827216\u8FDB\u5236\u6362\u7B97rgba,\u6DFB\u52A0\u900F\u660E\u5EA6</span>
<span class="token keyword">function</span> <span class="token function">hexToRgba</span><span class="token punctuation">(</span>hex<span class="token punctuation">,</span> opacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token string">&#39;rgba(&#39;</span> <span class="token operator">+</span>
        <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;0x&#39;</span> <span class="token operator">+</span> hex<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span>
        <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;0x&#39;</span> <span class="token operator">+</span> hex<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span>
        <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;0x&#39;</span> <span class="token operator">+</span> hex<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span>
        opacity <span class="token operator">+</span>
        <span class="token string">&#39;)&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//backgroundColor = &#39;#0A2E5D&#39;;</span>
<span class="token comment">// \u6570\u636E</span>
chartdata <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;1\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;2\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;3\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;4\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;5\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;6\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;7\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;8\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;9\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;10\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;11\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;12\u6708&#39;</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> legendData1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> legendData2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chartdata<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> halfLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>chartdata<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> itemName <span class="token operator">=</span> chartdata<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> halfLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        legendData1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>itemName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        legendData2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>itemName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
radius <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;54%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u989C\u8272\u7CFB\u5217</span>
color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;#5E3CEF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#8DABFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#D086D1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#EE7C65&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#F0BB1A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#B1E96E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#6ADE8B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ABE2FF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#80D4D9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#5AB3FF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#3672ED&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#004EFF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
labelshow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
centerimg <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
lineshow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> color1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    color2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// color3 = [];</span>
<span class="token comment">// \u8BBE\u7F6E\u6BCF\u5C42\u5706\u73AF\u989C\u8272\u548C\u6DFB\u52A0\u95F4\u9694\u7684\u900F\u660E\u8272</span>
color<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    color1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    color2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">hexToRgba</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// color3.push(hexToRgba(item, 0.1), &#39;transparent&#39;);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u603B\u503C\u8BBE\u7F6E\u95F4\u9694\u503C\u5927\u5C0F</span>
chartdata<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7ED9\u6BCF\u4E2A\u6570\u636E\u540E\u6DFB\u52A0\u7279\u5B9A\u7684\u900F\u660E\u7684\u6570\u636E\u5F62\u6210\u95F4\u9694</span>
chartdata<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>value <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> sum <span class="token operator">/</span> <span class="token number">70</span><span class="token punctuation">,</span>
            labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6BCF\u5C42\u5706\u73AF\u5927\u5C0F</span>
<span class="token keyword">let</span> radius2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">Number</span><span class="token punctuation">(</span>radius<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span> <span class="token function">Number</span><span class="token punctuation">(</span>radius<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> radius3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">Number</span><span class="token punctuation">(</span>radius<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span> <span class="token function">Number</span><span class="token punctuation">(</span>radius<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">13</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//    backgroundColor: backgroundColor,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        top<span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u5BBD\u5EA6</span>
        itemHeight<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u9AD8\u5EA6</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">14</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> legendData1<span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;white&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chartdata<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> item <span class="token operator">=</span> chartdata<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> percentage <span class="token operator">=</span> item<span class="token punctuation">.</span>value <span class="token operator">/</span> sum<span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>percentage<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>percentage<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        top<span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u5BBD\u5EA6</span>
        itemHeight<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u9AD8\u5EA6</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">14</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> legendData2<span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;white&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chartdata<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> item <span class="token operator">=</span> chartdata<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> percentage <span class="token operator">=</span> item<span class="token punctuation">.</span>value <span class="token operator">/</span> sum<span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>percentage<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>percentage<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        containLabel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//tooltip: {</span>
    <span class="token comment">//    formatter: (params) =&gt; {</span>
    <span class="token comment">//        if (params.name !== &#39;&#39;) {</span>
    <span class="token comment">//            return params.name + &#39; : &#39; + params.value + &#39;\\n&#39; + &#39;(&#39; + params.percent + &#39;%)&#39;;</span>
    <span class="token comment">//        }</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u6700\u5916\u5C42\u5706\u73AF</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            radius<span class="token operator">:</span> radius3<span class="token punctuation">,</span>
            center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;35%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            hoverAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            clockwise<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u987A\u65F6\u9488\u7684\u65B9\u5411</span>
            startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
            selectedMode<span class="token operator">:</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span>
            selectedOffset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> color1<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                position<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
                position<span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> zzb <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                    data1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u5F53\u524D\u503C\u4E00\u534A\u52A0\u4E0A\u524D\u9762\u7684\u503C\u662F\u5426\u5927\u4E8E50%\uFF08\u5224\u65ADlabel\u671D\u5411\uFF09</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> params<span class="token punctuation">.</span>dataIndex <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>name <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                zzb <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                                zzb <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>name <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u82E5\u5F53\u524D\u503C\u4E00\u534A\u52A0\u4E0A\u524D\u9762\u7684\u503C\u7684\u5360\u6BD4\u5927\u4E8E0.5\u4E09\u89D2\u5F62\u671D\u53F3\uFF0C\u76F8\u53CD\u671D\u5DE6</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>zzb <span class="token operator">/</span> sum <span class="token operator">&gt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token string">&#39;{txt|&#39;</span> <span class="token operator">+</span> params<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\\t\\t&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> sum<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%}&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token string">&#39;{txt|&#39;</span> <span class="token operator">+</span> params<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\\t\\t&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> sum<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%}&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                align<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
                padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                rich<span class="token operator">:</span> <span class="token punctuation">{</span>
                    txt<span class="token operator">:</span> <span class="token punctuation">{</span>
                        color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                        fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                        width<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                        height<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    san<span class="token operator">:</span> <span class="token punctuation">{</span>
                        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                length<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                length2<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#1f3353&#39;</span><span class="token punctuation">,</span>
                    width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
            z<span class="token operator">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            radius<span class="token operator">:</span> radius2<span class="token punctuation">,</span>
            center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;35%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            hoverAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
            clockwise<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u987A\u65F6\u9488\u7684\u65B9\u5411</span>
            selectedMode<span class="token operator">:</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span>
            selectedOffset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> color2<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                formatter<span class="token operator">:</span> <span class="token string">&#39;{value|{c}}\\n{label|{b}}&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
            z<span class="token operator">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;45%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;35%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            hoverAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
            clockwise<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u987A\u65F6\u9488\u7684\u65B9\u5411</span>
            selectedMode<span class="token operator">:</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span>
            selectedOffset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// color: (params) =&gt; {</span>
                    <span class="token comment">//     return color3[params.dataIndex];</span>
                    <span class="token comment">// },</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;rgba(32, 60, 112, 0.2)&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
                show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                formatter<span class="token operator">:</span> <span class="token string">&#39;{value|{c}}\\n{label|{b}}&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// z: 666,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="radar" tabindex="-1"><a class="header-anchor" href="#radar" aria-hidden="true">#</a> Radar</h2><h3 id="_1-\u96F7\u8FBE\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-\u96F7\u8FBE\u56FE" aria-hidden="true">#</a> 1.\u96F7\u8FBE\u56FE</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">780</span><span class="token punctuation">,</span> <span class="token number">560</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u7D2F\u8BA1\u63D0\u4EA4&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9762\u79EF\u6837\u5F0F</span>
        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgba(18, 153, 250, 0.3)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">460</span><span class="token punctuation">,</span> <span class="token number">460</span><span class="token punctuation">,</span> <span class="token number">580</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">420</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u6BCF\u65E5\u63D0\u4EA4&#39;</span><span class="token punctuation">,</span>
        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgba(24, 255, 252, 0.3)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> optionColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;#1299FA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#17FFFB&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> radarIndicator <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#1b1d3d&#39;,</span>
    color<span class="token operator">:</span> optionColor<span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u56FE\u6807\u6837\u5F0F</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u56FE\u6807\u6587\u672C\u6574\u4F53\u6392\u5217\u65B9\u5F0F</span>
        orient<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u56FE\u6807\u4E0E\u6587\u672C\u5DE6\u5BF9\u9F50</span>
        align<span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u56FE\u6807\u5927\u5C0F</span>
        itemWidth<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    radar<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F4D\u7F6E\u5C45\u4E2D</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;40%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7F29\u5C0F</span>
        <span class="token comment">// radius: &#39;50%&#39;,</span>
        indicator<span class="token operator">:</span> radarIndicator<span class="token punctuation">,</span>
        <span class="token comment">// \u96F7\u8FBE\u7EBF\u9762\u79EF</span>
        splitArea<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u96F7\u8FBE\u7EBF\u6570\u91CF</span>
        splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// \u65CB\u8F6C\u96F7\u8FBE\u56FE</span>
        startAngle<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7F51\u683C\u7EBF</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.1)&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//\u8F74\u7EBF\u989C\u8272</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.1)&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Budget vs spending&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;radar&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        <span class="token comment">// \u62D0\u70B9\u5927\u5C0F</span>
        symbolSize<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="radar2" tabindex="-1"><a class="header-anchor" href="#radar2" aria-hidden="true">#</a> radar2</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// color:[&#39;#8C25FF&#39;,&#39;#0078FF&#39;],</span>
    <span class="token comment">// &quot;backgroundColor&quot;: &quot;#1A253A&quot;,</span>
    <span class="token string-property property">&quot;legend&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;top&quot;</span><span class="token operator">:</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;right&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6BCF\u65E5\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7D2F\u8BA1\u63D0\u4EA4&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;itemGap&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;orient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;radar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;40%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;indicator&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitNumber&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        startAngle<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//\u65CB\u8F6C\u7684\u5EA6\u6570\u3002</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A466B&quot;</span><span class="token punctuation">,</span>

                <span class="token comment">// &quot;opacity&quot;: 0.2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;splitArea&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;axisLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1A466B&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">// color: &#39;red&#39;,</span>
                <span class="token comment">// &quot;opacity&quot;: 0.2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;radar&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6BCF\u65E5\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// &quot;color&quot;: &quot;#FF5BE2&quot;,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;areaStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#8C25FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// &quot;opacity&quot;: 0.35</span>
                    opacity<span class="token operator">:</span> <span class="token number">0.2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7D2F\u8BA1\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;lineStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0078FF&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0078FF&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;areaStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#0078FF&#39;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;opacity&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="scatter" tabindex="-1"><a class="header-anchor" href="#scatter" aria-hidden="true">#</a> Scatter</h2><h3 id="scatter1" tabindex="-1"><a class="header-anchor" href="#scatter1" aria-hidden="true">#</a> scatter1</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//backgroundColor: &#39;#0C2F6F&#39;,</span>
    <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PingFang-SC-Bold&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;legend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;orient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rect&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;bottom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;90%&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;itemWidth&quot;: 6,</span>
        itemWidth<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        itemHeight<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">//itemGap: 35,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6570\u636E\u540D\u79F01&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F02&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F03&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;textStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;9\u670801\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9\u670809\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9\u670817\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9\u670825\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10\u670803\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10\u670811\u65E5&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;10\u670819\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10\u670827\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11\u670804\u65E5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11\u670812\u65E5&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        boundaryGap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;LNG&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LNG&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LNG&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&quot;#EFF4FF&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F01&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#A9F8FF&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F02&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#00FFE6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F03&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;symbolSize&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#0078FF&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#FF6600&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FF9000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FFD033&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#B8E04C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#5EE53F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FFEA00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EDFF20&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#7CB518&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#32A400&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#FB4607&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EB3568&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="gauge" tabindex="-1"><a class="header-anchor" href="#gauge" aria-hidden="true">#</a> Gauge</h2><h3 id="_1-\u8FDB\u5EA6\u6761-1" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDB\u5EA6\u6761-1" aria-hidden="true">#</a> 1. \u8FDB\u5EA6\u6761</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> getmax <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> getvalue <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#040042&#39;,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        formatter<span class="token operator">:</span> <span class="token string">&#39;{a} &lt;br/&gt;{b} : {c}%&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Pressure&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
        progress<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            roundCap<span class="token operator">:</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5706\u89D2,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// color: &#39;#6DFCFF&#39;,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// backgroundColor:&#39;#6DFCFF&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5750\u6807\u8F74\u5C0F\u6807\u8BB0</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// \u5C5E\u6027length\u63A7\u5236\u7EBF\u957F</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5C5E\u6027lineStyle\u63A7\u5236\u7EBF\u6761\u6837\u5F0F</span>
                color<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5206\u9694\u7EBF</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u5C5E\u6027length\u63A7\u5236\u7EBF\u957F</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5C5E\u6027lineStyle\uFF08\u8BE6\u89C1lineStyle\uFF09\u63A7\u5236\u7EBF\u6761\u6837\u5F0F</span>
                color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.7)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            borderRadius<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.7)&#39;</span><span class="token punctuation">,</span>
            padding<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            fontColor<span class="token operator">:</span> <span class="token string">&quot;#FFF&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#FFF&quot;</span><span class="token punctuation">,</span>
            paddingTop<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            offsetCenter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            roundCap<span class="token operator">:</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5750\u6807\u8F74\u7EBF</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5C5E\u6027lineStyle\u63A7\u5236\u7EBF\u6761\u6837\u5F0F</span>
                <span class="token comment">// width: 10, // \u4EEA\u8868\u76D8\u5BBD\u5EA6</span>
                color<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token comment">// [0.2, &#39;#2ca1ff&#39;],</span>
                    <span class="token comment">// [0.8, &#39;#0adbfa&#39;],</span>
                    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(18, 155, 251, 0.2)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            valueAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{value}&#39;</span><span class="token punctuation">,</span>
            shadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            shadowOffsetY<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token comment">// borderWidth: 1,</span>
            <span class="token comment">// textBorderColor: &#39;#000&#39;,</span>
            <span class="token comment">// textBorderWidth: 1,</span>
            <span class="token comment">// textShadowBlur: 1,</span>
            textShadowColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            textShadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            textShadowOffsetY<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token comment">// paddingTop: 10,</span>
            <span class="token comment">// fontFamily: &#39;digital&#39;,</span>
            fontSize<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            fontWeight<span class="token operator">:</span> <span class="token string">&#39;Regular&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            rich<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            offsetCenter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>value <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;cpu&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="gauge2" tabindex="-1"><a class="header-anchor" href="#gauge2" aria-hidden="true">#</a> gauge2</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">89</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// backgroundColor: &#39;#1f1e26&#39;,</span>
    title<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        text<span class="token operator">:</span> num <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// position: &#39;&#39;,</span>
        x<span class="token operator">:</span> <span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token string">&#39;35%&#39;</span><span class="token punctuation">,</span>
        textAlign<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token string">&#39;14&#39;</span><span class="token punctuation">,</span>
            fontWeight<span class="token operator">:</span> <span class="token string">&#39;100&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#022B54&#39;</span><span class="token punctuation">,</span>
            textAlign<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    polar<span class="token operator">:</span> <span class="token punctuation">{</span>
        radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;83%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// center: [&#39;50%&#39;, &#39;50%&#39;],</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    angleAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        max<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;clockwise&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u9006\u65F6\u9488</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    radiusAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// show: true,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        coordinateSystem<span class="token operator">:</span> <span class="token string">&#39;polar&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;clockwise&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        roundCap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// barWidth: 60,</span>
        <span class="token comment">// showBackground: false,</span>
        backgroundStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#464451&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#4FACFE&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#00F2FE&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="gauge3" tabindex="-1"><a class="header-anchor" href="#gauge3" aria-hidden="true">#</a> gauge3</h3><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><h2 id="tabel" tabindex="-1"><a class="header-anchor" href="#tabel" aria-hidden="true">#</a> Tabel</h2><h3 id="table1" tabindex="-1"><a class="header-anchor" href="#table1" aria-hidden="true">#</a> table1</h3><h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h2><h3 id="_1-date" tabindex="-1"><a class="header-anchor" href="#_1-date" aria-hidden="true">#</a> 1. Date</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> year <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> month <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> day <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> hours <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> mins <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// var mins = mins &lt; 10 ? \`0\${mins}\` : mins;</span>
    <span class="token keyword">var</span> secs <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// var secs = secs &lt; 10 ? \`0\${secs}\` : secs;</span>
    <span class="token keyword">var</span> time <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hours<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mins<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> time<span class="token punctuation">)</span>
    <span class="token comment">// var dateTime = hours &lt; 12 ? \`\${date} \${time} AM\` : \`\${date} \${time} PM\`;</span>

    <span class="token comment">// var weekDay = [&quot;\u661F\u671F\u65E5&quot;, &quot;\u661F\u671F\u4E00&quot;, &quot;\u661F\u671F\u4E8C&quot;, &quot;\u661F\u671F\u4E09&quot;, &quot;\u661F\u671F\u56DB&quot;, &quot;\u661F\u671F\u4E94&quot;, &quot;\u661F\u671F\u516D&quot;];</span>
    <span class="token comment">// var dateTime = hours &lt; 12 ? \`\${date} \${time} AM\` : \`\${date} \${time} PM \${weekDay[d.getDay()]}\`;</span>
    <span class="token comment">// console.log(dateTime);      //2022-1-25 9:49:04 AM</span>

    <span class="token comment">// $(&quot;#cmp4c744dlabel&quot;).html(dateTime);</span>
<span class="token punctuation">}</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span>printTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(dateTime.toLocaleString())  // 2022/1/12 \u4E0B\u53481:45:36</span>
<span class="token comment">// console.log(dateTime.toDateString()) // Tue Jan 25 2022</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-video" tabindex="-1"><a class="header-anchor" href="#_2-video" aria-hidden="true">#</a> 2. Video</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token comment">/*================ \u89C6\u9891\u64AD\u653E\u5668 ===================*/</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.videoBox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;video style=&quot;width:100%; height:100%&quot; autoplay loop controls&gt;
        &lt;source src=&quot;/movie.mp4&quot; type=&quot;video/mp4&quot;&gt;
    &lt;video&gt;
    </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>
</code></pre></div></details><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*================\u5E26\u64AD\u653E/\u6682\u505C\u548C\u9759\u97F3\u7684\u89C6\u9891\u64AD\u653E\u5668===================*/</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.videoBox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;button onclick=&quot;play()&quot;&gt;\u64AD\u653E/\u6682\u505C&lt;/button&gt;
    &lt;button onclick=&quot;mute()&quot;&gt;\u9759\u97F3&lt;/button&gt;
    &lt;video id=&quot;player&quot; controls&gt;
        &lt;source src=&quot;/movie.mp4&quot; type=&quot;video/mp4&quot;&gt;
        &lt;source src=&quot;/movie.ogg&quot; type=&quot;video/ogg&quot;&gt;
    &lt;video&gt;
    </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> player <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>play<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        player<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        player<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> player <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    player<span class="token punctuation">.</span>muted <span class="token operator">=</span> player<span class="token punctuation">.</span>muted <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_4-\u6253\u5F00\u65B0\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_4-\u6253\u5F00\u65B0\u9875\u9762" aria-hidden="true">#</a> 4. \u6253\u5F00\u65B0\u9875\u9762</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="chinamap" tabindex="-1"><a class="header-anchor" href="#chinamap" aria-hidden="true">#</a> ChinaMap</h2><h3 id="chinamap1" tabindex="-1"><a class="header-anchor" href="#chinamap1" aria-hidden="true">#</a> ChinaMap1</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> chinaGeoCoordMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">\u9ED1\u9F99\u6C5F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">127.9688</span><span class="token punctuation">,</span> <span class="token number">45.368</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5185\u8499\u53E4</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.3467</span><span class="token punctuation">,</span> <span class="token number">41.4899</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5409\u6797</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">125.8154</span><span class="token punctuation">,</span> <span class="token number">44.2584</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5317\u4EAC\u5E02</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.4551</span><span class="token punctuation">,</span> <span class="token number">40.2539</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u8FBD\u5B81</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123.1238</span><span class="token punctuation">,</span> <span class="token number">42.1216</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6CB3\u5317</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.4995</span><span class="token punctuation">,</span> <span class="token number">38.1006</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5929\u6D25</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.4219</span><span class="token punctuation">,</span> <span class="token number">39.4189</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5C71\u897F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.3352</span><span class="token punctuation">,</span> <span class="token number">37.9413</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u9655\u897F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.1162</span><span class="token punctuation">,</span> <span class="token number">34.2004</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u7518\u8083</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">103.5901</span><span class="token punctuation">,</span> <span class="token number">36.3043</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5B81\u590F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.3586</span><span class="token punctuation">,</span> <span class="token number">38.1775</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u9752\u6D77</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">101.4038</span><span class="token punctuation">,</span> <span class="token number">36.8207</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u65B0\u7586</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">87.9236</span><span class="token punctuation">,</span> <span class="token number">43.5883</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u897F\u85CF</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">91.11</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u56DB\u5DDD</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">103.9526</span><span class="token punctuation">,</span> <span class="token number">30.7617</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u91CD\u5E86</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">108.384366</span><span class="token punctuation">,</span> <span class="token number">30.439702</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5C71\u4E1C</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.1582</span><span class="token punctuation">,</span> <span class="token number">36.8701</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6CB3\u5357</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.4668</span><span class="token punctuation">,</span> <span class="token number">34.6234</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6C5F\u82CF</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.8062</span><span class="token punctuation">,</span> <span class="token number">31.9208</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5B89\u5FBD</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.29</span><span class="token punctuation">,</span> <span class="token number">32.0581</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6E56\u5317</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.3896</span><span class="token punctuation">,</span> <span class="token number">30.6628</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6D59\u6C5F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.5313</span><span class="token punctuation">,</span> <span class="token number">29.8773</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u798F\u5EFA</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.4543</span><span class="token punctuation">,</span> <span class="token number">25.9222</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6C5F\u897F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.0046</span><span class="token punctuation">,</span> <span class="token number">28.6633</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6E56\u5357</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.0823</span><span class="token punctuation">,</span> <span class="token number">28.2568</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u8D35\u5DDE</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.6992</span><span class="token punctuation">,</span> <span class="token number">26.7682</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u4E91\u5357</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">102.9199</span><span class="token punctuation">,</span> <span class="token number">25.4663</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5E7F\u4E1C</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.12244</span><span class="token punctuation">,</span> <span class="token number">23.009505</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u5E7F\u897F</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">108.479</span><span class="token punctuation">,</span> <span class="token number">23.1152</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u6D77\u5357</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.3893</span><span class="token punctuation">,</span> <span class="token number">19.8516</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">\u4E0A\u6D77</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.4648</span><span class="token punctuation">,</span> <span class="token number">31.2891</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> chinaDatas <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9ED1\u9F99\u6C5F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5185\u8499\u53E4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5317\u4EAC\u5E02&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5409\u6797&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8FBD\u5B81&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6CB3\u5317&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5929\u6D25&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C71\u897F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9655\u897F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7518\u8083&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5B81\u590F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9752\u6D77&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u7586&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u897F\u85CF&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u56DB\u5DDD&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u91CD\u5E86&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5E7F\u4E1C&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C71\u4E1C&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6CB3\u5357&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6C5F\u82CF&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5B89\u5FBD&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6E56\u5317&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D59\u6C5F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u798F\u5EFA&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6E56\u5357&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8D35\u5DDE&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5E7F\u897F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D77\u5357&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6D77&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> <span class="token function-variable function">convertData</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> dataItem <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> fromCoord <span class="token operator">=</span> chinaGeoCoordMap<span class="token punctuation">[</span>dataItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> toCoord <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">116.0046</span><span class="token punctuation">,</span> <span class="token number">28.6633</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fromCoord <span class="token operator">&amp;&amp;</span> toCoord<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">coord</span><span class="token operator">:</span> fromCoord<span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> dataItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">coord</span><span class="token operator">:</span> toCoord<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> series <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;\u6C5F\u897F&#39;</span><span class="token punctuation">,</span> chinaDatas<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    series<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;lines&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zlevel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">effect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">period</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//\u7BAD\u5934\u6307\u5411\u901F\u5EA6\uFF0C\u503C\u8D8A\u5C0F\u901F\u5EA6\u8D8A\u5FEB</span>
                <span class="token literal-property property">trailLength</span><span class="token operator">:</span> <span class="token number">0.02</span><span class="token punctuation">,</span> <span class="token comment">//\u7279\u6548\u5C3E\u8FF9\u957F\u5EA6[0,1]\u503C\u8D8A\u5927\uFF0C\u5C3E\u8FF9\u8D8A\u957F\u91CD</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;arrow&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7BAD\u5934\u56FE\u6807</span>
                <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">//\u56FE\u6807\u5927\u5C0F</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u5BBD\u5EA6</span>
                    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u900F\u660E\u5EA6</span>
                    <span class="token literal-property property">curveness</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u66F2\u76F4\u5EA6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">convertData</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;effectScatter&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">coordinateSystem</span><span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zlevel</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rippleEffect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u6D9F\u6F2A\u7279\u6548</span>
                <span class="token literal-property property">period</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//\u52A8\u753B\u65F6\u95F4\uFF0C\u503C\u8D8A\u5C0F\u901F\u5EA6\u8D8A\u5FEB</span>
                <span class="token literal-property property">brushType</span><span class="token operator">:</span> <span class="token string">&#39;stroke&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u6CE2\u7EB9\u7ED8\u5236\u65B9\u5F0F stroke, fill</span>
                <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//\u6CE2\u7EB9\u5706\u73AF\u6700\u5927\u9650\u5236\uFF0C\u503C\u8D8A\u5927\u6CE2\u7EB9\u8D8A\u5927</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u663E\u793A\u4F4D\u7F6E</span>
                    <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u504F\u79FB\u8BBE\u7F6E</span>
                    <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">//\u5706\u73AF\u663E\u793A\u6587\u5B57</span>
                        <span class="token keyword">return</span> params<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">symbolSize</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">3</span> <span class="token operator">+</span> val<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u5706\u73AF\u5927\u5C0F</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#FFA54F&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> dataItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> chinaGeoCoordMap<span class="token punctuation">[</span>dataItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>dataItem<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//\u88AB\u653B\u51FB\u70B9</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;scatter&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">coordinateSystem</span><span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zlevel</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rippleEffect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">period</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token literal-property property">brushType</span><span class="token operator">:</span> <span class="token string">&#39;stroke&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">//offset:[5, 0],</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#0f0&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{b}&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#0f0&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#FFA54F&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;pin&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> chinaGeoCoordMap<span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(166, 200, 76, 0.82)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#FFFFCC&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showDelay</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hideDelay</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enterable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">transitionDuration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extraCssText</span><span class="token operator">:</span> <span class="token string">&#39;z-index:100&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params<span class="token punctuation">,</span> ticket<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6839\u636E\u4E1A\u52A1\u81EA\u5DF1\u62D3\u5C55\u8981\u663E\u793A\u7684\u5185\u5BB9</span>
            <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> name <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
            <span class="token keyword">var</span> value <span class="token operator">=</span> params<span class="token punctuation">.</span>value<span class="token punctuation">[</span>params<span class="token punctuation">.</span>seriesIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            res <span class="token operator">=</span> <span class="token string">&quot;&lt;span style=&#39;color:blue;&#39;&gt;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;&lt;/span&gt;&lt;br/&gt;\u6570\u636E\uFF1A&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#013954&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visualMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u56FE\u4F8B\u503C\u63A7\u5236</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#f44336&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#fc9700&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ffde00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ffde00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#00eaff&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">geo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5141\u8BB8\u7F29\u653E</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(51, 69, 89, .5)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5730\u56FE\u80CC\u666F\u8272</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#516a89&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7701\u5E02\u8FB9\u754C\u7EBF00fcff 516a89</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(37, 43, 61, .5)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u60AC\u6D6E\u80CC\u666F</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> series<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#013954&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6734\u59D3\u4EBA\u53E3\u8FC1\u5F99\u56FE&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5730\u70B9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7EBF\u8DEF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">geo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5141\u8BB8\u7F29\u653E</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(51, 69, 89, .5)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5730\u56FE\u80CC\u666F\u8272</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#516a89&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7701\u5E02\u8FB9\u754C\u7EBF00fcff 516a89</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(37, 43, 61, .5)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u60AC\u6D6E\u80CC\u666F</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u70B9&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;effectScatter&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">coordinateSystem</span><span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zlevel</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rippleEffect</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//\u6D9F\u6F2A\u7279\u6548</span>
                <span class="token literal-property property">brushType</span><span class="token operator">:</span> <span class="token string">&#39;stroke&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u6CE2\u7EB9\u7ED8\u5236\u65B9\u5F0F stroke\uFF0Cfill</span>
                <span class="token literal-property property">period</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token comment">//\u52A8\u753B\u65F6\u95F4\uFF0C\u503C\u8D8A\u5C0F\u901F\u5EA6\u8D8A\u5FEB</span>
                <span class="token literal-property property">scale</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token comment">//\u6CE2\u7EB9\u5706\u73AF\u6700\u5927\u663E\u793A\uFF0C\u503C\u8D8A\u5927\u6CE2\u7EB9\u8D8A\u5927</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{b}&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showEffectOn</span><span class="token operator">:</span> <span class="token string">&#39;render&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#46bee9&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> allData<span class="token punctuation">.</span>citys<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7EBF\u8DEF&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;lines&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">coordinateSystem</span><span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zlevel</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">effect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">constantSpeed</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;arrow&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7BAD\u5934\u56FE\u6807\uFF0Cpin \u5706\u70B9</span>
                <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//\u56FE\u6807\u5927\u5C0F</span>
                <span class="token literal-property property">trailLength</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//\u7279\u6548\u5C3E\u8FF9\u957F\u5EA6[0,1]\u503C\u8D8A\u5927\uFF0C\u5C3E\u8FF9\u8D8A\u957F\u91CD</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#58B3CC&#39;</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#F58158&#39;</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token boolean">false</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u5BBD\u5EA6</span>
                    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u900F\u660E\u5EA6</span>
                    <span class="token literal-property property">curveness</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token comment">//\u5C3E\u8FF9\u7EBF\u6761\u66F2\u76F4\u5EA6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> allData<span class="token punctuation">.</span>moveLines<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,66);function t(o,e){return p}var u=n(a,[["render",t],["__file","EchartsExample.html.vue"]]);export{u as default};