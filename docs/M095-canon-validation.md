# M095 — Canon integrity validation

## Validation result

```ts
type CanonValidation = {
  ok: boolean;
  errors: readonly CanonValidationError[];
};
```

## V1 checks
For `TAIJIFU-CANON-1.0` validate at minimum:
- release identifier matches configuration;
- exactly 4 Bases;
- exactly 10 Faixas;
- exactly 32 Caminhos;
- exactly 128 Núcleos;
- canonical IDs are non-empty and unique within their entity domain;
- every referenced ID resolves;
- each Caminho contains the canonical Núcleo references supplied by the source;
- required names/ordering fields used by navigation are present;
- no SW-owned metadata is injected into the source snapshot during validation.

## Errors
Recommended codes:
- `RELEASE_MISMATCH`;
- `COUNT_MISMATCH`;
- `DUPLICATE_ID`;
- `BROKEN_REFERENCE`;
- `MISSING_REQUIRED_FIELD`;
- `UNSUPPORTED_RELEASE`.

## Gate
A snapshot with integrity errors is not exposed as valid canon to downstream learning features.