import{_ as o,r as p,o as c,c as u,a,w as e,F as r,d as t,b as s,e as n}from"./app.73a9ff34.js";const d={},k=t(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre></div><h3 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> Variable</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulsonzero&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">\${name}</span>&quot;</span><span class="token punctuation">;</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><ol><li>\u533A\u5206\u5927\u5C0F\u5199</li><li>\u8D4B\u503C<code>=</code>\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C</li></ol></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>\u5B9E\u7528\u547D\u4EE4</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">basePath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\`/<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${basePath}</span>    <span class="token comment"># /Users/coulsonzero/Documents/web/docs</span>
</code></pre></div></div><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># This is a single-line comment.</span>
</code></pre></div><h3 id="\u6267\u884C-bash-shell-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C-bash-shell-\u811A\u672C" aria-hidden="true">#</a> \u6267\u884C Bash shell \u811A\u672C</h3>`,11),v=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sh"),n(` deploy.sh
`)])])],-1),m=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token builtin class-name"},"source"),n(` shellFile.sh
`)])])],-1),b=t(`<h3 id="if-statement" tabindex="-1"><a class="header-anchor" href="#if-statement" aria-hidden="true">#</a> If Statement</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span> <span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span> <span class="token keyword">then</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">else</span>
    <span class="token comment"># statement(s)</span>
<span class="token keyword">fi</span>
</code></pre></div><details class="custom-container details"><summary>\u67E5\u770B\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulson&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${name}</span> <span class="token operator">==</span> <span class="token string">&quot;coulsonAlpha&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello <span class="token variable">\${name}</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${name}</span>zero&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;coulsonzero&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi <span class="token variable">\${name}</span>&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;pass&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case-statement" tabindex="-1"><a class="header-anchor" href="#case-statement" aria-hidden="true">#</a> Case Statement</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">\${name}</span> <span class="token keyword">in</span>
    v1<span class="token punctuation">)</span>
        <span class="token comment"># statement(s)</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    v2<span class="token punctuation">)</span>
        <span class="token comment"># statement(s)</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>  <span class="token comment"># other</span>
        <span class="token comment"># statement(s)</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulsonAlpha&quot;</span>

<span class="token keyword">function</span> <span class="token function-name function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token variable">\${name}</span> <span class="token keyword">in</span>
        <span class="token string">&quot;coulsonZero&quot;</span><span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Zero&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;coulsonAlpha&quot;</span><span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Alpha&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${name}</span> is not a valid name&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hello
<span class="token punctuation">}</span>

main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u542F\u52A8\u51FD\u6570\u5FC5\u987B\u7F6E\u4E8E\u5E95\u90E8</span>
main
</code></pre></div><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8BF7\u8F93\u5165name: &quot;</span> read_name
<span class="token comment"># echo &quot;Output: \${read_name}&quot;</span>
</code></pre></div><details class="custom-container details"><summary>\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulsonAlpha&quot;</span>

<span class="token keyword">function</span> <span class="token function-name function">readUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7528\u6237\u540D(\u9ED8\u8BA4\uFF1A<span class="token variable">\${name}</span>)\uFF1A&quot;</span> read_username
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${read_username}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">\${read_username}</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u60A8\u8F93\u5165\u7684\u7528\u6237\u540D\u4E3A\uFF1A<span class="token variable">\${name}</span>&quot;</span>
<span class="token punctuation">}</span>

read_username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49shell\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49shell\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49shell\u6267\u884C\u547D\u4EE4</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E0D\u53EF\u7528function main() {}\u5305\u88F9\uFF01</p></div>`,12),h=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("$ "),s("span",{class:"token function"},"sh"),n(` ./start.sh stop
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"Close"'),n(`

$ `),s("span",{class:"token function"},"sh"),n(` start.sh start
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"running"'),n(`

$ `),s("span",{class:"token function"},"sh"),n(` start.sh deploy
`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token string"},'"deploy\u65E0\u4EFB\u4F55\u64CD\u4F5C"'),n(`
`)])])],-1),g=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[n(`
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("}")]),n(" -ge "),s("span",{class:"token number"},"1"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"${1}"),n(),s("span",{class:"token keyword"},"in"),n(`
        `),s("span",{class:"token string"},'"start"'),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Running"'),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token string"},'"stop"'),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Close"'),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        *`),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"${1}"),n('\u65E0\u4EFB\u4F55\u64CD\u4F5C"')]),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"else"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"
    command\u5982\u4E0B\u547D\u4EE4:
    start: \u542F\u52A8
    stop: \u505C\u6B62\u8FDB\u7A0B
    \u793A\u4F8B\u547D\u4EE4\u5982\uFF1Ash ./start.sh stop
    "`),n(`
