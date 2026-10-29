import type { ExamManifest } from '../../../types/exam';

export const ssmManifest: ExamManifest = {
  id: 'ssm',
  title: 'Sănătate și Securitate în Muncă',
  subtitle: 'SSM — Crețu: Legislație, Modele de accidente, Factori de risc',
  icon: '🦺',
  accentColor: 'orange',
  order: 5,
  topics: [
    {
      id: 'introducere-modele',
      title: 'Introducere & Modele SSM',
      icon: '📖',
      order: 1,
      questionCount: 53,
      description: 'Conceptul SSM, impactul economic, modele Heinrich, Petersen, Ferrell, brânza elvețiană',
    },
    {
      id: 'legislatie-management',
      title: 'Legislație & Management',
      icon: '⚖️',
      order: 2,
      questionCount: 72,
      description: 'Codul Muncii, Legea 186/2008, CCM, CIM, ISM, răspunderi, organisme internaționale',
    },
    {
      id: 'factori-risc',
      title: 'Factori de Risc',
      icon: '⚠️',
      order: 3,
      questionCount: 52,
      description: 'Identificarea riscurilor, NMP, factori fizici/chimici/biologici, vibrații, zgomot, EMF, curent electric',
    },
  ],
};
