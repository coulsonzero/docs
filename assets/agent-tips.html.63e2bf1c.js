import{_ as n,e as s}from"./app.dbb4eb6f.js";const a={},e=s(`<h1 id="ai-agent" tabindex="-1"><a class="header-anchor" href="#ai-agent" aria-hidden="true">#</a> Ai Agent</h1><h2 id="claude-\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#claude-\u7EC8\u7AEF" aria-hidden="true">#</a> claude\uFF08\u7EC8\u7AEF\uFF09</h2><h3 id="\u8282\u7701token\u4F7F\u7528\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8282\u7701token\u4F7F\u7528\u91CF" aria-hidden="true">#</a> \u8282\u7701token\u4F7F\u7528\u91CF</h3><ul><li>use english to ask question</li><li>/model deepseek-v4-flash</li><li>claude --reasoning low</li></ul><h3 id="\u51CF\u5C11claude\u64CD\u4F5C\u8BE2\u95EE" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11claude\u64CD\u4F5C\u8BE2\u95EE" aria-hidden="true">#</a> \u51CF\u5C11claude\u64CD\u4F5C\u8BE2\u95EE</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.claude/settings.local.json
</code></pre></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;Read(*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Write(*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Edit(*)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Bash(pnpm *)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Bash(npm *)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Bash(node *)&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309esc\uFF0C\u8F93\u5165 :wq \u4FDD\u5B58\u9000\u51FA</p><p>\u65B9\u5F0F\u4E8C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>claude --dangerously-skip-permissions
</code></pre></div><p>\u65B9\u5F0F\u4E09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>~/.claude/settings.json
</code></pre></div><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;approvalMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="codex" tabindex="-1"><a class="header-anchor" href="#codex" aria-hidden="true">#</a> codex</h2><p>new</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token key property">model</span> <span class="token punctuation">=</span> <span class="token string">&quot;deepseek-v4-flash&quot;</span>
<span class="token key property">model_provider</span> <span class="token punctuation">=</span> <span class="token string">&quot;deepseek&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">model_providers.deepseek</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;DeepSeek&quot;</span>
<span class="token key property">base_url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://api.deepseek.com&quot;</span>
<span class="token key property">env_key</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
</code></pre></div><p>old</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token key property">model</span> <span class="token punctuation">=</span> <span class="token string">&quot;gpt-5.5&quot;</span>
<span class="token key property">model_provider</span> <span class="token punctuation">=</span> <span class="token string">&quot;custom&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">model_providers.custom</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;custom&quot;</span>
<span class="token key property">wire_api</span> <span class="token punctuation">=</span> <span class="token string">&quot;responses&quot;</span>
<span class="token key property">requires_openai_auth</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">base_url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:57321/v1&quot;</span>
</code></pre></div><h2 id="\u63D0\u793A\u8BCDtips" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A\u8BCDtips" aria-hidden="true">#</a> \u63D0\u793A\u8BCDtips</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> ChatGPT(lovable)\u63D0\u793A\u8BCD</span>

\`\`\`md
design/Modify the website design with these improvements:
<span class="token list punctuation">-</span> nested replies (one level indented with a connector)
<span class="token list punctuation">-</span> timestamps/handles, like + reply actions
<span class="token list punctuation">-</span> a glassy submit form with character counter

\u4E3B\u8981\u529F\u80FD
<span class="token list punctuation">-</span> blog/docs
<span class="token list punctuation">-</span> music
<span class="token list punctuation">-</span> FAQ
<span class="token list punctuation">-</span> chat
<span class="token list punctuation">-</span> \u771F\u5B9E\u8BBF\u95EE\u4EBA\u6570(cookie, ip)
<span class="token list punctuation">-</span> \u8BC4\u8BBA
<span class="token comment">&lt;!-- - \u97F3\u4E50/\u89C6\u9891\u4EE5\u94FE\u63A5\u5F62\u5F0F\uFF0C\u94FE\u63A5\u4E91\u7AEF\u5B58\u50A8 --&gt;</span>
<span class="token list punctuation">-</span> github\u6D3B\u8DC3\u5EA6
<span class="token list punctuation">-</span> todo
<span class="token list punctuation">-</span> calendar

css\u6837\u5F0F\u8981\u70B9\uFF1A
<span class="token list punctuation">-</span> \u767D\u8272\u6BDB\u73BB\u7483
<span class="token list punctuation">-</span> \u4EE3\u7801\u5757\u9AD8\u4EAE\uFF0Cgithub-dark\u98CE\u683C\uFF0C\u53EF\u590D\u5236
<span class="token list punctuation">-</span> \u6587\u5B57\u7528english, apple\u98CE\u683C

navbar
<span class="token list punctuation">-</span> \u767D\u8272\u6BDB\u73BB\u7483\u98CE\u683C\uFF0C\u5E26\u9634\u5F71\uFF0C0.25\u4E0D\u900F\u660E\u5EA6
<span class="token list punctuation">-</span> \u4F4D\u4E8E\u53F3\u4E0A\u4FA7
<span class="token list punctuation">-</span> \u5185\u5BB9\u4E3Adocs, FAQ\u7B49

md\u4EE3\u7801\u5757
<span class="token list punctuation">-</span> \u6280\u672F\uFF1A\u4F7F\u7528highlight.js\u5B9E\u73B0\u4EE3\u7801\u9AD8\u4EAE
<span class="token list punctuation">-</span> \u98CE\u683C\uFF1Agithub-dark
<span class="token list punctuation">-</span> \u529F\u80FD\uFF1A\u4EE3\u7801\u884C\u6570\u548C\u590D\u5236\u6309\u94AE\uFF0C\u652F\u6301\u957F\u4EE3\u7801\u6A2A\u5411\u6EDA\u52A8
<span class="token list punctuation">-</span> \u5B57\u4F53\uFF1AJetBrains Mono\uFF0C\u5706\u89D212px\uFF0Cpadding16~20px

\u771F\u5B9E\u8BBF\u95EE\u4EBA\u6570(ip)
<span class="token list punctuation">-</span> \u52A0\u4E0A\u8BBF\u95EE\u603B\u6B21\u6570\u3001\u72EC\u7ACB\u8BBF\u5BA2\uFF08\u6309\u6D4F\u89C8\u5668\u8FD1\u4F3C IP \u53BB\u91CD\uFF09\u548C\u5F53\u524D\u8BBF\u5BA2 IP
<span class="token list punctuation">-</span> \u6570\u636E\u901A\u8FC7\u514D\u8D39\u7684 counterapi.dev \u4E0E ipify \u5B9E\u65F6\u83B7\u53D6\uFF0C\u65E0\u9700\u540E\u7AEF

commit\u8BC4\u8BBA
<span class="token list punctuation">-</span> name, email, website, content\uFF0C\u8868\u60C5\u5305\uFF0C \u652F\u6301md
<span class="token list punctuation">-</span> \u8BC4\u8BBA\u65F6\u95F4\uFF0C\u652F\u6301\u56DE\u590D\uFF0C\u652F\u6301\u70B9\u8D5E
<span class="token list punctuation">-</span> \u7EDF\u8BA1\u8BC4\u8BBA\u603B\u6570

music
<span class="token list punctuation">-</span> sticky music player with play/pause, next, previous, seek bar, volume slider, repeat, shuffle, playback speed, synchronized lyrics
<span class="token list punctuation">-</span> ui: smooth micro interactions, hover glow effects, animated waveform, glassmorphism cards, premium dark theme
<span class="token list punctuation">-</span> Premium dark theme
<span class="token list punctuation">-</span> Neon blue and purple accent colors
<span class="token list punctuation">-</span> Smooth animations
<span class="token list punctuation">-</span> Glassmorphism cards
<span class="token list punctuation">-</span> Responsive desktop-first layout
<span class="token list punctuation">-</span> Beautiful album cover grid

\u4E2A\u4EBA\u4FE1\u606F\u5C55\u793A
<span class="token list punctuation">-</span> name, avatar, social links(github, x, bilibili, tiktok), website
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function i(t,l){return e}var o=n(a,[["render",i],["__file","agent-tips.html.vue"]]);export{o as default};
