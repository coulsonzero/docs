import{_ as i,r as c,o as u,c as k,a,w as t,b as n,d as s,F as r,e as o}from"./app.afb47d0b.js";const d={},m=o(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello world!&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="variable-constants" tabindex="-1"><a class="header-anchor" href="#variable-constants" aria-hidden="true">#</a> Variable &amp; Constants</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// variable</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>       <span class="token comment">// also: \`int num(12)\`</span>
<span class="token comment">// constant</span>
<span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// multi-var</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div></div></div><div class="custom-container danger"><p class="custom-container-title">Notice</p><blockquote><p>\u5C40\u90E8\u53D8\u91CF\u5FC5\u987B\u521D\u59CB\u5316: <code>int num = 0;</code></p><p>\u8F83\u957F\u53D8\u91CF\u547D\u540D\u89C4\u5219\uFF1A\u4F7F\u7528<code>_</code>\u8FDE\u63A5, \u5982 <code>num_short</code></p></blockquote><ul><li>\u5168\u5C40\u53D8\u91CF\uFF1A\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C</li><li>\u9759\u6001\u5C40\u90E8\u53D8\u91CF\uFF1A\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C</li><li>\u81EA\u52A8\u5C40\u90E8\u53D8\u91CF\uFF1A\u6CA1\u6709\u88AB\u663E\u5F0F\u521D\u59CB\u5316\u65F6\uFF0C\u5C06\u4FDD\u7559\u4EE5\u524D\u9057\u7559\u7684\u5783\u573E\u503C\uFF0C\u53EF\u80FD\u503C\u6BD4\u8F83\u5927</li></ul></div>`,8),v=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},'"iostream"')]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token keyword"},"int"),s(" global"),n("span",{class:"token punctuation"},";"),s("     "),n("span",{class:"token comment"},"// \u5168\u5C40\u53D8\u91CF\uFF1A\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"int"),s(" static_local"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// \u9759\u6001\u5C40\u90E8\u53D8\u91CF\uFF1A\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C"),s(`
    `),n("span",{class:"token keyword"},"auto"),s(),n("span",{class:"token keyword"},"int"),s(" auto_local"),n("span",{class:"token punctuation"},";"),s("        "),n("span",{class:"token comment"},"// \u81EA\u52A8\u5C40\u90E8\u53D8\u91CF\uFF1A\u6CA1\u6709\u88AB\u663E\u5F0F\u521D\u59CB\u5316\u65F6\uFF0C\u5C06\u4FDD\u7559\u4EE5\u524D\u9057\u7559\u7684\u5783\u573E\u503C\uFF0C\u53EF\u80FD\u503C\u6BD4\u8F83\u5927"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token double-colon punctuation"},"::"),s("global "),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" static_local "),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" auto_local "),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token double-colon punctuation"},"::"),s("num "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// \u5168\u5C40\u53D8\u91CF\uFF1A10"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" num "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("      "),n("span",{class:"token comment"},"// \u5C40\u90E8\u53D8\u91CF\uFF1A12"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},'"iostream"')]),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// \u9759\u6001\u5C40\u90E8\u53D8\u91CF"),s(`
    count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"count: "'),s(),n("span",{class:"token operator"},"<<"),s(" count "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * count: 1
 * count: 2
 * count: 3
 */`),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},'"iostream"')]),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
    num`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"auto"),s(),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u663E\u5F0F\u81EA\u52A8\u5C40\u90E8\u53D8\u91CF"),s(`
    count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"num: "'),s(),n("span",{class:"token operator"},"<<"),s(" num "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'", "'),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"count: "'),s(),n("span",{class:"token operator"},"<<"),s(" count "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * num: 4, count: 1
 * num: 4, count: 1
 * num: 4, count: 1
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=o(`<h3 id="output-input" tabindex="-1"><a class="header-anchor" href="#output-input" aria-hidden="true">#</a> Output &amp; Input</h3><p><strong>output</strong></p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// c++</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token comment">// c</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// not to use \`using namespace std\` in \`header file\`</span>
</code></pre></div><details class="custom-container details"><summary>\u8F93\u51FA\u683C\u5F0F\u5316</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">/*****************************************
 * setprecision(3): \u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u7684\u4F4D\u6570      *
 * showpos\uFF1A\u663E\u793A+-                        *
 * setfill(&#39;*&#39;)\uFF1A\u586B\u5145\u5B57\u7B26                  *
 * setw(15): \u8BBE\u7F6E\u503C\u6240\u5360\u5B57\u6BB5\u5927\u5C0F             *
 *****************************************/</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iomanip&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> fixed <span class="token operator">&lt;&lt;</span> <span class="token function">setprecision</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> showpos <span class="token operator">&lt;&lt;</span> <span class="token function">setfill</span><span class="token punctuation">(</span><span class="token char">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">setw</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> left <span class="token operator">&lt;&lt;</span> PI <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// +3.142*********</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">setw</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> internal<span class="token operator">&lt;&lt;</span> PI <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>  <span class="token comment">// +*********3.142</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">setw</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> right <span class="token operator">&lt;&lt;</span> PI <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// +*********3.142</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>input</strong></p><ol><li>cin</li></ol><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// single var</span>
<span class="token keyword">int</span> x<span class="token punctuation">;</span>
cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>           <span class="token comment">// end: space</span>

<span class="token comment">// multi vars</span>
<span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>      <span class="token comment">// connect: use space or line to to separate</span>
</code></pre></div><ol start="2"><li>getline</li></ol><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

string s<span class="token punctuation">;</span>
<span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// end: line</span>
<span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token char">&#39;$&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// end: &#39;$&#39;</span>
</code></pre></div><h3 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h3><ul><li>\u6574\u6570\u7C7B\u578B\uFF1A<code>int</code> (<code>short</code>, <code>long</code>, <code>unsigned</code>, <code>signed</code> \u4FEE\u9970)</li><li>\u6D6E\u70B9\u7C7B\u578B\uFF1A<code>float</code>, <code>double</code>(\u9ED8\u8BA4), long double</li><li>\u5E03\u5C14\u7C7B\u578B\uFF1A<code>bool</code></li><li>\u5B57\u7B26\u7C7B\u578B\uFF1A<code>char</code></li><li>\u5B57\u7B26\u4E32\u7C7B: <code>string</code></li><li>\u81EA\u52A8\u7C7B\u578B\uFF1A<code>auto</code></li><li>void(\u7A7A)\u7C7B\u578B\uFF1A\u663E\u793A\u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C</li></ul>`,11),h=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"/* ==== basic type ==== */"),s(`
`),n("span",{class:"token keyword"},"int"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s("       "),n("span",{class:"token comment"},"// long (L)"),s(`
`),n("span",{class:"token keyword"},"double"),s(" pi "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// float(F)"),s(`
`),n("span",{class:"token keyword"},"bool"),s(" flag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// 1 or 0, boolalpha"),s(`
`),n("span",{class:"token keyword"},"char"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'z'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// string"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("string name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John Smith"'),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("string "),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"John Smith"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
 `),n("span",{class:"token comment"},"// array"),s(`
`),n("span",{class:"token keyword"},"int"),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" nums"),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//===== STL =====//"),s(`
`),n("span",{class:"token comment"},"// vector"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" vec"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" vec "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// map"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("unordered_map"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" map"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("unordered_map"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token char"},"'b'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// set"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("unordered_set"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" set"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("unordered_set"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" set "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// auto"),s(`
`),n("span",{class:"token keyword"},"auto"),s(),n("span",{class:"token operator"},"*"),s("ptr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token function"},"Solution"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// true(\u4EFB\u4F55\u975E\u96F6\u503C) false(0)"),s(`
`),n("span",{class:"token comment"},"// ----output -------- boolalpha ----"),s(`
`),n("span",{class:"token keyword"},"bool"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s("      "),n("span",{class:"token comment"},"// 1 (true)"),s(`
`),n("span",{class:"token keyword"},"bool"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s("        "),n("span",{class:"token comment"},"// 1 (true)"),s(`
`),n("span",{class:"token keyword"},"bool"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s("     "),n("span",{class:"token comment"},"// 0 (false)"),s(`
`),n("span",{class:"token keyword"},"bool"),s(" e "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s("         "),n("span",{class:"token comment"},"// 0 (false)"),s(`

