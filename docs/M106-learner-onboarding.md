# M106 — Learner profile and onboarding

## Purpose
Create the learner-owned state required to personalize execution without modifying canon or content definitions.

```ts
type LearnerProfile = {
  id: string;
  displayName?: string;
  createdAt: string;
  goals: readonly LearnerGoal[];
  preferredSessionsPerWeek?: 2 | 3 | 4;
  onboardingStatus: 'NEW' | 'BASELINE_REQUIRED' | 'READY';
  activeCanonRelease: string;
};
```

## Onboarding flow
1. introduce platform purpose and safety boundary;
2. select broad learning/training goals;
3. capture practical availability and equipment context;
4. route to baseline when required;
5. establish first eligible learning unit;
6. enter dashboard.

## Rules
- no learner preference becomes canon metadata;
- onboarding does not diagnose health or promise fitness outcomes;
- physical constraints relevant to training are handled by baseline/readiness records rather than public profile fields;
- user can revisit goals and availability without resetting historical progress;
- content eligibility remains governed by prerequisites and safety gates.