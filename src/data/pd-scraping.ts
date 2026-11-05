import { pyTopic } from './pd-helpers';

// Lab 2 — Web scraping: requests, urllib, BeautifulSoup, select, salvare CSV
export const pdScrapingQuestions = pyTopic('py-scraping', [
  // ───────────── concepte & cerere ─────────────
  {
    id: 'pd-ws-001',
    difficulty: 'easy',
    prompt: 'Ce face blocul de cod de mai jos?',
    code: `url = "https://www.nytimes.com"
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')`,
    options: [
      'Descarcă pagina web (codul HTML) și o parsează într-un obiect navigabil (soup)',
      'Doar afișează pagina web în browser',
      'Doar descarcă pagina web, fără să o prelucreze',
      'Salvează pagina într-un fișier .csv',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `Două etape:
1. urlopen(url).read() → face cererea HTTP și DESCARCĂ conținutul paginii (bytes cu HTML).
2. BeautifulSoup(html, 'html.parser') → PARSEAZĂ (analizează) HTML-ul și construiește un arbore de tag-uri în care poți căuta (soup.select, soup.find…).

Nimic nu se afișează și nu se salvează. (Întrebare din testul de evaluare — acolo erau corecte ambele: „descarcă" și „parsează".)`,
  },
  {
    id: 'pd-ws-002',
    difficulty: 'easy',
    prompt: 'Ce rol are fiecare bibliotecă în web scraping?',
    options: [
      'requests / urllib → descarcă pagina; BeautifulSoup (bs4) → extrage date din HTML; lxml → parser rapid folosit de BeautifulSoup',
      'requests → parsează HTML; BeautifulSoup → descarcă pagina; lxml → salvează CSV',
      'BeautifulSoup face și cererea HTTP, și parsarea; requests e opțional',
      'lxml descarcă pagina; requests desenează grafice',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• requests.get(url) / urlopen(url) → cererea HTTP (aduce codul sursă al paginii).
• BeautifulSoup(text, parser) → transformă textul HTML într-un obiect în care cauți tag-uri și clase.
• Parserul poate fi 'html.parser' (inclus în Python) sau 'lxml' (mai rapid, se instalează: pip install lxml).

Instalare: pip install requests lxml bs4.`,
  },
  {
    id: 'pd-ws-003',
    difficulty: 'medium',
    prompt: 'requests.get() — ce conține fiecare atribut?',
    code: `import requests

res = requests.get("http://quotes.toscrape.com/")
print(res.status_code)
print(type(res.text))`,
    options: [
      "200\n<class 'str'>",
      "200\n<class 'bytes'>",
      "OK\n<class 'BeautifulSoup'>",
      "True\n<class 'dict'>",
    ],
    correctIndex: 0,
    explanation: `Afișează (dacă site-ul răspunde):
200
<class 'str'>

• status_code = codul HTTP: 200 = OK, 404 = pagina nu există, 403 = acces interzis.
• res.text = codul HTML al paginii ca STRING (str) — greu de citit „brut" (vezi Figura 2.1 din îndrumar).
• res.content ar fi aceleași date ca bytes.

În schimb urlopen(url).read() întoarce bytes → de aceea în îndrumar apare .decode("utf-8").`,
  },
  {
    id: 'pd-ws-004',
    difficulty: 'medium',
    prompt: 'De ce se trimite header-ul User-Agent?',
    code: `html_page = requests.get(URL, headers={"User-Agent": "Mozilla/5.0"})`,
    options: [
      'Unele site-uri blochează cererile care nu par venite dintr-un browser; header-ul identifică clientul ca browser',
      'Ca să fie descărcată pagina mai repede',
      'Ca BeautifulSoup să poată parsa HTML-ul',
      'Ca să salveze automat pagina în format CSV',
    ],
    optionsAsCode: false,
    correctIndex: 0,
    explanation: `• headers= trimite informații suplimentare în cererea HTTP.
• User-Agent spune serverului ce program face cererea. Implicit requests se prezintă ca „python-requests/…", pe care unele site-uri îl refuză (403).

Înainte de scraping verifică întotdeauna termenii de utilizare / robots.txt: unele site-uri interzic explicit colectarea automată, iar multe cereri rapide pot supraîncărca serverul.`,
  },

  // ───────────── BeautifulSoup ─────────────
  {
    id: 'pd-ws-005',
    difficulty: 'easy',
    prompt: 'soup.title vs soup.title.text — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = "<html><head><title>Quotes</title></head><body><h1>Salut</h1></body></html>"
soup = BeautifulSoup(html, "html.parser")
print(soup.title)
print(soup.title.text)`,
    options: ['<title>Quotes</title>\nQuotes', 'Quotes\nQuotes', '<title>Quotes</title>\n<title>Quotes</title>', 'title\nQuotes'],
    correctIndex: 0,
    explanation: `Afișează:
<title>Quotes</title>
Quotes

• soup.title → primul tag <title> (obiectul TAG, cu tot cu etichete).
• .text → doar TEXTUL din interiorul tag-ului.

Regulă: aproape mereu vrei .text la final ca să scapi de etichetele HTML. (Sarcina: capturați titlul paginii.)`,
  },
  {
    id: 'pd-ws-006',
    difficulty: 'easy',
    prompt: 'soup.select() — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = """<div>
  <small class="author">Albert Einstein</small>
  <small class="author">J.K. Rowling</small>
  <small class="author">Albert Einstein</small>
</div>"""
soup = BeautifulSoup(html, "html.parser")
autori = soup.select(".author")
print(len(autori), type(autori).__name__)`,
    options: ['3 ResultSet', '2 ResultSet', '3 str', '1 Tag'],
    correctIndex: 0,
    explanation: `Afișează: 3 ResultSet

• select(selector_CSS) întoarce o LISTĂ (un ResultSet — se comportă ca o listă) cu TOATE tag-urile potrivite.
• „.author" = selector CSS de clasă (punctul = class="author").
• Sunt 3 tag-uri (duplicatele contează).

Selectori uzuali: "p" (tag), ".clasa", "#id", "div.quote span.text" (tag în tag).`,
  },
  {
    id: 'pd-ws-007',
    difficulty: 'medium',
    prompt: 'Autori unici cu set() — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = """<div>
  <small class="author">Albert Einstein</small>
  <small class="author">J.K. Rowling</small>
  <small class="author">Albert Einstein</small>
</div>"""
soup = BeautifulSoup(html, "html.parser")

authors = set()
for name in soup.select(".author"):
    authors.add(name.text)
print(sorted(authors))`,
    options: ["['Albert Einstein', 'J.K. Rowling']", "['Albert Einstein', 'J.K. Rowling', 'Albert Einstein']", '[<small class="author">Albert Einstein</small>, <small class="author">J.K. Rowling</small>]', '2'],
    correctIndex: 0,
    explanation: `Afișează: ['Albert Einstein', 'J.K. Rowling']

• for name in soup.select(".author") → name e pe rând fiecare TAG <small>.
• name.text → doar numele (string).
• set().add() ignoră duplicatele → Einstein apare o singură dată.
• sorted() → listă ordonată alfabetic.

Exemplu din îndrumar (quotes.toscrape.com).`,
  },
  {
    id: 'pd-ws-008',
    difficulty: 'medium',
    prompt: 'Iterare prin tag-uri și afișarea textului — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = """<div class="tags">
  <a class="tag-item">love</a>
  <a class="tag-item">life</a>
  <a class="other">x</a>
</div>"""
soup = BeautifulSoup(html, "html.parser")
for item in soup.select(".tag-item"):
    print(item.text)`,
    options: ['love\nlife', 'love\nlife\nx', '<a class="tag-item">love</a>\n<a class="tag-item">life</a>', "['love', 'life']"],
    correctIndex: 0,
    explanation: `Afișează:
love
life

• Doar tag-urile cu class="tag-item" sunt selectate (al treilea are altă clasă).
• print(item.text) afișează fiecare text pe câte un rând.`,
  },
  {
    id: 'pd-ws-009',
    difficulty: 'medium',
    prompt: 'find() vs find_all() — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = "<p>Unu</p><p>Doi</p><p>Trei</p>"
soup = BeautifulSoup(html, "html.parser")
print(soup.find("p").text)
print(len(soup.find_all("p")))`,
    options: ['Unu\n3', 'Unu Doi Trei\n3', 'Trei\n1', "['Unu', 'Doi', 'Trei']\n3"],
    correctIndex: 0,
    explanation: `Afișează:
Unu
3

• find(tag) → PRIMUL tag găsit (sau None).
• find_all(tag) → LISTA tuturor tag-urilor.

Echivalențe: find ≈ select_one, find_all ≈ select. Diferența: find/find_all primesc nume de tag și atribute (class_="x"), select primește selectori CSS (".x").`,
  },
  {
    id: 'pd-ws-010',
    difficulty: 'trap',
    prompt: 'Căutarea unui tag care nu există — ce se întâmplă?',
    code: `from bs4 import BeautifulSoup

soup = BeautifulSoup("<p>Text</p>", "html.parser")
print(soup.select(".lipsa"))
print(soup.find("h1").text)`,
    options: ['[]\nAttributeError', '[]\nNone', 'None\nAttributeError', 'AttributeError'],
    correctIndex: 0,
    explanation: `Afișează [] apoi apare eroarea AttributeError: 'NoneType' object has no attribute 'text'

• select() fără rezultate → listă GOALĂ [] (fără eroare).
• find() fără rezultat → None.
• None.text → AttributeError.

În scraping verifică înainte: tag = soup.find("h1"); if tag: print(tag.text).`,
  },
  {
    id: 'pd-ws-011',
    difficulty: 'medium',
    prompt: 'Citirea atributelor unui tag (href, src, class) — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = '<a href="/page-2.html">Next</a><p class="star-rating Three"></p>'
soup = BeautifulSoup(html, "html.parser")
print(soup.a["href"])
print(soup.p["class"])`,
    options: ["/page-2.html\n['star-rating', 'Three']", "Next\nstar-rating Three", "/page-2.html\nstar-rating Three", "<a href=\"/page-2.html\">Next</a>\n['star-rating', 'Three']"],
    correctIndex: 0,
    explanation: `Afișează:
/page-2.html
['star-rating', 'Three']

• tag["atribut"] → valoarea atributului (ca la un dicționar). Alternativ: tag.get("href").
• Atributul class e special: poate avea mai multe clase → BeautifulSoup îl întoarce ca LISTĂ.

Pentru imagini: img["src"] → adresa imaginii (de descărcat apoi cu requests.get).`,
  },
  {
    id: 'pd-ws-012',
    difficulty: 'hard',
    prompt: 'Cărți cu rating de 3 stele (books.toscrape) — ce afișează?',
    code: `from bs4 import BeautifulSoup

html = """
<article><h3><a title="Carte A">A</a></h3><p class="star-rating Three"></p></article>
<article><h3><a title="Carte B">B</a></h3><p class="star-rating One"></p></article>
<article><h3><a title="Carte C">C</a></h3><p class="star-rating Three"></p></article>
"""
soup = BeautifulSoup(html, "html.parser")

titluri = []
for art in soup.select("article"):
    if "Three" in art.select_one("p.star-rating")["class"]:
        titluri.append(art.h3.a["title"])
print(titluri)`,
    options: ["['Carte A', 'Carte C']", "['A', 'C']", "['Carte A', 'Carte B', 'Carte C']", "['Carte B']"],
    correctIndex: 0,
    explanation: `Afișează: ['Carte A', 'Carte C']

• select("article") → fiecare carte.
• select_one("p.star-rating") → paragraful cu rating; ["class"] → ex. ['star-rating', 'Three'].
• "Three" in listă → True doar pentru A și C.
• art.h3.a["title"] → coboară în tag-uri (h3 → a) și citește atributul title (titlul complet), nu textul scurt „A".

Exact tiparul din Sarcina 2 a Lab 2: găsești clasa, filtrezi cu if, stochezi într-o listă.`,
  },
  {
    id: 'pd-ws-013',
    difficulty: 'medium',
    prompt: 'Construirea URL-urilor pentru paginare — ce afișează?',
    code: `baza = "http://books.toscrape.com/catalogue/page-{}.html"
for i in range(1, 4):
    print(baza.format(i))`,
    options: [
      'http://books.toscrape.com/catalogue/page-1.html\nhttp://books.toscrape.com/catalogue/page-2.html\nhttp://books.toscrape.com/catalogue/page-3.html',
      'http://books.toscrape.com/catalogue/page-0.html\nhttp://books.toscrape.com/catalogue/page-1.html\nhttp://books.toscrape.com/catalogue/page-2.html',
      'http://books.toscrape.com/catalogue/page-{}.html\nhttp://books.toscrape.com/catalogue/page-{}.html\nhttp://books.toscrape.com/catalogue/page-{}.html',
      'http://books.toscrape.com/catalogue/page-1.html\nhttp://books.toscrape.com/catalogue/page-2.html\nhttp://books.toscrape.com/catalogue/page-3.html\nhttp://books.toscrape.com/catalogue/page-4.html',
    ],
    correctIndex: 0,
    explanation: `Afișează paginile 1, 2, 3.

• "…{}…".format(i) înlocuiește {} cu valoarea lui i (echivalent: f"…page-{i}.html").
• range(1, 4) → 1, 2, 3 (4 exclus).

Tipar de scraping pe mai multe pagini: găsești structura URL-ului, apoi faci requests.get pentru fiecare pagină într-un for.`,
  },
  {
    id: 'pd-ws-014',
    difficulty: 'medium',
    prompt: 'Expresii regulate pentru extragerea numerelor — ce afișează?',
    code: `import re

text = "Pret: 120 lei, reducere 15%"
print(re.findall(r"\\d+", text))`,
    options: ["['120', '15']", '[120, 15]', "['1', '2', '0', '1', '5']", '135'],
    correctIndex: 0,
    explanation: `Afișează: ['120', '15']

• \\d = o cifră; + = „una sau mai multe" → \\d+ = un număr întreg întreg (secvență de cifre).
• re.findall întoarce o listă cu TOATE potrivirile, ca STRINGURI.
• r"..." (raw string) face ca backslash-ul să nu fie interpretat de Python.

Pentru calcule le convertești: list(map(int, re.findall(r"\\d+", text))) → [120, 15].`,
  },
  {
    id: 'pd-ws-015',
    difficulty: 'medium',
    prompt: 'Salvarea datelor colectate într-un fișier CSV — ce conține fișierul curs.csv după rulare?',
    code: `import csv

rows = [["data", "USD"], ["2023-10-01", 18.12], ["2023-10-02", 18.10]]
with open("curs.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(rows)`,
    options: [
      'data,USD\n2023-10-01,18.12\n2023-10-02,18.1',
      '[["data", "USD"], ["2023-10-01", 18.12], ["2023-10-02", 18.1]]',
      'data USD 2023-10-01 18.12 2023-10-02 18.1',
      'data;USD\n2023-10-01;18.12\n2023-10-02;18.1',
    ],
    correctIndex: 0,
    explanation: `Fișierul conține 3 rânduri, valorile separate prin VIRGULĂ:
data,USD
2023-10-01,18.12
2023-10-02,18.1

• CSV = Comma Separated Values.
• 18.10 e un float → se scrie ca 18.1 (zeroul final nu se păstrează).
• with open(..., "w") deschide fișierul pentru scriere și îl închide automat la final.
• writerows scrie toate rândurile; writerow scrie unul singur.
• newline="" evită rândurile goale suplimentare pe Windows.

Alternativ, cu Pandas: pd.DataFrame(rows[1:], columns=rows[0]).to_csv("curs.csv", index=False).`,
  },

  // ───────────── completare & construiește ─────────────
  {
    id: 'pd-ws-016',
    difficulty: 'easy',
    prompt: 'Completează ca să obții TOATE elementele cu clasa author:',
    code: `for name in soup.______(".author"):
    print(name.text)`,
    options: ['select', 'find', 'get', 'read'],
    correctIndex: 0,
    explanation: `Corect: select

• select(".author") primește un selector CSS și întoarce lista tuturor potrivirilor.
• find(".author") ar căuta un TAG numit „.author" (nu o clasă) și ar întoarce un singur element / None.
• get și read nu sunt metode de căutare în soup.`,
  },
  {
    id: 'pd-ws-017',
    kind: 'order',
    difficulty: 'easy',
    prompt: 'Construiește linia care descarcă pagina de la adresa url folosind biblioteca requests.',
    options: [],
    correctIndex: 0,
    tokens: ['res', '=', 'requests', '.get', '(', 'url', ')'],
    distractorTokens: ['.post', 'urlopen', 'soup'],
    explanation: `Corect: res = requests.get(url)

• .get face o cerere HTTP GET (citire pagină). .post trimite date (formulare).
• Codul HTML e apoi în res.text.`,
  },
  {
    id: 'pd-ws-018',
    kind: 'order',
    difficulty: 'medium',
    prompt: 'Construiește linia care parsează textul HTML din res folosind parserul lxml.',
    options: [],
    correctIndex: 0,
    tokens: ['soup', '=', 'bs4.BeautifulSoup', '(', 'res.text', ',', "'lxml'", ')'],
    distractorTokens: ['res.status_code', 'requests.get', "'csv'"],
    explanation: `Corect: soup = bs4.BeautifulSoup(res.text, 'lxml')

• Primul argument: textul HTML (string); al doilea: parserul ('lxml' sau 'html.parser').
• Dacă ai scris from bs4 import BeautifulSoup, folosești direct BeautifulSoup(...) fără prefixul bs4.`,
  },
]);
