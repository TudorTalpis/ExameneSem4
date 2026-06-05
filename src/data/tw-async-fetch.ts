import type { Question } from '../types/question';

export const twAsyncFetchQuestions: Question[] = [
  {
    id: 'tw-async-fetch-001',
    topic: 'async-fetch',
    difficulty: 'easy',
    prompt: 'Fetch API returnează un Promise care trebuie rezolvat cu await sau .then().',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0,
    explanation: 'Adevărat. fetch() returnează un Promise, de aceea răspunsul se obține fie cu await (în funcții async), fie cu .then(). De obicei urmează încă un pas pentru a citi corpul răspunsului (ex: response.json()).',
  },
  {
    id: 'tw-async-fetch-002',
    topic: 'async-fetch',
    difficulty: 'easy',
    prompt: 'async/await este un mod de a scrie cod asincron care arată ca cel sincron.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0,
    explanation: 'Adevărat. async/await este „zahăr sintactic" peste Promise: permite scrierea codului asincron într-un stil liniar, ușor de citit, asemănător cu cel sincron, fără lanțuri lungi de .then().',
  },
  {
    id: 'tw-async-fetch-003',
    topic: 'async-fetch',
    difficulty: 'hard',
    prompt: 'De ce verificăm response.ok după fetch?',
    options: ['Verificăm viteza', 'Erorile HTTP nu declanșează catch automat', 'Decodificăm JSON', 'response.ok nu există'],
    correctIndex: 1,
    explanation: 'fetch() respinge Promise-ul (declanșează catch) doar la erori de rețea, NU la coduri HTTP de eroare (404, 500). De aceea verificăm response.ok (true pentru status 200–299) pentru a trata explicit răspunsurile de eroare.',
  },
  {
    id: 'tw-async-fetch-004',
    topic: 'async-fetch',
    difficulty: 'medium',
    prompt: 'Ce face try/catch/finally la fetch?',
    options: ['try=fetch, catch=eroare, finally=rulează mereu', 'try=validare, catch=formatare, finally=trimitere', 'Sunt specifice React', 'try=login, catch=logout, finally=redirect'],
    correctIndex: 0,
    explanation: 'În blocul try punem operația care poate eșua (fetch-ul), în catch tratăm eroarea, iar finally rulează întotdeauna, indiferent de rezultat (util pentru a opri un indicator de loading). Sunt construcții JavaScript standard, nu specifice React.',
  },
];
