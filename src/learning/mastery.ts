import type{MasteryState}from'../domain/types';
export type MasteryInput={current:MasteryState;practiceCount:number;assessmentPassed:boolean;prerequisitesMet:boolean;safetyReady:boolean};
const order:MasteryState[]=['LEARNING','PRACTICING','CONSISTENT','MASTERED_FOR_LEVEL'];
export function deriveMastery(i:MasteryInput):MasteryState{if(!i.safetyReady)return i.current;if(!i.prerequisitesMet)return i.current;if(i.assessmentPassed&&i.practiceCount>=3)return'MASTERED_FOR_LEVEL';if(i.practiceCount>=2)return'CONSISTENT';if(i.practiceCount>=1)return'PRACTICING';return'LEARNING';}
