import type{Evidence,LearningStage,MasteryState}from'../domain/types';
export type UnitEvidence=Evidence&{unitId:string;techniqueId:string;sessionId?:string};
export type UnitMastery={unitId:string;lessonId:string;state:MasteryState;evidenceIds:readonly string[];reasons:readonly string[]};
export function createUnitEvidence(input:{unitId:string;lessonId:string;techniqueId:string;sessionId?:string;stage:LearningStage;kind:Evidence['kind']}):UnitEvidence{return{id:`${input.unitId}-${input.kind.toLowerCase()}-${Date.now()}`,unitId:input.unitId,lessonId:input.lessonId,techniqueId:input.techniqueId,sessionId:input.sessionId,stage:input.stage,kind:input.kind,createdAt:new Date().toISOString()};}
export function createUnitMastery(unitId:string,lessonId:string,evidenceIds:readonly string[]):UnitMastery{return{unitId,lessonId,state:'MASTERED_FOR_LEVEL',evidenceIds:[...evidenceIds],reasons:['unit assessment completed']};}
export function completedLearningUnitIds(mastery:readonly UnitMastery[]):ReadonlySet<string>{return new Set(mastery.filter(m=>m.state==='MASTERED_FOR_LEVEL').map(m=>m.unitId));}
