# Ai Agent

### 提示词tips

```md
### ChatGPT(lovable)提示词

```md
design/Modify the website design with these improvements:
- nested replies (one level indented with a connector)
- timestamps/handles, like + reply actions
- a glassy submit form with character counter

主要功能
- blog/docs
- music
- FAQ
- chat
- 真实访问人数(ip)
- 评论

css样式要点：
- 白色毛玻璃
- 代码块高亮，github-dark风格，可复制
- 文字用english, apple风格

navbar
- 白色毛玻璃风格，带阴影，0.25不透明度
- 位于右上侧
- 内容为docs, FAQ等

md代码块
- 使用highlight.js实现代码高亮, 使用github-dark主题, 可复制


真实访问人数(ip)
- 加上访问总次数、独立访客（按浏览器近似 IP 去重）和当前访客 IP
- 数据通过免费的 counterapi.dev 与 ipify 实时获取，无需后端

评论
- name, email, website, content，表情包
- 评论时间，支持回复，支持点赞
- 统计评论总数
```