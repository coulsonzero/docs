import{_ as e,r as t,o,c as p,b as n,d as c,a as l,F as r,e as s}from"./app.925c2c96.js";const u={},k=s('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="\u4E0B\u8F7D-mysql-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-mysql-\u7A0B\u5E8F" aria-hidden="true">#</a> \u4E0B\u8F7D mysql \u7A0B\u5E8F</h3>',3),i={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},d=s(`<h3 id="\u67E5\u770B-mysql-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-mysql-\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B mysql \u7248\u672C</h3><p><strong>\u65B9\u5F0F\u4E00\uFF1Alinux \u547D\u4EE4\u67E5\u8BE2</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ mysql --version<span class="token punctuation">;</span>
<span class="token comment"># mysql  Ver 8.0.27 for macos11 on arm64 (MySQL Community Server - GPL)</span>

$ mysql -V<span class="token punctuation">;</span>
<span class="token comment"># mysql  Ver 8.0.27 for macos11 on arm64 (MySQL Community Server - GPL)</span>
</code></pre></div><p><strong>\u65B9\u5F0F\u4E8C\uFF1Amysql \u5185\u67E5\u8BE2</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># +-----------+</span>
<span class="token comment"># | version() |</span>
<span class="token comment"># +-----------+</span>
<span class="token comment"># | 8.0.27    |</span>
<span class="token comment"># +-----------+</span>
<span class="token comment"># 1 row in set (0.00 sec)</span>
</code></pre></div><h3 id="macos-\u542F\u52A8-mysql" tabindex="-1"><a class="header-anchor" href="#macos-\u542F\u52A8-mysql" aria-hidden="true">#</a> MacOS \u542F\u52A8 mysql</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 mysql</span>
$ mysql -u root -p
<span class="token comment"># Enter password: ****</span>

<span class="token comment"># \u9000\u51FA mysql</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token comment"># Bye</span>
</code></pre></div><h2 id="\u67E5\u8BE2\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u8BED\u53E5" aria-hidden="true">#</a> \u67E5\u8BE2\u8BED\u53E5</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">[</span><span class="token keyword">distinct</span><span class="token punctuation">]</span> \u67E5\u8BE2\u5217\u8868 <span class="token punctuation">[</span><span class="token keyword">as</span> \u65B0\u540D<span class="token punctuation">]</span> <span class="token keyword">from</span> \u8868\u540D
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token keyword">inner</span><span class="token operator">/</span><span class="token keyword">left</span><span class="token operator">/</span><span class="token keyword">right</span><span class="token operator">/</span><span class="token keyword">full</span> <span class="token keyword">out</span><span class="token punctuation">]</span> <span class="token keyword">join</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">desc</span><span class="token operator">|</span><span class="token keyword">asc</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">limit</span> a<span class="token punctuation">,</span> b
<span class="token punctuation">;</span>
</code></pre></div>`,9);function m(h,y){const a=t("ExternalLinkIcon");return o(),p(r,null,[k,n("p",null,[n("a",i,[c("mysql \u5B98\u7F51\u4E0B\u8F7D\u5730\u5740"),l(a)])]),d],64)}var w=e(u,[["render",m],["__file","mysql.html.vue"]]);export{w as default};
