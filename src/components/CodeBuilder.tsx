import { useState } from 'react';
import { shuffle } from '../utils/shuffle';

interface BankItem {
  uid: number;
  text: string;
}

interface Props {
  /** Token-urile în ordinea CORECTĂ (primul → ultimul). */
  tokens: string[];
  /** Token-uri greșite adăugate în bancă pe lângă cele corecte. */
  distractorTokens?: string[];
  /** Mod istoric: afișează doar secvența corectă, fără interacțiune. */
  readOnly?: boolean;
  /** Blochează interacțiunea după verificare. */
  locked?: boolean;
  /** Apelat o singură dată, la apăsarea „Verifică". */
  onResult: (isCorrect: boolean) => void;
}

/**
 * CodeBuilder — modul „construiește codul".
 * Utilizatorul apasă cuvintele/token-urile din bancă în ordine, de la primul
 * până la ultimul, pentru a reconstrui întregul fragment de cod.
 */
export function CodeBuilder({
  tokens,
  distractorTokens = [],
  readOnly = false,
  locked = false,
  onResult,
}: Props) {
  // Banca e amestecată o singură dată — componenta se remontează per întrebare
  // (parent-ul dă un `key` bazat pe id-ul întrebării).
  const [bank] = useState<BankItem[]>(() =>
    shuffle([...tokens, ...distractorTokens].map((text, i) => ({ uid: i, text }))),
  );
  const [built, setBuilt]     = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const textOf      = (uid: number) => bank.find(b => b.uid === uid)!.text;
  const builtTexts  = built.map(textOf);
  const isCorrect   = builtTexts.length === tokens.length && builtTexts.every((t, i) => t === tokens[i]);
  const available   = bank.filter(b => !built.includes(b.uid));
  const frozen      = locked || checked || readOnly;

  const addToken    = (uid: number) => { if (!frozen) setBuilt(prev => [...prev, uid]); };
  const removeToken = (uid: number) => { if (!frozen) setBuilt(prev => prev.filter(u => u !== uid)); };
  const reset       = () => { if (!frozen) setBuilt([]); };
  const check       = () => {
    if (checked || built.length === 0) return;
    setChecked(true);
    onResult(isCorrect);
  };

  // ---- Mod istoric: doar secvența corectă ----
  if (readOnly) {
    return (
      <div className="rounded-xl bg-slate-900 dark:bg-slate-950 border border-emerald-600/50 p-4 overflow-x-auto">
        <code className="font-mono text-[13px] leading-relaxed text-emerald-300 whitespace-pre-wrap">
          {tokens.join(' ')}
        </code>
      </div>
    );
  }

  const buildAreaTone = !checked
    ? 'border-slate-300 dark:border-slate-600'
    : isCorrect
      ? 'border-emerald-400 dark:border-emerald-600 bg-emerald-50/60 dark:bg-emerald-900/15'
      : 'border-rose-400 dark:border-rose-600 bg-rose-50/60 dark:bg-rose-900/15';

  return (
    <div>
      {/* Zona de construcție */}
      <div
        className={`min-h-[3.25rem] rounded-xl border-2 border-dashed ${buildAreaTone}
          bg-white dark:bg-slate-800 p-3 mb-3 flex flex-wrap items-center gap-1.5 transition-colors`}
      >
        {built.length === 0 ? (
          <span className="text-slate-400 dark:text-slate-500 text-sm italic px-1">
            Apasă cuvintele în ordine, de la primul până la ultimul…
          </span>
        ) : (
          built.map(uid => (
            <button
              key={uid}
              onClick={() => removeToken(uid)}
              disabled={frozen}
              className={`font-mono text-[13px] px-2 py-1 rounded-md border transition-all
                ${frozen
                  ? 'cursor-default border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  : 'border-indigo-300 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-300 active:scale-95'}`}
            >
              {textOf(uid)}
            </button>
          ))
        )}
      </div>

      {/* La răspuns greșit: arată ordinea corectă */}
      {checked && !isCorrect && (
        <div className="mb-3 rounded-xl bg-slate-900 dark:bg-slate-950 border border-emerald-600/50 p-3 overflow-x-auto">
          <p className="text-[11px] uppercase tracking-wider text-emerald-400/80 font-semibold mb-1">Cod corect</p>
          <code className="font-mono text-[13px] leading-relaxed text-emerald-300 whitespace-pre-wrap">
            {tokens.join(' ')}
          </code>
        </div>
      )}

      {/* Banca de token-uri + acțiuni (ascunse după verificare) */}
      {!checked && (
        <>
          <div className="flex flex-wrap gap-2 mb-3">
            {available.map(b => (
              <button
                key={b.uid}
                onClick={() => addToken(b.uid)}
                className="font-mono text-[13px] px-2.5 py-1.5 rounded-lg border-2 border-slate-200 dark:border-slate-700
                  bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100
                  hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20
                  active:scale-95 transition-all duration-150"
              >
                {b.text}
              </button>
            ))}
            {available.length === 0 && (
              <span className="text-slate-400 dark:text-slate-500 text-sm italic px-1 py-1.5">
                Toate cuvintele sunt plasate.
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={reset}
              disabled={built.length === 0}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-300 text-sm font-medium
                hover:border-slate-300 dark:hover:border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed
                active:scale-95 transition-all duration-150"
            >
              ↺ Resetează
            </button>
            <button
              onClick={check}
              disabled={built.length === 0}
              className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold
                hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed
                active:scale-95 transition-all duration-150"
            >
              ✓ Verifică
            </button>
          </div>
        </>
      )}
    </div>
  );
}
