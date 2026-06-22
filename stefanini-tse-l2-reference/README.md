# Stefanini — Technical Support Engineer L2 — Interview Prep Platform

Question bank + interview prep for the **Technical Support Engineer L2** role
(Linux · Application Support · SQL/MySQL · Monitoring · Incident Response · Networking · Customer Support).

Goal: enough material to pass (1) the AI screening, (2) the live L2/L3 technical interview, and (3) the HR behavioral interview.

---

## Folder structure

```
Stefanini-TSE-L2-Prep/
├── README.md
├── quiz/                              500 multiple-choice questions (ids 1–500, globally unique)
│   ├── linux.json                       120   (ids 1–120)
│   ├── sql-mysql.json                    80   (ids 121–200)
│   ├── application-support.json          80   (ids 201–280)
│   ├── networking.json                   70   (ids 281–350)
│   ├── monitoring.json                   50   (ids 351–400)
│   ├── php.json                          25   (ids 401–425)
│   ├── messaging-mulesoft-rabbitmq.json  25   (ids 426–450)
│   ├── mongodb.json                      20   (ids 451–470)
│   ├── cloud.json                        15   (ids 471–485)
│   └── customer-support.json             15   (ids 486–500)
├── interview/
│   ├── behavioral.json                  100   behavioral questions (ids 1–100)
│   └── technical.json                   100   technical Q&A (ids 1–100)
└── case-studies/
    └── case-studies.json                 50   troubleshooting case studies (ids 1–50)
```

---

## Quiz question schema

```json
{
  "id": 1,
  "category": "Linux",
  "difficulty": "Easy | Medium | Hard",
  "importance": "Critical | High | Medium",
  "question": "Scenario or question text.",
  "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
  "correctAnswer": 1,
  "explanation": "Why the correct answer is right and why the main distractors are wrong.",
  "realWorldContext": "How this shows up in a real L2 support ticket/incident."
}
```

- `options` is always **exactly 4** plain answer strings (no `A)` / `B)` prefixes).
- `correctAnswer` is the **0-based index** into `options` (0 = first option, 3 = last).
- `difficulty` distribution per the spec: **Easy 30% · Medium 50% · Hard 20%**.

### Behavioral / technical / case-study schemas
- `behavioral.json`: `{ id, category, difficulty, importance, question, whatTheyAssess, strongAnswerOutline (STAR), sampleAnswer, redFlags }`
- `technical.json`: `{ id, category, difficulty, importance, question, answer, followUps }`
- `case-studies.json`: `{ id, category, difficulty, importance, title, problem, symptoms, logs, investigationSteps[], rootCause, resolution, prevention }`

---

## Spaced repetition (importance-weighted)

Every item is tagged `importance`: **Critical → High → Medium**. Use a Leitner-style scheme:

| Event | Action |
|---|---|
| Answered **correctly** | Move up one box (longer interval before it reappears). |
| Answered **incorrectly** | Drop back to box 1 (reappears soon). |
| Wrong + `Critical` | Re-queue **immediately** (within the next few questions) and keep it in rotation until 2 consecutive correct. |
| Wrong + `High` | Re-queue within the current session. |
| Wrong + `Medium` | Re-queue next session. |

Suggested box intervals (sessions): Box1=now, Box2=+1, Box3=+3, Box4=+7, Box5=+14.
A `Critical` item never advances past Box 3 until answered correctly twice in a row.

---

## Progress

| Category | Count | Status |
|---|---|---|
| Linux | 120 | ✅ done |
| SQL & MySQL | 80 | ✅ done |
| Application Support | 80 | ✅ done |
| Networking | 70 | ✅ done |
| Monitoring & Observability | 50 | ✅ done |
| PHP Support | 25 | ✅ done |
| MuleSoft / RabbitMQ / AMQP | 25 | ✅ done |
| MongoDB | 20 | ✅ done |
| Cloud | 15 | ✅ done |
| Customer Support & Communication | 15 | ✅ done |
| Behavioral interview | 100 | ✅ done |
| Technical interview | 100 | ✅ done |
| Troubleshooting case studies | 50 | ✅ done |

**TOTAL: 750 items — ✅ complete & validated** (500 quiz · 100 behavioral · 100 technical · 50 case studies)