`),s("span",{class:"token keyword"},"fi"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=t(`<details class="custom-container details"><summary>SpringBoot\u90E8\u7F72\u793A\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#\u53EF\u53D8\u53C2\u6570\u53D8\u91CF</span>
<span class="token assign-left variable">languageType</span><span class="token operator">=</span><span class="token string">&quot;javac&quot;</span> <span class="token comment">#\u652F\u6301 java,javac,netcore \u53D1\u5E03</span>
<span class="token comment">#\u53C2\u6570\u503C\u7531pom\u6587\u4EF6\u4F20\u9012</span>
<span class="token assign-left variable">baseZipName</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${package-name}</span>-<span class="token variable">\${activeProfile}</span>&quot;</span> <span class="token comment">#\u538B\u7F29\u5305\u540D\u79F0 publish-test.zip\u7684publish</span>
<span class="token assign-left variable">packageName</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${package-name}</span>&quot;</span> <span class="token comment">#\u547D\u4EE4\u542F\u52A8\u5305\u540D xx.jar\u7684xx</span>
<span class="token assign-left variable">mainclass</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${boot-main}</span>&quot;</span> <span class="token comment">#java -cp\u542F\u52A8\u65F6\uFF0C\u6307\u5B9Amain\u5165\u53E3\u7C7B;\u547D\u4EE4\uFF1Ajava -cp conf;lib\\*.jar;\${packageName}.jar \${mainclass}</span>

<span class="token comment">#\u4F8B\u5B50</span>
<span class="token comment"># baseZipName=&quot;publish-test&quot; #\u538B\u7F29\u5305\u540D\u79F0 publish-test.zip\u7684publish</span>
<span class="token comment"># packageName=&quot;publish&quot; #\u547D\u4EE4\u542F\u52A8\u5305\u540D publish.jar\u7684xx</span>

