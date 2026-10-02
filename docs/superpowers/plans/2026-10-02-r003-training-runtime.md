# R003 Training Runtime Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first executable physical training runtime from Technique/Drill/Session definitions through persistent evidence, mastery integration and next-step progression.

**Architecture:** Pure TypeScript definitions and state transitions own training correctness; React renders the current block and dispatches explicit actions. The existing versioned local persistence adapter stores the active run. Browser scheduling may dispatch timer ticks, but timers remain domain state and never depend on an external service.

**Tech Stack:** React, TypeScript, Vite, existing localStorage adapter, existing learner/mastery domain.

**Spec:** `docs/superpowers/specs/2026-10-02-r003-training-runtime.md`

## Global Constraints

- GitHub + GPT remains sufficient to continue development.
- Local execution, GitHub Actions, paid services and external tooling are optional and never blocking.
- Technique, Drill and Session definitions are versioned source content, not learner history.
- R003 does not fabricate canonical hierarchy.
- `PAUSE_AND_REVIEW` blocks physical DRILL blocks.
- `MODIFY` permits the session with reduced-intensity guidance.
- STOPPED is a valid session result, not failure.
- Timer/rep goals never override a stop action.
- First strike work is air/controlled non-contact.
- Self-report evidence alone does not prove technical mastery.

## Review Focus

- Reload during a timed block must restore persisted remaining time/state without fabricating uninterrupted elapsed time.
- Repeated completion actions must not duplicate block evidence.
- `PAUSE_AND_REVIEW` must prevent every physical DRILL.
- `MODIFY` remains executable while surfacing reduced-intensity guidance.
- STOPPED remains distinct from COMPLETED and does not advance mastery as completed.

---

### Task 1: Training content contracts

**Files:**
- Create: `src/content/trainingTypes.ts`
- Create: `src/content/fundamentalTrainingPack.ts`
- Create: `src/content/fundamentalTrainingPack.test.ts`

**Interfaces:**
- Produces: `TechniqueDefinition`, `DrillDefinition`, `SessionBlock`, `TrainingSessionDefinition` and first-pack exports.

- [ ] Write failing tests for the four technique identities: `fundamental-stance`, `fundamental-guard`, `fundamental-displacement`, `fundamental-straight-strike`.
- [ ] Test every drill references an existing technique and `Fundamentos 01` follows the spec order.
- [ ] Implement version-1 content.
- [ ] Mark straight-strike as controlled/non-contact.
- [ ] Verify no content object invents canon relationships.
- [ ] Commit `feat: add R003 fundamental training pack`.

### Task 2: Deterministic training session engine

**Files:**
- Create: `src/features/training/trainingEngine.ts`
- Create: `src/features/training/trainingEngine.test.ts`
- Modify: `src/domain/types.ts`

**Interfaces:**
- `startTraining(state, session): AppState`
- `startBlock(state, session): AppState`
- `completeRepetition(state, session): AppState`
- `tick(state, session, seconds): AppState`
- `pauseTraining(state): AppState`
- `resumeTraining(state): AppState`
- `stopTraining(state): AppState`
- `completeTrainingBlock(state, session): AppState`

- [ ] Test READY→RUNNING, reps, block advancement and completion.
- [ ] Test duplicate completion does not append duplicate evidence.
- [ ] Test pause/resume/stop.
- [ ] Implement persisted `TrainingSessionRun`.
- [ ] Make block completion idempotent.
- [ ] Ensure STOPPED cannot become COMPLETED without a new run.
- [ ] Commit `feat: add deterministic training session engine`.

### Task 3: Readiness and timer rules

**Files:**
- Create: `src/features/training/trainingGuards.ts`
- Create: `src/features/training/trainingGuards.test.ts`
- Modify: `src/features/training/trainingEngine.ts`
- Modify: `src/features/training/trainingEngine.test.ts`

**Interfaces:**
- `canExecutePhysicalBlock(state): boolean`
- `getTrainingGuidance(state): 'NORMAL' | 'REDUCED' | 'PAUSED'`

