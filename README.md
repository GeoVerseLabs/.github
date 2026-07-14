# GeoVerse Labs

**Mapping infrastructure for the modern web, built for China's coordinate systems.**

GeoVerse Labs builds developer tooling for geospatial applications — from low-level geometry
integration to a full-featured mapping SDK and an AI-native runtime for spatial apps.

## 🧭 Core Product

**[GeoVerse SDK](https://geoverse-7yh.pages.dev/)** — a dual-engine (OpenLayers / MapLibre)
mapping toolkit with first-class support for GCJ-02 / BD-09 / Tianditu, a framework-agnostic
feature-editing engine, and official Vue / React bindings.

> GeoVerse SDK is currently closed-source and under active development as a commercial
> product. [Try the playground →](https://geoverse-7yh.pages.dev/) or reach out below for
> early access / licensing.

## 📦 Open Source

We open-source the building blocks we think the ecosystem needs, independent of the core SDK:

| Repo | What it is | Stack | License |
|---|---|---|---|
| [mybatis-plus-geometry](https://github.com/GeoVerseLabs/mybatis-plus-geometry) | Spring Boot starter bridging MyBatis Plus and JTS geometry types, with zero-config auto-setup, GeoJSON (de)serialization, and a SQL interceptor for spatial columns | Java · Spring Boot 2.7+/3.x · MySQL/MariaDB/PostGIS | Apache-2.0 |
| [geoverse-sar](https://github.com/GeoVerseLabs/geoverse-sar) | AI-native runtime for spatial applications, built on hexagonal architecture — a single capability/dispatch layer shared by UI, AI copilot, autonomous agents, and MCP clients | TypeScript · Node ≥20 · pnpm ≥10 | MIT |

Details on each project — features, installation, and usage — live in their own repo READMEs.

## 🤝 Contributing

Issues and PRs are welcome on any repo above. Org-wide contribution guidelines, the code of
conduct, and our security policy live in this repo: [CONTRIBUTING.md](CONTRIBUTING.md) ·
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) · [SECURITY.md](SECURITY.md)

This repo (`.github`) also holds org-wide GitHub configuration: the org profile
([`profile/README.md`](profile/README.md)), default issue/PR templates, and community health
files inherited by any GeoVerseLabs repo that doesn't define its own.

## 📬 Contact

- Licensing / early access to GeoVerse SDK: libra.liuyb@gmail.com
- Issues & contributions: open an issue on the relevant repo above
