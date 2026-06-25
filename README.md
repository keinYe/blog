# personal-website

keinYe 的个人主页 + 博客 MVP，使用 Astro 构建静态站点，目标部署到 GitHub Pages。

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Site

- Production domain: https://keinye.com
- GitHub Pages custom domain file: `public/CNAME`

## Content

文章使用 Astro content collection 管理：每篇文章一个 Markdown 文件，放在 `src/content/blog/`。文件名就是文章 URL slug。

示例：

```txt
src/content/blog/my-new-article.md
public/images/articles/my-new-article/cover.png
```

Markdown frontmatter：

```yaml
---
title: "文章标题"
date: "2026-06-25"
readTime: "6 min"
words: "2600 字"
category: "AI Coding"
summary: "列表页摘要。"
featuredExcerpt: "首页重点摘要。"
featured: true
sections:
  - id: "section-1"
    title: "第一节"
---
```

正文图片建议放在 `public/images/articles/<slug>/`，Markdown 中用绝对路径引用：

```md
![图片说明](/images/articles/my-new-article/cover.png)
```

