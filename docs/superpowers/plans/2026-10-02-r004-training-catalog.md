# R004 — Physical Training Catalog Expansion

> **Goal:** expand SimpleWay Taijifu's physical-learning catalog without inventing Taijifu canon.

## Source rule

Only techniques, drills, mechanics, safety constraints and progression rules supported by existing Taijifu project sources may become executable content. When the source material does not establish a technique, R004 records it as pending rather than guessing.

## Current confirmed executable catalog

The R003 runtime currently contains:
- Base Fundamental
- Guarda Fundamental
- Deslocamento Fundamental
- Golpe Reto Fundamental (controlled, non-contact)

These remain the canonical executable baseline for this branch.

## Deliverables

### M1 — Catalog registry
Create a versioned registry separating:
- confirmed executable content;
- source-pending candidates;
- sessions that can be composed from confirmed content.

### M2 — Technique metadata
Extend technique metadata only where source-backed details exist: objective, checkpoints, safety and version.

### M3 — Drill/session composition
Add the next source-backed drills and sessions. Do not introduce invented names or mechanics.

### M4 — Training progression
Connect catalog entries to the existing Training Runtime without changing its public state contract.

### M5 — Evidence/progress
Ensure each new drill/session produces the same session/block provenance and remains visible in Progress.

### M6 — Tests
Add content contract tests, reference resolution tests and progression/evidence tests.

### M7 — Review/PR
Document exactly which content was added, what remains pending, and the verification boundary.

## Constraints

- GitHub + GPT remain sufficient to advance the implementation.
- Local execution, Actions, paid services and external tooling are optional.
- Physical content remains controlled and non-contact unless the existing canon explicitly establishes otherwise.
- Readiness gates remain authoritative.
- Mastery is evidence-backed; completing a drill does not automatically mean mastery.
