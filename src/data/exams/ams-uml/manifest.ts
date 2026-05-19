import type { ExamManifest } from '../../../types/exam';

export const amsUmlManifest: ExamManifest = {
  id: 'ams-uml',
  title: 'AMS – UML',
  subtitle: 'Analiza și Modelarea Sistemelor',
  icon: '📐',
  accentColor: 'indigo',
  order: 1,
  topics: [
    { id: 'general',       title: 'Teorie Generală',         icon: '📚', order: 1, questionCount: 25, description: 'Entități, relații, niveluri meta, istoric UML' },
    { id: 'use-case',      title: 'Diagrama Cazurilor',      icon: '👤', order: 2, questionCount: 28, description: 'Actori, use-case-uri, include/extend/generalizare' },
    { id: 'class',         title: 'Diagrama Claselor',       icon: '🗂️', order: 3, questionCount: 32, description: 'Asociere, agregare, compoziție, multiplicitate' },
    { id: 'state',         title: 'Diagrama Stărilor',       icon: '🔄', order: 4, questionCount: 22, description: 'Stări, tranziții, substări, pseudostări' },
    { id: 'activity',      title: 'Diagrama Activităților',  icon: '⚡', order: 5, questionCount: 23, description: 'Noduri, fluxuri, fork/join, swimlanes' },
    { id: 'sequence',      title: 'Diagrama Secvenței',      icon: '📨', order: 6, questionCount: 25, description: 'Linii de viață, mesaje sincrone/asincrone, fragmente' },
    { id: 'collaboration', title: 'Diagrama Colaborării',    icon: '🤝', order: 7, questionCount: 22, description: 'Niveluri de specificare, realizare, legătura structurală' },
    { id: 'component',     title: 'Diagrama Componentelor',  icon: '🧩', order: 8, questionCount: 18, description: 'Componente, interfețe, porturi, dependențe' },
    { id: 'deployment',    title: 'Diagrama Plasării',       icon: '🖥️', order: 9, questionCount: 15, description: 'Noduri, device-uri, artefacte, manifestare' },
  ],
};
