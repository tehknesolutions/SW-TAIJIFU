# M092 — Canon release contract and pinned version

## Source of truth
SW-TAIJIFU consumes canon from `tehknesolutions/TAIJIFU-SITE`.

## Pinned V1 release
- release: `TAIJIFU-CANON-1.0`;
- expected topology: 4 Bases, 10 Faixas, 32 Caminhos, 128 Núcleos;
- source data is treated as immutable by SW.

## Ownership boundary
SW may create lessons, techniques, drills, assessments, mappings and learner telemetry that reference canonical IDs. It must not rewrite canonical names, relationships or identifiers inside its own product data and present them as canon.

## Compatibility
An adapter declares the canon release it supports. Loading another release requires explicit compatibility validation rather than silently assuming identical structure.

## Upgrade rule
A canon upgrade is an intentional product change: pin new release → validate → compare mappings → run integration tests → release. Existing learner records retain the canon version under which their references were resolved when historical traceability matters.

## Failure rule
If the configured release cannot be loaded or validated, canon-dependent learning surfaces fail explicitly. They must not manufacture replacement canon data.