import type { AppState, LearningStage } from './types';
import { fundamentalStanceLesson } from '../content/fundamentalStance';

export type RuntimeNextStep = {
  kind: 'ONBOARD' | 'BASELINE' | 'REVIEW' | 'START_LESSON' | 'CONTINUE_LESSON' | 'COMPLETE';
  title: string;
  detail: string;
  stage?: LearningStage;
};

export function getNextStep(state: AppState): RuntimeNextStep {
  if (!state.profile) return { kind: 'ONBOARD', title: 'Criar perfil', detail: 'Defina seu objetivo para iniciar a jornada.' };
  if (!state.baseline) return { kind: 'BASELINE', title: 'Fazer baseline', detail: 'Registre sua prontidão antes da primeira prática.' };
  if (state.baseline.readiness === 'PAUSE_AND_REVIEW') return { kind: 'REVIEW', title: 'Revisar prontidão', detail: 'A execução física está pausada. Conteúdo conceitual continua disponível.' };
  if (!state.lessonRun) return { kind: 'START_LESSON', title: fundamentalStanceLesson.title, detail: 'Inicie a primeira unidade prática.' };
  if (state.lessonRun.status === 'COMPLETED') return { kind: 'COMPLETE', title: 'Revisar e consolidar', detail: 'Seu primeiro ciclo foi registrado. Revise evidências e consolide a prática.' };
  const stage = fundamentalStanceLesson.stages[state.lessonRun.currentStageIndex];
  return { kind: 'CONTINUE_LESSON', title: stage?.title ?? 'Continuar', detail: stage?.instruction ?? 'Continue sua unidade atual.', stage: stage?.stage };
}
