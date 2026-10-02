import type{CanonRelease}from'./types';
export type CanonSnapshot={releaseId:string;version:string;sourceRef:string;basas:CanonRelease['basas'];faixas:CanonRelease['faixas'];caminhos:CanonRelease['caminhos'];nucleos:CanonRelease['nucleos']};
export function adaptCanonSnapshot(snapshot:CanonSnapshot):CanonRelease{return Object.freeze({releaseId:snapshot.releaseId,version:snapshot.version,sourceRef:snapshot.sourceRef,basas:Object.freeze([...snapshot.basas]),faixas:Object.freeze([...snapshot.faixas]),caminhos:Object.freeze([...snapshot.caminhos]),nucleos:Object.freeze([...snapshot.nucleos])});}
