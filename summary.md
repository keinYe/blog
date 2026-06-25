# 个人网站 MVP 讨论摘要

## 项目定位

个人主页 + 文章站，作为系列文章「用 AI 做一个个人网站」的真实素材原型。

目标不是做简历站，也不是企业官网，而是做一份个人实践档案：展示长期关注的主题、沉淀文章内容，并为后续 GitHub Pages 部署和公众号系列文章提供素材。

## 当前状态

- 已完成需求确认、架构选型、UI spec 阅读与 Astro 静态 MVP 实现。
- 当前项目已能本地运行和构建。
- 本地 dev server 使用 `npm run dev -- --host 0.0.0.0`。
- 最近多轮修改集中在首页、文章列表页、文章详情页的视觉细节和文案收敛。
- 每次主要修改后均执行 `npm run build`，最近一次结果为 `0 errors / 0 warnings`。

## 技术与部署决策

| 项目 | 决定 |
|---|---|
| 框架 | Astro |
| 类型 | 静态站 |
| 包管理 | npm |
| 部署目标 | GitHub Pages |
| 推荐部署方式 | GitHub Actions |
| 推荐域名方式 | 自定义域名，避免配置 `base` |

GitHub Pages 部署建议：

- 使用 GitHub Actions，不手动提交 `dist/`。
- 提交 `package-lock.json`。
- 不提交 `node_modules/`、`dist/`、`.astro/`。
- 如果部署到自定义域名，`astro.config.mjs` 只设置 `site`，不设置 `base`。
- 如果部署到 `https://username.github.io/repo/`，才需要设置 `base: "/repo"`。

## 目录与文件

主要实现目录：

- `projects/personal-website/src/pages/`：页面入口。
- `projects/personal-website/src/components/`：导航、页脚、文章卡、公众号卡等组件。
- `projects/personal-website/src/data/articles.ts`：静态文章数据。
- `projects/personal-website/src/styles/global.css`：全局样式和响应式规则。
- `projects/personal-website/public/images/`：logo 与二维码。

已补充项目规则与状态文件：

- `projects/personal-website/CLAUDE.md`
- `projects/personal-website/ROADMAP.md`

## 页面范围

当前实现 4 个页面入口：

- `/`：首页。
- `/blog/`：文章列表页。
- `/blog/ai-workflow-engineering/`：文章详情页。
- `/preview/`：预览导航页。

导航中显示为「文章」，但路由仍使用 `/blog/`。

## 视觉与资产

整体视觉基于 ui-ux-system 的 v2 design spec：

- 页面底色：暖白 `#FFFDF8`。
- 主文字：`#151515`。
- 深色面板：`#101826`。
- 强调色：陶土色 `#B35C2E`。
- 卡片边框：`#E6DFD2`。
- 风格：克制、专业、个人实践档案。

资产处理：

- 原始不透明 logo 已另存为 `/home/keinye/winshare/logo.jpg`。
- 透明版 logo 已命名为 `/home/keinye/winshare/logo.png`。
- 项目内 logo 已同步到 `public/images/logo.png`。
- 真实公众号二维码来自 `/home/keinye/winshare/qrcode_wechat.jpg`，已复制到 `public/images/qrcode_wechat.jpg`。

## 首页最终方向

首页 Hero 当前主标题：

> 将 AI 工具实践、产品判断和工程经验，沉淀为长期档案

首页 Hero 副标题：

> 用工具改变工作方式，用规则固化经验，记录软件、产品与内容工作的长期迭代。

首页右侧三条内容主线：

| 分类 | 描述 |
|---|---|
| AI 编程工具 | 从体验到实践，记录 AI 编程带来的效率变化。 |
| 产品与工程 | 把产品目标、技术路径和交付约束放在一起分析。 |
| 知识管理 | 把个人经验整理成规则、模板和可复用的工作流。 |

首页调整记录：

