import{_ as e,e as s}from"./app.afb47d0b.js";const n={},a=s(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> SCSS</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> OverView</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><blockquote><p>Scss \u662F\u6210\u719F\u3001\u7A33\u5B9A\u3001\u5F3A\u5927\u7684<code>CSS\u9884\u5904\u7406\u5668</code> SCSS\u662FSass3\u7248\u672C\u5F53\u4E2D\u5F15\u5165\u7684\u65B0\u8BED\u6CD5\u7279\u6027\uFF0C\u5B8C\u5168\u517C\u5BB9CSS3\u7684\u540C\u65F6\u7EE7\u627F\u4E86Sass\u5F3A\u5927\u7684\u52A8\u6001\u529F\u80FD</p></blockquote><h3 id="scss\u5B9E\u65F6\u8F6C\u6362css" tabindex="-1"><a class="header-anchor" href="#scss\u5B9E\u65F6\u8F6C\u6362css" aria-hidden="true">#</a> SCSS\u5B9E\u65F6\u8F6C\u6362Css</h3><ol><li>Vs Code\u4E2D\u5B89\u88C5 <code>Live Scss Compiler</code> \u6269\u5C55</li><li>\u72B6\u6001\u680F\u70B9\u51FB <code>Watch Scss</code> \u5C06 <code>Scss</code> \u6587\u4EF6\u683C\u5F0F\u5B9E\u65F6\u7F16\u8BD1\u6210 <code>Css\u683C\u5F0F</code></li><li><code>Stop Watching Sass</code> \u505C\u6B62\u5B9E\u65F6\u7F16\u8BD1</li></ol><hr><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><h3 id="_1-\u5D4C\u5957css" tabindex="-1"><a class="header-anchor" href="#_1-\u5D4C\u5957css" aria-hidden="true">#</a> 1.\u5D4C\u5957CSS</h3><blockquote><p>\u51CF\u5C11\u91CD\u590D\u7F16\u5199\u5E38\u7528\u7684\u9009\u62E9\u5668\uFF0C\u540C\u65F6\u8BA9\u6837\u5F0F\u8868\u7684\u7ED3\u6784\u4E00\u773C\u671B\u53BB\u66F4\u52A0\u6E05\u6670</p></blockquote><blockquote><p>\u7236\u9009\u62E9\u5668\u6807\u8BC6\u7B26&amp;</p></blockquote><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.btn </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem 3rem<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0097e6<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.8rem<span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>::before,
    <span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
        <span class="token comment">/*...*/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>.btn {...}
.btn:hover {}
.btn::before,
.btn::after {}
</code></pre></div><blockquote><p>\u5B9E\u4F8B2 <code>CSS</code>\u7FA4\u7EC4\u5D4C\u5957</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>.container h1,
.container h2,
.container h3 {
    margin-bottom: .8em
}
</code></pre></div><p><code>SCSS</code>\u7FA4\u7EC4\u5D4C\u5957</p><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>.container {
  h1, h2, h3 {margin-bottom: .8em}
}
</code></pre></div><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><blockquote><p>\u4E0B\u5212\u7EBF\u4E0E\u4E2D\u5212\u7EBF\u517C\u5BB9</p></blockquote><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>$link-color: blue;
a {
  color: $link_color;
}
</code></pre></div><blockquote><p>\u7F16\u8BD1\u540E</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>a {
  color: blue;
}
</code></pre></div><blockquote><p>SCSS\u53D8\u91CF\u5B9E\u4F8B</p></blockquote><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>$body-font: Poppins sans-serif;
$color-black: #323232;
.btn {
    font-size: $body-font;
    border: 2px solid $color-black;
 }
</code></pre></div><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>:root {
    --body-font: Poppins sans-serif;
    --color-black: #323232;
}
.btn {
    font-size: var(--body-font);
    border: 2px solid var(--color-black);
 }
</code></pre></div><h3 id="_3-\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_3-\u4F20\u53C2" aria-hidden="true">#</a> 3.\u4F20\u53C2</h3><p><code>@minin</code>\u58F0\u660Efuction\uFF0C\u7136\u540E\u7528<code>@include</code>\u5F15\u7528fuction(parms)\u4F20\u53C2\uFF0C\u9488\u5BF9\u4E0D\u540C\u53C2\u6570\u4F7F\u7528</p><blockquote><p>\u7EE7\u627F\u4EC5\u4EC5\u662F\u91CD\u590D\u9009\u62E9\u5668\uFF0C\u800C\u4E0D\u4F1A\u91CD\u590D\u5C5E\u6027</p><p>\u8DDF\u6DF7\u5408\u5668\u76F8\u6BD4\uFF0C\u7EE7\u627F\u751F\u6210\u7684css\u4EE3\u7801\u76F8\u5BF9\u66F4\u5C11 \u7EE7\u627F\u5B58\u5728\u6837\u5F0F\u5C42\u53E0\u7684\u95EE\u9898 \u4E0D\u8981\u7528\u540E\u4EE3\u9009\u62E9\u5668\u53BB\u7EE7\u627F</p></blockquote><div class="language-SCSS ext-SCSS line-numbers-mode"><pre class="language-SCSS"><code>@mixin border-radius($radius) {
          border-radius: $radius;
      -ms-border-radius: $radius;
     -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u4EE3\u7801\u5F15\u7528-\u65E0\u9700\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#_4-\u4EE3\u7801\u5F15\u7528-\u65E0\u9700\u91CD\u5199" aria-hidden="true">#</a> 4.\u4EE3\u7801\u5F15\u7528(\u65E0\u9700\u91CD\u5199)</h3><p><code>%...</code> \u58F0\u660E\u51FD\u6570\uFF0C<code>@extend</code>\u5F15\u7528\u51FD\u6570\uFF0C\u9488\u5BF9\u76F8\u540C\u53C2\u6570\u4F7F\u7528</p><div class="language-SCSS ext-SCSS line-numbers-mode"><pre class="language-SCSS"><code>%message-common {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-common;
}
.success {
  @extend %message-common;
  border-color: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Css\u5219\u9700\u5728html\u6587\u4EF6\u4E2D\u4E66\u5199\u76F8\u540C\u7684className</p></blockquote><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\`\`\`CSS
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</code></pre></div><h3 id="_5-\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#_5-\u9009\u62E9\u5668" aria-hidden="true">#</a> 5. \u9009\u62E9\u5668</h3><div class="language-text ext-text"><pre class="language-text"><code>&gt; \u5B50\u7EC4\u5408\u9009\u62E9\u5668
+ \u540C\u5C42\u76F8\u90BB\u7EC4\u5408\u9009\u62E9\u5668
~ \u540C\u5C42\u5168\u4F53\u7EC4\u5408\u9009\u62E9\u5668
</code></pre></div><h4 id="scss\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#scss\u9009\u62E9\u5668" aria-hidden="true">#</a> SCSS\u9009\u62E9\u5668</h4><blockquote><p>SCSS\u9009\u62E9\u5668\u4E66\u5199\u65B9\u5F0F</p></blockquote><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>article {
  ~ article { border-top: 1px dashed #ccc }
  &gt; section { background: #eee }
  dl &gt; {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + &amp; { margin-top: 0 }
}
</code></pre></div><blockquote><p>CSS\u9009\u62E9\u5668\u4E66\u5199\u65B9\u5F0F</p></blockquote><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>article ~ article {
    border-top: 1px dashed #ccc
}
article &gt; footer {
    background: #eee
}
article dl &gt; dt {
    color: #333
}
article dl &gt; dd {
    color: #555
}
nav + article {
    margin-top: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h4><h5 id="\u5B50\u7EC4\u5408\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u5408\u9009\u62E9\u5668" aria-hidden="true">#</a> &gt; \u5B50\u7EC4\u5408\u9009\u62E9\u5668</h5><blockquote><p>\u9009\u62E9article\u4E0B\u7684<code>\u6240\u6709</code>\u540D\u4E2Dsection\u9009\u62E9\u5668\u7684\u5143\u7D20</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>article section { margin: 5px }
</code></pre></div><blockquote><p>\u53EA\u4F1A\u9009\u62E9article\u4E0B<code>\u7D27\u8DDF</code>\u7740\u7684\u5B50\u5143\u7D20\u4E2D\u540D\u4E2Dsection\u9009\u62E9\u5668\u7684\u5143\u7D20</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>article &gt; section { border: 1px solid #ccc }
</code></pre></div><h5 id="\u540C\u5C42\u76F8\u90BB\u7EC4\u5408\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u540C\u5C42\u76F8\u90BB\u7EC4\u5408\u9009\u62E9\u5668" aria-hidden="true">#</a> + \u540C\u5C42\u76F8\u90BB\u7EC4\u5408\u9009\u62E9\u5668</h5><blockquote><p>\u9009\u62E9header\u5143\u7D20\u540E\u7D27\u8DDF\u7684p\u5143\u7D20</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>header + p { font-size: 1.1em }
</code></pre></div><h5 id="\u540C\u5C42\u5168\u4F53\u7EC4\u5408\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u540C\u5C42\u5168\u4F53\u7EC4\u5408\u9009\u62E9\u5668" aria-hidden="true">#</a> ~ \u540C\u5C42\u5168\u4F53\u7EC4\u5408\u9009\u62E9\u5668</h5><blockquote><p>\u9009\u62E9\u6240\u6709\u8DDF\u5728article\u540E\u7684\u540C\u5C42article\u5143\u7D20</p></blockquote><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>article ~ article { border-top: 1px dashed #ccc }
</code></pre></div><h3 id="_6-\u5BFC\u5165\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-\u5BFC\u5165\u6587\u4EF6" aria-hidden="true">#</a> 6.\u5BFC\u5165\u6587\u4EF6</h3><blockquote><p>SCSS\u6587\u4EF6\u5BFC\u5165</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>components
  |__    \`_header.scss\`
  |__    \`_footer.scss\`
</code></pre></div><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>@import &quot;components/header&quot;;
</code></pre></div><blockquote><p>CSS\u6587\u4EF6\u5BFC\u5165</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>components
  |__    \`_header.css\`
  |__    \`_footer.css\`
</code></pre></div><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>@import &quot;./components/_header.css&quot;;
</code></pre></div><h3 id="_7-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_7-\u6CE8\u91CA" aria-hidden="true">#</a> 7.\u6CE8\u91CA</h3><div class="language-SCSS ext-SCSS"><pre class="language-SCSS"><code>// SCSS comment
</code></pre></div><div class="language-CSS ext-CSS"><pre class="language-CSS"><code>/* This is a CSS comment */
</code></pre></div><hr><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="css\u9884\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#css\u9884\u5904\u7406\u5668" aria-hidden="true">#</a> CSS\u9884\u5904\u7406\u5668</h3><p>\u5B9A\u4E49\u4E86\u4E00\u79CD\u65B0\u7684\u4E13\u95E8\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u7F16\u8BD1\u540E\u6210\u6B63\u5E38\u7684CSS\u6587\u4EF6\u3002\u4E3ACSS\u589E\u52A0\u4E00\u4E9B\u7F16\u7A0B\u7684\u7279\u6027\uFF0C\u65E0\u9700\u8003\u8651\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u8BA9CSS\u66F4\u52A0\u7B80\u6D01\uFF0C\u9002\u5E94\u6027\u66F4\u5F3A\uFF0C\u53EF\u8BFB\u6027\u66F4\u4F73\uFF0C\u66F4\u6613\u4E8E\u4EE3\u7801\u7684\u7EF4\u62A4\u7B49\u8BF8\u591A\u597D\u5904\u3002 CSS\u9884\u5904\u7406\u5668\u8BED\u8A00\uFF1Ascss\uFF08sass\uFF09\u3001LESS\u7B49\uFF1B</p><h3 id="scss\u4E0Esass\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#scss\u4E0Esass\u7684\u533A\u522B" aria-hidden="true">#</a> Scss\u4E0ESass\u7684\u533A\u522B</h3><blockquote><p>\u6587\u4EF6\u6269\u5C55\u540D\u4E0D\u540C\uFF1A\u201C.sass\u201D\u548C\u201C.scss\u201D\uFF1B Sass\u662F\u4EE5\u4E25\u683C\u7F29\u8FDB\u5F0F\u8BED\u6CD5\u89C4\u5219\u6765\u4E66\u5199\u7684\uFF0C\u4E0D\u5E26\u5927\u62EC\u53F7\u548C\u5206\u53F7\uFF1B \u800CSCSS\u7684\u8BED\u6CD5\u548CCSS\u4E66\u5199\u8BED\u6CD5\u7C7B\u4F3C</p></blockquote><h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h3><blockquote><p>CSS \u662F\u4E00\u95E8\u975E\u7A0B\u5E8F\u5F0F\u8BED\u8A00\uFF0C\u6CA1\u6709\u53D8\u91CF\u3001\u51FD\u6570\u3001scope\uFF08\u4F5C\u7528\u57DF\uFF09\u7B49\u6982\u5FF5\u3002 Less\u5728 CSS \u7684\u8BED\u6CD5\u57FA\u7840\u4E4B\u4E0A\uFF0C\u5F15\u5165\u4E86\u53D8\u91CF\uFF0CMixin\uFF08\u6DF7\u5165\uFF09\uFF0C\u8FD0\u7B97\u4EE5\u53CA\u51FD\u6570\u7B49\u529F\u80FD\uFF0C\u5927\u5927\u7B80\u5316\u4E86 CSS \u7684\u7F16\u5199\uFF0C\u5E76\u4E14\u964D\u4F4E\u4E86 CSS \u7684\u7EF4\u62A4\u6210\u672C\uFF0C Less\u5E76\u6CA1\u6709\u88C1\u526A CSS \u539F\u6709\u7684\u7279\u6027\uFF0C\u66F4\u4E0D\u662F\u7528\u6765\u53D6\u4EE3 CSS \u7684\uFF0C\u800C\u662F\u5728\u73B0\u6709 CSS \u8BED\u6CD5\u7684\u57FA\u7840\u4E0A\uFF0C\u4E3A CSS \u52A0\u5165\u7A0B\u5E8F\u5F0F\u8BED\u8A00\u7684\u7279\u6027</p></blockquote><h3 id="\u53D8\u91CF-1" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-1" aria-hidden="true">#</a> \u53D8\u91CF</h3><div class="language-Less ext-Less"><pre class="language-Less"><code>@myColor: red;
a {
  color: @myColor;
}
</code></pre></div><h3 id="\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165" aria-hidden="true">#</a> \u6DF7\u5165</h3><div class="language-Less ext-Less line-numbers-mode"><pre class="language-Less"><code>@charset &quot;UTF-8&quot;;
@mainColor: red;

.b() {
  width: 50%;
}
.f(@direction){
  float: @direction;
}
.guo {
  .b();
  .f(left);
  a {
    display: block;
    &amp;:hover {
      color: @mainColor;
    }
  }
  &gt; div {
    .b();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss\u9879\u76EE\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#scss\u9879\u76EE\u6D41\u7A0B" aria-hidden="true">#</a> SCSS\u9879\u76EE\u6D41\u7A0B</h3><blockquote><ol><li>\u5728\u516C\u53F8\u9879\u76EE\u4E2D\uFF0C\u524D\u7AEFcss\u6587\u4EF6\u6211\u4EEC\u90FD\u662F\u5199SCSS\u6587\u4EF6,</li><li>\u7136\u540E\u901A\u8FC7@import\u5BFC\u5165\u5230style.scss\u6587\u4EF6\u4E2D\uFF0C</li><li>\u6700\u540E\u901A\u8FC7gulp\u6765\u751F\u6210style.css\u6587\u4EF6\u3002</li></ol></blockquote><blockquote><p>\u73B0\u5728\u51E0\u4E4E\u6240\u6709Sass\u7684\u5DE5\u5177\u3001\u63D2\u4EF6\u3001demo\u7B49\u90FD\u662F\u4F7F\u7528SCSS\u8BED\u6CD5\u6765\u5F00\u53D1\u3002\u5DF2\u7ECF\u5F88\u96BE\u518D\u627E\u5230\u4E00\u4E2ASass\u7F29\u8FDB\u8BED\u6CD5\u7684\u63D2\u4EF6\u7B49\uFF0C\u6240\u4EE5\uFF0C\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528SCSS\u6765\u5199css\u6587\u4EF6 \u53E6\u5916\uFF0C\u6CE8\u610F\u4E00\u70B9\uFF0C\u5C31\u662FSass\u4ECE\u6765\u6CA1\u6709\u5199\u6210SASS, \u65E0\u8BBA\u6307\u8BED\u6CD5\u8FD8\u662F\u8FD9\u4E2A\u8BED\u8A00\uFF0C\u90FD\u662F\u4F7F\u7528Sass \u800CSCSS\u4E00\u76F4\u90FD\u662F\u5927\u5199</p></blockquote>`,79);function i(c,d){return a}var o=e(n,[["render",i],["__file","scss.html.vue"]]);export{o as default};
