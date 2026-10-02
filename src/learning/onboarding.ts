export type LearnerGoal='HEALTH'|'TECHNIQUE'|'FITNESS'|'EXPLORATION';
export type LearnerOnboarding={learnerId:string;displayName:string;goal:LearnerGoal;consent:boolean;baselineStatus:'BASELINE_REQUIRED'|'READY'};
export function completeOnboarding(input:Omit<LearnerOnboarding,'baselineStatus'>):LearnerOnboarding{return{...input,baselineStatus:'BASELINE_REQUIRED'};}
