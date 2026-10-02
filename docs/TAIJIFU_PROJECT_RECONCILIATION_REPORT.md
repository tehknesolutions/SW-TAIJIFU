# TAIJIFU Project Reconciliation Report

## Purpose
Reconcile the SimpleWay Taijifu training work with the wider TAIJIFU project instead of evolving SW-TAIJIFU as an isolated exercise repository.

## Sources reconciled
- historical TAIJIFU project conversations and decisions;
- current SW-TAIJIFU curriculum work;
- TAIJIFU-SITE repository structure;
- released `TAIJIFU-CANON-1.0` snapshot.

## Canon boundary
`TAIJIFU-CANON-1.0` is an immutable released snapshot. It contains 4 Bases, 10 Faixas, 32 Caminhos and 128 Núcleos. SW-TAIJIFU must consume/reference versioned canon data; it must not silently fork or edit canonical data.

## Product reconciliation
The ecosystem can be separated by responsibility:

- **TAIJIFU-SITE** — institutional/canonical discovery and public presentation.
- **SW-TAIJIFU** — learning, training, assessment and progression platform.
- **Taijifu Masters** — interactive/game expression and application of the system.

All three may share canonical identifiers and concepts while keeping product-specific runtime concerns separate.

## Existing SW asset
M001–M091 form a substantial Training Engine foundation: baseline, physical preparation, movement, striking, defense, shadowboxing, partner work, equipment, controlled sparring, sessions, progression, metrics and Level 1 evaluation.

These milestones should become structured executable learning/training objects rather than remain documentation-only forever.

## High-value additions
1. Canon Learning Engine.
2. Academy/lesson system.
3. TAI → JI → FU pedagogical state model.
4. Structured Training OS.
5. Prerequisite/mastery graph.
6. Virtual Master / demonstrator integration.
7. Versioned Technique/Practice Packs.
8. Student, Teacher and Dojo modes.
9. Shared progression semantics across educational and game experiences.

## Character and motion reconciliation
Historical Masters work established useful production rules that SW can reuse: runtime-ready assets instead of presentation boards; identity continuity; standardized pivot/scale; candidate → review → import → bench gates; and modular fighter architecture. SW should reuse those contracts for technique demonstrations instead of inventing a parallel animation pipeline.

## Architectural principle
Canon describes *what TAIJIFU is*. SW pedagogy describes *how a learner studies and practices it*. Training telemetry describes *what the learner did*. Game/runtime assets describe *how concepts are visualized or simulated*. These layers should reference each other by stable IDs rather than merge into one mutable data blob.

## Decision
Reframe the remaining V1 milestones around canon integration and a usable learning application. Preserve M001–M091 as the physical/training foundation and use M092–M120 to make that foundation part of the wider TAIJIFU canon ecosystem.