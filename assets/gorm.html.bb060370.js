import{_ as l,r as p,o as u,c as r,b as n,d as s,a,w as t,F as k,e as c}from"./app.afb47d0b.js";const d={},m={id:"gorm",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#gorm","aria-hidden":"true"},"#",-1),b={href:"https://gorm.io/zh_CN/docs/index.html",target:"_blank",rel:"noopener noreferrer"},g=c(`<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="_1-\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 1. \u5B89\u88C5\u4F9D\u8D56\u5305</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/mysql
</code></pre></div><h3 id="_2-mysql-example" tabindex="-1"><a class="header-anchor" href="#_2-mysql-example" aria-hidden="true">#</a> 2. MySQL: Example</h3><details class="custom-container details"><summary>example</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;gin-api/config&quot;</span>
	<span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
	<span class="token string">&quot;gorm.io/gorm&quot;</span>
	<span class="token string">&quot;gorm.io/gorm/schema&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	gorm<span class="token punctuation">.</span>Model
	Code  <span class="token builtin">string</span>
	Price <span class="token builtin">uint</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dsn <span class="token operator">:=</span> config<span class="token punctuation">.</span><span class="token function">GetYamlDsn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		NamingStrategy<span class="token punctuation">:</span> schema<span class="token punctuation">.</span>NamingStrategy<span class="token punctuation">{</span>
			SingularTable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u5168\u5C40\u8868\u540D\u7981\u7528\u590D\u6570</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;failed to connect database&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u8FC1\u79FB schema</span>
	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Create</span>
	<span class="token comment">// db.Create(&amp;Product{Code: &quot;B12&quot;, Price: 200})</span>
	<span class="token comment">// db.Create(&amp;Product{Code: &quot;A71&quot;, Price: 100})</span>
	<span class="token comment">// db.Create(&amp;Product{Code: &quot;R17&quot;, Price: 300})</span>

	<span class="token comment">// Read</span>
	<span class="token comment">// var product Product</span>
	<span class="token comment">// db.First(&amp;product, 1)                 // \u6839\u636E\u6574\u578B\u4E3B\u952E\u67E5\u627E</span>
	<span class="token comment">// db.First(&amp;product, &quot;code = ?&quot;, &quot;D42&quot;) // \u67E5\u627E code \u5B57\u6BB5\u503C\u4E3A D42 \u7684\u8BB0\u5F55</span>

	<span class="token comment">// Update - \u5C06 product \u7684 price \u66F4\u65B0\u4E3A 200</span>
	<span class="token comment">// db.Model(&amp;product).Update(&quot;price&quot;, 200)</span>
	<span class="token comment">// Update - \u66F4\u65B0\u591A\u4E2A\u5B57\u6BB5</span>
	<span class="token comment">// db.Model(&amp;product).Updates(Product{Price: 200, Code: &quot;F42&quot;}) // \u4EC5\u66F4\u65B0\u975E\u96F6\u503C\u5B57\u6BB5</span>
	<span class="token comment">// db.Model(&amp;product).Updates(map[string]interface{}{&quot;Price&quot;: 200, &quot;Code&quot;: &quot;F42&quot;})</span>
	<span class="token comment">//</span>
	<span class="token comment">// Delete - \u5220\u9664 product</span>
	<span class="token comment">// db.Delete(&amp;product, 1)</span>

	<span class="token comment">// sql := &quot;SELECT * FROM product where price = 100&quot;</span>
	<span class="token comment">// sql := &quot;update \`product\` set code = &#39;AAA&#39; where price = &#39;100&#39;&quot;</span>
	<span class="token comment">// sql := &quot;delete from product where price = 400;&quot;</span>
	<span class="token comment">// res := db.Raw(sql).Scan(&amp;product)</span>
	<span class="token comment">// fmt.Println(res)</span>
	<span class="token comment">// fmt.Println(&amp;product)</span>

	<span class="token comment">// db.Exec(&quot;update \`product\` set code = &#39;AAA&#39; where price = &#39;100&#39;&quot;)</span>
	<span class="token comment">// db.Exec(&quot;delete from product where price = 200&quot;)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-gorm-mysql-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_3-gorm-mysql-\u6A21\u5757\u5316" aria-hidden="true">#</a> 3. Gorm-Mysql \u6A21\u5757\u5316</h3>`,6),f=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"gin-grom-mysql/models"'),s(`
	`),n("span",{class:"token string"},'"gin-grom-mysql/router"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	db `),n("span",{class:"token operator"},":="),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetupDB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CloseDB"),n("span",{class:"token punctuation"},"("),s("db"),n("span",{class:"token punctuation"},")"),s(`
	r `),n("span",{class:"token operator"},":="),s(" router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetupRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Run"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":8090"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` router

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"gin-grom-mysql/controller"'),s(`
	`),n("span",{class:"token string"},'"github.com/gin-gonic/gin"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"SetupRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Engine "),n("span",{class:"token punctuation"},"{"),s(`
	r `),n("span",{class:"token operator"},":="),s(" gin"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GET"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"pong"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GET"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/users"'),n("span",{class:"token punctuation"},","),s(" controllers"),n("span",{class:"token punctuation"},"."),s("ShowUsers"),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GET"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/users/:id"'),n("span",{class:"token punctuation"},","),s(" controllers"),n("span",{class:"token punctuation"},"."),s("ShowUser"),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"POST"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/users"'),n("span",{class:"token punctuation"},","),s(" controllers"),n("span",{class:"token punctuation"},"."),s("CreateUser"),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PATCH"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/users/:id"'),n("span",{class:"token punctuation"},","),s(" controllers"),n("span",{class:"token punctuation"},"."),s("UpdateUser"),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DELETE"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/users/:id"'),n("span",{class:"token punctuation"},","),s(" controllers"),n("span",{class:"token punctuation"},"."),s("DeleteUser"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` r
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` models

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"github.com/joho/godotenv"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" DB "),n("span",{class:"token operator"},"*"),s("gorm"),n("span",{class:"token punctuation"},"."),s(`DB

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"LoadEnvConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	errEnv `),n("span",{class:"token operator"},":="),s(" godotenv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" errEnv "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Failed to load env file"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	dbUser `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_USER"'),n("span",{class:"token punctuation"},")"),s(`
	dbPass `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_PASSWORD"'),n("span",{class:"token punctuation"},")"),s(`
	dbHost `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_HOST"'),n("span",{class:"token punctuation"},")"),s(`
	dbName `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_NAME"'),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},'// dsn := fmt.Sprintf("user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local")'),s(`
	dsn `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local"'),n("span",{class:"token punctuation"},","),s(`
		dbUser`),n("span",{class:"token punctuation"},","),s(`
		dbPass`),n("span",{class:"token punctuation"},","),s(`
		dbHost`),n("span",{class:"token punctuation"},","),s(`
		dbName`),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` dsn
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` models

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"gorm.io/gorm"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// User model, use NewUser to create a new instance"),s(`
`),n("span",{class:"token keyword"},"type"),s(" User "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	gorm`),n("span",{class:"token punctuation"},"."),s(`Model
	ID    `),n("span",{class:"token builtin"},"uint"),s("   "),n("span",{class:"token string"},'`json:"id" gorm:"primary_key"`'),s(`
	Name  `),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token string"},'`json:"name" binding:"required"`'),s(`
	Email `),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token string"},'`json:"email" binding:"required"`'),s(`
	`),n("span",{class:"token comment"},'// CreatedAt time.Time `json:"createdtime"`'),s(`
	`),n("span",{class:"token comment"},'// UpdatedAt time.Time `json:"updatedtime"`'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// NewUser creates a new User{} instance"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"NewUser"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" email "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("User"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" err "),n("span",{class:"token builtin"},"error"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" name "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		err `),n("span",{class:"token operator"},"="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name can not be blank"'),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(` err
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(" email "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		err `),n("span",{class:"token operator"},"="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"email can not be blank"'),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(` err
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("User"),n("span",{class:"token punctuation"},"{"),s("Name"),n("span",{class:"token punctuation"},":"),s(" name"),n("span",{class:"token punctuation"},","),s(" Email"),n("span",{class:"token punctuation"},":"),s(" email"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(` err
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// FindUserByID finds User by id and return"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"FindUserByID"),n("span",{class:"token punctuation"},"("),s("id "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("User "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(` user User
	DB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"First"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("user"),n("span",{class:"token punctuation"},","),s(" id"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s(`user
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// GetAllUsers returns all User records"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"GetAllUsers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s("User "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" users "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`User
	DB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("users"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s(`users
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Create creates a new User record in the database"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("u "),n("span",{class:"token operator"},"*"),s("User"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	DB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("u"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Update updates User record attributes in the database"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("u "),n("span",{class:"token operator"},"*"),s("User"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	DB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Model"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("u"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Updates"),n("span",{class:"token punctuation"},"("),s("User"),n("span",{class:"token punctuation"},"{"),s("Name"),n("span",{class:"token punctuation"},":"),s(" u"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},","),s(" Email"),n("span",{class:"token punctuation"},":"),s(" u"),n("span",{class:"token punctuation"},"."),s("Email"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Delete deletes User record in the database"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("u "),n("span",{class:"token operator"},"*"),s("User"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	DB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("u"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` controllers

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"gin-grom-mysql/models"'),s(`
	`),n("span",{class:"token string"},'"github.com/gin-gonic/gin"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"strconv"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// CreateUser handles HTTP POST request to create a new User"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"CreateUser"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" user models"),n("span",{class:"token punctuation"},"."),s(`User
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShouldBindJSON"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("user"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusBadRequest"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},":"),s(" err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusCreated"),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ShowUser handles HTTP GET request to find a User by id param"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"ShowUser"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	idParam `),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"id"'),n("span",{class:"token punctuation"},")"),s(`
	id`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Atoi"),n("span",{class:"token punctuation"},"("),s("idParam"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusBadRequest"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},":"),s(" err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	user `),n("span",{class:"token operator"},":="),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"FindUserByID"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" user"),n("span",{class:"token punctuation"},"."),s("ID "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusNotFound"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusOK"),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// UpdateUser handles HTTP PATCH request to find and update User details"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"UpdateUser"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	idParam `),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"id"'),n("span",{class:"token punctuation"},")"),s(`
	id`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Atoi"),n("span",{class:"token punctuation"},"("),s("idParam"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusBadRequest"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},":"),s(" err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	user `),n("span",{class:"token operator"},":="),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"FindUserByID"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" user"),n("span",{class:"token punctuation"},"."),s("ID "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusNotFound"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ShouldBindJSON"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("user"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusBadRequest"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},":"),s(" err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusOK"),n("span",{class:"token punctuation"},","),s(" user"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// DeleteUser handles HTTP DELETE request to find and delete User record"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"DeleteUser"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	idParam `),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"id"'),n("span",{class:"token punctuation"},")"),s(`
	id`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Atoi"),n("span",{class:"token punctuation"},"("),s("idParam"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusBadRequest"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},":"),s(" err"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	user `),n("span",{class:"token operator"},":="),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"FindUserByID"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" user"),n("span",{class:"token punctuation"},"."),s("ID "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
		c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusNotFound"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	user`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusOK"),n("span",{class:"token punctuation"},","),s(" gin"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ShowUsers handles HTTP GET request to return all User records"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"ShowUsers"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("gin"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	users `),n("span",{class:"token operator"},":="),s(" models"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetAllUsers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	c`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"JSON"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),s("StatusOK"),n("span",{class:"token punctuation"},","),s(" users"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=c(`<h3 id="_4-\u6570\u636E\u5E93\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u5E93\u6A21\u578B" aria-hidden="true">#</a> 4. \u6570\u636E\u5E93\u6A21\u578B</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;gorm.io/gorm&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	gorm<span class="token punctuation">.</span>Model
	Name  <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot; binding:&quot;required&quot;\`</span>
	Email <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot; binding:&quot;required&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID           <span class="token builtin">uint</span>
  Name         <span class="token builtin">string</span>
  Email        <span class="token operator">*</span><span class="token builtin">string</span>
  Age          <span class="token builtin">uint8</span>
  Birthday     <span class="token operator">*</span>time<span class="token punctuation">.</span>Time
  MemberNumber sql<span class="token punctuation">.</span>NullString
  ActivatedAt  sql<span class="token punctuation">.</span>NullTime
  CreatedAt    time<span class="token punctuation">.</span>Time
  UpdatedAt    time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> Book <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	User        User   <span class="token string">\`json:&quot;user&quot;\`</span>
	ID          <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;id&quot; gorm:&quot;primary_key:auto_increment&quot;\`</span>
	UserID      <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;userID&quot;\`</span>
	Title       <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot; gorm:&quot;type:varchar(255)&quot;\`</span>
	Description <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot; gorm:&quot;type:text&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// gorm.Model \u7684\u5B9A\u4E49</span>
<span class="token keyword">type</span> Model <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID        <span class="token builtin">uint</span>           <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span>
  CreatedAt time<span class="token punctuation">.</span>Time
  UpdatedAt time<span class="token punctuation">.</span>Time
  DeletedAt gorm<span class="token punctuation">.</span>DeletedAt <span class="token string">\`gorm:&quot;index&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="dsn\u4E66\u5199\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#dsn\u4E66\u5199\u65B9\u5F0F" aria-hidden="true">#</a> dsn\u4E66\u5199\u65B9\u5F0F</h2><h3 id="_1-\u56FA\u5B9A\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u56FA\u5B9A\u65B9\u5F0F" aria-hidden="true">#</a> 1. \u56FA\u5B9A\u65B9\u5F0F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
  <span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9700\u66F4\u6539dbname</span>
  dsn <span class="token operator">:=</span> <span class="token string">&quot;root:root@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span>
  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5B57\u7B26\u4E32\u62FC\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B57\u7B26\u4E32\u62FC\u63A5" aria-hidden="true">#</a> 2. \u5B57\u7B26\u4E32\u62FC\u63A5</h3><div class="language-go ext-go"><pre class="language-go"><code>dsn <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>DbUser<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> DbPassWord<span class="token punctuation">,</span> <span class="token string">&quot;@tcp(&quot;</span><span class="token punctuation">,</span> DbHost<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> DbPort<span class="token punctuation">,</span> <span class="token string">&quot;)/&quot;</span><span class="token punctuation">,</span> DbName<span class="token punctuation">,</span> <span class="token string">&quot;?charset=utf8mb4&amp;parseTime=true&amp;loc=Local&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_3-\u683C\u5F0F\u5316\u5B57\u7B26\u4E32-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_3-\u683C\u5F0F\u5316\u5B57\u7B26\u4E32-\u63A8\u8350" aria-hidden="true">#</a> 3. \u683C\u5F0F\u5316\u5B57\u7B26\u4E32(\u63A8\u8350)</h3><div class="language-go ext-go"><pre class="language-go"><code>dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">,</span>
	user<span class="token punctuation">,</span>
	pass<span class="token punctuation">,</span>
	host<span class="token punctuation">,</span>
	port<span class="token punctuation">,</span>
	dbname<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</h2><h3 id="_1-\u52A0\u8F7D-yaml-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D-yaml-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1. \u52A0\u8F7D <code>yaml</code> \u914D\u7F6E\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">GetYamlDsn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">&quot;yaml&quot;</span><span class="token punctuation">)</span>
	viper<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span><span class="token string">&quot;setting.yaml&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	host <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;mysql.host&quot;</span><span class="token punctuation">)</span>
	port <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;mysql.port&quot;</span><span class="token punctuation">)</span>
	user <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;mysql.username&quot;</span><span class="token punctuation">)</span>
	pass <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;mysql.password&quot;</span><span class="token punctuation">)</span>
	dbname <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;mysql.dbname&quot;</span><span class="token punctuation">)</span>

	dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">,</span>
		user<span class="token punctuation">,</span>
		pass<span class="token punctuation">,</span>
		host<span class="token punctuation">,</span>
		port<span class="token punctuation">,</span>
		dbname<span class="token punctuation">,</span>
	<span class="token punctuation">)</span>
	<span class="token keyword">return</span> dsn
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> root
  <span class="token key atrule">dbname</span><span class="token punctuation">:</span> gin_api
<span class="token comment">#  max_idle_conn: 50</span>
<span class="token comment">#  max_open_conn: 150</span>

</code></pre></div><h3 id="_2-\u52A0\u8F7D-ini-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u52A0\u8F7D-ini-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2. \u52A0\u8F7D <code>ini</code> \u914D\u7F6E\u6587\u4EF6</h3>`,17),D=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` config

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`

	`),n("span",{class:"token string"},'"gopkg.in/ini.v1"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"GetIniDsn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ini"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"setting.ini"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Failed to load ini file"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	DbHost `),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Section"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"mysql"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DbHost"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	DbPort `),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Section"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"mysql"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DbPort"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	DbUser `),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Section"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"mysql"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DbUser"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	DbPass `),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Section"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"mysql"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DbPass"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	DbName `),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Section"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"mysql"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Key"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DbName"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	dsn `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local"'),n("span",{class:"token punctuation"},","),s(`
		DbUser`),n("span",{class:"token punctuation"},","),s(`
		DbPass`),n("span",{class:"token punctuation"},","),s(`
		DbHost`),n("span",{class:"token punctuation"},","),s(`
		DbPort`),n("span",{class:"token punctuation"},","),s(`
		DbName`),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` dsn
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-ini ext-ini line-numbers-mode"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"service"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"AppMode"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"debug"),s(`
`),n("span",{class:"token key attr-name"},"HttpPort"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"7000"),s(`

