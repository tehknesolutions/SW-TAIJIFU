export type PedagogicalLens='TAI'|'JI'|'FU';
export type PedagogicalView={lens:PedagogicalLens;title:string;prompt:string};
export const pedagogicalViews:readonly PedagogicalView[]=[
 {lens:'TAI',title:'Estrutura / Forma',prompt:'Observe organização, base, trajetória e forma.'},
 {lens:'JI',title:'Percepção / Adaptação',prompt:'Observe distância, tempo, direção e adaptação.'},
 {lens:'FU',title:'Execução / Integração',prompt:'Integre estrutura e percepção em execução controlada.'},
];
