import { pyTopic } from './pd-helpers';

// Reprezentări grafice cu Matplotlib (subplot-uri, tipuri de grafice)
export const pdGraficeQuestions = pyTopic('py-grafice', [
  {
    id: 'pd-gr-001',
    difficulty: 'medium',
    prompt: 'Ce înseamnă cifrele din add_subplot(231)?',
    code: `import matplotlib.pyplot as plt

fig = plt.figure()
ax1 = fig.add_subplot(231)`,
    options: [
      '2 rânduri, 3 coloane, graficul de pe poziția 1 (stânga-sus)',
      '2 coloane, 3 rânduri, graficul de pe poziția 1',
      '231 de grafice în figură',
      '1 rând, 3 coloane, graficul de pe poziția 2',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `Sintaxă: add_subplot(RÂNDURI, COLOANE, POZIȚIE) — scrisă compact ca un număr de 3 cifre: 231 ≡ (2, 3, 1).
• 2 rânduri × 3 coloane = o grilă de 6 grafice.
• Pozițiile se numără de la 1, rând cu rând: 1 2 3 pe primul rând, 4 5 6 pe al doilea.

Deci pentru „trei grafice unul lângă altul și două rânduri" → add_subplot(231).`,
  },
  {
    id: 'pd-gr-002',
    difficulty: 'trap',
    prompt: 'add_subplot(123) — ce grilă creează?',
    code: `ax = fig.add_subplot(123)`,
    options: [
      '1 rând, 2 coloane, poziția 3 → eroare, grila are doar 2 locuri',
      '1 rând, 3 coloane, poziția 2',
      '3 rânduri, 2 coloane, poziția 1',
      '2 rânduri, 3 coloane, poziția 1',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `123 se citește (1, 2, 3): 1 rând, 2 coloane, poziția 3.
• Grila 1×2 are doar pozițiile 1 și 2 → ValueError (num must be an integer with 1 <= num <= 2).

Capcană din test: 123 NU înseamnă „1 rând cu 3 grafice". Pentru asta ai scrie 131, 132, 133.
add_subplot(3*2) = add_subplot(6) → nici el nu e valid (trebuie 3 cifre sau 3 argumente).`,
  },
  {
    id: 'pd-gr-003',
    difficulty: 'medium',
    prompt: 'plt.subplots() — ce afișează?',
    code: `import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 3)
print(axes.shape)
fig, axes = plt.subplots(1, 3)
print(axes.shape)`,
    options: ['(2, 3)\n(3,)', '(2, 3)\n(1, 3)', '6\n3', '(3, 2)\n(3, 1)'],
    correctIndex: 0,
    explanation: `Afișează:
(2, 3)
(3,)

• plt.subplots(rânduri, coloane) creează figura ȘI toate graficele odată.
• axes e un array NumPy de grafice: pentru 2×3 → shape (2, 3), accesezi cu axes[0, 1].
• Pentru un singur rând, NumPy simplifică la vector 1D → (3,), accesezi cu axes[1].`,
  },
  {
    id: 'pd-gr-004',
    difficulty: 'medium',
    prompt: 'Unde apare graficul creat cu fig.add_subplot(2, 2, 4)?',
    options: ['Dreapta-jos', 'Stânga-jos', 'Dreapta-sus', 'Stânga-sus'],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `Grila 2×2, numerotată rând cu rând:
1 | 2
--+--
3 | 4
Poziția 4 = rândul 2, coloana 2 → dreapta-jos.`,
  },
  {
    id: 'pd-gr-005',
    difficulty: 'easy',
    prompt: 'Ce tip de grafic produce fiecare funcție?',
    options: [
      'plot → linie; bar → bare; hist → histogramă (distribuție); scatter → puncte',
      'plot → bare; bar → linie; hist → puncte; scatter → histogramă',
      'plot → histogramă; bar → puncte; hist → linie; scatter → bare',
      'Toate desenează linii, diferă doar culoarea',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• plt.plot(x, y) → grafic liniar (ex. evoluția cursului valutar în timp).
• plt.bar(categorii, valori) → bare (ex. comparația a 3 bănci).
• plt.hist(valori, bins=10) → histogramă: câte valori cad în fiecare interval.
• plt.scatter(x, y) → nor de puncte (relația dintre două variabile).`,
  },
  {
    id: 'pd-gr-006',
    difficulty: 'easy',
    prompt: 'Ce face fiecare linie din codul de mai jos?',
    code: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [18.1, 18.3, 18.2], label="USD")
plt.title("Curs valutar")
plt.xlabel("Zi")
plt.ylabel("Lei")
plt.legend()
plt.show()`,
    options: [
      'Desenează linia, pune titlul și etichetele axelor, afișează legenda (din label) și apoi deschide graficul',
      'Creează 6 grafice separate',
      'Salvează graficul în fișierul USD.png',
      'plt.show() trebuie apelat primul, altfel nu se desenează nimic',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• plot(x, y, label=…) → linia; label e textul din legendă.
• title, xlabel, ylabel → titlul și etichetele axelor.
• legend() → afișează legenda (folosește label-urile).
• show() → afișează figura; se apelează la FINAL, după ce totul a fost configurat.

Pentru salvare: plt.savefig("grafic.png").`,
  },
  {
    id: 'pd-gr-007',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește linia care adaugă primul grafic într-o grilă de 2 rânduri și 3 coloane.',
    options: [],
    correctIndex: 0,
    tokens: ['ax1', '=', 'fig', '.add_subplot', '(', '231', ')'],
    distractorTokens: ['123', '321', '3*2'],
    explanation: `Corect: ax1 = fig.add_subplot(231)

• 2 = rânduri, 3 = coloane, 1 = poziția.
• 123 → 1 rând × 2 coloane, poziția 3 (invalid); 321 → 3 rânduri × 2 coloane; 3*2 = 6 (invalid).`,
  },
]);
