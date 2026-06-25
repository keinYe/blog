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

当前文章数据在 `src/data/articles.ts`，文章详情由 `src/pages/blog/[slug].astro` 生成。
