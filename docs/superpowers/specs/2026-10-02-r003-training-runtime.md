# R003 — Training Runtime Design Spec

## Intent
Turn SimpleWay Taijifu from a lesson/progress experience into an executable physical training platform while preserving the project rule that GitHub + GPT is sufficient to keep development moving. Local execution, GitHub Actions, paid services and external tooling may be optional evidence/helpers, never blocking dependencies.

## Success journey
`Technique → Drill → Round → Rest → Session → Evidence → Mastery → Next Step`

A learner can open a training session, execute structured blocks, pause/stop/resume safely, finish the session, persist evidence, and see progress/next-step state update.

## Architectural boundaries
### Content definitions
Technique, Drill and Session definitions are versioned source content. They are not stored as learner history.

### Runtime state
Session execution state contains only learner/run facts: current block, repetitions/round, timer state, pause/stop/completion status and evidence refs.

### Domain engine
Pure TypeScript transitions own progression rules. React renders current state and dispatches explicit actions.

### Persistence
Existing versioned local persistence stores active/completed session state so reload can restore the exact training position.

### Canon
R003 does not fabricate canonical hierarchy. Training content may carry stable SW IDs and later canon refs, but the full canon adapter remains a separate integration.

## Core models

```ts
type TechniqueDefinition = {
  id: string;
  version: number;
  title: string;
  objective: string;
  checkpoints: readonly string[];
  safety: readonly string[];
};

type DrillDefinition = {
  id: string;
  version: number;
  title: string;
  techniqueIds: readonly string[];
  mode: 'REPS' | 'TIMED';
  target: number;
  restSeconds?: number;
};

type SessionBlock =
  | { type: 'INSTRUCTION'; title: string; text: string }
  | { type: 'DRILL'; drillId: string }
  | { type: 'REST'; seconds: number }
  | { type: 'CHECK_IN'; prompt: string };

type TrainingSessionDefinition = {
  id: string;
  version: number;
  title: string;
  blocks: readonly SessionBlock[];
};

type TrainingSessionRun = {
  sessionId: string;
  sessionVersion: number;
  status: 'READY' | 'RUNNING' | 'PAUSED' | 'STOPPED' | 'COMPLETED';
  currentBlockIndex: number;
  currentRound: number;
  completedReps: number;
  remainingSeconds?: number;
  evidenceIds: readonly string[];
};
```

## First physical pack
R003 starts with a deliberately foundational package rather than advanced/contact material:

1. **Base Fundamental** — reuse the existing Fundamental Stance identity/content.
2. **Guarda Fundamental** — stable hand/head/torso protection checkpoints.
3. **Deslocamento Fundamental** — short forward/back movement while recovering base.
4. **Golpe Reto Fundamental** — introductory straight strike mechanics practiced in the air/controlled non-contact context for this runtime slice.

These are SW pedagogical/runtime definitions. Canon mapping is added only when supported by the canon adapter/source.

## First session
`Fundamentos 01` proves the engine:

1. instruction/readiness reminder;
2. base repetitions;
3. short rest;
4. guard repetitions;
5. short rest;
6. displacement repetitions;
7. short rest;
8. controlled straight-strike repetitions;
9. check-in/reflection;
10. completion/evidence.

## Timer model
Timers are runtime state, not an external service. Time progression is represented by explicit domain actions such as `tick(1)`, `pause()`, `resume()` and `stop()`.

React may use browser scheduling to dispatch ticks while a timed block is running, but correctness belongs to the state machine. Reload restores persisted remaining time rather than silently pretending uninterrupted elapsed time unless a later milestone explicitly adds wall-clock reconciliation.

## Safety/readiness
- `PAUSE_AND_REVIEW` blocks physical DRILL blocks.
- `MODIFY` permits the session but surfaces reduced-intensity guidance.
- stop is always available during physical execution.
- STOPPED is a valid session result, not failure.
- timer/rep goals never override a stop action.
- R003 does not diagnose health or promise fitness outcomes.
- first strike work is non-contact/controlled; partner/contact progression requires later explicit content and safety gates.

## Evidence
Meaningful block completion emits append-oriented training evidence containing session ID/version, block/drill/technique refs, completion facts and timestamp. Check-in may add self-report evidence, but self-report alone does not prove technical mastery.

## Mastery integration
Training evidence enriches the existing mastery layer. Completing one session does not automatically produce `MASTERED_FOR_LEVEL`. R003 can advance learning/practice consistency only according to explicit evidence rules.

## UI
Training becomes a focused player:
- session title and progress;
- current block;
- technique checkpoints when relevant;
- repetitions or timer;
- primary action;
- pause/resume;
- always-visible stop during physical blocks;
- readiness/modification notice;
- completion summary.

Map/Home/Progress consume session state but do not own execution logic.

## Persistence/reload
After every meaningful transition, the active run is persisted. Reload resumes current block, reps/round and remaining timer state. Completed evidence is not duplicated when reopening the session.

## Acceptance
- structured Technique/Drill/Session content exists separately from learner state;
- `Fundamentos 01` resolves all referenced techniques/drills;
- session can start, advance, pause, resume, stop and complete through deterministic transitions;
- rep and timed blocks are supported by the same runtime engine;
- readiness blocks physical execution correctly;
- reload restores exact active session state;
- completed blocks do not duplicate evidence;
- session completion updates progress/next-step projection;
- no canon relationship is invented;
- no local/Actions/external-tool requirement blocks continued development.