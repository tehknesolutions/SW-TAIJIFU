import React, { useState } from 'react';

type View = 'home' | 'map' | 'train' | 'progress';

const cards = [
  { title: 'Começar', text: 'Onboarding e baseline para preparar sua jornada.', target: 'train' as View },
  { title: 'Mapa Taijifu', text: 'Navegue pelo caminho de aprendizagem e veja o que vem depois.', target: 'map' as View },
  { title: 'Treino', text: 'Entre no primeiro ciclo guiado de prática.', target: 'train' as View },
  { title: 'Progresso', text: 'Acompanhe evidências, consistência e próximos passos.', target: 'progress' as View },
];

export function App() {
  const [view, setView] = useState<View>('home');

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')}>SIMPLEWAY <strong>TAIJIFU</strong></button>
        <nav aria-label="Navegação principal">
          <button onClick={() => setView('map')}>Mapa</button>
          <button onClick={() => setView('train')}>Treinar</button>
          <button onClick={() => setView('progress')}>Progresso</button>
        </nav>
      </header>

      {view === 'home' && (
        <section className="hero">
          <p className="eyebrow">TAI · JI · FU</p>
          <h1>Aprenda. Pratique. Integre.</h1>
          <p className="lead">A camada de ensino e treinamento do Taijifu começa agora a sair do roadmap e virar uma experiência executável.</p>
          <div className="grid">
            {cards.map((card) => (
              <button className="card" key={card.title} onClick={() => setView(card.target)}>
                <span>{card.title}</span>
                <small>{card.text}</small>
              </button>
            ))}
          </div>
        </section>
      )}

      {view === 'map' && <Placeholder title="Mapa Taijifu" text="Próximo slice: canon + progressão + pré-requisitos." />}
      {view === 'train' && <Placeholder title="Treino" text="Próximo slice: onboarding, baseline e Fundamental Stance." />}
      {view === 'progress' && <Placeholder title="Progresso" text="Próximo slice: histórico, mastery e próximo passo." />}
    </main>
  );
}

function Placeholder({ title, text }: { title: string; text: string }) {
  return (
    <section className="panel">
      <p className="eyebrow">V1 RUNTIME</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </section>
  );
}
