# GeoVerse Labs 文案库 · Copy deck

🌐 中文 / English side by side · 配套页面：[品牌资源](https://geoverselabs.github.io/.github/brand/) · [品牌规范](BRAND.md) · [宣传片脚本](FILM-SCRIPT.md)

> **使用前先读三条规矩**
>
> 1. **数字必须有出处。** 本文所有数字都标了来源；新写的数字也要能指回公开仓库、npm / Maven 页面、产品手册，或（仅限闭源 SDK）内部 SDK 文档。找不到出处的数字不发。
> 2. **状态与许可按原样写。** SDK 是商业闭源，Live 是私有产品，SAR 是技术预览，Skills 是 BSL 源码可见——不要写成"开源""已上线""生产可用"。详见 [BRAND.md §5](BRAND.md#5-对外口径护栏)。
> 3. **先写结论，再给证据。** 读者多半只看第一句。

---

## 1. 品牌主张 · Brand line

| 用途 | 中文 | English |
|---|---|---|
| **主 Slogan** | 为中国坐标系而生的 Web 地图基础设施。 | Mapping infrastructure for the modern web, built for China's coordinate systems. |
| 工具链 | 从数据库到浏览器，再交给 AI。 | From the database to the browser — and on to AI. |
| 双引擎 | 一套 API，两种引擎。 | One API. Two engines. |
| 坐标系 | 坐标恒为 WGS-84，偏移交给引擎。 | Stay in WGS-84. Let the engine handle the offset. |
| 工程方法 | 可证伪的地图工程。 | Mapping engineering you can falsify. |
| 寻路 | 在浏览器里，算出最短的那条路。 | Find the shortest path — right in the browser. |

## 2. 组织介绍 · Boilerplate

### 一句话 · One line

- 中：GeoVerse Labs 为 Web 地图与空间应用打造一条可组合的工具链，原生支持国内坐标系。
- EN: GeoVerse Labs builds a composable toolchain for web mapping and spatial apps, with first-class support for China's coordinate systems.

### 短版（≈60 字）· Short (≈50 words)

- 中：GeoVerse Labs 打造空间应用工具链：双引擎地图 SDK、协作式地理数据编辑平台、Go 瓦片服务、AI 原生空间运行时与 GeoJSON 寻路库，原生支持 GCJ-02 / BD-09 等国内坐标系。
- EN: GeoVerse Labs builds a spatial application toolchain: a dual-engine mapping SDK, a collaborative geodata editing platform, a Go tile server, an AI-native spatial runtime and a GeoJSON routing library — with first-class support for China's GCJ-02 and BD-09 coordinate systems.

### 中版（≈180 字）· Medium (≈120 words)

**中文**

GeoVerse Labs 专注 Web 地图与空间应用的开发者工具。核心产品 GeoVerse SDK 让同一套地图 API 运行在 OpenLayers 或 MapLibre GL 上，内置国内坐标系纠偏与框架无关的要素编辑引擎；基于它构建的 GeoVerse Live 是支持实时协作、版本历史、专题制图与 AI 助手的地理数据编辑平台。

我们同时开源了生态需要的基础构件：GeoVerse Serve（单二进制 Go 瓦片与 OGC 服务）、GeoVerse SAR（AI 原生空间应用运行时）、GeoVerse Line Finder（零依赖 GeoJSON 寻路库）与 mybatis-plus-geometry（Java 几何持久化）。

**English**

GeoVerse Labs makes developer tools for web mapping and spatial applications. Our core product, GeoVerse SDK, runs one mapping API on either OpenLayers or MapLibre GL, with built-in correction for Chinese coordinate systems and a framework-agnostic feature-editing engine. GeoVerse Live, built on the SDK, is a geodata editing platform with real-time collaboration, version history, thematic mapping and an AI assistant.

We also open-source the building blocks the ecosystem needs: GeoVerse Serve (a single-binary Go tile and OGC server), GeoVerse SAR (an AI-native spatial application runtime), GeoVerse Line Finder (a zero-dependency GeoJSON routing library) and mybatis-plus-geometry (Java geometry persistence).

### 长版（≈320 字）· Long (≈220 words)

见 [品牌资源页 · 标准文案](https://geoverselabs.github.io/.github/brand/#copy)（可一键复制，与本节保持同一份文本）。

## 3. 产品文案 · Products

每个产品给出：一句话 / 三个卖点 / 50 字介绍 / 适合谁 / 行动号召。

### 3.1 GeoVerse SDK

| | 中文 | English |
|---|---|---|
| 一句话 | 一套地图 API，跑在 OpenLayers 或 MapLibre GL 任一引擎上。 | One mapping API that runs on either OpenLayers or MapLibre GL. |
| 卖点 1 | **双引擎门面**：`createMap({ engine })`，子路径锁定引擎可摇掉另一个；引擎独有能力走 `getEngine()`。 | **Dual-engine facade**: `createMap({ engine })`; lock an engine by subpath to tree-shake the other; engine-only features via `getEngine()`. |
| 卖点 2 | **国内坐标系就地纠偏**：高德、百度等底图在引擎内纠偏，对外坐标恒为 WGS-84。 | **Chinese basemaps corrected in place** — your coordinates always stay WGS-84. |
| 卖点 3 | **框架无关的编辑引擎**：25 个编辑命令、撤销重做与宏撤销、拓扑工具、三路合并同步；Vue / React 官方绑定。 | **Framework-agnostic editing engine**: 25 commands, undo/redo and macro undo, topology tools, three-way-merge sync; official Vue / React bindings. |
| 50 字 | GeoVerse SDK 把 OpenLayers 与 MapLibre GL 统一在一套 API 之下，内置 GCJ-02 / BD-09 纠偏与不依赖地图库的要素编辑引擎，适合需要国内底图、专业编辑或双引擎灵活切换的 Web 地图产品。 | GeoVerse SDK unifies OpenLayers and MapLibre GL behind one API, with built-in GCJ-02 / BD-09 correction and a map-library-free editing engine — for web map products that need Chinese basemaps, professional editing or the freedom to switch engines. |
| 适合谁 | 做 GIS / 测绘 / 规划 / 物流 / 园区类 Web 产品的前端团队 | Front-end teams building GIS, surveying, planning, logistics or campus apps |
| CTA | [在线 Playground](https://geoverse-7yh.pages.dev/) · 申请早期访问 / 授权 | [Playground](https://geoverse-7yh.pages.dev/) · Request early access / licensing |
| 出处 | 内部 SDK 文档（8 个包、25 个命令） | |

### 3.2 GeoVerse Live

| | 中文 | English |
|---|---|---|
| 一句话 | 基于 GeoVerse SDK 的协作式地理数据编辑平台。 | A collaborative geodata editing platform built on GeoVerse SDK. |
| 卖点 1 | **渲染引擎是项目的属性**：OpenLayers ↔ MapLibre 一键切换，图层、样式、专题规则与协作数据通用。 | **The engine is a project property** — switch OpenLayers ↔ MapLibre; layers, styles, thematic rules and collaboration data carry over. |
| 卖点 2 | **专业编辑 + 版本历史**：20+ 工具，乐观锁冲突检测，字段级三路合并，逐版本对比与回滚。 | **Professional editing with history**: 20+ tools, optimistic-lock conflict detection, field-level three-way merge, per-version diff and rollback. |
| 卖点 3 | **协作、AI 与开放发布**：在线状态与评论实时同步；AI 助手的修改只落本地会话、可撤销；免登录分享与嵌入，可发布到 GeoVerse Serve。 | **Collaboration, AI and open sharing**: live presence and comments; AI edits stay local and undoable until you commit; login-free sharing and embeds, publishing to GeoVerse Serve. |
| 50 字 | GeoVerse Live 把要素编辑、版本管理、专题制图、多人协作、AI 助手和对外发布放进同一个浏览器工作台，支持多租户与私有化部署。 | GeoVerse Live puts feature editing, versioning, thematic mapping, real-time collaboration, an AI assistant and publishing into one browser workspace, with multi-tenancy and private deployment. |
| 适合谁 | 规划院、测绘单位、园区与城市运营团队、需要私有化 GIS 编辑平台的企业 | Planning and surveying teams, campus and city operators, enterprises needing a self-hosted GIS editor |
| CTA | [产品手册](https://geoverselabs.github.io/.github/live/) · 预约演示 | [Brochure](https://geoverselabs.github.io/.github/live/) · Book a demo |
| 出处 | 产品手册 `live/index.html`；KB `10-projects/live-platform/*` | |

### 3.3 GeoVerse Serve

| | 中文 | English |
|---|---|---|
| 一句话 | 轻量地理数据分发服务——单二进制、纯 Go、零外部运行时依赖。 | A lightweight geodata server — one pure-Go binary, zero external runtime dependencies. |
| 卖点 1 | **多源进，标准出**：PostGIS（`ST_AsMVT` 下推）、MySQL 8 / MariaDB、PMTiles、MBTiles、GeoJSON、GeoPackage → MVT、WMTS、TileJSON、OGC API – Features。 | **Many sources in, standards out**: PostGIS (`ST_AsMVT` push-down), MySQL 8 / MariaDB, PMTiles, MBTiles, GeoJSON, GeoPackage → MVT, WMTS, TileJSON, OGC API – Features. |
| 卖点 2 | **好运维**：数据源控制台（连接测试、热加载、凭据不回显）、两级缓存、ETag / 304、`-doctor` 部署诊断。 | **Easy to run**: data-source console (connection tests, hot reload, no credential echo), two-tier cache, ETag / 304, `-doctor` checks. |
| 卖点 3 | **给 AI 用**：可选 MCP 端点；算法插件（最短路径、等时圈、路径匹配、DBSCAN）HTTP 与 MCP 双入口。 | **Built for AI too**: optional MCP endpoint; algorithm plugins (shortest path, isochrones, map matching, DBSCAN) over HTTP and MCP. |
| CTA | [GitHub](https://github.com/GeoVerseLabs/geoverse-map-server) · MIT | [GitHub](https://github.com/GeoVerseLabs/geoverse-map-server) · MIT |
| 出处 | 仓库 README（`geoverse-map-server@6e0b1a2`） | |

### 3.4 GeoVerse SAR

| | 中文 | English |
|---|---|---|
| 一句话 | AI-native 空间应用运行时：UI、AI 工具调用、自治 Agent、外部 MCP 客户端，走同一个内核。 | An AI-native runtime for spatial apps: UI, AI tool calls, autonomous agents and MCP clients share one kernel. |
| 卖点 1 | **能力即工具**：能力描述符就是 Claude / MCP 工具定义，一份投影喂给命令面板、AI 工具目录与 `tools/list`。 | **Capabilities are tools**: a capability descriptor *is* a Claude / MCP tool definition — one projection feeds the palette, the AI catalogue and `tools/list`. |
| 卖点 2 | **治理长在内核**：单一漏斗 `dispatcher.invoke`，权限、校验、审计、事务日志回放。 | **Governance in the kernel**: one funnel, `dispatcher.invoke` — permissions, validation, audit, journal replay. |
| 卖点 3 | **可撤销、可预览**：领域状态撤销是一等公民，`dryRun` 先看 diff 再审批；425 个测试无需真实 LLM。 | **Undoable and previewable**: domain-state undo is first class, `dryRun` shows the diff before approval; 425 tests need no real LLM. |
| 必带说明 | 技术预览，未发布 npm，不建议生产使用。 | Technical preview; not on npm; not for production use. |
| CTA | [GitHub](https://github.com/GeoVerseLabs/geoverse-sar) · MIT | [GitHub](https://github.com/GeoVerseLabs/geoverse-sar) · MIT |
| 出处 | 仓库 README（`geoverse-sar@ee235f2`，四级状态口径） | |

### 3.5 GeoVerse Line Finder

| | 中文 | English |
|---|---|---|
| 一句话 | 零依赖 TypeScript 库：在 GeoJSON 线网络上求带权最短路。 | A zero-dependency TypeScript library for weighted shortest paths on GeoJSON line networks. |
| 卖点 1 | **算得对**：同一份 13.5 万坐标路网 300 次查询，0 条非最短路；geojson-path-finder 返回了 41 条。 | **Correct**: 300 queries on the same 135k-coordinate network, 0 non-shortest routes; geojson-path-finder returned 41. |
| 卖点 2 | **算得快**：上述基准 306 ms vs 11.6 s；0.3.0 默认配置建图再快约 2 倍。 | **Fast**: 306 ms vs 11.6 s on that benchmark; 0.3.0 builds graphs ~2× faster by default. |
| 卖点 3 | **能落地**：线段吸附与全程择优、多途经点与失败策略、多楼层室内寻路、按节点编号建拓扑，浏览器 / Worker / Node 通用。 | **Practical**: segment snapping with cost-optimal selection, multi-waypoint failure policies, multi-level indoor routing, node-id topology — browser, Worker or Node. |
| 50 字 | GeoVerse Line Finder 是零依赖的 GeoJSON 路网寻路库，A*（可选 ALT 加速）/ Dijkstra 可切换，起终点可落在线段任意位置，支持多途经点与多楼层室内路线，Apache-2.0 开源。 | GeoVerse Line Finder is a zero-dependency GeoJSON routing library with switchable A* (optionally ALT-accelerated) and Dijkstra engines, snapping anywhere on a segment, multi-waypoint and multi-level indoor routes. Apache-2.0. |
| CTA | [在线示例](https://geoverselabs.github.io/geoverse-line-finder/) · `pnpm add geoverse-line-finder` | [Playground](https://geoverselabs.github.io/geoverse-line-finder/) · `pnpm add geoverse-line-finder` |
| 出处 | 基准：2026-09-11，GPF large-network.json，300 对 × 5 轮中位数，仓库 `docs/BENCHMARK.md`；0.3.0 提速：`CHANGELOG.md`（`geoverse-line-finder@fe5439c`） | |

### 3.6 mybatis-plus-geometry

| | 中文 | English |
|---|---|---|
| 一句话 | Spring Boot starter，打通 MyBatis Plus 与 JTS 几何类型。 | A Spring Boot starter bridging MyBatis Plus and JTS geometry types. |
| 卖点 | MySQL 与 PostGIS 自动识别 · 8 类几何注解 · Jackson GeoJSON 开箱即用 · Maven Central 1.0.1 | Auto-detects MySQL / PostGIS · 8 geometry annotations · Jackson GeoJSON out of the box · Maven Central 1.0.1 |
| CTA | [GitHub](https://github.com/GeoVerseLabs/mybatis-plus-geometry) · Apache-2.0 | |

### 3.7 GeoVerse Skills

| | 中文 | English |
|---|---|---|
| 一句话 | 面向 AI Agent 的空间技能：把设施网格与摆放规则变成确定性、可校验的布局。 | Spatial skills for AI agents: turn facility grids and placement rules into deterministic, validated layouts. |
| 卖点 | `generate-region-layout` 技能 · `@geoverse/layout-engine` 0.7 · `@geoverse/layout-mcp-app` 0.5（交互地图卡片 + 离线 HTML） | `generate-region-layout` skill · `@geoverse/layout-engine` 0.7 · `@geoverse/layout-mcp-app` 0.5 (interactive map card + offline HTML) |
| 必带说明 | BSL 1.1 源码可见，不是 OSI 开源许可。 | BSL 1.1 source-available — not an OSI open-source licence. |

## 4. 社区与社媒模板 · Social & community

> 模板里的 `{}` 是要替换的占位符。发布前对照 [§1 规矩](#geoverse-labs-文案库--copy-deck) 再核一遍数字。

### 4.1 技术长文标题候选（知乎 / 掘金 / 公众号）

1. 为什么 GCJ-02 不是一种"投影"：一次讲清国内坐标系偏移与两种纠偏路线
2. 一套 API 跑两个地图引擎：GeoVerse SDK 的门面、逃生舱与依赖门禁
3. geojson-path-finder 为什么会静默返回非最短路？我们换了一种建图方式
4. 在浏览器里给 13.5 万坐标的路网建图寻路：Line Finder 的 CSR、四叉堆与 ALT
5. 让 AI 改地图但不失控：SAR 的单一漏斗、dryRun 与宏撤销
6. 单轮基准测试会凭空造出结论——我们的多轮基准纪律

### 4.2 发布帖（V2EX / 掘金 / SegmentFault）· Line Finder 0.3.0

```text
【开源】geoverse-line-finder 0.3.0：零依赖的 GeoJSON 路网寻路库，支持多楼层室内寻路

起因：我们在项目里用 geojson-path-finder，发现它会静默返回"合法但不是最短"的路线。
于是写了 geoverse-line-finder（TypeScript，零运行时依赖，Apache-2.0）：

- 同一份 13.5 万坐标路网、300 次查询：306 ms，0 条非最短路（对照组 11.6 s、41 条非最短）
- A*（可选 ALT 地标加速）/ Dijkstra / 双向 Dijkstra 可切换，也能注册自己的引擎
- 起终点吸附到线段任意位置；候选约束 + 全程择优；多途经点与失败策略
- 0.3.0 新增：多楼层（电梯 / 楼梯 / 扶梯）、按节点编号建拓扑（OSM / OpenSidewalks）、建图约 2 倍提速

在线示例（浏览器里直接给哥德堡 OSM 路网建图）：https://geoverselabs.github.io/geoverse-line-finder/
GitHub：https://github.com/GeoVerseLabs/geoverse-line-finder
npm：pnpm add geoverse-line-finder

基准方法与复现命令在仓库 docs/BENCHMARK.md，欢迎拍砖。
```

### 4.3 Show HN（English）

- Title: `Show HN: Line Finder – zero-dependency shortest paths on GeoJSON, with indoor floors`
- First comment:

```text
We were using geojson-path-finder and found it silently returned valid-but-not-shortest routes
(41 of 300 on its own large test network). Line Finder is our replacement: TypeScript, zero
runtime deps, Apache-2.0.

On that same 135k-coordinate network, 300 queries take 306 ms with 0 non-shortest routes
(median of 5 rounds; method and repro in docs/BENCHMARK.md). It snaps endpoints anywhere on a
segment, supports multi-waypoint routes with failure policies, and 0.3.0 adds multi-level indoor
routing (elevators/stairs/escalators) and node-id topology for OSM/OpenSidewalks data.

Playground (builds the Gothenburg OSM graph in your browser):
https://geoverselabs.github.io/geoverse-line-finder/
```

### 4.4 X / Twitter thread（English）

1. `Shortest paths on GeoJSON should be… actually shortest. geoverse-line-finder 0.3.0 is out: zero deps, A*/Dijkstra/ALT, snapping anywhere on a segment, and now multi-level indoor routing. 🧵`
2. `135k-coordinate OSM network, 300 queries: 306 ms, 0 non-shortest routes. (geojson-path-finder: 11.6 s, 41 non-shortest.) Method + repro: docs/BENCHMARK.md`
3. `New in 0.3.0: elevators, stairs and escalators as vertical connectors; a level-aware A* bound; node-id topology for OSM & OpenSidewalks; ~2× faster graph builds.`
4. `Try it in the browser → https://geoverselabs.github.io/geoverse-line-finder/ · npm i geoverse-line-finder · Apache-2.0`

### 4.5 Reddit r/gis · GeoVerse Serve（English）

```text
Title: GeoVerse Serve – a single pure-Go binary that serves PostGIS/MySQL/PMTiles as MVT, WMTS, OGC API Features (and MCP)

We needed something lighter than a full GIS server for publishing vector tiles from mixed sources.
Serve is one static binary (no CGO): PostGIS with ST_AsMVT push-down, MySQL 8/MariaDB (bbox push-down,
MVT encoded in Go), PMTiles v3, MBTiles, GeoJSON and GeoPackage in; MVT (XYZ + WMTS), TileJSON 3.0
and OGC API – Features out. There's a data-source web console with hot reload, two-tier caching,
ETag/304, and an optional MCP endpoint so LLM agents can discover layers and query features.
MIT licensed: https://github.com/GeoVerseLabs/geoverse-map-server
```

### 4.6 视频平台描述（B 站 / 视频号 / YouTube）

- 标题：52 秒看懂 GeoVerse Labs：从一个坐标，到一条在浏览器里算出来的路线
- 简介：国内坐标系、双引擎地图 SDK、协作编辑平台、AI 空间运行时、瓦片服务与浏览器内寻路。官网 https://geoverselabs.github.io/.github/ · 网页互动版 https://geoverselabs.github.io/.github/film/
- Title (EN): GeoVerse Labs in 52 seconds — from a single coordinate to a route computed in your browser

## 5. 活动与展台 · Events

### 5.1 30 秒电梯陈述 · Elevator pitch

- 中：做国内地图的团队都遇到过两件事——底图偏了几百米，以及想换渲染引擎得重写一遍。GeoVerse SDK 用一套 API 同时跑 OpenLayers 和 MapLibre，纠偏在引擎里完成，坐标永远是 WGS-84；GeoVerse Live 在此之上提供多人协作编辑、版本历史和 AI 助手。底层的瓦片服务、AI 运行时和寻路库我们都开源了，可以先从它们用起。
- EN: Teams building maps in China hit two walls: basemaps that are hundreds of metres off, and a rewrite every time they want to switch rendering engines. GeoVerse SDK runs one API on both OpenLayers and MapLibre, corrects the offset inside the engine and keeps your coordinates in WGS-84. GeoVerse Live adds collaborative editing, version history and an AI assistant on top. The tile server, AI runtime and routing library underneath are open source — start there.

### 5.2 演讲题目与摘要 · Talk proposals

1. **一套 API，两个地图引擎：双引擎门面的抽象边界** — 什么该统一、什么该留给逃生舱；GCJ-02 在 OpenLayers 投影层与 MapLibre 数据边界的两种纠偏；如何用 ESLint 门禁守住"编辑内核不认识地图库"。（30 min，前端 / GIS 会场）
2. **Shortest paths you can trust** — why a popular GeoJSON router returns non-shortest routes, how CSR graphs, quaternary heaps and admissible heuristics fix it, and how we benchmark without fooling ourselves. (25 min, JS / FOSS4G)
3. **让 AI 安全地改业务数据** — 能力即工具、单一漏斗、dryRun 审批与宏撤销：SAR 在协作地图编辑里的实践。（30 min，AI 应用会场）

### 5.3 展台一页纸 · Booth one-pager

- 标题：为中国坐标系而生的 Web 地图基础设施
- 三栏：**看得见**（双引擎 + 国内底图纠偏）· **改得动**（协作编辑 + 版本历史 + AI 助手）· **发得出**（瓦片 / OGC / MCP 服务）
- 底部二维码：官网、Live 产品手册、Line Finder 在线示例
- 循环播放：宣传片网页版全屏（`film/?embed=1`），或 MP4

## 6. 邮件模板 · Email templates

### 6.1 回复演示预约

```text
主题：GeoVerse Live 演示安排

您好 {称呼}，

感谢关注 GeoVerse Live。为了让演示更贴近您的场景，想先了解三件事：
1. 主要数据类型与规模（例如：地块面 / 道路线 / 设施点，约多少要素）；
2. 使用的底图与坐标系（高德 / 天地图 / 百度 / 自有切片）；
3. 部署环境（公有云、私有云或内网）。

我们可以安排 30–45 分钟的线上演示，涵盖双引擎切换、协作编辑与版本历史、专题制图、AI 助手和对外发布。
您方便的时间是？

GeoVerse Labs
https://geoverselabs.github.io/.github/live/
```

### 6.2 Reply to an SDK early-access request (English)

```text
Subject: GeoVerse SDK early access

Hi {name},

Thanks for your interest in GeoVerse SDK. To set up early access we'd love to know:
1. Which engine you use today (OpenLayers, MapLibre, both, or neither yet);
2. Whether you need Chinese basemaps (GCJ-02 / BD-09) and/or feature editing;
3. Your framework (Vue, React, other) and target timeline.

In the meantime the playground shows the facade, basemap correction and editing tools:
https://geoverse-7yh.pages.dev/

Best,
GeoVerse Labs
```

## 7. 发版公告模板 · Release note

```markdown
## {产品} {版本} — {一句话结论}

**亮点**
- {用户能感知到的变化 1}（{数字 + 出处}）
- {变化 2}
- {变化 3}

**兼容性**：{默认配置下输出是否不变 / 需要迁移的点，链接 UPGRADING}

**试一试**：{在线示例链接} · `{安装命令}`

完整变更：{CHANGELOG 链接}
```

## 8. 常见问题 · FAQ

| 问题 | 中文回答 | English |
|---|---|---|
| SDK 开源吗？ | 不开源。GeoVerse SDK 是商业产品，目前以早期访问方式提供；配套的 Serve、SAR、Line Finder、mybatis-plus-geometry 是开源的。 | No. GeoVerse SDK is commercial and in early access; Serve, SAR, Line Finder and mybatis-plus-geometry are open source. |
| 为什么要两个引擎？ | OpenLayers 擅长自定义投影与国内栅格底图，MapLibre 擅长矢量瓦片与 WebGL 渲染。很多项目两种都需要，或需要日后切换。 | OpenLayers excels at custom projections and Chinese raster basemaps; MapLibre at vector tiles and WebGL. Many projects need both, or need to switch later. |
| GCJ-02 是什么？ | 国内地图依法使用的加密偏移坐标，与 WGS-84 通常相差几百米；它是基准面偏移而不是投影。 | The legally mandated offset coordinate system used by Chinese maps — typically a few hundred metres from WGS-84. It's a datum shift, not a projection. |
| Live 能私有化部署吗？ | 可以，全栈 Docker Compose 编排，适配内网。 | Yes — the full stack ships as Docker Compose and works on private networks. |
| SAR 能上生产吗？ | 目前是技术预览，包未发布 npm，不建议生产使用。 | Not yet — it's a technical preview, not on npm. |
| Skills 是开源的吗？ | BSL 1.1 源码可见，不是 OSI 意义上的开源。 | It's BSL 1.1 source-available, not OSI open source. |
