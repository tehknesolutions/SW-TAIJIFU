# SimpleWay Taijifu

SimpleWay Taijifu é a plataforma/metodologia de ensino do sistema Taijifu.

## Estado

- M001–M120: roadmap/specification corpus.
- R001/R001.1: runtime web + primeiro learner slice.
- R002: learner dashboard, mapa e próximo passo.
- R003: Training Runtime com Technique → Drill → Session → Evidence → Progress.
- R004: versioned physical-training catalog boundary; new executable canon remains source-pending until supported by project material.
- `V1_RUNTIME_COMPLETE` e `V1_RELEASED` continuam dependentes dos gates definidos em M120.

## R003 Training Runtime

O primeiro pacote físico executável é `Fundamentos 01`:

Base Fundamental → Guarda Fundamental → Deslocamento Fundamental → Golpe Reto Fundamental controlado/não-contato.

O runtime suporta estado de sessão, repetições, blocos temporizados, descanso, pause/resume/stop, readiness, evidência e persistência.

## R004 Training Catalog

O catálogo agora separa explicitamente:
- conteúdo confirmado e executável;
- conteúdo ainda dependente de fonte/canon;
- sessões compostas a partir do conteúdo confirmado.

Nenhuma técnica nova é promovida a canon sem suporte explícito nas fontes do projeto.

## Regra de desenvolvimento

GitHub + GPT continuam suficientes para manter o desenvolvimento avançando. Execução local, GitHub Actions, serviços pagos e ferramentas externas são auxiliares opcionais e não bloqueiam o roadmap.

## Convenção

`M/R → Issue → Branch → Implementação/Conteúdo → Evidência → PR → Merge → DONE`
