import{_ as o,r as i,o as l,c as r,b as a,a as t,w as s,F as c,e,d as p}from"./app.73a9ff34.js";const d={},u=a("h1",{id:"swift",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#swift","aria-hidden":"true"},"#"),e(" Swift")],-1),h={class:"table-of-contents"},f=e("Comments"),g=e("Opeartor"),m=e("Output"),_=e("variables"),k=e("Type Annotations"),v=p(`<p>Swift is a type safe language</p><hr><h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h2><div class="language-Swift ext-Swift"><pre class="language-Swift"><code>// This is a Comment
/* This is a comment */
</code></pre></div><h2 id="opeartor" tabindex="-1"><a class="header-anchor" href="#opeartor" aria-hidden="true">#</a> Opeartor</h2><div class="language-Swift ext-Swift"><pre class="language-Swift"><code>+  -  *  /  %
</code></pre></div><hr><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><div class="language-swift ext-swift"><pre class="language-swift"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;name: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">myVariable</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre></div><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> variables</h2><div class="language-swift ext-swift"><pre class="language-swift"><code>num <span class="token operator">=</span> <span class="token number">42</span>                <span class="token comment">// variable</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">42</span>            <span class="token comment">// variable can be changed</span>
<span class="token keyword">let</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">,</span> a <span class="token operator">=</span> <span class="token number">1</span>    <span class="token comment">// constant can never be changed</span>
</code></pre></div><h2 id="type-annotations" tabindex="-1"><a class="header-anchor" href="#type-annotations" aria-hidden="true">#</a> Type Annotations</h2><div class="language-text ext-text"><pre class="language-text"><code>Int
Double &amp; Float
Bool
String
</code></pre></div><div class="language-Swift ext-Swift"><pre class="language-Swift"><code>let num = 42        // Integer
let pi = 3.14159    // Double
let text = &quot;Hello&quot;  // String
</code></pre></div><div class="language-Swift ext-Swift"><pre class="language-Swift"><code>var message = String
message = &quot;Hello&quot;

var red, green, blue : Double
</code></pre></div>`,15);function w(b,x){const n=i("RouterLink");return l(),r(c,null,[u,a("nav",h,[a("ul",null,[a("li",null,[t(n,{to:"#comments"},{default:s(()=>[f]),_:1})]),a("li",null,[t(n,{to:"#opeartor"},{default:s(()=>[g]),_:1})]),a("li",null,[t(n,{to:"#output"},{default:s(()=>[m]),_:1})]),a("li",null,[t(n,{to:"#variables"},{default:s(()=>[_]),_:1})]),a("li",null,[t(n,{to:"#type-annotations"},{default:s(()=>[k]),_:1})])])]),v],64)}var y=o(d,[["render",w],["__file","swift.html.vue"]]);export{y as default};
