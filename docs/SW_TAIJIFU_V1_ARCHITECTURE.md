# SimpleWay Taijifu — V1 Architecture

## Mission
SimpleWay Taijifu is the executable education and training layer of TAIJIFU.

A learner should be able to move through:

`onboarding → baseline → map → lesson → demonstration → practice → record → assessment → progression`

## Layers

### 1. Canon Adapter
Read a pinned, validated TAIJIFU canon release and expose stable Base/Faixa/Caminho/Núcleo identifiers to the application. Canon data is read-only inside SW.

### 2. Learning Domain
Core entities:
- `Lesson`
- `Concept`
- `Technique`
- `Drill`
- `Practice`
- `Assessment`
- `Prerequisite`
- `MasteryState`

Recommended learning sequence:
`UNDERSTAND → OBSERVE → PREPARE → EXECUTE → PRACTICE → APPLY → REFLECT → ASSESS`.

### 3. TAI/JI/FU Pedagogy
Where applicable, a skill may expose three pedagogical views:
- `TAI`: structure, form, stability and preparation;
- `JI`: perception, adaptation, timing and transition;
- `FU`: execution, integration and manifestation.

This is a teaching lens, not a replacement for canonical source data.

### 4. Training Engine
Structured representation of M001–M091:
- physical baseline;
- mobility/strength/conditioning;
- stance and movement;
- striking and defense;
- shadowboxing;
- equipment and partner drills;
- controlled technical sparring;
- session/program planning;
- reassessment and graduation gates.

### 5. Progression Graph
Connect canon nodes and practical competencies through explicit prerequisites. Suggested practical states:
`LEARNING → PRACTICING → CONSISTENT → MASTERED_FOR_LEVEL`.

Progress is learner telemetry and must not mutate canon.

### 6. Experience Layer
Primary V1 surfaces:
- onboarding;
- learner dashboard;
- Taijifu map;
- lesson player;
- training session player;
- progress/history;
- assessment flow;
- profile/level view.

### 7. Demonstration Layer
Technique demonstrations can later use the shared Taijifu character/motion pipeline. Assets must be runtime-ready, versioned and validated for continuity, scale and presentation contracts.

### 8. Roles
- `STUDENT`: learns, trains and records progress.
- `TEACHER`: reviews learners and assigns learning/training units.
- `DOJO`: groups learners, curricula and evaluations.

Teacher/Dojo may begin as V1 foundations and expand after the learner loop is complete.

## Data ownership
- Canon release: external/versioned/read-only.
- SW lesson mappings: owned by SW and reference canon IDs.
- Training definitions: owned by SW.
- Learner records: runtime/user data.
- Character/motion assets: separate versioned production assets referenced by learning units.

## V1 completion contract
V1 is complete when a learner can enter the platform, establish a baseline, navigate a canon-linked path, complete at least one full lesson/practice/assessment loop, record progress and receive a deterministic next step without modifying canonical data.