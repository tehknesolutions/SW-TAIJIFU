# M099 — Lesson domain model

## Purpose
`Lesson` is the primary educational unit of SimpleWay Taijifu. It owns pedagogy while referencing, never mutating, canon.

```ts
type LearningStage =
  | 'UNDERSTAND' | 'OBSERVE' | 'PREPARE' | 'EXECUTE'
  | 'PRACTICE' | 'APPLY' | 'REFLECT' | 'ASSESS';

type Lesson = {
  id: string;
  version: number;
  title: string;
  objective: string;
  canonRelease: string;
  canonRefs: readonly CanonRef[];
  prerequisiteIds: readonly string[];
  stages: readonly LessonStage[];
  completionRule: LessonCompletionRule;
};

type LessonStage = {
  id: string;
  stage: LearningStage;
  contentRefs: readonly string[];
  required: boolean;
};
```

## Rules
- lesson IDs are SW identities, not canon IDs;
- canon references use M097 mappings;
- a lesson may span multiple sessions;
- stages may contain concepts, demonstrations, techniques, drills, practices or assessments;
- completion requires explicit evidence defined by the lesson, not simply opening every screen;
- safety gates can block EXECUTE/PRACTICE/APPLY while allowing conceptual stages.

## Default sequence
`UNDERSTAND → OBSERVE → PREPARE → EXECUTE → PRACTICE → APPLY → REFLECT → ASSESS`.

A lesson may omit a stage only when its design explicitly marks that stage unnecessary.