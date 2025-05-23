import{_ as e,r as c,o,c as l,b as n,d as i,a as t,F as r,e as s}from"./app.afb47d0b.js";const d={},p=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><blockquote><p>\u5728\u5BB9\u5668\u6280\u672F\u4E4B\u524D\uFF0C\u4E1A\u754C\u7684\u7F51\u7EA2\u662F\u865A\u62DF\u673A\u3002\u865A\u62DF\u673A\u6280\u672F\u7684\u4EE3\u8868\uFF0C\u662F VMWare \u548C OpenStack</p><p>Docker \u8FD9\u6837\u7684\u5BB9\u5668\u6280\u672F\uFF0C\u4E5F\u662F\u865A\u62DF\u5316\u6280\u672F\uFF0C\u5C5E\u4E8E\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u5316</p><p>\u865A\u62DF\u673A\u867D\u7136\u53EF\u4EE5\u9694\u79BB\u51FA\u5F88\u591A\u201C\u5B50\u7535\u8111\u201D\uFF0C\u4F46\u5360\u7528\u7A7A\u95F4\u66F4\u5927\uFF0C\u542F\u52A8\u66F4\u6162\uFF0C\u865A\u62DF\u673A\u8F6F\u4EF6\u53EF\u80FD\u8FD8\u8981\u82B1\u94B1\uFF08\u4F8B\u5982 VMWare\uFF09</p><p>\u800C\u5BB9\u5668\u6280\u672F\u6070\u597D\u6CA1\u6709\u8FD9\u4E9B\u7F3A\u70B9\u3002\u5B83\u4E0D\u9700\u8981\u865A\u62DF\u51FA\u6574\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EA\u9700\u8981\u865A\u62DF\u4E00\u4E2A\u5C0F\u89C4\u6A21\u7684\u73AF\u5883\uFF08\u7C7B\u4F3C\u201C\u6C99\u7BB1\u201D)</p><p>\u5B83\u542F\u52A8\u65F6\u95F4\u5F88\u5FEB\uFF0C\u51E0\u79D2\u949F\u5C31\u80FD\u5B8C\u6210\u3002\u800C\u4E14\uFF0C\u5B83\u5BF9\u8D44\u6E90\u7684\u5229\u7528\u7387\u5F88\u9AD8\uFF08\u4E00\u53F0\u4E3B\u673A\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u51E0\u5343\u4E2A Docker \u5BB9\u5668</p><p>\u6B64\u5916\uFF0C\u5B83\u5360\u7684\u7A7A\u95F4\u5F88\u5C0F\uFF0C\u865A\u62DF\u673A\u4E00\u822C\u8981\u51E0 GB \u5230\u51E0\u5341 GB \u7684\u7A7A\u95F4\uFF0C\u800C\u5BB9\u5668\u53EA\u9700\u8981 MB \u7EA7\u751A\u81F3 KB \u7EA7\u3002</p><p>Docker\u672C\u8EAB\u5E76\u4E0D\u662F\u5BB9\u5668\uFF0C\u5B83\u662F\u521B\u5EFA\u5BB9\u5668\u7684\u5DE5\u5177\uFF0C\u662F\u5E94\u7528\u5BB9\u5668\u5F15\u64CE</p><p>\u201CBuild, Ship and Run\u201D: \u201C\u642D\u5EFA\u3001\u53D1\u9001\u3001\u8FD0\u884C\u201D, \u201CBuild\u2002once\uFF0CRun\u2002anywhere\uFF08\u642D\u5EFA\u4E00\u6B21\uFF0C\u5230\u5904\u80FD\u7528\uFF09\u201D\u3002</p><p>Docker\u955C\u50CF\uFF0C\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002\u5B83\u9664\u4E86\u63D0\u4F9B\u5BB9\u5668\u8FD0\u884C\u65F6\u6240\u9700\u7684\u7A0B\u5E8F\u3001\u5E93\u3001\u8D44\u6E90\u3001\u914D\u7F6E\u7B49\u6587\u4EF6\u5916\uFF0C\u8FD8\u5305\u542B\u4E86\u4E00\u4E9B\u4E3A\u8FD0\u884C\u65F6\u51C6\u5907\u7684\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\uFF08\u4F8B\u5982\u73AF\u5883\u53D8\u91CF\uFF09\u3002\u955C\u50CF\u4E0D\u5305\u542B\u4EFB\u4F55\u52A8\u6001\u6570\u636E\uFF0C\u5176\u5185\u5BB9\u5728\u6784\u5EFA\u4E4B\u540E\u4E5F\u4E0D\u4F1A\u88AB\u6539\u53D8</p><p>\u8D1F\u8D23\u5BF9Docker\u955C\u50CF\u8FDB\u884C\u7BA1\u7406\u7684\uFF0C\u662FDocker Registry\u670D\u52A1\uFF08\u7C7B\u4F3C\u4ED3\u5E93\u7BA1\u7406\u5458), \u6700\u5E38\u4F7F\u7528\u7684Registry\u516C\u5F00\u670D\u52A1\uFF0C\u662F\u5B98\u65B9\u7684Docker Hub\uFF0C\u8FD9\u4E5F\u662F\u9ED8\u8BA4\u7684 Registry\uFF0C\u5E76\u62E5\u6709\u5927\u91CF\u7684\u9AD8\u8D28\u91CF\u7684\u5B98\u65B9\u955C\u50CF</p></blockquote><table><thead><tr><th>\u865A\u62DF\u673A</th><th>\u5BB9\u5668</th></tr></thead><tbody><tr><td>VMWare, OpenStack</td><td>Docker</td></tr><tr><td>\u9700\u8981\u865A\u62DF\u51FA\u6574\u4E2A\u64CD\u4F5C\u7CFB\u7EDF,</td><td>\u53EA\u9700\u865A\u62DF\u51FA\u5C0F\u6C99\u76D2\u73AF\u5883</td></tr><tr><td>\u5360\u7528\u7A7A\u95F4\u66F4\u5927(GB \u7EA7)</td><td>\u5360\u7528\u7A7A\u95F4\u5F88\u5C0F(MB \u7EA7\u751A\u81F3 KB \u7EA7)</td></tr><tr><td>\u90E8\u5206\u4EA7\u54C1\u9700\u4ED8\u8D39</td><td>\u514D\u8D39</td></tr><tr><td>\u542F\u52A8\u66F4\u6162</td><td>\u542F\u52A8\u65F6\u95F4\u5F88\u5FEB(\u51E0\u79D2\u949F\u5C31\u80FD\u5B8C\u6210)</td></tr></tbody></table><p>Docker\u6280\u672F\u7684\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\uFF0C\u5206\u522B\u662F\uFF1A \u955C\u50CF\uFF08Image\uFF09 \u5BB9\u5668\uFF08Container\uFF09 \u4ED3\u5E93\uFF08Repository\uFF09</p><h2 id="\u90E8\u7F72\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u65B9\u5F0F" aria-hidden="true">#</a> \u90E8\u7F72\u65B9\u5F0F</h2><ul><li>\u7269\u7406\u673A\uFF1A\u76F4\u63A5\u5728\u7269\u7406\u673A\u4E0A\u90E8\u7F72\uFF0C\u673A\u5668\u8D44\u6E90\u5206\u914D\u4E0D\u597D\u63A7\u5236\uFF0C\u51FA\u73B0bug\u65F6\u53EF\u80FD\u673A\u5668\u7684\u5927\u90E8\u5206\u8D44\u6E90\u88AB\u67D0\u4E2A\u5E94\u7528\u5360\u7528\uFF0C\u5BFC\u81F4\u5176\u4ED6\u5E94\u7528\u65E0\u6CD5\u8FD0\u884C\uFF0C\u65E0\u6CD5\u505A\u5230\u5E94\u7528\u9694\u79BB</li><li>\u865A\u62DF\u673A\uFF1A\u5728\u5355\u4E2A\u7269\u7406\u673A\u4E0A\u8FD0\u884C\u591A\u4E2A\u865A\u62DF\u673A\uFF0C\u6BCF\u4E2A\u865A\u62DF\u673A\u90FD\u662F\u5B8C\u6574\u72EC\u7ACB\u7684\u7CFB\u7EDF\uFF0C\u6027\u80FD\u635F\u8017\u5927</li><li>\u5BB9\u5668\uFF1A\u6240\u6709\u5BB9\u5668\u5171\u4EAB\u4E3B\u673A\u7684\u7CFB\u7EDF\uFF0C\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u673A\uFF0C\u6027\u80FD\u635F\u8017\u5C0F\uFF0C\u8D44\u6E90\u9694\u79BB\uFF0Ccpu\u548C\u5185\u5B58\u53EF\u6309\u9700\u5206\u914D</li></ul><h2 id="docker-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-\u547D\u4EE4" aria-hidden="true">#</a> docker \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> --version
<span class="token comment"># \u67E5\u770B\u955C\u50CF</span>
$ <span class="token function">docker</span> images
<span class="token comment"># \u67E5\u770Bdocker\u8FD0\u884C\u7684\u955C\u50CF\u5BB9\u5668</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a