`),n("span",{class:"token comment"},"// true\u8F93\u51FA\u672A1\uFF0C false\u8F93\u51FA\u4E3A0"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" x "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// 1"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" y "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// 1"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" z "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// 0"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" e "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// 0"),s(`

`),n("span",{class:"token comment"},"// boolalpha: \u5C06\u5E03\u5C14\u503C\u4F5C\u4E3A\u5B57\u9762\u91CF(true/false)\u8F93\u51FA"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" boolalpha"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" x "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// ture"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" y "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// ture"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" z "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// false"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" e "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// false"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"/**\n * `sizeof(12)`: \u5B57\u8282\u5927\u5C0F\n * `typeid(12).name()`: \u5177\u4F53\u7C7B\u578B\n * `typeid(3.14+1.2).name()`: \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\n * `static_cast<int>(12)`: \u663E\u5F0F\u7C7B\u578B\u8F6C\u6362\n */"),s(`

`),n("span",{class:"token comment"},"// sizeof"),s(`
`),n("span",{class:"token keyword"},"int"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),s(`
`),n("span",{class:"token keyword"},"sizeof"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// sizeof(int): 4"),s(`

`),n("span",{class:"token comment"},"// typeid(expr).name"),s(`
`),n("span",{class:"token keyword"},"typeid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("     "),n("span",{class:"token comment"},"// i"),s(`
`),n("span",{class:"token keyword"},"typeid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1.6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("    "),n("span",{class:"token comment"},"// d"),s(`
`),n("span",{class:"token keyword"},"typeid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3.14f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// f"),s(`

`),n("span",{class:"token comment"},"// \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362"),s(`
`),n("span",{class:"token keyword"},"float"),s(" pi "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),s(`
`),n("span",{class:"token keyword"},"typeid"),n("span",{class:"token punctuation"},"("),s("pi "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// d: double"),s(`

`),n("span",{class:"token comment"},"// \u663E\u5F0F\u7C7B\u578B\u8F6C\u6362"),s(`
`),n("span",{class:"token keyword"},"double"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"23.6"),s(`
`),n("span",{class:"token keyword"},"int"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"30"),s(`
x `),n("span",{class:"token operator"},"+"),s(" y                     "),n("span",{class:"token comment"},"// 43.6"),s(`
`),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"static_cast"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 43"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// `numeric_limits<int>::max()`: \u6570\u636E\u7C7B\u578B\u6700\u5927\u503C"),s(`
`),n("span",{class:"token comment"},"// `numeric_limits<int>::min()`: \u6570\u636E\u7C7B\u578B\u6700\u5C0F\u503C"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<limits>")]),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"max(int): "'),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token class-name"},"numeric_limits"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s("                      "),n("span",{class:"token comment"},"// max(int): 2147483647"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"max(unsigned int): "'),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token class-name"},"numeric_limits"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"unsigned"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// max(unsigned int): 4294967295"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=o(`<h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// this is a single comment</span>

<span class="token comment">/*
 this is a multi-line comment
 */</span>


<span class="token comment">/**
 * this is a multi-line comment
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opeartor" tabindex="-1"><a class="header-anchor" href="#opeartor" aria-hidden="true">#</a> Opeartor</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * arithmetic operators : + - *  / %
 * assignment operators : += -= *= /= %=
 * increment &amp; Decrement: i++ i-- ++i --i
 * comparison operators : == != &lt; &gt; &lt;= &gt;=
 * &amp;&amp; || !
 * a ? b : c
 */</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// \u5224\u65AD\u5947\u5076</span>
i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span>
i <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">0</span>

<span class="token comment">// \u4E2D\u95F4\u6570</span>
<span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>      <span class="token comment">// \u9632\u6EA2\u51FA</span>
</code></pre></div><p><strong>example</strong></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>    <span class="token comment">// 3</span>
<span class="token keyword">double</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>                      <span class="token comment">// 2</span>
<span class="token comment">// \`/\`\u9664\u6CD5\u4E0D\u4F1A\u9ED8\u8BA4\u4FDD\u7559\u5C0F\u6570\u70B9\uFF0C\u9664\u975E\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00</span>
<span class="token keyword">double</span> t <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>                <span class="token comment">// 2.5</span>
<span class="token keyword">double</span> t <span class="token operator">=</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>   <span class="token comment">// 2.5</span>

x <span class="token operator">=</span> <span class="token number">5</span>
y <span class="token operator">=</span> <span class="token operator">++</span>x
<span class="token comment">// x is 6, y is 6</span>
x <span class="token operator">=</span> <span class="token number">5</span>
y <span class="token operator">=</span> x<span class="token operator">++</span>
<span class="token comment">// x is 6, y is 5</span>

<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>sign <span class="token operator">=</span> i <span class="token operator">==</span> nums<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> sign <span class="token operator">=</span> i <span class="token operator">==</span> nums<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="control" tabindex="-1"><a class="header-anchor" href="#control" aria-hidden="true">#</a> Control</h2><h3 id="if-statement" tabindex="-1"><a class="header-anchor" href="#if-statement" aria-hidden="true">#</a> If Statement</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u6CE8\u610F: \u53EA\u8981condition != 0 \u6216 false \u5373\u901A\u8FC7</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch-statement" tabindex="-1"><a class="header-anchor" href="#switch-statement" aria-hidden="true">#</a> *Switch Statement</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> value_1<span class="token operator">:</span>
        <span class="token comment">// statement(s)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> value_2<span class="token operator">:</span>
        <span class="token comment">// statement(s)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">int</span> day <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;work day&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;sta&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;sun&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> For Loop</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// default-for</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span>

<span class="token comment">// strong-for</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> <span class="token operator">&amp;</span>v <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span>


<span class="token comment">// Notice: pointer loop</span>
<span class="token comment">// vector</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>it<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// map</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> iter <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iter <span class="token operator">!=</span> map<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iter<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; [&quot;</span> <span class="token operator">&lt;&lt;</span> iter<span class="token operator">-&gt;</span>first <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">&lt;&lt;</span> iter<span class="token operator">-&gt;</span>second <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> While Loop</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="do-while-loop" tabindex="-1"><a class="header-anchor" href="#do-while-loop" aria-hidden="true">#</a> Do While Loop</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h3><blockquote><p><code>&quot;Hello&quot; = &#39;H&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;, &#39;\\0&#39;</code>, C\u8BED\u8A00\u4E2D\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u662F\u5B57\u7B26\u4E32\u7ED3\u675F\u7B26&#39;\\0&#39;(\u7EC8\u6B62\u7B26)</p></blockquote>`,22),C=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<string>")]),s(`


`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("string name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John Smith"'),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" name "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// if you has included `<iostream>` header file"),s(`
`),n("span",{class:"token comment"},"// #include <string>"),s(`

`),n("span",{class:"token comment"},"// init"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("string s"),n("span",{class:"token punctuation"},";"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),s("string s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Hello World"'),n("span",{class:"token punctuation"},";"),s("      "),n("span",{class:"token comment"},'// std::string s("Hello World");'),s(`

