# 宣传片分镜脚本 · Film script

**GeoVerse Labs · 52 秒 · 16:9 · 中英双字幕版**

- 网页互动版：<https://geoverselabs.github.io/.github/film/>（可拖动进度、按章节跳转、切换语言；`?embed=1` 隐藏控制条，适合展台循环；`?t=17` 从第 17 秒开始）
- 成片：[`assets/film/geoverse-film-zh.mp4`](../assets/film/geoverse-film-zh.mp4) · [`geoverse-film-en.mp4`](../assets/film/geoverse-film-en.mp4)（1920×1080，30 fps，H.264）
- 社媒短版（17.4 秒，场景 3 + 7 + 8）：[`teaser-zh.mp4`](../assets/film/teaser-zh.mp4) · [`teaser-en.mp4`](../assets/film/teaser-en.mp4)
- 动图（Line Finder 场景，720 px）：[`line-finder-teaser.gif`](../assets/film/line-finder-teaser.gif)
- 源文件：[`film/index.html`](../film/index.html)；重新导出：[`tools/export-film.mjs`](tools/export-film.mjs)

## 创作思路

**一条主线：从一个坐标开始，到一条在浏览器里算出来的路线结束。** 中间依次经过工具链的每一层——坐标系 → 渲染 → 编辑协作 → AI → 服务 → 计算，最后收拢成一张全景图和品牌落版。

- **不配旁白，只用字幕**：社媒默认静音播放；展台环境嘈杂。每屏一句主字幕（≤ 20 字 / ≤ 9 words）+ 一句副字幕。
- **每个画面都是"示意"，但每个数字都是真的**：555 m / 1378 m 是北京天安门附近按公开算法实时换算的偏移量；135,417 是 Line Finder 在线示例中哥德堡 OSM 路网的真实坐标数；425 个测试来自 SAR 仓库 README。
- **颜色即产品**：每个场景左上角的产品标签与主色一致（SDK 紫、Live 蓝、SAR 品红、Serve 琥珀、Line Finder 青），与主页、品牌资源页同一套色板。

## 分镜表

| # | 时间 | 产品标签 | 画面 | 主字幕（中 / EN） | 副字幕（中 / EN） | 事实出处 |
|---|---|---|---|---|---|---|
| 1 | 0:00–0:06 | — | 黑场中描出一个渐变地球，经线缓慢自转；北京位置亮起琥珀色光点并脉冲；坐标 `39.9087° N 116.3974° E` 逐字打出；镜头向光点推进放大。 | 每一张地图，都从一个坐标开始。<br>Every map starts with a coordinate. | — | — |
| 2 | 0:06–0:13 | GeoVerse SDK · 国内坐标系 | 倾斜的街道网格上出现白色 WGS-84 点；琥珀色 GCJ-02 点滑出 +555 m，品红 BD-09 点再滑出 +1378 m，虚线箭头相连；随后两点收回 WGS-84，绿色校验环扩散。 | 在中国，同一个点有三套坐标。→ GeoVerse 对外恒为 WGS-84，纠偏在引擎里完成。<br>In China, one place has three sets of coordinates. → GeoVerse speaks WGS-84. Correction happens inside the engine. | WGS-84 · GCJ-02 · BD-09——相差数百米，甚至上千米 → OpenLayers 在投影层纠偏，MapLibre 在数据出入边界纠偏 | 偏移量：`assets/coords.js` 公开算法实时计算；纠偏层次：KB `20-concepts/coordinate-systems-china` |
| 3 | 0:13–0:20 | GeoVerse SDK | 同一座抽象城市（河流、主干道、建筑块）左半 OpenLayers 蓝色风格、右半 MapLibre 绿色发光风格；分割线先扫到最右、再到最左、再回中间摆动；左下代码卡 `createMap({ engine: 'ol' })` / `'libre'` 随分割线高亮切换。 | 一套 API，两种渲染引擎。<br>One API. Two rendering engines. | 坐标恒为 WGS-84；引擎独有能力走 getEngine() 逃生舱 | KB `10-projects/geoverse-sdk/geoverse-sdk-overview`（三条对外承诺） |
| 4 | 0:20–0:27 | GeoVerse Live | 应用窗口：编辑者 A（紫）逐点画出六边形面并闭合填充；编辑者 B（绿）抓住一个顶点拖开；右侧版本历史依次滑入 v11 新建要素 / v12 移动顶点 / v13 三路合并 ✓；白色评论气泡"边界已对齐道路 · 已解决 ✓"。 | 专业编辑 · 版本历史 · 实时协作<br>Precise editing · Version history · Live collaboration | 多人同时改图，冲突自动检测、按字段三路合并 | 产品手册 §02、§05 |
| 5 | 0:27–0:34 | GeoVerse SAR | 左侧城市点图，右侧 AI 助手面板：用户输入"把人口最多的 5 个城市标成红色"；依次出现 ① 查询要素 ② 预览变更 dryRun ③ 等待确认；点击"批准并提交"后 5 个最大的点变红并脉冲；底部出现"审计日志 · 3 次调用已入账 / ↶ 一次撤销，整组回退"。 | AI 和人，走同一个漏斗。<br>AI goes through the same funnel as people. | 可预览、可审计、可撤销——提交由你决定 | SAR README（单一漏斗、dryRun、宏撤销）；产品手册 §05（AI 修改只落本地会话） |
| 6 | 0:34–0:40 | GeoVerse Serve | 左列数据源（PostGIS、MySQL 8、PMTiles、MBTiles、GeoJSON、GeoPackage）→ 中间琥珀色 `geoverse` 二进制方块 → 右列输出（MVT · XYZ、WMTS、TileJSON、OGC API – Features、MCP），粒子沿曲线流动；方块下方滚动请求日志（cache hit、304 ETag、MCP tools/call）。 | 一个二进制，把数据发布成标准服务。<br>One binary turns your data into standard services. | PostGIS · MySQL · PMTiles → MVT · WMTS · OGC API · MCP | Serve README |
| 7 | 0:40–0:46 | GeoVerse Line Finder | 左侧路网上 A* 搜索树逐步展开（青色），随后发光最短路径一笔画出；右侧大数字从 0 数到 135,417，标签"零依赖""A* · Dijkstra · ALT"；下方三层楼板叠出，路线在 F1 走一段后经电梯直上 F3。 | 在浏览器里，算出最短的那条路。<br>Find the shortest path — right in the browser. | 零依赖 TypeScript · 带权最短路 · 多楼层室内寻路 | Line Finder README、CHANGELOG 0.3.0、在线示例 |
| 8 | 0:46–0:52 | — | 五层工具链全景依次升起（应用 / 智能 / 前端 / 服务 / 数据，各产品色标签）；收拢后标志描线出现，"GeoVerse Labs"字标、Slogan、网址与渐变下划线落版。 | （落版）为中国坐标系而生的 Web 地图基础设施<br>Mapping infrastructure for the modern web, built for China's coordinate systems | geoverselabs.github.io/.github | — |

