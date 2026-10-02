# M117 — Teacher Mode foundation

## Purpose
Allow authorized teachers to guide learner progression while preserving evidence, safety and content boundaries.

## Core capabilities
- view assigned learner progress and evidence summaries;
- inspect prerequisite/readiness reasons;
- assign an eligible Lesson, Practice or Assessment;
- record `TEACHER_OBSERVATION` assessment evidence;
- add private instructional feedback;
- request reassessment/review.

## Contract
```ts
type TeacherAssignment = {
  id: string;
  teacherId: string;
  learnerId: string;
  entityType: 'LESSON' | 'PRACTICE' | 'ASSESSMENT';
  entityId: string;
  assignedAt: string;
  note?: string;
};
```

## Boundaries
- teacher assignment does not bypass hard safety prerequisites;
- teacher cannot mutate canon through SW;
- observation evidence identifies teacher, criterion and time;
- learner history remains append-oriented and traceable;
- access is scoped to learners/groups for which the teacher has authorization.

## V1 foundation
Teacher Mode is a contract and workflow foundation; advanced messaging, billing, certification governance and organization administration remain outside this milestone.