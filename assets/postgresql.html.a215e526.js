import{_ as s,e}from"./app.dbb4eb6f.js";const a={},n=e(`<h1 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> postgreSQL</h1><p>install</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> postgresql@18
</code></pre></div><p>install successful</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=&quot;/Users/coulsonzero/homebrew/opt/postgresql@18/bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
<span class="token builtin class-name">source</span> ~/.zshrc
brew services start postgresql@18   <span class="token comment"># \u5F00\u673A\u81EA\u542F\u52A8</span>
psql --version
<span class="token comment"># psql (PostgreSQL) 18.4 (Homebrew)</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>psql coulsonzero    <span class="token comment"># \u521B\u5EFA\u6570\u636E\u5E93coulsonzero, \u9ED8\u8BA4\u4E3Apostgres</span>
psql
</code></pre></div><p>usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code>psql postgres <span class="token comment"># \u8FDB\u5165\u9ED8\u8BA4\u6570\u636E\u5E93</span>
psql -h localhost -p <span class="token number">5432</span> -U coulsonzero -d postgres <span class="token comment"># \u8FDE\u63A5\u6570\u636E\u5E93</span>
<span class="token comment"># psql (18.4 (Homebrew))</span>
<span class="token comment"># postgres=#</span>
<span class="token comment"># \u8FDE\u63A5\u6570\u636E\u5E93, \u9000\u51FA\u5728psql \u754C\u9762\u4E2D\u8F93\u5165 \\q \u5E76\u6309\u56DE\u8F66\u5373\u53EF\u9000\u51FA</span>
</code></pre></div><p>\u5E38\u7528 psql \u5143\u547D\u4EE4\uFF1A\u5728 psql \u5BA2\u6237\u7AEF\u5185\uFF0C\u6709\u8BB8\u591A\u4EE5\u53CD\u659C\u6760 \\ \u5F00\u5934\u7684\u5143\u547D\u4EE4\uFF0C\u975E\u5E38\u5B9E\u7528\u3002 \\l: \u5217\u51FA\u6240\u6709\u6570\u636E\u5E93 \\c <code>&lt;dbname&gt;</code>: \u5207\u6362\u5230\u6307\u5B9A\u6570\u636E\u5E93 \\dt: \u5217\u51FA\u5F53\u524D\u6570\u636E\u5E93\u7684\u6240\u6709\u8868 \\d <code>&lt;tablename&gt;</code>: \u67E5\u770B\u8868\u7ED3\u6784 \\du: \u5217\u51FA\u6240\u6709\u7528\u6237\u548C\u89D2\u8272 ?: \u67E5\u770B\u6240\u6709\u5143\u547D\u4EE4\u7684\u5E2E\u52A9 \\q: \u9000\u51FA psql</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="\u5B89\u88C5\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5931\u8D25" aria-hidden="true">#</a> \u5B89\u88C5\u5931\u8D25</h3><ul><li>error question: <code>A </code>brew install postgresql@18<code> process has already locked /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete</code></li></ul><p>solution:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rm</span> -f /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete

brew <span class="token function">install</span> postgresql@18
</code></pre></div><ul><li>error question: configure: error: The <code>pkg-config</code> script could not be found or is too old. Make sure it is in your PATH or set the PKG_CONFIG environment variable to the full path to pkg-config.</li></ul><p>solution:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> pkg-config
brew <span class="token function">link</span> pkgconf
brew update
</code></pre></div>`,17);function o(c,l){return n}var r=s(a,[["render",o],["__file","postgresql.html.vue"]]);export{r as default};
