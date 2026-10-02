import type { DrillDefinition, TechniqueDefinition, TrainingSessionDefinition } from './trainingTypes';

export const foundationTechniques:readonly TechniqueDefinition[]=[
 {id:'neutral-stance',version:1,title:'Base Neutra',objective:'Organizar o corpo antes da especialização em guarda e deslocamento.',checkpoints:['pés em largura confortável','peso distribuído','joelhos acompanhando os pés','coluna ereta sem rigidez','respiração livre'],safety:['geometria adaptável à anatomia','estabilidade funcional acima de rigidez']},
 {id:'fundamental-guard-v1',version:1,title:'Guarda Fundamental V1',objective:'Criar posição defensiva funcional que permita ver, respirar, mover e retornar à proteção.',checkpoints:['mãos próximas à linha do rosto','visão livre','queixo discretamente recolhido','cotovelos próximos sem rigidez','ombros relaxados'],safety:['sem tensão desnecessária','movimento controlado']},
 {id:'warmup-preparation',version:1,title:'Aquecimento SimpleWay V1',objective:'Preparar progressivamente o corpo sem transformar o aquecimento no treino principal.',checkpoints:['começar fácil','mobilidade controlada','ativação leve','preparação específica'],safety:['amplitude e velocidade confortáveis','dor aguda ou sintomas anormais encerram o exercício']},
 {id:'fundamental-mobility',version:1,title:'Mobilidade Fundamental V1',objective:'Desenvolver amplitude controlada útil às bases, deslocamentos e golpes.',checkpoints:['controle','amplitude progressiva','integração com postura e movimento'],safety:['sem movimentos balísticos','sem dor aguda','registrar limitações relevantes']},
 {id:'fundamental-conditioning',version:1,title:'Condicionamento Fundamental V1',objective:'Sustentar treino técnico sem transformar fadiga em técnica ruim.',checkpoints:['execução controlada','esforço moderado','progressão de uma variável por vez'],safety:['regredir quando a técnica degradar','esforço inicial aproximadamente 4–6/10']},
 {id:'fundamental-core',version:1,title:'Core Fundamental V1',objective:'Estabilizar o tronco e conectar força das pernas ao movimento.',checkpoints:['respiração durante esforço','coluna confortável','posição mantida com controle'],safety:['não sacrificar posição por duração','progressão gradual']},
 {id:'post-training-recovery',version:1,title:'Recuperação Pós-Treino V1',objective:'Reduzir progressivamente o esforço e registrar observações da sessão.',checkpoints:['marcha mais leve','respiração controlada','mobilidade leve','registro final'],safety:['não forçar amplitude','reduzir ou interromper diante de sinais relevantes']},
];

export const foundationDrills:readonly DrillDefinition[]=[
 {id:'warmup-elevate',version:1,title:'Elevar atividade',techniqueIds:['warmup-preparation'],mode:'TIMED',target:120,physical:true},
 {id:'warmup-mobility',version:1,title:'Mobilidade dinâmica',techniqueIds:['warmup-preparation'],mode:'TIMED',target:120,physical:true},
 {id:'warmup-activation',version:1,title:'Ativação',techniqueIds:['warmup-preparation'],mode:'TIMED',target:120,physical:true},
 {id:'warmup-specific',version:1,title:'Preparação específica',techniqueIds:['warmup-preparation'],mode:'TIMED',target:60,physical:true},
 {id:'mobility-ankle',version:1,title:'Mobilidade de tornozelo',techniqueIds:['fundamental-mobility'],mode:'REPS',target:6,restSeconds:10,physical:true},
 {id:'mobility-hip',version:1,title:'Abertura/fechamento de quadril',techniqueIds:['fundamental-mobility'],mode:'REPS',target:6,restSeconds:10,physical:true},
 {id:'mobility-squat',version:1,title:'Agachamento assistido',techniqueIds:['fundamental-mobility'],mode:'REPS',target:6,restSeconds:10,physical:true},
 {id:'mobility-t-spine',version:1,title:'Rotação torácica',techniqueIds:['fundamental-mobility'],mode:'REPS',target:6,restSeconds:10,physical:true},
 {id:'mobility-shoulders',version:1,title:'Círculos de ombro',techniqueIds:['fundamental-mobility'],mode:'REPS',target:6,restSeconds:10,physical:true},
 {id:'neutral-stance-hold',version:1,title:'Organização da base neutra',techniqueIds:['neutral-stance'],mode:'TIMED',target:30,restSeconds:15,physical:true},
 {id:'guard-hold',version:1,title:'Guarda organizada',techniqueIds:['fundamental-guard-v1'],mode:'TIMED',target:30,restSeconds:30,physical:true},
 {id:'conditioning-march',version:1,title:'Marcha ativa',techniqueIds:['fundamental-conditioning'],mode:'TIMED',target:30,physical:true},
 {id:'conditioning-squat',version:1,title:'Agachamento controlado',techniqueIds:['fundamental-conditioning'],mode:'REPS',target:8,physical:true},
 {id:'conditioning-push',version:1,title:'Flexão na variante adequada',techniqueIds:['fundamental-conditioning'],mode:'REPS',target:5,physical:true},
 {id:'conditioning-plank',version:1,title:'Prancha na variante adequada',techniqueIds:['fundamental-conditioning'],mode:'TIMED',target:20,physical:true},
 {id:'conditioning-shadow',version:1,title:'Shadowboxing leve / passos de base',techniqueIds:['fundamental-conditioning'],mode:'TIMED',target:30,physical:true},
 {id:'core-dead-bug',version:1,title:'Dead bug',techniqueIds:['fundamental-core'],mode:'REPS',target:5,restSeconds:15,physical:true},
 {id:'core-bird-dog',version:1,title:'Bird dog',techniqueIds:['fundamental-core'],mode:'REPS',target:5,restSeconds:15,physical:true},
 {id:'core-plank',version:1,title:'Prancha',techniqueIds:['fundamental-core'],mode:'TIMED',target:20,restSeconds:15,physical:true},
 {id:'core-glute-bridge',version:1,title:'Ponte de glúteos',techniqueIds:['fundamental-core'],mode:'REPS',target:8,restSeconds:15,physical:true},
 {id:'recovery-cooldown',version:1,title:'Cooldown',techniqueIds:['post-training-recovery'],mode:'TIMED',target:300,physical:false},
];

