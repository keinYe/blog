# personal-website 项目约定

## 项目定位

这是 keinYe 的个人主页 + 博客 MVP，服务公众号系列文章「用 AI 做一个个人网站」的真实素材原型。

## 实现范围

- 技术栈：Astro 静态站点。
- 部署目标：GitHub Pages。
- 视觉标准：以 `v2/design-spec.md` 为准。
- 本版不接真实 CMS、真实筛选、真实分页、真实公众号二维码。

## 目录约定

- `src/pages/`：页面入口。
- `src/components/`：可复用 UI 组件。
- `src/layouts/`：页面布局。
- `src/data/`：静态文章和站点数据。
- `src/styles/`：全局样式和设计 tokens。
- `public/images/`：公开图片资产。

## 修改原则

- 优先满足设计 spec，不额外发散功能。
- 页面文案保持克制、具体，不写营销式承诺。
- Logo 使用透明背景图片，不加厚重容器。
- 二维码使用占位图时必须清楚标注，上线前替换同名资产。
