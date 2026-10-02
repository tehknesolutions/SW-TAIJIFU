export type DojoCohort={id:string;name:string;learnerIds:readonly string[]};
export type DojoAssignment={id:string;cohortId:string;unitId:string;scheduledFor?:string};
export type DojoProgress={cohortId:string;completedUnits:number;activeLearners:number};
export type DojoMode={cohorts:readonly DojoCohort[];assignments:readonly DojoAssignment[];progress:readonly DojoProgress[]};
