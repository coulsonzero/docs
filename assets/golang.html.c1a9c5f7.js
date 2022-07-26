import{_ as p,r as l,o as i,c as u,a,w as t,F as r,d as c,b as n,e as s}from"./app.73a9ff34.js";const k={},d=c(`<h1 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><div class="language-go ext-go"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">)</span>
</code></pre></div><h3 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> variable</h3>`,9),m=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"/*==== 1.\u53D8\u91CF\u58F0\u660E ===== */"),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token builtin"},"string"),s("  "),n("span",{class:"token comment"},'// \u9ED8\u8BA4\u503C: ""'),s(`

`),n("span",{class:"token comment"},"/*==== 2. \u53D8\u91CF\u58F0\u660E\u5E76\u521D\u59CB\u5316 ====*/"),s(`

`),n("span",{class:"token comment"},"// a.\u5168\u5C40\u53D8\u91CF(\u51FD\u6570\u5916\u5B9A\u4E49\u7684\u53D8\u91CF)"),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello world!"'),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello world!"'),s(`

`),n("span",{class:"token comment"},"// b.\u5C40\u90E8\u53D8\u91CF(\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u53D8\u91CF)"),s(`
str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"hello world!"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5168\u5C40\u53D8\u91CF"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"datatypes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#datatypes","aria-hidden":"true"},"#"),s(" DataTypes")],-1),g=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token builtin"},"float32"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"float64"),s(`
`),n("span",{class:"token builtin"},"byte"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"rune"),s(),n("span",{class:"token comment"},"// \u5B57\u7B26,\u6C49\u5B57\u662F\u91C7\u7528unicode\u7F16\u7801\uFF0C\u5360\u4E09\u4E2A\u5B57\u8282, rune\u662Fint32\u7684\u522B\u540D\uFF08-231~231-1\uFF09\uFF0Cbyte\uFF08-128\uFF5E127\uFF09"),s(`
`),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token builtin"},"bool"),s(`


`),n("span",{class:"token comment"},"// Array"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"byte"),s(`
`),n("span",{class:"token comment"},"// map"),s(`
`),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token builtin"},"int"),s(`

`),n("span",{class:"token comment"},"// \u4E07\u80FD\u7C7B\u578B"),s(`
`),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// go1.18\u6CDB\u578B"),s(`
any `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token punctuation"},"("),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"strconv"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// int -> string"),s(`
	num `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"14141"),s(`
	str `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d"'),n("span",{class:"token punctuation"},","),s(" num"),n("span",{class:"token punctuation"},")"),s(`
	str `),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Itoa"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// string -> int"),s(`
	str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"134"'),s(`
	num`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Atoi"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`
	num`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ParseInt"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// string -> []byte"),s(`
	charArr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token function"},"byte"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// byte -> string"),s(`
	str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=c('<h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u76F8\u540C\u7C7B\u578B\u5143\u7D20\u7684\u96C6\u5408</p><p>\u957F\u5EA6\u56FA\u5B9A\u6570\u7EC4\uFF0C\u65E0\u6CD5\u6269\u5BB9\u548C\u4FEE\u6539\u5143\u7D20(append(), make(), copy(), sort.Ints()\u7B49\u65B9\u6CD5)</p></div>',3),w=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u6570\u7EC4\u58F0\u660E -> \u6709\u9ED8\u8BA4\u503C"),s(`
arr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("          "),n("span",{class:"token comment"},"// [0, 0, 0]"),s(`
`),n("span",{class:"token comment"},"// \u6570\u636E\u58F0\u660E\u521D\u59CB\u5316"),s(`
arr `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("  "),n("span",{class:"token comment"},"// [1, 2, 3]"),s(`
`)])])],-1),_=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u957F\u5EA6"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u904D\u5386"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("h3",{id:"slice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slice","aria-hidden":"true"},"#"),s(" Slice")],-1),I=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u52A8\u6001\u6570\u7EC4\uFF0C\u53EF\u4F7F\u7528Array\u6240\u6709"),n("strong",null,"Api"),s("\u65B9\u6CD5\uFF0C\u4E14\u957F\u5EA6\u4E0D\u56FA\u5B9A\uFF0C\u53EF\u6269\u5BB9")])],-1),S=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" slice "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("                 "),n("span",{class:"token comment"},"// len: 0, cap: 0, slice: []"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s("                  "),n("span",{class:"token comment"},"// len: 0, cap: 0, slice: []"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s("         "),n("span",{class:"token comment"},"// len: 3, cap: 3, slice: [1, 2, 3]"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"cap"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// make: \u4F7F\u7528len\u5206\u914Dslice\u957F\u5EA6\uFF1Bcap: \u53EF\u9009\u53C2\u6570\uFF0C\u4E3A\u6570\u7EC4\u5BB9\u91CF\uFF0C\u957F\u5EA6\u5C0F\u4E8E\u5BB9\u91CF\u65F6\u5176\u4ED6\u6570\u503C\u5747\u4E3A\u9ED8\u8BA4\u503C"),s(`
`)])])],-1),q=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u67E5\u8BE2"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"len: %d, cap: %d, slice: %v \\n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"cap"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},")"),s(`

