# M098 — Canon integration tests and documentation

## Acceptance suite
A Canon Integration implementation is complete only when automated or executable contract tests prove the following.

### Release
- configured release is `TAIJIFU-CANON-1.0`;
- adapter reports the same supported release;
- another unsupported release fails explicitly.

### Integrity
- valid snapshot produces 4 Bases, 10 Faixas, 32 Caminhos and 128 Núcleos;
- duplicate ID fixture fails;
- broken reference fixture fails;
- count mismatch fixture fails;
- missing required field fixture fails.

### Query
- entities can be resolved by canonical ID;
- Caminhos can be navigated from Faixa context;
- Núcleos referenced by a Caminho resolve deterministically;
- unknown IDs never create placeholder canon entities.

### Mapping
- valid SW mappings resolve all canon refs;
- mapping with unknown canon ref fails validation;
- mapping changes never mutate the loaded snapshot.

### Immutability
- consumers receive read-only projections/contracts;
- tests verify source snapshot values remain unchanged after query and mapping operations.

## Documentation gate
The repository must state source repo, pinned release, ownership boundary, upgrade process and explicit failure behavior.

## Sprint completion
M092–M098 establish the contract layer. The next sprint may implement Learning Engine entities against this boundary without coupling to raw canon storage.