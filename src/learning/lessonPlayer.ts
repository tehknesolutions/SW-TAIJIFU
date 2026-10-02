import type{LearningStage}from'../domain/types';
export const lessonStageOrder:readonly LearningStage[]=['UNDERSTAND','OBSERVE','PREPARE','EXECUTE','PRACTICE','APPLY','REFLECT','ASSESS'];
export type LessonPlayerState={lessonId:string;stageIndex:number;status:'READY'|'IN_PROGRESS'|'COMPLETED'|'BLOCKED';evidenceIds:readonly string[]};
export function startLesson(lessonId:string):LessonPlayerState{return{lessonId,stageIndex:0,status:'IN_PROGRESS',evidenceIds:[]};}
export function advanceLesson(s:LessonPlayerState,evidenceId:string):LessonPlayerState{const next=s.stageIndex+1;return{...s,stageIndex:next,evidenceIds:[...s.evidenceIds,evidenceId],status:next>=lessonStageOrder.length?'COMPLETED':'IN_PROGRESS'};}
export function currentLessonStage(s:LessonPlayerState):LearningStage|undefined{return lessonStageOrder[s.stageIndex];}
