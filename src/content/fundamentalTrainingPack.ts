import type { DrillDefinition, TechniqueDefinition, TrainingSessionDefinition } from './trainingTypes';
export const techniques:readonly TechniqueDefinition[]=[
{id:'fundamental-stance',version:1,title:'Base Fundamental',objective:'Estabilidade e recuperação da base.',checkpoints:['pés organizados','joelhos controlados','tronco estável'],safety:['movimento confortável','pare diante de dor ou tontura']},
{id:'fundamental-guard',version:1,title:'Guarda Fundamental',objective:'Proteção estável de cabeça e tronco.',checkpoints:['mãos organizadas','cotovelos controlados','olhar estável'],safety:['sem tensão excessiva','prática controlada']},
{id:'fundamental-displacement',version:1,title:'Deslocamento Fundamental',objective:'Mover e recuperar a base.',checkpoints:['passo curto','equilíbrio','retorno à base'],safety:['espaço livre','intensidade reduzida quando necessário']},
{id:'fundamental-straight-strike',version:1,title:'Golpe Reto Fundamental',objective:'Introduzir mecânica de golpe reto no ar.',checkpoints:['base estável','trajetória controlada','retorno à guarda'],safety:['não-contato','sem força máxima','controle do movimento']},];
export const drills:readonly DrillDefinition[]=[
{id:'drill-base',version:1,title:'Base',techniqueIds:['fundamental-stance'],mode:'REPS',target:5,restSeconds:10,physical:true},
{id:'drill-guard',version:1,title:'Guarda',techniqueIds:['fundamental-guard'],mode:'REPS',target:5,restSeconds:10,physical:true},
{id:'drill-displacement',version:1,title:'Deslocamento',techniqueIds:['fundamental-displacement'],mode:'REPS',target:5,restSeconds:10,physical:true},
{id:'drill-straight-strike',version:1,title:'Golpe Reto Controlado',techniqueIds:['fundamental-straight-strike'],mode:'REPS',target:5,restSeconds:10,physical:true},];
export const fundamentos01:TrainingSessionDefinition={id:'fundamentos-01',version:1,title:'Fundamentos 01',blocks:[{type:'INSTRUCTION',title:'Preparar',text:'Revise a prontidão e o espaço antes de iniciar.'},{type:'DRILL',drillId:'drill-base'},{type:'REST',seconds:10},{type:'DRILL',drillId:'drill-guard'},{type:'REST',seconds:10},{type:'DRILL',drillId:'drill-displacement'},{type:'REST',seconds:10},{type:'DRILL',drillId:'drill-straight-strike'},{type:'CHECK_IN',prompt:'Como foi sua estabilidade e controle?'}]};
export const trainingPack={techniques,drills,sessions:[fundamentos01]};
