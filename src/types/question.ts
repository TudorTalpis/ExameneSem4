export type Difficulty = 'easy' | 'medium' | 'hard' | 'trap';

export type Topic =
  // AMS-UML topics
  | 'general'
  | 'use-case'
  | 'class'
  | 'state'
  | 'activity'
  | 'sequence'
  | 'collaboration'
  | 'component'
  | 'deployment'
  // TSI topics
  | 'intro'
  | 'malware'
  | 'vectori'
  | 'atacuri'
  | 'acces'
  | 'criptografie'
  | 'pki'
  | 'disponibilitate'
  | 'endpoint'
  // Tehnologii Web (frontend) topics
  | 'fundamente'
  | 'state-props'
  | 'hooks'
  | 'liste-evenimente'
  | 'router'
  | 'context'
  | 'typescript-tooling'
  | 'async-fetch'
  | 'backend-deploy';

export interface Question {
  id: string;
  topic: Topic;
  difficulty: Difficulty;
  prompt: string;
  options: string[];       // min 4; for true/false: ["Adevărat", "Fals"]
  correctIndex: number;
  explanation: string;     // why correct + why distractors are wrong
}

// ---- Session state ----

export interface QuestionRecord {
  id: string;
  wrongCount: number;
  consecutiveCorrect: number;
  learned: boolean;
}

export interface SessionStats {
  correctTotal: number;
  wrongTotal: number;
  startedAt: number; // timestamp
}

export interface SessionState {
  queue: string[];          // ordered ids yet to be answered
  records: Record<string, QuestionRecord>;
  stats: SessionStats;
  activeId: string | null;
}
