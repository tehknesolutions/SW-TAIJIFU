# First Functional Runtime Slice — Design Spec

## Intent
Turn the R001 navigable shell into the first persistent, functional learner journey without expanding scope into full canon integration.

## Success journey
`new learner → onboarding → baseline → Fundamental Stance → evidence/progress persisted → reload → continue`

## Scope
- executable learner/domain state;
- versioned local persistence;
- onboarding;
- baseline/readiness;
- Fundamental Stance as the first real Lesson;
- evidence + mastery state sufficient to resume after reload;
- replace the Train placeholder with this journey.

## Deferred
- full external canon adapter/runtime;
- authentication/cloud sync;
- Teacher/Dojo;
- Virtual Master production assets;
- advanced sessions/contact training;
- AI/adaptive recommendation.

## Architecture
Keep the runtime local-first and dependency-light. Domain logic remains pure TypeScript; React owns presentation; browser localStorage is accessed only through a persistence adapter. The first lesson is structured content, not hard-coded screen prose. Runtime state carries explicit schema/content versions so later migrations are possible.

## Domain
- `LearnerProfile`: learner identity, goals, onboarding state.
- `BaselineRecord`: readiness result and protocol version.
- `LessonDefinition`: staged Fundamental Stance content.
- `LessonRun`: current/completed stages and evidence references.
- `Evidence`: append-oriented learner execution/reflection records.
- `MasteryRecord`: `LEARNING | PRACTICING | CONSISTENT | MASTERED_FOR_LEVEL` plus reasons/evidence refs.
- `AppState`: versioned aggregate persisted by the local adapter.

## Runtime flow
1. No profile → onboarding.
2. Profile without baseline → baseline.
3. Baseline `PAUSE_AND_REVIEW` → physical execution blocked with clear explanation.
4. Eligible learner → Fundamental Stance lesson.
5. Lesson advances through UNDERSTAND, OBSERVE, PREPARE, EXECUTE, PRACTICE, APPLY, REFLECT, ASSESS.
6. Each meaningful completion emits evidence.
7. Assessment updates mastery deterministically.
8. State persists after each meaningful transition.
9. Reload restores exact learner stage and history.

## Safety
Baseline is a readiness gate, not medical diagnosis. Pain, dizziness or relevant concern can block physical execution without blocking conceptual access. No timer or completion pressure overrides a stop condition.

## UI
Preserve the R001 visual language. Train becomes the functional flow. Home reflects current state and offers Continue. Map/Progress may consume the new state minimally but remain secondary to this slice.

## Acceptance
- first visit starts onboarding;
- completing onboarding persists learner profile;
- baseline persists readiness;
- Fundamental Stance is loaded from a structured lesson definition;
- lesson stage can be advanced and restored after reload;
- reflection/assessment creates evidence;
- mastery is derived from evidence, not arbitrary percentage;
- blocked readiness prevents physical stages;
- local persisted state has an explicit schema version and safe fallback for invalid data.