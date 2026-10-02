export type V1GateCheck={id:string;label:string;required:boolean;passed:boolean;detail:string};
export type V1GateResult={status:'PASS'|'BLOCKED';checks:readonly V1GateCheck[]};
export function evaluateV1Gate(checks:readonly V1GateCheck[]):V1GateResult{return{status:checks.filter(c=>c.required).every(c=>c.passed)?'PASS':'BLOCKED',checks:Object.freeze([...checks])};}
