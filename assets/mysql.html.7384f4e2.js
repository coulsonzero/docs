import{_ as s,e as a}from"./app.afb47d0b.js";const e={},n=a(`<h1 id="m1-mysql\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#m1-mysql\u914D\u7F6E" aria-hidden="true">#</a> M1 MySQL\u914D\u7F6E</h1><p>Mysql8.0.25\u73AF\u5883\u53D8\u91CF\u914D\u7F6E</p><div class="language-text ext-text"><pre class="language-text"><code>username: root
password: coulsonzero
</code></pre></div><p>\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\uFF1A Step1</p><div class="language-text ext-text"><pre class="language-text"><code>vim \uFF5E/.bash_profile
</code></pre></div><ol start="2"><li>\u6309i\u7F16\u8F91</li><li>\u8F93\u5165</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/mysql/bin
</code></pre></div><p>\u6216\u8005</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/mysql/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/mysql/support-files
</code></pre></div><ol start="4"><li>\u6309Esc\u9000\u51FA\u7F16\u8F91\uFF0C\u6309 :wq\u4FDD\u5B58\u540E\u9000\u51FA, readonly\u5219\u52A0\u611F\u53F9\u53F7 :wq!</li></ol><div class="language-text ext-text"><pre class="language-text"><code>
\u5237\u65B0\u73AF\u5883\u53D8\u91CF
\`\`\`sh
source ~/.bash_profile
</code></pre></div><p>\u8FD0\u884Cmysql</p><div class="language-bash ext-sh"><pre class="language-bash"><code>mysql -u root -p
</code></pre></div><p>\u4F46\u662F\u5173\u95ED\u7EC8\u7AEF\u540E\u518D\u8FD0\u884Cmysql\u6CA1\u6709\u6210\u6548\uFF1A\u6BCF\u6B21\u5237\u65B0\u73AF\u5883\u53D8\u91CF =&gt;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc
<span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre></div>`,15);function t(l,o){return n}var p=s(e,[["render",t],["__file","mysql.html.vue"]]);export{p as default};
