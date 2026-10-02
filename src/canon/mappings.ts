export type CanonMapping={swType:'LESSON'|'TECHNIQUE'|'DRILL'|'ASSESSMENT';swId:string;canonType:'BASE'|'FAIXA'|'CAMINHO'|'NUCLEO';canonId:string};
export function resolveMapping(mapping:CanonMapping,canonIds:ReadonlySet<string>):CanonMapping{if(!canonIds.has(mapping.canonId))throw new Error('CANON_REFERENCE_NOT_FOUND');return Object.freeze({...mapping});}
