import{_ as c,r as p,o as i,c as u,b as n,d as s,a,w as t,F as k,e as o}from"./app.afb47d0b.js";const d={},v={id:"eslint",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#",-1),b={href:"https://eslint.bootcss.com",target:"_blank",rel:"noopener noreferrer"},y=o(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> eslint --dev
$ <span class="token function">yarn</span> create @eslint/config 	<span class="token comment"># or \`npm init @eslint/config\`</span>
</code></pre></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin:react/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7981\u6B62\u672B\u5C3E\u5206\u53F7</span>
    <span class="token string-property property">&quot;comma-dangle&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span>
		<span class="token comment">// \u5F3A\u5236\u7A7A\u683C\uFF1A { Components }</span>
		<span class="token string-property property">&#39;array-bracket-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string-property property">&#39;object-curly-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9632\u6B62\u5728react\u7EC4\u4EF6\u5B9A\u4E49\u4E2D\u7F3A\u5C11props\u9A8C\u8BC1</span>
    <span class="token string-property property">&#39;react/prop-types&#39;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><table><thead><tr><th>\u89C4\u5219</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>no-use-before-define</td><td>\u7981\u6B62\u5728\u53D8\u91CF\u5B9A\u4E49\u4E4B\u524D\u4F7F\u7528\u5B83\u4EEC</td></tr><tr><td>comma-dangle</td><td>\u7981\u6B62\u5BF9\u8C61\u4F7F\u7528\u62D6\u5C3E\u9017\u53F7</td></tr></tbody></table><ul><li>\u8981\u6C42\u6216\u7981\u6B62\u4F7F\u7528\u62D6\u5C3E\u9017\u53F7 (comma-dangle)</li></ul><blockquote><p>ES5 \u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u7684\u62D6\u5C3E\u9017\u53F7\u662F\u5408\u6CD5\u7684</p></blockquote>`,7),g=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"baz"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"qux"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"quux"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br")])],-1),h=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},'/*eslint comma-dangle: ["error", "never"]*/'),s(`

`),n("span",{class:"token keyword"},"var"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"baz"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"qux"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"quux"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=o(`<h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><strong>.eslintrc.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:react/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;airbnb&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Atomics</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">SharedArrayBuffer</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2018</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;babel-eslint&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;import/extensions&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;react/prop-types&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;linebreak-style&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;react/state-in-constructor&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;import/prefer-default-export&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;max-len&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">550</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-multiple-empty-lines&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxEOF</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-underscore-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;_d&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_dh&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_h&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_id&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_m&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_n&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_t&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;_text&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;object-curly-newline&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;react/jsx-filename-extension&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;react/jsx-one-expression-per-line&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;jsx-a11y/click-events-have-key-events&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;jsx-a11y/alt-text&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;jsx-a11y/no-autofocus&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;jsx-a11y/no-static-element-interactions&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;react/no-array-index-key&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;jsx-a11y/anchor-is-valid&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;Link&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">specialLink</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;to&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;hrefLeft&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;hrefRight&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">aspects</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;noHref&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;invalidHref&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;preferButton&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(f,j){const r=p("ExternalLinkIcon"),e=p("CodeGroupItem"),l=p("CodeGroup");return i(),u(k,null,[n("h1",v,[m,s(),n("a",b,[s("ESLint"),a(r)])]),y,a(l,null,{default:t(()=>[a(e,{title:"\u629B\u51FA\u9519\u8BEF"},{default:t(()=>[g]),_:1}),a(e,{title:"\u6B63\u786E\u793A\u4F8B"},{default:t(()=>[h]),_:1})]),_:1}),_],64)}var w=c(d,[["render",x],["__file","eslint.html.vue"]]);export{w as default};
