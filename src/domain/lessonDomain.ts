import type{LearningStage}from'./types';
export type LessonContentBlock={type:'TEXT'|'PRACTICE'|'CHECK';id:string;title:string;body:string;physical?:boolean};
export type CanonReference={canonType:'BASE'|'FAIXA'|'CAMINHO'|'NUCLEO';canonId:string};
export type CanonLinkedLesson={id:string;version:number;title:string;objective:string;canonRefs:readonly CanonReference[];prerequisiteLessonIds:readonly string[];stages:readonly LearningStage[];blocks:readonly LessonContentBlock[];completionEvidenceKinds:readonly ('COMPLETION'|'REFLECTION'|'ASSESSMENT')[]};
export function createCanonLinkedLesson(input:CanonLinkedLesson):CanonLinkedLesson{return Object.freeze({...input,canonRefs:Object.freeze([...input.canonRefs]),prerequisiteLessonIds:Object.freeze([...input.prerequisiteLessonIds]),stages:Object.freeze([...input.stages]),blocks:Object.freeze([...input.blocks]),completionEvidenceKinds:Object.freeze([...input.completionEvidenceKinds])});}
