import type { AppState, Evidence, TrainingSessionRun } from '../../domain/types';
import type { TrainingSessionDefinition, SessionBlock } from '../../content/trainingTypes';
import { drills } from '../../content/fundamentalTrainingPack';
import { canExecutePhysicalBlock } from './trainingGuards';

function current(state:AppState,session:TrainingSessionDefinition):SessionBlock|undefined{return session.blocks[state.trainingRun?.currentBlockIndex??0];}
function activeDrill(block:SessionBlock){return block.type==='DRILL'?drills.find(d=>d.id===block.drillId):undefined;}
function addEvidence(state:AppState,session:TrainingSessionDefinition,blockIndex:number,kind:'COMPLETION'|'REFLECTION',drillId?:string):AppState{
 const e:Evidence={id:crypto.randomUUID(),lessonId:session.id,stage:'PRACTICE',kind,value:String(blockIndex),createdAt:new Date().toISOString(),sessionId:session.id,blockIndex,drillId};
 return {...state,evidence:[...state.evidence,e]};
}
export function startTraining(state:AppState,session:TrainingSessionDefinition):AppState{
 if(state.trainingRun?.sessionId===session.id && state.trainingRun.status!=='STOPPED')return state;
 return {...state,trainingRun:{sessionId:session.id,sessionVersion:session.version,status:'READY',currentBlockIndex:0,currentRound:1,completedReps:0,evidenceIds:[]}};
}
export function startBlock(state:AppState,session:TrainingSessionDefinition):AppState{
 const run=state.trainingRun;if(!run||run.status==='STOPPED'||run.status==='COMPLETED')return state;
 const block=current(state,session);
 if(block?.type==='DRILL'&&!canExecutePhysicalBlock(state))return state;
 const drill=activeDrill(block??{type:'INSTRUCTION',title:'',text:''});
 const remaining=block?.type==='REST'?block.seconds:drill?.mode==='TIMED'?drill.target:undefined;
 return {...state,trainingRun:{...run,status:'RUNNING',remainingSeconds:remaining}};
}
export function completeRepetition(state:AppState,session:TrainingSessionDefinition):AppState{
 const run=state.trainingRun;const block=current(state,session);const drill=activeDrill(block??{type:'INSTRUCTION',title:'',text:''});
 if(!run||!drill||drill.mode!=='REPS'||run.status!=='RUNNING'||!canExecutePhysicalBlock(state))return state;
 const reps=Math.min(drill.target,run.completedReps+1);
 return {...state,trainingRun:{...run,completedReps:reps}};
}
export function completeTrainingBlock(state:AppState,session:TrainingSessionDefinition):AppState{
 const run=state.trainingRun;const block=current(state,session);const drill=activeDrill(block??{type:'INSTRUCTION',title:'',text:''});
 if(!run||!block||run.status==='STOPPED'||run.status==='COMPLETED')return state;
 if(block.type==='DRILL'&&!canExecutePhysicalBlock(state))return state;
 if(block.type==='DRILL'&&drill?.mode==='REPS'&&run.completedReps<drill.target)return state;
 if(block.type==='DRILL'&&drill?.mode==='TIMED'&&(run.remainingSeconds??0)>0)return state;
 if(run.evidenceIds.includes(String(run.currentBlockIndex)))return state;
 const next=addEvidence(state,session,run.currentBlockIndex,block.type==='CHECK_IN'?'REFLECTION':'COMPLETION',block.type==='DRILL'?block.drillId:undefined);
 const e=next.evidence.at(-1)!;const nextIndex=run.currentBlockIndex+1;const done=nextIndex>=session.blocks.length;
 return {...next,trainingRun:{...run,currentBlockIndex:nextIndex,completedReps:0,remainingSeconds:undefined,status:done?'COMPLETED':'READY',evidenceIds:[...run.evidenceIds,e.id]}};
}
export function pauseTraining(state:AppState):AppState{return state.trainingRun?.status==='RUNNING'?{...state,trainingRun:{...state.trainingRun,status:'PAUSED'}}:state;}
export function resumeTraining(state:AppState):AppState{return state.trainingRun?.status==='PAUSED'?{...state,trainingRun:{...state.trainingRun,status:'RUNNING'}}:state;}
export function stopTraining(state:AppState):AppState{return state.trainingRun&&['RUNNING','PAUSED','READY'].includes(state.trainingRun.status)?{...state,trainingRun:{...state.trainingRun,status:'STOPPED'}}:state;}
export function tick(state:AppState,session:TrainingSessionDefinition,seconds:number):AppState{
 const run=state.trainingRun;const block=current(state,session);const drill=activeDrill(block??{type:'INSTRUCTION',title:'',text:''});
 if(!run||run.status!=='RUNNING'||seconds<0)return state;
 const timed=block?.type==='REST'?block.seconds:drill?.mode==='TIMED'?drill.target:undefined;
 if(timed===undefined)return state;
 const remaining=Math.max(0,(run.remainingSeconds??timed)-seconds);
 return {...state,trainingRun:{...run,remainingSeconds:remaining}};
}