<span class="token comment">#\u56FA\u5B9A\u53D8\u91CF</span>
<span class="token assign-left variable">basePath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\`/<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token assign-left variable">baseZipPath</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${basePath}</span>/<span class="token variable">\${baseZipName}</span>.zip&quot;</span>  <span class="token comment">#\u538B\u7F29\u5305\u8DEF\u5F84</span>
<span class="token assign-left variable">baseDirPath</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${basePath}</span>&quot;</span> <span class="token comment">#\u89E3\u538B\u90E8\u7F72\u78C1\u76D8\u8DEF\u5F84</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span> <span class="token comment">#\u8FDB\u7A0Bpid</span>

<span class="token comment">#\u89E3\u538B</span>
<span class="token keyword">function</span> <span class="token function-name function">shenniu_unzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B---------------------------------------------&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u538B\u7F29\u5305\u8DEF\u5F84\uFF1A<span class="token variable">\${baseZipPath}</span>&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> $<span class="token punctuation">{</span>baseZipPath<span class="token punctuation">}</span><span class="token variable">\`</span></span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E0D\u5B58\u5728\u538B\u7F29\u5305\uFF1A<span class="token variable">\${baseZipPath}</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B\u78C1\u76D8\u8DEF\u5F84\uFF1A<span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F00\u59CB\u89E3\u538B...&quot;</span>

        <span class="token comment">#\u89E3\u538B\u547D\u4EE4</span>
        <span class="token function">unzip</span> -od <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span> <span class="token variable">\${baseZipPath}</span>

        <span class="token comment">#\u8BBE\u7F6E\u6267\u884C\u6743\u9650</span>
        <span class="token function">chmod</span> +x <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span>

        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u89E3\u538B\u5B8C\u6210\u3002&quot;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">#\u68C0\u6D4Bpid</span>
<span class="token keyword">function</span> <span class="token function-name function">getPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u68C0\u6D4B\u72B6\u6001---------------------------------------------&quot;</span>
    <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> -n $<span class="token punctuation">{</span>packageName<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FD0\u884Cpid\uFF1A<span class="token variable">\${pid}</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u672A\u8FD0\u884C&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u542F\u52A8\u7A0B\u5E8F</span>
<span class="token keyword">function</span> <span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">#\u542F\u52A8\u524D\uFF0C\u5148\u505C\u6B62\u4E4B\u524D\u7684</span>
    stop
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u7A0B\u5E8F\u5931\u8D25\uFF0C\u65E0\u6CD5\u542F\u52A8&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u7A0B\u5E8F---------------------------------------------&quot;</span>

        <span class="token comment">#\u9009\u62E9\u8BED\u8A00\u7C7B\u578B</span>
        <span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7A0B\u5E8F\u7C7B\u578B(java,javac,netcore)\uFF0C\u4E0B\u4E00\u6B65\u6309\u56DE\u8F66\u952E(\u9ED8\u8BA4\uFF1A<span class="token variable">\${languageType}</span>)\uFF1A&quot;</span> read_languageType
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${read_languageType}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">languageType</span><span class="token operator">=</span><span class="token variable">\${read_languageType}</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u9009\u62E9\u7A0B\u5E8F\u7C7B\u578B\uFF1A<span class="token variable">\${languageType}</span>&quot;</span>

        <span class="token comment">#\u8FDB\u5165\u8FD0\u884C\u5305\u76EE\u5F55</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>

        <span class="token comment">#\u5206\u7C7B\u542F\u52A8</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;javac&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${mainclass}</span> <span class="token punctuation">]</span>
            <span class="token keyword">then</span>
                <span class="token function">nohup</span> java -cp conf:lib<span class="token punctuation">\\</span>*.jar:<span class="token variable">\${packageName}</span>.jar <span class="token variable">\${mainclass}</span> <span class="token operator">&gt;</span><span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${packageName}</span>.out <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
               <span class="token comment">#nohup java -cp conf:lib\\*.jar:\${packageName}.jar \${mainclass} &gt;/dev/null 2&gt;&amp;1 &amp;</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;java&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token function">nohup</span> java -jar <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span>.jar <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
            <span class="token comment"># java -jar \${baseDirPath}/\${baseZipName}/\${packageName}.jar</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${languageType}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;netcore&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token comment">#nohup dotnet run \${baseDirPath}/\${baseZipName}/\${packageName} &gt;/dev/null 2&gt;&amp;1 &amp;</span>
            <span class="token function">nohup</span> <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${baseZipName}</span>/<span class="token variable">\${packageName}</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
        <span class="token keyword">fi</span>

        <span class="token comment">#\u67E5\u8BE2\u662F\u5426\u6709\u542F\u52A8\u8FDB\u7A0B</span>
        getPid
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u542F\u52A8&quot;</span>
            <span class="token comment">#nohup\u65E5\u5FD7</span>
            <span class="token function">tail</span> -n <span class="token number">50</span> -f <span class="token variable">\${baseDirPath}</span>/<span class="token variable">\${packageName}</span>.out
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u5931\u8D25&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u505C\u6B62\u7A0B\u5E8F</span>
<span class="token keyword">function</span> <span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    getPid
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u7A0B\u5E8F---------------------------------------------&quot;</span>
        <span class="token function">kill</span> -9 <span class="token variable">\${pid}</span>

        getPid
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token comment">#stop</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u5931\u8D25&quot;</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u6210\u529F&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#\u542F\u52A8\u65F6\u5E26\u53C2\u6570\uFF0C\u6839\u636E\u53C2\u6570\u6267\u884C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>}</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token keyword">case</span> <span class="token variable">\${1}</span> <span class="token keyword">in</span>
        <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
            stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;unzip&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">#\u6267\u884C\u89E3\u538B</span>
            shenniu_unzip
            <span class="token comment">#\u6267\u884C\u542F\u52A8</span>
            start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${1}</span>\u65E0\u4EFB\u4F55\u64CD\u4F5C&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;
    command\u5982\u4E0B\u547D\u4EE4\uFF1A
    unzip\uFF1A\u89E3\u538B\u5E76\u542F\u52A8
    start\uFF1A\u542F\u52A8
    stop\uFF1A\u505C\u6B62\u8FDB\u7A0B
    restart\uFF1A\u91CD\u542F

    \u793A\u4F8B\u547D\u4EE4\u5982\uFF1A./shenniu_publish start
    &quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><ul><li>name: command not found</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u53D8\u91CF\u8D4B\u503C&quot;=&quot;\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;coulsonzero&quot;</span>
</code></pre></div><ul><li>[] &amp; if[ ]: command not found</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># if [ ]: \u4E2D\u95F4\u9700\u8981\u7A7A\u683C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${pid}</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;great&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;pope&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div><ul><li>linux\u7A7A\u683C\u548Cwindow\u7A7A\u683C\u4E0D\u4E00\u81F4</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> start.sh
<span class="token comment"># \u6DFB\u52A0\u6B64\u547D\u4EE4\u4FDD\u5B58</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">ff</span><span class="token operator">=</span>unix
</code></pre></div><ul><li>\u6253\u5370\u6587\u4EF6\u7684\u6700\u540E5\u884C</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6253\u5370\u6587\u4EF6\u7684\u6700\u540E5\u884C</span>
<span class="token function">tail</span> -n <span class="token number">5</span> filename.txt
<span class="token comment"># tail -5 filename.txt</span>
</code></pre></div><ul><li>\u4ECE\u7B2C17\u884C\u5F00\u59CB\u6253\u5370</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;1,16d&#39;</span> filename.txt
</code></pre></div>`,12);function q(y,w){const l=p("CodeGroupItem"),i=p("CodeGroup");return c(),u(r,null,[k,a(i,null,{default:e(()=>[a(l,{title:"bash"},{default:e(()=>[v]),_:1}),a(l,{title:"zsh"},{default:e(()=>[m]),_:1})]),_:1}),b,a(i,null,{default:e(()=>[a(l,{title:"Bash"},{default:e(()=>[h]),_:1}),a(l,{title:"start.sh"},{default:e(()=>[g]),_:1})]),_:1}),f],64)}var x=o(d,[["render",q],["__file","shell.html.vue"]]);export{x as default};
