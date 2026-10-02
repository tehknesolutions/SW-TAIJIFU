# M103 — Mastery state engine

## States
```ts
type MasteryState =
  | 'LEARNING'
  | 'PRACTICING'
  | 'CONSISTENT'
  | 'MASTERED_FOR_LEVEL';
```

## Meaning
- `LEARNING`: concept/skill introduced; evidence is insufficient for reliable execution.
- `PRACTICING`: learner has begun valid repetitions/attempts.
- `CONSISTENT`: repeated evidence meets the defined level criteria under expected conditions.
- `MASTERED_FOR_LEVEL`: all required evidence, prerequisites and safety gates for this curriculum level are satisfied.

## Transition engine
```ts
type MasteryDecision = {
  previous: MasteryState;
  next: MasteryState;
  changed: boolean;
  evidenceIds: readonly string[];
  reasons: readonly string[];
};
```

## Rules
- state never advances solely because time passed;
- a single exceptional attempt should not establish consistency when repeated evidence is required;
- safety-critical failure blocks `MASTERED_FOR_LEVEL`;
- transitions are deterministic from content rules + evidence;
- the engine records reasons so UI can explain progress;
- content version changes may require reevaluation rather than silently preserving an invalid mastery claim.

## Regression
Historical evidence is retained. A product may flag `REVIEW_REQUIRED` separately when later evidence or a content revision indicates reassessment; do not erase history.