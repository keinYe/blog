# personal-website ROADMAP

## 当前阶段

全站深色科技风 + 数字银河背景已落地（本地，未提交），等待人工预览确认。

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
- 全站昼夜动态背景：夜间银河旋臂旋转（canvas）、白天蓝天白云（CSS），按用户本地时间自动切换（`SkyBackground.astro` + `BaseLayout` 内联脚本设 `<html data-sky>`）。
- 全站重做（2026-08-03）：配色废弃墨绿，改 stormzhang 式深色科技调（`#050510` + 青 `#38F9D7` / 蓝 `#60A5FA` 渐变 + 玻璃态卡片 + 噪点纹理）；首页改单页品牌站（满屏 Hero / 关于我时间线 / 我在做什么 / 最新文章 / 联系我，滚动渐入）；Space Grotesk 自托管 + 中文苹方优先系统栈；博客列表/详情页配色同步换新。
- 导航与背景收敛（2026-08-03）：白天背景方案废弃，只保留夜间星云银河；首页去掉顶栏，改左侧 `PageDots` 圆点导航（hover 显标签、滚动高亮）；子页面顶栏改全透明极简版（logo + 文章/联系）。
- 2026-11-21 22:33 数字银河背景 + 配色字体优化：`SkyBackground.astro` 改为数字银河（首页 live 动画 / 其他页 reading 静态随滚动旋转）；配色收敛（品牌青只用于品牌时刻、冷星光银河、琥珀信号色、冷调中性色、靛蓝描边）；自托管 JetBrains Mono，中文栈补 `Noto Sans CJK SC`；文章 h2 改 24px；首页终端卡完全透明；全站去掉 `backdrop-filter`。原星空背景的流星与闪现星随之移除。

## 进行中

- 等待人工预览确认全站新风格与数字银河背景（含真实浏览器下的 CPU / GPU 占用）。

## 待办

- 时间线节点与统计卡文案待主人确认是否替换为真实年份/数字。
- `SubscribeCard.astro` 已无引用（联系区块内联实现），待主人确认后删除。

## 阻塞

- 无。

## 最近验证

- 2026-06-25：`npm run build` 通过，Astro check 0 errors / 0 warnings，生成 4 个静态页面；文章详情路由为 `/blog/2026-06-07-65-lines-karpathy/`。
- 2026-06-25：新增 GitHub Pages Actions 部署 workflow，等待 GitHub 端 Pages Source 与 DNS 配置。
- 2026-06-25：`keinye.com` 已绑定到 `keinYe/blog`，`http://keinye.com/` 和文章详情页返回 200；HTTPS 证书状态为 `authorization_created`。
- 2026-06-25：Enforce HTTPS 已开启，`https://keinye.com/` 和文章详情页返回 200，HTTP 自动 301 跳转到 HTTPS。
- 2026-06-25：文章源迁移到 `src/content/blog/*.md`，`npm run build` 通过，Astro check 0 errors / 0 warnings。
- 2026-08-03：昼夜背景 + Hero 改版后 `npm run build` 通过，Astro check 0 errors / 0 warnings，生成 6 个静态页面（新增两篇文章）；`dist/index.html` 确认包含昼夜判断脚本、银河 canvas、5 朵云与新 Hero 结构。Windows 下首次构建前补跑了一次 `npm install`（缺 win32 原生依赖）。
- 2026-08-03：放弃昼夜切换，定型纯星空背景（静态星层 + 闪烁星 + 随机流星）；接入真实线框宇航员抠图（`public/images/astronaut.png`，PIL 处理染青白 + 5 个引导点 + 目的地星，纯 HTML/CSS 漂浮动画）；Hero 文案改「工程师 · 产品人 · 写作者」。`npm run build` 通过，生成 6 个静态页面。
- 2026-08-03：stormzhang 风全站重做后 `npm run build` 通过（0 errors），生成 6 个静态页面；dev server 下首页 / /blog/ / 文章详情 / /preview/ / 字体文件均返回 200。
- 2026-08-03：导航与背景收敛后 `npm run build` 通过（0 errors），生成 6 个静态页面；dev server 验证首页无 `<header>` 且含 PageDots，/blog/ 含极简顶栏。
- 2026-08-03：修复 PageDots 与内容重叠（1280px 以下隐藏）；首页启用 `scroll-snap-type: y mandatory` 滚动吸附对齐（仅首页，长区块不受影响）。
- 2026-08-03：银河 canvas 升级写实风（暖白亮核 + 分层旋臂色 + 星云团 + 远星场），`npm run build` 通过（0 errors）。
- 2026-08-03：银河 v2 重写（旋臂雾带连成亮带 + 星点收紧贴臂 + 三层亮核 + 离屏预渲染旋转），经 Python 离线渲染调参验证后移植，`npm run build` 通过（0 errors）。
- 2026-08-03：银河 v3 改科技感方向（青蓝单色系细旋臂 + 轨道环 + 冷色紧凑核，对齐站点主题色），Python 离线预览确认后移植，`npm run build` 通过（0 errors）。
- 2026-08-03：背景放弃银河改纯星空（静态星层 + 闪烁星，离屏预渲染）；首页 Hero 右侧新增数字线条风宇航员 SVG（`AstronautFigure.astro`，指向右上方「目的地星」，虚线引导 + 漂浮/脉冲动画，移动端隐藏），`npm run build` 通过（0 errors）。
- 2026-08-03：宇航员按写实摄影参考重做轮廓（白 EVA 服灰阶阴影 + 深色金面窗 + PLSS 背包 + 月岩立足，PIL 离线预览验证后移植 SVG）；星空新增随机流星（位置/方向/间隔随机，斜向下带尾迹，reduced-motion 禁用），`npm run build` 通过（0 errors）。
- 2026-08-03：首页右侧宇航员方案废弃，经 `/hero-options/` 四方案对比后主人选定终端卡片：新增 `TerminalCard.astro`（玻璃拟态终端，循环打字 `whoami` / `cat focus.md` / `ls ~/now` + 浮动标签，reduced-motion 静态全量渲染），`index.astro` 完成替换；`AstronautFigure.astro` 与 `public/images/astronaut.png` 暂未删除，待主人确认后清理。
- 2026-08-03：终端卡片定稿——固定外观尺寸 460 × 413（宽 460 + 终端体 380，移动端 92% 自适应），去掉浮动标签与漂浮动画，仅保留光标闪烁；修复 `hero-options.astro` 9 个 TS 错误（canvas 类型断言、参数类型、null 收窄）。`astro check` 0 errors / 0 warnings，`astro build` 通过，生成 7 个静态页面（含临时对比页 `/hero-options/`）。
- 2026-08-03：清理宇航员方案遗留（删 `AstronautFigure.astro`、`public/images/astronaut.png`）与临时对比页 `hero-options.astro`；星空新增 5 颗随机闪现星（随机位置淡入闪耀带十字光芒，消失后 0.8–5.8s 随机延迟在新位置重现，reduced-motion 不出现）。`npm run build` 通过（0 errors），生成 6 个静态页面。
- 2026-11-21 22:33 数字银河落地：`npm run build` 通过（astro check 0 errors / 0 warnings / 0 hints），生成 6 个静态页面；`npm run preview` 下 headless Chrome 截图确认首页（live）与文章页（reading）渲染正常。性能为预览页 headless 粗测：首页每帧主线程约 2.2ms @30fps（原约 5.0ms @60fps，每秒开销约降至 1/4.5）；GPU 侧（去模糊、DPR 1）与真实浏览器占用未测。