<span class="token comment"># \u5EFA\u7ACBdocker\u955C\u50CF (-f: \u6307\u5B9Adocker\u8FD0\u884C\u6587\u4EF6)</span>
$ <span class="token function">docker</span> build -f Dockerfile -t go-docker:v1 <span class="token builtin class-name">.</span>
<span class="token comment"># \u8FD0\u884Cdocker\u955C\u50CF\u5BB9\u5668 (-d: \u540E\u53F0\u8FD0\u884C, --rm: \u5173\u95ED\u5BB9\u5668\u540E\u81EA\u52A8\u5220\u9664\u5BB9\u5668, --name: \u91CD\u547D\u540D)</span>
$ <span class="token function">docker</span> run --rm -d -p <span class="token number">8080</span>:8080 --name go-docker go-docker:v1


<span class="token comment"># docker \u62C9\u53D6 mysql \u955C\u50CF\u73AF\u5883</span>
$ <span class="token function">docker</span> pull  mysql:8.0.23
<span class="token comment"># docker \u542F\u52A8 mysql \u670D\u52A1</span>
$ <span class="token function">docker</span> start mysql
<span class="token comment"># docker \u505C\u6B62 mysql \u670D\u52A1</span>
$ <span class="token function">docker</span> stop  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-\u90E8\u7F72-golang-web\u540E\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72-golang-web\u540E\u7AEF\u9879\u76EE" aria-hidden="true">#</a> Docker \u90E8\u7F72 Golang Web\u540E\u7AEF\u9879\u76EE</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># Dockerfile</span>

