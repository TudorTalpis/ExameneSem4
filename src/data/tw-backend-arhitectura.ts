import type { Question } from '../types/question';

export const twBackendArhitecturaQuestions: Question[] = [
  // ---- Web API ----
  {
    id: 'tw-backend-arhitectura-001',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Ce rol au atributele [ApiController] și [Route("api/bank")] pe un controller?',
    code: `[Route("api/bank")]
[ApiController]
public class LoanApplicationController : ControllerBase
{ }`,
    codeLang: 'csharp',
    options: [
      'Marchează clasa drept controller de API și setează prefixul de rută (api/bank)',
      'Creează automat baza de date',
      'Activează CORS pentru toate originile',
      'Înlocuiesc nevoia de DTO-uri',
    ],
    correctIndex: 0,
    explanation: '[ApiController] activează comportamente specifice API-urilor (validare automată a modelului, binding implicit), iar [Route("api/bank")] stabilește prefixul de rută al controllerului. Nu au legătură cu crearea bazei de date, CORS sau DTO-uri.',
  },
  {
    id: 'tw-backend-arhitectura-002',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Ce face [FromBody] în semnătura acțiunii de mai jos?',
    code: `[HttpPost("loans/apply")]
public IActionResult Apply([FromBody] LoanApplicationDto application)`,
    codeLang: 'csharp',
    options: [
      'Leagă (deserializează) corpul JSON al cererii la parametrul application',
      'Citește parametrul din URL (ruta)',
      'Validează automat toate câmpurile',
      'Trimite răspunsul în format JSON',
    ],
    correctIndex: 0,
    explanation: '[FromBody] indică legarea parametrului din corpul cererii (JSON deserializat în LoanApplicationDto). Parametrii din rută/URL se leagă cu [FromRoute]/[FromQuery]; serializarea răspunsului e o etapă separată.',
  },
  {
    id: 'tw-backend-arhitectura-003',
    topic: 'backend-arhitectura',
    difficulty: 'easy',
    prompt: 'Ce face return Ok(new LoanDecisionDto { ... }) într-o acțiune de controller?',
    options: [
      'Întoarce 200 OK cu obiectul serializat în corpul răspunsului',
      'Întoarce 404 Not Found',
      'Aruncă o excepție',
      'Redirecționează clientul către altă pagină',
    ],
    correctIndex: 0,
    explanation: 'Ok(...) produce un răspuns HTTP 200 OK având obiectul dat serializat (de regulă JSON) în corp. Pentru 404 s-ar folosi NotFound(), iar pentru redirect — Redirect().',
  },
  {
    id: 'tw-backend-arhitectura-004',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Controllerul depinde de interfețele IScoringAction și ILoanAction. Ce avantaj oferă programarea pe interfețe?',
    options: [
      'Decuplează controllerul de implementare (abstractizare, testabilitate, înlocuire ușoară)',
      'Crește viteza de execuție a codului',
      'Elimină complet nevoia de clase',
      'Generează automat interogările SQL',
    ],
    correctIndex: 0,
    explanation: 'Programarea pe interfețe decuplează consumatorul (controllerul) de implementarea concretă: se poate înlocui/mock-ui ușor implementarea (testare), respectând principiul inversiunii dependențelor. Nu influențează direct viteza și nu generează SQL.',
  },

  // ---- Arhitectură: clase base/derived ----
  {
    id: 'tw-backend-arhitectura-005',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Conform cerinței, care clasă moștenește clasa de bază ȘI implementează interfața?',
    code: `// bază — sufix ...Actions (metode protected Execute...)
public abstract class ScoringActions {
    protected CreditScoreResult ExecuteComputeScore(int clientId) { /* ... */ }
}

// copil — sufix ...Flow
public class ScoringFlow : ScoringActions, IScoringAction {
    // moștenește baza și implementează interfața
}`,
    codeLang: 'csharp',
    options: [
      'Clasa cu sufixul „…Flow" (copilul)',
      'Clasa cu sufixul „…Actions" (baza)',
      'Controllerul',
      'DTO-ul',
    ],
    correctIndex: 0,
    explanation: 'Clasa „…Flow" este cea care moștenește baza „…Actions" și implementează interfața (ex: ScoringFlow : ScoringActions, IScoringAction). Baza „…Actions" doar oferă metodele protected Execute…, fără să implementeze interfața.',
  },
  {
    id: 'tw-backend-arhitectura-006',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Din care interfață face parte metoda ComputeCreditScore(...)?',
    code: `public interface IScoringAction {
    CreditScoreResult ComputeCreditScore(int clientId);
    EligibilityDecision EvaluateEligibility(int score, decimal amount, int termMonths);
}
public interface ILoanAction {
    AmortizationResult BuildAmortizationSchedule(decimal amount, decimal rate, int termMonths);
    ApplicationRecord CreateApplication(LoanApplicationDto application, EligibilityDecision decision);
}`,
    codeLang: 'csharp',
    options: ['IScoringAction', 'ILoanAction', 'IActionResult', 'ControllerBase'],
    correctIndex: 0,
    explanation: 'ComputeCreditScore și EvaluateEligibility aparțin interfeței IScoringAction (cele de scoring). BuildAmortizationSchedule și CreateApplication aparțin ILoanAction.',
  },
  {
    id: 'tw-backend-arhitectura-007',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Metodele BuildAmortizationSchedule(...) și CreateApplication(...) aparțin interfeței:',
    options: ['ILoanAction', 'IScoringAction', 'IServiceProvider', 'IDisposable'],
    correctIndex: 0,
    explanation: 'BuildAmortizationSchedule și CreateApplication sunt acțiunile legate de credit, deci aparțin ILoanAction. ComputeCreditScore/EvaluateEligibility aparțin IScoringAction.',
  },
  {
    id: 'tw-backend-arhitectura-008',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'De ce metodele Execute… din clasa de bază „…Actions" sunt protected?',
    options: [
      'Sunt accesibile doar în clasa de bază și în clasele derivate, nu din exterior',
      'Pentru a fi apelate direct de controller',
      'Pentru că trebuie să fie statice',
      'Ca să fie serializate în JSON',
    ],
    correctIndex: 0,
    explanation: 'protected înseamnă că metodele sunt vizibile doar în interiorul ierarhiei (clasa de bază și derivatele), nu din afară. Astfel clasa „…Flow" le poate folosi, dar controllerul lucrează doar prin metodele interfeței, nu direct cu Execute….',
  },

  // ---- Completare cod (fill-in-blank) ----
  {
    id: 'tw-backend-arhitectura-009',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    prompt: 'Completează garda care oprește fluxul dacă cererea nu este aprobată, întorcând motivul:',
    code: `if (!decision.Approved)
    return Ok(new LoanDecisionDto { Approved = false, Reason = decision.______ });`,
    codeLang: 'csharp',
    optionsAsCode: true,
    options: ['Reason', 'Approved', 'Amount', 'Score'],
    correctIndex: 0,
    explanation: 'Se întoarce motivul refuzului: decision.Reason. Approved e deja false, iar Amount/Score nu explică respingerea în acest DTO de decizie.',
  },
  {
    id: 'tw-backend-arhitectura-010',
    topic: 'backend-arhitectura',
    difficulty: 'easy',
    prompt: 'Completează apelul de scoring cu argumentul corect din cererea primită:',
    code: 'CreditScoreResult score = _scoring.ComputeCreditScore(application.______);',
    codeLang: 'csharp',
    optionsAsCode: true,
    options: ['ClientId', 'Amount', 'TermMonths', 'Reason'],
    correctIndex: 0,
    explanation: 'Scorul de credit se calculează pentru client, deci se transmite application.ClientId. Amount și TermMonths se folosesc la evaluarea eligibilității, nu la calculul scorului.',
  },

  // ---- Construiește codul (order) ----
  {
    id: 'tw-backend-arhitectura-011',
    topic: 'backend-arhitectura',
    difficulty: 'medium',
    kind: 'order',
    prompt: 'În constructorul controllerului, construiește linia care obține acțiunile de scoring din Business Logic (bl):',
    codeLang: 'csharp',
    tokens: ['_scoring', '=', 'bl.GetScoringActions();'],
    distractorTokens: ['bl.GetLoanActions();', '_loan'],
    options: [],
    correctIndex: 0,
    explanation: 'Linia corectă: _scoring = bl.GetScoringActions(); — câmpul _scoring primește acțiunile de scoring. bl.GetLoanActions() ar fi pentru _loan, nu pentru _scoring.',
  },
  {
    id: 'tw-backend-arhitectura-012',
    topic: 'backend-arhitectura',
    difficulty: 'hard',
    kind: 'order',
    prompt: 'Construiește apelul care evaluează eligibilitatea pe baza scorului, sumei și termenului din cerere:',
    codeLang: 'csharp',
    tokens: [
      'EligibilityDecision',
      'decision',
      '=',
      '_scoring.EvaluateEligibility(',
      'score.Value,',
      'application.Amount,',
      'application.TermMonths',
      ');',
    ],
    distractorTokens: ['_loan.CreateApplication(', 'decision.Reason'],
    options: [],
    correctIndex: 0,
    explanation: 'Forma corectă: EligibilityDecision decision = _scoring.EvaluateEligibility(score.Value, application.Amount, application.TermMonths); — evaluarea eligibilității primește scorul, suma și termenul. _loan.CreateApplication(...) este un alt pas, de creare a cererii.',
  },
];
