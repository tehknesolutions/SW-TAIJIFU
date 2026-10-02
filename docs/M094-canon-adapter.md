# M094 — Canon snapshot importer / adapter

## Interface

```ts
interface CanonAdapter {
  readonly supportedRelease: string;
  load(): Promise<CanonSnapshot>;
}
```

## Deterministic flow
1. resolve configured pinned release;
2. read source snapshot artifacts;
3. parse without mutating source values;
4. normalize only transport concerns required by SW types;
5. validate through M095;
6. expose an immutable in-memory/read-model snapshot.

## Adapter rule
Storage format is hidden behind the adapter. Learning code does not know whether the source arrived from repository JSON, generated package or another approved distribution mechanism.

## Caching
A cache may store the resolved snapshot keyed by release, but cache invalidation never changes the configured release implicitly.

## No fallback canon
If loading fails, return a typed error such as `CANON_SOURCE_UNAVAILABLE`, `CANON_PARSE_FAILED` or `CANON_UNSUPPORTED_RELEASE`. Do not create synthetic Bases/Faixas/Caminhos/Núcleos to keep the UI alive.