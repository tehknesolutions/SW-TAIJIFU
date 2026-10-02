import { describe, expect, it } from 'vitest';
import { createInitialState } from './state';
import { deriveMastery } from './mastery';
import type { Evidence } from './types';

const evidence = (stage: Evidence['stage'], kind: Evidence['kind'] = 'COMPLETION', value?: string): Evidence => ({ id: stage, lessonId: 'fundamental-stance', stage, kind, value, createdAt: '2026-10-02T00:00:00Z' });

describe('mastery', () => {
  it('starts learning and becomes practicing with evidence', () => { const initial = createInitialState(); expect(deriveMastery(initial, 'fundamental-stance').state).toBe('LEARNING'); expect(deriveMastery({ ...initial, evidence: [evidence('UNDERSTAND')] }, 'fundamental-stance').state).toBe('PRACTICING'); });
  it('requires physical evidence plus passing assessment for consistency', () => { const state = { ...createInitialState(), evidence: [evidence('EXECUTE'), evidence('PRACTICE'), evidence('APPLY'), evidence('ASSESS', 'ASSESSMENT', 'pass')] }; expect(deriveMastery(state, 'fundamental-stance').state).toBe('CONSISTENT'); });
});
