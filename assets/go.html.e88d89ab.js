import{_ as i,r as l,o as u,c as k,b as n,a,w as t,F as r,e as s,d as c}from"./app.73a9ff34.js";const d={},m={id:"golang",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#golang","aria-hidden":"true"},"#",-1),b=s(),g={href:"https://golang.google.cn",target:"_blank",rel:"noopener noreferrer"},f=s("Golang"),h=n("p",null,[n("code",null,"Google"),s(" in "),n("code",null,"2007"),s(" simple, reliable and efficient software.")],-1),y={href:"https://www.topgoer.com/",target:"_blank",rel:"noopener noreferrer"},w=s("Go \u4E2D\u6587\u5B66\u4E60\u7F51"),q=c('<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><h3 id="_1-hello-world" tabindex="-1"><a class="header-anchor" href="#_1-hello-world" aria-hidden="true">#</a> 1. Hello World</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Go \u901A\u8FC7<code>main</code>\u65B9\u6CD5\u542F\u52A8, main()\u65B9\u6CD5\u7684<code>package</code>\u5FC5\u987B\u4E3A<code>main</code></p></div>',3),_=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello world!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),x=c(`<h3 id="_2-input-output" tabindex="-1"><a class="header-anchor" href="#_2-input-output" aria-hidden="true">#</a> 2. Input &amp; Output</h3><p><strong>Output</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// \u4E0D\u6362\u884C</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u6362\u884C</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// \u683C\u5F0F\u5316\u8F93\u51FA</span>
<span class="token comment">/**
 * %T: \u6570\u636E\u7C7B\u578B
 * %v: \u503C
 * %d: int\u6574\u6570\u5341\u8FDB\u5236
 * %f: float
 * %t: bool
 * %c: rune(int32), \u5176\u4ED6\u8BED\u8A00\u4E3Achar
 * %s: string
 * %p: \u6307\u9488
 * %b: int\u6574\u6570\u4E8C\u8FDB\u5236
 * %%: %
 * %-3d: \`-\`\u6307 \u5DE6\u5BF9\u9F50, \`3\`\u6307\u53603\u4E2A\u5B57\u7B26
 * %02d: \`02\u6307\`\u4E0D\u8DB3\u4E24\u4F4D\u6570\u5B57\u65F6\u5728\u6570\u5B57\u524D\u9762\u8865\u9F500
 * %+v : \u8F93\u51FA\`key\`, \u5982&amp;{a:7 b:-2.35 c:abc}
 * %#v : \u8F93\u51FA\u7C7B\u578B, map[string]int{&quot;CST&quot;:-21600, &quot;EST&quot;:-18000, &quot;MST&quot;:-25200, &quot;PST&quot;:-28800, &quot;UTC&quot;:0}
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Input</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
<span class="token comment">// fmt.Print(&quot;\u8BF7\u8F93\u5165\u540D\u79F0(name): &quot;)</span>
fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p><strong>For Example</strong></p>`,6),P=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u4E0D\u6362\u884C"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"go>>> "'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// \u6362\u884C"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello, World!"'),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// \u683C\u5F0F\u5316\u8F93\u51FA"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d, pi: %f, isEven: %t \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"coulson"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3.14"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// %-3d \u2014\u2014\u4EE510\u8FDB\u5236\u663E\u793A\uFF0C3\u8868\u793A\u8F93\u51FA\u7684\u6570\u5B57\u53603\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\uFF0C-\u8868\u793A\u5DE6\u5BF9\u9F50\uFF1B"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d*%d=%-3d "'),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token operator"},"*"),s("j"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// \u683C\u5F0F\u5316\u8F93\u5165(\u8D4B\u503C)"),s(`
	s `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d.\\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"coulson"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
go>>> Hello, World!
name: coulson, age: 20.
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" name "),n("span",{class:"token builtin"},"string"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8BF7\u8F93\u5165\u540D\u79F0(name): "'),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("name"),n("span",{class:"token punctuation"},")"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Output: "'),s(),n("span",{class:"token operator"},"+"),s(" name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" n "),n("span",{class:"token builtin"},"int"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8BF7\u8F93\u5165\u6570\u7EC4\u957F\u5EA6: "'),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("n"),n("span",{class:"token punctuation"},")"),s(`

	nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" input "),n("span",{class:"token builtin"},"int"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8BF7\u8F93\u5165\u4E00\u4E2A\u5143\u7D20: "'),n("span",{class:"token punctuation"},")"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("input"),n("span",{class:"token punctuation"},")"),s(`
		nums `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(" input"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},`/*
\u8BF7\u8F93\u5165\u6570\u7EC4\u957F\u5EA6: 4
\u8BF7\u8F93\u5165\u4E00\u4E2A\u5143\u7D20: 1
\u8BF7\u8F93\u5165\u4E00\u4E2A\u5143\u7D20: 3
\u8BF7\u8F93\u5165\u4E00\u4E2A\u5143\u7D20: 5
\u8BF7\u8F93\u5165\u4E00\u4E2A\u5143\u7D20: 6
[1, 3, 5, 6]
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"_3-variable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-variable","aria-hidden":"true"},"#"),s(" 3. Variable")],-1),T=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Tom"'),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token builtin"},"string"),s("  "),n("span",{class:"token comment"},'// \u6709\u9ED8\u8BA4\u503C: ""'),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Tom"'),s("	"),n("span",{class:"token comment"},"// \u7C7B\u578B\u53EF\u7701\u7565"),s(`

str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"Tom"'),s("	"),n("span",{class:"token comment"},"// \u4EC5\u53EF\u4F5C\u4E3A\u5C40\u90E8\u53D8\u91CF(\u51FD\u6570\u4F53\u5185\u58F0\u660E)"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0")])],-1),D=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5168\u5C40\u53D8\u91CF"),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
    name     `),n("span",{class:"token builtin"},"string"),s(`
    age      `),n("span",{class:"token builtin"},"int"),s(`
    gender   `),n("span",{class:"token builtin"},"bool"),s(`
    score    `),n("span",{class:"token builtin"},"float64"),s(`
    skills   `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),s(`
    scoreMap `),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
    name `),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),s(`
    age  `),n("span",{class:"token builtin"},"int"),s("    "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
    name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),s(`
    age  `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" name"),n("span",{class:"token punctuation"},","),s(" age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),s(`

`),n("span",{class:"token comment"},"// \u5C40\u90E8\u53D8\u91CF"),s(`
name`),n("span",{class:"token punctuation"},","),s(" age "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token comment"},"// \u53D8\u91CF\u58F0\u660E\u8D4B\u503C\u540E\u4ECD\u9700\u8C03\u7528\uFF0C\u5426\u5219\u62A5\u9519"),s(`

`),n("span",{class:"token comment"},"// \u5168\u5C40\u53D8\u91CF(\u51FD\u6570\u5916\u58F0\u660E\u7684\u53D8\u91CF)"),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
	id       `),n("span",{class:"token builtin"},"int"),s(`
	username `),n("span",{class:"token builtin"},"string"),s(`
	password `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
	Host `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"127.0.0.1"'),s(`
	Port `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3306"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u5C40\u90E8\u53D8\u91CF(\u51FD\u6570\u5185\u58F0\u660E\u7684\u53D8\u91CF)"),s(`
	name`),n("span",{class:"token punctuation"},","),s(" age "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"Tom"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"result: %d, %s, %s"'),n("span",{class:"token punctuation"},","),s(" id"),n("span",{class:"token punctuation"},","),s(" username"),n("span",{class:"token punctuation"},","),s(" password"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("Host"),n("span",{class:"token punctuation"},","),s(" Port"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// single variable"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"createSingleVar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" num "),n("span",{class:"token builtin"},"int"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`

	name `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"coulson"'),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// multiple variable"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"createMultipleVar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" name"),n("span",{class:"token punctuation"},","),s(" age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"john"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token punctuation"},")"),s(`

	num`),n("span",{class:"token punctuation"},","),s(" str "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"hello"'),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(" str"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
		host `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"127.0.0.1"'),s(`
		port `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"3306"'),s(`
	`),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("host"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token comment"},"// \u5E38\u91CF\u53EF\u4EE5\u5B9A\u4E49\u540E\u53EF\u6682\u4E0D\u8C03\u7528"),s(`
`),n("span",{class:"token keyword"},"const"),s(" str "),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"constant"'),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
	pi   `),n("span",{class:"token builtin"},"float64"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),s(`
	host `),n("span",{class:"token builtin"},"string"),s("  "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"127.0.0.1"'),s(`
	port `),n("span",{class:"token builtin"},"int"),s("     "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3306"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
	a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"iota"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token comment"},"// 0"),s(`
	b            `),n("span",{class:"token comment"},"// 2"),s(`
	c            `),n("span",{class:"token comment"},"// 4"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("pi"),n("span",{class:"token punctuation"},","),s(" host"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" str"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=c('<blockquote><p>\u5168\u5C40\u53D8\u91CF: \u51FD\u6570\u5916\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u6574\u4E2A\u5305\u751A\u81F3\u5916\u90E8\u5305\uFF08\u88AB\u5BFC\u51FA\u540E\uFF09\u4F7F\u7528, \u672A\u521D\u59CB\u5316\u65F6\u6709\u9ED8\u8BA4\u503C</p><p>\u5C40\u90E8\u53D8\u91CF: \u51FD\u6570\u5185\u5B9A\u4E49\u7684\u53D8\u91CF, \u4F5C\u7528\u57DF\u53EA\u5728\u51FD\u6570\u4F53\u5185\uFF0C\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u53D8\u91CF\u4E5F\u662F\u5C40\u90E8\u53D8\u91CF, \u5FC5\u987B\u521D\u59CB\u5316\u5426\u5219\u62A5\u9519</p></blockquote><div class="custom-container danger"><p class="custom-container-title">DANGER</p><blockquote><p><strong>A.\u53D8\u91CF\u4F5C\u7528\u57DF</strong>:</p><p>1.\u5168\u5C40\u53D8\u91CF: <code>var x = 12</code> (\u4E0D\u80FD\u4F7F\u7528 <code>x := 12</code>)</p><p>2.\u5C40\u90E8\u53D8\u91CF: <code>x := 12</code>(var x = 12 \u4EA6\u53EF, \u63A8\u8350\u524D\u8005)</p><p><strong>B.\u53D8\u91CF\u4FEE\u6539</strong>:</p><p>a.\u5168\u5C40\u53D8\u91CF: <code>func change() {x += 1}</code> (\u4EC5\u65E0\u53C2\u4FEE\u6539, \u4F7F\u7528\u53C2\u6570 set(x int)\u65E0\u6CD5\u4FEE\u6539)</p><p>b.\u5C40\u90E8\u53D8\u91CF: <code>func change_ptr(ptr *int) {*ptr += 1}</code> (\u4EC5\u6307\u9488\u4FEE\u6539, \u4F7F\u7528 set(x int)\u65E0\u6CD5\u4FEE\u6539)</p><p>\u6CE8\u610F\u5176\u4ED6\u65B9\u5F0F\u65E0\u6CD5\u4FEE\u6539</p></blockquote></div>',2),G=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"8"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),s(),n("span",{class:"token comment"},"// y := 12 \u4F1A\u62A5\u9519, \u53EA\u80FD\u7528\u4E8E\u5C40\u90E8\u53D8\u91CF"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"//fmt.Println(x) //  undefined: x"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 12"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"var"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u51FD\u6570\u53C2\u6570\u4E3A\u5C40\u90E8\u4F5C\u7528\u57DF"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3"),s(`
	`),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 4"),s(`
	`),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 4"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	val `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),s("ptr "),n("span",{class:"token operator"},"*"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token operator"},"*"),s("ptr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),s(`

	`),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 12"),s(`

	`),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Coulson"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 25"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 25"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 26"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("h3",{id:"_4-datatypes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-datatypes","aria-hidden":"true"},"#"),s(" 4. DataTypes")],-1),J=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u57FA\u7840\u6570\u636E\u7C7B\u578B"),s(`

`),n("span",{class:"token comment"},"// 1.\u6570\u5B57 (\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u590D\u6570)"),s(`
`),n("span",{class:"token builtin"},"int"),s("  "),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"int8"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"int16"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"int32"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"int64"),n("span",{class:"token operator"},">"),s("     	"),n("span",{class:"token comment"},"// \u5E26\u7B26\u53F7\u6574\u6570, rune = int32"),s(`
`),n("span",{class:"token builtin"},"uint"),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"uint8"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"uint16"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"uint32"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"uint64"),n("span",{class:"token operator"},">"),s("	"),n("span",{class:"token comment"},"// \u65E0\u7B26\u53F7\u6574\u6570(\u975E\u8D1F\u6570), byte = uint8"),s(`

`),n("span",{class:"token comment"},"// int\u5927\u5C0F: \u4E0E\u5177\u4F53\u7684\u5E73\u53F0\u6709\u5173, int\u572832\u4F4D\u7CFB\u7EDF\u4E2D\u662F4\u5B57\u8282\uFF0C\u572864\u4F4D\u7CFB\u7EDF\u4E2D\u662F8\u5B57\u8282"),s(`

`),n("span",{class:"token comment"},`/*
int8: -128 ~ 127
int16: -32768 ~ 32767
int32: -2147483648 ~ 2147483647
int64: -9223372036854775808 ~ 9223372036854775807
uint8: 0 ~ 255
uint16: 0 ~ 65535
uint32: 0 ~ 4294967295
uint64: 0 ~ 18446744073709551615
*/`),s(`

`),n("span",{class:"token builtin"},"float32"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"float64"),s("    		"),n("span",{class:"token comment"},"// 1.2 \u6D6E\u70B9\u6570"),s(`
`),n("span",{class:"token builtin"},"complex64"),n("span",{class:"token operator"},"/"),n("span",{class:"token builtin"},"complex128"),s("	"),n("span",{class:"token comment"},"// 1.3 \u590D\u6570"),s(`
`),n("span",{class:"token comment"},"// 2.\u5E03\u5C14"),s(`
`),n("span",{class:"token builtin"},"bool"),s(`
`),n("span",{class:"token comment"},"// 3.\u5B57\u7B26\u4E32"),s(`
`),n("span",{class:"token builtin"},"string"),s(`


`),n("span",{class:"token comment"},"// Array"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"byte"),s("\u3001"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"rune"),s(`
`),n("span",{class:"token comment"},"// map"),s(`
`),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"int"),s(`

`),n("span",{class:"token comment"},"// \u4E07\u80FD\u7C7B\u578B"),s(`
`),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// go1.18\u6CDB\u578B"),s(`
`),n("span",{class:"token keyword"},"type"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(" toString"),n("span",{class:"token punctuation"},"["),s("T "),n("span",{class:"token builtin"},"int"),n("span",{class:"token operator"},"|"),n("span",{class:"token builtin"},"float64"),n("span",{class:"token operator"},"|"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),s("s T"),n("span",{class:"token punctuation"},")"),s(" T "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u67E5\u8BE2 \u5B57\u8282\u5360\u7528\u5927\u5C0F"),s(`
unsafe`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sizeof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u67E5\u8BE2 \u6570\u636E\u7C7B\u578B"),s(`
reflect`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"TypeOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u53D6\u503C\u8303\u56F4"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"int: -%d ~ %d\\n"'),n("span",{class:"token punctuation"},","),s(" math"),n("span",{class:"token punctuation"},"."),s("MaxInt"),n("span",{class:"token punctuation"},","),s(" math"),n("span",{class:"token punctuation"},"."),s("MaxInt"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),B=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u6574\u6570"),s(`
`),n("span",{class:"token keyword"},"var"),s(" num "),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),s(`
`),n("span",{class:"token keyword"},"var"),s(" pi "),n("span",{class:"token builtin"},"float32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.141"),s(`
`),n("span",{class:"token keyword"},"var"),s(" r "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2i"),s(`

`),n("span",{class:"token comment"},"// \u5E03\u5C14"),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`

`),n("span",{class:"token comment"},"// \u5B57\u7B26\u4E32"),s(`
`),n("span",{class:"token keyword"},"var"),s(" name "),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"john"'),s(`

`),n("span",{class:"token comment"},"// \u5B57\u7B26"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token builtin"},"rune"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'\u4F60'"),s("	"),n("span",{class:"token comment"},"// fmt.Println(string(c)), \u4E2D\u6587\u5B57\u7B26\u4E0D\u80FD\u4F7F\u7528int8/uint8"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"byte"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'v'"),s("	"),n("span",{class:"token comment"},"// fmt.Println(string(b))"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
    name     `),n("span",{class:"token builtin"},"string"),s(`
    age      `),n("span",{class:"token builtin"},"int"),s(`
    gender   `),n("span",{class:"token builtin"},"bool"),s(`
    score    `),n("span",{class:"token builtin"},"float64"),s(`
    skills   `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),s(`
    scoreMap `),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name =  %s, age = %d, gender = %t, score = %f \\n"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token punctuation"},","),s(" gender"),n("span",{class:"token punctuation"},","),s(" score"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},'// name = "", age = 0, gender = false, score = 0.000000'),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%T, %T, %T, %T \\n"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token punctuation"},","),s(" gender"),n("span",{class:"token punctuation"},","),s(" score"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// string, int, bool, float64"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%v %T \\n"'),n("span",{class:"token punctuation"},","),s(" skills"),n("span",{class:"token punctuation"},","),s(" skills"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// [] []string"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%v, %T \\n"'),n("span",{class:"token punctuation"},","),s(" scoreMap"),n("span",{class:"token punctuation"},","),s(" scoreMap"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// map[], map[string]int"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token char"},"'z'"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %c, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),s("                         "),n("span",{class:"token comment"},"// char: z, value: 122, typeof: int32"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %c, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("       "),n("span",{class:"token comment"},"// char: z, value: 122, typeof: uint8"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %s, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// char: z, value: z,   typeof: string"),s(`

	z `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token char"},"'\u7F8E'"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %c, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(" z"),n("span",{class:"token punctuation"},","),s(" z"),n("span",{class:"token punctuation"},","),s(" z"),n("span",{class:"token punctuation"},")"),s("                         "),n("span",{class:"token comment"},"// char: \u7F8E, value: 32654, typeof: int32"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %c, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("       "),n("span",{class:"token comment"},"// char: *, value: 142, typeof: uint8"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"char: %s, value: %v, typeof: %T \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// char: \u7F8E, value: \u7F8E, typeof: string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("h2",{id:"core",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),s(" Core")],-1),H=n("h3",{id:"_5-string-\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-string-\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" 5. String \u5B57\u7B26\u4E32")],-1),z=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5B57\u7B26\u4E32\u683C\u5F0F\u5316"),s(`
s `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u4E2D\u6587\u957F\u5EA6(1\u4E2A\u4E2D\u6587\u53603\u4E2A\u5B57\u8282)"),s(`
`),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"rune"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// []byte\uFF1A\u4E0D\u80FD\u7528\u4E8E\u4E2D\u6587\u5B57\u7B26\u6570\u7EC4"),s(`
`)])])],-1),Q=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u904D\u5386"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"Github\u5B98\u7F51"'),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" s "),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%c "'),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token comment"},"// fmt.Println(string(v))"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// G i t h u b \u5B98 \u7F51"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"forEach2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"Github\u5B98\u7F51"'),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"rune"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// G i t h u b \u5B98 \u7F51"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// string -> int"),s(`
num`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Atoi"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`
num`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ParseInt"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// int -> string"),s(`
str `),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Itoa"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`
str `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d"'),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// array -> string"),s(`
strings`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Join"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// string -> []byte"),s(`
charArr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// byte -> string"),s(`
str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[s(`
`),n("span",{class:"token comment"},`/** \u5B57\u7B26\u4E32\u62FC\u63A5\u65B9\u5F0F
 * 1. +
 * 2. strings.Join(arr, "")
 * 3. sb.WriteString(v)
 * 4. buf.Write([]byte(v))
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),s("arr "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" sb strings"),n("span",{class:"token punctuation"},"."),s(`Builder
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" arr "),n("span",{class:"token punctuation"},"{"),s(`
		sb`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteString"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" sb"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"buffer"),n("span",{class:"token punctuation"},"("),s("arr "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	buf `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),s("bytes"),n("span",{class:"token punctuation"},"."),s("Buffer"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" arr "),n("span",{class:"token punctuation"},"{"),s(`
		buf`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" buf"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[s("\u5224\u65AD\u662F\u5426\u4E3A\u5B57\u6BCD\uFF1A unicode"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsLetter"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
\u5224\u65AD\u662F\u5426\u4E3A\u5341\u8FDB\u5236\u6570\u5B57\uFF1A unicode`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsDigit"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
\u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57\uFF1A unicode`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsNumber"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u767D\u7B26\u53F7\uFF1A unicode`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsSpace"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
\u5224\u65AD\u662F\u5426\u4E3AUnicode\u6807\u70B9\u5B57\u7B26 `),n("span",{class:"token punctuation"},":"),s("unicode"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsPunct"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),X=c('<h3 id="_6-array-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_6-array-\u6570\u7EC4" aria-hidden="true">#</a> 6. Array \u6570\u7EC4</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><blockquote><p>\u4E00\u65E6\u58F0\u660E\uFF0C\u957F\u5EA6\u56FA\u5B9A\u65E0\u6CD5\u4FEE\u6539\uFF0C\u9700\u8981\u52A8\u6001\u6269\u5C55\u6570\u636E\u53C2\u8003\u5207\u7247<code>make([]int 5)</code></p><p>\u53EA\u80FD\u67E5\u8BE2\uFF0C\u65E0\u6CD5\u589E\u5220\u6539 :::</p></blockquote><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>\u56FA\u5B9A\u6570\u7EC4\uFF1A\u503C\u62F7\u8D1D, \u957F\u5EA6\u56FA\u5B9A\u6570\u7EC4\uFF0C\u65E0\u6CD5\u6269\u5BB9\u548C\u4FEE\u6539\u5143\u7D20(append(), make(), copy(), sort.Ints()\u7B49\u65B9\u6CD5)</p><p>\u52A8\u6001\u6570\u7EC4(\u5207\u7247 slice): \u5F15\u7528\u62F7\u8D1D</p></div></div>',2),Z=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u6570\u7EC4\u58F0\u660E -> \u6709\u9ED8\u8BA4\u503C"),s(`
arr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("          "),n("span",{class:"token comment"},"// [0, 0, 0]"),s(`
`),n("span",{class:"token comment"},"// \u6570\u636E\u58F0\u660E\u521D\u59CB\u5316"),s(`
arr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("  "),n("span",{class:"token comment"},"// [1, 2, 3]"),s(`


`),n("span",{class:"token comment"},"// For Example"),s(`
`),n("span",{class:"token keyword"},"var"),s(" a "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("                             "),n("span",{class:"token comment"},"// len: 3, cap: 3, array: [0 0 0], array: [3]int{0, 0, 0}"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("                "),n("span",{class:"token comment"},"// len: 3, cap: 3, array: [1 2 3]"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("             "),n("span",{class:"token comment"},"// len: 3, cap: 3, array: [0 2 3]"),s(`
`),n("span",{class:"token keyword"},"var"),s(" d "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},"}"),s("          "),n("span",{class:"token comment"},"// len: 6, cap: 6, array: [1 2 0 0 5 6]"),s(`
`),n("span",{class:"token keyword"},"var"),s(" e "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),s("                 "),n("span",{class:"token comment"},"// len: 98, cap: 98, array: [..., 1]"),s(`
`),n("span",{class:"token keyword"},"var"),s(" f "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'b'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'c'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"// len: 100, cap: 100, array: [..., 1 2 3]"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v, array: %#v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" d"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, array: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" f"),n("span",{class:"token punctuation"},")"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%v, %c, %T"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 97, a, int32"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u957F\u5EA6"),s(`
`),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u67E5"),s(`
arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(`
arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(`
arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),s(`
arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token comment"},"// \u6539"),s(`
arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(`
`),n("span",{class:"token comment"},"// \u4E0D\u652F\u6301 arr[:3] = nums[:], \u652F\u6301copy(arr, nums)"),s(`


`),n("span",{class:"token comment"},"// \u89E3\u6784"),s(`
arr`),n("span",{class:"token operator"},"..."),s("  "),n("span",{class:"token comment"},"// [1, 2, 3] => 1, 2, 3"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token operator"},"..."),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u91CD\u6784"),s(`
`),n("span",{class:"token operator"},"..."),s("arr  "),n("span",{class:"token comment"},"// 1, 2, 3 => [1, 2, 3]"),s(`
`),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u904D\u5386"),s(`
`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" arr "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" arr "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("h3",{id:"_7-slice-\u5207\u7247",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-slice-\u5207\u7247","aria-hidden":"true"},"#"),s(" 7. Slice \u5207\u7247")],-1),an=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u52A8\u6001\u6570\u7EC4\uFF0C\u53EF\u4F7F\u7528 Array \u6240\u6709"),n("strong",null,"Api"),s("\u65B9\u6CD5\uFF0C\u4E14\u957F\u5EA6\u4E0D\u56FA\u5B9A\uFF0C\u53EF\u6269\u5BB9")])],-1),tn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" slice "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("                 "),n("span",{class:"token comment"},"// len: 0, cap: 0, slice: []"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("                  "),n("span",{class:"token comment"},"// len: 0, cap: 0, slice: []"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("         "),n("span",{class:"token comment"},"// len: 3, cap: 3, slice: [1, 2, 3]"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"cap"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// make: \u4F7F\u7528len\u5206\u914Dslice\u957F\u5EA6\uFF1Bcap: \u53EF\u9009\u53C2\u6570\uFF0C\u4E3A\u6570\u7EC4\u5BB9\u91CF\uFF0C\u957F\u5EA6\u5C0F\u4E8E\u5BB9\u91CF\u65F6\u5176\u4ED6\u6570\u503C\u5747\u4E3A\u9ED8\u8BA4\u503C"),s(`
`)])])],-1),en=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u67E5\u8BE2"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, slice: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},")"),s(`

`)])])],-1),on=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u589E\u52A0(\u672B\u5C3E)"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s("         "),n("span",{class:"token comment"},"// len: 6, cap: 10, slice: [1 2 3 0 0 4]"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// len: 8, cap: 10, slice: [1 2 3 0 0 4 5 6]"),s(`
nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// len: 7, cap: 10, slice: [1 2 3 0 0 4 5]"),s(`

`),n("span",{class:"token comment"},"// \u4E2D\u95F4\u63D2\u5165\u5143\u7D20"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),s("v"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// \u5728index=i\u7684\u4F4D\u7F6E\u63D2\u5165value"),s(`


`),n("span",{class:"token comment"},"// \u63D2\u5165\u5355\u4E2A\u5143\u7D20"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sliceInsert"),n("span",{class:"token punctuation"},"("),s("slice "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` slice
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sliceInsert2"),n("span",{class:"token punctuation"},"("),s("slice "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"copy"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
	slice`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` value
	`),n("span",{class:"token keyword"},"return"),s(` slice
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5220\u9664(\u6307\u5B9A\u7D22\u5F15\u5143\u7D20)"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u5220\u9664\u5207\u7247\u90E8\u5206\u5143\u7D20"),s(`
slice `),n("span",{class:"token operator"},"="),s(" slice"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),pn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u6392\u5E8F"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"sort"'),s(`
sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Ints"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),s(`
sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sort"),n("span",{class:"token punctuation"},"("),s("sort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Reverse"),n("span",{class:"token punctuation"},"("),s("sort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IntSlice"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u53CD\u8F6C"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sliceReverse"),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	j `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" j"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		s`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
		j`),n("span",{class:"token operator"},"--"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` s
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * append(): \u672B\u5C3E\u65B0\u589E\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20
 * copy()  : \u4FEE\u6539\u5207\u7247\u524Dn\u4E2A\u5143\u7D20\u7684\u503C -> slice[0:k]
 * \u5408\u5E76\u5207\u7247 :  \u5C06\u53E6\u4E00\u4E2A\u5207\u7247\u6570\u7EC4\u653E\u5728\u8BE5\u5207\u7247\u6570\u7EC4\u7684\u7279\u5B9A\u4F4D\u7F6E -> s[start:n]
 */`),s(`


`),n("span",{class:"token comment"},"// \u5207\u7247\u5408\u5E76(\u66FF\u4EE3\u90E8\u5206\u5143\u7D20 -> slice[start:end])"),s(`
`),n("span",{class:"token comment"},"// nums1 := []int{1, 2, 3, 0, 0, 0}"),s(`
`),n("span",{class:"token comment"},"// nums2 := []int{4, 5, 6}"),s(`
`),n("span",{class:"token comment"},"// start := 3      // \u5982\u679C start := len(nums1) - len(nums2) ->  nums1[:k] = nums2[:]\u4E0Ecopy()\u6B63\u597D\u76F8\u53CD"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sliceMerge"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},","),s(" nums2 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" start "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums2 "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u8D85\u51FA\u90E8\u5206\u5C06\u81EA\u52A8\u622A\u65AD"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" startIndex"),n("span",{class:"token operator"},"+"),s("i "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"break"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
        nums1`),n("span",{class:"token punctuation"},"["),s("start "),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums2"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` nums1
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Output: nums1 = [1, 2, 3, 4, 5, 0, 0]"),s(`



`),n("span",{class:"token comment"},"// \u5207\u7247\u62F7\u8D1D(\u5143\u7D20\uFF0C\u957F\u5EA6\uFF0C\u5BB9\u91CF)"),s(`
`),n("span",{class:"token comment"},"// slice1 := []int{1, 3, 5}"),s(`
`),n("span",{class:"token comment"},"// slice2 := []int{}   // len=0 cap=0 slice=[]"),s(`
slice2 `),n("span",{class:"token operator"},"="),s(" slice"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s("   "),n("span",{class:"token comment"},"// len=3 cap=3 slice=[1 3 5]"),s(`

`),n("span",{class:"token comment"},"// \u5143\u7D20\u62F7\u8D1D(\u5143\u7D20) -> slice[:len(slice2)] = slice2[:]"),s(`
`),n("span",{class:"token comment"},"// slice := []int{1, 2, 3, 4, 5, 6}"),s(`
`),n("span",{class:"token comment"},"// slice2 := []int{7, 8, 9}"),s(`
`),n("span",{class:"token function"},"copy"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(" slice2"),n("span",{class:"token punctuation"},")"),s("     "),n("span",{class:"token comment"},"// \u5C06slice2\u7684\u5143\u7D20\u62F7\u8D1D\u5230slice\u4E2D\uFF0Cslice\u957F\u5EA6\u548C\u5BB9\u91CF\u4E0D\u4F1A\u6539\u53D8"),s(`
`),n("span",{class:"token comment"},`/*
slice: [7 8 9 4 5 6], len: 6, cap: 6
slice2: [7 8 9], len: 3, cap: 3
*/`),s(`

`),n("span",{class:"token function"},"copy"),n("span",{class:"token punctuation"},"("),s("slice2"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},`/*
slice: [1 2 3 4 5 6], len: 6, cap: 6
slice2: [7 8 9], len: 3, cap: 3
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"/********************************************************/"),s(`
`),n("span",{class:"token comment"},"// \u81EA\u52A8\u6269\u5BB9"),s(`
`),n("span",{class:"token comment"},"// (go1.17\u4EE51024\u4F5C\u4E3A\u5927\u5C0F\u5206\u754C\u4E0D\u540C, \u65B0\u589E\u5143\u7D20\u65F6\uFF0Cslice\u957F\u5EA6\u4E0D\u8DB3\u65F6\u4F1A\u81EA\u52A8\u6269\u5BB9\u4E3A\u539F\u6765\u7684\u4E24\u500D\u6216\u4EE5\u4E0A\uFF01\u5F53len > 1024\u4E4B\u540E\uFF0C\u6269\u5BB9cap\u4E0D\u518D\u4E3A\u539F\u6765\u7684\u4E24\u500D\u6216\u4EE5\u4E0A\u4E86\uFF0C\u5982len=1025 -> cap=1280)"),s(`
`),n("span",{class:"token comment"},"// Go 1.18\u4F7F\u7528256\u4F5C\u4E3Athreshold"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("       "),n("span",{class:"token comment"},"// len: 3, cap: 3, slice: [1 2 3]"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// len: 5, cap: 6, slice: [1 2 3 4 5]"),s(`

`),n("span",{class:"token comment"},"/********************************************************/"),s(`
`),n("span",{class:"token comment"},"// \u624B\u52A8\u6269\u5BB9"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// step1. \u5206\u914D\u65B0\u6570\u7EC4\u5BB9\u91CF"),s(`
newSlice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// len: 3, cap: 10, slice: [0 0 0]"),s(`
`),n("span",{class:"token comment"},"// step2. \u62F7\u8D1D\u5143\u7D20\u5230\u65B0\u6570\u7EC4"),s(`
`),n("span",{class:"token function"},"copy"),n("span",{class:"token punctuation"},"("),s("newSlice"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},")"),s("                   "),n("span",{class:"token comment"},"// len: 3, cap: 10, newSlice: [1 2 3]"),s(`
`),n("span",{class:"token comment"},"/********************************************************/"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5224\u65AD\u4E24\u4E2A\u5207\u7247\u76F8\u7B49"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"equal"),n("span",{class:"token punctuation"},"("),s("s1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" s2 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("s1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" s1 "),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" s1"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(" s2"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=c(`<p><strong>Api</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// \u957F\u5EA6</span>
<span class="token function">cap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// \u5BB9\u91CF</span>
<span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// \u5206\u914D\u5BB9\u91CF</span>
<span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// \u589E(\u672B\u5C3E)</span>
<span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// \u62F7\u8D1D</span>
slice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>	<span class="token comment">// \u5207\u7247</span>
</code></pre></div><h3 id="_8-map-\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#_8-map-\u54C8\u5E0C\u8868" aria-hidden="true">#</a> 8. Map \u54C8\u5E0C\u8868</h3>`,3),rn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E00\uFF1A\u521D\u59CB\u5316map"),s(`
cityMap `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'"us"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"USA"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token string"},'"fr"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"France"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token string"},'"cn"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"China"'),n("span",{class:"token punctuation"},","),s("	"),n("span",{class:"token comment"},"// \u672B\u5C3E\u52A0\u9017\u53F7\uFF0C\u6216\u8005\u5C06\u5927\u62EC\u53F7\u653E\u5728\u6B64\u884C\uFF01"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E8C\uFF1A\u58F0\u660Emap, \u4F7F\u7528make\u5206\u914D\u7A7A\u95F4"),s(`
m `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

m`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Jame"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"97"),s(`
m`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Amye"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"86"),s(`

`),n("span",{class:"token comment"},"// // \u89E3\u6784: cityMap..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[s("scoreMap "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u5224\u65AD\u5305\u542B"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" ok "),n("span",{class:"token operator"},":="),s(" scoreMap"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(" ok "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u589E \u6539"),s(`
scoreMap`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Jame"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"97"),s(`

`),n("span",{class:"token comment"},"// \u5220"),s(`
`),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),s("scoreMap"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Jame"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// \u67E5"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("scoreMap"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token comment"},"// \u904D\u5386"),s(`

`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" scoreMap "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// statement"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    team `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"float32"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string"},'"P1"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1.98"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"P2"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2.05"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"P3"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1.89"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"P4"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2.0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"P5"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2.11"),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"var"),s(" sum "),n("span",{class:"token builtin"},"float32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" team "),n("span",{class:"token punctuation"},"{"),s(`
        sum `),n("span",{class:"token operator"},"+="),s(` v
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"twoSum"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" target "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},`/*
    for i := range nums {
        for j := i+1; j < len(nums); j++ {
            if(nums[i] + nums[j] == target) {
                return []int {i, j}
            }
        }
    }
    return nil
    */`),s(`

    dict `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" j"),n("span",{class:"token punctuation"},","),s(" ok "),n("span",{class:"token operator"},":="),s(" dict"),n("span",{class:"token punctuation"},"["),s("target "),n("span",{class:"token operator"},"-"),s(" x"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(" ok "),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s("j"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        dict`),n("span",{class:"token punctuation"},"["),s("x"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` i
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("h2",{id:"oop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#oop","aria-hidden":"true"},"#"),s(" OOP")],-1),gn=n("h3",{id:"_9-function-\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-function-\u51FD\u6570","aria-hidden":"true"},"#"),s(" 9. Function \u51FD\u6570")],-1),fn=n("blockquote",null,[n("p",null,"\u503C\u4F20\u9012(\u9ED8\u8BA4): \u6307\u5728\u8C03\u7528\u51FD\u6570\u65F6\u5C06\u5B9E\u9645\u53C2\u6570\u590D\u5236\u4E00\u4EFD\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF0C\u8FD9\u6837\u5728\u51FD\u6570\u4E2D\u5982\u679C\u5BF9\u53C2\u6570\u8FDB\u884C\u4FEE\u6539\uFF0C\u5C06\u4E0D\u4F1A\u5F71\u54CD\u5230\u5B9E\u9645\u53C2\u6570"),n("p",null,"\u5F15\u7528\u4F20\u9012(\u6307\u9488): \u6307\u5728\u8C03\u7528\u51FD\u6570\u65F6\u5C06\u5B9E\u9645\u53C2\u6570\u7684\u5730\u5740\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF0C\u90A3\u4E48\u5728\u51FD\u6570\u4E2D\u5BF9\u53C2\u6570\u6240\u8FDB\u884C\u7684\u4FEE\u6539\uFF0C\u5C06\u5F71\u54CD\u5230\u5B9E\u9645\u53C2\u6570")],-1),hn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token operator"},"..."),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	total `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
		total `),n("span",{class:"token operator"},"+="),s(` v
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` total
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},"}"),s(`

	res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// 20"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" y"),n("span",{class:"token punctuation"},","),s(` x
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    a`),n("span",{class:"token punctuation"},","),s("b "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"swap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_n=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5173\u95ED\u6587\u4EF6\u3001\u5783\u573E\u6E05\u7406\uFF0C Stack \u5806\u7ED3\u6784\uFF1A\u540E\u8FDB\u5148\u51FA"),s(`
`),n("span",{class:"token comment"},"// \u6267\u884C\u65F6\u673A\uFF1Adefer\u6808\u5148\u8FDB\u540E\u51FA\uFF0C\u5728return\u4E4B\u540E\u6267\u884C\uFF0C\u4F46\u5728\u51FD\u6570\u9000\u51FA\u4E4B\u524D"),s(`
`),n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Welcome"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"//\u76F4\u5230main\u5B8C\u6210\u65F6\u6267\u884C\uFF0C\u7136\u540E\u8C03\u7528\u5B83"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hey"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
 * Hey
 * Welcome
 */`),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},")"),s(`

   `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token keyword"},"defer"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"//\u540E\u8FDB\u5148\u51FA"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
   fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"end"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
* start
* 2
* 1
* end
*/`),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"return"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"deferDemo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"end"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"deferDemo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"defer1"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		i `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"defer2"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` i
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
start
defer2
defer1
return 0
end
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Sn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"intSeq"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
		i`),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token keyword"},"return"),s(` i
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nextInt `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"intSeq"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"nextInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 1"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"nextInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 2"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"nextInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3"),s(`

	newInts `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"intSeq"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"newInts"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Hello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"coulson"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"Hello"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token builtin"},"print"),s(),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"..."),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello %s"'),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"print"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cn=c(`<p>For Example</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u9636\u4E58 n!</span>
<span class="token keyword">func</span> <span class="token function">fact</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fact</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6590\u6CE2\u90A3\u5951\u989D\u6570\u5217\u6C42\u548C</span>
<span class="token keyword">var</span> fib <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-structs-\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_10-structs-\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 10. Structs \u7ED3\u6784\u4F53</h3><blockquote><p>\u4E0D\u540C\u7C7B\u578B\u6216\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u96C6</p></blockquote>`,4),Tn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Tom"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},"}"),s(`
	s`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// "Tom"'),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// 8"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},'// {"Tom", 8}'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Name   `),n("span",{class:"token builtin"},"string"),s(`
	Age    `),n("span",{class:"token builtin"},"int"),s(`
	Gender `),n("span",{class:"token builtin"},"bool"),s(`
	Score  `),n("span",{class:"token builtin"},"float64"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E00"),s(`
	`),n("span",{class:"token keyword"},"var"),s(` person Person
	person`),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),s(`
	person`),n("span",{class:"token punctuation"},"."),s("Age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("person"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {John 20 false 0}"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E8C"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" p3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),s("Person"),n("span",{class:"token punctuation"},")"),s(`
	p3`),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p3"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {John 20 false 0}"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E09\uFF1A\u5FC5\u987B\u8981\u5199\u5168\uFF01"),s(`
	p1 `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"97.2"),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {John 20 true 97.2}"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u56DB(\u63A8\u8350)"),s(`
	p2 `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s("Name"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(" Age"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"}"),s(`
	p2`),n("span",{class:"token punctuation"},"."),s("Score "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"97.2"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p2"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {John 20 false 97.2}"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E94(\u63A8\u8350)"),s(`
	p4 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("Person"),n("span",{class:"token punctuation"},"{"),s("Score"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"97.2"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// var p4 = &Person{Score: 97.2}"),s(`
	p4`),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"John"'),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p4"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {John 20 false 97.2}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Nn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"hello"),n("span",{class:"token punctuation"},"("),s("s Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d\\n"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d\\n"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d\\n"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"James"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// \u7ED3\u6784\u4F53\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570"),s(`
	`),n("span",{class:"token function"},"hello"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// `\u7ED3\u6784\u4F53`.\u65B9\u6CD5()"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// \u4F7F\u7528\u6307\u9488\u4F5C\u4E3A\u63A5\u6536\u8005\u4FEE\u6539\u7ED3\u6784\u4F53\u7684\u6570\u636E"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	cat `),n("span",{class:"token operator"},":="),s(" Cat"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
	cat`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Tim"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Animal "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Name `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// private method"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("a Animal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Good Morning! %s \\n"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Cat "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Animal `),n("span",{class:"token comment"},"// \u7EE7\u627F"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Method Rewriting"),s(`
`),n("span",{class:"token comment"},"// \u5B50\u7C7B\u91CD\u5199\u7236\u7C7B\u65B9\u6CD5(\u65B9\u6CD5\u540D\u3001\u53C2\u6570\u90FD\u76F8\u540C)"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("c Cat"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u8C03\u7528\u7236\u7C7B \u5B57\u6BB5/\u65B9\u6CD5"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},"."),s("Animal"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},")"),s(`
	c`),n("span",{class:"token punctuation"},"."),s("Animal"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Nice to meet you! %s \\n"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),In=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Good Morning! %s \\n"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token operator"},"*"),s(`Person
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
	p`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Good Morning! John"),s(`

	s `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"&"),s("Person"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Good Morning! John"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Name `),n("span",{class:"token builtin"},"string"),s(`
	Age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	person `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("Person"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// \u533F\u540D\u7ED3\u6784\u4F53"),s(`
	student `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
		score   `),n("span",{class:"token builtin"},"float64"),s(`
		class   `),n("span",{class:"token builtin"},"int"),s(`
		persons Person
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token number"},"97.2"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token operator"},"*"),s("person"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%+v"'),n("span",{class:"token punctuation"},","),s(" student"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// Output: {score:97.2 class:7 persons:{Name:John Age:20}}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token comment"},"// \u5B57\u6BB5/\u65B9\u6CD5\u5927\u5199\uFF1Apublic, \u5C0F\u5199\uFF1Aprivate"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// getter"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("this "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" this"),n("span",{class:"token punctuation"},"."),s(`name
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// setter"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("this "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"SetName"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	this`),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(` name
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// toString"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("this "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name = %s, age = %d\\n"'),n("span",{class:"token punctuation"},","),s(" this"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" this"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Person  `),n("span",{class:"token comment"},"// \u7EE7\u627F"),s(`
	level `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u65B9\u6CD5\u91CD\u5199"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("this "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name = %s, age = %d, level = %d\\n"'),n("span",{class:"token punctuation"},","),s(" this"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" this"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},","),s(" this"),n("span",{class:"token punctuation"},"."),s("level"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u5B50\u7C7B\u65B0\u65B9\u6CD5"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("this "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetLeavel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" this"),n("span",{class:"token punctuation"},"."),s(`level
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Tom"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// \u58F0\u660E\u5B50\u7C7B"),s(`
	s `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"23"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),En=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(` val
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("ptr "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	ptr`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(` val
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E00"),s(`
	s `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Jame"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"}"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"welcome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// "Jame", 20'),s(`

	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 20"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 24"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E8C\uFF1A\u6307\u9488"),s(`
	s2 `),n("span",{class:"token operator"},":="),s(" Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Tom"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},"}"),s(`
	ptr2 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s(`s2

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("ptr2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// {"Tom", 16}'),s(`
	ptr2`),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Coulson"'),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// {"Coulson", 16}'),s(`
	ptr2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// {"Coulson", 16}'),s(`
	ptr2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// {"Coulson", 20}'),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E09\uFF1A\u5185\u5B58\u5730\u5740"),s(`
	s3 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("Student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Yalo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("s3"),n("span",{class:"token punctuation"},")"),s(`
	s3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("s3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"//{Yalo 16}"),s(`
	s3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("s3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// {Yalo 20}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Car "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    color `),n("span",{class:"token builtin"},"string"),s(`
    brand `),n("span",{class:"token builtin"},"string"),s(`
    year `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("ptr "),n("span",{class:"token operator"},"*"),s("Car"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ptr`),n("span",{class:"token punctuation"},"."),s("color "),n("span",{class:"token operator"},"="),s(` c
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"Cat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"white"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Ferrari"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"//\u521B\u5EFA\u7C7B\u5BF9\u8C61"),s(`
    `),n("span",{class:"token comment"},'// c := Cat(color:"white", brand:"Ferrari", year:"2"}'),s(`
    `),n("span",{class:"token comment"},'// c := &Cat("white", "Ferrari", "2"}'),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},"."),s("color"),n("span",{class:"token punctuation"},")"),s(`
    c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"blue"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Cart "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	prices `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"float32"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	c `),n("span",{class:"token operator"},":="),s(" Cart"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" n "),n("span",{class:"token builtin"},"int"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("n"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"var"),s(" num "),n("span",{class:"token builtin"},"float32"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("num"),n("span",{class:"token punctuation"},")"),s(`
		c`),n("span",{class:"token punctuation"},"."),s("prices "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},"."),s("prices"),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("x Cart"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" sum "),n("span",{class:"token builtin"},"float32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" x"),n("span",{class:"token punctuation"},"."),s("prices "),n("span",{class:"token punctuation"},"{"),s(`
		sum `),n("span",{class:"token operator"},"+="),s(` v
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("sum"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Jn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"type"),s(" BarData "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Type     `),n("span",{class:"token builtin"},"string"),s("      "),n("span",{class:"token string"},'`json:"type"`'),s(`
	Data     `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("       "),n("span",{class:"token string"},'`json:"data"`'),s(`
	AxisLine `),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token string"},'`json:"axisLine"`'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),On=c(`<h3 id="_11-interface-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_11-interface-\u63A5\u53E3" aria-hidden="true">#</a> 11. Interface \u63A5\u53E3</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> geometry <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
	<span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	width<span class="token punctuation">,</span> height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	radius <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">measure</span><span class="token punctuation">(</span>g geometry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> rect<span class="token punctuation">{</span>width<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
	c <span class="token operator">:=</span> circle<span class="token punctuation">{</span>radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span>

	<span class="token function">measure</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
	<span class="token function">measure</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-pointer-\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_12-pointer-\u6307\u9488" aria-hidden="true">#</a> 12. Pointer \u6307\u9488</h3><blockquote><p>\u6D45\u62F7\u8D1D: \u4FEE\u6539\u5176\u4E2D\u4E00\u4E2A\uFF0C\u53E6\u4E00\u4E2A\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TIP</p><div class="language-text ext-text"><pre class="language-text"><code>1. \u53D8\u91CF
\u5168\u5C40\u53D8\u91CF: \u4F7F\u7528\u65E0\u53C2\u65B9\u6CD5\u4FEE\u6539
\u5C40\u90E8\u53D8\u91CF: \u4F7F\u7528\u6307\u9488\u4FEE\u6539
2. \u51FD\u6570\u5185\u7684\u53C2\u6570
\u5C40\u90E8\u4F5C\u7528\u57DF, \u6808\u5185\u5B58
3. \u7ED3\u6784\u4F53\u7684\u6570\u636E
\u4F7F\u7528\u6307\u9488\u4FEE\u6539
</code></pre></div></div>`,5),Bn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),s(`
	p `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s(`x
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc000018080, \u91CD\u65B0\u8FD0\u884C\u7A0B\u5E8F\u5185\u5B58\u5730\u5740\u4F1A\u4E0D\u65AD\u53D8\u5316"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// 0xc000018080"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc00000e028"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 12"),s(`

	x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc000018080"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// 0xc000018080"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc00000e028"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 14"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" input "),n("span",{class:"token builtin"},"string"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scanln"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("input"),n("span",{class:"token punctuation"},")"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),Ln=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("val "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	val `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),s("ptr "),n("span",{class:"token operator"},"*"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token operator"},"*"),s("ptr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	x `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),s(`

	`),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 12"),s(`

	`),n("span",{class:"token function"},"set_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 8"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u4F7F\u7528\u6307\u9488\u4FEE\u6539\u7ED3\u6784\u4F53\u4E2D\u7684\u6570\u636E"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("Student"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("student"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"john"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"}"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("s"),n("span",{class:"token punctuation"},")"),s("     	"),n("span",{class:"token comment"},"//  {john 20}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s("      	"),n("span",{class:"token comment"},"// &{john 20}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// john"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(" 	"),n("span",{class:"token comment"},"// john"),s(`

	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 20"),s(`
	s`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"change_ptr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 21"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=c(`<h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts" aria-hidden="true">#</a> Basic Concepts</h2><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 1. import single package</span>
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 2. import multiple package</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
	<span class="token string">&quot;[your-project]/config&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u8BE6\u60C5</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 1. import single package</span>
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 2.1 import multiple packages</span>
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;time&quot;</span>

<span class="token comment">// 2.2</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 2.3</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
	<span class="token string">&quot;[your-project]/config&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// a single comment</span>

<span class="token comment">/*
This is a multi-line comment
*/</span>

<span class="token comment">/**
 * @author
 * @version
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h3>`,7),zn={href:"https://pkg.go.dev/cmd",target:"_blank",rel:"noopener noreferrer"},Qn=s("golang \u6A21\u5757"),Vn=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bgo\u7248\u672C</span>
go version

<span class="token comment"># \u73AF\u5883\u53D8\u91CF</span>
go <span class="token function">env</span>

<span class="token comment"># \u66F4\u6539\u4E3A\u56FD\u5185\u4EE3\u7406(go get\u5931\u8D25\u65F6)</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct

<span class="token comment"># \u65B0\u9879\u76EE\u521D\u59CB\u5316</span>
go mod init <span class="token operator">&lt;</span>project name<span class="token operator">&gt;</span>

<span class="token comment"># \u4F9D\u8D56\u5305\u81EA\u52A8\u7BA1\u7406</span>
go mod tidy

<span class="token comment"># \u8FD0\u884Cmain\u7A0B\u5E8F</span>
go run main.go

<span class="token comment"># \u7F16\u8BD1</span>
go build -o hello.go

<span class="token comment"># \u4EE3\u7801\u683C\u5F0F\u5316(git push\u524D)</span>
go <span class="token function">fmt</span>

<span class="token comment"># \u6D4B\u8BD5</span>
go <span class="token builtin class-name">test</span>

<span class="token comment"># \u68C0\u67E5Go\u6E90\u4EE3\u7801\u5E76\u62A5\u544A\u53EF\u7591\u60C5\u51B5</span>
go vet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Arithmetic Operators: + - * / %</span>
<span class="token comment">//Assignment Operators: += -= *= /= %=</span>
<span class="token comment">//Logical Operators: &amp;&amp; || !</span>
<span class="token comment">//Relational Operators: == != &lt; &gt; &lt;= &gt;=</span>
<span class="token comment">//\u4F4D\u8FD0\u7B97: &amp; | ^</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isEven</span><span class="token punctuation">(</span> num <span class="token builtin">int</span> <span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">// return num % 2 == 0</span>
    <span class="token keyword">return</span> num <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="control" tabindex="-1"><a class="header-anchor" href="#control" aria-hidden="true">#</a> Control</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>if/switch statement: \u5C40\u90E8\u53D8\u91CF\u4F5C\u7528\u57DF</li><li>switch statement: \u6761\u4EF6\u5224\u65AD</li><li>for loop: \u63A8\u8350range\u5199\u6CD5, \u53EF\u5FFD\u7565</li><li>while loop: \u4F7F\u7528for\u4EE3\u66FF</li></ol></div><h3 id="statement" tabindex="-1"><a class="header-anchor" href="#statement" aria-hidden="true">#</a> Statement</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><blockquote><p>\u6CE8\u610F\u53D8\u91CF\u4F5C\u7528\u57DF, \u5728 condition \u4E2D\u58F0\u660E\u5916\u90E8\u65E0\u6CD5\u8BBF\u95EE\uFF01</p></blockquote></div>`,8),$n=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"if"),s(" x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},";"),s(" x "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"18"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(" x "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"18"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// fmt.Println(x) // error: undefined: x"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0")])],-1),Yn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[s("x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"8"),s(`
`),n("span",{class:"token keyword"},"switch"),s(" y "),n("span",{class:"token operator"},":="),s(" x"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" y "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"//statement(s)        //\u4E0D\u9700\u8981break"),s(`
	`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},":"),s(`
		`),n("span",{class:"token comment"},"//statement(s)"),s(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"//statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),Xn=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"/* switch\u7248\u7684 if statement */"),s(`
x `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"2"),s(`
`),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"case"),s(" x"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" x"),n("span",{class:"token operator"},"<"),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"//statement(s)"),s(`
    `),n("span",{class:"token keyword"},"case"),s(" x"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"//statement(s)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//  fallthrough: \u6267\u884C\u591A\u4E2Acase\uFF1B\u9ED8\u8BA4\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A\uFF0C\u4E0D\u9700\u8981break\uFF0C\u652F\u6301\u591A\u6761\u4EF6\u5339\u914D"),s(`
`)])])],-1),Zn=c(`<h3 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// golang \u4E0D\u652F\u6301\u8BE5\u5199\u6CD5</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token comment">// \u652F\u6301\u4EE5\u4E0B\u5199\u6CD5</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token punctuation">,</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre></div></div>`,2),Kn=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8BFB\u53D6 key \u548C value"),s(`
`),n("span",{class:"token keyword"},"for"),s(" i"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u4EC5\u8BFB\u53D6 key"),s(`
`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u4EC5\u8BFB\u53D6 value"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ns=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"/* for\u7248\u7684while */"),s(`
sum `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"1"),s(`
res `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token keyword"},"for"),s(" sum "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res `),n("span",{class:"token operator"},"+="),s(` sum
    sum`),n("span",{class:"token operator"},"++"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s("    "),n("span",{class:"token comment"},"//500500"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br")])],-1),ss=c(`<h2 id="\u9AD8\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5E76\u53D1" aria-hidden="true">#</a> \u9AD8\u5E76\u53D1</h2><h3 id="goroutine-\u534F\u7A0B" tabindex="-1"><a class="header-anchor" href="#goroutine-\u534F\u7A0B" aria-hidden="true">#</a> Goroutine \u534F\u7A0B</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,3),as=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// No Output\uFF0C \u56E0\u4E3A\u4E3B\u7EBF\u7A0Bmain()\u4E8Ego\u5B50\u7EBF\u7A0B\u5E76\u53D1\u5B8C\u6210\u524D\u9000\u51FA\u4E86"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ts=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// \u5B50\u7EBF\u7A0B"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// \u5B50\u7EBF\u7A0B"),s(`
	time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"500"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Millisecond"),n("span",{class:"token punctuation"},")"),s("	"),n("span",{class:"token comment"},"// \u624B\u52A8\u63A7\u5236 \u4E3B\u7EBF\u7A0B \u7B49\u5F85\u65F6\u95F4"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),es=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	ch `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello World!"'),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token operator"},"<-"),s(`ch
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	ch`),n("span",{class:"token operator"},"<-"),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),os=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),s("start"),n("span",{class:"token punctuation"},","),s(" end "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" start"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" end"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Millisecond"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// \u5FC5\u987B, \u6CA1\u6709\u505C\u987F\u4F1A\u5BFC\u81F4\u4E3B\u7EBF\u7A0B\u7ED3\u675F\u540E\u5B50\u7EBF\u7A0B\u4E5F\u5168\u90E8\u505C\u6B62"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u4F7F\u7528\u7BA1\u9053\u4FBF\u4E0D\u9700\u8981sleep\uFF0C\u65E0\u9700\u8BA1\u7B97\u7B49\u5F85main()\u4F55\u65F6\u9000\u51FA"),s(`
	ch `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// \u591A\u7EBF\u7A0B\u5F02\u6B65\u65B9\u6CD5\uFF0C\u540C\u65F6\u6267\u884C\u591A\u4E2A\u4EFB\u52A1"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(" ch"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"out"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(" ch"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token operator"},"<-"),s(`ch
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
0
6
7
1
2
8
9
3
4
10
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	cnt `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" target "),n("span",{class:"token operator"},"=="),s(" v "),n("span",{class:"token punctuation"},"{"),s(`
			cnt`),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` cnt
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"//var input int"),s(`
	`),n("span",{class:"token comment"},"//fmt.Scanln(&input)"),s(`
	input `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),s(`

	ch1 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	ch2 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" ch1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" ch2"),n("span",{class:"token punctuation"},")"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("ch1 "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token operator"},"<-"),s("ch2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ps=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(" i "),n("span",{class:"token operator"},"*"),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	evenCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	sqCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" evenCh"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" sqCh"),n("span",{class:"token punctuation"},")"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("evenCh "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token operator"},"<-"),s("sqCh"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Output: 173250"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ls=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(" i "),n("span",{class:"token operator"},"*"),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	evenCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	sqCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" evenCh"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" sqCh"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"//fmt.Println(<-evenCh + <-sqCh)"),s(`

	`),n("span",{class:"token comment"},"// \u53EA\u9009\u62E9\u6267\u884C\u5176\u4E2D\u4E00\u4E2A"),s(`
	`),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"case"),s(" x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("evenCh"),n("span",{class:"token punctuation"},":"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"case"),s(" y "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("sqCh"),n("span",{class:"token punctuation"},":"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Output: 173250"),s(`

`),n("span",{class:"token comment"},"// New Output: 171700"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),is=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	cnt `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" nums "),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" target "),n("span",{class:"token operator"},"=="),s(" v "),n("span",{class:"token punctuation"},"{"),s(`
			cnt`),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` cnt
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"//var input int"),s(`
	`),n("span",{class:"token comment"},"//fmt.Scanln(&input)"),s(`
	input `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"12"),s(`

	ch1 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	ch2 `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" ch1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" ch2"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"//fmt.Println(<-ch1 + <-ch2)"),s(`
	`),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"case"),s(" x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("ch1"),n("span",{class:"token punctuation"},":"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"case"),s(" y "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("ch2"),n("span",{class:"token punctuation"},":"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),s("from"),n("span",{class:"token punctuation"},","),s(" to "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(" ch "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	result `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(" from"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" to"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" i"),n("span",{class:"token operator"},"%"),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"+="),s(" i "),n("span",{class:"token operator"},"*"),s(` i
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	ch `),n("span",{class:"token operator"},"<-"),s(` result
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	evenCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	sqCh `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"evenSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" evenCh"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token function"},"squareSum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(" sqCh"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"//fmt.Println(<-evenCh + <-sqCh)"),s(`

	`),n("span",{class:"token comment"},"// \u53EA\u9009\u62E9\u6267\u884C\u5176\u4E2D\u4E00\u4E2A"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"case"),s(" x "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("evenCh"),n("span",{class:"token punctuation"},":"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"return"),s(`
		`),n("span",{class:"token keyword"},"case"),s(" y "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("sqCh"),n("span",{class:"token punctuation"},":"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"return"),s(`
		`),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Nothing available"'),n("span",{class:"token punctuation"},")"),s(`
			time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Millisecond"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// \u963B\u6B62\u6B7B\u9501"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
Nothing available
2550
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ks=c(`<h3 id="channel-\u7BA1\u9053\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#channel-\u7BA1\u9053\u901A\u4FE1" aria-hidden="true">#</a> Channel \u7BA1\u9053\u901A\u4FE1</h3><p><strong>1.\u521B\u5EFA\u7BA1\u9053</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u65E0\u7F13\u5B58\u901A\u9053 (\u9ED8\u8BA4\u4E3A0)</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// \u5E26\u7F13\u5B58\u901A\u9053</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>2.\u53D1\u9001\u6570\u636E</strong></p><div class="language-go ext-go"><pre class="language-go"><code>ch <span class="token operator">&lt;-</span> <span class="token number">8</span>
</code></pre></div><p><strong>3.\u63A5\u6536\u6570\u636E</strong></p><div class="language-go ext-go"><pre class="language-go"><code>msg <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token operator">&lt;-</span>ch
</code></pre></div><p><strong>4.\u5173\u95ED\u901A\u9053</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token string">&quot;fmt&quot;</span><span class="token punctuation">;</span> <span class="token string">&quot;time&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">out</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> to <span class="token builtin">int</span><span class="token punctuation">,</span> ch <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span>from<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>to<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    ch <span class="token operator">&lt;-</span> <span class="token boolean">true</span>   <span class="token comment">//return true</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>ch
<span class="token punctuation">}</span>

<span class="token comment">//\u5E76\u53D1\uFF0C\u4E0D\u8FDE\u7EED\u8F93\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-\u591A\u7BA1\u9053\u5E76\u53D1\u7B49\u5F85" tabindex="-1"><a class="header-anchor" href="#select-\u591A\u7BA1\u9053\u5E76\u53D1\u7B49\u5F85" aria-hidden="true">#</a> Select \u591A\u7BA1\u9053\u5E76\u53D1\u7B49\u5F85</h3><p><strong>select</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// select: \u7B49\u5F85\u591A\u4E2A\u901A\u9053, \u53EA\u968F\u673A\u6267\u884C\u5176\u4E2D\u4E00\u4E2A</span>
<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span> ch1<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received from ch1&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span> ch2<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received from ch2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>for</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// for: \u7B49\u5F85\u5176\u4E2D\u4E00\u4E2A\u901A\u9053\u63A5\u6536\u6570\u636E, \u6CA1\u6709\u901A\u9053\u51C6\u5907\u65F6\u6267\u884Cdefault, \u9700\u907F\u514D\u6B7B\u9501</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> x <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received from ch1&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// \u83B7\u53D6\u5230\u6570\u636E\u540E\u9000\u51FAfor\u5FAA\u73AF</span>
			<span class="token keyword">return</span>
		<span class="token keyword">case</span> y <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received from ch2&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token comment">// \u6CA1\u6709\u901A\u9053\u51C6\u5907\u65F6\u6267\u884Cdefault, \u907F\u514D\u6B7B\u9501</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Nothing available&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// \u907F\u514D\u6B7B\u9501</span>
			time<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">evenSum</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> to <span class="token builtin">int</span><span class="token punctuation">,</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span>from<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>to<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            result <span class="token operator">+=</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    ch <span class="token operator">&lt;-</span> result
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">squareSum</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> to <span class="token builtin">int</span><span class="token punctuation">,</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span>from<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>to<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            result <span class="token operator">+=</span> i<span class="token operator">*</span>i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    ch <span class="token operator">&lt;-</span> result
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    evenCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    sqCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token function">evenSum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> evenCh<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">squareSum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> sqCh<span class="token punctuation">)</span>

    <span class="token comment">//\u5FAA\u73AF\u7B49\u5F85\u63A5\u6536\u6570\u636E\u7684\u7BA1\u9053\u4F20\u8F93\u4E4B\u4E00</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> x <span class="token operator">:=</span> <span class="token operator">&lt;-</span> evenCh<span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token keyword">case</span> y <span class="token operator">:=</span> <span class="token operator">&lt;-</span> sqCh<span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token comment">//\u5F53\u7BA1\u9053\u6CA1\u6709\u51C6\u5907\u597D\u65F6\uFF0C\u5B83\u5C06\u6267\u884C</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Nothing available&quot;</span><span class="token punctuation">)</span>
                time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">50</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Nothing available
171700
*/</span>



<span class="token comment">/*
select {
    case x := &lt;- evenCh:
        fmt.Println(x)
    case y := &lt;- sqCh:
        fmt.Println(y)

171700
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="error-\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#error-\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> Error \u5F02\u5E38\u5904\u7406</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Sqrt</span><span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> f <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;math: square root of negative number&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5B9E\u73B0</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>sqlite<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;test.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="go-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#go-\u7B80\u4ECB" aria-hidden="true">#</a> GO \u7B80\u4ECB</h3><div class="language-text ext-text"><pre class="language-text"><code>Go \u4E0D\u5141\u8BB8\u5BFC\u5165\u672A\u88AB\u4F7F\u7528\u7684\u5305\uFF0C\u4EE5\u907F\u514D\u5C06\u672A\u4F7F\u7528\u7684\u4EE3\u7801\u94FE\u63A5\u5230\u7A0B\u5E8F\u91CC\u800C\u9020\u6210\u7684\u4E0D\u5FC5\u8981\u7684\u81A8\u80C0
Go \u662F\u4E00\u79CD\u7528\u4E8E\u7F16\u5199\u7CFB\u7EDF\u7684\u8BED\u8A00
\u8BE5\u8BED\u8A00\u672C\u8EAB\u7684\u4E3B\u8981\u4E0D\u5BFB\u5E38\u5C5E\u6027\u2014\u2014\u5E76\u53D1\u6027\u2014\u2014\u89E3\u51B3\u4E86 2010 \u5E74\u4EE3\u591A\u6838 CPU \u6FC0\u589E\u6240\u51FA\u73B0\u7684\u95EE\u9898\u3002\u4F46\u66F4\u91CD\u8981\u7684\u662F\u4E3A\u8F6F\u4EF6\u5F00\u53D1\u4E16\u754C\u7684\u6253\u5305\u3001\u4F9D\u8D56\u5173\u7CFB\u3001\u6784\u5EFA\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u548C\u5176\u4ED6\u65E5\u5E38\u4EFB\u52A1\u5EFA\u7ACB\u57FA\u7840\u7684\u65E9\u671F\u5DE5\u4F5C\uFF0C\u8FD9\u4E9B\u65B9\u9762\u901A\u5E38\u5728\u8BED\u8A00\u8BBE\u8BA1\u4E2D\u5E76\u4E0D\u91CD\u8981
\u4E0D\u662F\u6BCF\u4E2A\u4EBA\u90FD\u559C\u6B22\u2014\u2014\u4F8B\u5982\uFF0C\u6709\u4E9B\u4EBA\u53CD\u5BF9\u8FD9\u79CD\u8BED\u8A00\u7701\u7565\u4E86\u7EE7\u627F\u548C\u6CDB\u578B\u7C7B\u578B\u7B49\u5E38\u89C1\u7684\u7279\u6027\u3002\u4F46\u662F Go \u4EE5\u5F00\u53D1\u4E3A\u4E2D\u5FC3\u7684\u7406\u5FF5\u8DB3\u591F\u6709\u8DA3\u548C\u6709\u6548\uFF0C\u4EE5\u81F3\u4E8E\u793E\u533A\u5728\u4FDD\u6301\u6700\u521D\u63A8\u52A8 Go \u5B58\u5728\u7684\u6838\u5FC3\u539F\u5219\u7684\u540C\u65F6\u84EC\u52C3\u53D1\u5C55\u3002\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u8981\u5F52\u529F\u4E8E\u8BE5\u793E\u533A\u53CA\u5176\u6784\u5EFA\u7684\u6280\u672F\uFF0CGo \u73B0\u5728\u5DF2\u6210\u4E3A\u73B0\u4EE3\u4E91\u8BA1\u7B97\u73AF\u5883\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002
</code></pre></div><h3 id="\u5982\u4F55\u67E5\u770B-go-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u67E5\u770B-go-\u7248\u672C" aria-hidden="true">#</a> \u5982\u4F55\u67E5\u770B Go \u7248\u672C \uFF1F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go version
go version go1.17.7 darwin/amd64
</code></pre></div><h3 id="\u5982\u4F55-\u5B89\u88C5\u4E0D\u540C\u7684-go-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55-\u5B89\u88C5\u4E0D\u540C\u7684-go-\u7248\u672C" aria-hidden="true">#</a> \u5982\u4F55 \u5B89\u88C5\u4E0D\u540C\u7684 Go \u7248\u672C \uFF1F</h3><blockquote><p>\u65B9\u5F0F\u4E00\uFF1Agvm \u65B9\u5F0F\u4E8C: Goland \u4E2D\u5378\u8F7D gdk (\u63A8\u8350)</p></blockquote><ol><li>install gvm</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> -sSL https://github.com/soulteary/gvm/raw/master/binscripts/gvm-installer <span class="token operator">|</span> <span class="token function">bash</span>
Cloning from https://github.com/soulteary/gvm.git to /Users/coulsonzero/.gvm
Created profile <span class="token keyword">for</span> existing <span class="token function">install</span> of Go at <span class="token string">&quot;/usr/local/go&quot;</span>
Installed GVM v1.0.24

Please restart your terminal session or to get started right away run
 <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">source</span> /Users/coulsonzero/.gvm/scripts/gvm<span class="token variable">\`</span></span>
</code></pre></div><ol start="2"><li>source terminal</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">source</span> /Users/coulsonzero/.gvm/scripts/gvm
<span class="token comment"># or \u91CD\u65B0\u6253\u5F00\u7EC8\u7AEF</span>
</code></pre></div><ol start="3"><li>install go version</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ gvm <span class="token function">install</span> go1.18.3 -B     <span class="token comment"># \u672C\u5730\u7F16\u8BD1(\u4E0D\u60F3\u4E0B\u8F7D\u9884\u7F16\u8BD1\u597D\u7684\u5185\u5BB9)\u53BB\u6389 \`-B\`\u53C2\u6570,</span>
Installing go1.18.3 from binary <span class="token builtin class-name">source</span>
</code></pre></div><ol start="4"><li>change go version</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362 go \u7248\u672C</span>
$ gvm use go1.18.3
Now using version go1.18.3

<span class="token comment"># \u8BBE\u7F6E go \u9ED8\u8BA4\u7248\u672C</span>
<span class="token comment"># $ gvm use go1.18.3  --default</span>
</code></pre></div><ol start="5"><li>\u67E5\u770B\u5F53\u524D go \u7248\u672C</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go version
go version go1.18.3 darwin/arm64
</code></pre></div><ul><li>\u5982\u4F55\u5378\u8F7D gvm \u6216\u8FDB\u884C\u91CD\u7F6E</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> -rf ~/.gvm

<span class="token comment"># \u7136\u540E\u6E05\u7406 ~/.zshrc \u6216 ~/.bashrc \u6DFB\u52A0\u7684\u5185\u5BB9</span>
</code></pre></div><ul><li>\u5982\u4F55\u89E3\u51B3\u67D0\u4E2A\u7248\u672C\u4E0B\u8F7D\u4E0D\u987A\u5229\u7684\u95EE\u9898</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> -rf ~/.gvm/archive/
</code></pre></div><h3 id="go-vscode-\u7684-package-main-\u7EA2\u8272\u6CE2\u6D6A\u6027\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#go-vscode-\u7684-package-main-\u7EA2\u8272\u6CE2\u6D6A\u6027\u95EE\u9898" aria-hidden="true">#</a> GO vscode \u7684 package main \u7EA2\u8272\u6CE2\u6D6A\u6027\u95EE\u9898</h3><div class="language-text ext-text"><pre class="language-text"><code>1.\u7EC8\u7AEF\u4E0A\u6267\u884C go mod init [\u9879\u76EE\u540D]/[\u76EE\u5F55\u540D]
2.\u5C06\u9879\u76EE\u6587\u4EF6\u5939\u79FB\u52A8\u81F3 GOPATH/src\u4E0B \u4F1A\u81EA\u52A8\u914D\u7F6EMod\u4F9D\u8D56
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
go mod init <span class="token operator">&lt;</span>project name<span class="token operator">&gt;</span>
go get -u github.com/gin-gonic/gin
</code></pre></div><h3 id="main-redeclared-in-this-block" tabindex="-1"><a class="header-anchor" href="#main-redeclared-in-this-block" aria-hidden="true">#</a> main redeclared in this block</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// +build ignore</span>

<span class="token keyword">package</span> main
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br></div></div><h3 id="redis-wrongtype-operation-against-a-key-holding-the-wrong-kind-of-value" tabindex="-1"><a class="header-anchor" href="#redis-wrongtype-operation-against-a-key-holding-the-wrong-kind-of-value" aria-hidden="true">#</a> Redis: WRONGTYPE Operation against a key holding the wrong kind of value</h3><blockquote><p>redis \u4E2D\u5DF2\u7ECF\u5B58\u5728\u540C\u540D\uFF0C\u4F46\u4E0D\u540C\u7C7B\u578B\u7684 key \u503C\uFF0C \u5220\u9664\u6B64 key \u518D\u91CD\u65B0\u6267\u884C\u5373\u53EF</p></blockquote><h3 id="golang-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#golang-\u6CE8\u89E3" aria-hidden="true">#</a> Golang \u6CE8\u89E3 \uFF1F</h3><p><strong>\u65B9\u6CD5\u5F03\u7528</strong></p><blockquote><p>\u5728\u51FD\u6570\u5934\u90E8\u6DFB\u52A0\u6CE8\u91CA: <code>// Deprecated</code> \u53EF\u8868\u793A <code>\u5F03\u7528</code> \u8BE5\u65B9\u6CD5\uFF0C\u4F7F\u7528\u8BE5\u65B9\u6CD5\u65F6\u4F1A\u51FA\u73B0<code>\u5220\u9664\u7EBF</code>.</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// Deprecated</span>
<span class="token keyword">func</span> <span class="token function">Title</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="uint64-\u4E0E-int64-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#uint64-\u4E0E-int64-\u7684\u533A\u522B" aria-hidden="true">#</a> uint64 \u4E0E int64 \u7684\u533A\u522B \uFF1F</h3><blockquote><p>uint \u4E3A\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u53D6\u503C\u8303\u56F4\u4E0D\u540C</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code><span class="token builtin">int8</span><span class="token punctuation">:</span>   <span class="token operator">-</span><span class="token number">128</span> ~ <span class="token number">127</span>
<span class="token builtin">int16</span><span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token number">32768</span> ~ <span class="token number">32767</span>
<span class="token builtin">int32</span><span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token number">2147483648</span> ~ <span class="token number">2147483647</span>
<span class="token builtin">int64</span><span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token number">9223372036854775808</span> ~ <span class="token number">9223372036854775807</span>

<span class="token builtin">uint8</span><span class="token punctuation">:</span>  <span class="token number">0</span> ~ <span class="token number">255</span>
<span class="token builtin">uint16</span><span class="token punctuation">:</span> <span class="token number">0</span> ~ <span class="token number">65535</span>
<span class="token builtin">uint32</span><span class="token punctuation">:</span> <span class="token number">0</span> ~ <span class="token number">4294967295</span>
<span class="token builtin">uint64</span><span class="token punctuation">:</span> <span class="token number">0</span> ~ <span class="token number">18446744073709551615</span>
</code></pre></div><h3 id="golang\u4E2Dstruct\u7684\u63A5\u6536\u8005\u4F7F\u7528\u6307\u9488\u4E0E\u4E0D\u4F7F\u7528\u6307\u9488\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#golang\u4E2Dstruct\u7684\u63A5\u6536\u8005\u4F7F\u7528\u6307\u9488\u4E0E\u4E0D\u4F7F\u7528\u6307\u9488\u7684\u533A\u522B" aria-hidden="true">#</a> golang\u4E2Dstruct\u7684\u63A5\u6536\u8005\u4F7F\u7528\u6307\u9488\u4E0E\u4E0D\u4F7F\u7528\u6307\u9488\u7684\u533A\u522B \uFF1F</h3><blockquote><p>\u5982\u679C\u60F3\u8981\u4FEE\u6539\u7ED3\u6784\u4F53\u4E2D\u7684\u6570\u636E\uFF0C\u63A5\u6536\u8005\u5E94\u8BE5\u4E3A\u6307\u9488\u7C7B\u578B\uFF0C\u5426\u5219\uFF0C\u63A5\u6536\u8005\u7C7B\u578B\u5C31\u4E3A\u975E\u6307\u9488\u7C7B\u578B</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Inter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Cat<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4FEE\u6539\u7ED3\u6784\u4F53\u6570\u636E\u65E0\u6548</span>
	c<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;cat name is : %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u4EE5\u4FEE\u6539\u7ED3\u6784\u4F53\u6570\u636E</span>
	d<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;dog name is : %s\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> Cat<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span>
	c<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c.Name = &quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>

	d <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span>
	d<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span>
	d<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;d.Name = &quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u6267\u884C\u7ED3\u679C</span>
cat name is <span class="token punctuation">:</span> lisi
c<span class="token punctuation">.</span>Name <span class="token operator">=</span>  zhangsan
dog name is <span class="token punctuation">:</span> lisi
d<span class="token punctuation">.</span>Name <span class="token operator">=</span>  lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="libs-\u6807\u51C6\u5E93" tabindex="-1"><a class="header-anchor" href="#libs-\u6807\u51C6\u5E93" aria-hidden="true">#</a> Libs \u6807\u51C6\u5E93</h2>`,60),rs={href:"https://pkg.go.dev/std",target:"_blank",rel:"noopener noreferrer"},ds=s("golang \u6807\u51C6\u5E93"),ms=c(`<h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;sort&quot;</span>

sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/zhangyunhao116/pdqsort&quot;</span>

pdqsort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
pdqsort<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> ele<span class="token punctuation">)</span>
pdqsort<span class="token punctuation">.</span><span class="token function">SliceIsSorted</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
</code></pre></div>`,3),vs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sort"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"sortNums"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s("			"),n("span",{class:"token comment"},"// {1,2,3,4,5,6}"),s(`
	`),n("span",{class:"token comment"},"// reverseNums(nums)	// {6,5,4,3,2,1}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sortNums"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Ints"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"sortNums2"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sort"),n("span",{class:"token punctuation"},"("),s("sort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IntSlice"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"reverseNums"),n("span",{class:"token punctuation"},"("),s("nums "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sort"),n("span",{class:"token punctuation"},"("),s("sort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Reverse"),n("span",{class:"token punctuation"},"("),s("sort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IntSlice"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` nums
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sort"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Go"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Bravo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Gopher"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Alpha"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Grin"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Delta"'),n("span",{class:"token punctuation"},"}"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Strings"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s("		"),n("span",{class:"token comment"},"// [Alpha Bravo Delta Go Gopher Grin]"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gs=n("p",null,"::: pdq \u6392\u5E8F",-1),fs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"github.com/zhangyunhao116/pdqsort"'),s(`
	`),n("span",{class:"token string"},'"runtime"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Version"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},"}"),s(`

	pdqsort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sort_reslut = %v\\n"'),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token punctuation"},")"),s(`

	searchResult `),n("span",{class:"token operator"},":="),s(" pdqsort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Search"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("searchResult"),n("span",{class:"token punctuation"},")"),s(`

	isSort `),n("span",{class:"token operator"},":="),s(" pdqsort"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SliceIsSorted"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("isSort"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hs=n("p",null,":::",-1),ys=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sort"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Student "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name `),n("span",{class:"token builtin"},"string"),s(`
	age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ByAge implements sort.Interface for []Person based on"),s(`
`),n("span",{class:"token keyword"},"type"),s(" ByAge "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`Student

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("a ByAge"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Len"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s("           "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("a ByAge"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Swap"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token punctuation"},"{"),s(" a"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" a"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("a ByAge"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Less"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"<"),s(" a"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	student `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s("Student"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Bob"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Michael"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"17"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"John"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Jenny"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E00"),s(`
	`),n("span",{class:"token comment"},"// sort.Sort(ByAge(student))"),s(`
	`),n("span",{class:"token comment"},"// \u65B9\u5F0F\u4E8C"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("student"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" student"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"<"),s(" student"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// sort.Slice(student, func(i, j int) bool { return student[i].name < student[j].name })"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("student"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Output: [{Michael 17} {John 22} {Jenny 26} {Bob 31} {John 42}]"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ws=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sort"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	people `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
		Name `),n("span",{class:"token builtin"},"string"),s(`
		Age  `),n("span",{class:"token builtin"},"int"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Gopher"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Alice"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Alice"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"35"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Vera"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"Bob"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"75"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" people"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token operator"},"<"),s(" people"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("Name "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"By name:"'),n("span",{class:"token punctuation"},","),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// By name: [{Alice 55} {Alice 35} {Bob 75} {Gopher 7} {Vera 24}]"),s(`

	sort`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Slice"),n("span",{class:"token punctuation"},"("),s("people"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(" people"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("Age "),n("span",{class:"token operator"},"<"),s(" people"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("Age "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"By age:"'),n("span",{class:"token punctuation"},","),s(" people"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// By age: [{Gopher 7} {Vera 24} {Alice 35} {Alice 55} {Bob 75}]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qs=c(`<h3 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> os</h3><p><strong>\u6587\u4EF6\u64CD\u4F5C</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;os&quot;</span>

<span class="token comment">// \u6253\u5F00\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">// \u5220\u9664\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token comment">// \u4F7F\u7528strings.HasSuffix(f.Name(), &quot;txt&quot;)\u5220\u9664\u6307\u5B9A\u540E\u7F00\u7C7B\u578B\u6587\u4EF6 or \u6570\u7EC4\u5224\u65AD</span>

<span class="token comment">// \u91CD\u547D\u540D\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">Rename</span><span class="token punctuation">(</span>oldpath<span class="token punctuation">,</span> newpath <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BFB\u53D6\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">// \u91CD\u5199\u6587\u4EF6</span>
os<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> perm FileMode<span class="token punctuation">)</span>	<span class="token comment">// FileMode: os.ModePerm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76EE\u5F55\u64CD\u4F5C</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u521B\u5EFA\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">Mkdir</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> perm FileMode<span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u591A\u7EA7\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">MkdirAll</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">,</span> perm FileMode<span class="token punctuation">)</span>

<span class="token comment">// \u5220\u9664\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5207\u6362\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">Chdir</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u4E34\u65F6\u76EE\u5F55\uFF1F</span>
os<span class="token punctuation">.</span><span class="token function">TempDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BFB\u53D6\u76EE\u5F55</span>
os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7A0B\u5E8F\u9000\u51FA</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// defers will not be run when using os.Exit, so this fmt.Println will never be called.</span>
<span class="token comment">// defer fmt.Println(&quot;!&quot;)</span>
os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>Cmd \u547D\u4EE4</strong></p><div class="language-go ext-go"><pre class="language-go"><code>res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ls -a -l -h&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u4F7F\u7528string(res)\u8F93\u51FA</span>
</code></pre></div><details class="custom-container details"><summary>cmd \u793A\u4F8B</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os/exec&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">goCmd3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * go\u7A0B\u5E8F\u6267\u884Ccmd\u547D\u4EE4
 */</span>

<span class="token keyword">func</span> <span class="token function">goCmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B80\u5199</span>
<span class="token keyword">func</span> <span class="token function">goCmd2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5E26\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">goCmd3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	lsOut<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ls -a -l -h&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;&gt; ls -a -l -h: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>lsOut<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0E\u65B9\u6CD53\u76F8\u540C\uFF0C\u6B64\u65B9\u6CD5\u4F1A\u5C06\u76EE\u5F55\u7740\u91CD\u663E\u793A</span>
<span class="token keyword">func</span> <span class="token function">goCmd4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	binary<span class="token punctuation">,</span> lookErr <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">LookPath</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> lookErr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>lookErr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	args <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-l&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-h&quot;</span><span class="token punctuation">}</span>

	env <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Environ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	execErr <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>binary<span class="token punctuation">,</span> args<span class="token punctuation">,</span> env<span class="token punctuation">)</span>
	<span class="token keyword">if</span> execErr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>execErr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>\u76EE\u5F55\u904D\u5386</strong></p><details class="custom-container details"><summary>\u76EE\u5F55\u53CA\u6587\u4EF6\u904D\u5386</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;path/filepath&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> cnt <span class="token builtin">int</span>
<span class="token keyword">var</span> specifiedType <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;py&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;js&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> retainType <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">WalkDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// WalkDir()</span>
	<span class="token comment">// WalkFiles()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WalkDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;/********** Start *********/&quot;</span><span class="token punctuation">)</span>
	cur_dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Walk</span><span class="token punctuation">(</span>cur_dir<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Total count of files: %d.&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u6216\u76EE\u5F55\u4FE1\u606F(\u4E0D\u5305\u542B\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55)</span>
<span class="token keyword">func</span> <span class="token function">Walk</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> dir <span class="token punctuation">{</span>
		file_path <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		cnt<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-4d: %s\\n&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
		<span class="token keyword">if</span> file<span class="token punctuation">.</span><span class="token function">IsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">Walk</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u6216\u76EE\u5F55\u4FE1\u606F\uFF08\u5305\u542B\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6570\u91CF\u8F83\u524D\u8005+1\uFF09</span>
<span class="token keyword">func</span> <span class="token function">WalkDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pwd<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	filepath<span class="token punctuation">.</span><span class="token function">Walk</span><span class="token punctuation">(</span>pwd<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">,</span> info os<span class="token punctuation">.</span>FileInfo<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
		cnt<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-4d: %s\\n&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
		<span class="token comment">// fmt.Println(path) // \u6253\u5370path\u4FE1\u606F</span>
		<span class="token comment">// fmt.Println(info.IsDir())</span>
		<span class="token comment">// fmt.Println(info.Name()) // \u6253\u5370\u6587\u4EF6\u6216\u76EE\u5F55\u540D</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u904D\u5386\u76EE\u5F55\u4E0B\u591A\u6709\u6587\u4EF6(\u4EC5\u6587\u4EF6\uFF0C\u4E0D\u5305\u542B\u76EE\u5F55)</span>
<span class="token keyword">func</span> <span class="token function">WalkFiles</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> dir <span class="token punctuation">{</span>
		file_path <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> file<span class="token punctuation">.</span><span class="token function">IsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">Walk</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cnt<span class="token operator">++</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-4d: %s\\n&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">WalkRemoveFiles</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> dir <span class="token punctuation">{</span>
		file_path <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> file<span class="token punctuation">.</span><span class="token function">IsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">WalkRemoveFiles</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">&quot;txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				cnt<span class="token operator">++</span>
				fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-4d: %s\\n&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
				<span class="token comment">// err := os.Remove(file_path)</span>
				<span class="token comment">// if err != nil {</span>
				<span class="token comment">// 	return</span>
				<span class="token comment">// }</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WalkRemoveFiles2</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	ContainsStr <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
			<span class="token keyword">if</span> v <span class="token operator">==</span> value <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token builtin">print</span> <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>file_path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cnt<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-4d: %s\\n&quot;</span><span class="token punctuation">,</span> cnt<span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
		<span class="token comment">// os.Remove(file_path)</span>
	<span class="token punctuation">}</span>
	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> dir <span class="token punctuation">{</span>
		file_path <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> file<span class="token punctuation">.</span><span class="token function">IsDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">WalkRemoveFiles2</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			arr <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
			file_type <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token keyword">switch</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u4EC5\u4FDD\u7559\u6307\u5B9A\u7C7B\u578B\u6587\u4EF6\uFF0C\u5220\u9664\u7C7B\u578B\u4E3A\u7A7A</span>
			<span class="token keyword">case</span> <span class="token function">len</span><span class="token punctuation">(</span>specifiedType<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>retainType<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">ContainsStr</span><span class="token punctuation">(</span>retainType<span class="token punctuation">,</span> file_type<span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token function">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
			<span class="token comment">// \u4EC5\u5220\u9664\u6307\u5B9A\u7C7B\u578B\u6587\u4EF6\uFF0C\u4FDD\u7559\u7C7B\u578B\u4E3A\u7A7A</span>
			<span class="token keyword">case</span> <span class="token function">len</span><span class="token punctuation">(</span>retainType<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>specifiedType<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ContainsStr</span><span class="token punctuation">(</span>specifiedType<span class="token punctuation">,</span> file_type<span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token function">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
			<span class="token comment">// \u4FDD\u7559\u6307\u5B9A\u7C7B\u578B\u6587\u4EF6\u7684\u540C\u65F6, \u4E14\u5220\u9664\u6307\u5B9A\u7C7B\u578B\u6587\u4EF6</span>
			<span class="token keyword">case</span> <span class="token function">len</span><span class="token punctuation">(</span>retainType<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>specifiedType<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">ContainsStr</span><span class="token punctuation">(</span>retainType<span class="token punctuation">,</span> file_type<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ContainsStr</span><span class="token punctuation">(</span>specifiedType<span class="token punctuation">,</span> file_type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token function">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token comment">// print(file_path)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>For example</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u6587\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">CreateFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u6587\u4EF6</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5220\u9664\u6587\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">RemoveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u547D\u540D\u6587\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">RenameFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">CreateFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Rename</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file.go&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BFB\u53D6\u6587\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u5199\u6587\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">\`
func hello() {
	fmt.Println(&quot;hello&quot;)
}
\`</span>
	os<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;file.go&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>ModePerm<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BFB\u53D6\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> dir <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">CreateDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Mkdir</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>ModePerm<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u591A\u7EA7\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">CreateDirAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">MkdirAll</span><span class="token punctuation">(</span><span class="token string">&quot;test/demo&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>ModePerm<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5220\u9664\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">RemoveDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5207\u6362\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token keyword">func</span> <span class="token function">Chdir</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	os<span class="token punctuation">.</span><span class="token function">Chdir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u4E34\u65F6\u76EE\u5F55\uFF1F</span>
<span class="token keyword">func</span> <span class="token function">TempDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dir <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">TempDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dir: &quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>\u6807\u51C6\u8F93\u5165</strong></p><div class="language-go ext-go"><pre class="language-go"><code>scanner <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewScanner</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
scanner<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><p>For Example</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bufio&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	scanner <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewScanner</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>

	<span class="token keyword">for</span> scanner<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> scanner<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;exit&quot;</span> <span class="token punctuation">{</span>
			os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		ucl <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ucl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> err <span class="token operator">:=</span> scanner<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> strings</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*======== \u67E5 =========*/</span>

<span class="token comment">// \u8FD4\u56DE\u5B50\u4E32\u7D22\u5F15\uFF0C\u4E0D\u5B58\u5728\u8FD4\u56DE-1</span>
strings<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> substr <span class="token builtin">string</span><span class="token punctuation">)</span>

<span class="token comment">/*======== \u5224\u65AD =========*/</span>

<span class="token comment">// \u5305\u542B</span>
strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// endswith</span>
strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// startswith</span>
strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/*======== \u6539\uFF1A\u8F6C\u6362 =========*/</span>

<span class="token comment">// \u6570\u7EC4 -&gt; \u5B57\u7B26\u4E32</span>
strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B57\u7B26\u4E32 -&gt; \u6570\u7EC4</span>
strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u66FF\u6362</span>
strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> old<span class="token punctuation">,</span> <span class="token builtin">new</span> <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>	<span class="token comment">// -1\u4E3A\u5168\u90E8\uFF0C\u7B49\u4EF7\u4E8EReplaceAll()</span>
strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// \u5927\u5C0F\u5199\u8F6C\u6362</span>
strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// strings.Title()		// \u6B64\u65B9\u6CD5\u5DF2\u5F03\u7528</span>
cases<span class="token punctuation">.</span><span class="token function">Title</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>Und<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello, world!&quot;</span><span class="token punctuation">)</span> <span class="token comment">// Hello, World!</span>

<span class="token comment">/*======== \u5220 =========*/</span>

<span class="token comment">// \u79FB\u9664\u7A7A\u683C(\u9996\u5C3E)</span>
strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u79FB\u9664\\n\\t\u7B49\u6362\u884C\u7B26</span>
strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token comment">// \u79FB\u9664\u65E0\u6548\u5B57\u7B26</span>
strings<span class="token punctuation">.</span><span class="token function">TrimFunc</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1\xA1\xA1$6521.123Hello, Gophers!!!&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token builtin">rune</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">!</span>unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>unicode<span class="token punctuation">.</span><span class="token function">IsNumber</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 6521.123Hello, Gophers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unicode" tabindex="-1"><a class="header-anchor" href="#unicode" aria-hidden="true">#</a> unicode</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u5B57\u6BCD(a-z|A-Z)</span>
unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u5341\u8FDB\u5236\u6570\u5B57(0-9)</span>
unicode<span class="token punctuation">.</span><span class="token function">IsDigit</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57(0-9)</span>
unicode<span class="token punctuation">.</span><span class="token function">IsNumber</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u767D\u7B26\u53F7(&#39; &#39;)</span>
unicode<span class="token punctuation">.</span><span class="token function">IsSpace</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3AUnicode\u6807\u70B9\u5B57\u7B26(&#39;;&#39;, &#39;,&#39;, ...)</span>
unicode<span class="token punctuation">.</span><span class="token function">IsPunct</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> math</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// |x|: \u7EDD\u5BF9\u503C</span>
math<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span>x <span class="token builtin">float64</span><span class="token punctuation">)</span>
</code></pre></div><details class="custom-container details"><summary>\u793A\u4F8B</summary><div class="language-go ext-go"><pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">123</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 123</span>
</code></pre></div></details><h3 id="strconv" tabindex="-1"><a class="header-anchor" href="#strconv" aria-hidden="true">#</a> strconv</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	v <span class="token operator">:=</span> <span class="token string">&quot;3.1415926535&quot;</span>
	<span class="token keyword">if</span> s<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T, %v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment">// float64, 3.1415926535</span>
	<span class="token punctuation">}</span>

	v64 <span class="token operator">:=</span> <span class="token string">&quot;-3546343826&quot;</span>
	<span class="token keyword">if</span> s<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>v64<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T, %v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment">// int64, -3546343826</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;time&quot;</span>

<span class="token comment">// field</span>
time<span class="token punctuation">.</span>Millisecond	<span class="token comment">// 1ms</span>
time<span class="token punctuation">.</span>Second 		<span class="token comment">// 1s</span>

<span class="token comment">// methods</span>
time<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u65F6\u95F4\u5E74\u6708\u65E5\u7B49</span>
t<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">Weekday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Saturday</span>
t<span class="token punctuation">.</span><span class="token function">ISOWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// *\u5E74\u7B2C*\u5468</span>

<span class="token comment">// \u683C\u5F0F\u5316\u65F6\u95F4</span>
t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u65F6\u95F4\u52A0\u51CF:</span>
<span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u65F6\u95F4\u6BD4\u8F83:</span>
<span class="token function">Equal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Before</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">After</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7EDF\u8BA1\u8FD0\u884C\u65F6\u95F4</strong></p><blockquote><p>\u81EA\u52A8\u8F6C\u6362<code>\u5355\u4F4D</code>: ms -&gt; s</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code>start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// time.Sleep(600 * time.Millisecond)</span>
end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 606.114625ms</span>
</code></pre></div><blockquote><p>\u7B80\u5199</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code>timeStart <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//...</span>
timeElapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>timeStart<span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v\\n&quot;</span><span class="token punctuation">,</span> timeElapsed<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u683C\u5F0F\u5316\u65F6\u95F4</strong></p><div class="language-go ext-go"><pre class="language-go"><code>t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%02d-%02d %02d:%02d:%02d\\n&quot;</span><span class="token punctuation">,</span>
	t<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">// Output: 2022-06-11 13:02:10</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code>t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
now <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006/01/02 15:04:02 PM Mon Jan&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>\u5B9A\u65F6\u5668(\u95F4\u9694\u8FD0\u884C)</strong></p><div class="language-go ext-go"><pre class="language-go"><code>ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A1\u79D2\u95F4\u9694\u7684\u5B9A\u65F6\u5668</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> ticker <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><p><strong>Api</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;encoding/json&quot;</span>

<span class="token comment">// object =&gt; json</span>
json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// json =&gt; object(map\u3001struct)</span>
json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// read json file to struct</span>
json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre></div>`,41),_s=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// object -> json"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"objectToJson"),n("span",{class:"token punctuation"},"("),s("obj "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	res`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" json"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Marshal"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// json -> object(map/struct)"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"jsonToObject"),n("span",{class:"token punctuation"},"("),s("data "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" ptr "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"{"),s(`
	json`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unmarshal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("ptr"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` ptr
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// ReadJsonFile2 json file -> object -> json String"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"ReadJsonFile"),n("span",{class:"token punctuation"},"("),s("jsonfile "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" obj "),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// \u6253\u5F00json\u6587\u4EF6"),s(`
	f`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),s("jsonfile"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" f"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// json\u6587\u4EF6 -> struct"),s(`
	`),n("span",{class:"token comment"},"// var bar map[string]interface{}"),s(`
	json`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewDecoder"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Decode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("obj"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"// fmt.Println(bar)"),s(`

	`),n("span",{class:"token comment"},"// struct -> json"),s(`
	data`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" json"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Marshal"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ps=c(`<p><strong>Json-Object: For Example</strong></p><details class="custom-container details"><summary>json-map \u8F6C\u6362</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// map -&gt; json</span>
<span class="token keyword">func</span> <span class="token function">mapToJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
		<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;john@gmail.com&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span>   <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	jsonStr<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: {&quot;age&quot;:20,&quot;email&quot;:&quot;john@gmail.com&quot;,&quot;name&quot;:&quot;John&quot;}</span>
<span class="token punctuation">}</span>

<span class="token comment">// json -&gt; map</span>
<span class="token keyword">func</span> <span class="token function">jsonToMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	jsonStr <span class="token operator">:=</span> <span class="token string">\`{
		&quot;name&quot;:  &quot;John&quot;,
		&quot;email&quot;: &quot;john@gmail.com&quot;,
		&quot;age&quot;:   20,
		&quot;data&quot;: [120, 200, 150, 80, 70, 110, 130]
	}\`</span>
	<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
	<span class="token comment">// Output: map[age:20 data:[120 200 150 80 70 110 130] email:john@gmail.com name:John]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>json-struct \u8F6C\u6362</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Email <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot;\`</span>
	Age   <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// GetJson struct -&gt; json</span>
<span class="token keyword">func</span> <span class="token function">GetJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
		Email<span class="token punctuation">:</span> <span class="token string">&quot;john@gmail.com&quot;</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>   <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: {&quot;Name&quot;:&quot;John&quot;,&quot;Email&quot;:&quot;john@gmail.com&quot;,&quot;Age&quot;:20}</span>
<span class="token punctuation">}</span>

<span class="token comment">// SetJson json -&gt; struct</span>
<span class="token keyword">func</span> <span class="token function">SetJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	obj <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`{&quot;Name&quot;:&quot;John&quot;,&quot;Email&quot;:&quot;john@gmail.com&quot;,&quot;Age&quot;:20}\`</span><span class="token punctuation">)</span>

	s <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
	json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token comment">// Output: {John john@gmail.com 20}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>JsonFile-Object-Json</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;encoding/json&quot;</span>

<span class="token keyword">var</span> user <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// json file -&gt; object</span>
json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre></div><details class="custom-container details"><summary>json.NewDecoder(f).Decode(&amp;obj)</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Bar <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	xAxis  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	yAxis  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	series <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">ReadJsonFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ReadJsonFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;bar.json&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> bar <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// json File -&gt; object</span>
	json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>bar<span class="token punctuation">)</span>
	<span class="token comment">// fmt.Println(bar)</span>

	<span class="token comment">// object -&gt; jsonStr</span>
	data<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>json-http</strong></p><details class="custom-container details"><summary>json-http \u793A\u4F8B</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Firstname <span class="token builtin">string</span> <span class="token string">\`json:&quot;firstname&quot;\`</span>
	Lastname  <span class="token builtin">string</span> <span class="token string">\`json:&quot;lastname&quot;\`</span>
	Age       <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/decode&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> user User
		json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>

		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;%s %s is %d years old!\\n&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>Firstname<span class="token punctuation">,</span> user<span class="token punctuation">.</span>Lastname<span class="token punctuation">,</span> user<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/encode&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		peter <span class="token operator">:=</span> User<span class="token punctuation">{</span>
			Firstname<span class="token punctuation">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
			Lastname<span class="token punctuation">:</span>  <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
			Age<span class="token punctuation">:</span>       <span class="token number">25</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>

		json<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>peter<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
$ curl -s -XPOST -d&#39;{&quot;firstname&quot;:&quot;Elon&quot;,&quot;lastname&quot;:&quot;Musk&quot;,&quot;age&quot;:48}&#39; http://localhost:8080/decode
Elon Musk is 48 years old!

$ curl -s http://localhost:8080/encode
{&quot;firstname&quot;:&quot;John&quot;,&quot;lastname&quot;:&quot;Doe&quot;,&quot;age&quot;:25}
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="gjson-sjson" tabindex="-1"><a class="header-anchor" href="#gjson-sjson" aria-hidden="true">#</a> gjson &amp; sjson</h3><blockquote><p>\u80FD\u591F\u76F4\u63A5\u5C06 json \u5B57\u7B26\u4E32\u4F5C\u4E3A json \u5BF9\u8C61\u8C03\u7528\uFF01</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/tidwall/gjson&quot;</span>
	<span class="token string">&quot;github.com/tidwall/sjson&quot;</span>
<span class="token punctuation">)</span>

gjson<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;axisLine.lineStyle&quot;</span><span class="token punctuation">)</span>
sjson<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;axisLine.lineStyle.color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;skyblue&quot;</span><span class="token punctuation">)</span>
</code></pre></div><details class="custom-container details"><summary>gjson &amp; sjson</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/tidwall/gjson&quot;</span>
	<span class="token string">&quot;github.com/tidwall/sjson&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">setJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token string">\`{
	&quot;type&quot;: &quot;bar&quot;,
	&quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],
	&quot;axisLine&quot;: {&quot;lineStyle&quot;: {&quot;type&quot;: &quot;solid&quot;, &quot;color&quot;: &quot;blue&quot;}}
}\`</span>
	res <span class="token operator">:=</span> gjson<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;axisLine.lineStyle&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token string">\`{
	&quot;type&quot;: &quot;bar&quot;,
	&quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],
	&quot;axisLine&quot;: {&quot;lineStyle&quot;: {&quot;type&quot;: &quot;solid&quot;, &quot;color&quot;: &quot;blue&quot;}}
}\`</span>
	value<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> sjson<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;axisLine.lineStyle.color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;skyblue&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>gjson-readjson File</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/tidwall/gjson&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Bar <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	xAxis  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	yAxis  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	series <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BFB\u53D6json\u6587\u4EF6</span>
	f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;bar.json&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u83B7\u53D6json\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u9879</span>
	res <span class="token operator">:=</span> gjson<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;xAxis&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>go get -u <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
</code></pre></div><details class="custom-container details"><summary>Example</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> DB <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	id    <span class="token builtin">int</span>
	name  <span class="token builtin">string</span>
	email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db <span class="token operator">:=</span> <span class="token function">ConnectDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Query(2)</span>
	<span class="token comment">// QueryAll()</span>

	<span class="token comment">// Insert()</span>
	<span class="token comment">// Insert2()</span>
	<span class="token comment">// Insert3()</span>

	<span class="token comment">// parms := []string{&quot;name&quot;, &quot;email&quot;, &quot;password&quot;}</span>
	<span class="token comment">// data := []map[string]string{</span>
	<span class="token comment">// 	{&quot;username&quot;: &quot;test1&quot;, &quot;email&quot;: &quot;test1@gmail.com&quot;, &quot;password&quot;: &quot;123456&quot;},</span>
	<span class="token comment">// 	{&quot;username&quot;: &quot;test2&quot;, &quot;email&quot;: &quot;test2@gmail.com&quot;, &quot;password&quot;: &quot;admin123&quot;},</span>
	<span class="token comment">// }</span>
	<span class="token comment">// InsertAny(parms, data)</span>

	<span class="token comment">// Update()</span>
	<span class="token comment">// Delete()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ConnectDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
	dsn <span class="token operator">:=</span> <span class="token string">&quot;root:root@tcp(localhost:3306)/golang_api?charset=utf8mb4&amp;parseTime=True&quot;</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\uFF01&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	DB <span class="token operator">=</span> db
	<span class="token keyword">return</span> db
<span class="token punctuation">}</span>

<span class="token comment">// id\u67E5\u8BE2\u4E00\u6761\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">Query</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select id, name, email from users where id = ?&quot;</span>
	<span class="token keyword">var</span> u User
	err <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, email: %s\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u67E5\u8BE2\u5168\u90E8\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">QueryAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select id, name, email from users where id &gt; ?&quot;</span>
	rows<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> u User
		err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, email: %s\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u63D2\u5165\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values(?, ?)&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;aqwq&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aqwq@gmail.com&quot;</span><span class="token punctuation">)</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u63D2\u5165\u591A\u6761\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">Insert2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values (?, ?), (?, ?)&quot;</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tom@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;john&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;john@gmail.com&quot;</span><span class="token punctuation">)</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u63D2\u5165\u591A\u6761\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">Insert3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test3@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values&quot;</span>
	vals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> <span class="token string">&quot;(?, ?)&quot;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> <span class="token string">&quot;(?, ?), &quot;</span>
		<span class="token punctuation">}</span>
		vals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>vals<span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> vals<span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// vals...: \u89E3\u6784</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;lastId: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">InsertAny</span><span class="token punctuation">(</span>parms <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(&quot;</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> parms <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>parms<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> v
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> v <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	sqlStr <span class="token operator">+=</span> <span class="token string">&quot;) values &quot;</span>

	vals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	sqlQuery <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;(%s)&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>parms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> sqlQuery
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> sqlQuery <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> parms <span class="token punctuation">{</span>
			vals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>vals<span class="token punctuation">,</span> row<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> vals<span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// vals...: \u89E3\u6784</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;lastId: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;update users set name = ?, email = ? where id = ?&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;yop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yop@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	affected<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>affected<span class="token punctuation">)</span> <span class="token comment">// return 1: success</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;delete from users where id = ?&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
	rows<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token comment">// return 1: success</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>\u8FDE\u63A5\u6570\u636E\u5E93</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> DB <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB
<span class="token keyword">func</span> <span class="token function">ConnectDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
	dsn <span class="token operator">:=</span> <span class="token string">&quot;root:root@tcp(localhost:3306)/golang_api?charset=utf8mb4&amp;parseTime=True&quot;</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\uFF01&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	DB <span class="token operator">=</span> db
	<span class="token keyword">return</span> db
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u8BE2\u4E00\u6761\u6570\u636E</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Query</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select id, name, email from users where id = ?&quot;</span>
	<span class="token keyword">var</span> u User
	err <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, email: %s\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div></div><ul><li>\u67E5\u8BE2\u5168\u90E8\u6570\u636E</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">QueryAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select id, name, email from users where id &gt; ?&quot;</span>
	rows<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> u User
		err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, email: %s\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>email<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63D2\u5165\u4E00\u6761\u6570\u636E</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values(?, ?)&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;aqwq&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aqwq@gmail.com&quot;</span><span class="token punctuation">)</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div><ul><li>\u63D2\u5165\u591A\u6761\u6570\u636E</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Insert2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values (?, ?), (?, ?)&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tom@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;john&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;john@gmail.com&quot;</span><span class="token punctuation">)</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div><ul><li>\u63D2\u5165\u591A\u6761\u6570\u636E 2</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Insert3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test1@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test2@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test3@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(name, email) values&quot;</span>
	vals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> <span class="token string">&quot;(?, ?)&quot;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> <span class="token string">&quot;(?, ?), &quot;</span>
		<span class="token punctuation">}</span>
		vals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>vals<span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> vals<span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// vals...: \u89E3\u6784</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;lastId: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63D2\u5165\u4EFB\u610F\u6570\u91CF\u5B57\u6BB5</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InsertAny</span><span class="token punctuation">(</span>parms <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into users(&quot;</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> parms <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>parms<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> v
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> v <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	sqlStr <span class="token operator">+=</span> <span class="token string">&quot;) values &quot;</span>

	vals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	sqlQuery <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;(%s)&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>parms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> sqlQuery
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sqlStr <span class="token operator">+=</span> sqlQuery <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> parms <span class="token punctuation">{</span>
			vals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>vals<span class="token punctuation">,</span> row<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> vals<span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// vals...: \u89E3\u6784</span>
	id<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;lastId: %d insert success!&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u66F4\u65B0\u6570\u636E</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;update users set name = ?, email = ? where id = ?&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token string">&quot;yop&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yop@gmail.com&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	affected<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>affected<span class="token punctuation">)</span> <span class="token comment">// return 1: success</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div><ul><li>\u5220\u9664\u6570\u636E</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;delete from users where id = ?&quot;</span>
	res<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
	rows<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> res<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token comment">// return 1: success</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div><h3 id="net-net-url" tabindex="-1"><a class="header-anchor" href="#net-net-url" aria-hidden="true">#</a> net &amp; net/url</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;net/url&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;postgres://user:pass@host.com:5432/path?k=v#f&quot;</span>

	u<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> url<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span>          <span class="token comment">// postgres</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>User<span class="token punctuation">)</span>            <span class="token comment">// user:pass</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">Username</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// user</span>
	p<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> u<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">Password</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// pass</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
	host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Host<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span> <span class="token comment">// host.com 5432</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>     <span class="token comment">// /path</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>RawQuery<span class="token punctuation">)</span> <span class="token comment">// k=v</span>
	m<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> url<span class="token punctuation">.</span><span class="token function">ParseQuery</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>RawQuery<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>          <span class="token comment">// map[k:[v]]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>Fragment<span class="token punctuation">)</span> <span class="token comment">// f</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u8F93\u51FA</span>
fmp<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B57\u7B26\u4E32\u683C\u5F0F\u5316</span>
fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// http\u8BF7\u6C42\u5199\u5165\u7F51\u9875</span>
fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;log&quot;</span>

log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
</code></pre></div><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> csv</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u8BFB\u53D6csv\u6587\u4EF6</span>
reader <span class="token operator">:=</span> csv<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5199\u5165csv\u6587\u4EF6</span>
csv<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
w<span class="token punctuation">.</span><span class="token function">WriteAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><details class="custom-container details"><summary>\u793A\u4F8B</summary><p><strong>For Example</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ReadCsv</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	reader <span class="token operator">:=</span> csv<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
	reader<span class="token punctuation">.</span>Comma <span class="token operator">=</span> <span class="token char">&#39;,&#39;</span>

	<span class="token comment">// for {</span>
	<span class="token comment">// 	record, _ := reader.Read()</span>
	<span class="token comment">// }</span>

	records<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to read csv file, err: %s&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> record <span class="token operator">:=</span> <span class="token keyword">range</span> records <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Read csv file successfully, the data is updated&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WriteCsv</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// file.WriteString(&quot;\\xEF\\xBB\\xBF&quot;)	// \u5199\u5165utf-8 BOM</span>
	w <span class="token operator">:=</span> csv<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> w<span class="token punctuation">.</span><span class="token function">WriteAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;score&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Barry&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;97&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Shirdon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;89&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;92&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;78&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	w<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h3><h4 id="connect-redis" tabindex="-1"><a class="header-anchor" href="#connect-redis" aria-hidden="true">#</a> connect redis</h4><p><strong>go-redis.go</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/garyburd/redigo/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/**
 * \u4F7F\u7528go\u8FDE\u63A5Redis
 * \u9700\u5148\u5728\u547D\u4EE4\u884C\u542F\u52A8redis\u670D\u52A1
 */</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:6379&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect redis server:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect redis success!&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="connect-redis-operator" tabindex="-1"><a class="header-anchor" href="#connect-redis-operator" aria-hidden="true">#</a> connect redis &amp; operator</h4><p><strong>go-redis-string.go</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/garyburd/redigo/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// connect redis</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:6379&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect redis error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect redis success!&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// SET Age 20</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;SET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Coulson&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// GET name</span>
	name<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>conn<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Get name: %s \\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528\u51FD\u6570\u5C01\u88C5-redis" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u51FD\u6570\u5C01\u88C5-redis" aria-hidden="true">#</a> \u4F7F\u7528\u51FD\u6570\u5C01\u88C5 Redis</h4>`,51),Ss=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"github.com/garyburd/redigo/redis"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	conn `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"redisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"setString"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"country"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"China"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"getString"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"country"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// connect redis"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"redisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(" redis"),n("span",{class:"token punctuation"},"."),s("Conn "),n("span",{class:"token punctuation"},"{"),s(`
	conn`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Dial"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"127.0.0.1:6379"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis error:"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis success!"'),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` conn
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// setString SET filed value"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"setString"),n("span",{class:"token punctuation"},"("),s("conn redis"),n("span",{class:"token punctuation"},"."),s("Conn"),n("span",{class:"token punctuation"},","),s(" field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},"="),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// getString GET field"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"getString"),n("span",{class:"token punctuation"},"("),s("conn redis"),n("span",{class:"token punctuation"},"."),s("Conn"),n("span",{class:"token punctuation"},","),s(" field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	res`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Get %s: %s \\n"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),js=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"github.com/garyburd/redigo/redis"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	conn `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"RedisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	db `),n("span",{class:"token operator"},":="),s(" Conn"),n("span",{class:"token punctuation"},"{"),s("conn"),n("span",{class:"token punctuation"},"}"),s(`
	db`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"score"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"97.2"),n("span",{class:"token punctuation"},")"),s(`
	db`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"score"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// RedisConnect connect redis"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"RedisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(" redis"),n("span",{class:"token punctuation"},"."),s("Conn "),n("span",{class:"token punctuation"},"{"),s(`
	conn`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Dial"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"127.0.0.1:6379"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis error:"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis success!"'),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` conn
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Conn "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	redis`),n("span",{class:"token punctuation"},"."),s(`Conn
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// SetString SET filed value"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("conn "),n("span",{class:"token operator"},"*"),s("Conn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"SetString"),n("span",{class:"token punctuation"},"("),s("field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},"="),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// GetString GET field"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("conn "),n("span",{class:"token operator"},"*"),s("Conn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetString"),n("span",{class:"token punctuation"},"("),s("field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	res`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Get %s: %s \\n"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cs=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"github.com/garyburd/redigo/redis"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	conn `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"RedisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	db `),n("span",{class:"token operator"},":="),s(" Conn"),n("span",{class:"token punctuation"},"{"),s("conn"),n("span",{class:"token punctuation"},"}"),s(`
	db`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"score"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"97.2"),n("span",{class:"token punctuation"},")"),s(`
	db`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"score"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// RedisConnect connect redis"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"RedisConnect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(" redis"),n("span",{class:"token punctuation"},"."),s("Conn "),n("span",{class:"token punctuation"},"{"),s(`
	conn`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Dial"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"127.0.0.1:6379"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis error:"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"connect redis success!"'),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` conn
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Conn "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	redis`),n("span",{class:"token punctuation"},"."),s(`Conn
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// SetString SET filed value"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("conn "),n("span",{class:"token operator"},"*"),s("Conn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"SetString"),n("span",{class:"token punctuation"},"("),s("field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},"="),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// GetString GET field"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("conn "),n("span",{class:"token operator"},"*"),s("Conn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetString"),n("span",{class:"token punctuation"},"("),s("field "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	res`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" redis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Get %s: %s \\n"'),n("span",{class:"token punctuation"},","),s(" field"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ts=c(`<h3 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> reflect</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token operator">...</span><span class="token punctuation">(</span>field <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">switch</span> <span class="token operator">...</span><span class="token punctuation">}</span>

reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span>
reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span>

<span class="token comment">// \u7C7B\u578B\u6BD4\u8F83</span>
reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;int&quot;</span>
<span class="token comment">// \u503C\u6BD4\u8F83</span>
<span class="token function">int</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre></div><h3 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> sync</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;sync&quot;</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> mu sync<span class="token punctuation">.</span>Mutex  <span class="token comment">// sync.RWMutex</span>

<span class="token comment">// \u7EBF\u7A0B\u7B49\u5F85</span>
wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u7EBF\u7A0B\u4E92\u65A5\u9501(\u8BFB\u591A\u5199\u5C11, \u5199\u9501\u6743\u9650\u9AD8\u4E8E\u8BFB\u9501, \u6709\u5199\u9501\u65F6\u4F18\u5148\u8FDB\u884C\u5199\u9501)</span>
<span class="token comment">// \u5199\u9501</span>
mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BFB\u9501</span>
mu<span class="token punctuation">.</span><span class="token function">Rlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mu<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Ds=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sync"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * \u4E92\u65A5\u91CF\u5B9E\u73B0\u5E76\u53D1
 */`),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"syncWait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"syncWait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" wg sync"),n("span",{class:"token punctuation"},"."),s(`WaitGroup

	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"defer"),s(" wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},`/*
1
8
3
4
6
5
2
7
9
10
*
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ns=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"syncWaitLock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" wg sync"),n("span",{class:"token punctuation"},"."),s(`WaitGroup
	`),n("span",{class:"token keyword"},"var"),s(" mu sync"),n("span",{class:"token punctuation"},"."),s(`Mutex
	`),n("span",{class:"token keyword"},"var"),s(" count "),n("span",{class:"token builtin"},"int"),s(`

	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"defer"),s(" wg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			count`),n("span",{class:"token operator"},"++"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},")"),s(`
			mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// fmt.Println(count)"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*
1
2
3
4
5
6
7
8
9
10
*/`),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),As=c(`<h3 id="md5" tabindex="-1"><a class="header-anchor" href="#md5" aria-hidden="true">#</a> md5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;crypto/md5&quot;</span>
	<span class="token string">&quot;encoding/hex&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// MD5 \u52A0\u5BC6\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">MD5</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	s<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	str <span class="token operator">:=</span> <span class="token string">&quot;123456&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;MD5(%s): %s\\n&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token function">MD5</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
MD5(123456): e10adc3949ba59abbe56e057f20f883e
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bcrypt" tabindex="-1"><a class="header-anchor" href="#bcrypt" aria-hidden="true">#</a> bcrypt</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// passwords.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;golang.org/x/crypto/bcrypt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">HashPassword</span><span class="token punctuation">(</span>password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> bcrypt<span class="token punctuation">.</span><span class="token function">GenerateFromPassword</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CheckPasswordHash</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> hash <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> bcrypt<span class="token punctuation">.</span><span class="token function">CompareHashAndPassword</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> err <span class="token operator">==</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	password <span class="token operator">:=</span> <span class="token string">&quot;secret&quot;</span>
	hash<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">HashPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token comment">// ignore error for the sake of simplicity</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Password:&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hash:    &quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>

	match <span class="token operator">:=</span> <span class="token function">CheckPasswordHash</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> hash<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Match:   &quot;</span><span class="token punctuation">,</span> match<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Password: secret
Hash:     $2a$14$Om4.1ottCO9NjNp6T3BaJ.FF7WgPYa6Pp/XPjHefXUnE6ZInI3VhS
Match:    true
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> runtime</h3><div class="language-go ext-go"><pre class="language-go"><code>runtime<span class="token punctuation">.</span><span class="token function">Version</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,6);function Is(Gs,Rs){const p=l("ExternalLinkIcon"),e=l("CodeGroupItem"),o=l("CodeGroup");return u(),k(r,null,[n("h1",m,[v,b,n("a",g,[f,a(p)])]),h,n("p",null,[n("a",y,[w,a(p)])]),q,a(o,null,{default:t(()=>[a(e,{title:"hello.go"},{default:t(()=>[_]),_:1})]),_:1}),x,a(o,null,{default:t(()=>[a(e,{title:"output"},{default:t(()=>[P]),_:1}),a(e,{title:"input"},{default:t(()=>[S]),_:1}),a(e,{title:"multiple-inputs"},{default:t(()=>[j]),_:1})]),_:1}),C,a(o,null,{default:t(()=>[a(e,{title:"\u5355\u4E2A\u53D8\u91CF"},{default:t(()=>[T]),_:1}),a(e,{title:"\u591A\u4E2A\u53D8\u91CF"},{default:t(()=>[D]),_:1}),a(e,{title:"\u53D8\u91CF\u793A\u4F8B"},{default:t(()=>[N]),_:1}),a(e,{title:"\u5E38\u91CF"},{default:t(()=>[A]),_:1})]),_:1}),I,a(o,null,{default:t(()=>[a(e,{title:"\u53D8\u91CF\u4F5C\u7528\u57DF"},{default:t(()=>[G]),_:1}),a(e,{title:"\u5168\u5C40\u53D8\u91CF"},{default:t(()=>[R]),_:1}),a(e,{title:"\u5C40\u90E8\u53D8\u91CF"},{default:t(()=>[E]),_:1}),a(e,{title:"\u7C7B\u5B57\u6BB5"},{default:t(()=>[F]),_:1})]),_:1}),M,a(o,null,{default:t(()=>[a(e,{title:"\u6570\u636E\u7C7B\u578B"},{default:t(()=>[J]),_:1}),a(e,{title:"Api"},{default:t(()=>[O]),_:1}),a(e,{title:"\u793A\u4F8B"},{default:t(()=>[B]),_:1}),a(e,{title:"\u7C7B\u578B\u683C\u5F0F\u5316\u8F93\u51FA"},{default:t(()=>[W]),_:1}),a(e,{title:"\u4E2D\u6587\u5B57\u7B26"},{default:t(()=>[L]),_:1})]),_:1}),U,H,a(o,null,{default:t(()=>[a(e,{title:"Api"},{default:t(()=>[z]),_:1}),a(e,{title:"\u904D\u5386"},{default:t(()=>[Q]),_:1}),a(e,{title:"\u7C7B\u578B\u8F6C\u6362"},{default:t(()=>[V]),_:1}),a(e,{title:"Api"},{default:t(()=>[$]),_:1}),a(e,{title:"\u5B57\u7B26"},{default:t(()=>[Y]),_:1})]),_:1}),X,a(o,null,{default:t(()=>[a(e,{title:"\u521B\u5EFA\u56FA\u5B9A\u6570\u7EC4"},{default:t(()=>[Z]),_:1}),a(e,{title:"Api"},{default:t(()=>[K]),_:1}),a(e,{title:"\u904D\u5386"},{default:t(()=>[nn]),_:1})]),_:1}),sn,an,a(o,null,{default:t(()=>[a(e,{title:"\u521B\u5EFA\u52A8\u6001\u6570\u7EC4"},{default:t(()=>[tn]),_:1}),a(e,{title:"\u67E5"},{default:t(()=>[en]),_:1}),a(e,{title:"\u589E"},{default:t(()=>[on]),_:1}),a(e,{title:"\u5220"},{default:t(()=>[cn]),_:1}),a(e,{title:"\u6539"},{default:t(()=>[pn]),_:1}),a(e,{title:"\u6269\u5BB9"},{default:t(()=>[ln]),_:1}),a(e,{title:"\u5224\u65AD"},{default:t(()=>[un]),_:1})]),_:1}),kn,a(o,null,{default:t(()=>[a(e,{title:"\u521B\u5EFA Map"},{default:t(()=>[rn]),_:1}),a(e,{title:"Api"},{default:t(()=>[dn]),_:1}),a(e,{title:"Example"},{default:t(()=>[mn]),_:1}),a(e,{title:"TwoSum"},{default:t(()=>[vn]),_:1})]),_:1}),bn,gn,fn,a(o,null,{default:t(()=>[a(e,{title:"\u65E0\u53C2"},{default:t(()=>[hn]),_:1}),a(e,{title:"\u6709\u53C2"},{default:t(()=>[yn]),_:1}),a(e,{title:"\u4E0D\u5B9A\u53C2"},{default:t(()=>[wn]),_:1}),a(e,{title:"\u8FD4\u56DE\u503C"},{default:t(()=>[qn]),_:1}),a(e,{title:"defer \u6790\u6784\u5668"},{default:t(()=>[_n,xn,Pn]),_:1}),a(e,{title:"\u95ED\u5305"},{default:t(()=>[Sn]),_:1}),a(e,{title:"\u5185\u51FD\u6570"},{default:t(()=>[jn]),_:1})]),_:1}),Cn,a(o,null,{default:t(()=>[a(e,{title:"\u7C7B"},{default:t(()=>[Tn]),_:1}),a(e,{title:"Struct \u521D\u59CB\u5316"},{default:t(()=>[Dn]),_:1}),a(e,{title:"\u65B9\u6CD5"},{default:t(()=>[Nn]),_:1}),a(e,{title:"\u7EE7\u627F"},{default:t(()=>[An]),_:1}),a(e,{title:"\u7EC4\u5408"},{default:t(()=>[In]),_:1}),a(e,{title:"\u533F\u540D\u7ED3\u6784\u4F53"},{default:t(()=>[Gn]),_:1}),a(e,{title:"OOP"},{default:t(()=>[Rn]),_:1}),a(e,{title:"\u7C7B\u6307\u9488"},{default:t(()=>[En]),_:1}),a(e,{title:"\u7B80\u5316\u7248"},{default:t(()=>[Fn]),_:1}),a(e,{title:"\u7C7B\u8F93\u5165\u904D\u5386"},{default:t(()=>[Mn]),_:1}),a(e,{title:"\u7C7B\u6807\u7B7E"},{default:t(()=>[Jn]),_:1})]),_:1}),On,a(o,null,{default:t(()=>[a(e,{title:"pointer"},{default:t(()=>[Bn]),_:1}),a(e,{title:"input"},{default:t(()=>[Wn]),_:1}),a(e,{title:"func"},{default:t(()=>[Ln]),_:1}),a(e,{title:"struct"},{default:t(()=>[Un]),_:1})]),_:1}),Hn,n("p",null,[n("a",zn,[Qn,a(p)])]),Vn,a(o,null,{default:t(()=>[a(e,{title:"if"},{default:t(()=>[$n]),_:1}),a(e,{title:"switch"},{default:t(()=>[Yn]),_:1}),a(e,{title:"switch \u6761\u4EF6\u5224\u65AD"},{default:t(()=>[Xn]),_:1})]),_:1}),Zn,a(o,null,{default:t(()=>[a(e,{title:"for"},{default:t(()=>[Kn]),_:1}),a(e,{title:"while"},{default:t(()=>[ns]),_:1})]),_:1}),ss,a(o,null,{default:t(()=>[a(e,{title:"goroutine"},{default:t(()=>[as]),_:1}),a(e,{title:"goroutine + time.sleep"},{default:t(()=>[ts]),_:1}),a(e,{title:"goroutine + channel"},{default:t(()=>[es]),_:1}),a(e,{title:"Channels1"},{default:t(()=>[os]),_:1}),a(e,{title:"Channels2"},{default:t(()=>[cs]),_:1}),a(e,{title:"Channels3"},{default:t(()=>[ps]),_:1}),a(e,{title:"Select1"},{default:t(()=>[ls]),_:1}),a(e,{title:"Select2"},{default:t(()=>[is]),_:1}),a(e,{title:"For"},{default:t(()=>[us]),_:1})]),_:1}),ks,n("p",null,[n("a",rs,[ds,a(p)])]),ms,a(o,null,{default:t(()=>[a(e,{title:"\u6570\u5B57\u6392\u5E8F"},{default:t(()=>[vs]),_:1}),a(e,{title:"\u5B57\u7B26\u4E32\u6570\u7EC4\u6392\u5E8F"},{default:t(()=>[bs]),_:1}),gs,fs,hs,a(e,{title:"struct \u6392\u5E8F 1"},{default:t(()=>[ys]),_:1}),a(e,{title:"struct \u6392\u5E8F 2"},{default:t(()=>[ws]),_:1})]),_:1}),qs,a(o,null,{default:t(()=>[a(e,{title:"json \u4E0E object \u8F6C\u6362"},{default:t(()=>[_s]),_:1}),a(e,{title:"\u89E3\u6790 json \u6587\u4EF6"},{default:t(()=>[xs]),_:1})]),_:1}),Ps,a(o,null,{default:t(()=>[a(e,{title:"go-redis-string-encapsulate.go"},{default:t(()=>[Ss]),_:1}),a(e,{title:"go-redis-struct"},{default:t(()=>[js]),_:1}),a(e,{title:"\u6392\u884C\u699C\u793A\u4F8B"},{default:t(()=>[Cs]),_:1})]),_:1}),Ts,a(o,null,{default:t(()=>[a(e,{title:"\u4E92\u65A5\u91CF\u5B9E\u73B0\u5E76\u53D1"},{default:t(()=>[Ds]),_:1}),a(e,{title:"\u7EBF\u7A0B\u540C\u6B65\u9501"},{default:t(()=>[Ns]),_:1})]),_:1}),As],64)}var Fs=i(d,[["render",Is],["__file","go.html.vue"]]);export{Fs as default};
