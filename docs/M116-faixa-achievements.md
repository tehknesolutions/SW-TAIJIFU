# M116 — Faixa and achievement progression presentation

## Principle
Canonical Faixa is navigation/context from the pinned canon release. SW achievement/mastery is learner evidence owned by the product. The UI may present them together but must not conflate them.

## Model
```ts
type LearnerAchievement = {
  id: string;
  learnerId: string;
  achievementType: 'LESSON' | 'PRACTICE' | 'ASSESSMENT' | 'LEVEL_GATE' | 'CONSISTENCY';
  earnedAt: string;
  evidenceIds: readonly string[];
  canonContext?: readonly CanonRef[];
};
```

## Presentation
A Faixa view may show:
- canonical name/order/context;
- mapped Caminhos/Núcleos;
- learner mastery across mapped SW units;
- earned SW achievements;
- missing prerequisites and next eligible work.

## Rules
- an achievement never edits the Faixa;
- percentage is optional summary, not proof of mastery;
- `MASTERED_FOR_LEVEL` requires M103 evidence rules;
- ceremonial or official rank claims require an explicit product/governance rule and are not inferred merely from screen completion;
- historical achievements retain content/canon trace.