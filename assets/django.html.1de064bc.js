import{_ as i,r as o,o as l,c as r,b as n,d as a,a as e,F as c,e as t}from"./app.afb47d0b.js";const d={},p=n("h1",{id:"django",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#django","aria-hidden":"true"},"#"),a(" Django")],-1),m={href:"https://www.djangoproject.com/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> \u5FEB\u901F\u542F\u52A8</h2><p><strong>1.\u5B89\u88C5 Django</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> Django
</code></pre></div><p><strong>2.\u521B\u5EFA\u5E76\u542F\u52A8 Django \u9879\u76EE</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ django-admin startproject mysite
$ <span class="token builtin class-name">cd</span> mysite
$ python3 manage.py runserver
</code></pre></div>`,5),u={href:"http://127.0.0.1:8000/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p><strong>3.\u521B\u5EFA\u8D85\u7EA7\u7BA1\u7406\u5458\u8D26\u6237\u5E76\u767B\u5F55\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u8D85\u7EA7\u7BA1\u7406\u5458\u8D26\u6237</span>
<span class="token comment"># python manage.py makemigrations</span>
$ python manage.py migrate
$ python manage.py createsuperuser
Username: admin
Email address:
Password: admin
Password <span class="token punctuation">(</span>again<span class="token punctuation">)</span>: admin
<span class="token comment"># \u91CD\u542FDjango\u9879\u76EE</span>
$ python manage.py runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"http://127.0.0.1:8000/admin",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="\u8FDE\u63A5mysql\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5mysql\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5mysql\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;django.db.backends.mysql&#39;</span>,
        <span class="token string">&#39;NAME&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;django_test&#39;</span>,
        <span class="token string">&#39;USER&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;root&#39;</span>,
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;root&#39;</span>,
        <span class="token string">&#39;HOST&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;127.0.0.1&#39;</span>,
        <span class="token string">&#39;PORT&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;3306&#39;</span>,
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770BDjango\u7248\u672C</span>
$ python -m django --version
<span class="token comment"># \u66F4\u65B0Djnago\u7248\u672C</span>
$ pip <span class="token function">install</span> --upgrade django
</code></pre></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8BB0\u5F55\u5BF9models.py\u7684\u6240\u6709\u6539\u52A8\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u52A8\u8FC1\u79FB\u5230migrations\u8FD9\u4E2A\u6587\u4EF6\u4E0B\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\u4F8B\u5982\uFF1A0001\u6587\u4EF6</span>
$ python manage.py makemigrations
<span class="token comment"># \u6267\u884Cmigrations\u91CC\u9762\u65B0\u6539\u52A8\u7684\u8FC1\u79FB\u6587\u4EF6\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u6BD4\u5982\u521B\u5EFA\u6570\u636E\u8868\uFF0C\u6216\u8005\u589E\u52A0\u5B57\u6BB5\u5C5E\u6027</span>
$ python manage.py migrate
</code></pre></div>`,6);function k(_,f){const s=o("ExternalLinkIcon");return l(),r(c,null,[p,n("p",null,[n("a",m,[a("Django\u5B98\u7F51"),e(s)])]),g,n("p",null,[n("a",u,[a("http://127.0.0.1:8000/"),e(s)])]),h,n("p",null,[n("a",v,[a("http://127.0.0.1:8000/admin/"),e(s)])]),b],64)}var j=i(d,[["render",k],["__file","django.html.vue"]]);export{j as default};
