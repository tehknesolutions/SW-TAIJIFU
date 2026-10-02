import type{TrainingSessionDefinition}from'../content/trainingTypes';import type{TrainingSessionRun}from'../domain/types';
export function createSessionRun(session:TrainingSessionDefinition):TrainingSessionRun{return{sessionId:session.id,sessionVersion:session.version,status:'READY',currentBlockIndex:0,currentRound:1,completedReps:0,evidenceIds:[]};}
export function sessionComplete(run:TrainingSessionRun,session:TrainingSessionDefinition):boolean{return run.status==='COMPLETED'||(run.currentBlockIndex>=session.blocks.length-1&&(session.rounds??1)<=run.currentRound&&run.status!=='STOPPED');}
