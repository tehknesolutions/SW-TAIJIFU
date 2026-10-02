import React from 'react';
import type { AppState } from '../../domain/types';
import { fundamentalStanceLesson } from '../../content/fundamentalStance';
import { getNextStep } from '../../domain/nextStep';

export function ProgressView({ state }: { state: AppState }) {
  const mastery = state.mastery.find((item) => item.lessonId === fundamentalStanceLesson.id);
  const next = getNextStep(state);
  return <section className="panel flow"><p className="eyebrow">PROGRESSO</p><h1>{mastery?.state ?? 'LEARNING'}</h1><p className="lead">{state.evidence.length} evidências registradas no seu histórico local.</p><div className="status-grid"><article><small>PRONTIDÃO</small><strong>{state.baseline?.readiness ?? 'PENDENTE'}</strong></article><article><small>ETAPAS</small><strong>{state.lessonRun?.completedStages.length ?? 0}/{fundamentalStanceLesson.stages.length}</strong></article><article><small>PRÓXIMO</small><strong>{next.title}</strong></article></div><div className="evidence-list"><h2>Evidências</h2>{state.evidence.length === 0 ? <p>Nenhuma evidência registrada ainda.</p> : state.evidence.slice().reverse().map((item) => <div className="evidence" key={item.id}><strong>{item.stage}</strong><span>{item.kind}</span></div>)}</div></section>;
}
