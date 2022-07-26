import{_ as n,d as s}from"./app.73a9ff34.js";var a="/assets/text-yinxiang.15b97fce.png",t="/assets/text-win.09246036.png",p="/assets/text-mac.e837ce4e.png";const e={},c=s(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="html\u4E2D\u5F15\u7528css" tabindex="-1"><a class="header-anchor" href="#html\u4E2D\u5F15\u7528css" aria-hidden="true">#</a> html\u4E2D\u5F15\u7528css</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="seletor" tabindex="-1"><a class="header-anchor" href="#seletor" aria-hidden="true">#</a> Seletor</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">#demo1</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.demo2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre></div><h2 id="\u901A\u7528\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u6837\u5F0F" aria-hidden="true">#</a> \u901A\u7528\u6837\u5F0F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://fonts.googleapis.com/css2?family=Montserrat:wght@100&amp;display=swap&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>&#39;<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Poppins</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@200</span><span class="token punctuation">;</span></span></span>300<span class="token punctuation">;</span>400<span class="token punctuation">;</span>500<span class="token punctuation">;</span>600<span class="token punctuation">;</span>700<span class="token punctuation">;</span>800<span class="token punctuation">;</span>900&amp;display=swap&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>&quot;<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Inter</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@300</span><span class="token punctuation">;</span></span></span>400<span class="token punctuation">;</span>500<span class="token punctuation">;</span>600&amp;display=swap&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Poppins&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token comment">/* flex \u5C45\u4E2D\u663E\u793A */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/*
     * grid \u5C45\u4E2D\u663E\u793A
     * display: grid;
     * place-items: center;
     */</span>

    <span class="token comment">/* \u8BBE\u7F6E\u9AD8\u5EA6\u540E\u624D\u4F1A\u5782\u76F4\u5C45\u4E2D */</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>

    <span class="token comment">/* \u5B50\u5143\u7D20\u7AD6\u6392 */</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li</span> <span class="token punctuation">{</span>
  	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text</h2><p><img src="`+a+'" alt=""><img src="'+t+`" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* font: italic bord 15px Arial; */</span>


<span class="token comment">/* \u5B57\u4F53\u7C7B\u578B */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Poppins&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token comment">/* \u5B57\u4F53\u5927\u5C0F*/</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 16px/1rem<span class="token punctuation">;</span>

<span class="token comment">/* \u5B57\u4F53\u989C\u8272 */</span>
<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token comment">/* \u5B57\u4F53\u80CC\u666F\u8272 */</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token comment">/* \u6587\u672C\u9634\u5F71 */</span>
<span class="token property">text-shadow</span><span class="token punctuation">:</span> 5px 2px 4px gray<span class="token punctuation">;</span>

<span class="token comment">/* \u7C97\u4F53(100-900) */</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token comment">/* \u659C\u4F53 */</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token comment">/* \u4E0B\u5212\u7EBF/\u5220\u9664\u7EBF */</span>
<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline/line-through<span class="token punctuation">;</span>
<span class="token comment">/* \u5927\u5C0F\u5199\u8F6C\u6362 */</span>
<span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize/uppercase/lowercase<span class="token punctuation">;</span>
<span class="token comment">/* \u5C0F\u578B\u5927\u5199 */</span>
<span class="token comment">/* font-variant: small-caps; */</span>
<span class="token comment">/* \u4E0A\u4E0B\u6807 */</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> super/sub<span class="token punctuation">;</span>


<span class="token comment">/* \u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F */</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> left/center/right<span class="token punctuation">;</span>
<span class="token comment">/* \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F */</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> top/middle/bottom<span class="token punctuation">;</span>




<span class="token comment">/* \u7F29\u8FDB */</span>
<span class="token property">text-indent</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token comment">/* \u884C\u95F4\u8DDD */</span>
<span class="token property">line-height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
<span class="token comment">/* \u5B57\u7B26\u95F4\u8DDD */</span>
<span class="token property">letter-spacing</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token comment">/* \u5355\u8BCD\u95F4\u8DDD */</span>
<span class="token property">word-spacing</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>


<span class="token comment">/* \u6362\u884C */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap/pre-warp<span class="token punctuation">;</span>
<span class="token comment">/* \u6EA2\u51FA\uFF1A\u9690\u85CF/\u6EDA\u52A8 */</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>

<span class="token comment">/* \u7981\u6B62\u9009\u4E2D */</span>
<span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/**
 * \u5B57\u4F53\u989C\u8272\uFF1A
 * red/green/blue/yellow/orange/gray/black/white
 * #323232
 * rgb()\u3001rgba()
 * hsl()\u3001hsla()
 */</span>
</code></pre></div></div><p><img src="`+p+`" alt=""></p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="box-model" tabindex="-1"><a class="header-anchor" href="#box-model" aria-hidden="true">#</a> Box Model</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

<span class="token comment">/* \u5706\u89D2 */</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>   <span class="token comment">/* top right bottom left */</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 51% 49% 48% 52% / 62% 44% 56% 38%<span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 44% 56% 46% 54% / 36% 50% 50% 64%<span class="token punctuation">;</span>
<span class="token comment">/* \u8FB9\u6846 */</span>
<span class="token property">border</span><span class="token punctuation">:</span> 5px solid green<span class="token punctuation">;</span>     <span class="token comment">/* dashed\u865A\u7EBF hidden\u9690\u85CF\u8FB9\u6846\u7EBF */</span>
<span class="token comment">/* \u5185\u95F4\u8DDD */</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token comment">/* \u5916\u95F4\u8DDD */</span>
<span class="token property">margin</span><span class="token punctuation">:</span> top right bottom left<span class="token punctuation">;</span>


<span class="token comment">/* \u6EA2\u51FA */</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token comment">/* \u76D2\u5B50\u9634\u5F71 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 6px 6px 20px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> -20px 30px 16px #1B6CFB<span class="token punctuation">,</span>
            -40px 60px 32px #1b6cfb<span class="token punctuation">,</span>
            inset -6px 6px 10px #1B6CFB<span class="token punctuation">,</span>
            inset 2px 6px 10px #1a74e5<span class="token punctuation">,</span>
            inset 20px -20px 22px white<span class="token punctuation">,</span>
            inset 40px -40px 44px #a8ceff<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u6E10\u53D8\u8272\u3001\u5408\u8272 */</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token function">rgb</span><span class="token punctuation">(</span>65<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 77<span class="token punctuation">)</span><span class="token punctuation">,</span> skyBlue<span class="token punctuation">,</span> deepSkyBlue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>215deg<span class="token punctuation">,</span> #12c2e9<span class="token punctuation">,</span> #c471ed<span class="token punctuation">,</span> #f64f59<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u989C\u8272 */</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue/lightgreen/lightyellow<span class="token punctuation">;</span>
<span class="token comment">/* \u5927\u5C0F */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> cover/100% 100%<span class="token punctuation">;</span>
<span class="token comment">/* \u56FE\u7247 */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;css_logo.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token comment">/* \u91CD\u590D */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat/repeat-y/repeat-x/inherit<span class="token punctuation">;</span>
<span class="token comment">/* \u914D\u5408\u80CC\u666F\u56FE\u7247\u6ED1\u52A8 */</span>
<span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed/scroll<span class="token punctuation">;</span>
<span class="token comment">/* \u914D\u5408border\u4F7F\u8FB9\u6846\u900F\u660E */</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#list-\u5217\u8868" aria-hidden="true">#</a> List &lt;\u5217\u8868&gt;</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6709\u5E8F\u5217\u8868 */</span>
    <span class="token comment">/* list-style: inside inside; */</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> inside outside<span class="token punctuation">;</span>

    <span class="token comment">/* \u65E0\u5E8F\u5217\u8868 */</span>
    <span class="token comment">/* list-style: inside; */</span>
<span class="token punctuation">}</span>

<span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u9879\u76EE\u5217\u8868 */</span>
  	<span class="token property">list-style</span><span class="token punctuation">:</span> type position image<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> square outside none<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none inside <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;logo.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>

    <span class="token property">list-style-type</span><span class="token punctuation">:</span> circle/square/lower-alpha<span class="token punctuation">;</span>
    <span class="token property">list-style-position</span><span class="token punctuation">:</span> inside<span class="token punctuation">;</span>
    <span class="token property">list-style-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;logo.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table-\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#table-\u8868\u683C" aria-hidden="true">#</a> Table &lt;\u8868\u683C&gt;</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">&gt;</span></span>Table Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> separate<span class="token punctuation">;</span>
    <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0px 0px<span class="token punctuation">;</span>
    <span class="token property">empty-cells</span><span class="token punctuation">:</span> hide<span class="token punctuation">;</span>
    <span class="token property">table-layout</span><span class="token punctuation">:</span> auto/fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">caption</span> <span class="token punctuation">{</span>
    <span class="token property">caption-side</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="a-\u8D85\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#a-\u8D85\u94FE\u63A5" aria-hidden="true">#</a> a &lt;\u8D85\u94FE\u63A5&gt;</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">a</span><span class="token punctuation">:</span>hover
<span class="token property">a</span><span class="token punctuation">:</span>link
<span class="token property">a</span><span class="token punctuation">:</span>visited
<span class="token property">a</span><span class="token punctuation">:</span>active
</code></pre></div><h3 id="img-\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#img-\u56FE\u7247" aria-hidden="true">#</a> img &lt;\u56FE\u7247&gt;</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/cat.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u7981\u6B62\u56FE\u7247\u62D6\u52A8 */</span>
<span class="token property">-webkit-user-drag</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><h2 id="button-\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#button-\u6309\u94AE" aria-hidden="true">#</a> button &lt;\u6309\u94AE&gt;</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u7981\u6B62\u70B9\u51FB\u4E8B\u4EF6 */</span>
<span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u9F20\u6807\u6307\u9488\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u6307\u9488\u6837\u5F0F" aria-hidden="true">#</a> \u9F20\u6807\u6307\u9488\u6837\u5F0F</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://...<span class="token punctuation">)</span></span> auto auto<span class="token punctuation">;</span>
<span class="token comment">/**
 * default
 * auto/text \u6587\u672C\u8F93\u5165
 * move \u79FB\u52A8
 */</span>
</code></pre></div><h2 id="positioning-and-layout" tabindex="-1"><a class="header-anchor" href="#positioning-and-layout" aria-hidden="true">#</a> Positioning and Layout</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* flex\u5F39\u6027\u5E03\u5C40 */</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token comment">/* \u65B9\u5411 */</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> row/column/row-reverse/column-reverse<span class="token punctuation">;</span>
<span class="token comment">/* \u5BF9\u9F50 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>     <span class="token comment">/* \u6C34\u5E73\u5C45\u4E2D\u5BF9\u9F50 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>         <span class="token comment">/* \u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> stretch/flex-start/center/flex-end/space-around/space-between<span class="token punctuation">;</span>
<span class="token comment">/* \u6362\u884C */</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap/wrap/wrap-reverse<span class="token punctuation">;</span>

<span class="token comment">/* flex\u62D3\u5C55 */</span>
<span class="token property">flex</span><span class="token punctuation">:</span> 0 1 auto
<span class="token property">flex-grow</span><span class="token punctuation">:</span> 0/1...
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1
<span class="token property">flex-basis</span><span class="token punctuation">:</span> auto/100px/50%/Mix
row-gap
column-gap

<span class="token comment">/* grid\u5E03\u5C40 */</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token comment">/* \u5143\u7D20\u5360\u6BD4 */</span>
<span class="token property">grid-template</span><span class="token punctuation">:</span> 1fr 1fr  1fr/ 60% auto<span class="token punctuation">;</span>  <span class="token comment">/* 3\u884C2\u5217,\u884C\u7B49\u6BD4 */</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px auto 120px<span class="token punctuation">;</span>  <span class="token comment">/* 2fr */</span><span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> max-content<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>autofill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
<span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;. item1 . item2&quot;</span> <span class="token string">&quot;item3 item4&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/* \u5C45\u4E2D */</span>
<span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token comment">/* \u5143\u7D20\u95F4\u8DDD */</span>
<span class="token property">gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token property">row-gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token property">column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token comment">/* \u884C\u5217\u6570\u6BD4\u503C *
grid-column: span 3;
grid-row: span 1;



/* \u9690\u85CF */</span>
<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>          <span class="token comment">/* \u4E0D\u4F1A\u5360\u4F4D */</span>
<span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>     <span class="token comment">/* \u4F1A\u5360\u4F4D */</span>

<span class="token comment">/* \u4F4D\u7F6E */</span>
<span class="token property">position</span><span class="token punctuation">:</span> relative/absolute/fixed<span class="token punctuation">;</span>
<span class="token comment">/* \u56FE\u5C42\u5C42\u7EA7(position: relative) */</span>
<span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>

<span class="token comment">/* \u5BF9\u9F50 */</span>
<span class="token property">float</span><span class="token punctuation">:</span> left/right/none<span class="token punctuation">;</span>
<span class="token property">clear</span><span class="token punctuation">:</span> left/right/both<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* flex\u5F39\u6027\u5E03\u5C40 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* grid\u7F51\u683C\u5E03\u5C40 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>20rem<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 4rem 1rem<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> CSS3</h2><h3 id="\u5706\u89D2" tabindex="-1"><a class="header-anchor" href="#\u5706\u89D2" aria-hidden="true">#</a> \u5706\u89D2</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 20px 20px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u76D2\u5B50\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#\u76D2\u5B50\u9634\u5F71" aria-hidden="true">#</a> \u76D2\u5B50\u9634\u5F71</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px #888888<span class="token punctuation">;</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 5px 5px #888888<span class="token punctuation">;</span>
<span class="token comment">/* blur spread */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> -10px -10px 5px -5px #888888<span class="token punctuation">;</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 10px 10px 5px #888888<span class="token punctuation">,</span>
			inset -10px -10px 5px #888888<span class="token punctuation">;</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">rgba</span><span class="token punctuation">(</span>...<span class="token punctuation">,</span> alpha<span class="token punctuation">)</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">box-reflect</span><span class="token punctuation">:</span> below 1px <span class="token function">linear-gradient</span><span class="token punctuation">(</span>transparent<span class="token punctuation">,</span> #0005<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u52A8\u753B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u6548\u679C" aria-hidden="true">#</a> \u52A8\u753B\u6548\u679C</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;div&gt;&lt;/div&gt;
div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #32CD32<span class="token punctuation">;</span>
    <span class="token comment">/* hover\u5E73\u6ED1\u7279\u6548 */</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 2s ease-in<span class="token punctuation">;</span>
    <span class="token property">will-change</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 100ms 800ms <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.39<span class="token punctuation">,</span> 0.575<span class="token punctuation">,</span> 0.565<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">will-change</span><span class="token punctuation">:</span> opacity<span class="token punctuation">;</span>
    <span class="token comment">/* \u65CB\u8F6C */</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>50deg<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>80deg<span class="token punctuation">)</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token comment">/* \u81EA\u7531\u53D8\u6362*/</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span>10px<span class="token punctuation">)</span>
    <span class="token comment">/* \u5E73\u79FB */</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>5em<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>-13px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* \u503E\u659C */</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>30deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* \u7F29\u653E */</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.7<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* \u52A8\u753B\u5E27: name duration time-fuction delay iteration-count direction  */</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> example 3s ease 1s infinite reverse<span class="token punctuation">;</span>
  <span class="token comment">/* 3D\u8F6C\u6362 */</span>
  	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span>/<span class="token function">rotateY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>/<span class="token function">rotateX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>/none/<span class="token function">rotate3d</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token function">translateX</span><span class="token punctuation">(</span>9px<span class="token punctuation">)</span>/<span class="token function">translateY</span><span class="token punctuation">(</span>5em<span class="token punctuation">)</span>/<span class="token function">translateZ</span><span class="token punctuation">(</span>-13px<span class="token punctuation">)</span>/<span class="token function">translate3d</span><span class="token punctuation">(</span>9px<span class="token punctuation">,</span> 5em<span class="token punctuation">,</span> -13px<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">scale3d</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> top left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> example</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> Animation</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5173\u952E\u5E27\u52A8\u753B */</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> colorchange<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> colorchange</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">/* from */</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>     <span class="token comment">/* to */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> colorchange 3s ease-in 1s infinite reverse<span class="token punctuation">;</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">animation-time-function</span><span class="token punctuation">:</span> ease/linear/ease-in/ease-out/ease-in-out/<span class="token function">cubic-bezier</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u52A8\u753B\u5EF6\u8FDF\u6570\u79D2\u540E\u5F00\u59CB\u64AD\u653E */</span>
