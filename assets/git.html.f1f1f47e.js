import{_ as n,e as s}from"./app.afb47d0b.js";var a="/assets/git.009379ce.png";const e={},t=s('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p><img src="'+a+`" alt=""></p><h3 id="\u53D1\u5E03\u65B0\u7248\u672C-releases-tag" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u65B0\u7248\u672C-releases-tag" aria-hidden="true">#</a> \u53D1\u5E03\u65B0\u7248\u672C: Releases-tag</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u53D1\u5E03\u524D\u8BF7\u5148\u63A8\u9001</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> status
$ <span class="token function">git</span> commit -m <span class="token string">&quot;update&quot;</span>
$ <span class="token function">git</span> push origin master
</code></pre></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> clone https://github.com/coulsonzero/Python.git

</code></pre></div><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</span>
$ <span class="token function">git</span> remote -v
$ <span class="token function">git</span> remote remove origin
$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/coulsonzero/Python.git
</code></pre></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6CE8\u91CA</span>
$ <span class="token function">git</span> commit -m <span class="token string">&quot;\u6CE8\u91CA&quot;</span>     <span class="token comment"># \u63D0\u4EA4\u6CE8\u91CA\u5230\u672C\u5730\u4ED3\u5E93</span>
$ <span class="token function">git</span> commit --amend      <span class="token comment"># \u4FEE\u6539\u6CE8\u91CA</span>
</code></pre></div><h3 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5206\u652F</span>
$ <span class="token function">git</span> branch       <span class="token comment"># \u67E5\u770B\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch -r    <span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -a    <span class="token comment"># \u67E5\u770B\u672C\u5730\u548C\u8FDC\u7A0B\u5206\u652F</span>

$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch_name<span class="token punctuation">]</span>                  <span class="token comment"># \u589E</span>
$ <span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch_name<span class="token punctuation">]</span>               <span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> push origin \u2014delete <span class="token punctuation">[</span>branch_name<span class="token punctuation">]</span>     <span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -m master main                 <span class="token comment"># \u6539: master -&gt; main</span>
</code></pre></div><h3 id="git-checkout" tabindex="-1"><a class="header-anchor" href="#git-checkout" aria-hidden="true">#</a> git checkout</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout dev                <span class="token comment"># \u5207\u6362</span>
$ <span class="token function">git</span> checkout -b dev             <span class="token comment"># \u521B\u5EFA\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
$ <span class="token function">git</span> checkout \u2013b dev origin/dev  <span class="token comment"># \u521B\u5EFA\u8FDC\u7A0Bdev\u5206\u652F\u5230\u672C\u5730dev\u5206\u652F</span>
$ <span class="token function">git</span> checkout -b main            <span class="token comment"># \u8986\u76D6\uFF1A\u5C06dev\u5206\u652F\u590D\u5236\u5E76\u521B\u5EFA\u4E3Amain</span>
$ <span class="token function">git</span> checkout -- readme.txt      <span class="token comment"># \u64A4\u9500\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539(\u6682\u5B58\u533A\u4E0D\u53D8)</span>
$ <span class="token function">git</span> merge dev                   <span class="token comment"># \u5408\u5E76\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
</code></pre></div><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin dev     <span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin dev:dev <span class="token comment"># \u521B\u5EFA\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin :dev    <span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin --delete dev <span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
</code></pre></div><h3 id="git-diff-git-log-git-reset" tabindex="-1"><a class="header-anchor" href="#git-diff-git-log-git-reset" aria-hidden="true">#</a> git diff | git log | git reset</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4EE3\u7801\u53D8\u52A8</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD
<span class="token function">git</span> <span class="token function">diff</span> --staged

<span class="token comment"># \u63D0\u4EA4\u65E5\u5FD7</span>
<span class="token function">git</span> log
<span class="token function">git</span> log --pretty<span class="token operator">=</span>format:<span class="token string">&quot;%h - %an, %ar : %s&quot;</span>

<span class="token function">git</span> reflow
<span class="token comment"># \u7248\u672C\u56DE\u9000</span>
<span class="token function">git</span> reset HEAD
<span class="token function">git</span> reset commitId
<span class="token function">git</span> reset --hard 35db6f0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5408\u5E76\u7248\u672C\u540E\u56DE\u9000</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> checkout v1.0
<span class="token function">git</span> reflog
<span class="token function">git</span> reset --hard 35db6f0
</code></pre></div><p><strong>\u53D1\u5E03\u65B0\u7248\u672C</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5DF2\u53D1\u5E03\u7684\u7248\u672C\u53F7(\u672C\u5730)</span>
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
</code></pre></div><h3 id="git-push-1" tabindex="-1"><a class="header-anchor" href="#git-push-1" aria-hidden="true">#</a> git push</h3><p><strong>Q: error: failed to push some refs to</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin master
To github.com:coulsonzero/Go-project.git
 <span class="token operator">!</span> <span class="token punctuation">[</span>rejected<span class="token punctuation">]</span>        master -<span class="token operator">&gt;</span> master <span class="token punctuation">(</span>non-fast-forward<span class="token punctuation">)</span>
error: failed to push some refs to <span class="token string">&#39;github.com:coulsonzero/Go-project.git&#39;</span>
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes <span class="token punctuation">(</span>e.g.
hint: <span class="token string">&#39;git pull ...&#39;</span><span class="token punctuation">)</span> before pushing again.
</code></pre></div><p><strong>Solution: git pull</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull origin master --rebase
$ <span class="token function">git</span> push origin master
</code></pre></div><h3 id="ssl" tabindex="-1"><a class="header-anchor" href="#ssl" aria-hidden="true">#</a> SSL</h3><blockquote><p>&quot;fatal: unable to access &#39;http://github.com/.../*.git/&#39;: OpenSSL SSL_read: Connection was reset</p></blockquote><p><strong>Solution:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config --global --unset http.proxy   <span class="token comment"># \u53D6\u6D88\u4EE3\u7406</span>
$ <span class="token function">git</span> push                                 <span class="token comment"># \u91CD\u65B0\u63A8\u9001</span>
</code></pre></div>`,40);function i(c,o){return t}var p=n(e,[["render",i],["__file","git.html.vue"]]);export{p as default};
