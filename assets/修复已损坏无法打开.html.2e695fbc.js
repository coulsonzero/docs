import{_ as a,e as n}from"./app.afb47d0b.js";const s={},e=n(`<h1 id="\u4FEE\u590D\u5DF2\u635F\u574F\u65E0\u6CD5\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5DF2\u635F\u574F\u65E0\u6CD5\u6253\u5F00" aria-hidden="true">#</a> \u4FEE\u590D\u5DF2\u635F\u574F\u65E0\u6CD5\u6253\u5F00</h1><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5141\u8BB8\u4EFB\u4F55\u6765\u6E90</span>
$ <span class="token function">sudo</span> spctl --master-disable

<span class="token comment"># \u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF08\u672B\u5C3E\u6709\u7A7A\u683C\uFF09\uFF0C\u62D6\u52A8\u9700\u8981\u4FEE\u590D\u7684\u5E94\u7528\u7A0B\u5E8F\u5230\u7EC8\u7AEF\u4E2D\u5373\u53EF</span>
$ <span class="token function">sudo</span> xattr -rd com.apple.quarantine
<span class="token comment"># sudo xattr -rd com.apple.quarantine /Applications/Navicat\\ Premium.app</span>
</code></pre></div>`,2);function t(c,o){return e}var p=a(s,[["render",t],["__file","\u4FEE\u590D\u5DF2\u635F\u574F\u65E0\u6CD5\u6253\u5F00.html.vue"]]);export{p as default};