`),n("span",{class:"token comment"},"// size"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("        "),n("span",{class:"token comment"},"// STL"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// C"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// cap"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"capacity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u589E"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// char"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s("       "),n("span",{class:"token comment"},"// substr"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token comment"},"// \u5220"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"erase"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// \u5220\u9664s[i]\u540E\u9762\u7684\u6240\u6709\u5B57\u7B26"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"erase"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// \u5220\u9664s[i]\u540E\u9762\u7684n\u4E2A\u5B57\u7B26"),s(`


`),n("span",{class:"token comment"},"/* == \u67E5 == */"),s(`
`),n("span",{class:"token comment"},"// index\uFF1A"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"at"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// value"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rfind"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},","),s(" pos"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u5224\u65AD"),s(`
`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s("     "),n("span",{class:"token comment"},"// contains"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ends_with"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"|"),s(" s"),n("span",{class:"token punctuation"},")"),s("       "),n("span",{class:"token comment"},"// c++20"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"starts_with"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"|"),s(" s"),n("span",{class:"token punctuation"},")"),s("     "),n("span",{class:"token comment"},"// c++20"),s(`
`),n("span",{class:"token comment"},"/* == end == */"),s(`

`),n("span",{class:"token comment"},"// \u6539"),s(`
s`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` c
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),s("start"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token punctuation"},","),s(" str"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// \u66FF\u6362"),s(`
s1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"swap"),s(),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" s2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// \u524Dn\u4E2A\u5B57\u7B26fill\u90FD\u8D4B\u503C\u4E3Ac\u5B57\u7B26"),s(`

`),n("span",{class:"token comment"},"// #include <format>"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The answer is {}."'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// c++20"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// input"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"getline"),n("span",{class:"token punctuation"},"("),s("std"),n("span",{class:"token double-colon punctuation"},"::"),s("cin"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// sort"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("       "),n("span",{class:"token comment"},'// "hello world!" -> " !dehllloorw"'),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"greater"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"char"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// reverse!!"),s(`
std`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},'// "hello world!" -> "!dlrow olleh"'),s(`



`),n("span",{class:"token comment"},"// string -> int:"),s(`
`),n("span",{class:"token function"},"stoi"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"stol"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"stoll"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// 10bit: |x| <= 2147483647, 19bit"),s(`
`),n("span",{class:"token comment"},"// int -> string:"),s(`
`),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// string -> byte[]:"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"c_str"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`



`),n("span",{class:"token comment"},`/*
// \u6BD4\u8F83
s.compare(str)
// \u8FED\u4EE3\u5668
s.begin()
s.end()

// \u8FDE\u63A5
s1 + s2
s1 += s2
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// set"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token operator"},"++"),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    s`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"toupper"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// set"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"auto"),s(),n("span",{class:"token operator"},"&"),s("c "),n("span",{class:"token operator"},":"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"toupper"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// only get"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" c "),n("span",{class:"token operator"},":"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" c "),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<cctype>")]),s(`

`),n("span",{class:"token function"},"isalnum"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(` \u5B57\u6BCD\u6216\u6570\u5B57
`),n("span",{class:"token function"},"isalpha"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" \u5B57\u6BCD"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},"-"),s("zA"),n("span",{class:"token operator"},"-"),s("Z"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"isdigit"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" \u6570\u5B57"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"ispunct"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" \u7279\u6B8A\u5B57\u7B26"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"$"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"*"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"isspace"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" \u7A7A\u767D\u5B57\u7B26"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"\\t"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"islower"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"isupper"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"tolower"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"toupper"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// example-1"),s(`
`),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"is_ogram"),n("span",{class:"token punctuation"},"("),s("string s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token function"},"is_ogram"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// example-2"),s(`
`),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"is_ogram"),n("span",{class:"token punctuation"},"("),s("string"),n("span",{class:"token operator"},"&"),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    string s `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token function"},"is_ogram"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=o(`<h3 id="stringstream" tabindex="-1"><a class="header-anchor" href="#stringstream" aria-hidden="true">#</a> stringstream</h3><p>for example</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sstream&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stringstream ans<span class="token punctuation">;</span>
    ans <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    ans <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
    ans <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
    ans <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;!&#39;</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> ans<span class="token punctuation">.</span><span class="token function">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token comment">// output: &quot;hello world&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// init</span>
<span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> nums<span class="token punctuation">[</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// iter</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> <span class="token operator">&amp;</span>v <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> v <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="pointer" tabindex="-1"><a class="header-anchor" href="#pointer" aria-hidden="true">#</a> Pointer</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// declare an int pointer</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>     <span class="token comment">// 0x0</span>

    <span class="token comment">// new: dynamically allocate memory</span>
    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 0x132e06880, 12</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;object  address: &quot;</span> <span class="token operator">&lt;&lt;</span> ptr  <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x142f04080</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer address: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x16ae23680</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer value  : &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 12</span>

    <span class="token comment">// deallocate the memory</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;object  address: &quot;</span> <span class="token operator">&lt;&lt;</span> ptr  <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x142f04080</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer address: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x16ae23680</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer value  : &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 12</span>

    ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;object  address: &quot;</span> <span class="token operator">&lt;&lt;</span> ptr  <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x0</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer address: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 0x16ae23680</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;pointer value  : &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptr <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// No output!</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// C++ Program to store GPA of n number of students and display it</span>
<span class="token comment">// where n is the number of students entered by the user</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter total number of students: &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">float</span><span class="token operator">*</span> ptr<span class="token punctuation">;</span>

    <span class="token comment">// memory allocation</span>
    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">float</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter GPA of students.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student&quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;: &quot;</span><span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>ptr <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\nDisplaying GPA of students.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student&quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>ptr <span class="token operator">+</span> i<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ptr memory is released</span>
    <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ptr<span class="token punctuation">;</span>
    ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Enter total number of students: 4
Enter GPA of students.
Student1: 3.6
Student2: 3.1
Student3: 3.9
Student4: 2.9

Displaying GPA of students.
Student1: 3.6
Student2: 3.1
Student3: 3.9
Student4: 2.9
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),T=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// \u7A7A\u6307\u9488"),s(`
`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("p "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// int *p = 0;"),s(`
p `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"delete"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" p"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// delete array pointed"),s(`
`)])])],-1),N=n("p",null,"for example",-1),D=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("p "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// true(p\u975Enull)"),s(`
p `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// false(p\u4E3Anull)"),s(`
`)])])],-1),R=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// \u901A\u7528\u6307\u9488"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
p `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"double"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12.3"),n("span",{class:"token punctuation"},";"),s(`
p `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("y"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),H=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("first"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("second"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"x: "'),s(),n("span",{class:"token operator"},"<<"),s(" x "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'" "'),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"y: "'),s(),n("span",{class:"token operator"},"<<"),s(" y "),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("pX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" pY"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),s("pX"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),s("pX "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),s("pY"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token operator"},"*"),s("pY "),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"getSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reverseArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printArrays"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u4E00\u7EF4\u6570\u7EC4"),s(`
    `),n("span",{class:"token comment"},"// int nums[5] = {2, 4, 1, 3, 7};"),s(`
    `),n("span",{class:"token comment"},"// cout << getSum(nums, 5) << endl;"),s(`
    `),n("span",{class:"token comment"},"// reverseArray(nums, 5);"),s(`
    `),n("span",{class:"token comment"},"// printArray(nums, 5);"),s(`

    `),n("span",{class:"token comment"},"// \u4E8C\u7EF4\u6570\u7EC4"),s(`
    `),n("span",{class:"token comment"},"// int matrix[3][4] = {{10, 11, 12, 13},{ 20, 21, 22, 23 },{31, 32, 33, 34}};"),s(`
    `),n("span",{class:"token comment"},"// printArrays(matrix, 3);"),s(`

    `),n("span",{class:"token comment"},"// \u6570\u7EC4\u6307\u9488"),s(`
    `),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("ptr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"printArray"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"delete"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" ptr"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" size"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"getSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" size"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        sum `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reverseArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" size"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"+"),s(" size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"+"),s(" size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printArrays"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" rows"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" rows"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            cout `),n("span",{class:"token operator"},"<<"),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h3",{id:"function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#function","aria-hidden":"true"},"#"),s(" Function")],-1),E=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"hello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"hello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" num"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),B=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},"+"),s(` y
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),F=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"area"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},"+"),s(" y "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),G=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1.6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("p",null,[n("strong",null,"function pointer")],-1),O=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token comment"},"// pass-by-value"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// pass-by-reference"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"add_pointer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" x "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 10"),s(`

    `),n("span",{class:"token function"},"add_pointer"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" x "),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 11"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"add_pointer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token comment"},"// return-by-value"),s(`
`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"larger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// return-by-reference"),s(`
`),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token function"},"larger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"larger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},">"),s(" y "),n("span",{class:"token operator"},"?"),s(" x "),n("span",{class:"token operator"},":"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token function"},"larger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},">"),s(" y "),n("span",{class:"token operator"},"?"),s(" x "),n("span",{class:"token operator"},":"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=o(`<h2 id="stl" tabindex="-1"><a class="header-anchor" href="#stl" aria-hidden="true">#</a> STL</h2><h3 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// method-1</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> vec<span class="token punctuation">;</span>              <span class="token comment">// size: 0  value: [ ]</span>

<span class="token comment">// method-2</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> vec <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// size: 3  value: [ 1, 2, 3 ]</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> vec <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// method-3</span>
<span class="token comment">// template&lt;class T&gt;</span>
vector<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token function">vec</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>        <span class="token comment">// size: n  value: [ ]</span>
vector<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token function">vec</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> v<span class="token punctuation">)</span>     <span class="token comment">// size: n  value: [ v, v, ... ]</span>
<span class="token comment">// template&lt;&gt;</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> vec<span class="token punctuation">{</span>n<span class="token punctuation">}</span>       <span class="token comment">// size: n  value: [&quot;&quot;, &quot;&quot;, ... ]</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> vec<span class="token punctuation">{</span>n<span class="token punctuation">,</span> v<span class="token punctuation">}</span>    <span class="token comment">// size: n  value: [ v,  v, ... ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// for example</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">v1</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// size: 3  value: [ 0, 0, 0 ]</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">v2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// size: 3  value: [ 42, 42, 42 ]</span>
<span class="token comment">//vector&lt;int&gt; v3{3, 42};      // size: 2  value: [ 3, 42 ]</span>

<span class="token comment">// Notice! \`template&lt;&gt;\`</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> vec<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment">// size: 3  value: [ &quot;&quot;, &quot;&quot;, &quot;&quot; ]</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> vec<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// size: 3  value: [ hi, hi, hi ]</span>
</code></pre></div><p><strong>methods</strong></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u957F\u5EA6</span>
<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// size() == 0</span>
<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token comment">// \u5BB9\u91CF</span>
<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">reserve</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token comment">// \u67E5</span>
<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment">// vec[0]</span>
nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>     <span class="token comment">// vec[i]</span>
<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token comment">// vec[vec.size()-1]</span>

<span class="token comment">// \u589E</span>
<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>                 <span class="token comment">// vec.push_back(v)</span>
<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">bengin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>   <span class="token comment">// vec[2] = e</span>

<span class="token comment">// \u5220</span>
<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
nums<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6539</span>
v1<span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>                         <span class="token comment">// \u4E24\u8005\u6240\u6709\u5143\u7D20\u503C\u4EA4\u6362</span>
v2<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">// \u590D\u5236v1\u7684\u5143\u7D20\u503C\u5230v2\u4E2D</span>

<span class="token comment">// sort</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">greater</span><span class="token generic class-name"><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>T x<span class="token punctuation">,</span> T y<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x <span class="token operator">&gt;</span> y<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
std<span class="token double-colon punctuation">::</span><span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token function">count</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>      <span class="token comment">// count: [0, ...]</span>

<span class="token comment">// max</span>
std<span class="token double-colon punctuation">::</span><span class="token function">max_element</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// min</span>
std<span class="token double-colon punctuation">::</span><span class="token function">min_element</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// contains</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">bool</span> <span class="token function">contains</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> nums<span class="token punctuation">,</span> T target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> std<span class="token double-colon punctuation">::</span><span class="token function">find</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span> <span class="token operator">!=</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// upper_bound \u4E8C\u5206\u67E5\u627E\u7B2C\u4E00\u4E2A\u5C0F\u4E8E\u7B49\u4E8Ee\u7684\u503C\u7684\u5730\u5740</span>
<span class="token comment">// auto it = upper_bound(nums.begin(), nums.end(), e)</span>
<span class="token keyword">int</span> index <span class="token operator">=</span>  <span class="token function">upper_bound</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">-</span> nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token operator">*</span><span class="token function">upper_bound</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u904D\u5386</strong></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> v<span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> v <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>it<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),J={id:"map",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#map","aria-hidden":"true"},"#",-1),Y={href:"https://learn.microsoft.com/zh-cn/cpp/standard-library/unordered-map-class?view=msvc-170",target:"_blank",rel:"noopener noreferrer"},M=o(`<div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_map&gt;</span></span>

<span class="token comment">// init</span>
std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> map
std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// size, cap</span>
<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// \u589E</span>
map<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v    <span class="token comment">// better!!</span>
<span class="token comment">// map.insert({k, v})</span>

<span class="token comment">// \u5220</span>
<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u67E5</span>
map<span class="token punctuation">[</span>k<span class="token punctuation">]</span>       <span class="token comment">// notice: \u67E5\u8BE2map[k] \u4F1A\u65B0\u589Ekey! at(k)\u5219\u4E0D\u4F1A</span>
map<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>


<span class="token comment">// .count(k)   // [0, 1]</span>
<span class="token comment">// .find(k)</span>
<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>   <span class="token comment">// c++20</span>
<span class="token comment">// \`if (map.find(k) != map.end())\`</span>
<span class="token comment">// \`if (map.count(k))\`</span>
<span class="token comment">// \`if (map[k])\`  \u4E5F\u4F1A\u65B0\u589Ekey, value\u4E3A\u521D\u59CB\u503C</span>



<span class="token comment">// \u904D\u5386</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> it <span class="token operator">:</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; [&quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token punctuation">.</span>first <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token punctuation">.</span>second <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> map<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token operator">-&gt;</span>first <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token operator">-&gt;</span>second <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>example</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_map&gt;</span></span>



<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">U</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">display_map</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> U<span class="token operator">&gt;</span><span class="token operator">&amp;</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

    <span class="token comment">// init</span>
    unordered_map<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> map<span class="token punctuation">;</span>
    <span class="token comment">// unordered_map&lt;char, int&gt; map = {{&#39;a&#39;, 3}, {&#39;b&#39;, 2}};</span>


    <span class="token comment">// \u589E</span>
    map<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">[</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token function">display_map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [b, 2] [a, 1]</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 2</span>

    <span class="token comment">// \u67E5: map[k] \u4F1A\u65B0\u589Ekey\uFF0Cat(k)\u5219\u4E0D\u4F1A</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">[</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// 1</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">[</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// 2</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">[</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// 0</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>   <span class="token comment">// 1</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>   <span class="token comment">// 0</span>
    <span class="token function">display_map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">// [c, 0] [b, 2] [a, 1]</span>

    <span class="token comment">// size</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 3</span>
    cout <span class="token operator">&lt;&lt;</span> boolalpha<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>   <span class="token comment">// false</span>

    <span class="token comment">// count</span>
    map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">display_map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// 1</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// 1</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// 1</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;d&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// 0</span>
    <span class="token function">display_map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// find</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> map<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>       <span class="token comment">// true</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token char">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> map<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>       <span class="token comment">// false</span>

    <span class="token comment">// contains (c++20)</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
    cout <span class="token operator">&lt;&lt;</span> map<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token char">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">U</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">display_map</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> U<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//    for (auto&amp; it : map) {</span>
<span class="token comment">//        cout &lt;&lt; &quot; [&quot; &lt;&lt; it.first &lt;&lt; &quot;, &quot; &lt;&lt; it.second &lt;&lt; &quot;]&quot;;</span>
<span class="token comment">//    }</span>
<span class="token comment">//    cout &lt;&lt; endl;</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> map<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token operator">-&gt;</span>first <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">&lt;&lt;</span> it<span class="token operator">-&gt;</span>second <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_set&gt;</span></span>

std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> set<span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;</span> set <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// size</span>
<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u589E</span>
<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token comment">// \u5220</span>
<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u67E5</span>
<span class="token operator">*</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// value</span>
<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>       <span class="token comment">// [0. 1]</span>
<span class="token punctuation">.</span><span class="token function">contain</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>     <span class="token comment">// c++20    equal to \`if(set.find(e) != set.end())\` or \`if (count(e))\`</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;success to insert!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6539</span>
<span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span>

<span class="token comment">// iter</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">display_set</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token operator">&amp;</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> it <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isalpha</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">char</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> it <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>example</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_set&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cctype&gt;</span></span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">display_set</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token operator">&amp;</span> set<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> set<span class="token punctuation">;</span>

    <span class="token comment">// add</span>
    set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// size</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 3</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// 0</span>
    <span class="token function">display_set</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// [c] [b] [a]</span>

    <span class="token comment">// remove</span>
    set<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span><span class="token char">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// no error if element not exists</span>
    set<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// [b] [a]</span>
    set<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// contains</span>
    set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;d&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>boolalpha<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token char">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// false</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> set<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token char">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> set<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// false</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>          <span class="token comment">// true</span>

    <span class="token function">display_set</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// [d] [c] [b] [a]</span>

    <span class="token comment">// count</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 1</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> set<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token char">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 0</span>


    <span class="token comment">// find</span>
    <span class="token keyword">auto</span> it <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token operator">*</span>it<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>    <span class="token comment">// &#39;b&#39;</span>


    <span class="token comment">// swap</span>
    std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    set1<span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">display_set</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// set1: [4] [7] [2]</span>
    <span class="token function">display_set</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// set2: [3] [6] [1]</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> __cplusplus <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>    <span class="token comment">// 202002</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">display_set</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>unordered_set<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token operator">&amp;</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> it <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isalpha</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">char</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[&quot;</span> <span class="token operator">&lt;&lt;</span> it <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;] &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span>    <span class="token comment">// \u5148\u8FDB\u540E\u51FA</span></span>

<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\u589E\uFF1A<span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\u67E5\uFF1A<span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\u5220\uFF1A<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><details class="custom-container details"><summary>example</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">print_stack</span><span class="token punctuation">(</span>stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> stack1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stack <span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> stack1<span class="token punctuation">;</span>
    stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;size: &quot;</span> <span class="token operator">&lt;&lt;</span> stack1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// 4</span>
    cout <span class="token operator">&lt;&lt;</span> boolalpha<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;empty: &quot;</span> <span class="token operator">&lt;&lt;</span> stack1<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>     <span class="token comment">// false</span>

    <span class="token keyword">int</span><span class="token operator">&amp;</span> i <span class="token operator">=</span> stack1<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;top: &quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;top(after pop): &quot;</span> <span class="token operator">&lt;&lt;</span> stack1<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


    <span class="token function">print_stack</span><span class="token punctuation">(</span>stack1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">print_stack</span><span class="token punctuation">(</span>stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> stack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;stack: [ &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> sign <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> stack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> sign<span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="deque" tabindex="-1"><a class="header-anchor" href="#deque" aria-hidden="true">#</a> deque</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;deque&gt;</span></span>

std<span class="token double-colon punctuation">::</span>deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> d<span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u957F\u5EA6</span>
<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u67E5</span>
<span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u589E</span>
<span class="token function">push_front</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token function">insert</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
<span class="token function">push_back</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token comment">// \u5220</span>
<span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">erase</span><span class="token punctuation">(</span>pos1<span class="token punctuation">,</span> pos2<span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6539</span>
d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e

<span class="token comment">// iterator</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[ &quot;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


<span class="token comment">// pointer_iter</span>
<span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">rbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// d[1], \u8D85\u51FA\u7D22\u5F15\u53D6\u9ED8\u8BA4\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>example</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;deque&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
    deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// size</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>       <span class="token comment">// 4</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">max_size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>   <span class="token comment">// 4611686018427387903</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// 0 (false)</span>

    <span class="token comment">// element access</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// d[0]: 1</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>           <span class="token comment">// d[0]: 1</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">// first element:  1</span>
    cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>       <span class="token comment">// last element: 7</span>

    <span class="token comment">// \u8D85\u8FC7\u7D22\u5F15\u8303\u56F4\u5219\u8F93\u51FA\u4E3A\u9ED8\u8BA4\u503C</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;begin: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>                <span class="token comment">// d[0]: 1</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;begin: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>              <span class="token comment">// d[1]: 3</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;rbegin: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">rbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>              <span class="token comment">// d[-1]: 7</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;rbegin: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">rbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>            <span class="token comment">// d[-2]: 5</span>


    <span class="token comment">// add element</span>
    d<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    d<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    d<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 0 1 2 3 5 7 9</span>

    <span class="token comment">// remove element</span>
    d<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// del d[2:4)</span>
    <span class="token comment">// 0 1 5 7 9</span>
    <span class="token comment">// d.clear();</span>


    <span class="token comment">// iterator</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[ &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;list&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>list<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> l <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

    l<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    l<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    l<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    l<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// { 25, 7, 5, 16, 8, 13 }</span>

    l<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// { 5 7 8 13 16 25 }</span>
    l<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// { 12 3 5 7 8 13 16 25 }</span>
    l<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// { 12 3 5 7 8 12 2 13 16 25 }</span>


    <span class="token comment">// iterator</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;{ &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>it <span class="token operator">:</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> it <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;}&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>



    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oop" tabindex="-1"><a class="header-anchor" href="#oop" aria-hidden="true">#</a> OOP</h2><p><strong>class example</strong></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">BankAccout</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hi&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// instantiation</span>
    BankAccout back<span class="token punctuation">;</span>
    <span class="token comment">// function call</span>
    back<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// pointer call 1</span>
    BankAccout back2<span class="token punctuation">;</span>
    BankAccout <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>back2<span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// pointer call 2</span>
    <span class="token keyword">auto</span> <span class="token operator">*</span>ptr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">BankAccout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr2<span class="token operator">-&gt;</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="encapsulation-\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#encapsulation-\u5C01\u88C5" aria-hidden="true">#</a> Encapsulation (\u5C01\u88C5)</h3><ul><li>public</li><li>private</li><li>protected</li><li>friend</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">student</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token comment">// this-&gt;name = x;</span>
        <span class="token comment">// (*this).name = x;</span>
    <span class="token punctuation">}</span>
    std<span class="token double-colon punctuation">::</span>string <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">protected</span><span class="token operator">:</span>  <span class="token comment">// ...</span>
<span class="token comment">// friend function</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    student <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token keyword">new</span> student<span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;John Smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> ptr<span class="token operator">-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5185\u8054\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5185\u8054\u51FD\u6570" aria-hidden="true">#</a> \u5185\u8054\u51FD\u6570</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token comment">// \u9690\u5F0F\u5185\u8054\u51FD\u6570</span>
        <span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> radius<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u663E\u5F0F\u5185\u8054\u51FD\u6570</span>
<span class="token keyword">inline</span> <span class="token keyword">double</span> Circle<span class="token double-colon punctuation">::</span>getRadius <span class="token punctuation">{</span>
    <span class="token keyword">return</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-class" tabindex="-1"><a class="header-anchor" href="#struct-class" aria-hidden="true">#</a> struct &amp; class</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token comment">// struct \u7ED3\u6784\u6240\u6709\u6210\u5458\u9ED8\u8BA4\u90FD\u662F\u516C\u5171\u7684</span>
<span class="token keyword">struct</span> <span class="token class-name">student</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// class \u7C7B\u6240\u6709\u6210\u5458\u9ED8\u8BA4\u90FD\u662F\u79C1\u6709\u7684</span>
<span class="token keyword">class</span> <span class="token class-name">student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
        string name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="constructor-destructor" tabindex="-1"><a class="header-anchor" href="#constructor-destructor" aria-hidden="true">#</a> Constructor &amp; Destructor</h3>`,26),K=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Circle"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("                   "),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u6784\u9020\u51FD\u6570\uFF08\u65E0\u53C2\uFF09"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("           "),n("span",{class:"token comment"},"// \u53C2\u6570\u6784\u9020\u51FD\u6570"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Circle"),n("span",{class:"token operator"},"&"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// \u62F7\u8D1D\u6784\u9020\u51FD\u6570"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("                  "),n("span",{class:"token comment"},"// \u6790\u6784\u51FD\u6570"),s(`
    `),n("span",{class:"token keyword"},"private"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" radius"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u65E0\u53C2\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),s("        "),n("span",{class:"token comment"},"// \u5982\u679C\u7701\u7565\uFF0C\u5219\u8BBE\u7F6E\u4E3A\u5783\u573E\u503C"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token comment"},"// \u53C2\u6570\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u62F7\u8D1D\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Circle"),n("span",{class:"token operator"},"&"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},"."),s("radius"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u6790\u6784\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Circle circle1`),n("span",{class:"token punctuation"},";"),s(`
    Circle `),n("span",{class:"token function"},"circle2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    Circle `),n("span",{class:"token function"},"circle3"),n("span",{class:"token punctuation"},"("),s("circle1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
default constructor
params constructor
copy constructor
destructor
destructor
destructor
*/`),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Circle `),n("span",{class:"token operator"},"*"),s("ptr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("     "),n("span",{class:"token comment"},"// Constructor"),s(`
    `),n("span",{class:"token keyword"},"delete"),s(" ptr"),n("span",{class:"token punctuation"},";"),s("                     "),n("span",{class:"token comment"},"// Destructor"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),Z=n("div",{class:"language-cpp ext-cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Circle `),n("span",{class:"token function"},"obj"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("     "),n("span",{class:"token comment"},"// Destructor"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),nn=o(`<div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// \u9ED8\u8BA4\u4F1A\u63D0\u4F9B\u5408\u6210\u65E0\u53C2\u6784\u9020\u51FD\u6570\u3001\u6790\u6784\u51FD\u6570\u3001copy constructor</span>
<span class="token comment">// \u5982\u679C\u81EA\u884C\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u65E0\u53C2\u6784\u9020\u51FD\u6570\u6216\u53C2\u6570\u6784\u9020\u51FD\u6570\uFF0C\u5219\u4E0D\u4F1A\u518D\u63D0\u4F9B\u5408\u6210\u9ED8\u8BA4\u65E0\u53C2\u6784\u9020\u51FD\u6570.</span>


<span class="token comment">// \u963B\u6B62\u4F7F\u7528\u62F7\u8D1D\u6784\u9020\u51FD\u6570</span>
<span class="token function">Circle</span><span class="token punctuation">(</span><span class="token keyword">const</span> Circle<span class="token operator">&amp;</span> c<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9690\u5F0Fthis\u6307\u9488</span>
<span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span>Circle<span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>radius<span class="token punctuation">;</span>    <span class="token comment">// \u4E0E(*this).radius\u76F8\u540C</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">Circie</span><span class="token double-colon punctuation">::</span><span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token keyword">double</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    radius <span class="token operator">=</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u663E\u5F0Fthis\u6307\u9488 (\u65E0\u9700\u7F29\u5199\u53C2\u6570\u540D\u79F0)</span>
<span class="token keyword">void</span> <span class="token class-name">Circle</span><span class="token double-colon punctuation">::</span><span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">;</span>   <span class="token comment">// getter \u8BBF\u95EE\u5668 \u8BBE\u7F6Econst\u9650\u5B9A\u7B26\u786E\u4FDD\u5BBF\u4E3B\u5BF9\u8C61(this\u6307\u5411\u7684\u5BF9\u8C61)\u4E3A\u53EA\u8BFB</span>
        <span class="token keyword">void</span> <span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token keyword">double</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// setter \u66F4\u6539\u5668 \u4E0D\u80FD\u8BBE\u7F6E\u5E38\u91CF\u9650\u5B9A\u7B26const</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">static</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>       <span class="token comment">// static \u9759\u6001\u6570\u636E\u6210\u5458</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// static \u9759\u6001\u6210\u5458\u65B9\u6CD5</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> Rectangle<span class="token double-colon punctuation">::</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// static call</span>
    <span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Rectangle rect<span class="token punctuation">;</span>
    rect<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u72EC\u7ACB\u6587\u4EF6\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u72EC\u7ACB\u6587\u4EF6\u7F16\u8BD1" aria-hidden="true">#</a> \u72EC\u7ACB\u6587\u4EF6\u7F16\u8BD1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>c++ -c circle.cpp
c++ -c app.cpp
c++ -o app circle.o app.o
./app
<span class="token function">rm</span> -f circle.o app.o app
</code></pre></div>`,10),sn=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// circle.h"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"ifndef"),s(),n("span",{class:"token expression"},"CIRCLE_H")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),s(),n("span",{class:"token macro-name"},"CIRCLE_H")]),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<cassert>")]),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Circle"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" radius"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("                   "),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u6784\u9020\u51FD\u6570\uFF08\u65E0\u53C2\uFF09"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("           "),n("span",{class:"token comment"},"// \u53C2\u6570\u6784\u9020\u51FD\u6570"),s(`
        `),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Circle"),n("span",{class:"token operator"},"&"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// \u62F7\u8D1D\u6784\u9020\u51FD\u6570, Circle(const Circle& c) = delete;  // \u963B\u6B62\u4F7F\u7528\u62F7\u8D1D\u6784\u9020\u51FD\u6570"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("                  "),n("span",{class:"token comment"},"// \u6790\u6784\u51FD\u6570"),s(`
        `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setRadius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// setter \u66F4\u6539\u5668"),s(`
        `),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token function"},"getRadius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"// getter \u8BBF\u95EE\u5668"),s(`
        `),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token function"},"getArea"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token function"},"getPerimeter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"endif"),s(),n("span",{class:"token comment"},"//CIRCLE_H")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// circle.cpp"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},'"circle.h"')]),s(`


`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u65E0\u53C2\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),s("         "),n("span",{class:"token comment"},"// \u5982\u679C\u7701\u7565\uFF0C\u5219\u8BBE\u7F6E\u4E3A\u5783\u573E\u503C"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"default constructor"'),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token comment"},"// \u53C2\u6570\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"params constructor"'),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("radius "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"assert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u62F7\u8D1D\u6784\u9020\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Circle"),n("span",{class:"token operator"},"&"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token function"},"radius"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},"."),s("radius"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"copy constructor"'),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u6790\u6784\u51FD\u6570"),s(`
`),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Circle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"destructor"'),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token double-colon punctuation"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"setRadius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" r"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    radius `),n("span",{class:"token operator"},"="),s(" r"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("radius "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"assert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"getRadius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" radius"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"getArea"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"double"),s(" PI "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" radius "),n("span",{class:"token operator"},"*"),s(" radius "),n("span",{class:"token operator"},"*"),s(" PI"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"double"),s(),n("span",{class:"token class-name"},"Circle"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"getPerimeter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"double"),s(" PI "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" radius "),n("span",{class:"token operator"},"*"),s(" PI "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// app.cpp"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},'"circle.h"')]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iomanip>")]),s(`


