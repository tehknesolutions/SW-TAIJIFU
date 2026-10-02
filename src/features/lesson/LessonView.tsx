import React, { useState } from 'react';
import type { AppState, LessonDefinition } from '../../domain/types';

export function LessonView({ state, lesson, onAdvance }: { state: AppState; lesson: LessonDefinition; onAdvance: (value?: string) => void }) {
  const [value, setValue] = useState(''); const run = state.lessonRun;
  if (!run) return null;
  if (run.status === 'COMPLETED') return <section className="panel flow"><p className="eyebrow">CONCLUÍDO</p><h1>{lesson.title}</h1><p className="lead">Primeiro ciclo registrado. Seu progresso foi salvo localmente.</p></section>;
  const current = lesson.stages[run.currentStageIndex];
  if (!current) return null;
  const blocked = current.physical && state.baseline?.readiness === 'PAUSE_AND_REVIEW';
  return <section className="panel flow"><p className="eyebrow">{current.stage} · {run.currentStageIndex + 1}/{lesson.stages.length}</p><h1>{current.title}</h1><p className="lead">{current.instruction}</p>{current.stage === 'REFLECT' && <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Sua reflexão..." />}{current.stage === 'ASSESS' && <div className="choice"><button onClick={() => setValue('retry')}>Quero repetir</button><button onClick={() => setValue('pass')}>Critérios atendidos</button></div>}{blocked ? <p className="notice">Execução física pausada pela prontidão atual. O conteúdo conceitual continua disponível.</p> : <button className="primary" onClick={() => onAdvance(value || undefined)} disabled={current.stage === 'ASSESS' && !value}>Registrar e continuar</button>}</section>;
}
