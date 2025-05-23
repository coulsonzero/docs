import{_ as n,e as s}from"./app.afb47d0b.js";const e={},a=s(`<h1 id="ant-designer-pro" tabindex="-1"><a class="header-anchor" href="#ant-designer-pro" aria-hidden="true">#</a> Ant Designer Pro</h1><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">yarn</span> create umi my-app

Select the boilerplate type: \u9009\u62E9 Ant Design Pro
\u276F ant-design-pro

Which language <span class="token keyword">do</span> you want to use? \u9009\u62E9\u4F60\u4F7F\u7528\u7684\u8BED\u8A00
\u276F TypeScript
  JavaScript
? \u{1F680} Do you need all the blocks or a simple scaffold? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F simple
  complete

$ <span class="token builtin class-name">cd</span> my-app
$ <span class="token function">yarn</span>
$ <span class="token function">yarn</span> start <span class="token comment"># \u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE http://localhost:8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u6587\u4EF6\u76EE\u5F55\u7ED3\u6784</h3><ol><li>\u57FA\u7840\u7ED3\u6784</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tree
\u2502
\u251C\u2500\u2500 config                   <span class="token comment"># umi \u914D\u7F6E\uFF0C\u5305\u542B\u8DEF\u7531\uFF0C\u6784\u5EFA\u7B49\u914D\u7F6E</span>
\u251C\u2500\u2500 mock                     <span class="token comment"># \u672C\u5730\u6A21\u62DF\u6570\u636E</span>
\u251C\u2500\u2500 public
\u2502   \u2514\u2500\u2500 favicon.png          <span class="token comment"># Favicon</span>
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 assets               <span class="token comment"># \u672C\u5730\u9759\u6001\u8D44\u6E90</span>
\u2502   \u251C\u2500\u2500 components           <span class="token comment"># \u4E1A\u52A1\u901A\u7528\u7EC4\u4EF6</span>
\u2502   \u251C\u2500\u2500 e2e                  <span class="token comment"># \u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B</span>
\u2502   \u251C\u2500\u2500 layouts              <span class="token comment"># \u901A\u7528\u5E03\u5C40</span>
\u2502   \u251C\u2500\u2500 models               <span class="token comment"># \u5168\u5C40 dva model</span>
\u2502   \u251C\u2500\u2500 pages                <span class="token comment"># \u4E1A\u52A1\u9875\u9762\u5165\u53E3\u548C\u5E38\u7528\u6A21\u677F</span>
\u2502   \u251C\u2500\u2500 services             <span class="token comment"># \u540E\u53F0\u63A5\u53E3\u670D\u52A1</span>
\u2502   \u251C\u2500\u2500 utils                <span class="token comment"># \u5DE5\u5177\u5E93</span>
\u2502   \u251C\u2500\u2500 locales              <span class="token comment"># \u56FD\u9645\u5316\u8D44\u6E90</span>
\u2502   \u251C\u2500\u2500 global.less          <span class="token comment"># \u5168\u5C40\u6837\u5F0F</span>
\u2502   \u2514\u2500\u2500 global.ts            <span class="token comment"># \u5168\u5C40 JS</span>
\u251C\u2500\u2500 tests                    <span class="token comment"># \u6D4B\u8BD5\u5DE5\u5177</span>
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7ED3\u6784\u5B8C\u5584</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>src
\u251C\u2500\u2500 components
\u2514\u2500\u2500 pages
    \u251C\u2500\u2500 Welcome        <span class="token comment">// \u8DEF\u7531\u7EC4\u4EF6\u4E0B\u4E0D\u5E94\u8BE5\u518D\u5305\u542B\u5176\u4ED6\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u7EA6\u5B9A\u5C31\u80FD\u6E05\u695A\u7684\u533A\u5206\u8DEF\u7531\u7EC4\u4EF6\u548C\u975E\u8DEF\u7531\u7EC4\u4EF6\u4E86</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 components <span class="token comment">// \u5BF9\u4E8E\u590D\u6742\u7684\u9875\u9762\u53EF\u4EE5\u518D\u81EA\u5DF1\u505A\u66F4\u6DF1\u5C42\u6B21\u7684\u7EC4\u7EC7\uFF0C\u4F46\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC7\u4E09\u5C42</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 Form<span class="token punctuation">.</span>tsx
    <span class="token operator">|</span>   \u251C\u2500\u2500 index<span class="token punctuation">.</span>tsx  <span class="token comment">// \u9875\u9762\u7EC4\u4EF6\u7684\u4EE3\u7801</span>
    <span class="token operator">|</span>   \u2514\u2500\u2500 index<span class="token punctuation">.</span>less <span class="token comment">// \u9875\u9762\u6837\u5F0F</span>
    \u251C\u2500\u2500 Order          <span class="token comment">// \u8DEF\u7531\u7EC4\u4EF6\u4E0B\u4E0D\u5E94\u8BE5\u518D\u5305\u542B\u5176\u4ED6\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u7EA6\u5B9A\u5C31\u80FD\u6E05\u695A\u7684\u533A\u5206\u8DEF\u7531\u7EC4\u4EF6\u548C\u975E\u8DEF\u7531\u7EC4\u4EF6\u4E86</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 index<span class="token punctuation">.</span>tsx
    <span class="token operator">|</span>   \u2514\u2500\u2500 index<span class="token punctuation">.</span>less
    \u251C\u2500\u2500 user           <span class="token comment">// \u4E00\u7CFB\u5217\u9875\u9762\u63A8\u8350\u901A\u8FC7\u5C0F\u5199\u7684\u5355\u4E00\u5B57\u6BCD\u505A group \u76EE\u5F55</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 components <span class="token comment">// group \u4E0B\u516C\u7528\u7684\u7EC4\u4EF6\u96C6\u5408</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 Login      <span class="token comment">// group \u4E0B\u7684\u9875\u9762 Login</span>
    <span class="token operator">|</span>   \u251C\u2500\u2500 Register   <span class="token comment">// group \u4E0B\u7684\u9875\u9762 Register</span>
    <span class="token operator">|</span>   \u2514\u2500\u2500 util<span class="token punctuation">.</span>ts    <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u6709\u4E00\u4E9B\u5171\u7528\u65B9\u6CD5\u4E4B\u7C7B\uFF0C\u4E0D\u505A\u63A8\u8350\u548C\u7EA6\u675F\uFF0C\u770B\u4E1A\u52A1\u573A\u666F\u81EA\u884C\u505A\u7EC4\u7EC7</span>
    \u2514\u2500\u2500 <span class="token operator">*</span>              <span class="token comment">// \u5176\u5B83\u9875\u9762\u7EC4\u4EF6\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function i(l,c){return a}var t=n(e,[["render",i],["__file","antd-pro.html.vue"]]);export{t as default};
