import{_ as o,r as e,o as c,c as u,b as n,d as s,a as t,F as l,e as p}from"./app.afb47d0b.js";const i={},k=n("h1",{id:"flask",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flask","aria-hidden":"true"},"#"),s(" Flask")],-1),r={href:"https://flask.net.cn",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> \u5FEB\u901F\u542F\u52A8</h2><p><strong>1.\u5B89\u88C5 Flask</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> flask
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
</code></pre></div>`,8),v={href:"http://127.0.0.1:5000",target:"_blank",rel:"noopener noreferrer"},m=p(`<h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># http://localhost:5000/hello</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello flask!&quot;</span>
</code></pre></div><p>query\u67E5\u8BE2\u53C2\u6570</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># http://localhost:5000/hello?name=john</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> request<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello flask!&quot;</span>
</code></pre></div><p>form\u8868\u5355\u53C2\u6570</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># form-data</span>
    age <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello flask!&quot;</span>
</code></pre></div><h3 id="blueprint" tabindex="-1"><a class="header-anchor" href="#blueprint" aria-hidden="true">#</a> blueprint</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># app.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> request
<span class="token keyword">from</span> api<span class="token punctuation">.</span>book <span class="token keyword">import</span> book

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>book<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&quot;/book&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># api/book.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint<span class="token punctuation">,</span> jsonify

book <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_books</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;\u67E5\u8BE2\u6240\u6709\u4E66\u7C4D&quot;</span>
</code></pre></div><p>\u5B8C\u6574\u7248</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># api/book.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Blueprint<span class="token punctuation">,</span> jsonify<span class="token punctuation">,</span> request

book <span class="token operator">=</span> Blueprint<span class="token punctuation">(</span><span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_books</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u67E5\u8BE2\u6210\u529F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&lt;book_id&gt;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">get_book</span><span class="token punctuation">(</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> book_id<span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u67E5\u8BE2\u6210\u529F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">add_book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
    psw <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> psw<span class="token punctuation">)</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> name<span class="token punctuation">,</span>
            <span class="token string">&quot;psw&quot;</span><span class="token punctuation">:</span> psw<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6DFB\u52A0\u7528\u6237\u6210\u529F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&lt;book_id&gt;&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;PUT&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">update_book</span><span class="token punctuation">(</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> book_id<span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u66F4\u65B0\u7528\u6237\u6210\u529F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@book<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&lt;book_id&gt;&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">delete_book</span><span class="token punctuation">(</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> book_id<span class="token punctuation">,</span>
        <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5220\u9664\u7528\u6237\u6210\u529F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function g(b,q){const a=e("ExternalLinkIcon");return c(),u(l,null,[k,n("p",null,[n("a",r,[s("Flask\u5B98\u7F51"),t(a)])]),d,n("p",null,[n("a",v,[s("http://127.0.0.1:5000"),t(a)])]),m],64)}var _=o(i,[["render",g],["__file","flask.html.vue"]]);export{_ as default};
