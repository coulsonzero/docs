import{_ as e,r as t,o,c,b as n,d as s,a as i,F as r,e as p}from"./app.0a1ed468.js";const l={},d=n("h1",{id:"lc387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lc387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","aria-hidden":"true"},"#"),s(" LC387. \u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26")],-1),u={id:"_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","aria-hidden":"true"},"#",-1),h={href:"https://leetcode-cn.com/problems/first-unique-character-in-a-string/",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>\u96BE\u5EA6\uFF1A<code>\u7B80\u5355</code></p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><div class="language-text ext-text"><pre class="language-text"><code>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u627E\u5230 \u5B83\u7684\u7B2C\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684\u5B57\u7B26\uFF0C\u5E76\u8FD4\u56DE\u5B83\u7684\u7D22\u5F15 \u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE -1 \u3002
</code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-text ext-text"><pre class="language-text"><code>\u8F93\u5165: s = &quot;loveleetcode&quot;
\u8F93\u51FA: 2

\u8F93\u5165: s = &quot;aabb&quot;
\u8F93\u51FA: -1
</code></pre></div><h2 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">firstUniqChar</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> x <span class="token keyword">in</span> s<span class="token punctuation">:</span>
            <span class="token keyword">if</span> s<span class="token punctuation">.</span>find<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> s<span class="token punctuation">.</span>find<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        tmp = collections.Counter(s)
        for i, v in enumerate(s):
            if tmp[v] == 1:
                return i
        return -1
        &#39;&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function _(m,b){const a=t("ExternalLinkIcon");return o(),c(r,null,[d,n("h4",u,[k,s(),n("a",h,[s("387. \u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26"),i(a)])]),v],64)}var x=e(l,[["render",_],["__file","387.\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26.html.vue"]]);export{x as default};
