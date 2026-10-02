# Roadmap — M092–M120

## Sprint 14 — Canon Integration
- **M092** Canon release contract and pinned version
- **M093** Canon schema/types for Base, Faixa, Caminho and Núcleo
- **M094** Canon snapshot importer/adapter
- **M095** Canon integrity validation and failure modes
- **M096** Canon navigation/query API
- **M097** SW-to-canon mapping contract
- **M098** Canon integration tests and documentation

## Sprint 15 — Learning Engine
- **M099** Lesson domain model
- **M100** Technique, Drill and Practice models
- **M101** Assessment model and scoring evidence
- **M102** Prerequisite graph
- **M103** Mastery state engine
- **M104** TAI/JI/FU pedagogical views
- **M105** Lesson player contract and first end-to-end learning unit

## Sprint 16 — Learner Application
- **M106** Learner profile and onboarding
- **M107** Baseline integration with existing Training Engine
- **M108** Learner dashboard
- **M109** Taijifu progression/map view
- **M110** Training Session Player
- **M111** History, metrics and progress persistence
- **M112** Deterministic next-step recommendation engine

## Sprint 17 — Taijifu Experience
- **M113** Demonstration asset/Virtual Master contract
- **M114** Technique Pack specification
- **M115** Character/motion runtime integration foundation
- **M116** Faixa/achievement progression presentation
- **M117** Teacher Mode foundation
- **M118** Dojo Mode foundation
- **M119** Taijifu Masters interoperability contract

## V1 Release
- **M120** SIMPLEWAY TAIJIFU V1 vertical slice and release gate

### M120 acceptance journey
`onboarding → baseline → select/navigate path → learn → observe → practice → record → assess → progress → next step`

## Delivery rule
Continue using batches of at most seven milestones. Each milestone gets an issue and implementation evidence. Canon changes are never made silently inside SW; SW consumes a pinned release and stores product-specific mappings separately.