# M102 — Prerequisite graph

## Domain
SW pedagogical dependencies form a directed graph independent from canonical hierarchy.

```ts
type LearningNodeRef = {
  type: 'LESSON' | 'TECHNIQUE' | 'DRILL' | 'PRACTICE' | 'ASSESSMENT';
  id: string;
};

type PrerequisiteEdge = {
  from: LearningNodeRef;
  to: LearningNodeRef;
  minimumState?: MasteryState;
  reason: string;
};
```

`from → to` means `from` must satisfy the edge before `to` is ready.

## Required operations
- `getPrerequisites(node)`;
- `getDependents(node)`;
- `isReady(node, learnerState)`;
- `getMissingPrerequisites(node, learnerState)`;
- cycle detection during content validation.

## Rules
- cycles are invalid unless a future explicit iterative-learning construct defines different semantics;
- canon hierarchy is not automatically a prerequisite graph;
- safety prerequisites override convenience recommendations;
- readiness must explain *why* a node is blocked;
- optional enrichment does not block core progression.

## Example
A controlled partner drill may require a solo technique at `CONSISTENT`, while the conceptual lesson explaining that drill can remain readable earlier.