import type{BaselineRecord,LearnerProfile}from'../domain/types';
export type LearningSeed={learnerId:string;goal:string;readiness:BaselineRecord['readiness'];baselineProtocol:string;initialEvidenceId?:string};
export function seedLearningEngine(profile:LearnerProfile,baseline:BaselineRecord,evidenceId?:string):LearningSeed{return{learnerId:profile.id,goal:profile.goal,readiness:baseline.readiness,baselineProtocol:baseline.protocolVersion,initialEvidenceId:evidenceId};}
