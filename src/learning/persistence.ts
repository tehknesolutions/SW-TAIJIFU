import type{AppState,LessonRun,TrainingSessionRun,MasteryRecord}from'../domain/types';
export type AssessmentAttempt={id:string;assessmentId:string;occurredAt:string;evidenceIds:readonly string[];criterionResults:Readonly<Record<string,boolean>>;readiness:'READY'|'MODIFY'|'PAUSE_AND_REVIEW'};
export type HistoryEntry={occurredAt:string;kind:'LESSON'|'SESSION'|'ASSESSMENT'|'MASTERY';contentVersion:string;id:string};
export type LongitudinalHistory={entries:readonly HistoryEntry[];lessonRuns:readonly LessonRun[];trainingRuns:readonly TrainingSessionRun[];assessmentAttempts:readonly AssessmentAttempt[];mastery:readonly MasteryRecord[]};
export function createHistory(state:AppState,attempts:readonly AssessmentAttempt[]=[],entries:readonly HistoryEntry[]=[]):LongitudinalHistory{return{entries:[...entries],lessonRuns:state.lessonRun?[state.lessonRun]:[],trainingRuns:state.trainingRun?[state.trainingRun]:[],assessmentAttempts:[...attempts],mastery:[...state.mastery]};}