<span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token comment">/* \u5FAA\u73AF\u64AD\u653E\u6B21\u6570 */</span>
<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite/5<span class="token punctuation">;</span>
<span class="token property">animation-direction</span><span class="token punctuation">:</span> normal/reverse/alternate/alternate-reverse<span class="token punctuation">;</span>
</code></pre></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u6EE4\u955C */</span>
filter
<span class="token comment">/* \u4E0D\u6E05\u6670\u5EA6/\u6A21\u7CCA\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u4E0D\u900F\u660E\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">opacity</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u7070\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u8272\u5F69\u9971\u548C\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>30%/2.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u4EAE\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>70%<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">/* \u68D5\u8272 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>200%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u5BF9\u6BD4\u5EA6 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>85%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u8272\u76F8 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u660E\u6697\u5EA6\u53CD\u8272 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u6295\u5F71 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>5px 5px 2px gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#css\u62D3\u5C55" aria-hidden="true">#</a> CSS\u62D3\u5C55</h2><h3 id="\u6EDA\u52A8\u6761" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u6761" aria-hidden="true">#</a> \u6EDA\u52A8\u6761</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> .8rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6EDA\u52A8\u6761\u80CC\u666F\u8272 */</span>
<span class="token selector">html::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6EDA\u52A8\u6761\u8272 */</span>
<span class="token selector">html::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0097e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u62D6\u52A8\u9009\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u62D6\u52A8\u9009\u4E2D" aria-hidden="true">#</a> \u62D6\u52A8\u9009\u4E2D</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">::selection</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 34<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>236<span class="token punctuation">,</span> 231<span class="token punctuation">,</span> 231<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6587\u5B57\u4E0D\u53EF\u9009\u4E2D\u590D\u5236</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">-moz-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">-ms-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><p>\u56FE\u7247\u4E0D\u53EF\u62D6\u52A8</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">user-drag</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">-webkit-user-drag</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6309\u94AE\u7981\u7528\u4E8B\u4EF6</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="\u7981\u6B62\u6587\u672C\u9009\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u6587\u672C\u9009\u4E2D" aria-hidden="true">#</a> \u7981\u6B62\u6587\u672C\u9009\u4E2D</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7981\u6B62\u56FE\u7247\u62D6\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u56FE\u7247\u62D6\u52A8" aria-hidden="true">#</a> \u7981\u6B62\u56FE\u7247\u62D6\u52A8</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">-webkit-user-drag</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u53BB\u6389label\u70B9\u51FB\u65F6\u7684\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389label\u70B9\u51FB\u65F6\u7684\u80CC\u666F\u8272" aria-hidden="true">#</a> \u53BB\u6389label\u70B9\u51FB\u65F6\u7684\u80CC\u666F\u8272</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">label</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9AD8\u7EA7css\u7279\u6548" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7css\u7279\u6548" aria-hidden="true">#</a> \u9AD8\u7EA7CSS\u7279\u6548</h2><h3 id="\u6E10\u53D8\u5B57\u4F53\u8272" tabindex="-1"><a class="header-anchor" href="#\u6E10\u53D8\u5B57\u4F53\u8272" aria-hidden="true">#</a> \u6E10\u53D8\u5B57\u4F53\u8272</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u5B57\u4F53\u8272\u6E10\u53D8 */</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>120deg<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>132<span class="token punctuation">,</span>111<span class="token punctuation">,</span>244<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>241<span class="token punctuation">,</span>118<span class="token punctuation">,</span>116<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6BDB\u73BB\u7483\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6BDB\u73BB\u7483\u6548\u679C" aria-hidden="true">#</a> \u6BDB\u73BB\u7483\u6548\u679C</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> .72<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>16px<span class="token punctuation">)</span> <span class="token function">saturate</span><span class="token punctuation">(</span>180%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-webkit-backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>16px<span class="token punctuation">)</span> <span class="token function">saturate</span><span class="token punctuation">(</span>180%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,75);function o(l,i){return c}var r=n(e,[["render",o],["__file","css.html.vue"]]);export{r as default};
