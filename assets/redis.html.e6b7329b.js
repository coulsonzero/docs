import{_ as s,e as a}from"./app.afb47d0b.js";const n={},e=a(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><h2 id="\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> \u73AF\u5883\u5B89\u88C5</h2><blockquote><p>\u5B89\u88C5redis</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> redis
</code></pre></div><h2 id="\u542F\u52A8\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u542F\u52A8\u5BA2\u6237\u7AEF</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># step1. \u540E\u53F0\u542F\u52A8redis\u670D\u52A1\u7AEF</span>
$ brew services restart redis

<span class="token comment"># step2. \u542F\u52A8redis\u5BA2\u6237\u7AEF</span>
$ redis-cli
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>         <span class="token comment"># ^ + C: \u5173\u95ED\u5BA2\u6237\u7AEF</span>

<span class="token comment"># step3. \u5173\u95ED\u540E\u53F0\u670D\u52A1</span>
$ brew services stop redis
</code></pre></div><blockquote><ol><li>\u542F\u52A8redis\u670D\u52A1</li></ol></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u65B9\u5F0F\u4E00: \u540E\u53F0\u8FD0\u884Credis\u670D\u52A1</span>
$ brew services restart redis
<span class="token comment"># \u65B9\u5F0F\u4E8C</span>
$ redis-server
</code></pre></div><blockquote><ol start="2"><li>\u542F\u52A8redis\u5BA2\u6237\u7AEF</li></ol></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u5BA2\u6237\u7AEF, \u9ED8\u8BA4port\u4E3A6379</span>
$ redis-cli
$ redis-cli -h <span class="token number">127.0</span>.0.1 -p <span class="token number">6379</span>
</code></pre></div><blockquote><ol start="3"><li>\u5173\u95EDredis\u5BA2\u6237\u7AEF\u8FDE\u63A5</li></ol></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED\u5BA2\u6237\u7AEF</span>
redis<span class="token operator">&gt;</span> <span class="token function">shutdown</span>
not connected<span class="token operator">&gt;</span> quit

</code></pre></div><blockquote><ol start="4"><li>\u5173\u95ED\u670D\u52A1</li></ol></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ brew services stop redis

<span class="token comment"># \u5F3A\u884C\u7EC8\u6B62</span>
<span class="token comment"># $ sudo pkill redis-server</span>
</code></pre></div><blockquote><p>\u67E5\u770Bredis\u8FD0\u884C\u72B6\u51B5</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ brew services info redis
</code></pre></div><blockquote><p>\u67E5\u770Bredis\u8FDB\u7A0B</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">ps</span> axu <span class="token operator">|</span> <span class="token function">grep</span> redis
</code></pre></div><blockquote><p>\u67E5\u8BE2redis\u5BC6\u7801</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass
</code></pre></div><blockquote><p>\u4FEE\u6539redis\u5BC6\u7801\u4E3A&quot;root&quot;</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass root
</code></pre></div><h2 id="redisinsight" tabindex="-1"><a class="header-anchor" href="#redisinsight" aria-hidden="true">#</a> RedisInsight</h2><blockquote><p>redis\u53EF\u89C6\u5316\u5DE5\u5177</p></blockquote><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><blockquote><p>REmote DIctionary Server(Redis)</p><p>Redis \u662F\u4E00\u4E2A\u5F00\u6E90\uFF08BSD\u8BB8\u53EF\uFF09\u7684\uFF0C\u5185\u5B58\u4E2D\u7684\u6570\u636E\u7ED3\u6784\u5B58\u50A8\u7CFB\u7EDF\uFF0C\u5B83\u53EF\u4EE5\u7528\u4F5C\u6570\u636E\u5E93\u3001\u7F13\u5B58\u548C\u6D88\u606F\u4E2D\u95F4\u4EF6</p><p>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93</p></blockquote><h2 id="\u6570\u636E\u7ED3\u6784\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784\u7C7B\u578B</h2><ul><li>String: \u5B57\u7B26\u4E32</li><li>Hash: \u6563\u5217</li><li>List: \u5217\u8868</li><li>Set: \u96C6\u5408</li><li>Sorted Set: \u6709\u5E8F\u96C6\u5408</li></ul><h2 id="string-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#string-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> String \u5B57\u7B26\u4E32</h2><h3 id="\u589E" tabindex="-1"><a class="header-anchor" href="#\u589E" aria-hidden="true">#</a> \u589E</h3><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> SET</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u53D8\u91CF\u8D4B\u503C\uFF0C\u5982\u679C\u5DF2\u5B58\u5728\u5219\u8986\u76D6</span>
<span class="token keyword">SET</span> name <span class="token string">&quot;Coulson&quot;</span>
</code></pre></div><h4 id="append" tabindex="-1"><a class="header-anchor" href="#append" aria-hidden="true">#</a> APPEND</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5982\u679C\u53D8\u91CF\u5B58\u5728\uFF0C\u5219\u672B\u5C3E\u8FFD\u52A0\uFF0C \u5982\u679C\u53D8\u91CF\u4E0D\u5B58\u5728\uFF0C\u5219\u76F8\u5F53\u4E8ESET</span>
append name <span class="token string">&quot; Zero&quot;</span>
</code></pre></div><h3 id="\u5220" tabindex="-1"><a class="header-anchor" href="#\u5220" aria-hidden="true">#</a> \u5220</h3><div class="language-sql ext-sql"><pre class="language-sql"><code>del name
</code></pre></div><h3 id="\u67E5" tabindex="-1"><a class="header-anchor" href="#\u67E5" aria-hidden="true">#</a> \u67E5</h3><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5185\u5BB9</span>
GET name
</code></pre></div><h4 id="getrange" tabindex="-1"><a class="header-anchor" href="#getrange" aria-hidden="true">#</a> GETRANGE</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u5B57\u7B26\u4E32\u7D22\u5F15\u5B50\u4E32(\u5F00\u59CB\u7D22\u5F15\uFF0C\u5B57\u7B26\u957F\u5EA6\u53EF\u8D8A\u754C)</span>
getrange name <span class="token number">1</span> <span class="token number">4</span>
</code></pre></div><h4 id="strlen" tabindex="-1"><a class="header-anchor" href="#strlen" aria-hidden="true">#</a> STRLEN</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u5B57\u7B26\u4E32\u957F\u5EA6</span>
strlen name
</code></pre></div><h4 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> EXISTS</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5B58\u5728\u4E3A1\uFF0C\u5426\u5219\u4E3A0</span>
<span class="token keyword">exists</span> name
</code></pre></div><hr><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u793A\u4F8B</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SET</span> name <span class="token string">&quot;Coulson&quot;</span>
redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> APPEND name <span class="token string">&quot; Zero&quot;</span>
redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> GET name
<span class="token string">&quot;Coulson Zero&quot;</span>
redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> GETRANGE name <span class="token number">1</span> <span class="token number">3</span>
<span class="token string">&quot;oul&quot;</span>
redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> STRLEN name
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">7</span>
redis<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">exists</span> name
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="list-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#list-\u5217\u8868" aria-hidden="true">#</a> List \u5217\u8868</h2><h3 id="\u589E-1" tabindex="-1"><a class="header-anchor" href="#\u589E-1" aria-hidden="true">#</a> \u589E</h3><blockquote><p>\u5982\u679Clist\u4E0D\u5B58\u5728\uFF0C\u5219\u65B0\u5EFA</p></blockquote><h4 id="lpush-rpush" tabindex="-1"><a class="header-anchor" href="#lpush-rpush" aria-hidden="true">#</a> LPUSH &amp; RPUSH</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5C3E\u90E8\u6DFB\u52A0</span>
rpush mylist <span class="token string">&quot;mysql&quot;</span>

<span class="token comment"># \u5934\u90E8\u6DFB\u52A0</span>
lpush mylist <span class="token string">&quot;redis&quot;</span>
</code></pre></div><hr><h3 id="\u5220-1" tabindex="-1"><a class="header-anchor" href="#\u5220-1" aria-hidden="true">#</a> \u5220</h3><h4 id="del" tabindex="-1"><a class="header-anchor" href="#del" aria-hidden="true">#</a> DEL</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u6E05\u7A7A\u6570\u7EC4\u5168\u90E8\u503C</span>
del mylist
</code></pre></div><h4 id="rpop-lpop" tabindex="-1"><a class="header-anchor" href="#rpop-lpop" aria-hidden="true">#</a> RPOP &amp; LPOP</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5220\u9664\u5E76\u8FD4\u56DE\u672B\u5C3E\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
rpop mylist
<span class="token comment"># \u5220\u9664\u5E76\u8FD4\u56DE\u5934\u90E8\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
lpop mylist
</code></pre></div><hr><h3 id="\u67E5-1" tabindex="-1"><a class="header-anchor" href="#\u67E5-1" aria-hidden="true">#</a> \u67E5</h3><h4 id="lrange" tabindex="-1"><a class="header-anchor" href="#lrange" aria-hidden="true">#</a> LRANGE</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u67E5\u770B\u6570\u7EC4\u6240\u6709\u5185\u5BB9</span>
lrange mylist <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre></div><h4 id="lindex" tabindex="-1"><a class="header-anchor" href="#lindex" aria-hidden="true">#</a> LINDEX</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u6570\u7EC4\u7D22\u5F15\u5BF9\u5E94\u7684\u503C,\u7A7A\u4E3Anil</span>
lindex mylist <span class="token number">0</span>
lindex mylist <span class="token operator">-</span><span class="token number">1</span>
</code></pre></div><h4 id="llen" tabindex="-1"><a class="header-anchor" href="#llen" aria-hidden="true">#</a> LLEN</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u6570\u7EC4\u957F\u5EA6</span>
llen mylist
</code></pre></div><h2 id="hash-\u54C8\u5E0C\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#hash-\u54C8\u5E0C\u5B57\u5178" aria-hidden="true">#</a> Hash \u54C8\u5E0C\u5B57\u5178</h2><h3 id="\u589E-2" tabindex="-1"><a class="header-anchor" href="#\u589E-2" aria-hidden="true">#</a> \u589E</h3><h4 id="hmset" tabindex="-1"><a class="header-anchor" href="#hmset" aria-hidden="true">#</a> HMSET</h4><div class="language-sql ext-sql"><pre class="language-sql"><code>hmset <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token keyword">value</span> <span class="token punctuation">[</span>field <span class="token keyword">value</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hmset myhash name <span class="token string">&quot;Coulson&quot;</span> age <span class="token number">25</span> country <span class="token string">&quot;China&quot;</span>
</code></pre></div><h3 id="\u5220-2" tabindex="-1"><a class="header-anchor" href="#\u5220-2" aria-hidden="true">#</a> \u5220</h3><h4 id="del-1" tabindex="-1"><a class="header-anchor" href="#del-1" aria-hidden="true">#</a> DEL</h4><div class="language-sql ext-sql"><pre class="language-sql"><code>del myhash
</code></pre></div><h4 id="hdel" tabindex="-1"><a class="header-anchor" href="#hdel" aria-hidden="true">#</a> HDEL</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5220\u9664\u5B57\u6BB5\u5E76\u8FD4\u56DE\u7D22\u5F15</span>
hdel <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>field<span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hdel myhash age
</code></pre></div><h3 id="\u67E5-2" tabindex="-1"><a class="header-anchor" href="#\u67E5-2" aria-hidden="true">#</a> \u67E5</h3><h4 id="hgetall" tabindex="-1"><a class="header-anchor" href="#hgetall" aria-hidden="true">#</a> HGETALL</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DEhash\u6240\u6709\u7684\u5B57\u6BB5\u548C\u503C</span>
hgetall <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hgetall myhash
</code></pre></div><h4 id="hget-hmget" tabindex="-1"><a class="header-anchor" href="#hget-hmget" aria-hidden="true">#</a> HGET &amp; HMGET</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u5355\u4E2A\u5B57\u6BB5\u503C</span>
hget <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>field<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DE\u591A\u4E2A\u6307\u5B9A\u5B57\u6BB5\u7684\u503C</span>
hmget <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>field <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hget myhash name
hmget myhash name age country

</code></pre></div><h4 id="hkeys" tabindex="-1"><a class="header-anchor" href="#hkeys" aria-hidden="true">#</a> HKEYS</h4><div class="language-sql ext-sql"><pre class="language-sql"><code>hget <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hkeys myhash
</code></pre></div><h4 id="hvals" tabindex="-1"><a class="header-anchor" href="#hvals" aria-hidden="true">#</a> HVALS</h4><div class="language-sql ext-sql"><pre class="language-sql"><code>hvals <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>hvals myhash
</code></pre></div><h3 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u793A\u4F8B</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hmset myhash name <span class="token string">&quot;Coulson&quot;</span> age <span class="token number">25</span> country <span class="token string">&quot;China&quot;</span>
OK
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hgetall myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Coulson&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;country&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;China&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hget myhash name
<span class="token string">&quot;Coulson&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hget myhash age
<span class="token string">&quot;25&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hget myhash country
<span class="token string">&quot;China&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hdel myhash age
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> HMGET myhash name age country
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Coulson&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;China&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hkeys myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;country&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> hvals myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Coulson&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;China&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="set-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#set-\u96C6\u5408" aria-hidden="true">#</a> Set \u96C6\u5408</h2><h3 id="\u589E-3" tabindex="-1"><a class="header-anchor" href="#\u589E-3" aria-hidden="true">#</a> \u589E</h3><h4 id="sadd" tabindex="-1"><a class="header-anchor" href="#sadd" aria-hidden="true">#</a> SADD</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u672B\u5C3E\u589E\u52A0\u5143\u7D20, \u5982\u679C\u5143\u7D20\u5B58\u5728\u5219\u8FD4\u56DE0\u5E76\u5C06\u6B64\u5143\u7D20\u7F6E\u4E8E\u672B\u5C3E\uFF0C\u4E0D\u5B58\u5728\u8FD4\u56DE1</span>
sadd <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">value</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u672B\u5C3E\u589E\u52A0\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u6570\u91CF</span>
sadd myset <span class="token string">&quot;mysql&quot;</span>
sadd myset <span class="token string">&quot;redis&quot;</span> <span class="token string">&quot;mongodb&quot;</span>
</code></pre></div><h3 id="\u5220-3" tabindex="-1"><a class="header-anchor" href="#\u5220-3" aria-hidden="true">#</a> \u5220</h3><h4 id="del-2" tabindex="-1"><a class="header-anchor" href="#del-2" aria-hidden="true">#</a> DEL</h4><div class="language-sql ext-sql"><pre class="language-sql"><code>del myset
</code></pre></div><h4 id="spop" tabindex="-1"><a class="header-anchor" href="#spop" aria-hidden="true">#</a> SPOP</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5220\u9664\u6307\u5B9A\u7D22\u5F15\u5143\u7D20\uFF0C\u7D22\u5F15\u8D8A\u754C\u5219\u8FD4\u56DE\u6574\u4E2A\u96C6\u5408\u7684\u6240\u6709\u5143\u7D20\uFF01</span>
spop <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">index</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>spop myset <span class="token number">1</span>
</code></pre></div><h4 id="srem" tabindex="-1"><a class="header-anchor" href="#srem" aria-hidden="true">#</a> SREM</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5220\u9664\u6307\u5B9A\u540D\u79F0\u7684\u5143\u7D20</span>
srem <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">value</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>srem myset <span class="token string">&quot;mysql&quot;</span>
</code></pre></div><h3 id="\u67E5-3" tabindex="-1"><a class="header-anchor" href="#\u67E5-3" aria-hidden="true">#</a> \u67E5</h3><h4 id="smembers" tabindex="-1"><a class="header-anchor" href="#smembers" aria-hidden="true">#</a> SMEMBERS</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u67E5\u770BSet\u96C6\u5408\u4E2D\u7684\u6240\u6709\u5143\u7D20</span>
smembers <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>smembers myset
</code></pre></div><h4 id="scard" tabindex="-1"><a class="header-anchor" href="#scard" aria-hidden="true">#</a> SCARD</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u6570\u91CF</span>
scard <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code>scard myset
</code></pre></div><h3 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770BSet\u793A\u4F8B</summary><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> sadd myset <span class="token string">&quot;mysql&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> sadd myset <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> sadd myset <span class="token string">&quot;mongodb&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;redis&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;mongodb&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;mysql&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> sadd myset <span class="token string">&quot;mysql&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;redis&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;mongodb&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;mysql&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> SPOP myset <span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;mongodb&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;redis&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;mysql&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> srem myset <span class="token string">&quot;mysql&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;redis&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="sorted-set-\u6709\u5E8F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#sorted-set-\u6709\u5E8F\u96C6\u5408" aria-hidden="true">#</a> Sorted Set \u6709\u5E8F\u96C6\u5408</h2><h3 id="\u589E-4" tabindex="-1"><a class="header-anchor" href="#\u589E-4" aria-hidden="true">#</a> \u589E</h3><h4 id="zadd" tabindex="-1"><a class="header-anchor" href="#zadd" aria-hidden="true">#</a> ZADD</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u5143\u7D20, \u5982\u679C\u5B58\u5728\u5219\u820D\u5F03\u4E4B\u524D\u7684\u5143\u7D20\u548C\u7D22\u5F15\uFF0C\u4FDD\u7559\u6700\u65B0\u7684</span>
zadd myzset <span class="token number">1</span> <span class="token string">&quot;python&quot;</span>
<span class="token comment"># \u589E\u52A0\u591A\u4E2A\u5143\u7D20</span>
zadd myzset <span class="token number">2</span> <span class="token string">&quot;java&quot;</span> <span class="token number">3</span> <span class="token string">&quot;javascript&quot;</span>
</code></pre></div><h3 id="\u5220-4" tabindex="-1"><a class="header-anchor" href="#\u5220-4" aria-hidden="true">#</a> \u5220</h3><h4 id="zpopmax-zpopmin" tabindex="-1"><a class="header-anchor" href="#zpopmax-zpopmin" aria-hidden="true">#</a> ZPOPMAX &amp; ZPOPMIN</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
zpopmax <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
zpopmin
</code></pre></div><h3 id="\u67E5-4" tabindex="-1"><a class="header-anchor" href="#\u67E5-4" aria-hidden="true">#</a> \u67E5</h3><h4 id="zrangebylex" tabindex="-1"><a class="header-anchor" href="#zrangebylex" aria-hidden="true">#</a> ZRANGEBYLEX</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u6309\u7167\u63D2\u5165\u65F6\u7684\u987A\u5E8F\u6392\u5217</span>
ZRANGEBYLEX <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token operator">+</span>
</code></pre></div><h4 id="zrevrange" tabindex="-1"><a class="header-anchor" href="#zrevrange" aria-hidden="true">#</a> ZREVRANGE</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u964D\u5E8F</span>
ZREVRANGE <span class="token string">&quot;score&quot;</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span> WITHSCORES
</code></pre></div><h4 id="zrange" tabindex="-1"><a class="header-anchor" href="#zrange" aria-hidden="true">#</a> ZRANGE</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u5347\u5E8F</span>
ZRANGE <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span> WITHSCORES
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>ZRANGE myzset 0 -1 WITHSCORES
</code></pre></div><h4 id="zscore" tabindex="-1"><a class="header-anchor" href="#zscore" aria-hidden="true">#</a> ZSCORE</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u5143\u7D20\u7D22\u5F15</span>
zscore myzset <span class="token string">&quot;javascript&quot;</span>
</code></pre></div><h4 id="zcard" tabindex="-1"><a class="header-anchor" href="#zcard" aria-hidden="true">#</a> ZCARD</h4><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u957F\u5EA6(\u5143\u7D20\u4E2A\u6570)</span>
zcard <span class="token punctuation">[</span><span class="token keyword">key</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> zadd myzset <span class="token number">1</span> <span class="token string">&quot;python&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> zadd myzset <span class="token number">2</span> <span class="token string">&quot;java&quot;</span> <span class="token number">3</span> <span class="token string">&quot;javascript&quot;</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> ZRANGE myzset <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span> WITHSCORES
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;python&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;java&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;javascript&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>

<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> zscore myzset <span class="token string">&quot;javascript&quot;</span>
<span class="token string">&quot;3&quot;</span>

redis<span class="token operator">&gt;</span> ZRANGEBYLEX myzset <span class="token operator">-</span> <span class="token operator">+</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;python&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;java&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;javascript&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;rust&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u547D\u4EE4" aria-hidden="true">#</a> \u6D4B\u8BD5\u547D\u4EE4</h2><h3 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> ECHO</h3><blockquote><p>\u8F93\u51FA</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code>redis<span class="token operator">&gt;</span> ECHO HelloWorld<span class="token operator">!</span>
HelloWorld<span class="token operator">!</span>
</code></pre></div><h3 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> PING</h3><blockquote><p>\u6D4B\u8BD5\u8FDE\u63A5\u53CA\u5176\u5EF6\u65F6, \u5176\u540E\u6709\u53C2\u6570\u65F6\u8FD4\u56DE\u53C2\u6570\uFF0C\u65E0\u53C2\u6570\u8FD4\u56DE&quot;pong&quot; \u5BA2\u6237\u7AEF\u5904\u4E8E\u9891\u9053\u8BA2\u9605\u6A21\u5F0F\u4E0B\uFF0C\u5B83\u5C06\u662F\u4E00\u4E2Amulti-bulk\u8FD4\u56DE\uFF0C\u7B2C\u4E00\u6B21\u65F6\u8FD4\u56DE\u201Dpong\u201D\uFF0C\u4E4B\u540E\u8FD4\u56DE\u7A7A\uFF08empty bulk\uFF09\uFF0C\u9664\u975E\u547D\u4EE4\u540E\u9762\u66F4\u968F\u4E86\u53C2\u6570</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>redis&gt; PING
PONG
redis&gt; PING &quot;hello world&quot;
&quot;hello world&quot;
</code></pre></div><h3 id="shutdown" tabindex="-1"><a class="header-anchor" href="#shutdown" aria-hidden="true">#</a> SHUTDOWN</h3><blockquote><p>\u5173\u95ED\u8FDE\u63A5</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code>redis<span class="token operator">&gt;</span> <span class="token keyword">shutdown</span>
</code></pre></div><h3 id="quit" tabindex="-1"><a class="header-anchor" href="#quit" aria-hidden="true">#</a> QUIT</h3><blockquote><p>\u5173\u95EDredis\u8FDE\u63A5\uFF0C\u9000\u51FAredis-cli</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code>redis<span class="token operator">&gt;</span> quit
</code></pre></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h3><blockquote><p>\u5207\u6362\u5F53\u524D\u6570\u636E\u5E93\u7D22\u5F15</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code>redis<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token punctuation">[</span><span class="token keyword">index</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="save" tabindex="-1"><a class="header-anchor" href="#save" aria-hidden="true">#</a> SAVE</h3><blockquote><p>\u521B\u5EFA\u5F53\u524D\u6570\u636E\u5E93\u7684\u5907\u4EFD</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code>redis<span class="token operator">&gt;</span> <span class="token keyword">save</span>
</code></pre></div><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h3><blockquote><p>\u5BA2\u6237\u7AEF\u8FDE\u63A5</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># \u8FD4\u56DE\u5BA2\u6237\u7AEF\u5217\u8868</span>
CLIENT LIST
<span class="token comment"># \u8FD4\u56DE\u5F53\u524D\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684\u540D\u79F0</span>
CLIENT SETNAME
<span class="token comment"># \u6302\u8D77\u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
CLIENT PAUSE
<span class="token comment"># \u5173\u95ED\u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
CLIENT <span class="token keyword">KILL</span>
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><ul><li>Redis\u6570\u636E\u7C7B\u578B</li></ul><div class="language-text ext-text"><pre class="language-text"><code>String: \u5B57\u7B26\u4E32
List: \u5217\u8868
Hash: \u54C8\u5E0C
Set: \u96C6\u5408
Zset: \u6709\u5E8F\u96C6\u5408
</code></pre></div><ul><li>Redis\u6301\u4E45\u5316\u673A\u5236</li></ul><div class="language-text ext-text"><pre class="language-text"><code>RDB: \u5C06\u6570\u636E\u5E93\u5FEB\u7167\u4EE5\u4E8C\u8FDB\u5236\u7684\u65B9\u5F0F\u4FDD\u5B58\u5230\u78C1\u76D8\u4E2D
AOF: \u4EE5\u534F\u8BAE\u6587\u672C\u7684\u65B9\u5F0F\uFF0C\u5C06\u6240\u6709\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u5199\u5165\u7684\u547D\u4EE4\u548C\u53C2\u6570\u8BB0\u5F55\u5230AOF\u6587\u4EF6\uFF0C\u4ECE\u800C\u8BB0\u5F55\u6570\u636E\u5E93\u72B6\u6001
</code></pre></div><ul><li>Redis: WRONGTYPE Operation against a key holding the wrong kind of value</li></ul><blockquote><p>redis \u4E2D\u5DF2\u7ECF\u5B58\u5728\u540C\u540D\uFF0C\u4F46\u4E0D\u540C\u7C7B\u578B\u7684 key \u503C\uFF0C \u5220\u9664\u6B64 key \u518D\u91CD\u65B0\u6267\u884C\u5373\u53EF</p></blockquote>`,166);function t(p,l){return e}var c=s(n,[["render",t],["__file","redis.html.vue"]]);export{c as default};
