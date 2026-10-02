import { describe, expect, it } from 'vitest';
import { createInitialState } from './state';
import { completeOnboarding } from '../features/onboarding/onboarding';
import { completeBaseline } from '../features/baseline/baseline';
import { fundamentalStanceLesson } from '../content/fundamentalStance';
import { loadState, STORAGE_KEY, type StoragePort } from '../storage/localState';

const fake = (value: string | null): StoragePort => ({ getItem: (key) => key === STORAGE_KEY ? value : null, setItem: () => undefined });

describe('runtime contracts', () => {
  it('creates versioned empty state', () => expect(createInitialState()).toMatchObject({ schemaVersion: 1, profile: null, baseline: null }));
  it('recovers safely from corrupt or incompatible storage', () => { expect(loadState(fake('{bad'))).toEqual(createInitialState()); expect(loadState(fake(JSON.stringify({ schemaVersion: 2 })))).toEqual(createInitialState()); });
  it('onboarding requires baseline', () => expect(completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Base' }).profile?.onboardingStatus).toBe('BASELINE_REQUIRED'));
  it('baseline has deterministic readiness', () => { const base = completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Base' }); expect(completeBaseline(base, { concern: false, needsModification: false }).baseline?.readiness).toBe('READY'); expect(completeBaseline(base, { concern: true, needsModification: false }).baseline?.readiness).toBe('PAUSE_AND_REVIEW'); });
  it('Fundamental Stance keeps the eight-stage contract', () => expect(fundamentalStanceLesson.stages.map((s) => s.stage)).toEqual(['UNDERSTAND','OBSERVE','PREPARE','EXECUTE','PRACTICE','APPLY','REFLECT','ASSESS']));
});
