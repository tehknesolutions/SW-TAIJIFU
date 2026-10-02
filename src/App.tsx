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

  const mastery = state.mastery.find((item) => item.lessonId === fundamentalStanceLesson.id);
  return <main className="app-shell"><header className="topbar"><button className="brand" onClick={() => setView('home')}>SIMPLEWAY <strong>TAIJIFU</strong></button><nav aria-label="Navegação principal"><button onClick={() => setView('map')}>Mapa</button><button onClick={enterTraining}>Treinar</button><button onClick={() => setView('progress')}>Progresso</button></nav></header>
    {view === 'home' && <section className="hero"><p className="eyebrow">TAI · JI · FU</p><h1>Aprenda. Pratique. Integre.</h1><p className="lead">{state.profile ? `Olá, ${state.profile.displayName}. ${state.lessonRun ? 'Continue exatamente de onde parou.' : 'Seu primeiro ciclo está pronto.'}` : 'Comece pelo onboarding e transforme os fundamentos em prática registrada.'}</p><button className="primary hero-action" onClick={enterTraining}>{state.profile ? 'Continuar jornada' : 'Começar agora'}</button></section>}
    {view === 'train' && training}
    {view === 'map' && <Placeholder title="Mapa Taijifu" text="A integração canônica completa entra no próximo slice. Seu progresso local já está separado do canon." />}
    {view === 'progress' && <section className="panel flow"><p className="eyebrow">PROGRESSO</p><h1>{mastery?.state ?? 'LEARNING'}</h1><p className="lead">{state.evidence.length} evidências registradas. {mastery?.reasons[0] ?? 'Comece sua primeira unidade.'}</p></section>}
  </main>;
}

function Placeholder({ title, text }: { title: string; text: string }) { return <section className="panel"><p className="eyebrow">V1 RUNTIME</p><h1>{title}</h1><p className="lead">{text}</p></section>; }
