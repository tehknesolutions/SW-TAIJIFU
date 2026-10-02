import type { DrillDefinition, TechniqueDefinition, TrainingSessionDefinition } from './trainingTypes';
import { drills, techniques, fundamentos01 } from './fundamentalTrainingPack';
import { foundationPack, movementPack } from './foundationExpansion';

const allTechniques=[...techniques,...foundationPack.techniques,...movementPack.techniques];
const allDrills=[...drills,...foundationPack.drills,...movementPack.drills];
const allSessions=[fundamentos01,...foundationPack.sessions,...movementPack.sessions];

export type CatalogStatus='CONFIRMED'|'SOURCE_PENDING';
export type CatalogEntry<T>={status:CatalogStatus;id:string;version:number;content?:T;note:string};

export const confirmedTechniqueCatalog:readonly CatalogEntry<TechniqueDefinition>[]=
 allTechniques.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable content is explicitly supported by the project M021-M027 source set or the R003 baseline.'}));
export const confirmedDrillCatalog:readonly CatalogEntry<DrillDefinition>[]=
 allDrills.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable drill is defined by the project source set.'}));
export const confirmedSessionCatalog:readonly CatalogEntry<TrainingSessionDefinition>[]=
 allSessions.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Session is composed only from confirmed project-source content.'}));
export const sourcePendingCatalog:readonly CatalogEntry<never>[]=[
 {status:'SOURCE_PENDING',id:'physical-techniques-next',version:1,note:'Future content requires explicit project-source support before becoming executable.'},
];
export const trainingCatalog={techniques:confirmedTechniqueCatalog,drills:confirmedDrillCatalog,sessions:confirmedSessionCatalog,pending:sourcePendingCatalog};
export const confirmedTechniques=allTechniques;
export const confirmedDrills=allDrills;
export const confirmedSessions=allSessions;
