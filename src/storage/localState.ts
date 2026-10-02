import { createInitialState } from '../domain/state';
import type { AppState } from '../domain/types';

export const STORAGE_KEY = 'simpleway-taijifu:v1';
export type StoragePort = Pick<Storage, 'getItem' | 'setItem'>;

export function loadState(storage: StoragePort): AppState {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw) as Partial<AppState>;
    if (parsed.schemaVersion !== 1 || !Array.isArray(parsed.evidence) || !Array.isArray(parsed.mastery)) return createInitialState();
    return parsed as AppState;
  } catch {
    return createInitialState();
  }
}

export function saveState(storage: StoragePort, state: AppState): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}
