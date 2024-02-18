import{_ as t,r as o,o as p,c as l,b as n,d as s,a as e,F as c,e as r}from"./app.925c2c96.js";const i={},d=n("h1",{id:"flask",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flask","aria-hidden":"true"},"#"),s(" Flask")],-1),u={href:"https://flask.net.cn",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> \u5FEB\u901F\u542F\u52A8</h2><p><strong>1.\u5B89\u88C5 Flask</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> flask
</code></pre></div><p><strong>2.\u521B\u5EFA Flask \u9879\u76EE</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> flask-app
$ <span class="token builtin class-name">cd</span> flask-app
$ <span class="token function">touch</span> app.py
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>app.py</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, World!&#39;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><strong>3.\u542F\u52A8 Flask \u9879\u76EE</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ python app.py
</code></pre></div>`,8),h={href:"http://127.0.0.1:5000",target:"_blank",rel:"noopener noreferrer"};function v(_,m){const a=o("ExternalLinkIcon");return p(),l(c,null,[d,n("p",null,[n("a",u,[s("Flask\u5B98\u7F51"),e(a)])]),k,n("p",null,[n("a",h,[s("http://127.0.0.1:5000"),e(a)])])],64)}var f=t(i,[["render",v],["__file","flask.html.vue"]]);export{f as default};
