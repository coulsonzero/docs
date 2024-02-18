import{_ as n,e as s}from"./app.925c2c96.js";const a={},e=s(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h3 id="\u53D1\u5E03\u65B0\u7248\u672C-releases-tag" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u65B0\u7248\u672C-releases-tag" aria-hidden="true">#</a> \u53D1\u5E03\u65B0\u7248\u672C: Releases-tag</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u53D1\u5E03\u524D\u8BF7\u5148\u63A8\u9001</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">&quot;update&quot;</span>
$ <span class="token function">git</span> push
</code></pre></div></div><p><strong>\u53D1\u5E03\u65B0\u7248\u672C</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5DF2\u53D1\u5E03\u7684\u7248\u672C\u53F7(\u672C\u5730)</span>
$ <span class="token function">git</span> tag
v0.1.0
<span class="token comment"># \u53D1\u5E03\u65B0\u7684\u7248\u672C\u53F7(\u4FDD\u5B58\u5728\u672C\u5730)</span>
$ <span class="token function">git</span> tag -a v0.2.0 -m <span class="token string">&quot;update import package: gopkg&quot;</span>
<span class="token comment"># \u67E5\u770B\u6307\u5B9Atag\u7248\u672C\u4FE1\u606F</span>
$ <span class="token function">git</span> show v0.2.0
<span class="token comment"># \u5C06\u672C\u5730tag\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E2D(release tag)</span>
$ <span class="token function">git</span> push origin v0.2.0
<span class="token comment"># \u518D\u6B21\u67E5\u770B\u662F\u5426\u53D1\u5E03\u6210\u529F</span>
$ <span class="token function">git</span> tag
v0.1.0
v0.2.0


<span class="token comment"># \u5220\u9664tag\u6807\u7B7E(\u672C\u5730\u548C\u8FDC\u7A0B)</span>
$ <span class="token function">git</span> tag -d v0.1.0
$ <span class="token function">git</span> push origin :refs/tags/v0.1.0

<span class="token comment"># \u540C\u6B65\u672C\u5730\u4E0E\u8FDC\u7A0B\u4ED3\u5E93tag</span>
$ <span class="token function">git</span> fetch
<span class="token comment"># \u79FB\u9664\u8FDC\u7A0B\u4ED3\u5E93\u4E0D\u5B58\u5728\u7684\u672C\u5730tag</span>
$ <span class="token function">git</span> fetch -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dev\u5206\u652F\u5DE5\u4F5C-\u53D1\u5E03\u65B0\u7248\u672C\u65F6\u5207\u6362\u5230master\u4E3B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#dev\u5206\u652F\u5DE5\u4F5C-\u53D1\u5E03\u65B0\u7248\u672C\u65F6\u5207\u6362\u5230master\u4E3B\u5206\u652F" aria-hidden="true">#</a> dev\u5206\u652F\u5DE5\u4F5C\uFF0C\u53D1\u5E03\u65B0\u7248\u672C\u65F6\u5207\u6362\u5230master\u4E3B\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u5E76\u5207\u6362\u5230dev\u5206\u652F(\u672C\u5730)</span>
$ <span class="token function">git</span> checkout -b dev

<span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93dev\u5206\u652F</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">&quot;update: dev&quot;</span>
$ <span class="token function">git</span> push origin dev

<span class="token comment"># \u5207\u6362\u5230\u4E3B\u5206\u652F</span>
$ <span class="token function">git</span> checkout master

<span class="token comment"># \u5408\u5E76dev\u5206\u652F -&gt; master</span>
$ <span class="token function">git</span> merge dev

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token comment"># $ git checkout -d dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><p><strong>Question</strong></p><blockquote><p>\u4F8B\u5982: \u62C9\u53D64\uFF0C\u66F4\u65B01</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
fatal: Not possible to fast-forward, aborting.
</code></pre></div><p><strong>Solution</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull origin master --rebase
</code></pre></div><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><p><strong>Q: error: failed to push some refs to</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin master
To github.com:coulsonzero/Go-project.git
 <span class="token operator">!</span> <span class="token punctuation">[</span>rejected<span class="token punctuation">]</span>        master -<span class="token operator">&gt;</span> master <span class="token punctuation">(</span>non-fast-forward<span class="token punctuation">)</span>
error: failed to push some refs to <span class="token string">&#39;github.com:coulsonzero/Go-project.git&#39;</span>
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes <span class="token punctuation">(</span>e.g.
hint: <span class="token string">&#39;git pull ...&#39;</span><span class="token punctuation">)</span> before pushing again.
</code></pre></div><p><strong>Solution: git pull</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull origin master --rebase
$ <span class="token function">git</span> push origin master
</code></pre></div>`,19);function i(t,c){return e}var o=n(a,[["render",i],["__file","git.html.vue"]]);export{o as default};
