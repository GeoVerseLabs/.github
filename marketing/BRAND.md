# GeoVerse Labs 品牌规范 · Brand guidelines

可视化版本（含色块复制、标志下载、一键复制文案）：<https://geoverselabs.github.io/.github/brand/>

## 1. 我们是谁

> **为中国坐标系而生的 Web 地图基础设施。**
> Mapping infrastructure for the modern web, built for China's coordinate systems.

GeoVerse Labs 做的是**一条可组合的空间应用工具链**：数据层（mybatis-plus-geometry）→ 服务层（GeoVerse Serve）→ 前端渲染与编辑（GeoVerse SDK、Line Finder）→ 应用（GeoVerse Live）→ AI（GeoVerse SAR、GeoVerse Skills）。每一层能单独用，组合起来是一整套。

### 品牌个性

| 我们是 | 我们不是 |
|---|---|
| **精确**——给数字、给出处、给复现方法 | 夸张——"最快""颠覆""革命性" |
| **克制**——说清楚做到了哪一级 | 含糊——用一句"已完成"带过 |
| **工程师对工程师**——先讲问题，再讲方案 | 销售腔——先讲情怀，再讲功能 |
| **扎根国内场景**——GCJ-02、天地图、内网部署是一等公民 | 照搬海外叙事 |

## 2. 标志

| 文件 | 用途 |
|---|---|
| [`assets/logo.svg`](../assets/logo.svg) | 图形标（地球 + 路线），favicon、头像、小尺寸 |
| [`assets/logo-wordmark.svg`](../assets/logo-wordmark.svg) | 横版组合（图形标 + "GeoVerse Labs"），页眉、幻灯片 |
| [`assets/banner.svg`](../assets/banner.svg) | 动态横幅（CSS 动画，尊重 `prefers-reduced-motion`），README 顶部 |
| [`assets/og-card.png`](../assets/og-card.png) | 1200×630 社交分享卡 |

- 含义：地球代表**坐标**，穿过它的折线代表**计算**（路线、编辑、发布）；渐变 = OpenLayers 蓝 → Verse 紫 → MapLibre 绿，即"双引擎 + 连接它们的我们"。
- 留白 ≥ 标志高度的 1/4；图形标最小 20 px，横版组合最小宽 120 px。
- 浅色背景使用单色版本（`#0a0c11`）。不拉伸、不旋转、不换色、不单独使用路线。
- 文字写法：**GeoVerse Labs**（V 大写，中间无空格）。不写 Geoverse / GEOVERSE / Geo Verse。

## 3. 色彩

### 核心色

| 名称 | Hex | 用途 |
|---|---|---|
| Ink 墨 | `#0a0c11` | 页面背景 |
| Panel 面板 | `#141823` | 卡片、按钮 |
| Line 分隔线 | `#232837` | 边框 |
| Text 正文 | `#e8eaf0` | 主文字 |
| Text 2 次级 | `#a4abbd` | 说明文字 |
| OpenLayers Blue | `#4f8cff` | OpenLayers 引擎、渐变起点 |
| Verse Violet | `#8b6cf6` | 主行动按钮、强调 |
| Violet Light | `#b39dff` | 链接、栏目编号 |
| MapLibre Green | `#2fbf8a` | MapLibre 引擎、渐变终点、成功态 |
| Signal Amber | `#fcd34d` | 坐标、终点、警示性高亮 |

### 产品识别色

| 产品 | Hex |
|---|---|
| GeoVerse SDK | `#8b6cf6` |
| GeoVerse Live | `#4f8cff` |
| GeoVerse Serve | `#fbbf24` |
| GeoVerse SAR | `#e879f9` |
| GeoVerse Line Finder | `#22d3ee` |
| mybatis-plus-geometry | `#34d399` |
| GeoVerse Skills | `#fb7185` |

产品色只用于**标签、图标、细线、图表强调**，不做大面积底色。

## 4. 字体

