# M105 — Lesson Player and first end-to-end learning unit

## Player contract
The Lesson Player resolves a `Lesson`, verifies prerequisites, walks required stages in order, launches executable practice/assessment blocks and emits learner evidence.

```ts
type LessonRun = {
  id: string;
  lessonId: string;
  lessonVersion: number;
  learnerId: string;
  currentStage: LearningStage;
  completedStageIds: readonly string[];
  evidenceIds: readonly string[];
  status: 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';
};
```

## Required behavior
1. load lesson and canon mappings;
2. explain missing prerequisites before physical execution;
3. render `UNDERSTAND` and `OBSERVE` content;
4. perform preparation/safety gate;
5. launch technique/drill/practice definitions;
6. capture reflection/evidence;
7. run assessment;
8. ask M103 for mastery decision;
9. return deterministic next state.

## First vertical learning unit — Fundamental stance
The first reference unit should use an existing safe foundation from the Training Engine rather than inventing advanced content.

### UNDERSTAND
Explain purpose of stable fighting stance, balance and guard.

### OBSERVE
Present stance checkpoints and, when demonstration assets exist, front/side demonstration.

### PREPARE
Confirm clear space, comfortable range of motion and stop rules.

### EXECUTE
Enter stance slowly; establish feet, knees, torso, hands and visual focus.

### PRACTICE
Short timed blocks returning to neutral between repetitions, then maintaining stance while breathing and making small controlled weight shifts.

### APPLY
Add one basic forward/backward movement while recovering the stance.

### REFLECT
Record perceived stability, effort and one correction to retain.

### ASSESS
Rubric evidence: balance, guard, controlled posture, ability to move and return to a functional stance. Safety-critical pain/dizziness blocks completion.

## End-to-end acceptance
A learner can start this unit at `LEARNING`, complete valid practice/evidence, receive a mastery decision and persist a lesson result without mutating any canon entity.