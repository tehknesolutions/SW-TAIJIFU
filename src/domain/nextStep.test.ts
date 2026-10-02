import { describe, expect, it } from 'vitest';
import { createInitialState } from './state';
import { completeOnboarding } from '../features/onboarding/onboarding';
import { completeBaseline } from '../features/baseline/baseline';
import { fundamentalStanceLesson } from '../content/fundamentalStance';
import { completeStage, startLesson } from '../features/lesson/lessonEngine';
import { getNextStep } from './nextStep';

describe('runtime next step', () => {
  it('projects onboarding then baseline then first lesson', () => { let state = createInitialState(); expect(getNextStep(state).kind).toBe('ONBOARD'); state = completeOnboarding(state, { displayName: 'Tai', goal: 'Base' }); expect(getNextStep(state).kind).toBe('BASELINE'); state = completeBaseline(state, { concern: false, needsModification: false }); expect(getNextStep(state).kind).toBe('START_LESSON'); });
  it('projects the exact current lesson stage', () => { let state = completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Base' }); state = completeBaseline(state, { concern: false, needsModification: false }); state = startLesson(state, fundamentalStanceLesson); state = completeStage(state, fundamentalStanceLesson); expect(getNextStep(state)).toMatchObject({ kind: 'CONTINUE_LESSON', stage: 'OBSERVE' }); });
  it('prioritizes readiness review when physical execution is paused', () => { let state = completeOnboarding(createInitialState(), { displayName: 'Tai', goal: 'Base' }); state = completeBaseline(state, { concern: true, needsModification: false }); expect(getNextStep(state).kind).toBe('REVIEW'); });
});
