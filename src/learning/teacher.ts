export type TeacherPermission='REVIEW_EVIDENCE'|'ASSIGN_ELIGIBLE'|'RECORD_OBSERVATION';
export type TeacherObservation={id:string;learnerId:string;lessonId:string;note:string;createdAt:string};
export type TeacherAssignment={id:string;learnerId:string;unitId:string;reason:string};
export type TeacherMode={permissions:readonly TeacherPermission[];observations:readonly TeacherObservation[];assignments:readonly TeacherAssignment[]};
export function canTeacherAssign(mode:TeacherMode):boolean{return mode.permissions.includes('ASSIGN_ELIGIBLE');}