`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"mysql"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Db"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"mysql"),s(`
`),n("span",{class:"token key attr-name"},"DbHost"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"127.0.0.1"),s(`
`),n("span",{class:"token key attr-name"},"DbPort"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"3306"),s(`
`),n("span",{class:"token key attr-name"},"DbUser"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"root"),s(`
`),n("span",{class:"token key attr-name"},"DbPassWord"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"root"),s(`
`),n("span",{class:"token key attr-name"},"DbName"),s(),n("span",{class:"token punctuation"},"="),s(),n("span",{class:"token value attr-value"},"todolist_db"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h3",{id:"_3-\u52A0\u8F7D-env-\u914D\u7F6E\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-\u52A0\u8F7D-env-\u914D\u7F6E\u6587\u4EF6","aria-hidden":"true"},"#"),s(" 3. \u52A0\u8F7D "),n("code",null,"env"),s(" \u914D\u7F6E\u6587\u4EF6")],-1),U=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` config

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`

	`),n("span",{class:"token string"},'"github.com/joho/godotenv"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"GetEnvDsn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	errEnv `),n("span",{class:"token operator"},":="),s(" godotenv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" errEnv "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Failed to load env file"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	dbUser `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_USER"'),n("span",{class:"token punctuation"},")"),s(`
	dbPass `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_PASS"'),n("span",{class:"token punctuation"},")"),s(`
	dbHost `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_HOST"'),n("span",{class:"token punctuation"},")"),s(`
	dbPort `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_PORT"'),n("span",{class:"token punctuation"},")"),s(`
	dbName `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DB_NAME"'),n("span",{class:"token punctuation"},")"),s(`

	dsn `),n("span",{class:"token operator"},":="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local"'),n("span",{class:"token punctuation"},","),s(`
		dbUser`),n("span",{class:"token punctuation"},","),s(`
		dbPass`),n("span",{class:"token punctuation"},","),s(`
		dbHost`),n("span",{class:"token punctuation"},","),s(`
		dbPort`),n("span",{class:"token punctuation"},","),s(`
		dbName`),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` dsn
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-env ext-env"},[n("pre",{class:"language-env"},[n("code",null,`DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_NAME=golang_api
`)])],-1),T=c(`<h3 id="_4-\u8FDE\u63A5\u6570\u636E\u5E93\u5E76\u751F\u6210\u8868" tabindex="-1"><a class="header-anchor" href="#_4-\u8FDE\u63A5\u6570\u636E\u5E93\u5E76\u751F\u6210\u8868" aria-hidden="true">#</a> 4.\u8FDE\u63A5\u6570\u636E\u5E93\u5E76\u751F\u6210\u8868</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>ppackage model

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;gin-api/config&quot;</span>
	<span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
	<span class="token string">&quot;gorm.io/gorm&quot;</span>
	<span class="token string">&quot;gorm.io/gorm/schema&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> DB <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB

<span class="token keyword">func</span> <span class="token function">SetupDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
	dsn <span class="token operator">:=</span> config<span class="token punctuation">.</span><span class="token function">GetYamlDsn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		NamingStrategy<span class="token punctuation">:</span> schema<span class="token punctuation">.</span>NamingStrategy<span class="token punctuation">{</span>
			SingularTable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u5168\u5C40\u8868\u540D\u7981\u7528\u590D\u6570</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to create a connection to database&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5mysql\u6570\u636E\u5E93\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	DB <span class="token operator">=</span> db

	DB<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Book<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> db
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CloseDB</span><span class="token punctuation">(</span>db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to close connection from database&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>               <span class="token comment">// \u6700\u5927\u7A7A\u95F2\u8FDE\u63A5\u6570</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>              <span class="token comment">// \u6700\u591A\u53EF\u5BB9\u7EB3</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">SetConnMaxLifetime</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// \u8FDE\u63A5\u6700\u5927\u590D\u7528\u65F6\u95F4</span>
	sqlDB<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> entity

<span class="token keyword">import</span> <span class="token string">&quot;gorm.io/gorm&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	gorm<span class="token punctuation">.</span>Model
	ID       <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;id&quot;\`</span>
	Name     <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Email    <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot;\`</span>
	Password <span class="token builtin">string</span> <span class="token string">\`json:&quot;password&quot;\`</span>
	Token    <span class="token builtin">string</span> <span class="token string">\`json:&quot;token&quot;\`</span>
<span class="token punctuation">}</span>


<span class="token keyword">type</span> Book <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	User        User   <span class="token string">\`json:&quot;user&quot;\`</span>
	ID          <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;id&quot;\`</span>
	UserID      <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;userID&quot;\`</span>
	Title       <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;\`</span>
	Description <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> 5.\u5168\u5C40\u914D\u7F6E</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;gopkg.in/yaml.v2&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	System system <span class="token string">\`yaml:&quot;system&quot;\`</span>
	Logger logger <span class="token string">\`yaml:&quot;logger&quot;\`</span>
	Mysql  mysql  <span class="token string">\`yaml:&quot;mysql&quot;\`</span>
	Redis  redis  <span class="token string">\`yaml:&quot;redis&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> system <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Host <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;host&quot;\`</span>
	Port <span class="token builtin">int</span>    <span class="token string">\`yaml:&quot;port&quot;\`</span>
	Env  <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;env&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> logger <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Lever        <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;lever&quot;\`</span>
	Prefix       <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;prefix&quot;\`</span>
	Director     <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;director&quot;\`</span>
	ShowLine     <span class="token builtin">bool</span>   <span class="token string">\`yaml:&quot;show_line&quot;\`</span>
	LogInConsole <span class="token builtin">bool</span>   <span class="token string">\`yaml:&quot;log_in_console&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> mysql <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Host     <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;host&quot;\`</span>
	Port     <span class="token builtin">int</span>    <span class="token string">\`yaml:&quot;port&quot;\`</span>
	Username <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;username&quot;\`</span>
	Password <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;password&quot;\`</span>
	DbName   <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;dbname&quot;\`</span>
	LogLever <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;log_lever&quot;\`</span>
	Charset  <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;charset&quot;\`</span>
	MaxIdle  <span class="token builtin">int</span>    <span class="token string">\`yaml:&quot;max_idle&quot;\`</span>
	MaxOpen  <span class="token builtin">int</span>    <span class="token string">\`yaml:&quot;max_open&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> redis <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Address  <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;address&quot;\`</span>
	Password <span class="token builtin">string</span> <span class="token string">\`yaml:&quot;password&quot;\`</span>
	Db       <span class="token builtin">int</span>    <span class="token string">\`yaml:&quot;db&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> Config <span class="token operator">*</span>config

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./config.yaml&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// fmt.Println(string(file))</span>
	yaml<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token operator">&amp;</span>Config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crud\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#crud\u63A5\u53E3" aria-hidden="true">#</a> CRUD\u63A5\u53E3</h2><h3 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h3><h4 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> Find</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************
 *          All          *
 * SELECT * FROM users;  *
 *************************/</span>
db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>


db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> <span class="token string">&quot;name != ? AND age &gt; ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE name &lt;&gt; &quot;jinzhu&quot; AND age &gt; 20;</span>

<span class="token comment">// Struct</span>
db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> User<span class="token punctuation">{</span>Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE age = 20;</span>

<span class="token comment">// Map</span>
db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE name = &quot;jinzhu&quot; AND age = 20;</span>

result <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
fmp<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>RowsAffected<span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u627E\u5230\u7684\u8BB0\u5F55\u6570</span>
fmp<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="first" tabindex="-1"><a class="header-anchor" href="#first" aria-hidden="true">#</a> First</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> user <span class="token punctuation">[</span><span class="token punctuation">]</span>User
<span class="token comment">// \u83B7\u53D6\u7B2C\u4E00\u6761\u8BB0\u5F55\uFF08\u4E3B\u952E\u5347\u5E8F\uFF09</span>
db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users ORDER BY id LIMIT 1;</span>

<span class="token comment">// \u83B7\u53D6\u6700\u540E\u4E00\u6761\u8BB0\u5F55\uFF08\u4E3B\u952E\u964D\u5E8F</span>
db<span class="token punctuation">.</span><span class="token function">Last</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users ORDER BY id DESC LIMIT 1;</span>

db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE id = 10;</span>

db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">,</span> <span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1b74413f-f3b8-409f-ac47-e8c062e3472a&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE id = &quot;1b74413f-f3b8-409f-ac47-e8c062e3472a&quot;;</span>


<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> Where</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Map</span>
db<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE age = 20;</span>

db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;name = ? AND age &gt;= ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE name = &#39;jinzhu&#39; AND age &gt;= 22;</span>

<span class="token comment">// Struct</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE name = &quot;jinzhu&quot; AND age = 20 ORDER BY id LIMIT 1;</span>

<span class="token comment">// Map</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users WHERE name = &quot;jinzhu&quot; AND age = 20;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h3><div class="language-go ext-go"><pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Jinzhu&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Birthday<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

result <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span> <span class="token comment">// \u901A\u8FC7\u6570\u636E\u7684\u6307\u9488\u6765\u521B\u5EFA</span>

user<span class="token punctuation">.</span>ID             <span class="token comment">// \u8FD4\u56DE\u63D2\u5165\u6570\u636E\u7684\u4E3B\u952E</span>
result<span class="token punctuation">.</span>Error        <span class="token comment">// \u8FD4\u56DE error</span>
result<span class="token punctuation">.</span>RowsAffected <span class="token comment">// \u8FD4\u56DE\u63D2\u5165\u8BB0\u5F55\u7684\u6761\u6570</span>
</code></pre></div><h4 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u63D2\u5165\u5355\u6761\u6570\u636E</span>
db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;Jinzhu&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Birthday<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6279\u91CF\u63D2\u5165</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jinzhu_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jinzhu_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6307\u5B9A\u5B57\u6BB5\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u5B57\u6BB5\u63D2\u5165" aria-hidden="true">#</a> \u6307\u5B9A\u5B57\u6BB5\u63D2\u5165</h4><div class="language-go ext-go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CreatedAt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// INSERT INTO \`users\` (\`name\`,\`age\`,\`created_at\`) VALUES (&quot;jinzhu&quot;, 18, &quot;2020-07-04 11:05:21.775&quot;)</span>

db<span class="token punctuation">.</span><span class="token function">Omit</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CreatedAt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// INSERT INTO \`users\` (\`birthday\`,\`updated_at\`) VALUES (&quot;2020-01-01 00:00:00.000&quot;, &quot;2020-07-04 11:05:21.775&quot;</span>
</code></pre></div><h3 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h3><div class="language-go ext-go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u6761\u4EF6\u66F4\u65B0</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;active = ?&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// UPDATE users SET name=&#39;hello&#39;, updated_at=&#39;2013-11-17 21:34:10&#39; WHERE active=true;</span>

<span class="token comment">// \u6839\u636E struct \u66F4\u65B0</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;role = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// UPDATE users SET name=&#39;hello&#39;, age=18 WHERE role = &#39;admin&#39;;</span>

<span class="token comment">// \u6839\u636E \`struct\` \u66F4\u65B0\u5C5E\u6027\uFF0C\u53EA\u4F1A\u66F4\u65B0\u975E\u96F6\u503C\u7684\u5B57\u6BB5</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Active<span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// UPDATE users SET name=&#39;hello&#39;, age=18, updated_at = &#39;2013-11-17 21:34:10&#39; WHERE id = 111;</span>

<span class="token comment">// \u6839\u636E \`map\` \u66F4\u65B0\u5C5E\u6027</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// UPDATE users SET name=&#39;hello&#39;, age=18, active=false, updated_at=&#39;2013-11-17 21:34:10&#39; WHERE id=111;</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u4F7F\u7528 Struct \u8FDB\u884C Select\uFF08\u4F1A select \u96F6\u503C\u7684\u5B57\u6BB5\uFF09</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;new_name&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// UPDATE users SET name=&#39;new_name&#39;, age=0 WHERE id=111;</span>
</code></pre></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>email<span class="token punctuation">)</span>
<span class="token comment">// DELETE from emails where id = 10;</span>

db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM users WHERE id = 10;</span>

db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM users WHERE id IN (1,2,3);</span>

db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Email<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;email LIKE ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%jinzhu%&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE from emails where email LIKE &quot;%jinzhu%&quot;;</span>

db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;name = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>email<span class="token punctuation">)</span>
<span class="token comment">// DELETE from emails where id = 10 AND name = &quot;jinzhu&quot;;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6279\u91CF\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u5220\u9664" aria-hidden="true">#</a> \u6279\u91CF\u5220\u9664</h4><blockquote><p>gorm \u9ED8\u8BA4\u4F1A\u963B\u6B62\u65E0\u6761\u4EF6\u6279\u91CF\u5220\u9664</p><p>\u5FC5\u987B\u52A0\u4E00\u4E9B\u6761\u4EF6\uFF0C\u6216\u8005\u4F7F\u7528\u539F\u751F SQL\uFF0C\u6216\u8005\u542F\u7528 AllowGlobalUpdate \u6A21\u5F0F</p></blockquote><div class="language-go ext-go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;1 = 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM \`users\` WHERE 1=1</span>

db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;DELETE FROM users&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM users</span>

db<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Session<span class="token punctuation">{</span>AllowGlobalUpdate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM users</span>
</code></pre></div><h4 id="\u8FD4\u56DE\u5220\u9664\u884C\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5220\u9664\u884C\u7684\u6570\u636E" aria-hidden="true">#</a> \u8FD4\u56DE\u5220\u9664\u884C\u7684\u6570\u636E</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u8FD4\u56DE\u6240\u6709\u5217</span>
<span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>User
DB<span class="token punctuation">.</span><span class="token function">Clauses</span><span class="token punctuation">(</span>clause<span class="token punctuation">.</span>Returning<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;role = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM \`users\` WHERE role = &quot;admin&quot; RETURNING *</span>

<span class="token comment">// \u8FD4\u56DE\u6307\u5B9A\u7684\u5217</span>
DB<span class="token punctuation">.</span><span class="token function">Clauses</span><span class="token punctuation">(</span>clause<span class="token punctuation">.</span>Returning<span class="token punctuation">{</span>Columns<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>clause<span class="token punctuation">.</span>Column<span class="token punctuation">{</span><span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;salary&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;role = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
<span class="token comment">// DELETE FROM \`users\` WHERE role = &quot;admin&quot; RETURNING \`name\`, \`salary\`</span>
</code></pre></div><h3 id="\u539F\u751Fsql" tabindex="-1"><a class="header-anchor" href="#\u539F\u751Fsql" aria-hidden="true">#</a> \u539F\u751FSQL</h3><h4 id="scan" tabindex="-1"><a class="header-anchor" href="#scan" aria-hidden="true">#</a> Scan</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name <span class="token builtin">string</span>
  Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span>Student
<span class="token comment">// Raw SQL</span>
db<span class="token punctuation">.</span><span class="token function">Raw</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT name, age FROM users WHERE name = ? order by age desc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Antonio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span>

<span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>User
db<span class="token punctuation">.</span><span class="token function">Raw</span><span class="token punctuation">(</span><span class="token string">&quot;UPDATE users SET name = ? WHERE age = ? RETURNING id, name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>


<span class="token comment">// \u4F7F\u7528\u539F\u751F SQL</span>
row <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Raw</span><span class="token punctuation">(</span><span class="token string">&quot;select name, age, email from users where name = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
row<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token operator">&amp;</span>email<span class="token punctuation">)</span>

<span class="token comment">// \u539F\u751F SQL</span>
rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Raw</span><span class="token punctuation">(</span><span class="token string">&quot;select name, age, email from users where name = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jinzhu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Rows</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token operator">&amp;</span>email<span class="token punctuation">)</span>

  <span class="token comment">// \u4E1A\u52A1\u903B\u8F91...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> Exec</h4><div class="language-go ext-go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;Select * FROM users&quot;</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE users&quot;</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;UPDATE orders SET shipped_at = ? WHERE id IN ?&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5F00\u59CB\u4E8B\u52A1</span>
tx <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u56DE\u6EDA\u4E8B\u52A1</span>
	tx<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u63D0\u4EA4\u4E8B\u52A1</span>
tx<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h3><div class="language-go ext-go"><pre class="language-go"><code>err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;role = ?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u65E5\u5FD7\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5904\u7406" aria-hidden="true">#</a> \u65E5\u5FD7\u5904\u7406</h3><div class="language-go ext-go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">LogMode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">SetLogger</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6559\u7A0B" aria-hidden="true">#</a> \u6559\u7A0B</h2><h3 id="\u901A\u7528\u6570\u636E\u5E93\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u6570\u636E\u5E93\u63A5\u53E3" aria-hidden="true">#</a> \u901A\u7528\u6570\u636E\u5E93\u63A5\u53E3</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u83B7\u53D6\u901A\u7528\u6570\u636E\u5E93\u5BF9\u8C61 sql.DB\uFF0C\u7136\u540E\u4F7F\u7528\u5176\u63D0\u4F9B\u7684\u529F\u80FD</span>
sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Ping</span>
sqlDB<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Close</span>
sqlDB<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u6570\u636E\u5E93\u7EDF\u8BA1\u4FE1\u606F</span>
sqlDB<span class="token punctuation">.</span><span class="token function">Stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u6C60" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6C60" aria-hidden="true">#</a> \u8FDE\u63A5\u6C60</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u83B7\u53D6\u901A\u7528\u6570\u636E\u5E93\u5BF9\u8C61 sql.DB \uFF0C\u7136\u540E\u4F7F\u7528\u5176\u63D0\u4F9B\u7684\u529F\u80FD</span>
sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// SetMaxIdleConns \u7528\u4E8E\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u4E2D\u7A7A\u95F2\u8FDE\u63A5\u7684\u6700\u5927\u6570\u91CF\u3002</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">// SetMaxOpenConns \u8BBE\u7F6E\u6253\u5F00\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u6700\u5927\u6570\u91CF\u3002</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token comment">// SetConnMaxLifetime \u8BBE\u7F6E\u4E86\u8FDE\u63A5\u53EF\u590D\u7528\u7684\u6700\u5927\u65F6\u95F4\u3002</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetConnMaxLifetime</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u52A1-1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1-1" aria-hidden="true">#</a> \u4E8B\u52A1</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u5F00\u59CB\u4E8B\u52A1</span>
tx <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E8B\u52A1\u56DE\u6EDA</span>
tx<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u63D0\u4EA4\u4E8B\u52A1</span>
tx<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,50);function N(R,C){const i=p("ExternalLinkIcon"),e=p("CodeGroupItem"),o=p("CodeGroup");return u(),r(k,null,[n("h1",m,[v,s(),n("a",b,[s("GORM"),a(i)])]),g,a(o,null,{default:t(()=>[a(e,{title:"main.go"},{default:t(()=>[f]),_:1}),a(e,{title:"router/router.go"},{default:t(()=>[q]),_:1}),a(e,{title:"models/db.go"},{default:t(()=>[h]),_:1}),a(e,{title:"models/user.go"},{default:t(()=>[y]),_:1}),a(e,{title:"controller/user.go"},{default:t(()=>[w]),_:1})]),_:1}),E,a(o,null,{default:t(()=>[a(e,{title:"config.go"},{default:t(()=>[D]),_:1}),a(e,{title:"config.ini"},{default:t(()=>[S]),_:1})]),_:1}),x,a(o,null,{default:t(()=>[a(e,{title:"config.go"},{default:t(()=>[U]),_:1}),a(e,{title:".env"},{default:t(()=>[_]),_:1})]),_:1}),T],64)}var B=l(d,[["render",N],["__file","gorm.html.vue"]]);export{B as default};
