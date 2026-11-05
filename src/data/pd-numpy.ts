import { pyTopic } from './pd-helpers';

// Lab 1 — Tablouri NumPy: creare, atribute, indexare, operații, axe
export const pdNumpyQuestions = pyTopic('py-numpy', [
  // ───────────── creare ─────────────
  {
    id: 'pd-np-001',
    difficulty: 'easy',
    prompt: 'np.array() + print — ce afișează?',
    code: `import numpy as np

a = np.array([1, 2, 3])
print(a)`,
    options: ['[1 2 3]', '[1, 2, 3]', 'array([1, 2, 3])', '(1, 2, 3)'],
    correctIndex: 0,
    explanation: `Afișează: [1 2 3]

• print() pe un array NumPy afișează elementele separate prin SPAȚII, fără virgule.
• array([1, 2, 3]) (cu virgule și „array") apare în Jupyter când scrii doar a pe ultima linie (fără print) — așa arată exemplele „Out[ ]" din îndrumar.
• [1, 2, 3] cu virgule = o listă Python obișnuită.

import numpy as np → np e doar un alias (prescurtare) pentru modulul numpy.`,
  },
  {
    id: 'pd-np-002',
    difficulty: 'easy',
    prompt: 'np.arange() — ce afișează?',
    code: `import numpy as np

print(np.arange(5))
print(np.arange(0, 11, 2))`,
    options: ['[0 1 2 3 4]\n[ 0  2  4  6  8 10]', '[0 1 2 3 4 5]\n[ 0  2  4  6  8 10]', '[1 2 3 4 5]\n[ 0  2  4  6  8]', '[0 1 2 3 4]\n[ 2  4  6  8 10]'],
    correctIndex: 0,
    explanation: `Afișează:
[0 1 2 3 4]
[ 0  2  4  6  8 10]

Sintaxă: np.arange(start, stop, pas) — exact ca range(), stop EXCLUS.
• arange(5) → 0 … 4
• arange(0, 11, 2) → 0, 2, …, 10 (11 nu intră; 10 da).
• Spațiile în plus aliniază numerele pe aceeași lățime (10 are 2 cifre).

Spre deosebire de range, arange acceptă și pas zecimal: np.arange(0, 1, 0.1).`,
  },
  {
    id: 'pd-np-003',
    difficulty: 'medium',
    prompt: 'np.linspace() — ce afișează?',
    code: `import numpy as np

print(np.linspace(0, 10, 3))`,
    options: ['[ 0.  5. 10.]', '[0 3 6]', '[ 0.  3.33  6.67]', '[0 5 10]'],
    correctIndex: 0,
    explanation: `Afișează: [ 0.  5. 10.]

Sintaxă: np.linspace(start, stop, num) — num = NUMĂRUL de puncte, stop INCLUS.
• 3 puncte egal distanțate între 0 și 10 → 0, 5, 10.
• Rezultatul e mereu float (de aceea apare „0." „5." „10.").

Diferența cheie:
• arange(start, stop, PAS) → stop exclus, dai pasul.
• linspace(start, stop, NUM) → stop inclus, dai numărul de puncte.`,
  },
  {
    id: 'pd-np-004',
    difficulty: 'medium',
    prompt: 'linspace vs arange pentru 0.0, 0.1, …, 1.0 — ce afișează?',
    code: `import numpy as np

x = np.linspace(0, 1, 11)
y = np.arange(0, 1, 0.1)
print(len(x), len(y))`,
    options: ['11 10', '10 10', '11 11', '10 11'],
    correctIndex: 0,
    explanation: `Afișează: 11 10

• linspace(0, 1, 11) → 11 puncte: 0.0, 0.1, …, 1.0 (1.0 inclus).
• arange(0, 1, 0.1) → 0.0 … 0.9 (1 e exclus) → 10 puncte.

Pentru lista 0.0, 0.1, …, 1.0 (11 valori) varianta corectă e np.linspace(start=0, stop=1, num=11).
np.linspace(0, 1, 0.1) dă eroare: al treilea argument trebuie să fie un număr întreg de puncte.`,
  },
  {
    id: 'pd-np-005',
    difficulty: 'easy',
    prompt: 'np.zeros(), np.ones() — ce afișează?',
    code: `import numpy as np

print(np.zeros(3))
print(np.ones((2, 3)).shape)`,
    options: ['[0. 0. 0.]\n(2, 3)', '[0 0 0]\n(2, 3)', '[0. 0. 0.]\n6', '[0, 0, 0]\n(3, 2)'],
    correctIndex: 0,
    explanation: `Afișează:
[0. 0. 0.]
(2, 3)

• zeros / ones creează tablouri FLOAT (de aceea „0.") umplute cu 0, respectiv 1.
• Pentru o matrice dai forma ca TUPLU: np.ones((2, 3)) → 2 rânduri, 3 coloane.
• .shape → tuplul (rânduri, coloane) = (2, 3).`,
  },
  {
    id: 'pd-np-006',
    difficulty: 'easy',
    prompt: 'np.eye() — ce afișează?',
    code: `import numpy as np

print(np.eye(3))`,
    options: ['[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]', '[[1. 1. 1.]\n [1. 1. 1.]\n [1. 1. 1.]]', '[1. 1. 1.]', '[[0. 0. 1.]\n [0. 1. 0.]\n [1. 0. 0.]]'],
    correctIndex: 0,
    explanation: `Afișează matricea unitate 3×3:
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]

• eye(n) = matrice identitate: 1 pe diagonala principală, 0 în rest.
• Matricea plină de 1 se face cu np.ones((3, 3)).`,
  },
  {
    id: 'pd-np-007',
    difficulty: 'medium',
    prompt: 'Numere aleatoare — care afirmație despre codul de mai jos e adevărată?',
    code: `import numpy as np

a = np.random.randint(1, 10, 20)
b = np.random.rand(3, 2)
c = np.random.randn(2)`,
    options: [
      'a are 20 de întregi din [1, 9]; b e 3×2 cu valori în [0, 1); c are 2 valori din distribuția normală',
      'a are 20 de întregi din [1, 10]; b e 3×2 cu valori în [0, 1]; c are 2 valori în [0, 1)',
      'a are 10 întregi din [1, 20]; b e 2×3; c are 2 valori din distribuția normală',
      'a are 20 de float-uri din [1, 10); b e 3×2 cu valori normale; c are 2 valori uniforme',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• randint(low, high, size) → întregi de la low INCLUS la high EXCLUS → 1 … 9, de 20 de ori.
• rand(3, 2) → matrice 3×2, distribuție UNIFORMĂ în [0, 1).
• randn(2) → 2 valori din distribuția NORMALĂ standard (media 0, abaterea standard 1) — pot fi și negative.

Atenție: rand/randn primesc dimensiunile direct (rand(3, 2)), nu ca tuplu ca zeros((3, 2)).`,
  },

  // ───────────── atribute & reshape ─────────────
  {
    id: 'pd-np-008',
    difficulty: 'easy',
    prompt: 'reshape() — ce afișează?',
    code: `import numpy as np

a = np.arange(6).reshape(2, 3)
print(a)`,
    options: ['[[0 1 2]\n [3 4 5]]', '[[0 1]\n [2 3]\n [4 5]]', '[[0 2 4]\n [1 3 5]]', '[0 1 2 3 4 5]'],
    correctIndex: 0,
    explanation: `Afișează:
[[0 1 2]
 [3 4 5]]

• arange(6) → [0 1 2 3 4 5]
• reshape(2, 3) → aceleași elemente, rearanjate în 2 rânduri × 3 coloane, completate RÂND cu RÂND.
• Numărul total de elemente trebuie să rămână același: 2 × 3 = 6.`,
  },
  {
    id: 'pd-np-009',
    difficulty: 'medium',
    prompt: 'reshape() cu dimensiuni greșite — ce se întâmplă?',
    code: `import numpy as np

a = np.arange(6).reshape(4, 2)
print(a)`,
    options: ['ValueError', '[[0 1]\n [2 3]\n [4 5]\n [0 0]]', '[[0 1]\n [2 3]\n [4 5]]', 'IndexError'],
    correctIndex: 0,
    explanation: `Rezultat: ValueError: cannot reshape array of size 6 into shape (4,2)

• 4 × 2 = 8 ≠ 6 elemente. reshape NU completează cu zerouri și NU taie elemente.`,
  },
  {
    id: 'pd-np-010',
    difficulty: 'medium',
    prompt: 'shape — ce afișează?',
    code: `import numpy as np

v = np.arange(25)
m = v.reshape(5, 5)
c = np.arange(5).reshape(5, 1)
print(v.shape, m.shape, c.shape)`,
    options: ['(25,) (5, 5) (5, 1)', '25 (5, 5) (5, 1)', '(25, 1) (5, 5) (1, 5)', '(25,) 25 5'],
    correctIndex: 0,
    explanation: `Afișează: (25,) (5, 5) (5, 1)

• shape e un ATRIBUT (fără paranteze!), un tuplu cu dimensiunile.
• Vector 1D cu 25 elemente → (25,) — virgula arată că e tuplu cu un singur element.
• Matrice 5×5 → (5, 5).
• reshape(5, 1) → 5 rânduri, 1 coloană (vector-coloană) → (5, 1).

Scris greșit: v.shape() → TypeError, pentru că shape nu e metodă.`,
  },
  {
    id: 'pd-np-011',
    difficulty: 'medium',
    prompt: 'dtype — ce afișează?',
    code: `import numpy as np

print(np.array([1, 2, 3.0]).dtype)
print(np.array([1, 2, 3]) / 2)`,
    options: ['float64\n[0.5 1.  1.5]', 'int64\n[0 1 1]', 'float64\n[0 1 1]', 'int64\n[0.5 1.  1.5]'],
    correctIndex: 0,
    explanation: `Afișează:
float64
[0.5 1.  1.5]

• Un array NumPy are UN SINGUR tip pentru toate elementele. Dacă unul e float (3.0), toate devin float → float64.
• Împărțirea cu / dă float, ca în Python.
• dtype pentru întregi e int64 (sau int32 pe sisteme mai vechi — de aceea în îndrumar apare dtype('int32')).`,
  },

  // ───────────── indexare ─────────────
  {
    id: 'pd-np-012',
    difficulty: 'medium',
    prompt: 'Atribuire pe o felie (slice) — ce afișează?',
    code: `import numpy as np

a = np.arange(0, 25, 5)
a[1:3] = 20
print(a)
print(a.max(), a.argmax())`,
    options: ['[ 0 20 20 15 20]\n20 1', '[ 0 20 10 15 20]\n20 1', '[ 0 20 20 15 20]\n20 4', '[20 20 10 15 20]\n20 0'],
    correctIndex: 0,
    explanation: `Afișează:
[ 0 20 20 15 20]
20 1

• arange(0, 25, 5) → [0 5 10 15 20]
• a[1:3] = 20 → indicii 1 și 2 primesc AMBII valoarea 20 (broadcasting: o valoare pe toată felia).
• max() → 20
• argmax() → INDEXUL PRIMULUI maxim → 1 (deși 20 apare și la indicii 2 și 4).

La o listă Python, lst[1:3] = 20 ar da TypeError (trebuie atribuit un iterabil).`,
  },
  {
    id: 'pd-np-013',
    difficulty: 'medium',
    prompt: 'argmax() pe o matrice — ce afișează?',
    code: `import numpy as np

m = np.arange(25).reshape(5, 5)
m[1:3] = 25
print(m.argmax())`,
    options: ['5', '1', '24', '(1, 0)'],
    correctIndex: 0,
    explanation: `Afișează: 5

• m[1:3] = 25 → rândurile 1 și 2 devin în întregime 25 (pe o matrice, un singur index selectează RÂNDURI).
• Fără axis, argmax „aplatizează" matricea într-un șir: rândul 0 ocupă pozițiile 0–4, rândul 1 începe la poziția 5.
• Primul 25 e pe poziția 5.

Exemplu direct din îndrumar.`,
  },
  {
    id: 'pd-np-014',
    difficulty: 'easy',
    prompt: 'argmin() cu valori repetate — ce afișează?',
    code: `import numpy as np

a = np.array([4, 1, 7, 1])
print(a.min(), a.argmin())`,
    options: ['1 1', '1 3', '1 [1, 3]', '0 1'],
    correctIndex: 0,
    explanation: `Afișează: 1 1

• min() → valoarea minimă: 1.
• argmin() → POZIȚIA primului minim: indexul 1 (al doilea 1, de la indexul 3, e ignorat).`,
  },
  {
    id: 'pd-np-015',
    difficulty: 'medium',
    prompt: 'Comparare și mască booleană — ce afișează?',
    code: `import numpy as np

a = np.array([5, 20, 12, 30])
print(a > 10)
print(a[a > 10])`,
    options: ['[False  True  True  True]\n[20 12 30]', 'True\n[20 12 30]', '[False  True  True  True]\n[1 2 3]', '[20 12 30]\n[False  True  True  True]'],
    correctIndex: 0,
    explanation: `Afișează:
[False  True  True  True]
[20 12 30]

• a > 10 compară FIECARE element → array boolean (mască).
• a[mască] → păstrează elementele unde masca e True.

Pe scurt: a[a > 10] = „elementele lui a mai mari decât 10". Este echivalentul NumPy al lui filter().`,
  },
  {
    id: 'pd-np-016',
    difficulty: 'medium',
    prompt: 'Indexare în matrice: [rând, coloană] — ce afișează?',
    code: `import numpy as np

m = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
print(m[1, 2], m[0], m[:, 1])`,
    options: ['6 [1 2 3] [2 5 8]', '8 [1 2 3] [4 5 6]', '6 [1 4 7] [2 5 8]', '2 [1 2 3] [2 5 8]'],
    correctIndex: 0,
    explanation: `Afișează: 6 [1 2 3] [2 5 8]

• m[1, 2] → rândul 1, coloana 2 (de la 0) → 6.
• m[0] → tot rândul 0 → [1 2 3].
• m[:, 1] → „:" = toate rândurile, coloana 1 → [2 5 8].

Sintaxă: m[rânduri, coloane]; fiecare poate fi un index sau o felie start:stop.`,
  },
  {
    id: 'pd-np-017',
    difficulty: 'hard',
    prompt: 'Felie 2D — ce afișează?',
    code: `import numpy as np

m = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
print(m[:2, 1:])`,
    options: ['[[2 3]\n [5 6]]', '[[1 2]\n [4 5]]', '[[4 5 6]\n [7 8 9]]', '[[5 6]\n [8 9]]'],
    correctIndex: 0,
    explanation: `Afișează:
[[2 3]
 [5 6]]

• :2 → rândurile 0 și 1 (2 exclus).
• 1: → coloanele de la 1 până la final (1 și 2).
• Intersecția: [2 3] și [5 6].`,
  },

  // ───────────── operații & axe ─────────────
  {
    id: 'pd-np-018',
    difficulty: 'medium',
    prompt: 'sum(axis=0) — ce afișează?',
    code: `import numpy as np

m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=0))`,
    options: ['[4 6]', '[3 7]', '10', '[1 2 3 4]'],
    correctIndex: 0,
    explanation: `Afișează: [4 6]

Matricea:
[[1 2]
 [3 4]]
• axis=0 = adună DE-A LUNGUL rândurilor, adică pe VERTICALĂ → o valoare per COLOANĂ: 1+3 = 4, 2+4 = 6.
• axis=1 = pe ORIZONTALĂ → o valoare per RÂND: 1+2 = 3, 3+4 = 7 → [3 7].
• fără axis → suma tuturor: 10.

Truc de memorare: axis=0 „strivește" rândurile (rămân coloanele), axis=1 „strivește" coloanele (rămân rândurile). (Întrebare din testul de evaluare.)`,
  },
  {
    id: 'pd-np-019',
    difficulty: 'medium',
    prompt: 'sum(axis=1), sum() și mean(axis=1) — ce afișează?',
    code: `import numpy as np

m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=1), m.sum(), m.mean(axis=1))`,
    options: ['[3 7] 10 [1.5 3.5]', '[4 6] 10 [2. 3.]', '[3 7] [10] [1.5 3.5]', '[3 7] 10 [2. 3.]'],
    correctIndex: 0,
    explanation: `Afișează: [3 7] 10 [1.5 3.5]

• sum(axis=1) → suma pe fiecare rând: [1+2, 3+4] = [3 7].
• sum() → toate elementele: 10.
• mean(axis=1) → media pe fiecare rând: [1.5 3.5] (media dă float).

axis=0 ar da media pe coloane: [2. 3.].`,
  },
  {
    id: 'pd-np-020',
    difficulty: 'trap',
    prompt: 'Array NumPy vs listă Python la * 2 — ce afișează?',
    code: `import numpy as np

print(np.array([1, 2, 3]) * 2)
print([1, 2, 3] * 2)`,
    options: ['[2 4 6]\n[1, 2, 3, 1, 2, 3]', '[2 4 6]\n[2, 4, 6]', '[1 2 3 1 2 3]\n[1, 2, 3, 1, 2, 3]', '[2 4 6]\nTypeError'],
    correctIndex: 0,
    explanation: `Afișează:
[2 4 6]
[1, 2, 3, 1, 2, 3]

• Pe array NumPy, operatorii lucrează ELEMENT CU ELEMENT (vectorizat): fiecare element × 2.
• Pe listă Python, * n REPETĂ lista.

De aceea NumPy e folosit pentru calcule: fără bucle for, operația se aplică pe tot tabloul.`,
  },
  {
    id: 'pd-np-021',
    difficulty: 'medium',
    prompt: 'Adunarea a două array-uri vs două liste — ce afișează?',
    code: `import numpy as np

print(np.array([1, 2, 3]) + np.array([10, 20, 30]))
print([1, 2, 3] + [10, 20, 30])`,
    options: ['[11 22 33]\n[1, 2, 3, 10, 20, 30]', '[11 22 33]\n[11, 22, 33]', '[ 1  2  3 10 20 30]\n[1, 2, 3, 10, 20, 30]', '66\n66'],
    correctIndex: 0,
    explanation: `Afișează:
[11 22 33]
[1, 2, 3, 10, 20, 30]

• NumPy: + adună elementele de pe aceeași poziție.
• Liste: + concatenează (lipește listele).`,
  },

  // ───────────── completare & construiește ─────────────
  {
    id: 'pd-np-022',
    difficulty: 'medium',
    prompt: 'Completează ca să obții SUMA PE FIECARE COLOANĂ a matricei m:',
    code: `col_sums = m.sum(axis=______)`,
    options: ['0', '1', '-2', 'None'],
    correctIndex: 0,
    explanation: `Corect: axis=0

• axis=0 parcurge rândurile în jos → rezultat câte unul pentru fiecare coloană.
• axis=1 → câte unul pentru fiecare rând.
• axis=None (implicit) → un singur număr, suma tuturor elementelor.`,
  },
  {
    id: 'pd-np-023',
    kind: 'order',
    difficulty: 'easy',
    prompt: 'Construiește importul obișnuit al bibliotecii NumPy.',
    options: [],
    correctIndex: 0,
    tokens: ['import', 'numpy', 'as', 'np'],
    distractorTokens: ['from', 'pandas', 'pd'],
    explanation: `Corect: import numpy as np

• as np creează aliasul np → scrii np.array(...) în loc de numpy.array(...).
• Pentru pandas convenția e: import pandas as pd.`,
  },
  {
    id: 'pd-np-024',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește linia care creează 11 puncte egal distanțate între 0 și 1 (inclusiv capetele) în variabila x.',
    options: [],
    correctIndex: 0,
    tokens: ['x', '=', 'np.linspace', '(', '0', ',', '1', ',', '11', ')'],
    distractorTokens: ['np.arange', '0.1', '10'],
    explanation: `Corect: x = np.linspace(0, 1, 11)

• linspace(start, stop, NUMĂR_DE_PUNCTE) — stop inclus.
• np.arange(0, 1, 0.1) ar exclude 1.0 (doar 10 puncte).`,
  },
  {
    id: 'pd-np-025',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește expresia care selectează din array-ul a doar elementele mai mari decât 15.',
    options: [],
    correctIndex: 0,
    tokens: ['a', '[', 'a', '>', '15', ']'],
    distractorTokens: ['filter', '(', ')'],
    explanation: `Corect: a[a > 15]

• a > 15 → mască booleană (True/False pentru fiecare element).
• a[mască] → doar elementele unde masca e True.`,
  },
]);
