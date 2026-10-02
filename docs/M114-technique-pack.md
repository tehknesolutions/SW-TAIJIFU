# M114 — Technique Pack specification

## Purpose
Package everything required to teach and practice a technique while keeping source ownership explicit.

```ts
type TechniquePack = {
  id: string;
  version: number;
  technique: Technique;
  canonMappings: readonly SwCanonMapping[];
  pedagogicalBlocks?: readonly PedagogicalBlock[];
  demonstrationIds: readonly string[];
  drillIds: readonly string[];
  assessmentIds: readonly string[];
  safetyNotes: readonly string[];
  status: 'DRAFT' | 'REVIEW' | 'APPROVED' | 'DEPRECATED';
};
```

## Required content
- stable SW technique identity;
- objective and mechanics/checkpoints;
- safety/stop guidance;
- common errors;
- prerequisite references;
- at least one practice path;
- evidence/assessment link when mastery is supported;
- canon release/mapping trace where applicable.

## Asset rule
Animations, images or video are references to versioned assets, not embedded authority. A Technique Pack can remain instructionally valid with a textual/diagram fallback if optional demonstration assets are unavailable.

## Versioning
Material changes to mechanics, safety, prerequisites or assessment increment pack/content version and trigger compatibility review for historical evidence.