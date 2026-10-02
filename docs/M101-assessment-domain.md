# M101 — Assessment model and evidence

## Assessment

```ts
type Assessment = {
  id: string;
  title: string;
  criterionIds: readonly string[];
  passRule: AssessmentPassRule;
  safetyCriticalCriterionIds: readonly string[];
};

type AssessmentCriterion = {
  id: string;
  description: string;
  evidenceType: 'SELF_REPORT' | 'COUNT' | 'DURATION' | 'RUBRIC' | 'TEACHER_OBSERVATION';
  required: boolean;
};

type AssessmentAttempt = {
  id: string;
  assessmentId: string;
  learnerId: string;
  occurredAt: string;
  evidence: readonly AssessmentEvidence[];
  result: 'PASS' | 'RETRY' | 'BLOCKED';
};
```

## Rules
- evidence belongs to learner runtime data;
- assessment definitions belong to SW;
- canon references are mappings, not assessment fields injected into canon;
- safety-critical failure cannot be compensated by a high aggregate score;
- a retry preserves previous attempts for longitudinal progress;
- assessments must state what evidence is sufficient before execution.

## Examples
M084 can later become a structured assessment with block-level rubric evidence. M091 can consume assessment/reassessment evidence as a graduation gate.