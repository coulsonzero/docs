import{_ as a,e as s}from"./app.afb47d0b.js";const n={},e=s(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="linux-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> linux \u5E38\u7528\u547D\u4EE4</h2><ul><li>shutdown(-h \u5173\u673A\uFF0C-r \u91CD\u542F)--shutdown -h now</li><li>su ( \u5207\u6362\u7528\u6237) -- su - root (\u4E3A\u5B89\u5168\u8D77\u89C1\u8F93\u5165\u5BC6\u7801\u65F6\u4E0D\u56DE\u663E)</li><li>exit</li><li>clear (\u6E05\u5C4F)</li><li>history (\u67E5\u770B\u547D\u4EE4\u5386\u53F2\u8BB0\u5F55)</li><li>ls (\u5217\u51FA\u6240\u6709\u76EE\u5F55\u548C\u6587\u4EF6)</li><li>tree</li><li>mkdir (\u521B\u5EFA\u76EE\u5F55)</li><li>rm (\u5220\u9664\u6587\u4EF6/\u76EE\u5F55)</li><li>pwd (\u5F53\u524D\u76EE\u5F55)</li><li>cd (\u5207\u6362\u76EE\u5F55)</li><li>mv (\u79FB\u52A8)</li><li>cp (\u590D\u5236\u76EE\u5F55/\u6587\u4EF6)</li><li>touch (\u521B\u5EFA\u7A7A\u6587\u4EF6)</li><li>vim/vi (\u4FEE\u6539\u6587\u4EF6,yy \u590D\u5236,dd \u526A\u5207,p \u7C98\u8D34,u \u64A4\u9500)--Esc \u9000\u51FA\u7F16\u8F91\u540E&quot;:wq&quot;\u4FDD\u5B58\u5185\u5BB9</li><li>gedit (\u6587\u4EF6\u7F16\u8BD1\u5668)</li><li>head, tail</li><li>cat/more/less (\u67E5\u770B\u6587\u4EF6)</li><li>wc -l \u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</li><li>find (\u67E5\u627E\u6587\u4EF6)</li><li>grep</li><li>ll (\u67E5\u770B\u76EE\u5F55/\u6587\u4EF6\u6743\u9650\u4FE1\u606F)</li><li>chomd (\u4FEE\u6539\u6743\u9650: u \u7528\u6237\uFF0Cg \u540C\u7EC4\u6210\u5458, o \u5176\u4ED6\u6210\u5458\uFF0Cr \u53EF\u8BFB w \u53EF\u5199 x \u53EF\u6267\u884C) - chmod u=rwx, g=r, o=r test.txt</li><li>ifconfig</li><li>top\uFF1A cpu \u5360\u7528</li><li>free (\u5185\u5B58)</li><li>du (\u78C1\u76D8)</li><li>df (\u6587\u4EF6\u78C1\u76D8)</li><li>vmstat (\u865A\u62DF\u5185\u5B58\u7EDF\u8BA1)</li><li>iostat</li><li>chkconfig iptables off (\u5173\u95ED\u9632\u706B\u5899)</li><li>uptime</li><li>ping (\u7F51\u7EDC)</li><li>netstat (\u7AEF\u53E3)--netstat -an</li><li>nslookup</li><li>ps (\u67E5\u770B\u8FDB\u7A0B) -- ps -ef</li><li>kill</li><li>tar -zxvf</li><li>date (\u65E5\u671F) --- date &#39;+%Y/%m/%d&#39;</li><li>cal (\u65E5\u5386)-----cal -y 2021</li><li>id (\u67E5\u8BE2\u7528\u6237\u4FE1\u606F)</li><li>who/whoami/users (\u67E5\u770B\u5F53\u524D\u7528\u6237\u540D)</li><li>passwd (\u4FEE\u6539\u5BC6\u7801)</li><li>echo (\u8F93\u51FA\u547D\u4EE4)/printf</li><li>dig (\u57DF\u540D\u89E3\u6790)</li><li>bc (\u8BA1\u7B97\u5668)</li><li>uname -a (\u7CFB\u7EDF\u4FE1\u606F)</li><li>curl (\u7F51\u7EDC\u6587\u4EF6\u4E0B\u8F7D)</li><li>&amp; | &gt; &gt;&gt;</li></ul><h3 id="linux-commands" tabindex="-1"><a class="header-anchor" href="#linux-commands" aria-hidden="true">#</a> linux Commands</h3><h4 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h4><div class="language-text ext-text"><pre class="language-text"><code>\u5217\u4E3E\uFF1Als
\u5207\u6362\uFF1Acd
\u67E5\u770B\uFF1Apwd
\u6811\u5217\uFF1Atree

\u589E\uFF1Amkdir
\u5220\uFF1Arm
\u67E5\uFF1Afind
\u6539\uFF1Amv\u3001cp
</code></pre></div><p>\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>\u589E\uFF1Atouch
\u5220\uFF1Arm
\u67E5\uFF1Acat\u3001tail\u3001more\u3001less
\u6539\uFF1Avim\u3001vi
</code></pre></div><p>\u89E3\u538B</p><div class="language-text ext-text"><pre class="language-text"><code>\u538B\u7F29\uFF1Atar\u3001zip
\u89E3\u538B\uFF1Aunzip
</code></pre></div><h2 id="\u76EE\u5F55-1" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55-1" aria-hidden="true">#</a> \u76EE\u5F55</h2><h3 id="\u65B0\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u65B0\u5EFA\u76EE\u5F55</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
$ <span class="token function">mkdir</span> -p test/demo     <span class="token comment"># -p: \u521B\u5EFA\u591A\u7EA7\u76EE\u5F55</span>
</code></pre></div><h3 id="\u66F4\u6539\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u76EE\u5F55" aria-hidden="true">#</a> \u66F4\u6539\u76EE\u5F55</h3><p>\u5207\u6362\u5F53\u524D\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
$ <span class="token builtin class-name">cd</span> ~
</code></pre></div><p>\u66F4\u6539\u76EE\u5F55\u6216\u6587\u4EF6\u6743\u9650 <code>\u4FEE\u6539\u6743\u9650: u \u7528\u6237\uFF0Cg \u540C\u7EC4\u6210\u5458, o \u5176\u4ED6\u6210\u5458\uFF0Cr \u53EF\u8BFB w \u53EF\u5199 x \u53EF\u6267\u884C</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx, <span class="token assign-left variable">g</span><span class="token operator">=</span>r, <span class="token assign-left variable">o</span><span class="token operator">=</span>r test.txt
</code></pre></div><p><strong>\u590D\u5236</strong>\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">cp</span> -r <span class="token builtin class-name">test</span> test2
</code></pre></div><p><strong>\u79FB\u52A8</strong>\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">mv</span> config <span class="token builtin class-name">test</span>
</code></pre></div><h3 id="\u67E5\u8BE2\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u76EE\u5F55" aria-hidden="true">#</a> \u67E5\u8BE2\u76EE\u5F55</h3><p>\u67E5\u8BE2\u5F53\u524D\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">pwd</span>
</code></pre></div><p>\u5217\u4E3E\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
</code></pre></div><p>\u6811\u5217</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ tree
</code></pre></div><h3 id="\u5220\u9664\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u76EE\u5F55" aria-hidden="true">#</a> \u5220\u9664\u76EE\u5F55</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> -rf <span class="token builtin class-name">test</span>
</code></pre></div><p>\u4EC5\u652F\u6301\u5220\u9664\u7A7A\u76EE\u5F55\uFF01</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rmdir</span> <span class="token builtin class-name">test</span>
</code></pre></div><h3 id="\u538B\u7F29\u53CA\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u53CA\u89E3\u538B" aria-hidden="true">#</a> \u538B\u7F29\u53CA\u89E3\u538B</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u538B\u7F29</span>
$ <span class="token function">tar</span> -cvf test.tar test/
<span class="token comment"># \u89E3\u538B</span>
$ <span class="token function">tar</span> -xvf test.tar
</code></pre></div><h2 id="\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6" aria-hidden="true">#</a> \u6587\u4EF6</h2><h3 id="\u65B0\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> \u65B0\u5EFA\u6587\u4EF6</h3><h4 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> touch</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">touch</span> test.txt
</code></pre></div><h3 id="\u4FEE\u6539\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">vi</span> test.txt
$ <span class="token function">vim</span> test.txt
</code></pre></div><p>echo\u5199\u5165\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;</span> test.txt
</code></pre></div><h3 id="\u67E5\u8BE2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u8BE2\u6587\u4EF6</h3><p><code>cat\u3001more\u3001less</code></p><p><code>head tail</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> test.txt
$ <span class="token function">head</span> -n <span class="token number">5</span> test.txt
</code></pre></div><p><code>find</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">find</span> ./test -name <span class="token string">&quot;*.txt&quot;</span>
</code></pre></div><h3 id="\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> test.txt
</code></pre></div><h2 id="\u7CFB\u7EDF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u7BA1\u7406" aria-hidden="true">#</a> \u7CFB\u7EDF\u7BA1\u7406</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">clear</span>
$ <span class="token function">history</span>
</code></pre></div><h3 id="\u7F51\u5173" tabindex="-1"><a class="header-anchor" href="#\u7F51\u5173" aria-hidden="true">#</a> \u7F51\u5173</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ifconfig</span>
</code></pre></div><p>\u6D4B\u8BD5\u7F51\u7EDC\u7545\u901A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> www.baidu.com
</code></pre></div><p>\u4E0B\u8F7D\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> -O https://www.baidu.com/img/bd_logo1.png
</code></pre></div><h3 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ps</span>
$ <span class="token function">kill</span> <span class="token number">2309</span>
</code></pre></div><p>\u5B9E\u65F6\u663E\u793A\u8FDB\u7A0B\u72B6\u6001</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">top</span>
</code></pre></div><h3 id="\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58" aria-hidden="true">#</a> \u5185\u5B58</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">free</span> -h
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">du</span>
$ <span class="token function">du</span> -sh <span class="token builtin class-name">test</span>     <span class="token comment"># \u67E5\u770B\u76EE\u5F55\u5927\u5C0F</span>
</code></pre></div><h3 id="\u78C1\u76D8" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8" aria-hidden="true">#</a> \u78C1\u76D8</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">df</span> -h
</code></pre></div><h3 id="cpu\u6838\u6570" tabindex="-1"><a class="header-anchor" href="#cpu\u6838\u6570" aria-hidden="true">#</a> cpu\u6838\u6570</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ lscpu
$ <span class="token function">cat</span> /proc/cpuinfo
</code></pre></div><h2 id="\u76EE\u5F55\u53CA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u53CA\u6587\u4EF6" aria-hidden="true">#</a> \u76EE\u5F55\u53CA\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ps</span> -ef
<span class="token comment">## \u6587\u4EF6\u53CA\u76EE\u5F55\u7BA1\u7406</span>


\`\`\`sh
$ <span class="token function">ls</span>
$ <span class="token builtin class-name">pwd</span>
$ mdkir <span class="token builtin class-name">test</span>
$ <span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token comment"># \u6539\u540D</span>
$ <span class="token function">mv</span> old.txt new.txt
<span class="token comment"># \u590D\u5236</span>
$ <span class="token function">cp</span> test.go test2.go
<span class="token comment"># \u67E5\u770B\u6743\u9650</span>
$ ll
<span class="token comment"># \u4FEE\u6539\u6743\u9650: u \u7528\u6237\uFF0Cg \u540C\u7EC4\u6210\u5458, o \u5176\u4ED6\u6210\u5458\uFF0Cr\u53EF\u8BFB w\u53EF\u5199 x\u53EF\u6267\u884C</span>
$ <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx, <span class="token assign-left variable">g</span><span class="token operator">=</span>r, <span class="token assign-left variable">o</span><span class="token operator">=</span>r test.txt
<span class="token comment"># \u5220\u9664\u76EE\u5F55</span>
$ <span class="token function">rm</span> -rf <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">clear</span>
$ <span class="token function">history</span>
$ <span class="token function">ifconfig</span>
$ <span class="token function">top</span>
$ <span class="token function">free</span>
<span class="token comment"># \u5185\u5B58\u5360\u7528</span>
$ <span class="token function">du</span>
<span class="token comment"># \u78C1\u76D8</span>
$ <span class="token function">df</span>
<span class="token comment"># \u8FDB\u7A0B</span>
$ <span class="token function">ps</span>
<span class="token comment"># \u6740\u6B7B\u8FDB\u7A0Bpid</span>
$ <span class="token function">kill</span> <span class="token number">2799</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3><blockquote><p>\u5217\u51FA\u76EE\u5F55\u548C\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
$ <span class="token function">ls</span> \uFF5E     <span class="token comment"># \u6307\u5B9A\u76EE\u5F55\u4E0B</span>

<span class="token comment"># -a: \u663E\u793A\u6240\u6709\u6587\u4EF6\uFF08\u5305\u542B\u9690\u85CF\u6587\u4EF6\uFF09</span>
<span class="token comment"># -l: \u663E\u793A\u6587\u4EF6\u5C5E\u6027\u53CA\u6743\u9650\u7B49</span>
<span class="token comment"># -S: \u6309\u6587\u4EF6\u5927\u5C0F\u6392\u5E8F\uFF0C\u6700\u5927\u7684\u4F18\u5148</span>
<span class="token comment"># -t: \u6309\u6587\u4EF6\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F</span>
</code></pre></div><h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> \uFF5E/Documents
$ <span class="token builtin class-name">cd</span> /usr/local
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>     <span class="token comment"># \u8FD4\u56DE\u4E0A\u7EA7\u76EE\u5F55</span>
</code></pre></div><h3 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h3><blockquote><p>\u65B0\u5EFA\u76EE\u5F55</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> cpp-learn
$ <span class="token function">mkdir</span> -p cpp-learn/docs     <span class="token comment"># -p: \u521B\u5EFA\u591A\u7EA7\u76EE\u5F55</span>
</code></pre></div><h3 id="rmdir" tabindex="-1"><a class="header-anchor" href="#rmdir" aria-hidden="true">#</a> rmdir</h3><blockquote><p>\u5220\u9664\u76EE\u5F55</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">rmdir</span> <span class="token builtin class-name">test</span>
$ <span class="token function">rmdir</span> -p d1/d2/d3
<span class="token comment"># -p \u5220\u9664\u591A\u7EA7\u76EE\u5F55(\u6BCF\u5C42\u76EE\u5F55\u90FD\u9700\u5199\u51FA\u4E0D\u53EF\u5C11\uFF01\u4E0D\u63A8\u8350\u4F7F\u7528)</span>
<span class="token comment"># -v \u2013 \u5220\u9664\u76EE\u5F55\u65F6\u7684\u5197\u4F59\u8F93\u51FA</span>

<span class="token comment"># rmdir \u53EA\u80FD\u5220\u9664\u7A7A\u76EE\u5F55\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528 rm \u547D\u4EE4\u6765\u5220\u9664\u975E\u7A7A\u76EE\u5F55</span>
$ <span class="token function">rm</span> -rf d              <span class="token comment"># rm \u5220\u9664\u591A\u7EA7\u76EE\u5F55(\u63A8\u8350\u4F7F\u7528)</span>
</code></pre></div><h4 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h4><blockquote><p>\u5220\u9664\u6587\u4EF6\u53CA\u76EE\u5F55</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>-i</code>: \u8BE2\u95EE\u786E\u8BA4\u662F\u5426\u5220\u9664</p><p><code>-f</code>: \u5F3A\u5236\u5220\u9664, \u5FFD\u7565\u4E0D\u5B58\u5728\u7684\u6587\u4EF6, \u4E0D\u4F1A\u51FA\u73B0\u8B66\u544A\u4FE1\u606F</p><p><code>-r</code>: \u9012\u5F52\u5220\u9664</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>linux \u6CA1\u6709\u56DE\u6536\u671F\uFF0C\u4E00\u65E6\u5220\u9664\u975E\u5E38\u96BE\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u6587\u4EF6</span>
<span class="token function">rm</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
<span class="token function">rm</span> -i file.txt  <span class="token comment"># \u786E\u8BA4\u662F\u5426\u5220\u9664</span>
<span class="token function">rm</span> -f file.txt  <span class="token comment"># \u5F3A\u5236\u5220\u9664</span>

<span class="token comment"># \u5220\u9664\u76EE\u5F55</span>
<span class="token function">rm</span> -r <span class="token operator">&lt;</span>foldername<span class="token operator">&gt;</span>
<span class="token function">rm</span> -rf <span class="token punctuation">..</span>.      <span class="token comment"># \u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939(\u8457\u540D\u64CD\u4F5C)</span>
</code></pre></div><h4 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h4><blockquote><p>\u79FB\u52A8(\u91CD\u547D\u540D)\u6587\u4EF6/\u76EE\u5F55</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u79FB\u52A8</span>
<span class="token function">mv</span> style.css ~/Downloads
<span class="token comment"># \u91CD\u547D\u540D(\u5F53\u76EE\u5F55/\u6587\u4EF6\u4E0D\u5B58\u5728\u65F6)</span>
<span class="token function">mv</span> test.css style.css
</code></pre></div><h3 id="\u6587\u4EF6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u547D\u4EE4" aria-hidden="true">#</a> \u6587\u4EF6\u547D\u4EE4</h3><table><thead><tr><th>\u6587\u4EF6\u5185\u5BB9\u663E\u793A\u547D\u4EE4</th><th>\u8BE6\u60C5</th></tr></thead><tbody><tr><td>cat</td><td>\u663E\u793A\u6587\u4EF6\u5185\u5BB9, \u4ECE\u7B2C\u4E00\u884C\u5F00\u59CB</td></tr><tr><td>nl</td><td>\u663E\u793A\u6587\u4EF6\u5185\u5BB9, \u4ECE\u7B2C\u4E00\u884C\u5F00\u59CB, \u989D\u5916\u8F93\u51FA\u884C\u53F7</td></tr><tr><td>head</td><td>\u663E\u793A\u6587\u4EF6\u524D n \u884C\u5185\u5BB9, \u9ED8\u8BA4\u524D 10 \u884C</td></tr><tr><td>tail</td><td>\u663E\u793A\u6587\u4EF6\u540E n \u884C\u5185\u5BB9, \u9ED8\u8BA4\u540E 10 \u884C</td></tr><tr><td>more</td><td>\u5206\u9875\u663E\u793A\u6587\u4EF6\u5185\u5BB9</td></tr><tr><td>less</td><td>\u5206\u9875\u663E\u793A\u6587\u4EF6\u5185\u5BB9, \u529F\u80FD\u66F4\u591A, \u9002\u5408\u4E8E\u5927\u6587\u4EF6</td></tr></tbody></table><h4 id="touch-1" tabindex="-1"><a class="header-anchor" href="#touch-1" aria-hidden="true">#</a> touch</h4><blockquote><p>\u65B0\u5EFA\u7A7A\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">touch</span> file.sh
</code></pre></div><h4 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h4><blockquote><p>\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF0C\u9002\u5408\u4E8E\u5C0F\u6587\u4EF6, \u7531\u7B2C\u4E00\u884C\u5F00\u59CB\u663E\u793A\u6587\u4EF6\u5185\u5BB9</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
</code></pre></div><h4 id="nl" tabindex="-1"><a class="header-anchor" href="#nl" aria-hidden="true">#</a> nl</h4><blockquote><p>\u663E\u793A\u884C\u53F7</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">nl</span> style.css
<span class="token comment"># \u5982\u679C\u6709\u7A7A\u884C, \u4E5F\u5217\u51FA\u884C\u53F7</span>
$ <span class="token function">nl</span> -ba style.css
</code></pre></div><h4 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h4><blockquote><p>\u663E\u793A\u6587\u4EF6\u7684\u5F00\u5934\u51E0\u884C, \u9ED8\u8BA4\u663E\u793A\u524D 10 \u884C</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u663E\u793A\u524D10\u884C</span>
<span class="token function">head</span> file.txt
<span class="token comment"># \u663E\u793A\u5F00\u593420\u884C</span>
<span class="token function">head</span> -n <span class="token number">20</span> file.txt
</code></pre></div><h4 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h4><blockquote><p>\u663E\u793A\u6587\u4EF6\u7684\u7ED3\u5C3E\u51E0\u884C(\u9ED8\u8BA4\u540E 10 \u884C)</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u663E\u793A\u6700\u540E10\u884C</span>
<span class="token function">tail</span> file.txt
<span class="token comment"># \u663E\u793A\u6700\u540E\u768420\u884C</span>
<span class="token function">tail</span> -n <span class="token number">20</span> file.txt

<span class="token comment"># \u663E\u793A\u672B\u5C3E2\u884C</span>
<span class="token function">tail</span> <span class="token punctuation">[</span>-n  <span class="token number">2</span><span class="token punctuation">]</span> file.txt
<span class="token function">tail</span> <span class="token punctuation">[</span>-n -2<span class="token punctuation">]</span> file.txt
<span class="token comment"># \u663E\u793A\u5F00\u59342\u884C</span>
<span class="token function">tail</span> <span class="token punctuation">[</span>-n +2<span class="token punctuation">]</span> file.txt
<span class="token comment"># \u663E\u793A\u7B2C10\u884C</span>
<span class="token function">tail</span> -n +10 file.txt <span class="token operator">|</span> <span class="token function">head</span> -1

<span class="token comment"># \u4ECE\u7B2C18\u884C\u5F00\u59CB\u663E\u793A</span>
<span class="token function">tail</span> -n +18 file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h4><blockquote><p>\u5206\u9875\u663E\u793A\u6587\u4EF6\u5185\u5BB9</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">more</span> style.css
</code></pre></div><ul><li><code>space\u952E</code>\uFF1A\u4E0B\u4E00\u9875</li><li><code>b\u952E</code>\uFF1A\u4E0A\u4E00\u9875</li><li><code>enter\u952E</code>\uFF1A\u4E0B\u4E00\u884C</li><li><code>/\u5173\u952E\u8BCD</code>\uFF1A\u641C\u7D22\u8BE5\u5173\u952E\u8BCD</li><li><code>q\u952E</code>\uFF1A\u9000\u51FA</li></ul><h4 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h4><blockquote><p>\u5206\u9875\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF0C\u9002\u5408\u4E8E\u5927\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">less</span> file.txt
</code></pre></div><p><strong>\u5FEB\u6377\u952E</strong></p><ul><li><code>space\u952E</code>\uFF1A\u4E0B\u4E00\u9875</li><li><code>b\u952E</code>\uFF1A\u4E0A\u4E00\u9875</li><li><code>enter\u952E</code>\uFF1A\u4E0B\u4E00\u884C</li><li><code>y\u952E</code>\uFF1A\u4E0A\u4E00\u884C</li><li><code>q\u952E</code>\uFF1A\u9000\u51FA less \u5206\u9875\u67E5\u770B\u6A21\u5F0F</li><li><code>=\u952E</code>\uFF1A\u663E\u793A less \u9875\u9762\u8BE6\u60C5</li><li><code>h\u952E</code>\uFF1A\u663E\u793A less \u5E2E\u52A9\u6587\u6863</li><li><code>/\u952E</code>\uFF1A\u663E\u793A less \u641C\u7D22\u6A21\u5F0F\uFF0C<code>n\u952E</code>\u8DF3\u8F6C</li></ul><h3 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> file.txt
</code></pre></div><ul><li><code>i\u952E</code>\uFF1A\u7F16\u8F91\u6A21\u5F0F</li><li><code>esc\u952E</code>\uFF1A\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F, \u518D\u6309<code>:wq</code> | <code>wq!</code> \u4FDD\u5B58\u9000\u51FA vim</li><li><code>dd</code>\uFF1A\u526A\u5207\u5F53\u524D\u884C</li><li><code>yy</code>\uFF1A\u590D\u5236\u5F53\u524D\u884C</li><li><code>p</code>: \u7C98\u8D34</li><li><code>:q</code>\uFF1A\u9000\u51FA vim</li><li><code>:wq</code>\uFF1A\u4FDD\u5B58\u9000\u51FA vim</li><li><code>:wq!</code>\uFF1A\u5F3A\u5236\u4FDD\u5B58\u9000\u51FA, \u9002\u5408\u4E8E\u53EA\u8BFB\u6743\u9650\u6587\u4EF6</li><li><code>:set nu</code>\uFF1A\u663E\u793A\u884C\u53F7</li><li><code>:set nonu</code>\uFF1A\u53D6\u6D88\u663E\u793A\u884C\u53F7</li></ul><h3 id="\u78C1\u76D8\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u7BA1\u7406" aria-hidden="true">#</a> \u78C1\u76D8\u7BA1\u7406</h3><table><thead><tr><th>linux \u547D\u4EE4</th><th>\u8BE6\u60C5</th></tr></thead><tbody><tr><td>df</td><td>disk free</td></tr><tr><td>du</td><td>disk used</td></tr></tbody></table><h4 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h4><blockquote><p>\u78C1\u76D8\u5BB9\u91CF</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6574\u4F53\u78C1\u76D8\u4F7F\u7528\u91CF</span>
$ <span class="token function">df</span>
<span class="token comment"># \u6613\u8BFB\u663E\u793A\u5BB9\u91CF\u683C\u5F0F</span>
$ <span class="token function">df</span> -h
<span class="token comment"># \u663E\u793A\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u5BB9\u91CF</span>
$ <span class="token function">df</span> -h /etc
</code></pre></div><h4 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h4><blockquote><p>\u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E0B\u5404\u6587\u4EF6\u5185\u5B58\u5360\u7528</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">du</span> -sh ./*

<span class="token number">4</span>.0K    ./README.md
<span class="token number">4</span>.0K    ./craco.config.js
<span class="token number">4</span>.0K    ./deploy.sh
<span class="token number">4</span>.0K    ./jsconfig.json
<span class="token number">1</span>.3G    ./node_modules
<span class="token number">4</span>.0K    ./package.json
 94M    ./public
608K    ./src
420K    ./yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><h3 id="\u5185\u5B58\u5927\u5C0F-free" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u5927\u5C0F-free" aria-hidden="true">#</a> \u5185\u5B58\u5927\u5C0F: free</h3><h3 id="\u78C1\u76D8\u7A7A\u95F4-df" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u7A7A\u95F4-df" aria-hidden="true">#</a> \u78C1\u76D8\u7A7A\u95F4: df</h3><h3 id="\u8FDB\u7A0B-ps" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B-ps" aria-hidden="true">#</a> \u8FDB\u7A0B: ps</h3><h3 id="\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5-netstat" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5-netstat" aria-hidden="true">#</a> \u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5-netstat</h3><h2 id="linux\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Linux\u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5BFB\u627E\u6587\u4EF6\u540D\u5E76\u91CD\u547D\u540D\u6587\u4EF6</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> -name <span class="token string">&#39;\u5FAE\u4FE1\u652F\u4ED8\u8D26*.csv&#39;</span> -exec <span class="token function">mv</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> bill.csv <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</span>
$ <span class="token function">wc</span> -l README.md

<span class="token comment"># \u7EDF\u8BA1\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709go\u6587\u4EF6\u7684\u884C\u6570</span>
$ <span class="token function">find</span> ./ -name <span class="token string">&quot;*.go&quot;</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">cat</span><span class="token operator">|</span><span class="token function">wc</span> -l
<span class="token comment"># \u8FC7\u6EE4\u7A7A\u884C</span>
$ <span class="token function">find</span> ./ -name <span class="token string">&quot;*.go&quot;</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">cat</span><span class="token operator">|</span><span class="token function">grep</span> -v ^$<span class="token operator">|</span><span class="token function">wc</span> -l
</code></pre></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> colc
<span class="token comment"># \u7EDF\u8BA1\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u7C7B\u578B\u4EE3\u7801\u7684\u884C\u6570</span>
$ cloc ./

\u27A1\uFE0E  \u{1F36D}  cloc ./
      <span class="token number">32</span> text files.
      <span class="token number">26</span> unique files.
       <span class="token number">7</span> files ignored.

github.com/AlDanial/cloc <span class="token function">v</span> <span class="token number">1.92</span>  <span class="token assign-left variable">T</span><span class="token operator">=</span><span class="token number">0.02</span> s <span class="token punctuation">(</span><span class="token number">1705.5</span> files/s, <span class="token number">53591.5</span> lines/s<span class="token punctuation">)</span>
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
Go                              <span class="token number">16</span>             <span class="token number">69</span>             <span class="token number">61</span>            <span class="token number">333</span>
XML                              <span class="token number">7</span>              <span class="token number">0</span>              <span class="token number">0</span>            <span class="token number">278</span>
Markdown                         <span class="token number">1</span>              <span class="token number">9</span>              <span class="token number">0</span>             <span class="token number">55</span>
INI                              <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">0</span>              <span class="token number">6</span>
YAML                             <span class="token number">1</span>              <span class="token number">0</span>              <span class="token number">0</span>              <span class="token number">6</span>
-------------------------------------------------------------------------------
SUM:                            <span class="token number">26</span>             <span class="token number">78</span>             <span class="token number">61</span>            <span class="token number">678</span>
-------------------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EDF\u8BA1web\u670D\u52A1\u7684\u541E\u5410\u91CF</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> wrk
<span class="token comment"># Running 10s test @ http://127.0.0.1:8080/api/v1/covid-19 12 threads and 40 connections</span>
$ wrk -t12 -c40 -d10s http://127.0.0.1:8080/api/v1/covid-19
</code></pre></div><ul><li>\u6253\u5370\u6587\u4EF6\u7684\u6700\u540E 5 \u884C</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6253\u5370\u6587\u4EF6\u7684\u6700\u540E5\u884C</span>
<span class="token function">tail</span> -n <span class="token number">5</span> filename.txt
<span class="token comment"># tail -5 filename.txt</span>
</code></pre></div><ul><li>\u4ECE\u7B2C 17 \u884C\u5F00\u59CB\u6253\u5370</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;1,16d&#39;</span> filename.txt
</code></pre></div><h2 id="_2-faq-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-faq-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 2. FAQ \u5E38\u89C1\u95EE\u9898</h2><h4 id="_2-1-\u5B89\u88C5-vmware-\u540E\u6253\u5F00\u865A\u62DF\u673A\u84DD\u5C4F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5-vmware-\u540E\u6253\u5F00\u865A\u62DF\u673A\u84DD\u5C4F" aria-hidden="true">#</a> 2.1 \u5B89\u88C5 VMware \u540E\u6253\u5F00\u865A\u62DF\u673A\u84DD\u5C4F</h4><div class="language-text ext-text"><pre class="language-text"><code>\u5B89\u88C5\u6B63\u786E\u7684VMware\u865A\u62DF\u673A\u7248\u672C\u548C\u9A71\u52A8
</code></pre></div><h4 id="_2-2-linux-\u865A\u62DF\u673A\u9F20\u6807\u6709\u65F6\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#_2-2-linux-\u865A\u62DF\u673A\u9F20\u6807\u6709\u65F6\u9690\u85CF" aria-hidden="true">#</a> 2.2 linux \u865A\u62DF\u673A\u9F20\u6807\u6709\u65F6\u9690\u85CF?</h4><div class="language-text ext-text"><pre class="language-text"><code>window\u4E2D\u8BBE\u7F6E\u201C\u6253\u5F00\u9F20\u6807\u6307\u9488\u8F68\u8FF9\u201C\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u201D\u6700\u77ED&quot;
</code></pre></div><h4 id="_2-3-\u5982\u4F55\u6253\u5F00-linux-\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5982\u4F55\u6253\u5F00-linux-\u7EC8\u7AEF" aria-hidden="true">#</a> 2.3 \u5982\u4F55\u6253\u5F00 linux \u7EC8\u7AEF \uFF1F</h4><div class="language-text ext-text"><pre class="language-text"><code>\u53F3\u952E\u83DC\u5355&quot;open Terminal&quot;
</code></pre></div><h4 id="_2-4-\u5982\u4F55\u590D\u5236\u5185\u5BB9\u81F3\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5982\u4F55\u590D\u5236\u5185\u5BB9\u81F3\u865A\u62DF\u673A" aria-hidden="true">#</a> 2.4 \u5982\u4F55\u590D\u5236\u5185\u5BB9\u81F3\u865A\u62DF\u673A</h4><div class="language-text ext-text"><pre class="language-text"><code>\u62D6\u52A8window\u6587\u4EF6\u81F3\u865A\u62DF\u673A\u6587\u4EF6\u5939\u5185\u5373\u53EF,\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\u53EF\u6267\u884C
</code></pre></div>`,153);function l(c,i){return e}var d=a(n,[["render",l],["__file","linux.html.vue"]]);export{d as default};
