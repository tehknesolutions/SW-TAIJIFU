export type CanonRelease={releaseId:string;version:string;sourceRef:string;basas:readonly CanonBase[];faixas:readonly CanonFaixa[];caminhos:readonly CanonCaminho[];nucleos:readonly CanonNucleo[]};
export type CanonBase={id:string;name:string};
export type CanonFaixa={id:string;name:string;baseIds:readonly string[]};
export type CanonCaminho={id:string;name:string;faixaIds:readonly string[]};
export type CanonNucleo={id:string;name:string;caminhoIds:readonly string[]};
