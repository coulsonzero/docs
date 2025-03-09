import{_ as n,e as a}from"./app.0a1ed468.js";const s={},t=a(`<h1 id="asynchronous-javascript" tabindex="-1"><a class="header-anchor" href="#asynchronous-javascript" aria-hidden="true">#</a> Asynchronous JavaScript</h1><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://geek.itheima.net/v1_0/channels&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Could not get data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function p(o,c){return t}var u=n(s,[["render",p],["__file","async.html.vue"]]);export{u as default};
