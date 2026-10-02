# M111 — History, metrics and progress persistence

## Principle
Definitions are versioned content; runs and evidence are append-oriented learner history.

## Persisted records
- `LearnerProfile`;
- `BaselineRecord`;
- `LessonRun`;
- `TrainingSessionRun` + result;
- `AssessmentAttempt`;
- `AssessmentEvidence`;
- `MasteryDecision`;
- learner metric samples from M088-compatible fields.

## Traceability envelope
```ts
type ContentTrace = {
  swEntityId: string;
  swEntityVersion: number;
  canonRelease?: string;
  canonRefs?: readonly CanonRef[];
};
```

Every consequential run/decision stores enough trace data to understand which definition/release produced it.

## History rules
- new attempts do not overwrite prior attempts;
- corrected user-entered notes may be edited through an audit-aware product policy, but computed evidence should remain traceable;
- mastery decisions reference evidence IDs;
- a canon/content upgrade does not retroactively rewrite historical traces;
- derived dashboard metrics can be recomputed from persisted events when possible.

## Privacy boundary
Persist only data required for the learner experience. Public/profile presentation is separate from private training history.