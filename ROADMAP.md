# personal-website ROADMAP

## 当前阶段

实现验证完成：按 v2 UI spec 构建 Astro 静态 MVP。

## 已完成

- 需求确认。
- 架构选型：Astro + GitHub Pages。
- UI 设计需求文档。
- v2 UI design spec。
- Astro 静态 MVP：预览入口、主页、博客列表页、文章详情页。
- 透明 logo 资产接入。
- 真实公众号二维码接入。
- 清空旧文章，接入首篇文章《65 行，治好了 AI 写代码的三个臭毛病》。
- GitHub Pages Actions 部署 workflow 接入。
- `keinye.com` 从旧 Pages 仓库迁移到 `keinYe/blog`。
- GitHub Pages HTTPS 证书签发完成，Enforce HTTPS 已开启。
- 文章源迁移到 Astro content collection，正文改为 `src/content/blog/*.md`。

## 进行中

- 等待人工预览确认。

## 待办

- 无。

## 阻塞

- 无。

## 最近验证

- 2026-06-25：`npm run build` 通过，Astro check 0 errors / 0 warnings，生成 4 个静态页面；文章详情路由为 `/blog/2026-06-07-65-lines-karpathy/`。
- 2026-06-25：新增 GitHub Pages Actions 部署 workflow，等待 GitHub 端 Pages Source 与 DNS 配置。
- 2026-06-25：`keinye.com` 已绑定到 `keinYe/blog`，`http://keinye.com/` 和文章详情页返回 200；HTTPS 证书状态为 `authorization_created`。
- 2026-06-25：Enforce HTTPS 已开启，`https://keinye.com/` 和文章详情页返回 200，HTTP 自动 301 跳转到 HTTPS。
- 2026-06-25：文章源迁移到 `src/content/blog/*.md`，`npm run build` 通过，Astro check 0 errors / 0 warnings。
