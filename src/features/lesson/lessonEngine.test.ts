import { describe, expect, it } from 'vitest';
import { createInitialState } from '../../domain/state';
import { fundamentalStanceLesson } from '../../content/fundamentalStance';
import { completeStage, startLesson } from './lessonEngine';

describe('lesson engine', () => {
  it('starts once and advances with evidence', () => { const started = startLesson(createInitialState(), fundamentalStanceLesson); const same = startLesson(started, fundamentalStanceLesson); expect(same).toBe(started); const advanced = completeStage(started, fundamentalStanceLesson); expect(advanced.lessonRun?.currentStageIndex).toBe(1); expect(advanced.evidence).toHaveLength(1); });
  it('does not create more evidence after completion of a run', () => { let state = startLesson(createInitialState(), fundamentalStanceLesson); for (let i = 0; i < fundamentalStanceLesson.stages.length; i += 1) state = completeStage(state, fundamentalStanceLesson, i === 7 ? 'pass' : undefined); const count = state.evidence.length; const after = completeStage(state, fundamentalStanceLesson); expect(after.evidence).toHaveLength(count); });
});
