# M021–M027 Delivery Ledger

This delivery implements seven M units from the repository's existing source corpus.

| M | Issue | Source | Runtime/content result |
|---|---|---|---|
| M021 | #152 | docs/M021-warmup-protocol.md | 7-minute warm-up content + four timed phases |
| M022 | #153 | docs/M022-fundamental-mobility.md | mobility drills and controlled progression |
| M023 | #154 | docs/M023-fundamental-conditioning.md | conditioning circuit with 2-round baseline and round engine support |
| M024 | #155 | docs/M024-fundamental-core.md | core drill set with two-series session |
| M025 | #156 | docs/M025-post-training-recovery.md | five-minute cooldown + reflection |
| M026 | #157 | docs/M026-neutral-stance.md | neutral stance technique + quality test prompt |
| M027 | #158 | docs/M027-fundamental-guard.md | guard technique + 3 × 30s drill structure |

## Canon/source discipline

All seven M units are derived directly from the corresponding repository documents. No additional technique names or mechanics were invented.

## Runtime extension

R004 extends the TrainingSessionDefinition with optional `rounds` and `repeatFromBlockIndex`, allowing source-defined series/circuit structure without changing the learner session state contract.

## Verification boundary

Content and runtime tests are committed. This connector session does not execute npm commands, so no local/CI pass is claimed.
