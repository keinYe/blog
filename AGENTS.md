# personal-website 项目约定

## 项目定位

这是 keinYe 的个人主页 + 博客 MVP，服务公众号系列文章「用 AI 做一个个人网站」的真实素材原型。

## 实现范围

- 技术栈：Astro 静态站点。
- 部署目标：GitHub Pages。
- 视觉风格：深空科技风（底色 `#050510`；品牌青 `#38F9D7` + 蓝 `#60A5FA` 渐变只用于品牌时刻；星光蓝 `#7FB8FF` 做次级强调；琥珀 `#FFB547` 为信号色、用量 ≤ 5%；冷调中性色与靛蓝描边；Space Grotesk 英文展示字体 + 自托管 JetBrains Mono 等宽字体 + 苹方优先的中文系统栈）。
- 本版不接真实 CMS、真实筛选、真实分页、真实公众号二维码。

## 视觉约定

- 全站固定数字银河背景（`src/components/SkyBackground.astro`，canvas）：首页 `live` 模式 30fps 动画（粒子沿旋臂流动、坐标环 HUD、雷达扫描、目标锁定、探测器航线、字符粒子）；其他页 `reading` 模式同位置同大小、关闭 HUD 与动效、亮度 × 0.8，只在滚动 / 缩放时重绘。模式由 `BaseLayout` 按 `withNav` 传入。
- 背景性能约束：粒子分组批量绘制、静态层预渲染到离屏 canvas、DPR 固定为 1；叠在动画背景上的元素不用 `backdrop-filter`（卡片用 `--card` 半透明深色底，首页终端卡完全透明）。
- 内容层恒为深色科技风 token；`body` 背景为透明。
- 首页为单页品牌站：满屏 Hero（渐变流光徽章 + 胶囊标签 + 右侧 `TerminalCard` 玻璃拟态终端，循环打字讲述身份与方向）→ 关于我（时间线 + 统计卡 + 引言）→ 我在做什么（玻璃卡）→ 最新文章 → 联系我，滚动揭示动画由 IntersectionObserver 驱动。
- 导航：首页无顶栏，用左侧 `PageDots` 圆点导航（hover 显标签、滚动高亮当前 section，≤1280px 隐藏）；子页面为全透明极简顶栏（logo + 文章/联系）。
- 首页启用 `scroll-snap-type: y mandatory` 滚动吸附（`<html class="snap">`，仅首页）。

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
