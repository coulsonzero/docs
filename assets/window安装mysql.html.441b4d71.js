import{_ as e,e as s}from"./app.afb47d0b.js";const n={},a=s(`<h1 id="window\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#window\u5B89\u88C5mysql" aria-hidden="true">#</a> window\u5B89\u88C5mysql</h1><h2 id="\u5B89\u88C5\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7F51\u5740" aria-hidden="true">#</a> \u5B89\u88C5\u7F51\u5740</h2><div class="language-text ext-text"><pre class="language-text"><code>1. \u8F93\u5165URL:  https://dev.mysql.com/downloads/mysql/
2. \u70B9\u51FB &lt;Download&gt;
3. \u70B9\u51FB &lt;No thanks, just start my download&gt;
</code></pre></div><h2 id="path\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#path\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" aria-hidden="true">#</a> PATH\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\uFF1A</h2><div class="language-text ext-text"><pre class="language-text"><code>1. \u53F3\u952E\u70B9\u51FB&lt;\u6211\u7684\u7535\u8111&gt; &quot;\u5C5E\u6027&quot;
2. \u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E-- \u73AF\u5883\u53D8\u91CF--\u7CFB\u7EDF\u53D8\u91CF--\u53CC\u51FBpath
3. \u65B0\u5EFAMySQL\u5B89\u88C5\u8DEF\u5F84\uFF1A D:\\MySQL\\mysql-8.0.25-winx64\\bin
4. \u786E\u5B9A
</code></pre></div><p>\u65B0\u5EFAdata\u6587\u4EF6\u5939 MySQL\u5B89\u88C5\u8DEF\u5F84\u4E0B\u914D\u7F6E&quot;my.ini&quot;\u6587\u4EF6 (\u6CE8\u610F\u4FEE\u6539\u8DEF\u5F84)</p><div class="language-text ext-text"><pre class="language-text"><code>[mysqld]
#skip-grant-tables
basedir=D:\\MySQL\\mysql-8.0.25-winx64
datadir=D:\\MySQL\\mysql-8.0.25-winx64\\data\\
port=root
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB
</code></pre></div><h2 id="cmd\u5B89\u88C5\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#cmd\u5B89\u88C5\u6D41\u7A0B" aria-hidden="true">#</a> cmd\u5B89\u88C5\u6D41\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884Ccmd (\u5E38\u89C4cmd\u6743\u9650\u62A5\u9519: &quot;Install/Remove of the Service Denied!&quot;)
2. \u5207\u6362\u5230MySQL\u5B89\u88C5\u8DEF\u5F84\uFF1Acd /d D:\\MySQL\\mysql-8.0.25-winx64
3. \u5B89\u88C5mysql, \u521D\u59CB\u5316
mysqld --install  (\u5DF2\u5B89\u88C5mysql\u62A5\u9519: &quot;The service already exists!&quot;)
mysqld --initialize  (\u751F\u6210data\u6587\u4EF6\u5939)
4. \u8FDE\u63A5\u670D\u52A1, \u767B\u5F55mysql\u8F93\u5165\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u7684\u5BC6\u7801\u5E76\u4FEE\u6539\u5BC6\u7801 (\u65E0\u6CD5\u8FDE\u63A5mysql\u670D\u52A1\uFF1A&quot;The MySQL service could not be started.&quot;)
net start mysql
5. mysql -u root -p
&gt; Enterpassword: **** (\u5BC6\u7801\u5728data\u6587\u4EF6\u5939\u4E0B\u7684**.err\u6587\u4EF6\u4E0B\uFF0C\u590D\u5236\u4FEE\u6539\u6210txt\u6587\u672C\u67E5\u770B\u5BC6\u7801)
6. \u4FEE\u6539mysql\u8D26\u6237\u767B\u5F55\u5BC6\u7801
mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;&#39;;
7. \u5173\u95EDmysql: mysql&gt; exit
8. \u505C\u6B62mysql\u670D\u52A1: net stop mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd\u6B63\u5E38\u8FD0\u884Cmysql\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#cmd\u6B63\u5E38\u8FD0\u884Cmysql\u6D41\u7A0B" aria-hidden="true">#</a> cmd\u6B63\u5E38\u8FD0\u884Cmysql\u6D41\u7A0B</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>\u7BA1\u7406\u5458\u6743\u9650\u542F\u52A8cmd
<span class="token number">1</span>. net start mysql
<span class="token number">2</span>. mysql -u root -p
Enter password: ****
<span class="token number">3</span>. mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token number">4</span>. net stop mysql
<span class="token comment">#mysql [-h \u4E3B\u673A\u540D -P \u7AEF\u53E3\u53F7] -u \u7528\u6237\u540D -p \u56DE\u8F66\u540E\u8F93\u5165\u5BC6\u7801</span>
<span class="token punctuation">(</span>mysql -h localhost -P root -u root -p<span class="token punctuation">)</span>
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u5E38\u89C4cmd\u6743\u9650\u8FD0\u884C\uFF1A&quot;Install/Remove of the Service Denied!&quot;
=&gt; \u4F7F\u7528\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884Ccmd
3. MySQL\u5DF2\u5B89\u88C5\uFF1A&quot;The service already exists!&quot;
=&gt;
mysqld --remove
mysqld --install
mysqld --initialize
4. \u8F93\u5165net start mysql =&gt; &quot;The MySQL service could not be started.&quot;
=&gt; \u7BA1\u7406\u5458\u6743\u9650\u6253\u5F00cmd\uFF0C\u5220\u9664data\u6587\u4EF6\uFF0C\u505C\u6B62MySQL, \u518D\u8F93\u5165&quot;mysqld --remove&quot;\u91CD\u88C5\u5373\u53EF
5. \u5BC6\u7801\u8F93\u5165\u4E0D\u6B63\u786E\uFF1A&quot;ERROR 1045 (28000): Access denied for user &#39;root&#39;@&#39;localhost&#39; (using password: YES)&quot;
=&gt; \u5BC6\u7801\u5728data\u6587\u4EF6\u5939\u4E0B\u7684**.err\u6587\u4EF6\u4E0B\uFF0C\u590D\u5236\u4FEE\u6539\u4E58txt\u6587\u672C\u67E5\u770B\u5BC6\u7801\uFF0C\u8F93\u5165\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u5BC6\u7801\u8FDB\u5165mysql\u540E\uFF0C
\u518D\u4FEE\u6539\u5BC6\u7801 mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;root&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function t(d,i){return a}var r=e(n,[["render",t],["__file","window\u5B89\u88C5mysql.html.vue"]]);export{r as default};
