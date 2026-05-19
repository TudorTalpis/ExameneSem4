import type { ExamManifest } from '../types/exam';
import type { Question } from '../types/question';
import { amsUmlManifest } from './exams/ams-uml/manifest';

// ---- Exam registry -------------------------------------------------------
// To add a new exam: create src/data/exams/<id>/manifest.ts and add it here.

export const examRegistry: ExamManifest[] = [
  amsUmlManifest,
];

// ---- Question loaders (lazy, per-exam) ------------------------------------

type QuestionLoader = () => Promise<Question[]>;

const loaders: Record<string, QuestionLoader> = {
  'ams-uml': () =>
    import('./index').then(m => m.allQuestions),
};

/** Load all questions for an exam. Returns [] if examId is unknown. */
export async function loadExamQuestions(examId: string): Promise<Question[]> {
  const loader = loaders[examId];
  return loader ? loader() : [];
}

/** Load questions for a specific topic within an exam. */
export async function loadTopicQuestions(
  examId: string,
  topicId: string,
): Promise<Question[]> {
  const all = await loadExamQuestions(examId);
  return all.filter(q => q.topic === topicId);
}

/** Get exam manifest by id. */
export function getExam(id: string): ExamManifest | undefined {
  return examRegistry.find(e => e.id === id);
}
