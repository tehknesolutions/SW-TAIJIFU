# M097 — SW-to-canon mapping contract

## Purpose
Connect product-owned educational/training objects to canon without modifying canon entities.

```ts
type SwCanonMapping = {
  swEntityType: 'lesson' | 'technique' | 'drill' | 'practice' | 'assessment';
  swEntityId: string;
  canonRelease: string;
  canonRefs: readonly {
    entityType: 'base' | 'faixa' | 'caminho' | 'nucleo';
    id: CanonId;
    relation: 'teaches' | 'practices' | 'assesses' | 'supports' | 'context';
  }[];
};
```

## Rules
- mappings are owned/versioned by SW;
- every canonical reference must resolve against the pinned release;
- mappings may be many-to-many;
- deleting/changing an SW lesson does not alter canon;
- changing canon release requires mapping validation/migration;
- learner progress references both SW entity identity and relevant canon release/ref where needed for traceability.

## Example
A stance lesson can `teach` an SW technique while `supporting` one or more canonical Núcleos. The pedagogical association is an SW interpretation and is stored as mapping data, not injected into the Núcleo itself.