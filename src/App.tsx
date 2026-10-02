import React, { useEffect, useState } from 'react';
import type { AppState } from './domain/types';
import { loadState, saveState } from './storage/localState';
import { completeOnboarding } from './features/onboarding/onboarding';
import { completeBaseline } from './features/baseline/baseline';
import { OnboardingView } from './features/onboarding/OnboardingView';
import { BaselineView } from './features/baseline/BaselineView';
import { fundamentalStanceLesson } from './content/fundamentalStance';
import { completeStage, startLesson } from './features/lesson/lessonEngine';
import { LessonView } from './features/lesson/LessonView';
import { ProgressView } from './features/progress/ProgressView';
import { ProgressMapView } from './features/map/ProgressMapView';
import { getNextStep } from './domain/nextStep';

type View = 'home' | 'map' | 'train' | 'progress';

export function App() {
  const [view, setView] = useState<View>('home');
  const [state, setState] = useState<AppState>(() => loadState(window.localStorage));
  useEffect(() => saveState(window.localStorage, state), [state]);

  const enterTraining = () => {
    setView('train');
    if (state.profile && state.baseline && !state.lessonRun) setState((current) => startLesson(current, fundamentalStanceLesson));
  };

  const training = !state.profile ? <OnboardingView onComplete={(input) => setState((s) => completeOnboarding(s, input))} />
    : !state.baseline ? <BaselineView onComplete={(input) => setState((s) => completeBaseline(s, input))} />
    : <LessonView state={state.lessonRun ? state : startLesson(state, fundamentalStanceLesson)} lesson={fundamentalStanceLesson} onAdvance={(value) => setState((s) => completeStage(startLesson(s, fundamentalStanceLesson), fundamentalStanceLesson, value))} />;

  const next = getNextStep(state);
  return <main className="app-shell"><header className="topbar"><button className="brand" onClick={() => setView('home')}>SIMPLEWAY <strong>TAIJIFU</strong></button><nav aria-label="Navegação principal"><button onClick={() => setView('map')}>Mapa</button><button onClick={enterTraining}>Treinar</button><button onClick={() => setView('progress')}>Progresso</button></nav></header>
    {view === 'home' && <section className="hero"><p className="eyebrow">TAI · JI · FU</p><h1>Aprenda. Pratique. Integre.</h1><p className="lead">{state.profile ? `Olá, ${state.profile.displayName}. ${next.detail}` : next.detail}</p><div className="dashboard-card"><small>PRÓXIMO PASSO</small><strong>{next.title}</strong><span>{state.baseline?.readiness ?? 'BASELINE PENDENTE'} · {state.evidence.length} evidências</span></div><button className="primary hero-action" onClick={enterTraining}>{next.kind === 'CONTINUE_LESSON' ? 'Continuar aula' : next.kind === 'COMPLETE' ? 'Revisar treino' : 'Seguir jornada'}</button></section>}
    {view === 'train' && training}
    {view === 'map' && <ProgressMapView state={state} onTrain={enterTraining} />}
    {view === 'progress' && <ProgressView state={state} />}
  </main>;
}
