export type FaixaContext={canonFaixaId:string;canonLabel:string};
export type Achievement={id:string;label:string;earnedAt:string;lessonId:string};
export type FaixaAchievementView={canon:FaixaContext;achievements:readonly Achievement[]};
export function buildFaixaAchievementView(canon:FaixaContext,achievements:readonly Achievement[]):FaixaAchievementView{return{canon,achievements:Object.freeze([...achievements])};}
