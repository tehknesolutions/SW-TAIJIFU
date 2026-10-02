import type{MasteryState}from'../domain/types';export type ProgressionNode={lessonId:string;canonRefs:readonly string[];prerequisites:readonly string[];mastery:MasteryState};
export type ProgressionMap={nodes:readonly ProgressionNode[]};
export function buildProgressionMap(nodes:readonly ProgressionNode[]):ProgressionMap{return{nodes:Object.freeze(nodes.map(n=>Object.freeze({...n,canonRefs:Object.freeze([...n.canonRefs]),prerequisites:Object.freeze([...n.prerequisites])})))}} 
