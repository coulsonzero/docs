import{_ as n,d as s}from"./app.73a9ff34.js";const a={},t=s(`<h1 id="two-sum" tabindex="-1"><a class="header-anchor" href="#two-sum" aria-hidden="true">#</a> Two Sum</h1><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token comment">// m := map[int]int{}</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> j<span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>target <span class="token operator">-</span> v<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>j<span class="token punctuation">,</span> i<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        m<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// return nil</span>

    <span class="token comment">/*
    for i := range nums {
        for j := i+1; j &lt; len(nums); j++ {
            if(nums[i] + nums[j] == target) {
                return []int {i, j}
            }
        }
    }
    return nil
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\uFF1A\u901A\u8FC7 \u6267\u884C\u7528\u65F6\uFF1A4 ms, \u5728\u6240\u6709 Go \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8695.05%\u7684\u7528\u6237 \u5185\u5B58\u6D88\u8017\uFF1A4.1 MB, \u5728\u6240\u6709 Go \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8661.09%\u7684\u7528\u6237</p>`,3);function e(p,i){return t}var c=n(a,[["render",e],["__file","1-\u4E24\u6570\u4E4B\u548C.html.vue"]]);export{c as default};
