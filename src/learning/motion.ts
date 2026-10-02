import type{MotionAssetRef}from'./demonstration';
export type MotionTransform={pivot:[number,number,number];scale:number;orientation:string};
export type RuntimeMotionAsset={ref:MotionAssetRef;transform:MotionTransform};
export type MotionResolution={asset:RuntimeMotionAsset|null;fallback:'TEXT_INSTRUCTION'|'STATIC_REFERENCE'};
export function resolveMotion(asset:RuntimeMotionAsset|undefined):MotionResolution{return asset&&asset.ref.status==='APPROVED'?{asset,fallback:'STATIC_REFERENCE'}:{asset:null,fallback:'TEXT_INSTRUCTION'};}
