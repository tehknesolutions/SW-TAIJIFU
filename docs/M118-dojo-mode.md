# M118 — Dojo Mode foundation

## Purpose
Group learners and teachers around shared curriculum context without replacing learner-level evidence.

```ts
type Dojo = {
  id: string;
  name: string;
  activeCanonRelease: string;
};

type DojoMembership = {
  dojoId: string;
  userId: string;
  role: 'LEARNER' | 'TEACHER' | 'ADMIN';
};

type CohortAssignment = {
  id: string;
  dojoId: string;
  cohortId: string;
  learningEntityIds: readonly string[];
  assignedAt: string;
};
```

## V1 capabilities
- cohort/group membership;
- shared curriculum assignments;
- scheduled-session context/reference;
- aggregate progress summaries;
- learner drill-down only for authorized roles.

## Privacy and evidence
Aggregate views should expose only data needed for teaching operations. Individual assessment evidence remains learner-scoped and permission-controlled.

## Rules
- group assignment does not mark work completed;
- aggregate progress is derived from learner evidence;
- dojo cannot create a private replacement canon under the same canonical identity;
- dojo-specific lesson sequencing is SW pedagogical configuration and must be labeled as such.