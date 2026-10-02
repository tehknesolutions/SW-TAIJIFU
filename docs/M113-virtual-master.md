# M113 — Virtual Master demonstration contract

## Purpose
Provide a presentation layer for observing techniques without turning character assets into canon or requiring them for conceptual access.

```ts
type Demonstration = {
  id: string;
  techniqueId: string;
  assetPackId: string;
  motionId: string;
  supportedViews: readonly ('FRONT' | 'SIDE' | 'MIRRORED')[];
  speedModes: readonly ('NORMAL' | 'SLOW')[];
  checkpoints: readonly DemonstrationCheckpoint[];
};
```

## Player capabilities
- play/pause/replay;
- normal and slow playback when asset supports it;
- front/side views where authored;
- mirrored presentation for follow-along practice;
- step/checkpoint annotations;
- return to lesson without losing progress.

## Boundaries
- Virtual Master is a demonstrator, not canonical authority;
- instructional text and safety rules remain available if assets fail;
- a missing animation never authorizes synthetic technique mechanics;
- demonstrations reference SW Technique IDs and optional canon mappings;
- presentation must distinguish illustrative motion from assessed learner evidence.

## Accessibility
Textual checkpoints must exist independently from animation so the learning unit does not depend exclusively on visual motion.