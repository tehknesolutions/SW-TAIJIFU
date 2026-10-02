export type TechniqueDefinition={id:string;version:number;title:string;objective:string;checkpoints:readonly string[];safety:readonly string[]};
export type DrillDefinition={id:string;version:number;title:string;techniqueIds:readonly string[];mode:'REPS'|'TIMED';target:number;restSeconds?:number;physical?:boolean};
export type SessionBlock={type:'INSTRUCTION';title:string;text:string}|{type:'DRILL';drillId:string}|{type:'REST';seconds:number}|{type:'CHECK_IN';prompt:string};
export type TrainingSessionDefinition={id:string;version:number;title:string;blocks:readonly SessionBlock[];rounds?:number;repeatFromBlockIndex?:number};