`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Circle `),n("span",{class:"token function"},"c"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5.2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"     radius       area        perimeter   "'),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"   ---------   -----------  ------------"'),s(),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token function"},"setw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" right "),n("span",{class:"token operator"},"<<"),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getRadius"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token function"},"setw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getArea"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token function"},"setw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token operator"},"<<"),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPerimeter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" endl"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
     radius       area        perimeter
   ---------   -----------  ------------
      5.2        84.9056       32.656
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=o(`<h3 id="inheritance-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#inheritance-\u7EE7\u627F" aria-hidden="true">#</a> Inheritance (\u7EE7\u627F)</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">// \u7EE7\u627F</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Person</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>           <span class="token comment">// \u865A\u7EE7\u627F</span>
<span class="token keyword">class</span> <span class="token class-name">Professor</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Person</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">TA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Professor</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">Student</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>     <span class="token comment">// \u591A\u91CD\u7EE7\u627F</span>
</code></pre></div><p>example</p>`,3),pn=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Product"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" price"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" weight"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
            std`),n("span",{class:"token double-colon punctuation"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" price "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'", "'),s(),n("span",{class:"token operator"},"<<"),s(" weight"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Fruit"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Product")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        std`),n("span",{class:"token double-colon punctuation"},"::"),s("string type"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"double"),s(" price"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" weight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// Base class data call"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token operator"},"->"),s("price "),n("span",{class:"token operator"},"="),s(" price"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"this"),n("span",{class:"token operator"},"->"),s("weight "),n("span",{class:"token operator"},"="),s(" weight"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},`/*
        void setInfo(double p, int w) {
             price = p;
             weight = w;
        }
        */`),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Fruit obj`),n("span",{class:"token punctuation"},";"),s(`
    obj`),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Base class method call"),s(`
    obj`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4.99"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    obj`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`


`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Person"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),n("span",{class:"token operator"},":"),s(`
        std`),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"Person"),n("span",{class:"token punctuation"},"("),s("std"),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u865A\u7EE7\u627F"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Student"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Person")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" gpa"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"Student"),n("span",{class:"token punctuation"},"("),s("std"),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" gpa"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"Person"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"gpa"),n("span",{class:"token punctuation"},"("),s("gpa"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Student"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Professor"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Person")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"protected"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" salary"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"Professor"),n("span",{class:"token punctuation"},"("),s("std"),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" salary"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"Person"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"salary"),n("span",{class:"token punctuation"},"("),s("salary"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"Professor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u591A\u91CD\u7EE7\u627F"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"TA"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Professor"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Student")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token function"},"TA"),n("span",{class:"token punctuation"},"("),s("std"),n("span",{class:"token double-colon punctuation"},"::"),s("string name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" gp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"double"),s(" sal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"Person"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"Student"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" gp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"Professor"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" sal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token operator"},"~"),n("span",{class:"token function"},"TA"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=o(`<h3 id="polymorphism-\u591A\u6001" tabindex="-1"><a class="header-anchor" href="#polymorphism-\u591A\u6001" aria-hidden="true">#</a> Polymorphism (\u591A\u6001)</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Person</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>           <span class="token comment">// \u865A\u7EE7\u627F</span>
