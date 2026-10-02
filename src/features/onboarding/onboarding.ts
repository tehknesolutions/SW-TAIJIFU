import type { AppState } from '../../domain/types';

export function completeOnboarding(state: AppState, input: { displayName: string; goal: string }): AppState {
  return {
    ...state,
    profile: {
      id: crypto.randomUUID(),
      displayName: input.displayName.trim() || 'Praticante',
      goal: input.goal,
      onboardingStatus: 'BASELINE_REQUIRED',
    },
  };
}
