<p align="center">
  <a href="https://geoverselabs.github.io/.github/"><img src="https://raw.githubusercontent.com/GeoVerseLabs/.github/main/assets/banner.svg" alt="GeoVerse Labs — Mapping infrastructure for the modern web, built for China's coordinate systems" width="100%"></a>
</p>

<p align="center">
  <a href="https://geoverselabs.github.io/.github/"><b>Website</b></a> ·
  <a href="https://geoverselabs.github.io/.github/film/"><b>▶ Watch the 52-second film</b></a> ·
  <a href="https://geoverselabs.github.io/.github/live/">GeoVerse Live brochure</a> ·
  <a href="https://geoverse-7yh.pages.dev/">SDK playground</a> ·
  <a href="https://geoverselabs.github.io/geoverse-line-finder/">Line Finder playground</a> ·
  <a href="https://geoverselabs.github.io/.github/?lang=zh">中文</a>
</p>

GeoVerse Labs builds a composable toolchain for spatial applications — from geometry persistence
and tile serving to dual-engine rendering and editing, a collaborative editing platform and an
AI-native runtime. Every layer works on its own; together they take a spatial app from the database
to the browser, and hand it to AI.

## 🧭 Products

| | What it is | Status |
|---|---|---|
| **[GeoVerse SDK](https://geoverse-7yh.pages.dev/)** | One mapping API on **OpenLayers or MapLibre GL**. Chinese basemaps (GCJ-02 / BD-09) corrected inside the engine while your coordinates stay WGS-84; a framework-agnostic editing engine (25 commands, undo/redo, three-way-merge sync); official Vue and React bindings. | Commercial · early access · [playground ↗](https://geoverse-7yh.pages.dev/) |
| **[GeoVerse Live](https://geoverselabs.github.io/.github/live/)** | A collaborative geodata editing platform built on the SDK: switch engines per project, version history, thematic mapping, real-time co-editing and comments, an AI assistant that works on the current layer, and login-free sharing / embedding. | Private · [brochure ↗](https://geoverselabs.github.io/.github/live/) · demos on request |

[![GeoVerse Live — thematic map in the editor](https://raw.githubusercontent.com/GeoVerseLabs/.github/main/live/assets/editor-thematic-maplibre.webp)](https://geoverselabs.github.io/.github/live/)

## 📦 Open source & source-available

We publish the building blocks we think the ecosystem needs — open source or source-available — separately from the core SDK:

| Repo | What it is | License | Get it |
|---|---|---|---|
| [geoverse-line-finder](https://github.com/GeoVerseLabs/geoverse-line-finder) | Zero-dependency TypeScript routing on GeoJSON networks: A* / Dijkstra / ALT, snapping, multi-waypoint, **multi-level indoor routing**. [Playground ↗](https://geoverselabs.github.io/geoverse-line-finder/) | Apache-2.0 | `pnpm add geoverse-line-finder` |
| [geoverse-map-server](https://github.com/GeoVerseLabs/geoverse-map-server) | **GeoVerse Serve** — a single pure-Go binary that publishes PostGIS, MySQL, PMTiles, MBTiles, GeoJSON and GeoPackage as MVT, WMTS, OGC API – Features and MCP | MIT | `make build` |
| [geoverse-sar](https://github.com/GeoVerseLabs/geoverse-sar) | **GeoVerse SAR** — AI-native runtime for spatial apps: UI, AI tool calls, agents and MCP clients share one governed kernel (technical preview) | MIT | build from source (geo packages need GeoVerse SDK access) |
| [mybatis-plus-geometry](https://github.com/GeoVerseLabs/mybatis-plus-geometry) | Spring Boot starter bridging MyBatis Plus and JTS geometry types (MySQL / PostGIS) | Apache-2.0 | Maven Central `1.0.1` |
| [geoverse-skills](https://github.com/GeoVerseLabs/geoverse-skills) | Spatial skills for AI agents — deterministic region layouts for racks, bays and booths, with an MCP App | BSL 1.1 (source-available) | `@geoverse/layout-mcp-app` |

## 🧪 How we build

- **Contracts before implementations** — coordinates are always WGS-84 at the boundary; the editing core never sees a map library.
- **Gates, not conventions** — dependency direction is enforced by lint gates, cross-entry parity by tests.
- **Four-tier status** — *implemented → verified-in-clean-CI → published → production-supported*. We say which tier, not "done".
- **Reproducible numbers** — benchmarks report medians and ranges over multiple rounds, with pinned competitors and a repro command.

## 📬 Contact

- Licensing / early access / demos (GeoVerse SDK & GeoVerse Live): libra.liuyb@gmail.com
- Issues & contributions: open an issue on the relevant repo above
- Press, talks and logos: [brand kit & boilerplate copy](https://geoverselabs.github.io/.github/brand/)
