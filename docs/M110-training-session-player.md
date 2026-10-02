# M110 — Training Session Player

## Purpose
Execute structured Training Engine content as a guided session rather than static documentation.

```ts
type TrainingSessionRun = {
  id: string;
  learnerId: string;
  sessionDefinitionId: string;
  definitionVersion: number;
  status: 'READY' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'STOPPED';
  currentBlockIndex: number;
  evidenceIds: readonly string[];
};
```

## Block types
- instruction;
- warm-up/preparation;
- repetitions;
- timed work;
- round;
- rest;
- check-in;
- assessment/evidence;
- cooldown/recovery.

## Runtime behavior
1. resolve practice/drill definitions;
2. verify readiness and prerequisites;
3. display stop rules before relevant physical blocks;
4. run timer/repetition/round contract;
5. allow pause/stop at any moment;
6. capture completion, perceived intensity and required evidence;
7. preserve partial run when appropriate;
8. emit session result to M111.

## Safety
A timer never overrides a stop signal. `STOPPED` is a valid outcome and must not be disguised as failure when safety/readiness caused the stop.