<span class="token keyword">class</span> <span class="token class-name">Professor</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">Person</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">TA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Professor</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">Student</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>     <span class="token comment">// \u591A\u91CD\u7EE7\u627F</span>
</code></pre></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// \u663E\u5F0F\u865A\u6790\u6784\u51FD\u6570</span>
    <span class="token operator">~</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// virtual (\u865A\u51FD\u6570)</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Animal&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Cat&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Dog&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Animal <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// In Animal</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// In Cat</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// In Dog</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>error(no virtual)</summary><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span><span class="token operator">:</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token comment">// \u663E\u5F0F\u865A\u6790\u6784\u51FD\u6570</span>
        <span class="token operator">~</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
            std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Animal&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Cat&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Dog&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Animal <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// In Animal</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// In Animal</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="abstract-\u62BD\u8C61" tabindex="-1"><a class="header-anchor" href="#abstract-\u62BD\u8C61" aria-hidden="true">#</a> Abstract (\u62BD\u8C61)</h3><p>Pure virtual function cannot be overridden.</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// pure-virtual function:</span>
<span class="token comment">// 1. cannot create object of the base class</span>
<span class="token comment">// 2. if delete the base class pointer, cannot print the next derived class function.</span>


<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token operator">~</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// pure virtual method</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Cat&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;In Dog&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Animal <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

    <span class="token comment">// ptr = new Animal();  // error</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// In Cat</span>
    <span class="token comment">// delete ptr;          // if has it, only print &quot;In Cat&quot;</span>

    ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptr<span class="token operator">-&gt;</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// In Dog</span>
    <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    ifstream infile<span class="token punctuation">;</span>
    infile<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;numbers.dat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>infile <span class="token operator">&gt;&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;The sum of the numbers in the file is &quot;</span> <span class="token operator">&lt;&lt;</span> sum <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 1500</span>
    infile<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dat ext-dat"><pre class="language-dat"><code>100
