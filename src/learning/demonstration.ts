export type DemonstrationView='FRONT'|'SIDE'|'MIRRORED';
export type MotionAssetRef={assetId:string;version:string;sourceRef:string;status:'DRAFT'|'APPROVED'};
export type VirtualMasterDemonstration={techniqueId:string;views:Readonly<Record<DemonstrationView,MotionAssetRef|null>>;defaultView:DemonstrationView;fallback:'TEXT_INSTRUCTION'};
export function createDemonstration(input:VirtualMasterDemonstration):VirtualMasterDemonstration{return Object.freeze({...input,views:Object.freeze({...input.views})});}
