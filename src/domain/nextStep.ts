import type{AppState,LearningStage}from'./types';import{fundamentalStanceLesson}from'../content/fundamentalStance';import{fundamentos01}from'../content/fundamentalTrainingPack';
export type RuntimeNextStep={kind:'ONBOARD'|'BASELINE'|'REVIEW'|'START_LESSON'|'CONTINUE_LESSON'|'START_TRAINING'|'CONTINUE_TRAINING'|'COMPLETE';title:string;detail:string;stage?:LearningStage};
export function getNextStep(state:AppState):RuntimeNextStep{
 if(!state.profile)return{kind:'ONBOARD',title:'Criar perfil',detail:'Defina seu objetivo para iniciar a jornada.'};
 if(!state.baseline)return{kind:'BASELINE',title:'Fazer baseline',detail:'Registre sua prontidão antes da primeira prática.'};
 if(state.baseline.readiness==='PAUSE_AND_REVIEW')return{kind:'REVIEW',title:'Revisar prontidão',detail:'A execução física está pausada. Conteúdo conceitual continua disponível.'};
 if(!state.trainingRun)return{kind:'START_TRAINING',title:fundamentos01.title,detail:'Inicie seu primeiro ciclo físico guiado.'};
 if(state.trainingRun.status==='STOPPED')return{kind:'START_TRAINING',title:'Reiniciar treino',detail:'A sessão anterior foi interrompida. Você pode iniciar um novo ciclo.'};
 if(state.trainingRun.status==='COMPLETED')return{kind:'COMPLETE',title:'Revisar e consolidar',detail:'Seu primeiro ciclo físico foi registrado. Revise evidências e consolide a prática.'};
 const stage=fundamentalStanceLesson.stages[state.lessonRun?.currentStageIndex??0];
 return{kind:'CONTINUE_TRAINING',title:'Continuar treino',detail:stage?.instruction??'Continue sua sessão atual.',stage:stage?.stage};
}