200
300
400
500
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="cpp-version" tabindex="-1"><a class="header-anchor" href="#cpp-version" aria-hidden="true">#</a> cpp version</h3><p>cpp version</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>cout <span class="token operator">&lt;&lt;</span> __cplusplus <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">// 2020-02</span>
</code></pre></div><p>change cpp version</p><div class="language-txt ext-txt"><pre class="language-txt"><code># CMakeLists.txt
set(CMAKE_CXX_STANDARD 20)
</code></pre></div><p>clang version</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ clang --version
</code></pre></div><h3 id="i-i" tabindex="-1"><a class="header-anchor" href="#i-i" aria-hidden="true">#</a> i++ &amp; ++i</h3><blockquote><p>\u5C3D\u91CF\u4F7F\u7528++i\u6765\u4EE3\u66FFi++\u7684\u81EA\u589E\u5E8F\u5217</p></blockquote><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">increment</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x_<span class="token punctuation">;</span>
    <span class="token keyword">int</span> y_<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    increment<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u524D\u7F6E</span>
    <span class="token keyword">const</span> increment <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u540E\u7F6E</span>
    increment <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    increment<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">Displayincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

increment<span class="token operator">&amp;</span> increment<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span> _right<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>x_ <span class="token operator">+=</span> _right<span class="token punctuation">.</span>x_<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>y_ <span class="token operator">+=</span> _right<span class="token punctuation">.</span>y_<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

