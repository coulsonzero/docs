import{_ as i,r as o,o as l,c as k,b as n,a,w as t,F as r,e as s,d as e}from"./app.73a9ff34.js";const d={},v={id:"gin",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#gin","aria-hidden":"true"},"#",-1),g=s(),b={href:"https://gin-gonic.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},h=s("Gin"),q=e(`<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="_1-\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#_1-\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> 1. \u5FEB\u901F\u5F00\u59CB</h3><ol><li>\u521B\u5EFAgin\u9879\u76EE</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token punctuation">[</span>project_name<span class="token punctuation">]</span>
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>project_name<span class="token punctuation">]</span>
$ go mod init <span class="token punctuation">[</span>project_name<span class="token punctuation">]</span>
$ go mod tidy
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div></div><ol start="2"><li>\u5B89\u88C5\u4F9D\u8D56\u5305</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go get -u <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
</code></pre></div><ol start="3"><li>\u521B\u5EFAmain.go\u6587\u4EF6</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> main.go   <span class="token comment"># or \`touch main.go\`</span>
</code></pre></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello Gin !&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u8FD0\u884C\u9879\u76EE\u5E76\u67E5\u770B\u8FD4\u56DE\u6570\u636E</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go run main.go
$ <span class="token function">curl</span> <span class="token string">&quot;http://localhost:8080/&quot;</span>
</code></pre></div><h3 id="_2-\u7ED3\u6784\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED3\u6784\u5316" aria-hidden="true">#</a> 2. \u7ED3\u6784\u5316</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>$ tree
.
\u251C\u2500\u2500 <span class="token code-snippet code keyword">\`controller\`</span>	<span class="token comment">&lt;!-- \u914D\u7F6E\u54CD\u5E94\u6570\u636Eresponse --&gt;</span>
\u2502   \u2514\u2500\u2500 hello.go
\u251C\u2500\u2500 <span class="token code-snippet code keyword">\`router\`</span>		<span class="token comment">&lt;!-- \u914D\u7F6E\u8DEF\u7531url --&gt;</span>
\u2502   \u2514\u2500\u2500 router.go
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u2514\u2500\u2500 <span class="token code-snippet code keyword">\`main.go\`</span>		<span class="token comment">&lt;!-- \u914D\u7F6Epost --&gt;</span>
</code></pre></div>`,13),f=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"go-gin/router"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	r `),n("span",{class:"token operator"},":="),s(" router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetupRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Run"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":8080"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` router

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"github.com/gin-gonic/gin"'),s(`
	`),n("span",{class:"token string"},'"go-gin/controller"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"SetupRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Engine "),n("span",{class:"token punctuation"},"{"),s(`
	r `),n("span",{class:"token operator"},":="),s(" gin"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GET"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/hello"'),n("span",{class:"token punctuation"},","),s(" controller"),n("span",{class:"token punctuation"},"."),s("HelloController"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` r
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-go ext-go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` controller

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"github.com/gin-gonic/gin"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"HelloController"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"Welcome to Gin !"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),y=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"Welcome to Gin !"'),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),x=e(`<h3 id="_3-example" tabindex="-1"><a class="header-anchor" href="#_3-example" aria-hidden="true">#</a> 3. Example</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// GET\u65E0\u53C2\u6570: curl http://localhost:8080/hello</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello Gin !&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// GET\u89E3\u6790\u8DEF\u5F84\u53C2\u6570: /user/coulson</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/user/:name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;Hello %s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// GETQuery\u53C2\u6570: users?name=coulson&amp;role=developer\uFF0Crole\u53EF\u9009</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
		role <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultQuery</span><span class="token punctuation">(</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;teacher&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;%s is a %s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> role<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1/bar&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;success&quot;</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string">&quot;list&quot;</span><span class="token punctuation">:</span>    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;about&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;footer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span>    <span class="token string">&quot;asas&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;bar&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
				<span class="token operator">&amp;</span>Bar<span class="token punctuation">{</span>
					Title<span class="token punctuation">:</span>   <span class="token string">&quot;\u6761\u5F62\u56FE\u793A\u4F8B&quot;</span><span class="token punctuation">,</span>
					Content<span class="token punctuation">:</span> <span class="token string">&quot;\u76F4\u65B9\u56FE&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string">&quot;dateinfo&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
				<span class="token operator">&amp;</span>DateInfo<span class="token punctuation">{</span>
					dvp_1<span class="token punctuation">:</span> <span class="token string">&quot;2022-04-09&quot;</span><span class="token punctuation">,</span>
					dvp_2<span class="token punctuation">:</span> <span class="token string">&quot;2022-04-09&quot;</span><span class="token punctuation">,</span>
					dvp_3<span class="token punctuation">:</span> <span class="token string">&quot;20220409&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;\u8BF7\u6C42\u6210\u529F&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/post&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8FD9\u662Fpost\u8BF7\u6C42\u8FD4\u56DE\u7684\u6570\u636E&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// curl http://localhost:8080/form  -X POST -d &#39;username=geektutu&amp;password=1234&#39;</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/form&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
		password <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultPostForm</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;000000&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>

		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
			<span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> password<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// GET \u548C POST \u6DF7\u5408</span>
	<span class="token comment">// curl &quot;http://localhost:8080/posts?id=9876&amp;page=7&quot;  -X POST -d &#39;username=geektutu&amp;password=1234&#39;</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/posts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		id <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
		page <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultQuery</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
		username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
		password <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultPostForm</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;000000&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>

		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span>       id<span class="token punctuation">,</span>
			<span class="token string">&quot;page&quot;</span><span class="token punctuation">:</span>     page<span class="token punctuation">,</span>
			<span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
			<span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> password<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// curl -g &quot;http://localhost:8080/post?ids[Jack]=001&amp;ids[Tom]=002&quot; -X POST -d &#39;names[a]=Sam&amp;names[b]=David&#39;</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/postmap&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ids <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">QueryMap</span><span class="token punctuation">(</span><span class="token string">&quot;ids&quot;</span><span class="token punctuation">)</span>
		names <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostFormMap</span><span class="token punctuation">(</span><span class="token string">&quot;names&quot;</span><span class="token punctuation">)</span>

		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;ids&quot;</span><span class="token punctuation">:</span>   ids<span class="token punctuation">,</span>
			<span class="token string">&quot;names&quot;</span><span class="token punctuation">:</span> names<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// group routes \u5206\u7EC4\u8DEF\u7531</span>
	defaultHandler <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;path&quot;</span><span class="token punctuation">:</span>    c<span class="token punctuation">.</span><span class="token function">FullPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">&quot;success&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ture&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// group: v1</span>
	<span class="token comment">// http://localhost:8080/api/v1/task</span>
	v1 <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		v1<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/task&quot;</span><span class="token punctuation">,</span> defaultHandler<span class="token punctuation">)</span>
		v1<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/series&quot;</span><span class="token punctuation">,</span> defaultHandler<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// group: v2</span>
	v2 <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/v2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		v2<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/task&quot;</span><span class="token punctuation">,</span> defaultHandler<span class="token punctuation">)</span>
		v2<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/series&quot;</span><span class="token punctuation">,</span> defaultHandler<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// listen and serve on 0.0.0.0:8080</span>
	<span class="token comment">// r.Run(&quot;:8000&quot;)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Bar <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Title   <span class="token builtin">string</span>
	Content <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DateInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	dvp_1 <span class="token builtin">string</span>
	dvp_2 <span class="token builtin">string</span>
	dvp_3 <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="\u67E5\u770Bgo\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bgo\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770Bgo\u73AF\u5883\u914D\u7F6E</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go <span class="token function">env</span>
</code></pre></div><h3 id="\u5B89\u88C5-go-get-u-github-com-gin-gonic-gin-\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-go-get-u-github-com-gin-gonic-gin-\u8D85\u65F6" aria-hidden="true">#</a> \u5B89\u88C5 go get -u github.com/gin-gonic/gin \u8D85\u65F6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
$ go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
$ go mod init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

$ go get -u github.com/gin-gonic/gin
</code></pre></div><h3 id="\u70ED\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u70ED\u52A0\u8F7D" aria-hidden="true">#</a> \u70ED\u52A0\u8F7D</h3><blockquote><p>\u4FEE\u6539\u63A5\u53E3\u6587\u6863\u540E\u9ED8\u8BA4\u9700\u91CD\u542F\u9879\u76EE\uFF0C\u9875\u9762\u5185\u5BB9\u624D\u80FD\u5237\u65B0\uFF1B\u4F7F\u7528fresh\u540E\u53EF\u5B9E\u65F6\u5237\u65B0</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5fresh</span>
$ go get github.com/pilu/fresh
<span class="token comment"># \u8FD0\u884Cfresh \u4EE3\u66FF go run main.go</span>
$ fresh
</code></pre></div>`,10);function S(O,G){const c=o("ExternalLinkIcon"),p=o("CodeGroupItem"),u=o("CodeGroup");return l(),k(r,null,[n("h1",v,[m,g,n("a",b,[h,a(c)])]),q,a(u,null,{default:t(()=>[a(p,{title:"main.go"},{default:t(()=>[f]),_:1}),a(p,{title:"router.go"},{default:t(()=>[_]),_:1}),a(p,{title:"hello.go"},{default:t(()=>[w]),_:1}),a(p,{title:"http://localhost:8080/"},{default:t(()=>[y]),_:1})]),_:1}),x],64)}var C=i(d,[["render",S],["__file","gin.html.vue"]]);export{C as default};
