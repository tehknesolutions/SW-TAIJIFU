import type { AppState, MasteryRecord } from './types';

export function deriveMastery(state: AppState, lessonId: string): MasteryRecord {
  const evidence = state.evidence.filter((item) => item.lessonId === lessonId);
  const assessed = evidence.some((item) => item.kind === 'ASSESSMENT' && item.value === 'pass');
  const physical = evidence.filter((item) => ['EXECUTE', 'PRACTICE', 'APPLY'].includes(item.stage)).length;
  const blocked = state.baseline?.readiness === 'PAUSE_AND_REVIEW';
  const masteryState = blocked ? 'LEARNING' : assessed && physical >= 3 ? 'CONSISTENT' : evidence.length ? 'PRACTICING' : 'LEARNING';
  return { lessonId, state: masteryState, evidenceIds: evidence.map((item) => item.id), reasons: blocked ? ['Execução física bloqueada pela prontidão atual.'] : assessed ? ['Avaliação registrada com evidência de prática.'] : ['Continue acumulando prática e evidência.'] };
}
