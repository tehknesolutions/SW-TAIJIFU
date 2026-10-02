# M100 — Technique, Drill and Practice models

## Technique
A reusable movement/skill definition.

```ts
type Technique = {
  id: string;
  name: string;
  objective: string;
  safetyNotes: readonly string[];
  steps: readonly string[];
  commonErrors: readonly string[];
  prerequisiteIds: readonly string[];
};
```

## Drill
A constrained method for practicing one or more skills.

```ts
type Drill = {
  id: string;
  techniqueIds: readonly string[];
  mode: 'SOLO' | 'PARTNER' | 'EQUIPMENT';
  rounds?: number;
  durationSeconds?: number;
  repetitions?: number;
  intensity?: { min: number; max: number };
  stopRules: readonly string[];
};
```

## Practice
An executable assignment assembled from drills/techniques.

```ts
type Practice = {
  id: string;
  title: string;
  blocks: readonly PracticeBlock[];
  evidenceRule: string;
};
```

## Relationship to M001–M091
Existing curriculum documents are the source material for progressively creating structured Technique/Drill/Practice records. Migration must preserve their safety constraints and progression gates rather than flattening them into generic exercise names.

## Principle
Technique says *what*. Drill says *how to constrain practice*. Practice says *what the learner executes now*.