# M109 — Taijifu progression map

## Principle
The map overlays learner progress on canonical navigation without pretending SW pedagogical edges are canonical relationships.

## Layers
### Canon layer
Read-only Base/Faixa/Caminho/Núcleo structure from the pinned release.

### Learning layer
Lessons/practices/assessments mapped to canon refs through M097.

### Progress layer
Learner mastery state, readiness and completed evidence.

### Dependency layer
SW prerequisite edges from M102, visually distinct from canon hierarchy.

## Node presentation
A mapped learning node may show:
- `LEARNING`;
- `PRACTICING`;
- `CONSISTENT`;
- `MASTERED_FOR_LEVEL`;
- `BLOCKED` as a presentation state with reason;
- `AVAILABLE` when prerequisites are met but work has not started.

## Navigation
`Faixa → Caminho → Núcleo → mapped learning units` is one supported traversal. Direct search/history may open a learning unit without changing canonical identity.

## Rule
No visual connection is allowed to imply a canon relationship unless that edge came from the canon adapter. Pedagogical prerequisite edges must be labeled/presented as SW learning relationships.