`)])])],-1),G=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u589E\u52A0(\u672B\u5C3E)"),s(`
slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s("         "),n("span",{class:"token comment"},"// len: 6, cap: 10, slice: [1 2 3 0 0 4]"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// len: 8, cap: 10, slice: [1 2 3 0 0 4 5 6]"),s(`
nums `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},","),s(" nums"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// len: 7, cap: 10, slice: [1 2 3 0 0 4 5]"),s(`
`)])])],-1),T=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5220\u9664(\u6307\u5B9A\u7D22\u5F15\u5143\u7D20)"),s(`
slice `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("slice"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},":"),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" slice"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),C=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u6392\u5E8F"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"/********************************************************/"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// \u5224\u65AD\u4E24\u4E2A\u5207\u7247\u76F8\u7B49"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=c(`<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><div class="language-go ext-go"><pre class="language-go"><code></code></pre></div><h2 id="statements" tabindex="-1"><a class="header-anchor" href="#statements" aria-hidden="true">#</a> Statements</h2><h3 id="if-statement" tabindex="-1"><a class="header-anchor" href="#if-statement" aria-hidden="true">#</a> If Statement</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">if</span> x <span class="token operator">:=</span> <span class="token number">23</span><span class="token punctuation">;</span> x <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token punctuation">{</span>
    <span class="token comment">//statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">18</span> <span class="token punctuation">{</span>
    <span class="token comment">//statement(s)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//statement(s)</span>
<span class="token punctuation">}</span>

<span class="token comment">// fmt.Println(x) // error: undefined: x</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div></div><h3 id="switch-statement" tabindex="-1"><a class="header-anchor" href="#switch-statement" aria-hidden="true">#</a> Switch statement</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token number">8</span>
<span class="token keyword">switch</span> y <span class="token operator">:=</span> x <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span> y <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">...</span><span class="token punctuation">:</span>
        <span class="token comment">//statement(s)        //\u4E0D\u9700\u8981break</span>
	<span class="token keyword">case</span> <span class="token operator">...</span><span class="token punctuation">:</span>
		<span class="token comment">//statement(s)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token comment">//statement(s)</span>
<span class="token punctuation">}</span>

<span class="token comment">// fallthrough: \u6267\u884C\u591A\u4E2Acase\uFF1B\u9ED8\u8BA4\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A\uFF0C\u4E0D\u9700\u8981break\uFF0C\u652F\u6301\u591A\u6761\u4EF6\u5339\u914D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Stitch\u6761\u4EF6\u5224\u65AD</strong></p><div class="language-go ext-go"><pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token number">2</span>
<span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token comment">//statement(s)</span>
    <span class="token keyword">case</span> x <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token comment">//statement(s)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h2><h3 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> For Loop</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u8BFB\u53D6 key \u548C value</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u4EC5\u8BFB\u53D6 key</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u4EC5\u8BFB\u53D6 value</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> while Loop</h3><div class="language-go ext-go"><pre class="language-go"><code>i <span class="token operator">:=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// statement(s)</span>
    i<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="\u5982\u4F55\u67E5\u770B-go-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u67E5\u770B-go-\u7248\u672C" aria-hidden="true">#</a> \u5982\u4F55\u67E5\u770B Go \u7248\u672C \uFF1F</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go version
go version go1.17.7 darwin/amd64
</code></pre></div><h3 id="\u5982\u4F55-\u5B89\u88C5\u4E0D\u540C\u7684-go-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55-\u5B89\u88C5\u4E0D\u540C\u7684-go-\u7248\u672C" aria-hidden="true">#</a> \u5982\u4F55 \u5B89\u88C5\u4E0D\u540C\u7684 Go \u7248\u672C \uFF1F</h3><blockquote><p>gvm</p></blockquote><ol><li>install gvm</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> -sSL https://github.com/soulteary/gvm/raw/master/binscripts/gvm-installer <span class="token operator">|</span> <span class="token function">bash</span>
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
</code></pre></div>`,33);function j(B,N){const e=l("CodeGroupItem"),o=l("CodeGroup");return i(),u(r,null,[d,a(o,null,{default:t(()=>[a(e,{title:"\u5355\u4E2A\u53D8\u91CF"},{default:t(()=>[m]),_:1}),a(e,{title:"\u591A\u4E2A\u53D8\u91CF"},{default:t(()=>[b]),_:1})]),_:1}),v,a(o,null,{default:t(()=>[a(e,{title:"\u6570\u636E\u7C7B\u578B"},{default:t(()=>[g]),_:1}),a(e,{title:"\u7C7B\u578B\u683C\u5F0F\u5316\u8F93\u51FA"},{default:t(()=>[h]),_:1}),a(e,{title:"\u7C7B\u578B\u5F3A\u5236\u8F6C\u6362"},{default:t(()=>[f]),_:1})]),_:1}),y,a(o,null,{default:t(()=>[a(e,{title:"\u521B\u5EFA\u56FA\u5B9A\u6570\u7EC4"},{default:t(()=>[w]),_:1}),a(e,{title:"Api"},{default:t(()=>[_]),_:1}),a(e,{title:"\u904D\u5386"},{default:t(()=>[x]),_:1})]),_:1}),P,I,a(o,null,{default:t(()=>[a(e,{title:"\u521B\u5EFA\u52A8\u6001\u6570\u7EC4"},{default:t(()=>[S]),_:1}),a(e,{title:"\u67E5"},{default:t(()=>[q]),_:1}),a(e,{title:"\u589E"},{default:t(()=>[G]),_:1}),a(e,{title:"\u5220"},{default:t(()=>[T,a(e,{title:"\u6539"},{default:t(()=>[C]),_:1})]),_:1}),a(e,{title:"\u6269\u5BB9"},{default:t(()=>[$]),_:1}),a(e,{title:"\u5224\u65AD"},{default:t(()=>[A]),_:1})]),_:1}),M],64)}var z=p(k,[["render",j],["__file","golang.html.vue"]]);export{z as default};
