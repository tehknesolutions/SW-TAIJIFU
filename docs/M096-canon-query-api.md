# M096 — Canon navigation and query API

## Purpose
Learning/UI code navigates a read-only canon service instead of traversing raw snapshot storage directly.

```ts
interface CanonQuery {
  getRelease(): string;
  listBases(): readonly CanonBase[];
  listFaixas(): readonly CanonFaixa[];
  getFaixa(id: CanonId): CanonFaixa | null;
  listCaminhos(): readonly CanonCaminho[];
  listCaminhosByFaixa(faixaId: CanonId): readonly CanonCaminho[];
  getCaminho(id: CanonId): CanonCaminho | null;
  listNucleos(): readonly CanonNucleo[];
  getNucleo(id: CanonId): CanonNucleo | null;
  resolveCaminhoNucleos(caminhoId: CanonId): readonly CanonNucleo[];
}
```

## Rules
- return canonical ordering where the source defines ordering;
- unknown IDs return `null`/empty result rather than fabricated entities;
- API is read-only;
- filtering does not change entity identity;
- UI labels come from the snapshot unless a clearly separate localization/presentation layer is applied.

## Future compatibility
New query methods may be added for richer canon releases without forcing learning code to depend on the raw transport schema.