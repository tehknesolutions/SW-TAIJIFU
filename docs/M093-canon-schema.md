# M093 — Canon schema and types

## Read-only domain types

```ts
type CanonId = string;

type CanonBase = {
  id: CanonId;
  name: string;
};

type CanonFaixa = {
  id: CanonId;
  name: string;
  order: number;
};

type CanonCaminho = {
  id: CanonId;
  name: string;
  faixaId: CanonId;
  nucleoIds: readonly CanonId[];
};

type CanonNucleo = {
  id: CanonId;
  name: string;
  baseId?: CanonId;
};

type CanonSnapshot = {
  release: string;
  bases: readonly CanonBase[];
  faixas: readonly CanonFaixa[];
  caminhos: readonly CanonCaminho[];
  nucleos: readonly CanonNucleo[];
};
```

## Contract
These are SW projection types, not authority to alter the canon. Fields may be extended only when supported by the pinned source or clearly namespaced as SW-derived metadata.

## Identity
Canonical IDs are stable references. Display names are not used as foreign keys.

## Relationships
Caminho → Núcleo and other canonical relationships must be resolved by IDs from the source snapshot. Product-specific prerequisite or lesson relationships live outside these types.