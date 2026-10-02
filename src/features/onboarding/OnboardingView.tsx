import React, { useState } from 'react';

export function OnboardingView({ onComplete }: { onComplete: (input: { displayName: string; goal: string }) => void }) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Aprender os fundamentos do Taijifu');
  return <section className="panel flow"><p className="eyebrow">COMEÇAR</p><h1>Sua jornada começa aqui.</h1><p className="lead">Crie seu perfil local. Você poderá ajustar seu objetivo depois.</p><label>Como quer ser chamado?<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Praticante" /></label><label>Objetivo<input value={goal} onChange={(e) => setGoal(e.target.value)} /></label><button className="primary" onClick={() => onComplete({ displayName: name, goal })}>Continuar para baseline</button></section>;
}
