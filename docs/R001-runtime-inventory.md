# R001 — Runtime inventory

## Finding
The integrated `release/M120-simpleway-taijifu-v1` tree contains the README and the M001–M120 documentation/specification corpus, but no executable application foundation was identified: no `package.json`, `src/`, `app/`, Next/Vite configuration or equivalent runtime entrypoint was found.

This confirms the M120 distinction:
- roadmap/specification: complete in the stacked branch history;
- executable runtime: not yet implemented;
- deployed release: not yet implemented.

## Existing assets
The repository already contains detailed product material for:
- safety and baseline;
- physical preparation;
- stance, movement, striking and defense;
- sessions and assessment;
- canon integration contracts;
- Learning Engine contracts;
- Learner Application contracts;
- Taijifu Experience contracts;
- M120 acceptance/release gate.

## Runtime strategy
Start with the smallest dependency-light web foundation possible. V1 runtime work should convert specifications into code incrementally while preserving the existing M → evidence discipline.

## Initial executable slices
1. application shell and navigation;
2. typed domain layer for learner/lesson/mastery;
3. local persistence adapter for first vertical slice;
4. Fundamental Stance structured content;
5. onboarding + baseline screens;
6. lesson/session player;
7. assessment/mastery/next-step loop;
8. canon adapter integration;
9. automated tests and release verification.

## Constraint
A screen or type is not considered complete merely because its contract exists in Markdown. Runtime milestones require executable source plus verification evidence.