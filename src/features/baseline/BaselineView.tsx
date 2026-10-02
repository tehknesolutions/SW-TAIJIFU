import React, { useState } from 'react';

export function BaselineView({ onComplete }: { onComplete: (input: { concern: boolean; needsModification: boolean }) => void }) {
  const [concern, setConcern] = useState(false);
  const [modify, setModify] = useState(false);
  return <section className="panel flow"><p className="eyebrow">BASELINE</p><h1>Defina sua prontidão.</h1><p className="lead">Registre como você quer iniciar a prática. Você pode pausar a execução física e continuar o conteúdo conceitual.</p><label className="check"><input type="checkbox" checked={concern} onChange={(e) => setConcern(e.target.checked)} /> Pausar execução física por enquanto.</label><label className="check"><input type="checkbox" checked={modify} onChange={(e) => setModify(e.target.checked)} /> Começar com intensidade reduzida.</label><button className="primary" onClick={() => onComplete({ concern, needsModification: modify })}>Salvar baseline</button></section>;
}
