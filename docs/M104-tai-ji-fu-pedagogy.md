# M104 — TAI / JI / FU pedagogical views

## Purpose
TAI/JI/FU is an SW teaching lens that can organize how a learner studies a skill. It does not rewrite or extend canonical entities silently.

```ts
type PedagogicalView = 'TAI' | 'JI' | 'FU';

type PedagogicalBlock = {
  view: PedagogicalView;
  objective: string;
  contentRefs: readonly string[];
};
```

## TAI — structure
Focus on preparation, form, alignment, stable reference points and reproducible mechanics.

Questions:
- What shape/structure are we building?
- Where is balance?
- What must remain controlled?

## JI — adaptation
Focus on perception, timing, transition, distance and response to changing conditions.

Questions:
- What changes?
- What signal triggers action?
- How does structure adapt without collapsing?

## FU — manifestation
Focus on complete execution, integration and purposeful application under the constraints appropriate to the learner's level.

Questions:
- Can the learner execute the whole action?
- Can it integrate with movement/defense/context?
- Can it finish in a functional state?

## Rule
Not every lesson needs equal TAI/JI/FU weight. The author declares relevant views and evidence. Safety and prerequisite gates still govern practice.