- [ ] Test `PAUSE_AND_REVIEW` blocks physical DRILL but permits conceptual blocks.
- [ ] Test `MODIFY` permits DRILL with REDUCED guidance.
- [ ] Test `tick(1)` decrements and clamps timed state.
- [ ] Test pause freezes timer and resume continues.
- [ ] Test stop is accepted during physical execution without completion evidence.
- [ ] Implement guards and timer transitions as pure functions.
- [ ] Commit `feat: enforce training readiness and timer rules`.

### Task 4: Persistence integration

**Files:**
- Modify: `src/domain/types.ts`
- Modify: `src/storage/localState.ts`
- Create: `src/features/training/trainingPersistence.test.ts`

**Interfaces:**
- AppState gains `trainingRun: TrainingSessionRun | null`.
- Existing `loadState/saveState` round-trip the active run.

- [ ] Test active timed run serialization/restoration.
- [ ] Test restored completed evidence remains unique.
- [ ] Extend persisted state safely.
- [ ] Preserve malformed-storage fallback.
- [ ] Commit `feat: persist active training sessions`.

### Task 5: Training Player UI

**Files:**
- Create: `src/features/training/TrainingPlayer.tsx`
- Create: `src/features/training/TrainingSummary.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- `TrainingPlayer` consumes AppState + TrainingSessionDefinition and dispatches engine actions.
- `TrainingSummary` consumes completed/stopped run state.

- [ ] Render title, block progress and technique checkpoints.
- [ ] Render reps for REPS blocks and remaining time for TIMED blocks.
- [ ] Render pause/resume and always-visible stop during physical blocks.
- [ ] Render NORMAL/REDUCED/PAUSED guidance.
- [ ] Keep progression logic in the domain engine, not JSX.
- [ ] Add browser scheduling for timed ticks; persistence remains source of truth.
- [ ] Add completion summary with evidence count and next step.
- [ ] Commit `feat: add R003 training player`.

### Task 6: Progress and mastery integration

**Files:**
- Modify: `src/domain/mastery.ts`
- Modify: `src/domain/nextStep.ts`
- Create: `src/features/training/trainingProgress.ts`
- Create: `src/features/training/trainingProgress.test.ts`
- Modify: `src/features/progress/ProgressView.tsx`

**Interfaces:**
- `getTrainingEvidence(state, sessionId): Evidence[]`
- `getTrainingNextStep(state): RuntimeNextStep`

- [ ] Test completed training evidence appears in progress.
- [ ] Test STOPPED does not advance completion-based mastery.
- [ ] Test completed `Fundamentos 01` produces an explainable next step.
- [ ] Integrate training evidence without automatic MASTERED_FOR_LEVEL.
- [ ] Surface training completion in Progress.
- [ ] Commit `feat: integrate training evidence with progress`.

### Task 7: End-to-end R003 flow and repository evidence

**Files:**
- Create: `src/features/training/trainingFlow.test.ts`
- Create: `docs/R003-training-runtime-evidence.md`
- Modify: `README.md`

**Interfaces:**
- Exercises the complete public R003 transition sequence.

- [ ] Test start → reps → rest → next drill → pause/resume → stop.
- [ ] Test complete path through all required blocks → evidence → progress/next step.
- [ ] Test reload during an active timed block.
- [ ] Test PAUSE_AND_REVIEW and MODIFY paths.
- [ ] Record repository/static verification without claiming unobserved execution.
- [ ] Update README with R003 status and the no-blocking-infrastructure rule.
- [ ] Commit `docs: record R003 runtime evidence`.

## Self-review

- Spec coverage: content, engine, timer, safety, evidence, UI, persistence and acceptance map to Tasks 1–7.
- Interface consistency: Task 1 produces definitions for Task 2; Task 2 produces training state for Tasks 3–7; Task 4 extends AppState; Task 5 renders the engine; Task 6 consumes evidence.
- Review-focus coverage: every listed failure mode has an explicit test.
- Scope: no canon adapter, partner/contact progression, cloud sync, AI recommendation or external service is introduced.
