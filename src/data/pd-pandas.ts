import { pyTopic } from './pd-helpers';

// Lab 3 — Manipularea datelor cu Pandas: citire, inspecție, curățare, selecție, grupare
export const pdPandasQuestions = pyTopic('py-pandas', [
  // ───────────── citire & inspecție ─────────────
  {
    id: 'pd-pa-001',
    difficulty: 'easy',
    prompt: 'read_csv() — ce afișează codul?',
    code: `import pandas as pd
import io

text = """data,USD,EUR
2023-10-01,18.12,19.20
2023-10-02,18.12,19.17
2023-10-03,18.12,19.00"""
df = pd.read_csv(io.StringIO(text))   # în laborator: pd.read_csv('curs.csv')
print(type(df).__name__, df.shape)`,
    options: ['DataFrame (3, 3)', 'DataFrame (4, 3)', 'Series (3, 3)', 'list (3, 3)'],
    correctIndex: 0,
    explanation: `Afișează: DataFrame (3, 3)

• pd.read_csv citește un fișier CSV într-un DataFrame (tabel cu rânduri și coloane).
• Primul rând din fișier devine HEADER (numele coloanelor), nu rând de date → 3 rânduri de date.
• shape = (rânduri, coloane) = (3, 3) — atribut, fără paranteze.

io.StringIO apare doar ca să simulăm un fișier; în laborator scrii direct pd.read_csv('nume.csv').`,
  },
  {
    id: 'pd-pa-002',
    difficulty: 'easy',
    prompt: 'head() — câte rânduri afișează implicit? Ce afișează codul?',
    code: `import pandas as pd

df = pd.DataFrame({'zi': range(1, 15)})
print(len(df), len(df.head()), len(df.head(3)), len(df.tail(2)))`,
    options: ['14 5 3 2', '14 10 3 2', '15 5 3 2', '14 5 4 3'],
    correctIndex: 0,
    explanation: `Afișează: 14 5 3 2

• range(1, 15) → 14 valori → 14 rânduri.
• head() → primele 5 rânduri (implicit).
• head(n) → primele n rânduri; tail(n) → ultimele n.

Metode de inspecție: head(), tail(), info() (tipuri + valori lipsă), describe() (statistici), shape.`,
  },
  {
    id: 'pd-pa-003',
    difficulty: 'medium',
    prompt: 'Ce oferă fiecare metodă de inspecție?',
    options: [
      'info() → tipurile coloanelor și numărul de valori non-null; describe() → statistici (count, mean, std, min, max…)',
      'info() → statistici (mean, std); describe() → tipurile coloanelor',
      'info() → primele 5 rânduri; describe() → ultimele 5 rânduri',
      'info() șterge valorile lipsă; describe() șterge duplicatele',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• df.info() → numărul de rânduri, numele coloanelor, câte valori NON-NULL are fiecare (deci vezi datele lipsă) și Dtype (int64, float64, object…).
• df.describe() → pentru coloanele numerice: count, mean, std, min, 25%, 50%, 75%, max.
• df.head() / df.tail() → primele / ultimele rânduri.`,
  },
  {
    id: 'pd-pa-004',
    difficulty: 'medium',
    prompt: 'describe() — ce afișează codul?',
    code: `import pandas as pd

df = pd.DataFrame({'Price': [10, 20, 30, 40]})
print(df.describe().index.tolist())
print(df['Price'].max(), df['Price'].mean())`,
    options: [
      "['count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max']\n40 25.0",
      "['count', 'mean', 'min', 'max']\n40 25.0",
      "['count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max']\n40 25",
      "['mean', 'median', 'mode']\n40 25.0",
    ],
    correctIndex: 0,
    explanation: `Afișează:
['count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max']
40 25.0

• describe() are câte un rând pentru fiecare statistică (8 statistici); 50% = mediana.
• df['Price'].max() → 40; .mean() → (10+20+30+40)/4 = 25.0 (media e float).

Pe o coloană poți apela direct: min(), max(), mean(), sum(), count().`,
  },

  // ───────────── selecție ─────────────
  {
    id: 'pd-pa-005',
    difficulty: 'trap',
    prompt: 'df["col"] vs df[["col"]] — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
print(type(df['A']).__name__, type(df[['A']]).__name__)`,
    options: ['Series DataFrame', 'Series Series', 'DataFrame DataFrame', 'list DataFrame'],
    correctIndex: 0,
    explanation: `Afișează: Series DataFrame

• df['A'] (un nume) → o singură coloană = Series (un vector cu index).
• df[['A']] (o LISTĂ de nume) → un DataFrame (tabel) cu o coloană.
• df[['A', 'B']] → selectezi mai multe coloane.`,
  },
  {
    id: 'pd-pa-006',
    difficulty: 'medium',
    prompt: 'Filtrare cu condiție (mască booleană) — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'nume': ['Ana', 'Ion', 'Eva'], 'nota': [9, 7, 10]})
print(df[df['nota'] >= 9]['nume'].tolist())`,
    options: ["['Ana', 'Eva']", "['Ion']", '[9, 10]', "[True, False, True]"],
    correctIndex: 0,
    explanation: `Afișează: ['Ana', 'Eva']

Citește în pași:
1. df['nota'] >= 9 → [True, False, True] (mască)
2. df[mască] → doar rândurile Ana și Eva
3. ['nume'] → coloana nume a acestor rânduri
4. .tolist() → listă Python

Același mecanism ca la NumPy: a[a > 10].`,
  },
  {
    id: 'pd-pa-007',
    difficulty: 'medium',
    prompt: 'iloc vs loc — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'nume': ['Ana', 'Ion', 'Eva'], 'nota': [9, 7, 10]})
print(df.iloc[1]['nume'])
print(df.loc[df['nota'] > 8, 'nume'].tolist())`,
    options: ["Ion\n['Ana', 'Eva']", "Ana\n['Ana', 'Eva']", "Ion\n['Eva']", "Ion\n[9, 10]"],
    correctIndex: 0,
    explanation: `Afișează:
Ion
['Ana', 'Eva']

• iloc[poziție] → rând după POZIȚIA numerică (de la 0) → rândul 1 = Ion.
• loc[rânduri, coloane] → după ETICHETE / condiții: rândurile cu nota > 8, coloana 'nume'.

Felii: df.iloc[0:7] = primele 7 rânduri (7 exclus) — util pentru împărțirea pe săptămâni.`,
  },
  {
    id: 'pd-pa-008',
    difficulty: 'medium',
    prompt: 'sort_values() — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'nume': ['Ana', 'Ion', 'Eva'], 'nota': [9, 7, 10]})
print(df.sort_values('nota', ascending=False)['nume'].tolist())`,
    options: ["['Eva', 'Ana', 'Ion']", "['Ion', 'Ana', 'Eva']", "['Ana', 'Eva', 'Ion']", '[10, 9, 7]'],
    correctIndex: 0,
    explanation: `Afișează: ['Eva', 'Ana', 'Ion']

• sort_values('coloana') sortează rândurile după valorile coloanei.
• ascending=False → descrescător: 10 (Eva), 9 (Ana), 7 (Ion).
• La final luăm doar coloana nume.`,
  },

  // ───────────── curățare ─────────────
  {
    id: 'pd-pa-009',
    difficulty: 'trap',
    prompt: 'drop() fără atribuire — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'Price': [1, 2], 'Comments': ['ok', 'bun']})
df.drop(columns=['Comments'])
print(df.columns.tolist())
newdf = df.drop(columns=['Comments'])
print(newdf.columns.tolist())`,
    options: ["['Price', 'Comments']\n['Price']", "['Price']\n['Price']", "['Price', 'Comments']\n['Price', 'Comments']", "['Comments']\n['Price']"],
    correctIndex: 0,
    explanation: `Afișează:
['Price', 'Comments']
['Price']

• drop(), dropna(), drop_duplicates(), fillna(), sort_values() NU modifică df-ul original — întorc un DataFrame NOU.
• Prima linie drop(...) nu e salvată nicăieri → df rămâne neschimbat.
• De aceea în îndrumar se scrie newdf = df.drop(columns=['Comments']).

(Alternativ: df = df.drop(...) sau parametrul inplace=True.)`,
  },
  {
    id: 'pd-pa-010',
    difficulty: 'medium',
    prompt: 'Valori lipsă: isnull() și dropna() — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'USD': [18.1, None, 18.0], 'EUR': [19.2, 19.1, None]})
print(df.isnull().sum().tolist())
print(len(df.dropna()))`,
    options: ['[1, 1]\n1', '[1, 1]\n3', '[2, 2]\n1', '[0, 0]\n3'],
    correctIndex: 0,
    explanation: `Afișează:
[1, 1]
1

• isnull() → True unde lipsește valoarea (NaN); .sum() numără True pe fiecare coloană → câte o valoare lipsă în USD și în EUR.
• dropna() elimină ORICE rând care are măcar o valoare lipsă → rămâne doar rândul 0.

isna() este sinonim pentru isnull().`,
  },
  {
    id: 'pd-pa-011',
    difficulty: 'medium',
    prompt: 'fillna() și mean() cu valori lipsă — ce afișează?',
    code: `import pandas as pd

s = pd.Series([1, None, 3])
print(s.mean())
print(s.fillna(0).tolist())`,
    options: ['2.0\n[1.0, 0.0, 3.0]', '1.3333333333333333\n[1.0, 0.0, 3.0]', 'nan\n[1, 0, 3]', '2.0\n[1.0, nan, 3.0]'],
    correctIndex: 0,
    explanation: `Afișează:
2.0
[1.0, 0.0, 3.0]

• Pandas IGNORĂ valorile lipsă în statistici: mean = (1 + 3) / 2 = 2.0 (nu împarte la 3).
• fillna(0) înlocuiește NaN cu 0. Valorile sunt float pentru că o coloană cu NaN devine float.

Opțiuni la date lipsă: dropna() (elimini), fillna(valoare) (completezi, de ex. cu media: s.fillna(s.mean())).`,
  },
  {
    id: 'pd-pa-012',
    difficulty: 'easy',
    prompt: 'drop_duplicates() — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'data': ['01', '02', '02', '03'], 'USD': [18.1, 18.2, 18.2, 18.0]})
print(df.duplicated().tolist())
print(len(df.drop_duplicates()))`,
    options: ['[False, False, True, False]\n3', '[False, True, True, False]\n2', '[False, False, True, False]\n4', '[True, True, True, True]\n1'],
    correctIndex: 0,
    explanation: `Afișează:
[False, False, True, False]
3

• duplicated() marchează cu True rândurile identice cu un rând ANTERIOR (prima apariție rămâne False).
• drop_duplicates() le elimină → 4 - 1 = 3 rânduri.`,
  },
  {
    id: 'pd-pa-013',
    difficulty: 'hard',
    prompt: 'Coloane de tip object → numeric — ce afișează?',
    code: `import pandas as pd

s = pd.Series(['1.5', '2', 'x'])
print(pd.to_numeric(s, errors='coerce').tolist())`,
    options: ['[1.5, 2.0, nan]', "['1.5', '2', 'x']", 'ValueError', '[1.5, 2, 0]'],
    correctIndex: 0,
    explanation: `Afișează: [1.5, 2.0, nan]

• Coloanele cu text au dtype object (în Pandas 2.x; în Pandas 3 apar ca str) — nu poți face calcule cu ele.
• pd.to_numeric(...) convertește la numere.
• errors='coerce' → ce nu se poate converti ('x') devine NaN în loc de eroare.

Fără errors='coerce' → ValueError la 'x'. Pentru o coloană curată poți folosi și df['col'].astype(float).`,
  },

  // ───────────── grupare & combinare ─────────────
  {
    id: 'pd-pa-014',
    difficulty: 'medium',
    prompt: 'groupby() + mean() — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({
    'banca': ['A', 'B', 'A', 'B'],
    'USD':   [18.0, 18.2, 18.4, 18.6],
})
print(df.groupby('banca')['USD'].mean().round(1).to_dict())`,
    options: ["{'A': 18.2, 'B': 18.4}", "{'A': 36.4, 'B': 36.8}", "{'A': 18.0, 'B': 18.2}", '18.3'],
    correctIndex: 0,
    explanation: `Afișează: {'A': 18.2, 'B': 18.4}

GroupBy = „împarte – aplică – combină":
1. împarte rândurile după banca: A → [18.0, 18.4], B → [18.2, 18.6]
2. aplică mean() pe fiecare grup: A → 18.2, B → 18.4
3. combină într-o Series cu indexul = numele grupurilor

{'A': 36.4, …} ar fi .sum() în loc de .mean().`,
  },
  {
    id: 'pd-pa-015',
    difficulty: 'hard',
    prompt: 'groupby() cu agg — min, max, media pe zi — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({
    'data': ['01', '01', '01', '02', '02', '02'],
    'USD':  [18.0, 18.3, 18.6, 18.1, 18.2, 18.3],
})
rez = df.groupby('data')['USD'].agg(['min', 'max'])
print(rez.loc['01'].tolist(), rez.shape)`,
    options: ['[18.0, 18.6] (2, 2)', '[18.0, 18.3] (2, 2)', '[18.0, 18.6] (6, 2)', '[18.1, 18.3] (2, 3)'],
    correctIndex: 0,
    explanation: `Afișează: [18.0, 18.6] (2, 2)

• agg(['min', 'max']) aplică MAI MULTE funcții pe fiecare grup → un DataFrame cu câte o coloană per funcție.
• Un rând per grup (zilele '01' și '02') × 2 coloane (min, max) → shape (2, 2).
• rez.loc['01'] → rândul zilei 01: min 18.0, max 18.6.

(Sarcina 3 din Lab 3: min, max, media pe fiecare zi, pentru cursurile de la 3 bănci.)`,
  },
  {
    id: 'pd-pa-016',
    difficulty: 'medium',
    prompt: 'concat() — ce afișează?',
    code: `import pandas as pd

df1 = pd.DataFrame({'data': ['01', '02'], 'USD': [18.1, 18.2]})
df2 = pd.DataFrame({'data': ['03'], 'USD': [18.0]})
total = pd.concat([df1, df2], ignore_index=True)
print(total.shape, total.index.tolist())`,
    options: ['(3, 2) [0, 1, 2]', '(3, 2) [0, 1, 0]', '(2, 3) [0, 1, 2]', '(3, 4) [0, 1, 2]'],
    correctIndex: 0,
    explanation: `Afișează: (3, 2) [0, 1, 2]

• pd.concat([df1, df2]) LIPEȘTE tabelele unul sub altul (aceleași coloane) → 2 + 1 = 3 rânduri, 2 coloane.
• ignore_index=True renumerotează rândurile 0, 1, 2. Fără el, indexul ar fi [0, 1, 0] (indexurile originale).

pd.merge(df1, df2, on='data') în schimb UNEȘTE pe orizontală după o coloană comună (ca un JOIN în SQL).`,
  },
  {
    id: 'pd-pa-017',
    difficulty: 'medium',
    prompt: 'merge() — ce afișează?',
    code: `import pandas as pd

b1 = pd.DataFrame({'data': ['01', '02'], 'USD_b1': [18.1, 18.2]})
b2 = pd.DataFrame({'data': ['01', '02'], 'USD_b2': [18.3, 18.4]})
m = pd.merge(b1, b2, on='data')
print(m.columns.tolist(), m.shape)`,
    options: ["['data', 'USD_b1', 'USD_b2'] (2, 3)", "['data', 'USD_b1', 'data', 'USD_b2'] (2, 4)", "['data', 'USD_b1', 'USD_b2'] (4, 3)", "['USD_b1', 'USD_b2'] (2, 2)"],
    correctIndex: 0,
    explanation: `Afișează: ['data', 'USD_b1', 'USD_b2'] (2, 3)

• merge potrivește rândurile care au aceeași valoare în coloana on='data'.
• Coloana comună apare o SINGURĂ dată; se adaugă coloanele din ambele tabele.

Util pentru Sarcina 2 din Lab 3: regruparea cursurilor de la 3 bănci după dată.`,
  },
  {
    id: 'pd-pa-018',
    difficulty: 'hard',
    prompt: 'Împărțirea în bucăți de 7 rânduri (săptămâni) — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'zi': range(1, 16)})   # 15 zile
bucati = [df.iloc[i:i + 7] for i in range(0, len(df), 7)]
print(len(bucati), [len(b) for b in bucati])`,
    options: ['3 [7, 7, 1]', '2 [7, 7]', '3 [7, 7, 7]', '2 [7, 8]'],
    correctIndex: 0,
    explanation: `Afișează: 3 [7, 7, 1]

• range(0, 15, 7) → 0, 7, 14 (pozițiile de start ale fiecărei săptămâni).
• iloc[0:7], iloc[7:14], iloc[14:21] → 7, 7 și 1 rând (ultima felie se oprește singură la final, fără eroare).

Fiecare bucată poate fi salvată apoi cu b.to_csv(f"{prima_data}_{ultima_data}.csv", index=False). (Sarcina 4 din Lab 3.)`,
  },
  {
    id: 'pd-pa-019',
    difficulty: 'hard',
    prompt: 'Funcție care întoarce rândurile unei date sau None — ce afișează?',
    code: `import pandas as pd

df = pd.DataFrame({'data': pd.to_datetime(['2023-10-01', '2023-10-02']),
                   'USD': [18.12, 18.10]})

def zi(df, data):
    rez = df[df['data'] == pd.to_datetime(data)]
    return None if rez.empty else rez

print(zi(df, '2023-10-02')['USD'].tolist())
print(zi(df, '2023-10-09'))`,
    options: ['[18.1]\nNone', '[18.12]\nNone', '[18.1]\nEmpty DataFrame', 'None\nNone'],
    correctIndex: 0,
    explanation: `Afișează:
[18.1]
None

• pd.to_datetime transformă textul în tip dată (datetime) → poți compara date corect.
• df[df['data'] == …] → rândurile cu acea dată.
• rez.empty e True dacă nu s-a găsit niciun rând → funcția întoarce None.
• 18.10 se afișează ca 18.1 (zeroul final nu contează la float).

(Sarcina 5 din Lab 3.)`,
  },
  {
    id: 'pd-pa-020',
    difficulty: 'easy',
    prompt: 'value_counts() — ce afișează?',
    code: `import pandas as pd

s = pd.Series(['A', 'B', 'A', 'A'])
print(s.value_counts()['A'], s.nunique())`,
    options: ['3 2', '2 3', '3 4', '1 2'],
    correctIndex: 0,
    explanation: `Afișează: 3 2

• value_counts() numără aparițiile fiecărei valori: A → 3, B → 1.
• nunique() → câte valori DISTINCTE există: A și B → 2.`,
  },

  // ───────────── completare & construiește ─────────────
  {
    id: 'pd-pa-021',
    difficulty: 'easy',
    prompt: 'Completează ca să ștergi rândurile care conțin date lipsă:',
    code: `newdf = df.______()`,
    options: ['dropna', 'drop_duplicates', 'fillna', 'isnull'],
    correctIndex: 0,
    explanation: `Corect: dropna

• dropna() → șterge rândurile cu valori lipsă.
• drop_duplicates() → șterge rândurile duplicate.
• fillna(v) → completează lipsurile (nu șterge).
• isnull() → doar arată unde lipsesc valori (True/False).`,
  },
  {
    id: 'pd-pa-022',
    kind: 'order',
    difficulty: 'easy',
    prompt: 'Construiește codul care importă pandas și citește fișierul curs.csv în variabila df.',
    options: [],
    correctIndex: 0,
    tokens: ['import', 'pandas', 'as', 'pd', 'df', '=', 'pd.read_csv', '(', "'curs.csv'", ')'],
    distractorTokens: ['np', 'pd.to_csv', 'open'],
    explanation: `Corect:
import pandas as pd
df = pd.read_csv('curs.csv')

• read_csv CITEȘTE un CSV; to_csv SCRIE un DataFrame în CSV (e metodă a df-ului: df.to_csv('x.csv')).`,
  },
  {
    id: 'pd-pa-023',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește linia care creează newdf fără coloana Comments.',
    options: [],
    correctIndex: 0,
    tokens: ['newdf', '=', 'df.drop', '(', 'columns', '=', "['Comments']", ')'],
    distractorTokens: ['df.dropna', 'rows', 'del'],
    explanation: `Corect: newdf = df.drop(columns=['Comments'])

• columns= primește o LISTĂ de coloane de șters.
• Rezultatul trebuie salvat (newdf = …), pentru că drop nu modifică df-ul original.`,
  },
  {
    id: 'pd-pa-024',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește expresia care calculează media coloanei USD pentru fiecare bancă.',
    options: [],
    correctIndex: 0,
    tokens: ['df', '.groupby', '(', "'banca'", ')', '[', "'USD'", ']', '.mean', '(', ')'],
    distractorTokens: ['.sum', "'data'", '.sort_values'],
    explanation: `Corect: df.groupby('banca')['USD'].mean()

Ordinea: 1) grupezi după coloana-cheie, 2) alegi coloana de calculat, 3) aplici funcția de agregare.`,
  },
]);
