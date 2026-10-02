import type{TrainingSessionRun}from'../domain/types';
export type UnitTrainingRun=TrainingSessionRun&{unitId:string};
export function bindTrainingRunToUnit(run:TrainingSessionRun,unitId:string):UnitTrainingRun{return{...run,unitId};}
export function isUnitPracticeComplete(run:TrainingSessionRun|null|undefined,unitId:string):boolean{return!!run&&run.status==='COMPLETED'&&typeof(run as any).unitId==='string'&&(run as UnitTrainingRun).unitId===unitId;}
