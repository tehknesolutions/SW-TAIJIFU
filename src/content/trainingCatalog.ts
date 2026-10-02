import type { DrillDefinition, TechniqueDefinition, TrainingSessionDefinition } from './trainingTypes';
import { drills, techniques, fundamentos01 } from './fundamentalTrainingPack';
import { foundationPack, movementPack, strikeMovementTechnique, strikeMovementDrill, strikeMovementSession, uppercutTechnique, uppercutDrill, uppercutSession } from './foundationExpansion';

const allTechniques=[...techniques,...foundationPack.techniques,...movementPack.techniques,strikeMovementTechnique,uppercutTechnique];
const allDrills=[...drills,...foundationPack.drills,...movementPack.drills,strikeMovementDrill,uppercutDrill];
const allSessions=[fundamentos01,...foundationPack.sessions,...movementPack.sessions,strikeMovementSession,uppercutSession];

export type CatalogStatus='CONFIRMED'|'SOURCE_PENDING';
export type CatalogEntry<T>={status:CatalogStatus;id:string;version:number;content?:T;note:string};

export const confirmedTechniqueCatalog:readonly CatalogEntry<TechniqueDefinition>[]=
 allTechniques.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable content is explicitly supported by the project source corpus or R003 baseline.'}));
export const confirmedDrillCatalog:readonly CatalogEntry<DrillDefinition>[]=
 allDrills.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Executable drill is defined by project source material.'}));
export const confirmedSessionCatalog:readonly CatalogEntry<TrainingSessionDefinition>[]=
 allSessions.map(content=>({status:'CONFIRMED',id:content.id,version:content.version,content,note:'Session is composed only from confirmed project-source content.'}));

export const sourcePendingCatalog:readonly CatalogEntry<never>[]=[
 {status:'SOURCE_PENDING',id:'m036-entry-exit',version:1,note:'Issue #44 provides the objective only; executable mechanics/drill details require source-backed definition.'},
 {status:'SOURCE_PENDING',id:'m037-distance-control',version:1,note:'Issue #45 provides zones/objective only; executable mechanics/drill details require source-backed definition.'},
 {status:'SOURCE_PENDING',id:'m038-jab',version:1,note:'Issue #46 provides intended attributes only; executable mechanics require the source definition.'},
 {status:'SOURCE_PENDING',id:'m039-direto',version:1,note:'Issue #47 provides intended attributes only; executable mechanics require the source definition.'},
 {status:'SOURCE_PENDING',id:'m040-jab-direto',version:1,note:'Issue #48 provides combination intent only; executable rhythm/mechanics require the source definition.'},
 {status:'SOURCE_PENDING',id:'m041-cruzado-gancho',version:1,note:'Issue #49 provides broad intent only; executable mechanics require the source definition.'},
];

export const trainingCatalog={techniques:confirmedTechniqueCatalog,drills:confirmedDrillCatalog,sessions:confirmedSessionCatalog,pending:sourcePendingCatalog};
export const confirmedTechniques=allTechniques;
export const confirmedDrills=allDrills;
export const confirmedSessions=allSessions;