export const foundationSessions:readonly TrainingSessionDefinition[]=[
 {id:'warmup-01',version:1,title:'Aquecimento SimpleWay V1',blocks:[{type:'INSTRUCTION',title:'Preparar',text:'Comece fácil e termine com sensação de prontidão, não fadiga.'},{type:'DRILL',drillId:'warmup-elevate'},{type:'DRILL',drillId:'warmup-mobility'},{type:'DRILL',drillId:'warmup-activation'},{type:'DRILL',drillId:'warmup-specific'},{type:'CHECK_IN',prompt:'Você terminou mais pronto do que começou?'}]},
 {id:'mobility-01',version:1,title:'Mobilidade Fundamental V1',rounds:1,repeatFromBlockIndex:1,blocks:[{type:'INSTRUCTION',title:'Controle primeiro',text:'Execute lentamente. Depois de controlar, amplie a amplitude.'},{type:'DRILL',drillId:'mobility-ankle'},{type:'DRILL',drillId:'mobility-hip'},{type:'DRILL',drillId:'mobility-squat'},{type:'DRILL',drillId:'mobility-t-spine'},{type:'DRILL',drillId:'mobility-shoulders'},{type:'CHECK_IN',prompt:'Registre limitações relevantes para adaptar o treino.'}]},
 {id:'conditioning-01',version:1,title:'Condicionamento Fundamental V1',rounds:2,repeatFromBlockIndex:1,blocks:[{type:'INSTRUCTION',title:'Circuito V1',text:'2–4 rounds conforme baseline. Regresse quando a execução perder controle.'},{type:'DRILL',drillId:'conditioning-march'},{type:'DRILL',drillId:'conditioning-squat'},{type:'DRILL',drillId:'conditioning-push'},{type:'DRILL',drillId:'conditioning-plank'},{type:'DRILL',drillId:'conditioning-shadow'},{type:'CHECK_IN',prompt:'Registre esforço final e qualidade técnica.'}]},
 {id:'core-01',version:1,title:'Core Fundamental V1',rounds:2,repeatFromBlockIndex:1,blocks:[{type:'INSTRUCTION',title:'Estabilizar',text:'Respire durante o esforço e não sacrifique posição por duração.'},{type:'DRILL',drillId:'core-dead-bug'},{type:'DRILL',drillId:'core-bird-dog'},{type:'DRILL',drillId:'core-plank'},{type:'DRILL',drillId:'core-glute-bridge'},{type:'CHECK_IN',prompt:'Registre controle e conforto do tronco.'}]},
 {id:'recovery-01',version:1,title:'Recuperação Pós-Treino V1',blocks:[{type:'DRILL',drillId:'recovery-cooldown'},{type:'CHECK_IN',prompt:'Registre esforço final, desconfortos e observações da sessão.'}]},
 {id:'stance-guard-01',version:1,title:'Base Neutra + Guarda V1',rounds:3,repeatFromBlockIndex:1,blocks:[{type:'INSTRUCTION',title:'Organização',text:'A base neutra é referência antes da especialização em guarda.'},{type:'DRILL',drillId:'neutral-stance-hold'},{type:'REST',seconds:15},{type:'DRILL',drillId:'guard-hold'},{type:'CHECK_IN',prompt:'Você consegue deslocar levemente o peso e retornar ao centro sem passo involuntário?'}]},
];

export const foundationPack={techniques:foundationTechniques,drills:foundationDrills,sessions:foundationSessions};
