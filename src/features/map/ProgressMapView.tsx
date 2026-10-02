import React from 'react';
import type { AppState } from '../../domain/types';
import { fundamentalStanceLesson } from '../../content/fundamentalStance';

export function ProgressMapView({ state, onTrain }: { state: AppState; onTrain: () => void }) {
  const completed = new Set(state.lessonRun?.completedStages ?? []);
  const current = state.lessonRun?.currentStageIndex ?? 0;
  return <section className="panel flow"><p className="eyebrow">MAPA TAIJIFU · SW</p><h1>Primeiro Caminho</h1><p className="lead">Este mapa representa progressão pedagógica SimpleWay. A camada canônica completa continua separada até a integração do adapter.</p><div className="path">{fundamentalStanceLesson.stages.map((stage, index) => { const status = completed.has(stage.stage) ? 'done' : index === current && state.lessonRun ? 'current' : 'locked'; return <article className={`path-node ${status}`} key={stage.stage}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{stage.stage}</small><strong>{stage.title}</strong></div></article>; })}</div><button className="primary" onClick={onTrain}>{state.lessonRun ? 'Continuar caminho' : 'Iniciar caminho'}</button></section>;
}