<span class="token instruction"><span class="token keyword">FROM</span> golang:1.18-alpine</span>

<span class="token comment"># \u4F5C\u8005\u7F72\u540D</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> CoulsonZero</span>

<span class="token comment"># golang \u73AF\u5883\u53D8\u91CF</span>
<span class="token instruction"><span class="token keyword">ENV</span> GO111MODULE=<span class="token string">&quot;on&quot;</span> <span class="token operator">\\</span>
    GOPROXY=<span class="token string">&quot;https://goproxy.cn,direct&quot;</span> <span class="token operator">\\</span>
    CGO_ENABLED=<span class="token string">&quot;0&quot;</span> <span class="token operator">\\</span>
    GOOS=<span class="token string">&quot;linux&quot;</span> <span class="token operator">\\</span>
    GOARCH=<span class="token string">&quot;amd64&quot;</span></span>

<span class="token comment"># \u5207\u6362\u5230\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /project/go-docker</span>

<span class="token comment"># Copy go.mod go.sum and \u4E0B\u8F7Dgolang\u73AF\u5883\u4F9D\u8D56</span>
<span class="token instruction"><span class="token keyword">COPY</span> go.* ./</span>
<span class="token instruction"><span class="token keyword">RUN</span> go mod download</span>

<span class="token comment"># Copy \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u5230docker\u76EE\u5F55\u4E2D</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> go build -o /project/go-docker/v1 .</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token comment"># \u58F0\u660Edocker\u76EE\u5F55</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/project/go-docker/v1&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
<span class="token comment"># \u6253\u5305go\u9879\u76EE</span>
$ go build <span class="token builtin class-name">.</span>

<span class="token comment"># \u6253\u5305docker\u7A0B\u5E8F</span>
$ <span class="token function">docker</span> build -t go-docker:v1 <span class="token builtin class-name">.</span>
$ <span class="token function">docker</span> build -f Dockerfile -t go-docker:latest <span class="token builtin class-name">.</span>

<span class="token comment"># \u8FD0\u884Cdocker\u7A0B\u5E8F</span>
$ <span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 go-docker:v1
$ <span class="token function">docker</span> run -d -p <span class="token number">9000</span>:8080 go-docker:latest

