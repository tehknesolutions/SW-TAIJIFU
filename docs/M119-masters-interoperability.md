# M119 — Taijifu Masters interoperability contract

## Goal
Allow SW-TAIJIFU and Taijifu Masters to share stable semantic references without making either product runtime depend on the other.

## Shared reference envelope
```ts
type TaijifuInteropRef = {
  schemaVersion: string;
  canonRelease: string;
  canonRefs: readonly CanonRef[];
  techniqueIds?: readonly string[];
  assetRefs?: readonly { id: string; version: number }[];
};
```

## Potential exchange
### SW → Masters
- canon context;
- approved technique identifiers;
- runtime demonstration/motion asset refs when compatible;
- optional learner-unlocked content entitlement, governed separately from mastery.

### Masters → SW
- optional application/challenge evidence explicitly designed for educational use;
- asset/runtime compatibility metadata;
- shared canonical navigation references.

## Non-goals
- game score does not automatically equal martial mastery;
- Masters does not rewrite SW assessment evidence;
- SW does not own game progression;
- neither product edits canon through interoperability.

## Compatibility
Every payload declares schema version and canon release. Unknown versions fail explicitly or degrade to safe read-only context.

## Principle
Share IDs and contracts, not databases. Products remain independently deployable and may evolve their runtime implementation while preserving agreed semantic interfaces.