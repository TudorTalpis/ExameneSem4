import type { Question, Topic } from '../types/question';

/**
 * Întrebare PD (Python) fără `topic` — topicul se pune o singură dată per fișier.
 * Implicit: codul e Python, iar opțiunile sunt afișate monospace (sunt output-uri de program).
 * Pentru opțiuni text obișnuit setează `optionsAsCode: false`.
 */
export type PyQuestion = Omit<Question, 'topic'>;

export function pyTopic(topic: Topic, questions: PyQuestion[]): Question[] {
  return questions.map(q => ({
    ...q,
    topic,
    codeLang: q.code ? (q.codeLang ?? 'python') : q.codeLang,
    optionsAsCode: q.optionsAsCode ?? true,
  }));
}
