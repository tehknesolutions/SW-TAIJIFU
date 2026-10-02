# First Functional Runtime Slice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a persistent executable learner flow from onboarding through Fundamental Stance mastery evidence.

**Architecture:** Pure TypeScript domain/content modules feed React views. A single versioned localStorage adapter owns persistence. App orchestration selects onboarding, baseline or lesson from persisted state and never stores canon/content definitions inside learner state.

**Tech Stack:** React, TypeScript, Vite, browser localStorage, Vitest for domain/persistence tests.

**Spec:** `docs/superpowers/specs/2026-10-02-first-functional-slice.md`

## Global Constraints
- Preserve the R001 dependency-light web foundation.
- Persist learner/runtime data only; lesson definitions remain versioned source content.
- Baseline is readiness guidance, not diagnosis.
- Physical stages respect readiness/stop gates.
- Mastery transitions are evidence-backed and deterministic.
- State schema/content versions are explicit.

## Review Focus
- corrupt/unknown persisted state must recover safely without crashing;
- reload must restore the exact in-progress lesson stage;
- blocked readiness must not permit EXECUTE/PRACTICE/APPLY;
- repeated clicks must not duplicate evidence for the same stage completion;
- content/schema version mismatch must be explicit and safe.

---

### Task 1: Testable domain and persistence foundation

**Files:**
- Modify: `package.json`
- Create: `src/domain/types.ts`
- Create: `src/domain/state.ts`
- Create: `src/storage/localState.ts`
- Create: `src/domain/state.test.ts`
- Create: `src/storage/localState.test.ts`

**Interfaces:**
- Produces: `AppState`, `createInitialState()`, `loadState()`, `saveState()`.

- [ ] Add Vitest test script/dependency.
- [ ] Write failing tests for initial state, corrupt storage and round-trip persistence.
- [ ] Run tests and verify failure.
- [ ] Implement minimal typed state + storage adapter.
- [ ] Run tests and verify pass.
- [ ] Commit.

### Task 2: Onboarding domain + UI

**Files:**
- Create: `src/features/onboarding/onboarding.ts`
- Create: `src/features/onboarding/OnboardingView.tsx`
- Create: `src/features/onboarding/onboarding.test.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `AppState`.
- Produces: `completeOnboarding(state, input): AppState`.

- [ ] Write failing test proving onboarding creates profile and `BASELINE_REQUIRED` state.
- [ ] Run test and verify failure.
- [ ] Implement pure transition.
- [ ] Build onboarding view and connect it to App orchestration.
- [ ] Run tests/build.
- [ ] Commit.

### Task 3: Baseline/readiness gate

**Files:**
- Create: `src/features/baseline/baseline.ts`
- Create: `src/features/baseline/BaselineView.tsx`
- Create: `src/features/baseline/baseline.test.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `completeBaseline(state, answers): AppState`, readiness `READY | MODIFY | PAUSE_AND_REVIEW`.

- [ ] Write failing tests for READY and blocking concern paths.
- [ ] Run tests and verify failure.
- [ ] Implement deterministic readiness rule and record.
- [ ] Build concise baseline UI with stop/safety language.
- [ ] Verify blocked state cannot enter physical lesson stages.
- [ ] Run tests/build and commit.

### Task 4: Structured Fundamental Stance content

**Files:**
- Create: `src/content/fundamentalStance.ts`
- Create: `src/content/fundamentalStance.test.ts`

**Interfaces:**
- Produces: `fundamentalStanceLesson: LessonDefinition` with eight ordered stages.

- [ ] Write failing content contract test for IDs/version/stage order.
- [ ] Implement lesson definition using M105 flow.
- [ ] Verify test and commit.

### Task 5: Lesson runner + evidence

**Files:**
- Create: `src/features/lesson/lessonEngine.ts`
- Create: `src/features/lesson/LessonView.tsx`
- Create: `src/features/lesson/lessonEngine.test.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `startLesson`, `completeStage`, `recordReflection`, `recordAssessment`.

- [ ] Write failing tests for stage progression, duplicate evidence prevention, readiness block and resume state.
- [ ] Implement minimal pure lesson engine.
- [ ] Build stage player UI.
- [ ] Persist after every meaningful transition.
- [ ] Run tests/build and commit.

### Task 6: Mastery and continuation

**Files:**
- Create: `src/domain/mastery.ts`
- Create: `src/domain/mastery.test.ts`
- Modify: `src/features/lesson/lessonEngine.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `deriveMastery(state, lessonId): MasteryRecord`.

- [ ] Write failing tests proving LEARNING/PRACTICING/CONSISTENT decisions derive from evidence and safety gate.
- [ ] Implement deterministic mastery derivation.
- [ ] Surface current mastery and Continue action in Home/Train.
- [ ] Run tests/build and commit.

### Task 7: End-to-end runtime verification

**Files:**
- Create: `src/runtimeFlow.test.ts`
- Modify: `README.md`

**Interfaces:**
- Exercises all prior public transitions as one learner journey.

- [ ] Write flow test: initial → onboarding → baseline → lesson → evidence → serialize → reload → continue.
- [ ] Run full test suite.
- [ ] Run production build.
- [ ] Update README with exact dev/test/build commands and runtime status.
- [ ] Review diff for spec compliance.
- [ ] Commit only if all verification passes.