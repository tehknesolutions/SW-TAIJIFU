import type { LessonDefinition } from '../domain/types';

export const fundamentalStanceLesson: LessonDefinition = {
  id: 'fundamental-stance', version: 1, title: 'Base Fundamental', objective: 'Construir uma base estável, protegida e recuperável para movimento.',
  stages: [
    { stage: 'UNDERSTAND', title: 'Entender', instruction: 'Conheça o propósito da base: equilíbrio, guarda e capacidade de mover sem perder estrutura.' },
    { stage: 'OBSERVE', title: 'Observar', instruction: 'Observe pés, joelhos, tronco, mãos e foco visual como checkpoints independentes.' },
    { stage: 'PREPARE', title: 'Preparar', instruction: 'Garanta espaço livre, movimento confortável e pare se houver dor, tontura ou preocupação relevante.' },
    { stage: 'EXECUTE', title: 'Executar', instruction: 'Entre lentamente na base e organize pés, joelhos, tronco, mãos e olhar.', physical: true },
    { stage: 'PRACTICE', title: 'Praticar', instruction: 'Retorne ao neutro entre repetições e sustente a base com respiração tranquila e pequenos ajustes.', physical: true },
    { stage: 'APPLY', title: 'Aplicar', instruction: 'Faça um passo curto para frente e para trás, recuperando a mesma base após cada movimento.', physical: true },
    { stage: 'REFLECT', title: 'Refletir', instruction: 'Registre como estava sua estabilidade e uma correção que deseja manter.' },
    { stage: 'ASSESS', title: 'Avaliar', instruction: 'Confira equilíbrio, guarda, postura controlada e capacidade de mover e retornar à base.' },
  ],
};
