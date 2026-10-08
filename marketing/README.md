# marketing/ — 对外宣传素材

GeoVerse Labs 组织主页（GitHub Pages）配套的公开宣传素材。内部的宣传策略与指标放在私有知识库 `geoverse-kb` 的 `60-reference/promotion-plan.md`，不在这里。

| 文件 | 内容 |
|---|---|
| [BRAND.md](BRAND.md) | 品牌规范：标志、色彩、字体、**对外口径护栏**、写作语气、截图规范、站点结构 |
| [COPY.md](COPY.md) | 文案库：Slogan、四种长度的组织介绍、7 个产品的卖点文案、社区发帖 / Show HN / Twitter / Reddit 模板、电梯陈述、演讲摘要、邮件模板、发版模板、FAQ |
| [FILM-SCRIPT.md](FILM-SCRIPT.md) | 52 秒宣传片分镜表（画面 / 中英字幕 / 事实出处）、衍生剪辑建议、更新流程 |
| [tools/export-film.mjs](tools/export-film.mjs) | 把宣传片网页版逐帧导出为 1080p MP4 的脚本（Playwright + ffmpeg） |

## 素材清单

| 素材 | 路径 |
|---|---|
| 组织主页 | [`index.html`](../index.html) → <https://geoverselabs.github.io/.github/> |
| GeoVerse Live 产品手册 | [`live/index.html`](../live/index.html) → <https://geoverselabs.github.io/.github/live/> |
| 宣传片网页版 | [`film/index.html`](../film/index.html) → <https://geoverselabs.github.io/.github/film/> |
| 品牌资源页 | [`brand/index.html`](../brand/index.html) → <https://geoverselabs.github.io/.github/brand/> |
| 宣传片 MP4（中 / 英） | [`assets/film/geoverse-film-zh.mp4`](../assets/film/geoverse-film-zh.mp4) · [`geoverse-film-en.mp4`](../assets/film/geoverse-film-en.mp4) |
| 社媒短版（17 秒） | [`assets/film/teaser-zh.mp4`](../assets/film/teaser-zh.mp4) · [`teaser-en.mp4`](../assets/film/teaser-en.mp4) |
| Line Finder 动图 | [`assets/film/line-finder-teaser.gif`](../assets/film/line-finder-teaser.gif) |
| 海报 / 示意图 | [`assets/film/poster.webp`](../assets/film/poster.webp) · [`og-film.jpg`](../assets/film/og-film.jpg)（宣传片页分享图，1200×630） · [`still-engines.webp`](../assets/film/still-engines.webp) |
| 标志 | [`assets/logo.svg`](../assets/logo.svg) · [`logo-wordmark.svg`](../assets/logo-wordmark.svg) · [`logo-mono.svg`](../assets/logo-mono.svg) · [`logo-wordmark-mono.svg`](../assets/logo-wordmark-mono.svg) · [`banner.svg`](../assets/banner.svg) |
| 社交分享卡 | [`assets/og-card.png`](../assets/og-card.png)（1200×630，主页 / 品牌页）· [`live/assets/og-live.jpg`](../live/assets/og-live.jpg)（1200×630，Live 产品手册；由首图 `editor-thematic-maplibre.webp` 裁切，换首图时同步重做） |
| 产品截图 | [`live/assets/`](../live/assets/) · [`assets/shots/`](../assets/shots/) |

## 改动时的检查清单

1. 新数字能指回公开出处吗？新数字先补进私有知识库 `60-reference/brand-positioning.md` 第四节（出处、日期 / 版本、失效条件），再同步到 [BRAND.md §5](BRAND.md#5-对外口径护栏) 的数字表。
2. 状态与许可的措辞和护栏表一致吗？
3. 中英文两份都改了吗？（主页、品牌页与 Live 产品手册的文案成对写在 `.zh` / `.en` 元素里；图片 `alt`、`aria-label`、按语言变化的链接用 `data-alt-*` / `data-label-*` / `data-href-*`）
4. `profile/README.md` 与根目录 `README.md` 保持一致了吗？
5. 宣传片里的数字变了的话，按 [FILM-SCRIPT.md · 更新流程](FILM-SCRIPT.md#更新流程) 重新导出。
