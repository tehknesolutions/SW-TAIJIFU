import type { AppState, Evidence, LessonDefinition } from '../../domain/types';
import { deriveMastery } from '../../domain/mastery';

export function startLesson(state: AppState, lesson: LessonDefinition): AppState {
  if (state.lessonRun?.lessonId === lesson.id) return state;
  return { ...state, lessonRun: { lessonId: lesson.id, lessonVersion: lesson.version, currentStageIndex: 0, completedStages: [], evidenceIds: [], status: 'IN_PROGRESS' } };
}

export function completeStage(state: AppState, lesson: LessonDefinition, value?: string): AppState {
  const run = state.lessonRun;
  if (!run) return state;
  const definition = lesson.stages[run.currentStageIndex];
  if (!definition) return state;
  if (definition.physical && state.baseline?.readiness === 'PAUSE_AND_REVIEW') return { ...state, lessonRun: { ...run, status: 'BLOCKED' } };
  if (run.completedStages.includes(definition.stage)) return state;
  const kind: Evidence['kind'] = definition.stage === 'REFLECT' ? 'REFLECTION' : definition.stage === 'ASSESS' ? 'ASSESSMENT' : 'COMPLETION';
  const evidence: Evidence = { id: crypto.randomUUID(), lessonId: lesson.id, stage: definition.stage, kind, value, createdAt: new Date().toISOString() };
  const nextIndex = run.currentStageIndex + 1;
  const completed = nextIndex >= lesson.stages.length;
  const next: AppState = { ...state, evidence: [...state.evidence, evidence], lessonRun: { ...run, currentStageIndex: nextIndex, completedStages: [...run.completedStages, definition.stage], evidenceIds: [...run.evidenceIds, evidence.id], status: completed ? 'COMPLETED' : 'IN_PROGRESS' } };
  const mastery = deriveMastery(next, lesson.id);
  return { ...next, mastery: [...next.mastery.filter((item) => item.lessonId !== lesson.id), mastery] };
}