- 去掉 Hero 左侧 `KEINYE NOTES` 和 logo。
- Hero 主标题字号降到 `clamp(24px, 3.4vw, 28px)`。
- Hero 顶部留白设为 `36px`。
- 左侧按钮组与右侧卡片底部对齐。
- 首页原来的三张数据卡已删除。
- 原数据卡位置改为无文字过渡色带。
- 桌面端只让 `.hero-grid` 纵向撑满首屏，不改变左右 grid 布局。

过渡色带样式：

```css
.transition-band {
  height: 40px;
  border-block: 1px solid var(--line);
  background: linear-gradient(90deg, var(--page) 0%, var(--soft) 45%, var(--clay-soft) 100%);
}
```

## 首页 About 区

About 标题：

> 少一点履历展示，多一点实践复盘

About 正文：

> 我长期在软件、产品和内容之间工作。这里记录工具带来的工作流变化，也记录经验如何被整理成可复用规则。

讨论结论：

- 不写成完整简历。
- 保持身份校准，但不堆项目经历。
- 强调实践、复盘、规则沉淀。

## 最新文章区

当前实现：

- 左侧为精选文章卡。
- 右侧为普通文章列表。
- 左侧精选卡内容靠顶部。
- 左侧精选卡使用更长的文章开头片段，尽量填满空间。

数据字段已拆分：

- `summary`：短摘要，用于文章列表页和普通文章卡。
- `featuredExcerpt`：长摘录，只用于首页左侧精选卡。

当前逻辑：

```ts
const excerpt = featured
  ? article.featuredExcerpt ?? article.summary
  : article.summary;
```

后续建议：

- 将精选文章从 `featured: true` 改为 `homepageConfig.featuredArticleSlug`。
- 右侧普通文章建议按日期倒序自动取 3 篇。

## 文章列表页

文章列表页 `/blog/` 已做简化：

- 去掉顶部 Hero。
- 去掉「持续更新的长期档案」标题。
- 去掉右侧 `4 篇文章 / 3 条长期内容主线` 概览卡。
- 去掉文章列表页顶部公众号关注卡。
- 页面直接从分类条和文章列表开始。
- 顶部空白收紧为 `32px`。

当前页仍保留：

- 分类条。
- 文章列表。
- 分页占位。

## 文章详情页

文章详情页调整：

- 标题字号固定为 `32px`。
- 标题宽度放宽，桌面尽量一行显示。
- 去掉标题区 logo。
- 去掉标题区 `AI Workflow` 分类标识。
- 元信息改为中文格式。
- 去掉正文底部公众号关注卡。
- 目录从右侧移到左侧，桌面 sticky，移动端隐藏。

文章元信息当前格式：

> 2026年6月19日  共计3200 字  预计需要8分钟

实现上从数据生成：

- `article.date` 转中文日期。
- `article.words` 显示字数。
- `article.readTime` 提取分钟数。

## 页脚与外链

页脚当前信息：

- Email：`keinye.dev@gmail.com`
- GitHub：`https://github.com/keinYe`
- 公众号：锚点链接 `#subscribe`

已修复 GitHub 链接从占位 `https://github.com/` 指向个人主页。

## 已知取舍

- 当前文章数据仍是静态 TypeScript 数据，不接真实 CMS。
- 当前只有一个真实文章详情页，其他文章链接为未来扩展占位。
- 分类过滤条是静态状态，不做真实筛选。
- 分页控件是占位，不做真实分页。
- 首页仍保留公众号关注入口，文章列表页和文章详情页已移除关注模块。

## 验证

常用验证命令：

```bash
npm run build
```

最近验证结果：

- Astro check：`0 errors / 0 warnings`
- Astro build：成功生成 4 个静态页面

## 下一步建议

1. 将首页精选文章配置改为 `homepageConfig.featuredArticleSlug`。
2. 将文章列表按日期自动倒序。
3. 增加真实 Markdown/MDX 文章来源。
4. 增加 GitHub Actions 部署配置。
5. 配置自定义域名与 `astro.config.mjs` 的 `site`。