- 无衬线：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif`
- 等宽：`ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace`（代码、坐标、版本号、栏目编号）
- **网页不引用任何外部字体 CDN**（Google Fonts 在国内不稳定）。宣传片导出时可注入 Inter + Noto Sans SC（均为 OFL），见 [`tools/export-film.mjs`](tools/export-film.mjs) 的 `--font-css`。

## 5. 对外口径护栏

这些是**红线**——违反了会误导用户，也会损害信任。

| 产品 | 必须这样说 | 不能这样说 | 为什么 |
|---|---|---|---|
| GeoVerse SDK | 商业产品、闭源、早期访问 | "开源 SDK" | 闭源商业产品，源码不公开，以授权方式提供 |
| GeoVerse Live | 私有产品，可预约演示 / 私有化部署 | "免费注册""SaaS 已上线" | 目前以演示与私有化部署方式提供，没有公开注册入口 |
| GeoVerse SAR | MIT 开源、**技术预览**、未发布 npm | "生产可用""稳定版" | 仓库四级状态口径：published = 无，production-supported = 否 |
| GeoVerse Skills | BSL 1.1、源码可见 | "开源" | BSL 不是 OSI 认可的开源许可 |
| 性能数字 | 带日期、数据集、轮数与复现方法 | "快 38 倍"之类脱离条件的倍数 | 单轮、跨构建产物的比较会凭空造出结论 |
| 坐标偏移 | "通常几百米，随位置变化" | 一个固定值 | GCJ-02 是位置的非线性函数 |

可以放心使用的数字（均有公开出处）：

| 数字 | 含义 | 出处 |
|---|---|---|
| 2 | 渲染引擎（OpenLayers 10 / MapLibre GL 5） | SDK 总览 |
| 25 | `@geoverse/editor-core` 编辑命令 | SDK 模块地图 |
| 8 | SDK 包数 | SDK 总览 |
| 20+ | Live 绘制、改形与拓扑编辑工具 | Live 产品手册 |
| 425 | SAR 测试数，全部不依赖真实 LLM | SAR README |
| 135,417 | Line Finder 在线示例哥德堡 OSM 路网坐标数 | 在线示例 |
| 306 ms vs 11.6 s；0 vs 41 条非最短路 | Line Finder vs geojson-path-finder，2026-09-11，300 对 × 5 轮中位数 | `docs/BENCHMARK.md` |
| ≈ 2.05× | Line Finder 0.3.0 默认配置建图提速（相对 0.2.0） | `CHANGELOG.md` 0.3.0 |

## 6. 写作语气

- **先结论后证据。** ✓ "同一份 13.5 万坐标路网，300 次查询 0 条非最短路。" ✕ "我们经过大量优化，性能非常出色。"
- **具体动词。** ✓ "在数据出入边界做 WGS-84 ↔ GCJ-02 互转。" ✕ "智能处理坐标问题。"
- **承认边界。** ✓ "城市级以上路网、实时路况请用 OSRM / Valhalla。" ✕ "适用于任何寻路场景。"
- **中英混排**：中文与英文、数字之间加空格；产品名、代码、坐标系保持英文原样。
- **标点**：中文用全角标点，英文用半角；不用感叹号。

## 7. 截图与图片

- 优先使用**真实产品截图**；示意图必须标注"示意 / Illustrative"。
- 深色主题为主，宽 1600 px，WebP（质量 ≈ 82）。
- 只用公开数据（Natural Earth、OpenStreetMap 等），并保留署名；不出现真实客户数据、真实人名与账号。
- 截图放在使用它的页面目录下的 `assets/`（例如 `live/assets/`），跨页面共享的放 `assets/shots/`。

## 8. 站点结构

| 路径 | 页面 | 说明 |
|---|---|---|
| `/` | [组织主页](https://geoverselabs.github.io/.github/) | 工具链、产品、在线体验、坐标换算、工程方法、开源、动态、联系 |
| `/live/` | [GeoVerse Live 产品手册](https://geoverselabs.github.io/.github/live/) | 逐项功能截图 |
| `/film/` | [宣传片网页版](https://geoverselabs.github.io/.github/film/) | 可拖动、可切语言、可嵌入 |
| `/brand/` | [品牌资源](https://geoverselabs.github.io/.github/brand/) | 标志、配色、命名、标准文案、媒体素材 |
| `/404.html` | 404 | 引导回主页 |
| 外部 | [SDK Playground](https://geoverse-7yh.pages.dev/) · [Line Finder Playground](https://geoverselabs.github.io/geoverse-line-finder/) | 由各自仓库部署 |

共享样式与脚本：`assets/site.css`（色板 token、导航、按钮、页脚、中英切换）、`assets/site.js`（语言切换、看大图、宣传片弹窗）、`assets/coords.js`（坐标换算）。Live 产品手册保持自包含的内联样式，色板与 `site.css` 一致。
