import { pyTopic } from './pd-helpers';

// Lab 1 — Structuri de date: liste, tupluri, dicționare, seturi, stringuri, operatori
export const pdStructuriQuestions = pyTopic('py-structuri', [
  // ───────────── liste ─────────────
  {
    id: 'pd-ds-001',
    difficulty: 'easy',
    prompt: 'Indexare și slicing în liste — ce afișează?',
    code: `lst = [10, 20, 30, 40, 50]
print(lst[1:3], lst[-1], lst[::2])`,
    options: ['[20, 30] 50 [10, 30, 50]', '[20, 30, 40] 50 [10, 30, 50]', '[10, 20] 10 [20, 40]', '[20, 30] 10 [10, 20]'],
    correctIndex: 0,
    explanation: `Afișează: [20, 30] 50 [10, 30, 50]

Sintaxă: lista[start:stop:pas] — start INCLUS, stop EXCLUS.
• lst[1:3] → indicii 1 și 2 → [20, 30] (indexul 3 nu intră).
• lst[-1] → ultimul element → 50 (indicii negativi numără de la final).
• lst[::2] → de la început la final, din 2 în 2 → [10, 30, 50].

Indexarea începe de la 0: lst[0] = 10.`,
  },
  {
    id: 'pd-ds-002',
    difficulty: 'medium',
    prompt: 'append() vs extend() — ce afișează?',
    code: `a = [1, 2]
a.append([3, 4])
b = [1, 2]
b.extend([3, 4])
print(a, len(a))
print(b, len(b))`,
    options: ['[1, 2, [3, 4]] 3\n[1, 2, 3, 4] 4', '[1, 2, 3, 4] 4\n[1, 2, 3, 4] 4', '[1, 2, [3, 4]] 4\n[1, 2, 3, 4] 4', '[1, 2, 3, 4] 4\n[1, 2, [3, 4]] 3'],
    correctIndex: 0,
    explanation: `Afișează:
[1, 2, [3, 4]] 3
[1, 2, 3, 4] 4

• append(x) adaugă x ca UN SINGUR element la final (aici o listă întreagă, imbricată).
• extend(iterabil) adaugă FIECARE element al iterabilului separat.`,
  },
  {
    id: 'pd-ds-003',
    difficulty: 'trap',
    prompt: 'Două variabile, aceeași listă — ce afișează?',
    code: `a = [1, 2, 3]
b = a
b.append(4)
print(a)`,
    options: ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'None'],
    correctIndex: 0,
    explanation: `Afișează: [1, 2, 3, 4]

• b = a NU copiază lista — ambele nume arată spre ACELAȘI obiect în memorie.
• Modificarea prin b se vede și prin a.

Pentru o copie independentă: b = a.copy() sau b = a[:] sau b = list(a).`,
  },
  {
    id: 'pd-ds-004',
    difficulty: 'trap',
    prompt: 'sort() vs sorted() — ce afișează?',
    code: `a = [3, 1, 2]
b = a.sort()
print(a, b)`,
    options: ['[1, 2, 3] None', '[3, 1, 2] [1, 2, 3]', '[1, 2, 3] [1, 2, 3]', '[3, 1, 2] None'],
    correctIndex: 0,
    explanation: `Afișează: [1, 2, 3] None

• lista.sort() sortează lista PE LOC (o modifică) și returnează None.
• sorted(lista) NU modifică lista, ci returnează o listă NOUĂ sortată.

Regulă generală: metodele care modifică lista (append, sort, reverse, extend) întorc None.`,
  },
  {
    id: 'pd-ds-005',
    difficulty: 'easy',
    prompt: 'Operatorii * și + pe liste — ce afișează?',
    code: `print([0] * 3, [1, 2] + [3])`,
    options: ['[0, 0, 0] [1, 2, 3]', '[0] [6]', '[0, 0, 0] [4, 5]', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: [0, 0, 0] [1, 2, 3]

• listă * n → repetă lista de n ori.
• listă + listă → CONCATENARE (lipire).

Atenție: la array-urile NumPy, * și + sunt operații MATEMATICE element cu element (vezi topicul NumPy).`,
  },
  {
    id: 'pd-ds-006',
    difficulty: 'easy',
    prompt: 'List comprehension cu condiție — ce afișează?',
    code: `print([x ** 2 for x in range(1, 6) if x % 2 == 1])`,
    options: ['[1, 9, 25]', '[1, 4, 9, 16, 25]', '[4, 16]', '[1, 3, 5]'],
    correctIndex: 0,
    explanation: `Afișează: [1, 9, 25]

Sintaxă: [expresie for x in iterabil if condiție]
• range(1, 6) → 1, 2, 3, 4, 5
• if x % 2 == 1 păstrează impare → 1, 3, 5
• x ** 2 → 1, 9, 25

E echivalentul compact al lui list(map(lambda x: x**2, filter(lambda x: x % 2 == 1, range(1, 6)))).`,
  },
  {
    id: 'pd-ds-007',
    difficulty: 'easy',
    prompt: 'range() cu pas — ce afișează?',
    code: `print(list(range(1, 10, 3)))
print(list(range(5, 0, -2)))`,
    options: ['[1, 4, 7]\n[5, 3, 1]', '[1, 4, 7, 10]\n[5, 3, 1]', '[1, 4, 7]\n[5, 3, 1, -1]', '[3, 6, 9]\n[0, 2, 4]'],
    correctIndex: 0,
    explanation: `Afișează:
[1, 4, 7]
[5, 3, 1]

Sintaxă: range(start, stop, pas) — stop NU e inclus.
• 1, 4, 7 (10 nu intră).
• Pas negativ numără înapoi: 5, 3, 1 (0 nu intră).
• range(n) = range(0, n) → 0 … n-1.`,
  },
  {
    id: 'pd-ds-008',
    difficulty: 'medium',
    prompt: 'enumerate() și zip() — ce afișează?',
    code: `for i, v in enumerate(['a', 'b']):
    print(i, v)
print(list(zip([1, 2, 3], ['x', 'y'])))`,
    options: ["0 a\n1 b\n[(1, 'x'), (2, 'y')]", "1 a\n2 b\n[(1, 'x'), (2, 'y')]", "0 a\n1 b\n[(1, 'x'), (2, 'y'), (3, None)]", "a 0\nb 1\n[1, 'x', 2, 'y']"],
    correctIndex: 0,
    explanation: `Afișează:
0 a
1 b
[(1, 'x'), (2, 'y')]

• enumerate dă perechi (index, valoare), cu indexul pornind de la 0.
• zip împerechează elementele de pe aceeași poziție în tupluri și se oprește la cea mai scurtă listă (3 rămâne fără pereche).`,
  },

  // ───────────── tupluri ─────────────
  {
    id: 'pd-ds-009',
    difficulty: 'easy',
    prompt: 'Parcurgerea unei liste de tupluri (stock_prices) — ce afișează?',
    code: `stock_prices = [('A', 200), ('B', 300), ('C', 600)]
for stock, price in stock_prices:
    print(stock, end=" ")
print()
print(stock_prices[1])`,
    options: ["A B C \n('B', 300)", "200 300 600 \n('B', 300)", "A B C \n('A', 200)", "('A', 200) ('B', 300) ('C', 600) \nB"],
    correctIndex: 0,
    explanation: `Afișează:
A B C
('B', 300)

• for stock, price in … despachetează fiecare tuplu: stock = 'A', price = 200 etc.
• print(stock, end=" ") → totul pe un rând; print() gol trece la rând nou.
• stock_prices[1] → al DOILEA element (indexul începe de la 0) → tuplul ('B', 300).`,
  },
  {
    id: 'pd-ds-010',
    difficulty: 'medium',
    prompt: 'Modificarea unui tuplu — ce se întâmplă?',
    code: `t = (1, 2, 3)
t[0] = 10
print(t)`,
    options: ['TypeError', '(10, 2, 3)', '(1, 2, 3)', 'IndexError'],
    correctIndex: 0,
    explanation: `Rezultat: TypeError: 'tuple' object does not support item assignment

• Tuplurile sunt IMUTABILE: după creare nu poți schimba, adăuga sau șterge elemente.
• Listele [ ] sunt mutabile, tuplurile ( ) nu.

De aceea funcțiile returnează des tupluri: rezultate multiple care nu trebuie modificate.`,
  },
  {
    id: 'pd-ds-011',
    difficulty: 'trap',
    prompt: 'Tuplu cu un singur element — ce afișează?',
    code: `print(type((5)).__name__, type((5,)).__name__)`,
    options: ['int tuple', 'tuple tuple', 'int int', 'tuple int'],
    correctIndex: 0,
    explanation: `Afișează: int tuple

• (5) sunt doar paranteze de grupare (ca în (2 + 3) * 4) → int.
• (5,) — VIRGULA face tuplul, nu parantezele.

La fel: x = 1, 2 creează tuplul (1, 2) chiar fără paranteze.`,
  },

  // ───────────── dicționare ─────────────
  {
    id: 'pd-ds-012',
    difficulty: 'medium',
    prompt: 'dict.get() — ce afișează?',
    code: `student = {"name": "Emma", "class": 9, "marks": 75}
print(student.get('marks'), student.get('age'), student.get('age', 0))`,
    options: ['75 None 0', '75 KeyError 0', '75 0 0', 'marks None 0'],
    correctIndex: 0,
    explanation: `Afișează: 75 None 0

• get(cheie) → valoarea, sau None dacă cheia nu există (FĂRĂ eroare).
• get(cheie, implicit) → valoarea implicită dacă cheia lipsește.

Compară: student['age'] (cu paranteze drepte) pe o cheie inexistentă → KeyError.`,
  },
  {
    id: 'pd-ds-013',
    difficulty: 'medium',
    prompt: 'Acces cu [] pe o cheie inexistentă — ce se întâmplă?',
    code: `student = {"name": "Emma", "class": 9, "marks": 75}
print(student[2])`,
    options: ['KeyError', '75', 'IndexError', 'None'],
    correctIndex: 0,
    explanation: `Rezultat: KeyError: 2

• Dicționarele se accesează după CHEIE, nu după poziție.
• Cheia 2 (int) nu există → KeyError.
• Nu e IndexError: acela apare la liste/tupluri când indexul depășește lungimea.

Corect: student['marks'] sau student.get('marks').`,
  },
  {
    id: 'pd-ds-014',
    difficulty: 'easy',
    prompt: 'keys() și items() — ce afișează?',
    code: `preturi = {'mere': 4.5, 'pere': 6.0}
print(list(preturi.keys()))
print(list(preturi.items()))`,
    options: ["['mere', 'pere']\n[('mere', 4.5), ('pere', 6.0)]", "['mere', 'pere']\n[4.5, 6.0]", "[4.5, 6.0]\n[('mere', 4.5), ('pere', 6.0)]", "['mere', 'pere']\n{'mere': 4.5, 'pere': 6.0}"],
    correctIndex: 0,
    explanation: `Afișează:
['mere', 'pere']
[('mere', 4.5), ('pere', 6.0)]

• keys() → doar cheile; values() → doar valorile; items() → perechi (cheie, valoare) ca TUPLURI.
• Dicționarele păstrează ordinea inserării.

Tipar util: for cheie, valoare in d.items(): …  (Sarcina 1 din Lab 1.)`,
  },
  {
    id: 'pd-ds-015',
    difficulty: 'easy',
    prompt: 'Modificarea și adăugarea în dicționar — ce afișează?',
    code: `d = {'a': 1}
d['a'] = 5
d['b'] = 2
print(d, len(d))`,
    options: ["{'a': 5, 'b': 2} 2", "{'a': 1, 'a': 5, 'b': 2} 3", "{'a': 5, 'b': 2} 3", 'KeyError'],
    correctIndex: 0,
    explanation: `Afișează: {'a': 5, 'b': 2} 2

• d['a'] = 5 — cheia există → valoarea se SUPRASCRIE.
• d['b'] = 2 — cheia nu există → se ADAUGĂ.
• Cheile sunt unice, deci len = 2.

Atribuirea cu [] nu dă niciodată KeyError (doar citirea unei chei inexistente).`,
  },
  {
    id: 'pd-ds-016',
    difficulty: 'medium',
    prompt: 'Dict comprehension — ce afișează?',
    code: `print({x: x * x for x in range(3)})`,
    options: ['{0: 0, 1: 1, 2: 4}', '{0, 1, 4}', '[0, 1, 4]', '{1: 1, 2: 4, 3: 9}'],
    correctIndex: 0,
    explanation: `Afișează: {0: 0, 1: 1, 2: 4}

Sintaxă: {cheie: valoare for x in iterabil}
• range(3) → 0, 1, 2; cheia = x, valoarea = x * x.

Cu acolade dar FĂRĂ „:" ({x * x for x in …}) obții un SET, nu un dicționar.`,
  },

  // ───────────── seturi ─────────────
  {
    id: 'pd-ds-017',
    difficulty: 'easy',
    prompt: 'Set — eliminarea duplicatelor. Ce afișează?',
    code: `valori = [3, 1, 3, 2, 1]
print(len(set(valori)), sorted(set(valori)))`,
    options: ['3 [1, 2, 3]', '5 [1, 1, 2, 3, 3]', '3 {1, 2, 3}', '3 [3, 1, 2]'],
    correctIndex: 0,
    explanation: `Afișează: 3 [1, 2, 3]

• set() păstrează doar valorile DISTINCTE → {1, 2, 3}, len = 3.
• sorted() pe un set întoarce o LISTĂ sortată.

Un set nu are ordine și nu are indexare (set[0] → TypeError).`,
  },
  {
    id: 'pd-ds-018',
    difficulty: 'medium',
    prompt: 'Operații pe mulțimi — ce afișează?',
    code: `a = {1, 2, 3}
b = {2, 3, 4}
print(a & b, a | b, a - b)`,
    options: ['{2, 3} {1, 2, 3, 4} {1}', '{1, 4} {1, 2, 3, 4} {1}', '{2, 3} {1, 2, 2, 3, 3, 4} {4}', '{2, 3} {1, 2, 3, 4} {4}'],
    correctIndex: 0,
    explanation: `Afișează: {2, 3} {1, 2, 3, 4} {1}

• & = intersecție (în ambele) → {2, 3}
• | = reuniune (în oricare, fără dubluri) → {1, 2, 3, 4}
• - = diferență (în a, dar nu în b) → {1}

Echivalente cu metodele: a.intersection(b), a.union(b), a.difference(b).`,
  },

  // ───────────── stringuri ─────────────
  {
    id: 'pd-ds-019',
    difficulty: 'easy',
    prompt: 'Metode și slicing pe stringuri — ce afișează?',
    code: `s = "Python"
print(s[1], s.upper(), s.find('h'), s[::-1])`,
    options: ['y PYTHON 3 nohtyP', 'P PYTHON 4 nohtyP', 'y python 3 Python', 'y PYTHON 2 nohtyP'],
    correctIndex: 0,
    explanation: `Afișează: y PYTHON 3 nohtyP

• s[1] → al doilea caracter (index 0 = 'P') → 'y'.
• s.upper() → toate literele mari.
• s.find('h') → poziția primei apariții: P0 y1 t2 h3 → 3 (sau -1 dacă nu există).
• s[::-1] → pas -1 = stringul inversat.

(Sarcina 6 din Lab 1: al doilea caracter, majuscule, poziția unui caracter.)`,
  },
  {
    id: 'pd-ds-020',
    difficulty: 'medium',
    prompt: 'find() pe un caracter care lipsește — ce afișează?',
    code: `print("python".find("z"))`,
    options: ['-1', 'None', 'ValueError', '0'],
    correctIndex: 0,
    explanation: `Afișează: -1

• find() întoarce -1 când nu găsește (fără eroare).
• index() face același lucru, dar când nu găsește aruncă ValueError.`,
  },
  {
    id: 'pd-ds-021',
    difficulty: 'medium',
    prompt: 'join() — ce afișează?',
    code: `print(", ".join(["1", "2", "3"]))
print("".join(["a", "b"]) * 2)`,
    options: ['1, 2, 3\nabab', '1, 2, 3, \nabab', "['1', '2', '3']\nab ab", '1,2,3\naabb'],
    correctIndex: 0,
    explanation: `Afișează:
1, 2, 3
abab

Sintaxă: separator.join(listă_de_stringuri)
• Separatorul se pune DOAR între elemente (nu la final).
• "".join(["a", "b"]) = "ab"; "ab" * 2 = "abab" (repetare).`,
  },
  {
    id: 'pd-ds-022',
    difficulty: 'trap',
    prompt: 'join() pe o listă de numere — ce se întâmplă?',
    code: `print(", ".join([1, 2, 3]))`,
    options: ['TypeError', '1, 2, 3', '6', '[1, 2, 3]'],
    correctIndex: 0,
    explanation: `Rezultat: TypeError: sequence item 0: expected str instance, int found

• join lucrează DOAR cu stringuri.
• Corect: ", ".join(str(x) for x in [1, 2, 3])  sau  ", ".join(map(str, [1, 2, 3])).

Aceasta e exact capcana din testul de evaluare (funcția to_string, varianta a).`,
  },
  {
    id: 'pd-ds-023',
    difficulty: 'easy',
    prompt: 'f-string — ce afișează?',
    code: `nume = "Ana"
varsta = 20
print(f"{nume} are {varsta + 1} ani")
print(f"{3.14159:.2f}")`,
    options: ['Ana are 21 ani\n3.14', '{nume} are {varsta + 1} ani\n3.14159', 'Ana are 201 ani\n3.14', 'Ana are 21 ani\n3.15'],
    correctIndex: 0,
    explanation: `Afișează:
Ana are 21 ani
3.14

• f"..." evaluează expresiile din acolade: {varsta + 1} → 21.
• {valoare:.2f} formatează ca float cu 2 zecimale (rotunjit) → 3.14.`,
  },
  {
    id: 'pd-ds-024',
    difficulty: 'hard',
    prompt: 'Secunde → hh:mm:ss — ce afișează?',
    code: `secunde = 3725
h = secunde // 3600
m = (secunde % 3600) // 60
s = secunde % 60
print(f"{h:02d}:{m:02d}:{s:02d}")`,
    options: ['01:02:05', '1:2:5', '01:02:5', '1.03:02:05'],
    correctIndex: 0,
    explanation: `Afișează: 01:02:05

• // = împărțire ÎNTREAGĂ: 3725 // 3600 = 1 oră.
• % = RESTUL: 3725 % 3600 = 125 secunde rămase → 125 // 60 = 2 minute.
• 3725 % 60 = 5 secunde.
• :02d = întreg pe 2 cifre, completat cu 0 în față → 01, 02, 05.

(Sarcina 2 din Lab 1.)`,
  },

  // ───────────── operatori numerici ─────────────
  {
    id: 'pd-ds-025',
    difficulty: 'easy',
    prompt: 'Operatori aritmetici — ce afișează?',
    code: `print(7 // 2, 7 % 2, 7 / 2, 2 ** 3)`,
    options: ['3 1 3.5 8', '3.5 1 3 6', '3 1 3 8', '3 0 3.5 8'],
    correctIndex: 0,
    explanation: `Afișează: 3 1 3.5 8

• // împărțire întreagă (rotunjește în jos) → 3
• % restul împărțirii → 1
• / împărțire reală, MEREU float → 3.5
• ** putere → 2³ = 8`,
  },
  {
    id: 'pd-ds-026',
    difficulty: 'trap',
    prompt: 'Puncte echidistante cu list comprehension — ce afișează?',
    code: `print([x * 0.1 for x in range(4)])`,
    options: ['[0.0, 0.1, 0.2, 0.30000000000000004]', '[0.0, 0.1, 0.2, 0.3]', '[0.1, 0.2, 0.3, 0.4]', '[0, 0.1, 0.2, 0.3]'],
    correctIndex: 0,
    explanation: `Afișează: [0.0, 0.1, 0.2, 0.30000000000000004]

• Numerele zecimale (float) sunt stocate în binar și unele nu pot fi reprezentate exact → 3 * 0.1 = 0.30000000000000004.
• De aceea 0.1 * 3 == 0.3 este False.

Soluții: round(x * 0.1, 1) sau np.linspace(0, 1, 11) pentru puncte echidistante.
Atenție și la range(10): dă 10 puncte (0 … 0.9), fără 1.0 — capcană din testul de evaluare.`,
  },
]);
