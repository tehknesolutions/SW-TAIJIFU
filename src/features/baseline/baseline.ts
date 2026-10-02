import type { AppState, Readiness } from '../../domain/types';

export function completeBaseline(state: AppState, input: { concern: boolean; needsModification: boolean }): AppState {
  const readiness: Readiness = input.concern ? 'PAUSE_AND_REVIEW' : input.needsModification ? 'MODIFY' : 'READY';
  return {
    ...state,
    profile: state.profile ? { ...state.profile, onboardingStatus: 'READY' } : null,
    baseline: { occurredAt: new Date().toISOString(), protocolVersion: '1', readiness, concern: input.concern },
  };
}
