# M112 — Deterministic next-step engine

## Purpose
Choose a useful next learner action with an explainable deterministic rule set.

```ts
type NextStep = {
  type: 'RESUME' | 'LESSON' | 'PRACTICE' | 'ASSESSMENT' | 'BASELINE' | 'REVIEW';
  entityId: string;
  reasons: readonly string[];
};
```

## Selection order V1
1. resolve a required safety/readiness review when execution is blocked;
2. complete required baseline when onboarding depends on it;
3. resume a valid unfinished run when continuation is appropriate;
4. satisfy missing required prerequisite for the learner's active goal/path;
5. practice a `LEARNING/PRACTICING` essential competency needing evidence;
6. assess a competency whose required evidence threshold is ready;
7. introduce the next available mapped lesson on the active path;
8. offer review when no new required node is eligible.

## Filters
A candidate must:
- exist in current SW content;
- resolve its canon mappings when required;
- pass prerequisite checks;
- be compatible with readiness/safety constraints;
- not require unavailable partner/equipment context unless an allowed alternative exists.

## Explainability
The engine returns reasons such as `resume unfinished stance lesson`, `prerequisite for partner defense`, or `assessment ready after 3 valid practices`.

## Determinism
Given the same content version, learner state, goal/context and readiness inputs, selection returns the same next step. Future adaptive/AI suggestions may exist as an optional layer, but cannot silently replace this progression contract.