increment increment<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span> _right<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    increment temp<span class="token punctuation">;</span>
    temp<span class="token punctuation">.</span>x_ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>x_ <span class="token operator">+</span> _right<span class="token punctuation">.</span>x_<span class="token punctuation">;</span>
    temp<span class="token punctuation">.</span>y_ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>y_ <span class="token operator">+</span> _right<span class="token punctuation">.</span>y_<span class="token punctuation">;</span>
    <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


increment<span class="token operator">&amp;</span> increment<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">++</span>x_<span class="token punctuation">;</span>
    <span class="token operator">++</span>y_<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> increment increment<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    increment <span class="token function">temp</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>x_<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>y_<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

increment<span class="token double-colon punctuation">::</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    x_ <span class="token operator">=</span> x<span class="token punctuation">;</span>
    y_ <span class="token operator">=</span> y<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is constructor&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

increment<span class="token double-colon punctuation">::</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token keyword">const</span> increment<span class="token operator">&amp;</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>x_ <span class="token operator">=</span> b<span class="token punctuation">.</span>x_<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>y_ <span class="token operator">=</span> b<span class="token punctuation">.</span>y_<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is copy constructor&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">increment</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is destructor&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> increment<span class="token double-colon punctuation">::</span><span class="token function">Displayincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;x: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>x_ <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;y: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>y_ <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    increment <span class="token function">i</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is i++: &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is ++i: &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token operator">++</span>i<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;end&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
this is constructor

