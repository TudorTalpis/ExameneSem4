import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { shuffle } from '../utils/shuffle';
import { reinsertOffset, reinsertId } from '../utils/repetition';
import type { Question, SessionState, QuestionRecord } from '../types/question';

function buildInitialState(questionIds: string[]): SessionState {
  const records: Record<string, QuestionRecord> = {};
  questionIds.forEach(id => {
    records[id] = { id, wrongCount: 0, consecutiveCorrect: 0, learned: false };
  });
  return {
    queue: [...questionIds],
    records,
    stats: { correctTotal: 0, wrongTotal: 0, startedAt: Date.now() },
    activeId: questionIds[0] ?? null,
  };
}

export type QuizMode = 'home' | 'quiz' | 'review';

/**
 * useQuiz – self-contained quiz engine.
 *
 * @param examId   Unique exam identifier — used as part of the localStorage key
 *                 so each exam keeps its own progress.
 * @param questions The full list of questions for this quiz session.
 *                  Pass a topic-filtered subset for topic-specific quizzes.
 */
export function useQuiz(examId: string, questions: Question[]) {
  const STORAGE_KEY = `quiz-session-${examId}`;
  const MODE_KEY    = `quiz-mode-${examId}`;

  const questionMap = useMemo(() => {
    const m: Record<string, Question> = {};
    questions.forEach(q => { m[q.id] = q; });
    return m;
  }, [questions]);

  const allIds = useMemo(() => questions.map(q => q.id), [questions]);

  const [session, setSession, clearSession] = useLocalStorage<SessionState | null>(
    STORAGE_KEY,
    null,
  );

  const [mode, setMode] = useLocalStorage<QuizMode>(MODE_KEY, 'home');

  // ---- computed helpers ----

  const currentQuestion = session?.activeId ? questionMap[session.activeId] : null;

  const learnedCount = session
    ? Object.values(session.records).filter(r => r.learned).length
    : 0;

  const mistakeIds = session
    ? Object.values(session.records)
        .filter(r => r.wrongCount > 0)
        .map(r => r.id)
    : [];

  // ---- actions ----

  const startNewSession = useCallback(() => {
    const shuffled = shuffle([...allIds]);
    const state = buildInitialState(shuffled);
    setSession(state);
    setMode('quiz');
  }, [allIds, setSession, setMode]);

  const continueSession = useCallback(() => {
    if (!session) {
      startNewSession();
    } else {
      setMode('quiz');
    }
  }, [session, startNewSession, setMode]);

  const startReview = useCallback(() => {
    if (!session || mistakeIds.length === 0) return;
    const shuffled = shuffle([...mistakeIds]);
    setSession(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        queue: shuffled,
        activeId: shuffled[0] ?? null,
      };
    });
    setMode('review');
  }, [session, mistakeIds, setSession, setMode]);

  const resetAll = useCallback(() => {
    clearSession();
    setMode('home');
  }, [clearSession, setMode]);

  const answerQuestion = useCallback((chosenIndex: number) => {
    if (!session || !session.activeId) return;

    const id = session.activeId;
    const question = questionMap[id];
    if (!question) return;

    const isCorrect = chosenIndex === question.correctIndex;

    setSession(prev => {
      if (!prev) return prev;

      const rec   = { ...prev.records[id] };
      const stats = { ...prev.stats };
      let queue   = [...prev.queue];

      // Remove current head from queue
      queue = queue.slice(1);

      if (isCorrect) {
        stats.correctTotal += 1;
        if (rec.wrongCount === 0) {
          rec.learned = true;
          rec.consecutiveCorrect += 1;
        } else {
          rec.consecutiveCorrect += 1;
          if (rec.consecutiveCorrect >= 2) {
            rec.learned = true;
          } else {
            const offset = reinsertOffset(rec.wrongCount + 10);
            queue = reinsertId(queue, id, 0, offset);
          }
        }
      } else {
        stats.wrongTotal += 1;
        rec.wrongCount += 1;
        rec.consecutiveCorrect = 0;
        const offset = reinsertOffset(rec.wrongCount);
        queue = reinsertId(queue, id, 0, offset);
      }

      const records = { ...prev.records, [id]: rec };
      const nextId  = queue[0] ?? null;

      return {
        ...prev,
        queue,
        records,
        stats,
        activeId: nextId,
      } satisfies SessionState;
    });
  }, [session, questionMap, setSession]);

  const goHome = useCallback(() => setMode('home'), [setMode]);

  const isDone = session !== null && session.queue.length === 0 && session.activeId === null;

  return {
    mode,
    session,
    currentQuestion,
    learnedCount,
    totalCount: allIds.length,
    mistakeCount: mistakeIds.length,
    isDone,
    startNewSession,
    continueSession,
    startReview,
    resetAll,
    answerQuestion,
    goHome,
  };
}
