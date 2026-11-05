import { pyTopic } from './pd-helpers';

// Lab 1 — Funcții de ordin înalt: map(), filter(), reduce() (+ sorted cu key)
export const pdMapFilterReduceQuestions = pyTopic('py-map-filter-reduce', [
  // ───────────── map() ─────────────
  {
    id: 'pd-mfr-001',
    difficulty: 'easy',
    prompt: 'map() + list() — ce afișează codul?',
    code: `print(list(map(lambda x: x ** 2, [1, 2, 3])))`,
    options: ['[1, 4, 9]', '[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '<map object at 0x...>'],
    correctIndex: 0,
    explanation: `Afișează: [1, 4, 9]

Sintaxă: map(funcție, iterabil)
• map aplică funcția pe FIECARE element: 1**2, 2**2, 3**2.
• map returnează un obiect map „leneș" → list(...) îl transformă în listă ca să vedem valorile.

De ce nu [2, 4, 6]: ** e putere, nu x * 2. [1, 2, 3, 1, 2, 3] ar fi [1, 2, 3] * 2 (repetarea listei).`,
  },
  {
    id: 'pd-mfr-002',
    difficulty: 'trap',
    prompt: 'map() FĂRĂ list() — ce afișează codul?',
    code: `print(map(lambda x: x ** 2, [1, 2, 3]))`,
    options: ['<map object at 0x...>', '[1, 4, 9]', '(1, 4, 9)', '{1, 4, 9}'],
    correctIndex: 0,
    explanation: `Afișează: <map object at 0x000001...> (adresa diferă la fiecare rulare)

• map() NU calculează imediat valorile — returnează un obiect map (iterator „leneș").
• print(obiect_map) afișează doar descrierea obiectului, nu elementele.

Ca să vezi valorile: list(map(...)), set(map(...)), tuple(map(...)) sau un for.
La fel se comportă filter() → <filter object at 0x...>.`,
  },
  {
    id: 'pd-mfr-003',
    difficulty: 'easy',
    prompt: 'map() cu o funcție definită cu def — ce afișează?',
    code: `def patrat(x):
    return x ** 2

valori = [1, 2, 3, 4]
print(list(map(patrat, valori)))`,
    options: ['[1, 4, 9, 16]', '[2, 4, 6, 8]', 'TypeError', '[patrat(1), patrat(2), patrat(3), patrat(4)]'],
    correctIndex: 0,
    explanation: `Afișează: [1, 4, 9, 16]

• map(patrat, valori) — se trimite NUMELE funcției, FĂRĂ paranteze.
• map o apelează singur pe fiecare element: patrat(1), patrat(2), …

Greșeală frecventă: map(patrat(), valori) → TypeError (ai apela funcția fără argument în loc s-o trimiți).

Echivalent cu bucla clasică:
val_patrat = []
for x in valori:
    val_patrat.append(x ** 2)`,
  },
  {
    id: 'pd-mfr-004',
    difficulty: 'medium',
    prompt: 'map() cu DOUĂ liste — ce afișează?',
    code: `print(list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30])))`,
    options: ['[11, 22, 33]', '[1, 2, 3, 10, 20, 30]', '[60]', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: [11, 22, 33]

• Cu 2 iterabile, funcția trebuie să aibă 2 parametri.
• map ia elementele „în pereche", pe aceeași poziție: (1,10), (2,20), (3,30).
• 1+10, 2+20, 3+30 → [11, 22, 33].

Sintaxă: map(funcție, iterabil1, iterabil2, …) — câte iterabile, atâția parametri.`,
  },
  {
    id: 'pd-mfr-005',
    difficulty: 'hard',
    prompt: 'map() cu liste de lungimi diferite — ce afișează?',
    code: `print(list(map(lambda a, b: a * b, [1, 2, 3], [4, 5])))`,
    options: ['[4, 10]', '[4, 10, 3]', '[4, 10, 0]', 'ValueError'],
    correctIndex: 0,
    explanation: `Afișează: [4, 10]

• map se oprește la cel mai SCURT iterabil.
• Perechile sunt doar (1,4) și (2,5) → 4, 10. Elementul 3 nu are pereche și e ignorat.

La fel se comportă zip().`,
  },
  {
    id: 'pd-mfr-006',
    difficulty: 'medium',
    prompt: 'map() cu o funcție predefinită — ce afișează?',
    code: `print(list(map(str, [1, 2, 3])))
print(sum(map(int, "123")))`,
    options: ["['1', '2', '3']\n6", "[1, 2, 3]\n123", "['1', '2', '3']\n123", "['123']\n6"],
    correctIndex: 0,
    explanation: `Afișează:
['1', '2', '3']
6

• map(str, [1, 2, 3]) → transformă fiecare int în string → ['1', '2', '3'] (cu ghilimele = stringuri).
• Un string e iterabil caracter cu caracter: "123" → '1', '2', '3'.
• map(int, "123") → 1, 2, 3 → sum = 6.

Orice funcție cu un parametru merge în map: str, int, float, len, str.upper…`,
  },
  {
    id: 'pd-mfr-007',
    difficulty: 'trap',
    prompt: 'Obiectul map folosit de două ori — ce afișează?',
    code: `m = map(lambda x: x * 2, [1, 2, 3])
print(list(m))
print(list(m))`,
    options: ['[2, 4, 6]\n[]', '[2, 4, 6]\n[2, 4, 6]', '[2, 4, 6]\n[4, 8, 12]', '[]\n[]'],
    correctIndex: 0,
    explanation: `Afișează:
[2, 4, 6]
[]

• Obiectul map este un ITERATOR: se poate parcurge O SINGURĂ DATĂ.
• Primul list(m) consumă toate valorile.
• Al doilea list(m) găsește iteratorul gol → [].

Dacă ai nevoie de rezultat de mai multe ori, salvează-l: rez = list(map(...)). Același lucru e valabil pentru filter().`,
  },
  {
    id: 'pd-mfr-008',
    difficulty: 'medium',
    prompt: 'map() cu f-string — ce afișează?',
    code: `words = ["beach", "car"]
print(list(map(lambda word: f"{word} is fun!", words)))`,
    options: ["['beach is fun!', 'car is fun!']", "['{word} is fun!', '{word} is fun!']", "beach is fun! car is fun!", "('beach is fun!', 'car is fun!')"],
    correctIndex: 0,
    explanation: `Afișează: ['beach is fun!', 'car is fun!']

• f"..." (f-string) înlocuiește {word} cu valoarea variabilei word.
• lambda word: … primește pe rând "beach", apoi "car".
• list() → listă de stringuri.

Fără litera f în față, "{word} is fun!" ar rămâne text literal.`,
  },

  // ───────────── filter() ─────────────
  {
    id: 'pd-mfr-009',
    difficulty: 'easy',
    prompt: 'filter() — numere impare. Ce afișează?',
    code: `numere = [23, 5, 12, 8, 31, 4, 16]
print(list(filter(lambda x: x % 2 == 1, numere)))`,
    options: ['[23, 5, 31]', '[12, 8, 4, 16]', '[True, True, False, False, True, False, False]', '[1, 1, 1]'],
    correctIndex: 0,
    explanation: `Afișează: [23, 5, 31]

Sintaxă: filter(funcție_test, iterabil)
• Funcția trebuie să întoarcă True/False.
• Se PĂSTREAZĂ doar elementele pentru care testul e True: 23 % 2 == 1 ✔, 5 ✔, 12 ✘, 8 ✘, 31 ✔, 4 ✘, 16 ✘.
• Ordinea originală se păstrează.

Diferența față de map: map transformă elementele (ar da lista de True/False); filter doar le selectează.`,
  },
  {
    id: 'pd-mfr-010',
    difficulty: 'medium',
    prompt: 'map() vs filter() cu aceeași lambda — ce afișează?',
    code: `numere = [1, 2, 3, 4]
print(list(map(lambda x: x > 2, numere)))
print(list(filter(lambda x: x > 2, numere)))`,
    options: ['[False, False, True, True]\n[3, 4]', '[3, 4]\n[3, 4]', '[3, 4]\n[False, False, True, True]', '[False, False, True, True]\n[True, True]'],
    correctIndex: 0,
    explanation: `Afișează:
[False, False, True, True]
[3, 4]

• map pune în rezultat CE RETURNEAZĂ funcția (aici booleeni).
• filter pune în rezultat ELEMENTUL ORIGINAL, dar doar dacă funcția a returnat True.

Regulă: map = transformă (același număr de elemente); filter = selectează (≤ număr de elemente).`,
  },
  {
    id: 'pd-mfr-011',
    difficulty: 'easy',
    prompt: 'filter() pe stringuri — ce afișează?',
    code: `nume = ["ana", "mihai", "ion", "elena"]
print(list(filter(lambda s: len(s) > 3, nume)))`,
    options: ["['mihai', 'elena']", "['ana', 'ion']", '[5, 5]', "['mihai', 'ion', 'elena']"],
    correctIndex: 0,
    explanation: `Afișează: ['mihai', 'elena']

• len("ana") = 3 → 3 > 3 False ✘
• len("mihai") = 5 ✔, len("ion") = 3 ✘, len("elena") = 5 ✔

filter returnează elementele originale (stringurile), nu lungimile.`,
  },
  {
    id: 'pd-mfr-012',
    difficulty: 'medium',
    prompt: 'Rezultatul lui filter() transformat în set — ce afișează?',
    code: `numere = [4, 8, 4, 2, 8]
pare = set(filter(lambda x: x % 2 == 0, numere))
print(sorted(pare))`,
    options: ['[2, 4, 8]', '[4, 8, 4, 2, 8]', '{2, 4, 8}', '[4, 8, 2]'],
    correctIndex: 0,
    explanation: `Afișează: [2, 4, 8]

• filter păstrează toate cele 5 numere (toate sunt pare).
• set(...) elimină duplicatele → {2, 4, 8} (un set nu are ordine garantată).
• sorted(set) returnează o LISTĂ sortată → [2, 4, 8].

Asta e o metodă simplă de a afișa valorile DISTINCTE dintr-o listă.`,
  },
  {
    id: 'pd-mfr-013',
    difficulty: 'trap',
    prompt: 'filter() cu count — ce afișează?',
    code: `lst = [1, 2, 2, 3, 1]
print(list(filter(lambda x: lst.count(x) == 1, lst)))`,
    options: ['[3]', '[1, 2, 3]', '[1, 3]', '[2]'],
    correctIndex: 0,
    explanation: `Afișează: [3]

• lst.count(x) = de câte ori apare x în listă.
• 1 apare de 2 ori ✘, 2 apare de 2 ori ✘, 3 apare o dată ✔.

Capcană: asta NU dă valorile distincte ([1, 2, 3]), ci valorile UNICE (care apar o singură dată). Pentru distincte folosești set(lst).`,
  },
  {
    id: 'pd-mfr-014',
    difficulty: 'hard',
    prompt: 'filter(None, …) — ce afișează?',
    code: `date = [0, 1, '', 'a', None, 3, []]
print(list(filter(None, date)))`,
    options: ["[1, 'a', 3]", "[0, '', None, []]", "[0, 1, '', 'a', None, 3, []]", 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: [1, 'a', 3]

• Când funcția e None, filter păstrează elementele „adevărate" (truthy).
• Sunt FALSE în Python: 0, '' (string gol), None, [] (listă goală), {} , 0.0, False.
• Rămân: 1, 'a', 3.`,
  },
  {
    id: 'pd-mfr-015',
    difficulty: 'easy',
    prompt: 'Completează ca să păstrezi doar numerele pare din listă:',
    code: `numere = [23, 5, 12, 8, 31, 4, 16]
rezultat = ______(lambda x: x % 2 == 0, numere)`,
    options: ['filter', 'map', 'reduce', 'sorted'],
    correctIndex: 0,
    explanation: `Corect: filter

• „Păstrează doar …" = selecție → filter(test, iterabil).
• map ar întoarce [False, False, True, True, False, True, True].
• reduce ar combina elementele într-o singură valoare (și lambda ar trebui să aibă 2 parametri).
• sorted nu primește o funcție pe prima poziție.`,
  },

  // ───────────── reduce() ─────────────
  {
    id: 'pd-mfr-016',
    difficulty: 'easy',
    prompt: 'reduce() — suma elementelor. Ce afișează?',
    code: `from functools import reduce

L = [1, 2, 3, 4]
print(reduce(lambda x, y: x + y, L))`,
    options: ['10', '[1, 3, 6, 10]', '24', '4'],
    correctIndex: 0,
    explanation: `Afișează: 10

Sintaxă: reduce(funcție_cu_2_parametri, iterabil[, valoare_inițială])
reduce „strânge" lista într-o SINGURĂ valoare. x = rezultatul acumulat, y = elementul următor:
• pas 1: x=1, y=2 → 3
• pas 2: x=3, y=3 → 6
• pas 3: x=6, y=4 → 10

reduce NU e funcție predefinită → trebuie importată: from functools import reduce.`,
  },
  {
    id: 'pd-mfr-017',
    difficulty: 'easy',
    prompt: 'reduce() — produsul elementelor. Ce afișează?',
    code: `from functools import reduce

L = [1, 2, 3, 4]
print(reduce(lambda x, y: x * y, L))`,
    options: ['24', '10', '0', '[1, 2, 6, 24]'],
    correctIndex: 0,
    explanation: `Afișează: 24

• 1 * 2 = 2
• 2 * 3 = 6
• 6 * 4 = 24

reduce întoarce doar rezultatul FINAL, nu și pașii intermediari.`,
  },
  {
    id: 'pd-mfr-018',
    difficulty: 'medium',
    prompt: 'reduce() cu valoare inițială — ce afișează?',
    code: `from functools import reduce

print(reduce(lambda a, b: a + b, [1, 2, 3, 4], 10))`,
    options: ['20', '10', '24', '[11, 13, 16, 20]'],
    correctIndex: 0,
    explanation: `Afișează: 20

• Al 3-lea argument (10) este valoarea INIȚIALĂ a acumulatorului.
• a=10, b=1 → 11; a=11, b=2 → 13; a=13, b=3 → 16; a=16, b=4 → 20.

[11, 13, 16, 20] sunt doar pașii intermediari — reduce întoarce numai ultimul. (Întrebare din testul de evaluare.)`,
  },
  {
    id: 'pd-mfr-019',
    difficulty: 'medium',
    prompt: 'reduce() cu scădere — ce afișează?',
    code: `from functools import reduce

print(reduce(lambda a, b: a - b, [10, 3, 2]))`,
    options: ['5', '9', '-15', '15'],
    correctIndex: 0,
    explanation: `Afișează: 5

reduce aplică de la STÂNGA la DREAPTA:
• (10 - 3) = 7
• (7 - 2) = 5

Nu 10 - (3 - 2) = 9. Ordinea contează pentru operații necomutative (-, /, concatenare).`,
  },
  {
    id: 'pd-mfr-020',
    difficulty: 'medium',
    prompt: 'reduce() pentru maxim — ce afișează?',
    code: `from functools import reduce

print(reduce(lambda a, b: a if a > b else b, [3, 9, 2, 7]))`,
    options: ['9', '7', '3', '[9]'],
    correctIndex: 0,
    explanation: `Afișează: 9

lambda a, b: a if a > b else b = „păstrează-l pe cel mai mare":
• (3, 9) → 9
• (9, 2) → 9
• (9, 7) → 9

Sintaxa X if condiție else Y este „if pe o linie" (operator ternar) — singura formă de if permisă într-o lambda.`,
  },
  {
    id: 'pd-mfr-021',
    difficulty: 'hard',
    prompt: 'reduce() — câte apariții are caracterul "a"? Ce afișează?',
    code: `from functools import reduce

text = "banana"
print(reduce(lambda acc, ch: acc + (1 if ch == 'a' else 0), text, 0))`,
    options: ['3', '2', '6', "'aaa'"],
    correctIndex: 0,
    explanation: `Afișează: 3

• Valoarea inițială 0 e obligatorie aici: acumulatorul e un NUMĂR, iar elementele sunt caractere.
• b → 0, a → 1, n → 1, a → 2, n → 2, a → 3.

Fără valoarea inițială, primul acc ar fi 'b' (string) și 'b' + 0 → TypeError.
(Sarcina 4 din Lab 1: număr de apariții ale unui caracter folosind reduce.)`,
  },
  {
    id: 'pd-mfr-022',
    difficulty: 'medium',
    prompt: 'reduce() pe stringuri — ce afișează?',
    code: `from functools import reduce

print(reduce(lambda a, b: a + "-" + b, ["a", "b", "c"]))`,
    options: ['a-b-c', '-a-b-c', 'a-b-c-', "['a-', 'b-', 'c']"],
    correctIndex: 0,
    explanation: `Afișează: a-b-c

• "a" + "-" + "b" = "a-b"
• "a-b" + "-" + "c" = "a-b-c"

Rezultatul e echivalent cu "-".join(["a", "b", "c"]).`,
  },
  {
    id: 'pd-mfr-023',
    difficulty: 'trap',
    prompt: 'reduce() fără import — ce se întâmplă?',
    code: `print(reduce(lambda a, b: a + b, [1, 2, 3]))`,
    options: ['NameError', '6', 'ImportError', 'TypeError'],
    correctIndex: 0,
    explanation: `Rezultat: NameError: name 'reduce' is not defined

• map() și filter() sunt funcții predefinite (built-in).
• reduce() a fost mutată în modulul functools (din Python 3) → trebuie: from functools import reduce.

ImportError ar apărea doar dacă ai încerca să imporți ceva inexistent.`,
  },
  {
    id: 'pd-mfr-024',
    difficulty: 'hard',
    prompt: 'reduce() pe listă goală — ce se întâmplă?',
    code: `from functools import reduce

print(reduce(lambda a, b: a + b, []))`,
    options: ['TypeError', '0', 'None', '[]'],
    correctIndex: 0,
    explanation: `Rezultat: TypeError: reduce() of empty iterable with no initial value

• Fără elemente și fără valoare inițială, reduce nu are de unde porni.
• Soluție: dai o valoare inițială → reduce(lambda a, b: a + b, [], 0) întoarce 0.`,
  },

  // ───────────── combinații ─────────────
  {
    id: 'pd-mfr-025',
    difficulty: 'medium',
    prompt: 'filter() în interiorul lui map() — ce afișează?',
    code: `nums = [1, 2, 3, 4, 5, 6]
rez = list(map(lambda x: x * 10, filter(lambda x: x % 2 == 0, nums)))
print(rez)`,
    options: ['[20, 40, 60]', '[10, 20, 30, 40, 50, 60]', '[10, 30, 50]', '[2, 4, 6]'],
    correctIndex: 0,
    explanation: `Afișează: [20, 40, 60]

Citește din INTERIOR spre exterior:
1. filter(… x % 2 == 0, nums) → 2, 4, 6
2. map(lambda x: x * 10, …) → 20, 40, 60
3. list(...) → [20, 40, 60]

Echivalent cu list comprehension: [x * 10 for x in nums if x % 2 == 0].`,
  },
  {
    id: 'pd-mfr-026',
    difficulty: 'medium',
    prompt: 'map() în interiorul lui reduce() — ce afișează?',
    code: `from functools import reduce

print(reduce(lambda a, b: a + b, map(lambda x: x ** 2, [1, 2, 3])))`,
    options: ['14', '36', '6', '[1, 4, 9]'],
    correctIndex: 0,
    explanation: `Afișează: 14

1. map → 1, 4, 9 (pătratele)
2. reduce cu + → 1 + 4 = 5, 5 + 9 = 14

Tiparul „map apoi reduce" = transformi fiecare element, apoi le combini într-un singur rezultat (suma pătratelor).`,
  },
  {
    id: 'pd-mfr-027',
    difficulty: 'medium',
    prompt: 'sorted() cu key=lambda — ce afișează?',
    code: `fructe = ["banana", "kiwi", "mar"]
print(sorted(fructe, key=lambda s: len(s)))
print(sorted(fructe, key=lambda s: len(s), reverse=True))`,
    options: ["['mar', 'kiwi', 'banana']\n['banana', 'kiwi', 'mar']", "['banana', 'kiwi', 'mar']\n['mar', 'kiwi', 'banana']", "[3, 4, 6]\n[6, 4, 3]", "['banana', 'kiwi', 'mar']\n['banana', 'kiwi', 'mar']"],
    correctIndex: 0,
    explanation: `Afișează:
['mar', 'kiwi', 'banana']
['banana', 'kiwi', 'mar']

• key= primește o funcție care spune DUPĂ CE se sortează (aici lungimea: 3, 4, 6).
• În rezultat apar tot elementele originale, nu cheile.
• reverse=True → ordine descrescătoare.

Același tipar: max(lst, key=...), min(lst, key=...).`,
  },

  // ───────────── Construiește codul ─────────────
  {
    id: 'pd-mfr-028',
    kind: 'order',
    difficulty: 'easy',
    prompt: 'Construiește linia care întoarce LISTA pătratelor din lista valori, folosind map și o funcție lambda.',
    options: [],
    correctIndex: 0,
    tokens: ['list', '(', 'map', '(', 'lambda', 'x', ':', 'x ** 2', ',', 'valori', ')', ')'],
    distractorTokens: ['filter', 'reduce', 'return'],
    explanation: `Corect: list(map(lambda x: x ** 2, valori))

• map(FUNCȚIA, ITERABILUL) — funcția e primul argument.
• list(...) în exterior transformă obiectul map în listă.
• Fiecare paranteză deschisă trebuie închisă: două „(" → două „)".`,
  },
  {
    id: 'pd-mfr-029',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește codul care importă reduce și calculează suma elementelor listei L.',
    options: [],
    correctIndex: 0,
    tokens: ['from', 'functools', 'import', 'reduce', 'reduce', '(', 'lambda', 'x', ',', 'y', ':', 'x + y', ',', 'L', ')'],
    distractorTokens: ['numpy', 'map', 'x ** 2'],
    explanation: `Corect:
from functools import reduce
reduce(lambda x, y: x + y, L)

• reduce vine din modulul functools.
• Lambda pentru reduce are DOI parametri: acumulatorul (x) și elementul curent (y).`,
  },
]);
