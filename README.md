# SimpleWay Taijifu

SimpleWay Taijifu é a plataforma/metodologia de ensino do sistema Taijifu.

## Estado

- M001–M120: roadmap/specification corpus.
- R001: runtime web executável iniciado.
- Primeiro slice funcional: onboarding → baseline → Fundamental Stance → evidência/mastery → persistência local → continuidade após reload.
- `V1_RUNTIME_COMPLETE` e `V1_RELEASED` ainda dependem dos gates definidos em M120.

## Runtime

Stack: React + TypeScript + Vite. Estado do primeiro vertical slice é local-first e versionado no `localStorage`.

```bash
npm install
npm run dev
npm test
npm run build
```

## Regras de domínio preservadas

- canon e progresso do aluno são responsabilidades separadas;
- readiness pode bloquear execução física sem bloquear conteúdo conceitual;
- mastery deriva de evidência, não de porcentagem de telas;
- conteúdo de aula é estruturado/versionado, separado do estado persistido;
- storage inválido ou de versão incompatível volta para estado inicial seguro.

## Convenção de entrega

Cada M/R é uma entrega atômica, verificável e versionável.

`M/R → Issue → Branch → Implementação/Conteúdo → Evidência → PR → Merge → DONE`
