export type AssessmentCriterion={id:string;label:string;required:boolean};
export type AssessmentAttempt={id:string;assessmentId:string;occurredAt:string;evidenceIds:readonly string[];criterionResults:Readonly<Record<string,boolean>>;readiness:'READY'|'MODIFY'|'PAUSE_AND_REVIEW'};
export type Assessment={id:string;version:number;lessonId:string;criteria:readonly AssessmentCriterion[]};
export function assessmentPassed(a:Assessment,attempt:AssessmentAttempt):boolean{return a.criteria.filter(c=>c.required).every(c=>attempt.criterionResults[c.id]===true)&&attempt.readiness!=='PAUSE_AND_REVIEW';}
