import type { DrillDefinition, TechniqueDefinition, TrainingSessionDefinition } from './trainingTypes';
import { drills, techniques, fundamentos01 } from './fundamentalTrainingPack';

export type CatalogStatus='CONFIRMED'|'SOURCE_PENDING';
export type CatalogEntry<T>={status:CatalogStatus;id:string;version:number;content?:T;note:string};

export const confirmedTechniqueCatalog:readonly CatalogEntry<TechniqueDefinition>[]=
 techniques.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable content already established in the R003 baseline.'}));

export const confirmedDrillCatalog:readonly CatalogEntry<DrillDefinition>[]=
 drills.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable drill already established in the R003 baseline.'}));

export const confirmedSessionCatalog:readonly CatalogEntry<TrainingSessionDefinition>[]=[
 {status:'CONFIRMED',id:fundamentos01.id,version:fundamentos01.version,content:fundamentos01,note:'First physical training session established by R003.'},
];

export const sourcePendingCatalog:readonly CatalogEntry<never>[]=[
 {status:'SOURCE_PENDING',id:'physical-techniques-next',version:1,note:'Awaiting explicit project-source support before executable technique definitions are added.'},
];

export const trainingCatalog={techniques:confirmedTechniqueCatalog,drills:confirmedDrillCatalog,sessions:confirmedSessionCatalog,pending:sourcePendingCatalog};
