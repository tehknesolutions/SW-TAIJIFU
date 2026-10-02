# SimpleWay Taijifu

SimpleWay Taijifu é a plataforma/metodologia de ensino do sistema Taijifu.

## Estado

- M001–M120: roadmap/specification corpus.
- R001/R001.1: runtime web + primeiro learner slice.
- R002: learner dashboard, mapa e próximo passo.
- R003: Training Runtime com Technique → Drill → Session → Evidence → Progress.
- `V1_RUNTIME_COMPLETE` e `V1_RELEASED` continuam dependentes dos gates definidos em M120.

## R003 Training Runtime

O primeiro pacote físico executável é `Fundamentos 01`:

Base Fundamental → Guarda Fundamental → Deslocamento Fundamental → Golpe Reto Fundamental controlado/não-contato.

O runtime suporta estado de sessão, repetições, blocos temporizados, descanso, pause/resume/stop, readiness, evidência e persistência.

## Regra de desenvolvimento

GitHub + GPT continuam suficientes para manter o desenvolvimento avançando. Execução local, GitHub Actions, serviços pagos e ferramentas externas são auxiliares opcionais e não bloqueiam o roadmap.

## Convenção

`M/R → Issue → Branch → Implementação/Conteúdo → Evidência → PR → Merge → DONE`
