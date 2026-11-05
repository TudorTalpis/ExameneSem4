import { pyTopic } from './pd-helpers';

// Reproducerea testului „Evaluare nr. 1 PD" (din poza trimisă), cu explicații pas cu pas.
// Unde testul avea mai multe variante corecte (bife), opțiunile au fost combinate într-o singură alegere.
export const pdTestModelQuestions = pyTopic('py-test-model', [
  {
    id: 'pd-tm-001',
    difficulty: 'easy',
    prompt: '1. Ce afișează codul următor?',
    code: `print(list(map(lambda x: x ** 2, [1, 2, 3])))`,
    options: ['[1, 4, 9]', '[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '<map object at ...>'],
    correctIndex: 0,
    explanation: `Răspuns: [1, 4, 9]

• map aplică lambda x: x ** 2 pe fiecare element → 1, 4, 9.
• list(...) transformă obiectul map în listă.

• [2, 4, 6] ar fi x * 2.
• [1, 2, 3, 1, 2, 3] ar fi [1, 2, 3] * 2.
• <map object …> s-ar afișa doar fără list().`,
  },
  {
    id: 'pd-tm-002',
    difficulty: 'hard',
    prompt: '2. Care linie de cod creează corect o listă / un vector de puncte echidistante: 0.0, 0.1, 0.2, …, 0.9, 1.0?',
    options: [
      'import numpy as np\nx = np.linspace(start=0, stop=1, num=11)',
      'x = [x*0.1 for x in range(10)]',
      'x = []\nfor i in range(1, 11):\n    x.append(round(0.1*i, 1))',
      'import numpy as np\nx = np.linspace(0, 1, 0.1)',
    ],
    correctIndex: 0,
    explanation: `Răspuns: np.linspace(start=0, stop=1, num=11)

• linspace(start, stop, num) → num puncte egal distanțate, cu stop INCLUS → 0.0, 0.1, …, 1.0 (11 puncte).

De ce nu celelalte:
• [x*0.1 for x in range(10)] → doar 10 puncte (0.0 … 0.9), lipsește 1.0; în plus 3*0.1 = 0.30000000000000004.
• range(1, 11) cu round → 0.1 … 1.0, lipsește 0.0.
• linspace(0, 1, 0.1) → TypeError: al treilea argument e NUMĂRUL de puncte (întreg), nu pasul.`,
  },
  {
    id: 'pd-tm-003',
    difficulty: 'medium',
    prompt: '3. Ce afișează codul următor?',
    code: `import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=0))`,
    options: ['[4 6]', '[1 2 3 4]', '[3 7]', '10'],
    correctIndex: 0,
    explanation: `Răspuns: [4 6]

[[1 2]
 [3 4]]
• axis=0 → suma pe fiecare COLOANĂ (pe verticală): 1+3 = 4, 2+4 = 6.
• [3 7] ar fi axis=1 (pe rânduri).
• 10 ar fi sum() fără axis.`,
  },
  {
    id: 'pd-tm-004',
    difficulty: 'hard',
    prompt: '4. Funcția to_string(lst) trebuie să returneze elementele listei separate prin virgulă: to_string([1, 2, 3]) → "1, 2, 3". Care definiții sunt corecte?',
    code: `# a)
def to_string(lst):
    return ', '.join(item for item in lst)

# b)
def to_string(lst):
    s = ''
    for item in lst: s += str(item) + ', '
    return s

# c)
def to_string(lst):
    s = ', '.join(str(item) for item in lst)
    return s

# d)
def to_string(lst):
    s = ''
    for item in lst: s += str(item) + ', '
    return s[:len(s)-2]`,
    options: ['c și d', 'doar c', 'doar d', 'a și c'],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `Răspuns: c și d

• a) join cere stringuri, dar item sunt int → TypeError.
• b) adaugă ", " și după ultimul element → "1, 2, 3, " (virgulă în plus la final).
• c) convertește fiecare element cu str(), apoi join pune ", " DOAR între ele → "1, 2, 3". ✔
• d) construiește "1, 2, 3, " apoi s[:len(s)-2] taie ultimele 2 caractere (", ") → "1, 2, 3". ✔

Varianta „pythonică" e c; d e varianta „manuală" cu slicing.`,
  },
  {
    id: 'pd-tm-005',
    difficulty: 'trap',
    prompt: '5. Care este rezultatul următorului fragment de cod?',
    code: `V = 0

def volume(a, b, c):
    V = a * b * c
    return V

V = 2
volume(10, 20, 30)
print("Volume = ", V)`,
    options: ['Volume =  2', 'Volume =  6000', 'Volume =  0', 'Eroare'],
    correctIndex: 0,
    explanation: `Răspuns: Volume = 2

Pas cu pas:
• V = 0, apoi V = 2 (variabila GLOBALĂ).
• volume(10, 20, 30) calculează V = 6000, dar acel V e LOCAL funcției.
• Valoarea returnată (6000) NU e salvată nicăieri: lipsește V = volume(10, 20, 30).
• print folosește V global → 2.

Pentru 6000 ar fi trebuit: V = volume(10, 20, 30).
(Două spații după „=" pentru că print pune automat un spațiu între argumente, iar stringul se termină deja cu spațiu.)`,
  },
  {
    id: 'pd-tm-006',
    difficulty: 'medium',
    prompt: '6. Cum se creează un grafic (subplot) într-o figură cu trei grafice unul lângă altul și două rânduri de grafice?',
    options: ['ax1 = fig.add_subplot(231)', 'ax1 = fig.add_subplot(123)', 'ax1 = fig.add_subplot(321)', 'ax1 = fig.add_subplot(3*2)'],
    correctIndex: 0,
    explanation: `Răspuns: add_subplot(231)

Cifrele înseamnă (rânduri, coloane, poziție):
• 231 → 2 rânduri × 3 coloane, graficul 1 ✔
• 123 → 1 rând × 2 coloane, poziția 3 → invalid
• 321 → 3 rânduri × 2 coloane (invers)
• 3*2 = 6 → nu e o specificație de 3 cifre → eroare`,
  },
  {
    id: 'pd-tm-007',
    difficulty: 'easy',
    prompt: '7. Ce face următorul bloc de cod?',
    code: `url = "https://www.nytimes.com"
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')`,
    options: [
      'Descarcă pagina web și parcurge (parsează) conținutul HTML al paginii',
      'Doar descarcă pagina web',
      'Preia și afișează pagina web',
      'Doar parsează un fișier HTML local',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `Răspuns: descarcă pagina ȘI o parsează (în test se bifau ambele variante).

• urlopen(url).read() → descarcă conținutul paginii (HTML ca bytes).
• BeautifulSoup(html, 'html.parser') → parsează HTML-ul într-un arbore în care poți căuta tag-uri.
• Nimic nu se AFIȘEAZĂ — nu există niciun print.`,
  },
  {
    id: 'pd-tm-008',
    difficulty: 'hard',
    prompt: '8. La interpretarea căreia dintre linii se afișează [\'beach is fun!\', \'car is fun!\'], unde words = ["beach", "car"]?',
    options: [
      'print(list(map(lambda word: f"{word} is fun!", words)))',
      'print(list(set(lambda word: f"{word} is fun!", words)))',
      'print(set(list(lambda word: f"{word} is fun!", words)))',
      'print(list(map(lambda x: f"{word} is fun!", words)))',
    ],
    correctIndex: 0,
    explanation: `Răspuns: print(list(map(lambda word: f"{word} is fun!", words)))

• map aplică lambda pe fiecare cuvânt; list() → ['beach is fun!', 'car is fun!'].

De ce nu celelalte:
• set(...) / list(...) primesc UN singur argument iterabil, nu (funcție, listă) → TypeError. Doar map aplică o funcție.
• lambda x: f"{word} …" — parametrul se numește x, dar în f-string folosește word, care nu e definit → NameError.
• print(map(list(…))) (din test) e greșit tot din cauza lui list(funcție, listă).`,
  },
  {
    id: 'pd-tm-009',
    difficulty: 'medium',
    prompt: '9. Care sunt modalitățile corecte de a obține valoarea cheii marks?',
    code: `student = {"name": "Emma", "class": 9, "marks": 75}`,
    options: [
      "m = student.get('marks')  și  m = student['marks']",
      "doar m = student['marks']",
      "m = student.get(2)  și  m = student[2]",
      "m = student[2]  și  m = student['marks']",
    ],
    correctIndex: 0,
    explanation: `Răspuns: student.get('marks') și student['marks'] — ambele dau 75.

• Dicționarele se accesează după CHEIE ('marks'), nu după poziție.
• student.get(2) → None (cheia 2 nu există, fără eroare).
• student[2] → KeyError.

Diferența dintre cele corecte: [] aruncă KeyError dacă cheia lipsește, get() întoarce None (sau o valoare implicită).`,
  },
  {
    id: 'pd-tm-010',
    difficulty: 'medium',
    prompt: '10. Ce afișează codul următor?',
    code: `from functools import reduce
print(reduce(lambda a, b: a + b, [1, 2, 3, 4], 10))`,
    options: ['20', '24', '10', '[11, 13, 16, 20]'],
    correctIndex: 0,
    explanation: `Răspuns: 20

• 10 este valoarea inițială a acumulatorului a.
• 10+1 = 11 → 11+2 = 13 → 13+3 = 16 → 16+4 = 20.
• reduce întoarce doar valoarea finală, nu lista pașilor [11, 13, 16, 20].
• 24 ar fi produsul 1·2·3·4; 10 ar fi suma fără valoarea inițială.`,
  },
]);
