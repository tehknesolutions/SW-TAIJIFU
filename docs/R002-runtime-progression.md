# R002 — Learner experience and runtime progression

## Rule of execution
SW-TAIJIFU development must not stop because a local machine, GitHub Actions, paid service or external tool is unavailable. GitHub + GPT remain sufficient to continue product construction. Optional execution/CI infrastructure may add evidence later but is not a roadmap dependency.

## Delivered
- deterministic `getNextStep()` projection from learner state;
- readiness-aware Home dashboard with next action;
- functional SW pedagogical progression map for Fundamental Stance;
- functional progress surface with readiness, completed stages, next step and evidence history;
- exact current-stage continuation derived from persisted lesson state;
- repository tests specifying next-step behavior.

## Product boundary
The current map is explicitly the SimpleWay pedagogical layer. It does not fabricate canonical Taijifu hierarchy while the full canon runtime adapter remains pending.

## Next runtime targets
1. expand structured lesson catalog beyond Fundamental Stance;
2. introduce reusable Session/Drill runtime blocks;
3. implement timers/round/repetition state as pure runtime contracts;
4. connect multiple learning units to the map;
5. progressively introduce canon mappings without coupling learner state to canon storage.