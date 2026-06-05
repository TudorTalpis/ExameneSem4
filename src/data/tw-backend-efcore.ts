import type { Question } from '../types/question';

export const twBackendEfcoreQuestions: Question[] = [
  // ---- Analiză cod A/B ----
  {
    id: 'tw-backend-efcore-001',
    topic: 'backend-efcore',
    difficulty: 'hard',
    prompt: 'Controllerul întoarce produsul clientului (serializare în JSON). Care variantă este corectă / mai bună?',
    code: `// ───── Varianta A ─────
protected ProductData GetById(int id)
{
    using (var db = new ProductContext())
    {
        return db.Products.FirstOrDefault(x => x.Id == id);
    }
}

// ───── Varianta B ─────
protected ProductDto GetById(int id)
{
    using (var db = new ProductContext())
    {
        var data = db.Products.FirstOrDefault(x => x.Id == id);
        if (data == null) return null;
        return new ProductDto { Id = data.Id, Name = data.Name, Price = data.Price };
    }
}`,
    codeLang: 'csharp',
    options: ['Varianta A', 'Varianta B', 'Ambele sunt echivalente', 'Ambele sunt greșite'],
    correctIndex: 1,
    explanation: 'Varianta B. Întoarce un DTO: decuplează API-ul de entitatea EF, controlează exact câmpurile serializate (Id, Name, Price) și evită expunerea modelului intern sau a proprietăților de navigație (risc de referințe circulare). În plus tratează cazul null. Varianta A întoarce direct entitatea EF în afara blocului using — dacă serializarea ar declanșa lazy-loading, contextul e deja eliberat (Dispose) → ObjectDisposedException, iar modelul de bază de date ajunge expus clientului.',
  },
  {
    id: 'tw-backend-efcore-002',
    topic: 'backend-efcore',
    difficulty: 'hard',
    prompt: 'Metoda șterge un produs. Modelul are flag IsDeleted, iar listele se citesc ca Where(x => !x.IsDeleted) (soft delete). Care variantă este corectă?',
    code: `// ───── Varianta A ─────
protected ResponceMsg Delete(int id)
{
    using (var db = new ProductContext())
    {
        var data = db.Products.FirstOrDefault(x => x.Id == id);
        if (data == null) return new ResponceMsg { IsSuccess = false };

        db.Products.Remove(data);
        db.SaveChanges();
    }
    return new ResponceMsg { IsSuccess = true };
}

// ───── Varianta B ─────
protected ResponceMsg Delete(int id)
{
    using (var db = new ProductContext())
    {
        var data = db.Products.FirstOrDefault(x => x.Id == id);
        if (data == null) return new ResponceMsg { IsSuccess = false };

        data.IsDeleted = true;
        db.SaveChanges();
    }
    return new ResponceMsg { IsSuccess = true };
}`,
    codeLang: 'csharp',
    options: ['Varianta A', 'Varianta B', 'Ambele sunt echivalente', 'Ambele sunt greșite'],
    correctIndex: 1,
    explanation: 'Varianta B. Designul folosește soft delete (flag IsDeleted + filtrare Where(!IsDeleted) la citire), deci ștergerea trebuie să marcheze data.IsDeleted = true. Varianta A face hard delete (Remove) — elimină fizic rândul, contrazice modelul (se pierde istoricul, nu se mai poate restaura) și e inconsecventă cu filtrarea folosită la liste.',
  },

  // ---- Completare cod (fill-in-blank) ----
  {
    id: 'tw-backend-efcore-003',
    topic: 'backend-efcore',
    difficulty: 'easy',
    prompt: 'Completează ca să întorci un singur produs după id (sau null dacă nu există):',
    code: 'var data = db.Products.______(x => x.Id == id);',
    codeLang: 'csharp',
    optionsAsCode: true,
    options: ['FirstOrDefault', 'Where', 'Select', 'Find'],
    correctIndex: 0,
    explanation: 'FirstOrDefault(predicat) întoarce primul element care satisface condiția sau null dacă nu există. Where întoarce o colecție (IQueryable), nu un singur obiect; Select proiectează; Find caută doar după cheia primară, fără expresie lambda.',
  },
  {
    id: 'tw-backend-efcore-004',
    topic: 'backend-efcore',
    difficulty: 'easy',
    prompt: 'Pentru soft delete (modelul are flag IsDeleted), completează ca să marchezi produsul ca șters:',
    code: `data.IsDeleted = ______;
db.SaveChanges();`,
    codeLang: 'csharp',
    optionsAsCode: true,
    options: ['true', 'false', 'null', '1'],
    correctIndex: 0,
    explanation: 'La soft delete marcăm data.IsDeleted = true, iar SaveChanges() persistă modificarea. false ar lăsa produsul vizibil; null/1 nu sunt valori valide pentru un bool în acest context.',
  },
  {
    id: 'tw-backend-efcore-005',
    topic: 'backend-efcore',
    difficulty: 'medium',
    prompt: 'Pentru ștergere fizică (hard delete) din baza de date, completează metoda corectă din EF Core:',
    code: `db.Products.______(data);
db.SaveChanges();`,
    codeLang: 'csharp',
    optionsAsCode: true,
    options: ['Remove', 'Delete', 'Drop', 'Erase'],
    correctIndex: 0,
    explanation: 'EF Core marchează entitatea pentru ștergere cu db.Products.Remove(data), iar SaveChanges() execută DELETE-ul. Nu există metodele Delete/Drop/Erase pe un DbSet.',
  },

  // ---- Concept (MCQ) ----
  {
    id: 'tw-backend-efcore-006',
    topic: 'backend-efcore',
    difficulty: 'medium',
    prompt: 'De ce întoarcem un DTO în loc de entitatea EF direct (la serializarea JSON)?',
    options: [
      'E mai rapid la compilare',
      'Decuplează API-ul de modelul bazei de date și controlează câmpurile expuse',
      'DTO-urile sunt obligatorii în EF Core',
      'Pentru a evita folosirea async',
    ],
    correctIndex: 1,
    explanation: 'DTO-ul expune doar câmpurile dorite și separă contractul API de modelul intern al bazei de date, evitând scurgerea de date, referințele circulare din proprietățile de navigație și problemele de lazy-loading după închiderea contextului. Nu ține de viteza de compilare și nu este impus de EF Core.',
  },
  {
    id: 'tw-backend-efcore-007',
    topic: 'backend-efcore',
    difficulty: 'easy',
    prompt: 'Ce întoarce FirstOrDefault(...) dacă nu găsește niciun element care să satisfacă condiția?',
    options: ['null (valoarea implicită a tipului)', 'O excepție', 'Un obiect gol nou', 'Primul produs din tabel'],
    correctIndex: 0,
    explanation: 'FirstOrDefault întoarce valoarea implicită a tipului (null pentru tipuri referință) când nimic nu se potrivește. Spre deosebire de First, care aruncă o excepție dacă nu găsește niciun element.',
  },
  {
    id: 'tw-backend-efcore-008',
    topic: 'backend-efcore',
    difficulty: 'easy',
    prompt: 'Ce face db.SaveChanges() în EF Core?',
    options: [
      'Persistă în baza de date modificările urmărite de context (INSERT/UPDATE/DELETE)',
      'Reîncarcă datele din baza de date',
      'Deschide o conexiune nouă',
      'Validează modelul fără să scrie nimic',
    ],
    correctIndex: 0,
    explanation: 'SaveChanges() trimite către baza de date toate modificările urmărite de context (adăugări, actualizări, ștergeri) într-o singură tranzacție. Fără el, modificările rămân doar în memorie.',
  },
  {
    id: 'tw-backend-efcore-009',
    topic: 'backend-efcore',
    difficulty: 'medium',
    prompt: 'Ce rol are using (var db = new ProductContext()) { ... }?',
    options: [
      'Eliberează (Dispose) contextul și conexiunea la finalul blocului',
      'Face contextul disponibil global',
      'Pornește o tranzacție permanentă',
      'Importă un spațiu de nume',
    ],
    correctIndex: 0,
    explanation: 'Instrucțiunea using garantează apelarea Dispose() pe context la ieșirea din bloc, eliberând conexiunea și resursele. (A nu se confunda cu directiva using de import al spațiilor de nume.) De aceea entitatea nu trebuie folosită/serializată în afara blocului.',
  },

  // ---- Construiește codul (order) ----
  {
    id: 'tw-backend-efcore-010',
    topic: 'backend-efcore',
    difficulty: 'medium',
    kind: 'order',
    prompt: 'Construiește instrucțiunea care găsește produsul după id (FirstOrDefault):',
    codeLang: 'csharp',
    tokens: ['var', 'data', '=', 'db.Products.FirstOrDefault(', 'x => x.Id == id', ');'],
    distractorTokens: ['.Where(', 'await'],
    options: [],
    correctIndex: 0,
    explanation: 'Forma corectă: var data = db.Products.FirstOrDefault(x => x.Id == id); — declară variabila, apelează FirstOrDefault cu predicatul lambda și încheie cu „;". .Where(...) ar întoarce o colecție, iar await nu e necesar (apel sincron).',
  },
  {
    id: 'tw-backend-efcore-011',
    topic: 'backend-efcore',
    difficulty: 'medium',
    kind: 'order',
    prompt: 'Construiește corpul pentru soft delete: marchează produsul ca șters și salvează modificările.',
    codeLang: 'csharp',
    tokens: ['data.IsDeleted', '=', 'true;', 'db.SaveChanges();'],
    distractorTokens: ['db.Products.Remove(data);', 'false;'],
    options: [],
    correctIndex: 0,
    explanation: 'La soft delete: data.IsDeleted = true; db.SaveChanges(); — marchezi flag-ul și persiști. Remove(data) ar face hard delete (greșit pentru acest design), iar false nu ar marca ștergerea.',
  },
];
