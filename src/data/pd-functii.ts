import { pyTopic } from './pd-helpers';

// Lab 1 — Funcții, lambda, *args / **kwargs, domeniul variabilelor (scope)
export const pdFunctiiQuestions = pyTopic('py-functii', [
  // ───────────── def / return ─────────────
  {
    id: 'pd-fn-001',
    difficulty: 'easy',
    prompt: 'def + return — ce afișează codul?',
    code: `def suma(a, b):
    return a + b

print(suma(2, 3))`,
    options: ['5', '23', 'None', 'Eroare'],
    correctIndex: 0,
    explanation: `Afișează: 5

Pas cu pas:
• def suma(a, b): doar DEFINEȘTE funcția — încă nu se execută nimic.
• suma(2, 3) → a = 2, b = 3 → return 2 + 3 → 5.
• print() afișează valoarea returnată.

Sintaxă: def nume(param1, param2):  → două puncte (:) la final, corpul indentat cu 4 spații, return trimite rezultatul înapoi.

De ce nu „23": + între două int-uri e adunare; „23" ar ieși doar pentru stringuri ("2" + "3").`,
  },
  {
    id: 'pd-fn-002',
    difficulty: 'medium',
    prompt: 'Funcție fără return — ce afișează codul?',
    code: `def salut(nume):
    print("Salut,", nume)

r = salut("Ana")
print(r)`,
    options: ['Salut, Ana\nNone', 'Salut, Ana', 'None', 'Salut, Ana\nSalut, Ana'],
    correctIndex: 0,
    explanation: `Afișează două rânduri:
Salut, Ana
None

Pas cu pas:
• salut("Ana") execută print → apare „Salut, Ana" (print pune automat un spațiu între argumente).
• Funcția NU are return → returnează implicit None.
• r = None, deci print(r) afișează None.

Regulă: print() AFIȘEAZĂ, return ÎNTOARCE o valoare. O funcție fără return întoarce mereu None.`,
  },
  {
    id: 'pd-fn-003',
    difficulty: 'medium',
    prompt: 'Parametri cu valori implicite — ce afișează codul?',
    code: `def putere(baza, exp=2):
    return baza ** exp

print(putere(3), putere(2, 3), putere(exp=3, baza=2))`,
    options: ['9 8 8', '9 9 8', '6 8 8', '9 8 9'],
    correctIndex: 0,
    explanation: `Afișează: 9 8 8

Pas cu pas:
• putere(3) → exp lipsește, ia valoarea implicită 2 → 3 ** 2 = 9.
• putere(2, 3) → baza=2, exp=3 (poziționale) → 2 ** 3 = 8.
• putere(exp=3, baza=2) → argumente keyword: ordinea nu contează, contează numele → 2 ** 3 = 8.

Sintaxă: param=valoare în def = valoare implicită. ** = ridicare la putere (nu înmulțire: 3 * 2 ar fi 6).`,
  },
  {
    id: 'pd-fn-004',
    difficulty: 'trap',
    prompt: 'Variabilă locală vs globală — ce afișează codul?',
    code: `x = 10

def f():
    x = 5
    return x

f()
print(x)`,
    options: ['10', '5', 'None', 'UnboundLocalError'],
    correctIndex: 0,
    explanation: `Afișează: 10

Pas cu pas:
• x = 10 este o variabilă GLOBALĂ.
• În f(), x = 5 creează o variabilă LOCALĂ nouă, tot numită x — nu o modifică pe cea globală.
• f() returnează 5, dar rezultatul nu e salvat nicăieri (se pierde).
• print(x) folosește x-ul global → 10.

Aceeași capcană apare în testul de evaluare (V = 0 … volume() … print(V)): atribuirea în funcție creează o variabilă locală.`,
  },
  {
    id: 'pd-fn-005',
    difficulty: 'medium',
    prompt: 'Cuvântul cheie global — ce afișează codul?',
    code: `x = 10

def f():
    global x
    x = 5

f()
print(x)`,
    options: ['5', '10', 'None', 'SyntaxError'],
    correctIndex: 0,
    explanation: `Afișează: 5

• global x îi spune lui Python: „x din funcție este x-ul GLOBAL, nu crea unul local".
• x = 5 modifică deci variabila globală.
• print(x) → 5.

Compară cu întrebarea fără global: acolo x rămânea 10.`,
  },
  {
    id: 'pd-fn-006',
    difficulty: 'easy',
    prompt: 'Lambda simplă — ce afișează codul?',
    code: `suma = lambda a, b: a + b
print(suma(4, 6))`,
    options: ['10', '46', '<function <lambda>>', 'SyntaxError'],
    correctIndex: 0,
    explanation: `Afișează: 10

Sintaxă: lambda argumente: expresie
• Înainte de „:" sunt parametrii (a, b), după „:" este expresia returnată AUTOMAT (fără cuvântul return).
• suma = lambda a, b: a + b este echivalent cu:
  def suma(a, b):
      return a + b
• suma(4, 6) → 4 + 6 = 10.

Lambda poate conține o SINGURĂ expresie (fără if pe mai multe linii, fără return, fără atribuiri).`,
  },
  {
    id: 'pd-fn-007',
    difficulty: 'medium',
    prompt: 'Lambda cu valori implicite (exemplul din îndrumar) — ce afișează?',
    code: `suma = (lambda a=2, b=3: a + b)
print(suma(), suma(10), suma(b=1))`,
    options: ['5 13 3', '5 10 3', '5 13 4', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: 5 13 3

• suma() → a=2, b=3 (implicite) → 5.
• suma(10) → a=10, b=3 → 13.
• suma(b=1) → a=2 (implicit), b=1 → 3.

Lambda acceptă exact aceleași tipuri de parametri ca def: implicite, keyword, *args, **kwargs.`,
  },
  {
    id: 'pd-fn-008',
    difficulty: 'medium',
    prompt: 'Listă de funcții lambda — ce afișează codul?',
    code: `functii = [lambda x: x**2, lambda x: x**3, lambda x: x**4]

for f in functii:
    print(f(2), end=" ")`,
    options: ['4 8 16', '2 2 2', '4 6 8', '16 8 4'],
    correctIndex: 0,
    explanation: `Afișează: 4 8 16

• Lista conține 3 FUNCȚII (nu valori). În for, f ia pe rând fiecare funcție.
• f(2) le apelează: 2**2 = 4, 2**3 = 8, 2**4 = 16.
• end=" " înlocuiește trecerea la rând nou cu un spațiu → totul pe o linie.

Ideea: în Python funcțiile sunt obiecte — pot fi puse în liste, dicționare, trimise ca argumente.`,
  },
  {
    id: 'pd-fn-009',
    difficulty: 'medium',
    prompt: 'Dicționar de funcții lambda — ce afișează codul?',
    code: `ops = {
    'patrat': lambda x: x**2,
    'cub': lambda x: x**3,
}
print(ops['cub'](3))`,
    options: ['27', '9', "'cub'", 'KeyError'],
    correctIndex: 0,
    explanation: `Afișează: 27

Citește de la stânga la dreapta:
• ops['cub'] → extrage funcția lambda x: x**3 din dicționar.
• (3) → o apelează imediat cu x = 3 → 3**3 = 27.

Sintaxă: dict[cheie](argument) = „ia funcția de la cheie și apeleaz-o".`,
  },
  {
    id: 'pd-fn-010',
    difficulty: 'medium',
    prompt: 'Lambda apelată imediat — ce afișează codul?',
    code: `print((lambda x, y: x * y)(3, 4))`,
    options: ['12', '7', '<function <lambda>>', 'SyntaxError'],
    correctIndex: 0,
    explanation: `Afișează: 12

• (lambda x, y: x * y) creează o funcție anonimă (fără nume).
• (3, 4) imediat după o apelează → 3 * 4 = 12.

Dacă ai scrie print(lambda x, y: x * y) fără (3, 4), s-ar afișa obiectul funcție: <function <lambda> at 0x...>.`,
  },
  {
    id: 'pd-fn-011',
    difficulty: 'trap',
    prompt: 'Lambda creată într-o buclă — ce afișează codul?',
    code: `functii = [lambda x: x * i for i in range(3)]
print([f(10) for f in functii])`,
    options: ['[20, 20, 20]', '[0, 10, 20]', '[0, 0, 0]', '[10, 10, 10]'],
    correctIndex: 0,
    explanation: `Afișează: [20, 20, 20]

Capcană („late binding"):
• Lambda NU memorează valoarea lui i în momentul creării — memorează doar NUMELE i.
• Valoarea lui i se caută abia când lambda este APELATĂ.
• La apel, bucla s-a terminat, iar i = 2 → toate dau 10 * 2 = 20.

Soluție dacă vrei [0, 10, 20]: lambda x, i=i: x * i (valoarea implicită se fixează la creare).`,
  },
  {
    id: 'pd-fn-012',
    difficulty: 'medium',
    prompt: 'Funcție trimisă ca argument (funcție de ordin înalt) — ce afișează?',
    code: `def aplica(f, valoare):
    return f(valoare)

print(aplica(lambda s: s.upper(), "python"))`,
    options: ['PYTHON', 'python', 'Python', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: PYTHON

• aplica primește o FUNCȚIE (f) și o valoare.
• f = lambda s: s.upper(), valoare = "python".
• f("python") → "python".upper() → "PYTHON".

Funcție de ordin înalt = funcție care primește sau returnează alte funcții. map(), filter(), reduce() sunt exact astfel de funcții.`,
  },
  {
    id: 'pd-fn-013',
    difficulty: 'medium',
    prompt: 'Funcție recursivă (suma primelor N numere) — ce afișează?',
    code: `def suma_n(n):
    if n == 0:
        return 0
    return n + suma_n(n - 1)

print(suma_n(4))`,
    options: ['10', '4', '0', 'RecursionError'],
    correctIndex: 0,
    explanation: `Afișează: 10

Desfășurarea apelurilor:
suma_n(4) = 4 + suma_n(3)
          = 4 + 3 + suma_n(2)
          = 4 + 3 + 2 + suma_n(1)
          = 4 + 3 + 2 + 1 + suma_n(0)
          = 4 + 3 + 2 + 1 + 0 = 10

Orice funcție recursivă are nevoie de un caz de oprire (aici n == 0). Fără el → RecursionError.`,
  },
  {
    id: 'pd-fn-014',
    difficulty: 'medium',
    prompt: 'Apel înainte de definire — ce se întâmplă?',
    code: `print(dublu(5))

def dublu(x):
    return 2 * x`,
    options: ['NameError', '10', 'None', 'SyntaxError'],
    correctIndex: 0,
    explanation: `Rezultat: NameError: name 'dublu' is not defined

• Python execută fișierul de sus în jos, linie cu linie.
• Pe linia 1, funcția dublu încă NU a fost definită (def vine mai jos).

Regulă din îndrumar: funcțiile trebuie definite ÎNAINTE de a fi apelate, altfel apare NameError.`,
  },
  {
    id: 'pd-fn-015',
    difficulty: 'easy',
    prompt: 'if în funcție + indentare — ce afișează codul?',
    code: `def semn(x):
    if x > 0:
        return "pozitiv"
    return "nepozitiv"

print(semn(0))`,
    options: ['nepozitiv', 'pozitiv', 'None', 'IndentationError'],
    correctIndex: 0,
    explanation: `Afișează: nepozitiv

• 0 > 0 este False → blocul if nu se execută.
• Se trece la return "nepozitiv" (aliniat cu if, deci în afara lui).

În Python indentarea DEFINEȘTE blocurile (nu există acolade { }). return "nepozitiv" e la același nivel cu if, deci rulează când if e fals.`,
  },
  {
    id: 'pd-fn-016',
    difficulty: 'medium',
    prompt: 'Funcție care returnează un tuplu — ce afișează?',
    code: `def min_max(lst):
    return min(lst), max(lst)

a, b = min_max([4, 1, 9])
print(a, b)
print(min_max([4, 1, 9]))`,
    options: ['1 9\n(1, 9)', '1 9\n[1, 9]', '(1, 9)\n(1, 9)', '1 9\n1 9'],
    correctIndex: 0,
    explanation: `Afișează:
1 9
(1, 9)

• return min(lst), max(lst) returnează UN tuplu: (1, 9) — virgula creează tuplul.
• a, b = (1, 9) → despachetare (unpacking): a = 1, b = 9.
• print(a, b) → 1 9; print(tuplu) → (1, 9) cu paranteze rotunde.

La fel funcționează employee_check() din îndrumar: return (employee_of_month, current_max).`,
  },
  {
    id: 'pd-fn-017',
    difficulty: 'medium',
    prompt: 'Lab 1 — employee_check: ce afișează codul?',
    code: `work_hours = [('Matei', 250), ('Maria', 300), ('Sofia', 400),
              ('David', 400), ('Sara', 450)]

def employee_check(work_hours):
    current_max = 0
    employee_of_month = ''
    for employee, hours in work_hours:
        if hours > current_max:
            current_max = hours
            employee_of_month = employee
        else:
            pass
    return (employee_of_month, current_max)

print(employee_check(work_hours))`,
    options: ["('Sara', 450)", "('David', 400)", "('Sofia', 400)", "Sara 450"],
    correctIndex: 0,
    explanation: `Afișează: ('Sara', 450)

Urmărim bucla (employee, hours despachetează fiecare tuplu):
• Matei 250 > 0 → max = 250
• Maria 300 > 250 → max = 300
• Sofia 400 > 300 → max = 400
• David 400 > 400? NU (strict mai mare) → pass, nu schimbă nimic
• Sara 450 > 400 → max = 450

pass = instrucțiune care nu face nimic (e corectă sintactic acolo unde e obligatoriu un bloc).`,
  },

  // ───────────── *args / **kwargs ─────────────
  {
    id: 'pd-fn-018',
    difficulty: 'easy',
    prompt: '*args — ce afișează codul?',
    code: `def myfunc(*args):
    return sum(args) * 0.02

print(myfunc(20000, 6000, 4500))`,
    options: ['610.0', '520.0', '30500', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: 610.0

• *args strânge TOATE argumentele poziționale într-un TUPLU: args = (20000, 6000, 4500).
• sum(args) = 30500 → 30500 * 0.02 = 610.0 (float, pentru că 0.02 e float).

Avantaj față de def myfunc(a=0, b=0, c=0, …): poți trimite oricâte numere.`,
  },
  {
    id: 'pd-fn-019',
    difficulty: 'medium',
    prompt: 'Ce tip are args? Ce afișează codul?',
    code: `def f(*args):
    print(type(args).__name__, args)

f(1, 2, 3)`,
    options: ['tuple (1, 2, 3)', 'list [1, 2, 3]', 'dict {1, 2, 3}', 'int 1'],
    correctIndex: 0,
    explanation: `Afișează: tuple (1, 2, 3)

• *args = argumentele poziționale „în plus", strânse într-un TUPLU (nu listă!).
• type(args).__name__ dă numele tipului: tuple.

Reține: *args → tuplu, **kwargs → dicționar.`,
  },
  {
    id: 'pd-fn-020',
    difficulty: 'easy',
    prompt: '**kwargs — ce afișează codul?',
    code: `def f(**kwargs):
    print(kwargs)

f(a=1, b=2)`,
    options: ["{'a': 1, 'b': 2}", '(1, 2)', "['a', 'b']", 'a=1 b=2'],
    correctIndex: 0,
    explanation: `Afișează: {'a': 1, 'b': 2}

• **kwargs strânge argumentele trimise cu NUME (keyword) într-un DICȚIONAR.
• Numele argumentului devine cheie (string), valoarea devine valoare.

Accesezi o valoare cu kwargs['a'] sau verifici existența cu 'a' in kwargs.`,
  },
  {
    id: 'pd-fn-021',
    difficulty: 'medium',
    prompt: '**kwargs cu if (exemplul din îndrumar) — ce afișează?',
    code: `def myfunc(**kwargs):
    if 'fruit' in kwargs:
        print(f"My favorite fruit is {kwargs['fruit']}")
    else:
        print("I don't have a favorite fruit")

myfunc(veggie='carrot')`,
    options: ["I don't have a favorite fruit", 'My favorite fruit is carrot', 'KeyError', 'TypeError'],
    correctIndex: 0,
    explanation: `Afișează: I don't have a favorite fruit

• kwargs = {'veggie': 'carrot'}.
• 'fruit' in kwargs verifică dacă există CHEIA 'fruit' → False.
• Se execută ramura else.

Nu apare KeyError pentru că verificăm cu in înainte să accesăm kwargs['fruit'].`,
  },
  {
    id: 'pd-fn-022',
    difficulty: 'hard',
    prompt: 'Parametru normal + *args + **kwargs — ce afișează?',
    code: `def f(a, *args, **kwargs):
    print(a, args, kwargs)

f(1, 2, 3, x=4)`,
    options: ["1 (2, 3) {'x': 4}", "1 [2, 3] {'x': 4}", "(1, 2, 3) {'x': 4}", "1 (2, 3, 4) {}"],
    correctIndex: 0,
    explanation: `Afișează: 1 (2, 3) {'x': 4}

Python distribuie argumentele în ordine:
• primul pozițional → a = 1
• restul poziționalelor → args = (2, 3)
• cele cu nume → kwargs = {'x': 4}

Ordinea obligatorie în def: parametri normali, *args, **kwargs.`,
  },
  {
    id: 'pd-fn-023',
    difficulty: 'medium',
    prompt: 'Despachetare cu * la apel — ce afișează?',
    code: `def suma(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(suma(*nums))`,
    options: ['6', '[1, 2, 3]', 'TypeError', '123'],
    correctIndex: 0,
    explanation: `Afișează: 6

• La APEL, *nums „desface" lista în argumente separate: suma(*nums) ≡ suma(1, 2, 3).
• 1 + 2 + 3 = 6.

Fără steluță, suma(nums) ar trimite o singură listă → TypeError (lipsesc b și c).
* în def = strânge argumente; * la apel = desface o colecție.`,
  },
  {
    id: 'pd-fn-024',
    difficulty: 'medium',
    prompt: 'Media a trei note cu valori implicite 4 — ce afișează?',
    code: `def media(n1=4, n2=4, n3=4):
    return (n1 + n2 + n3) / 3

print(media(10, n3=7))`,
    options: ['7.0', '7', '5.0', '8.5'],
    correctIndex: 0,
    explanation: `Afișează: 7.0

• 10 se duce pozițional în n1.
• n3=7 se dă prin nume.
• n2 lipsește → implicit 4.
• (10 + 4 + 7) / 3 = 21 / 3 = 7.0

Operatorul / dă MEREU float în Python 3 (chiar dacă împărțirea e exactă). Pentru rezultat întreg folosești //.`,
  },
  {
    id: 'pd-fn-025',
    difficulty: 'trap',
    prompt: 'Argument pozițional după unul keyword — ce se întâmplă?',
    code: `def media(n1=4, n2=4, n3=4):
    return (n1 + n2 + n3) / 3

print(media(n1=10, 7))`,
    options: ['SyntaxError', '7.0', 'TypeError', '5.0'],
    correctIndex: 0,
    explanation: `Rezultat: SyntaxError: positional argument follows keyword argument

• La apel, argumentele POZIȚIONALE trebuie să fie primele, apoi cele cu nume.
• media(n1=10, 7) încalcă regula → codul nici nu pornește (eroare de sintaxă, nu de execuție).

Corect: media(10, 7) sau media(n1=10, n2=7).`,
  },

  // ───────────── Construiește codul ─────────────
  {
    id: 'pd-fn-026',
    kind: 'order',
    difficulty: 'easy',
    prompt: 'Construiește o funcție lambda numită suma care primește a și b și returnează suma lor.',
    options: [],
    correctIndex: 0,
    tokens: ['suma', '=', 'lambda', 'a', ',', 'b', ':', 'a + b'],
    distractorTokens: ['def', 'return', '=>'],
    explanation: `Corect: suma = lambda a, b: a + b

• lambda + parametrii separați prin virgulă + două puncte + expresia.
• NU se scrie return (expresia e returnată automat).
• => este sintaxa din JavaScript/C#, nu din Python.`,
  },
  {
    id: 'pd-fn-027',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește antetul și corpul unei funcții care primește un număr variabil de argumente și returnează suma lor.',
    options: [],
    correctIndex: 0,
    tokens: ['def', 'myfunc', '(', '*args', ')', ':', 'return', 'sum', '(', 'args', ')'],
    distractorTokens: ['**kwargs', 'lambda', '*'],
    explanation: `Corect: def myfunc(*args): return sum(args)

• *args apare cu steluță DOAR în antet (în def).
• În corp folosești numele simplu args — e un tuplu, deci sum(args) funcționează.
• **kwargs ar strânge argumente cu nume într-un dicționar — nu e ce cerem aici.`,
  },
]);
