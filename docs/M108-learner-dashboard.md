# M108 — Learner dashboard

## Purpose
Answer five questions immediately: Where am I? What do I do next? Am I ready to train? What changed? What is blocked?

## Dashboard model
```ts
type LearnerDashboard = {
  activePath?: CanonRef;
  nextAction?: NextStep;
  readiness: 'READY' | 'MODIFY' | 'PAUSE_AND_REVIEW';
  masterySummary: MasterySummary;
  recentActivity: readonly ActivitySummary[];
  blockedItems: readonly BlockedLearningItem[];
};
```

## Primary surfaces
1. **Continue** — resume unfinished lesson/session before proposing novelty when appropriate.
2. **Next step** — one explainable recommended action from M112.
3. **Readiness** — current execution gate and any required modification.
4. **Progress** — compact mastery/path summary linked to M109.
5. **Recent** — latest lessons, practices and assessments.
6. **Blocked** — prerequisites/safety constraints with explicit reasons and resolution path.

## Rule
The dashboard never equates percentage completion with mastery. It presents evidence-backed state from M103 and navigation context from canon mappings.