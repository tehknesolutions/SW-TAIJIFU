import type { AppState } from './types';

export const SCHEMA_VERSION = 1 as const;
export function createInitialState(): AppState {
  return { schemaVersion: SCHEMA_VERSION, profile: null, baseline: null, lessonRun: null, evidence: [], mastery: [] };
}
