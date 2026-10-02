# M107 — Baseline integration

## Purpose
Connect the existing Training Engine baseline to learner readiness and initial evidence.

```ts
type BaselineRecord = {
  id: string;
  learnerId: string;
  occurredAt: string;
  protocolVersion: string;
  completedItems: readonly BaselineItemResult[];
  readiness: 'READY' | 'MODIFY' | 'PAUSE_AND_REVIEW';
  notes?: string;
};
```

## Integration
- onboarding creates/requests baseline;
- baseline reuses the existing M001+ safety and physical preparation material;
- results may alter recommended session volume, exercise variants or readiness;
- baseline does not auto-grant technical mastery;
- assessment evidence and baseline evidence remain distinct types.

## Readiness behavior
`READY`: normal eligible progression.

`MODIFY`: use compatible variants/reduced load while preserving learning access where safe.

`PAUSE_AND_REVIEW`: block affected physical execution until the learner can appropriately review the concern; conceptual content may remain available.

## Traceability
Store protocol version and date so future reassessment can compare like with like instead of overwriting the original baseline.