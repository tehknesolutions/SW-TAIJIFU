import { describe, expect, it } from 'vitest';
import { createInitialState } from './domain/state';
import { completeOnboarding } from './features/onboarding/onboarding';
import { completeBaseline } from './features/baseline/baseline';
import { fundamentalStanceLesson } from './content/fundamentalStance';
import { completeStage, startLesson } from './features/lesson/lessonEngine';
import { loadState, saveState, type StoragePort } from './storage/localState';

function memoryStorage(): StoragePort { let value: string | null = null; return { getItem: () => value, setItem: (_key, next) => { value = next; } }; }

describe('first functional learner journey', () => {
  it('persists onboarding, baseline and exact lesson progress across reload', () => {
    let state = completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Fundamentos' });
    state = completeBaseline(state, { concern: false, needsModification: false });
    state = startLesson(state, fundamentalStanceLesson);
    state = completeStage(state, fundamentalStanceLesson);
    const storage = memoryStorage(); saveState(storage, state);
    const restored = loadState(storage);
    expect(restored.profile?.displayName).toBe('Tai');
    expect(restored.baseline?.readiness).toBe('READY');
    expect(restored.lessonRun?.currentStageIndex).toBe(1);
    expect(restored.evidence).toHaveLength(1);
  });

  it('blocks physical stage when baseline requires pause/review', () => {
    let state = completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Fundamentos' });
    state = completeBaseline(state, { concern: true, needsModification: false });
    state = startLesson(state, fundamentalStanceLesson);
    state = completeStage(state, fundamentalStanceLesson);
    state = completeStage(state, fundamentalStanceLesson);
    state = completeStage(state, fundamentalStanceLesson);
    const blocked = completeStage(state, fundamentalStanceLesson);
    expect(blocked.lessonRun?.status).toBe('BLOCKED');
    expect(blocked.evidence.some((e) => e.stage === 'EXECUTE')).toBe(false);
  });
});
