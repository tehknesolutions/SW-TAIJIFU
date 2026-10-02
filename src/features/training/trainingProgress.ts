import type { AppState, Evidence } from '../../domain/types';
import type { RuntimeNextStep } from '../../domain/nextStep';
import { getNextStep } from '../../domain/nextStep';
export function getTrainingEvidence(state:AppState,sessionId:string):Evidence[]{return state.evidence.filter(e=>e.sessionId===sessionId)}
export function getTrainingNextStep(state:AppState):RuntimeNextStep{return getNextStep(state)}