this is i++:
this is copy constructor
this is destructor

this is ++i:

end
this is destructor
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-namespace-std-std-cout" tabindex="-1"><a class="header-anchor" href="#using-namespace-std-std-cout" aria-hidden="true">#</a> using namespace std &amp; std::cout</h3><blockquote><p>\u5C3D\u91CF\u4E0D\u8981\u5728\u5934\u6587\u4EF6\u4E2D\u4F7F\u7528<code>using namespace std;</code>\u8BED\u53E5, \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>std::cout</code>\u8FD9\u6837\u4E0D\u5BB9\u6613\u53D1\u751F\u547D\u540D\u51B2\u7A81.</p><p>namespace \u547D\u540D\u7A7A\u95F4\u907F\u514D\u4E0D\u540C\u5934\u6587\u4EF6\u4E2D\u7684\u51B2\u7A81, \u5E76\u63D0\u4F9B\u5176\u4ED6\u533A\u5206\u65B9\u6CD5.\u4F8B\u5982std::string, cstring::string</p></blockquote><p>method-1</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello world!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>method-2</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello world!&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="null-nullptr-0" tabindex="-1"><a class="header-anchor" href="#null-nullptr-0" aria-hidden="true">#</a> NULL, nullptr, 0 ?</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>\u672C\u6765C\u53EF\u4EE5\u5141\u8BB8<span class="token keyword">int</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">;</span>
\u4F46\u662F\u5230\u4E86C<span class="token operator">++</span>\u5C31\u4E0D\u5141\u8BB8\u4E86\uFF0C\u56E0\u4E3AC\u4E0D\u5141\u8BB8<span class="token keyword">void</span> <span class="token operator">*</span> \u7ED9\u522B\u7684\u6307\u9488\u7C7B\u578B\u4F5C\u53F3\u503C\uFF0C\u6240\u4EE5C<span class="token operator">++</span>\u53EA\u80FD\u628A<span class="token constant">NULL</span>\u5B9A\u4E49\u6210<span class="token number">0</span>\u3002\u5373<span class="token constant">NULL</span>\u662F<span class="token number">0</span>\uFF0C
\u6240\u4EE5<span class="token constant">NULL</span>\u65E2\u662F\u6574\u578B\u53C8\u662F\u7A7A\u6307\u9488\u5E38\u91CF\uFF0C\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u51FA\u73B0\u4E8C\u4E49\u6027\uFF0C\u8FD9\u662F\u4E2A\u5751\uFF0C
\u6240\u4EE5C<span class="token operator">++</span>\u53C8\u65B0\u51FA\u4E86\u4E00\u4E2A\u5173\u952E\u5B57<span class="token keyword">nullptr</span>\uFF0C\u4EE5\u540E\u53EA\u7528<span class="token keyword">nullptr</span>\uFF0C\u4ECE\u6B64<span class="token constant">NULL</span>\u5C31\u53EF\u4EE5\u6162\u6162\u88ABC<span class="token operator">++</span>\u629B\u5F03\u4E86
</code></pre></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NULL</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">)</span></span></span>

<span class="token comment">// cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NULL</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token comment">/* source code */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression"><span class="token constant">NULL</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NULL</span> <span class="token expression"><span class="token number">0</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NULL</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>usage</strong></p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span> <span class="token comment">//\u63A8\u8350\u4F7F\u7528</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// nullptr \u8FD8\u53EF\u4EE5\u629B\u51FA\u5F02\u5E38</span>
</code></pre></div><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2><ol><li>output: \u683C\u5F0F\u5316\u4F7F\u7528C\u7684<code>printf()</code>\u65B9\u6CD5</li><li>datatype: \u957F\u6570\u636E\u7C7B\u578B\u4F7F\u7528auto\u7701\u7565</li><li>switch: \u591A\u4E2Acase, condition\u5FC5\u987B\u662Fboolean(int, char, bool...)\u4E0D\u80FD\u662F\u5B57\u7B26\u4E32(string, char*)</li><li>for loop: auto <code>&amp;</code>v\u4FEE\u6539</li><li>pointer: \u63A8\u8350\u4F7F\u7528<code>nullptr</code> (C++11)</li></ol>`,35);function ln(un,kn){const e=c("CodeGroupItem"),p=c("CodeGroup"),l=c("ExternalLinkIcon");return u(),k(r,null,[m,a(p,null,{default:t(()=>[a(e,{title:"all"},{default:t(()=>[v]),_:1}),a(e,{title:"global"},{default:t(()=>[b]),_:1}),a(e,{title:"static"},{default:t(()=>[y]),_:1}),a(e,{title:"auto"},{default:t(()=>[g]),_:1})]),_:1}),w,a(p,null,{default:t(()=>[a(e,{title:"type"},{default:t(()=>[h]),_:1}),a(e,{title:"boolalpha"},{default:t(()=>[f]),_:1}),a(e,{title:"static_cast..."},{default:t(()=>[_]),_:1}),a(e,{title:"numeric_limits"},{default:t(()=>[x]),_:1})]),_:1}),q,a(p,null,{default:t(()=>[a(e,{title:"string"},{default:t(()=>[C]),_:1}),a(e,{title:"method"},{default:t(()=>[A,z]),_:1}),a(e,{title:"iter"},{default:t(()=>[P]),_:1}),a(e,{title:"char"},{default:t(()=>[I]),_:1}),a(e,{title:"string&"},{default:t(()=>[L]),_:1})]),_:1}),S,a(p,null,{default:t(()=>[a(e,{title:"null pointer"},{default:t(()=>[T,N,D]),_:1}),a(e,{title:"void pointer"},{default:t(()=>[R]),_:1}),a(e,{title:"function pointer"},{default:t(()=>[H]),_:1}),a(e,{title:"array pointer"},{default:t(()=>[U]),_:1})]),_:1}),j,a(p,null,{default:t(()=>[a(e,{title:"declare"},{default:t(()=>[E]),_:1}),a(e,{title:"params"},{default:t(()=>[B]),_:1}),a(e,{title:"param-default-value"},{default:t(()=>[F]),_:1}),a(e,{title:"overload"},{default:t(()=>[G]),_:1})]),_:1}),W,a(p,null,{default:t(()=>[a(e,{title:"param-pointer"},{default:t(()=>[O]),_:1}),a(e,{title:"return-pointer"},{default:t(()=>[V]),_:1})]),_:1}),X,n("h3",J,[$,s(),n("a",Y,[s("map"),a(l)])]),M,a(p,null,{default:t(()=>[a(e,{title:"init"},{default:t(()=>[K]),_:1}),a(e,{title:"pointer-init"},{default:t(()=>[Q]),_:1}),a(e,{title:"params-init"},{default:t(()=>[Z]),_:1})]),_:1}),nn,a(p,null,{default:t(()=>[a(e,{title:"header-file"},{default:t(()=>[sn]),_:1}),a(e,{title:"source-file"},{default:t(()=>[an]),_:1}),a(e,{title:"app-file"},{default:t(()=>[tn]),_:1})]),_:1}),en,a(p,null,{default:t(()=>[a(e,{title:"inherits"},{default:t(()=>[pn]),_:1}),a(e,{title:"inherits multi"},{default:t(()=>[on]),_:1})]),_:1}),cn],64)}var dn=i(d,[["render",ln],["__file","c++.html.vue"]]);export{dn as default};
