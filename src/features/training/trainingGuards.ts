import type { AppState } from '../../domain/types';
export function canExecutePhysicalBlock(state:AppState):boolean{return state.baseline?.readiness!=='PAUSE_AND_REVIEW';}
export function getTrainingGuidance(state:AppState):'NORMAL'|'REDUCED'|'PAUSED'{const r=state.baseline?.readiness;return r==='PAUSE_AND_REVIEW'?'PAUSED':r==='MODIFY'?'REDUCED':'NORMAL';}
