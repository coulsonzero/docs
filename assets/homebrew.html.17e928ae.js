import{_ as e,e as a}from"./app.afb47d0b.js";const s={},n=a(`<h1 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h1><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>https://github.com/Homebrew/brew<span class="token operator">&gt;</span> homebrew
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>homebrew/bin/brew shellenv<span class="token variable">)</span></span>\u201D
brew update --force \u2014quiet
chmod -R go-w &quot;</span><span class="token variable"><span class="token variable">$(</span>brew --prefix<span class="token variable">)</span></span>/share/zsh&quot;
</code></pre></div><p>\u5B89\u88C5brew \u65B9\u6CD5\u4E00\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u5728https://www.ipaddress.com/\u67E5\u8BE2http://raw.githubusercontent.com\u7684\u771F\u5B9EIP
Host\u6587\u4EF6\u63D2\u5165\uFF1A
185.199.110.133 raw.githubusercontent.com

# \u6216\u8005\u4E2D\u76F4\u63A5\u8F93\u5165\u9009\u62E9\u7B2C\u4E8C\u6216\u7B2C\u4E09\u4E2Aip\u5730\u5740
nslookup http://raw.githubusercontent.com
</code></pre></div><p>\u65B9\u6CD5\u4E8C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u8BBE\u7F6EDNS\u4E3A114.114.114.114\u6216\u80058.8.8.8
</code></pre></div>`,6);function t(o,r){return n}var p=e(s,[["render",t],["__file","homebrew.html.vue"]]);export{p as default};
