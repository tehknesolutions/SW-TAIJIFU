# M115 — Character and motion integration foundation

## Runtime asset contract
```ts
type RuntimeMotionAsset = {
  id: string;
  version: number;
  characterRigId: string;
  motionId: string;
  orientation: 'LEFT' | 'RIGHT' | 'NEUTRAL';
  pivotContract: string;
  scaleContract: string;
  reviewStatus: 'CANDIDATE' | 'REVIEWED' | 'APPROVED' | 'REJECTED';
};
```

## Production gate
Reuse the wider Taijifu asset principle:
`candidate → review → import → runtime bench → PASS/FAIL`.

SW consumes only assets that satisfy its required runtime contract. Concept sheets or visually attractive composites are not automatically valid runtime demonstrations.

## Required checks
- stable identity/rig reference;
- orientation known;
- consistent pivot/grounding;
- scale compatible with player viewport;
- motion continuity at intended playback speed;
- no unexpected cropping that hides technique checkpoints;
- approved status before default learner use.

## Fallback
When an asset is unavailable or fails validation, the Lesson Player uses instruction/checkpoint content rather than blocking the entire lesson.

## Separation
Character appearance and motion assets are versioned production resources. They reference Technique IDs but do not own technique semantics or canon.