/**
 * ProgressContext
 * ---------------
 * Provides lightweight, per-exam progress summaries (learned / total / mistakes)
 * to any component without them needing to know about localStorage keys.
 *
 * Each exam stores its own session under `quiz-session-<examId>`.
 * We read those keys here and expose a simple `getProgress(examId)` helper.
 */
import { createContext, useContext, useCallback } from 'react';
import type { SessionState } from '../types/question';

export interface ExamProgress {
  learnedCount: number;
  totalCount: number;
  mistakeCount: number;
  pct: number;
  hasSession: boolean;
}

interface ProgressContextValue {
  getProgress: (examId: string, totalQuestions: number) => ExamProgress;
  clearProgress: (examId: string) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const getProgress = useCallback(
    (examId: string, totalQuestions: number): ExamProgress => {
      try {
        const raw = localStorage.getItem(`quiz-session-${examId}`);
        if (!raw) {
          return { learnedCount: 0, totalCount: totalQuestions, mistakeCount: 0, pct: 0, hasSession: false };
        }
        const session: SessionState = JSON.parse(raw);
        const learnedCount  = Object.values(session.records).filter(r => r.learned).length;
        const mistakeCount  = Object.values(session.records).filter(r => r.wrongCount > 0).length;
        const pct           = totalQuestions > 0 ? Math.round((learnedCount / totalQuestions) * 100) : 0;
        return { learnedCount, totalCount: totalQuestions, mistakeCount, pct, hasSession: true };
      } catch {
        return { learnedCount: 0, totalCount: totalQuestions, mistakeCount: 0, pct: 0, hasSession: false };
      }
    },
    [],
  );

  const clearProgress = useCallback((examId: string) => {
    localStorage.removeItem(`quiz-session-${examId}`);
    localStorage.removeItem(`quiz-mode-${examId}`);
  }, []);

  return (
    <ProgressContext.Provider value={{ getProgress, clearProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
