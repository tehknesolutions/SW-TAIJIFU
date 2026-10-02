# M120 — SIMPLEWAY TAIJIFU V1

## Status
M120 closes the architecture/curriculum roadmap M001–M120 and defines the gate for a real V1 product release.

**Important:** completion of milestone specifications/contracts is not the same as a deployed production application. V1 may be called runtime-ready only after the executable acceptance journey below is implemented and verified.

## Product definition
SimpleWay Taijifu is the learning and training application of the wider TAIJIFU ecosystem.

- TAIJIFU canon defines canonical structure and identity.
- SW defines pedagogy, training, assessments and learner progression.
- learner history/evidence belongs to the learner application layer.
- character/motion assets demonstrate content but do not define canon or mastery.
- Taijifu Masters may interoperate through stable contracts without owning SW progression.

## V1 vertical slice
The executable learner journey is:

`ONBOARD → BASELINE → MAP → LEARN → OBSERVE → PREPARE → EXECUTE → PRACTICE → APPLY → REFLECT → ASSESS → MASTERY → PROGRESS → NEXT_STEP`

### 1. ONBOARD
Create learner profile, goals, availability/context and active pinned canon release.

### 2. BASELINE
Run the applicable baseline/readiness protocol and produce `READY`, `MODIFY` or `PAUSE_AND_REVIEW`.

### 3. MAP
Navigate the pinned canon through SW mappings. Canon hierarchy and SW prerequisite edges remain visually/semantically distinct.

### 4. LEARN
Open the first eligible lesson and explain objective, canon context and prerequisites.

### 5. OBSERVE
Use approved Virtual Master/demonstration assets when available, with textual checkpoints as fallback.

### 6. PREPARE / EXECUTE / PRACTICE / APPLY
Resolve structured Technique/Drill/Practice definitions, enforce readiness/safety gates and execute through Lesson/Training Session Players.

### 7. REFLECT
Capture the learner's relevant reflection and perceived execution data without treating self-report alone as proof of technical mastery where stronger evidence is required.

### 8. ASSESS
Create an assessment attempt with criterion-level evidence and safety-critical gates.

### 9. MASTERY
Run the deterministic Mastery Engine and persist decision + evidence IDs.

### 10. PROGRESS
Update learner history/dashboard/map overlays without mutating canon.

### 11. NEXT_STEP
Return one deterministic, explainable eligible action from the next-step engine.

## Reference vertical unit
The first V1 executable unit is **Fundamental Stance**, previously defined in M105. It is intentionally foundational and can prove the entire product loop without requiring advanced contact practice.

## Release acceptance gates

### A. Canon
- pinned supported canon release loads through the adapter;
- integrity validation passes;
- canonical IDs/relationships remain read-only;
- broken/unsupported canon fails explicitly.

### B. Learning Engine
- Lesson, Technique, Drill/Practice and Assessment definitions resolve;
- prerequisite graph is valid and acyclic;
- Fundamental Stance traverses all required stages;
- mastery decision is evidence-backed and explainable.

### C. Learner Application
- onboarding creates usable learner state;
- baseline/readiness affects physical execution;
- dashboard exposes continue/next/progress/readiness;
- map overlays progress without rewriting canon;
- history survives a new application session;
- next step is deterministic for identical inputs.

### D. Training Runtime
- timers/rounds/repetitions can pause and stop;
- stop/safety signals override timers and completion pressure;
- partial/stopped sessions are represented truthfully;
- session evidence persists with content version trace.

### E. Experience
- demonstration supports available authored views/speed modes;
- missing optional asset has a safe instructional fallback;
- Technique Pack resolves its required dependencies;
- Faixa context and SW achievements remain distinct;
- Teacher/Dojo contracts do not bypass learner safety/evidence;
- Masters interoperability declares schema + canon version.

### F. Quality
- automated contract/domain tests cover deterministic rules and failure modes;
- one end-to-end test executes the reference learner journey;
- no milestone is considered runtime-complete from documentation alone;
- accessibility fallback exists for demonstration-dependent instruction;
- errors expose actionable state instead of silently fabricating data.

## Definition of V1 states
### `V1_SPEC_COMPLETE`
M001–M120 curriculum, architecture and contracts are present in the integrated repository history.

### `V1_RUNTIME_COMPLETE`
Executable application implements the M120 vertical slice and passes gates A–F.

### `V1_RELEASED`
`V1_RUNTIME_COMPLETE` plus release build/deployment, smoke verification and tagged/versioned release artifact.

These states must not be conflated.

## Immediate implementation backlog after this gate
1. consolidate the stacked PR chain into the target integration branch/main;
2. inventory existing executable source code versus specification-only milestones;
3. implement canon adapter + domain models in code;
4. implement persistence and learner state;
5. implement Lesson Player and Session Player;
6. build learner UI surfaces;
7. encode Fundamental Stance as structured content;
8. implement tests for gates A–F;
9. run the end-to-end V1 acceptance journey;
10. build, deploy, smoke-test and tag the first runtime release.

## M120 completion rule
This document completes the **roadmap specification milestone** when integrated. It deliberately does **not** claim `V1_RUNTIME_COMPLETE` or `V1_RELEASED` until executable evidence exists.