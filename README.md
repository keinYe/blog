# keinYe Blog

keinYe 的个人主页与博客，记录 AI 工具、产品判断、工程实践和知识管理。项目使用 Astro 构建静态站点，部署到 GitHub Pages，并绑定自定义域名 `https://keinye.com`。

## Tech Stack

- Astro 5
- TypeScript
- GitHub Pages
- Astro content collection

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

常用命令：

- `npm run dev`：启动本地开发服务。
- `npm run build`：运行 `astro check` 并生成静态站点。
- `npm run preview`：预览本地构建产物。

## Project Structure

```txt
src/content/blog/          Markdown 文章
src/pages/                 页面入口和动态文章路由
src/components/            复用组件
src/layouts/               页面布局
src/styles/                全局样式
public/images/             图片和公开静态资源
.github/workflows/         GitHub Pages 部署 workflow
```

## Writing Articles

文章使用 Astro content collection 管理。每篇文章一个 Markdown 文件，放在 `src/content/blog/`，文件名就是文章 URL slug。

示例：

```txt
src/content/blog/my-new-article.md
```

访问路径：

```txt
https://keinye.com/blog/my-new-article/
```

Frontmatter 示例：

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
  - id: "section-2"
    title: "第二节"
---
```

说明：

- `featured: true` 用于首页重点文章，建议同时只保留一篇。
- `sections` 用于文章详情页左侧目录，`id` 需要和正文标题锚点一致。
- 当前分类筛选是静态展示，不做真实过滤。

正文标题需要显式写锚点，方便目录跳转：

```md
<h2 id="section-1">第一节</h2>

正文内容。
```

## Images

文章图片建议放在：

```txt
public/images/articles/<slug>/
```

例如：

```txt
public/images/articles/my-new-article/cover.png
```

Markdown 中用绝对路径引用：

```md
![图片说明](/images/articles/my-new-article/cover.png)
```

图片约定：

- 文件名使用英文小写和短横线。
- 正文图建议控制在 1200px 宽以内。
- `alt` 文案写具体内容，不留空。

## Deployment

仓库推送到 `main` 后，GitHub Actions 会自动构建并部署到 GitHub Pages。

- Production: https://keinye.com
- Custom domain file: `public/CNAME`
- Workflow: `.github/workflows/deploy.yml`

部署前本地至少运行：

```bash
npm run build
```

## Notes

项目约定见 `CLAUDE.md`，进度状态见 `ROADMAP.md`。
