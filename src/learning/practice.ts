export type PracticeTechnique={id:string;version:number;title:string;objective:string;canonRefs?:readonly string[]};
export type PracticeDrill={id:string;version:number;techniqueIds:readonly string[];target:{mode:'REPS'|'TIMED';value:number};safety:readonly string[]};
export type Practice={id:string;version:number;drillIds:readonly string[];sessionId?:string};
export function createPractice(input:Practice):Practice{return Object.freeze({...input,drillIds:Object.freeze([...input.drillIds])});}