场景之间 0.7 秒交叉淡化；全片右上角常驻小号字标，底部 6 px 渐变进度条。

## 衍生剪辑建议

| 版本 | 时长 | 组成 | 用途 |
|---|---|---|---|
| 完整版 | 52 s | 全部 8 场景 | 官网、B 站、YouTube、演讲开场 |
| 社媒短版（已导出） | 17.4 s | 场景 3 + 7 + 8 | 视频号、X / Twitter、LinkedIn、朋友圈 |
| 产品单场景 | 6–7 s | 任一场景 + 落版 | 对应产品的发版帖、README 动图 |
| 竖版 9:16 | 15–20 s | 建议重排为上画面 / 下字幕，用网页版 `?t=` 逐场景截取后在剪辑软件里重新构图 | 抖音、视频号竖屏 |
| 展台循环 | 52 s 循环 | 网页版 `film/?embed=1` 全屏 | 线下活动大屏 |

> 配乐：成片不含音轨。如需配乐，请使用可商用授权的无人声电子 / 氛围音乐，节拍点建议落在 0:06、0:13、0:20、0:27、0:34、0:40、0:46（场景切换）。

## 更新流程

产品数字或功能变了，按下面的顺序更新，保证网页版与 MP4 一致：

1. 改 [`film/index.html`](../film/index.html) 中对应场景的文字或数字（每个场景是一个独立的 `sN.update(lt)` 函数，文案用 `txt(parent, attrs, 中文, English)` 成对写）；
2. 在浏览器里打开 `film/?t=<秒>` 检查该场景，中英各看一遍（右下 `EN / 中文` 按钮或按 <kbd>L</kbd>）；
3. 起一个静态服务后运行 `node marketing/tools/export-film.mjs --lang zh --out /tmp/film-zh`（英文同理），把生成的 MP4 覆盖到 `assets/film/`；
4. 用 ffmpeg 重新截海报：`ffmpeg -i /tmp/film-en/frames/01515.jpg -vf scale=1280:720 -c:v libwebp -quality 85 assets/film/poster.webp`；
5. 同步更新本文件的分镜表与"事实出处"列。