$ <span class="token function">docker</span> --version
<span class="token comment"># \u67E5\u770Bdocker\u6253\u5305\u7A0B\u5E8F</span>
$ <span class="token function">docker</span> images
<span class="token comment"># \u67E5\u770Bdocker\u8FDB\u7A0B</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-\u90E8\u7F72-mysql-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72-mysql-\u670D\u52A1" aria-hidden="true">#</a> docker \u90E8\u7F72 mysql \u670D\u52A1</h2><blockquote><p>\u9700\u65B0\u5EFA\u6570\u636E\u5E93\uFF01</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker \u62C9\u53D6 mysql \u955C\u50CF\u73AF\u5883</span>
$ <span class="token function">docker</span> pull  mysql:8.0.23
<span class="token comment"># docker \u542F\u52A8 mysql \u670D\u52A1</span>
$ <span class="token function">docker</span> start mysql
<span class="token comment"># docker \u505C\u6B62 mysql \u670D\u52A1</span>
$ <span class="token function">docker</span> stop  mysql
</code></pre></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u955C\u50CF</span>
$ <span class="token function">docker</span> images
<span class="token comment"># docker \u8FD0\u884C mysql \u955C\u50CF\u73AF\u5883</span>
$ <span class="token function">docker</span> run -d -p <span class="token number">9306</span>:3306 --name mysql -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root mysql:8.0.23
<span class="token comment"># \u67E5\u770B\u955C\u50CF\u8FD0\u884C\u7A0B\u5E8F</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
<span class="token comment"># docker \u6267\u884C mysql \u64CD\u4F5C</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql mysql -u root -p
Enter password:
mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-\u6D4B\u8BD5-nginx-\u7B80\u5355\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#docker-\u6D4B\u8BD5-nginx-\u7B80\u5355\u9875\u9762" aria-hidden="true">#</a> docker \u6D4B\u8BD5 nginx \u7B80\u5355\u9875\u9762</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run -it --rm -p <span class="token number">3000</span>:80 nginx:alpine
</code></pre></div>`,17),k={href:"https://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="docker-\u4F7F\u7528-node-\u90E8\u7F72-\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#docker-\u4F7F\u7528-node-\u90E8\u7F72-\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> docker \u4F7F\u7528 node \u90E8\u7F72 \u524D\u7AEF\u9879\u76EE</h2><p>Step1. \u65B0\u5EFADockerfile\u6587\u4EF6</p><div class="language-docker ext-docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:14-alpine</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>
<span class="token instruction"><span class="token keyword">ADD</span> . /code</span>

<span class="token instruction"><span class="token keyword">RUN</span> yarn</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>
<span class="token instruction"><span class="token keyword">CMD</span> npm start</span>
</code></pre></div><p>Step2. \u7EC8\u7AEF</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build -f Dockerfile -t react-docker:v1 <span class="token builtin class-name">.</span>
<span class="token comment"># --name: \u91CD\u547D\u540D, --rm: \u505C\u6B62\u670D\u52A1\u5219\u81EA\u52A8\u5220\u9664\u955C\u50CF\u5BB9\u5668</span>
$ <span class="token function">docker</span> run -d -p <span class="token number">80</span>:3000 --name react-docker react-docker:v1
<span class="token comment"># $ docker run --rm -d -p 80:3000 --name react-docker react-docker:v1</span>
</code></pre></div><h3 id="\u4F7F\u7528nginx\u90E8\u7F72-\u524D\u7AEF-vue\u3001react-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nginx\u90E8\u7F72-\u524D\u7AEF-vue\u3001react-\u9879\u76EE" aria-hidden="true">#</a> \u4F7F\u7528nginx\u90E8\u7F72 \u524D\u7AEF(vue\u3001react) \u9879\u76EE</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx-app</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> ./Docker/nginx.Dockerfile
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3700<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre></div><div class="language-Dockerfile ext-Dockerfile"><pre class="language-Dockerfile"><code>FROM nginx:alpine

ADD ./dist /usr/share/nginx/html/
</code></pre></div>`,8);function m(v,b){const a=c("ExternalLinkIcon");return o(),l(r,null,[p,n("p",null,[n("a",k,[i("https://localhost:3000/"),t(a)])]),u],64)}var h=e(d,[["render",m],["__file","docker.html.vue"]]);export{h as default};
