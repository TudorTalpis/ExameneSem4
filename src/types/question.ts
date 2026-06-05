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
  | 'backend-deploy'
  // Tehnologii Web (backend .NET / EF Core) topics
  | 'backend-efcore'
  | 'backend-arhitectura';

/**
 * 'mcq'   – clasic: alegi o opțiune (inclusiv analiză A/B și completare cod).
 * 'order' – construiești codul: aranjezi token-urile în ordinea corectă,
 *           de la primul până la ultimul cuvânt.
 */
export type QuestionKind = 'mcq' | 'order';

export interface Question {
  id: string;
  topic: Topic;
  difficulty: Difficulty;
  prompt: string;
  options: string[];       // min 4; for true/false: ["Adevărat", "Fals"]; pentru kind 'order' poate fi []
  correctIndex: number;    // pentru kind 'order' se folosește 0 (corectitudinea e dată de secvența token-urilor)
  explanation: string;     // why correct + why distractors are wrong

  // ---- Extensii pentru întrebări cu cod (opționale; absente => MCQ text clasic) ----
  /** Tipul întrebării. Implicit 'mcq'. */
  kind?: QuestionKind;
  /** Bloc de cod monospace afișat sub enunț (variante A/B, sau cod cu spațiu ______). */
  code?: string;
  /** Eticheta limbajului pentru blocul de cod (ex: 'csharp'). */
  codeLang?: string;
  /** Randează opțiunile monospace, pe o coloană (răspunsuri tip fragment de cod). */
  optionsAsCode?: boolean;
  /** Pentru kind 'order': token-urile în ordinea CORECTĂ (primul → ultimul). */
  tokens?: string[];
  /** Pentru kind 'order': token-uri greșite adăugate în bancă pe lângă cele corecte. */
  distractorTokens?: string[];
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
