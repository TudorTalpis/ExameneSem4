import type { Question } from '../types/question';

export const stefCustomerQuestions: Question[] = [
  {
    "id": "stef-customer-001",
    "topic": "stef-customer",
    "difficulty": "easy",
    "prompt": "An angry customer opens a call shouting, 'Your system has been down all morning and nobody told us anything! This is ridiculous!' What is the best opening response?",
    "options": [
      "Calmly explain that the outage is actually a known issue and there is nothing more you can do right now",
      "Tell the customer that raising their voice will not make the problem get fixed any faster",
      "Acknowledge the impact and frustration first: 'I understand this outage has disrupted your morning, and I'm sorry for that. Let me get the details and help you right now.'",
      "Point out that the outage notification was posted on the status page, so they should have seen it"
    ],
    "correctIndex": 2,
    "explanation": "De-escalation starts with acknowledging the customer's impact and emotion before moving to the facts; this validates them and lowers tension. The other options are defensive, dismissive, or blaming, which escalate the situation.  —  Real-world: In live incident calls, the first 15 seconds set the tone; leading with empathy and ownership calms most upset callers far more effectively than facts or justifications."
  },
  {
    "id": "stef-customer-002",
    "topic": "stef-customer",
    "difficulty": "easy",
    "prompt": "You own an incident ticket and the next SLA status update is due in 10 minutes, but engineering has no new information since the last update. What should you do?",
    "options": [
      "Send the update on time stating that the team is still actively investigating, with the time of the next update, even though there is no new finding",
      "Skip this update and wait until there is something meaningful to report so you don't waste the customer's time",
      "Close the update window and reopen the ticket only once the issue is resolved",
      "Forward the ticket to a colleague so the missed update is not attributed to you"
    ],
    "correctIndex": 0,
    "explanation": "Incident ownership means keeping the customer informed on schedule even when there is no news; a 'still working, next update at X' message maintains trust. Going silent or shifting the ticket erodes confidence and breaks the SLA commitment.  —  Real-world: Customers fear being forgotten more than they fear a hard problem; reliable on-time updates, even empty ones, are a hallmark of strong incident ownership."
  },
  {
    "id": "stef-customer-003",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "A non-technical finance manager asks why their report failed to generate. The root cause is 'a deadlock on the reporting database caused by a long-running batch job.' How should you phrase it to them?",
    "options": [
      "Tell them the report could not run because another large task was using the same data at the same time, and we are adjusting the schedule so it won't clash again",
      "Explain that a deadlock occurred between the batch process and the reporting query threads on the DB instance",
      "Tell them it is a backend technical issue they would not understand and that IT is handling it",
      "Send them the raw database error log so they have the full technical detail"
    ],
    "correctIndex": 0,
    "explanation": "Communicating to a non-technical audience means translating the cause into plain, relatable language and focusing on impact and fix, not jargon. Raw logs or condescension ('you wouldn't understand') fail the audience.  —  Real-world: L2 engineers routinely brief non-technical stakeholders; the skill is conveying enough to build confidence without drowning them in terms they cannot act on."
  },
  {
    "id": "stef-customer-004",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "Halfway through troubleshooting, you realize the issue is larger than expected and likely needs L3 and possibly the vendor. The customer has not asked for an update yet. What is the best action?",
    "options": [
      "Wait for the customer to ask before mentioning escalation, to avoid alarming them prematurely",
      "Proactively inform the customer that you are escalating to a specialist team to get this resolved faster, explain why, and set the next update time",
      "Escalate quietly to L3 and let them decide whether the customer needs to be told",
      "Tell the customer the issue is too complex for your team and they may need to open a separate vendor case themselves"
    ],
    "correctIndex": 1,
    "explanation": "Good escalation communication is proactive and framed positively: you tell the customer what is changing, why it benefits them, and when they'll hear next. Staying silent or pushing the burden onto the customer damages trust and ownership.  —  Real-world: Escalation is a sign of diligence, not failure; framing it as 'bringing in the right experts to resolve this faster' reassures customers rather than worrying them."
  },
  {
    "id": "stef-customer-005",
    "topic": "stef-customer",
    "difficulty": "easy",
    "prompt": "A customer asks, 'When exactly will this be fixed?' You genuinely do not know the resolution time yet. What is the most professional response?",
    "options": [
      "Give them a confident estimate of 'about an hour' so they feel reassured, even though you are unsure",
      "Tell them you can't possibly know and that these things take as long as they take",
      "Say you don't have a firm ETA yet because the team is still diagnosing the root cause, then commit to a specific time when you will give them an update",
      "Tell them to check the status page periodically for updates"
    ],
    "correctIndex": 2,
    "explanation": "Saying 'I don't know yet' professionally means being honest about the uncertainty while still committing to a concrete next-update time. Inventing an ETA risks over-promising; vague or dismissive answers leave the customer unsupported.  —  Real-world: An honest 'no firm ETA yet, but I'll update you by 3 PM' protects credibility far better than a guess that you then have to walk back."
  },
  {
    "id": "stef-customer-006",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "You are drafting a written status update for an ongoing P2 incident to be sent to affected business users. Which structure best reflects a clear, professional update?",
    "options": [
      "A short note saying 'We are aware and working on it, thanks for your patience' with no other detail",
      "A detailed technical narrative of every command and hypothesis the engineers have tried so far",
      "A blunt statement that the issue is unresolved and you will let them know when it is fixed",
      "A concise update with: current status, the impact in plain terms, what is being done, and the time of the next update"
    ],
    "correctIndex": 3,
    "explanation": "A strong status update covers status, impact, action being taken, and the next-update time, all in plain language. Overly vague notes give no confidence, while full technical narratives overwhelm a business audience.  —  Real-world: Consistent, well-structured updates reduce inbound 'any news?' tickets and make stakeholders feel managed even while the root cause is still being chased."
  },
  {
    "id": "stef-customer-007",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "A customer writes a furious ticket full of personal jabs: 'Your team is clearly incompetent and you obviously don't care about us.' What is the healthiest and most professional way to handle this?",
    "options": [
      "Match their directness and remind them that insulting the team is unproductive",
      "Recognize that the anger is about the problem and its impact, not about you personally, and respond by acknowledging their frustration and focusing on resolving the issue",
      "Reply more slowly and briefly to signal that rude messages get a lower priority",
      "Defend the team's competence with examples of how hard everyone has been working"
    ],
    "correctIndex": 1,
    "explanation": "Not taking it personally lets you stay calm and professional; the customer's anger is driven by the impact, so you acknowledge it and redirect to resolution. Retaliating, defending, or punishing them with slow replies all escalate and look unprofessional.  —  Real-world: Separating the person's words from your self-worth is a core support resilience skill; it keeps you effective and the conversation productive under personal attacks."
  },
  {
    "id": "stef-customer-008",
    "topic": "stef-customer",
    "difficulty": "hard",
    "prompt": "A key stakeholder pressures you for a delivery commitment on a fix. Internally, you believe it will likely take 3 days, but there is real uncertainty. Applying 'under-promise, over-deliver' correctly, what do you communicate?",
    "options": [
      "Promise it within 24 hours to keep the stakeholder happy and buy goodwill now",
      "Refuse to give any timeframe at all until the fix is fully tested and ready",
      "Commit to a realistic window with buffer (e.g., 'by end of day in 4 business days') and update them earlier if you can deliver sooner",
      "Give the optimistic 3-day estimate as a firm promise since that is your best guess"
    ],
    "correctIndex": 2,
    "explanation": "Under-promise/over-deliver means committing to a realistic timeframe that includes buffer for uncertainty, then beating it when possible, which builds trust. Aggressive promises set you up to miss, and refusing any estimate frustrates stakeholders managing their own dependencies.  —  Real-world: Stakeholders plan around the dates you give; a date you reliably beat earns far more credibility than an optimistic one you repeatedly slip."
  },
  {
    "id": "stef-customer-009",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "A customer demands a feature change that is out of scope and not something support can deliver. How do you say 'no' professionally?",
    "options": [
      "Tell them flatly that it is not possible and that they need to accept the product as it is",
      "Vaguely agree that you'll 'see what you can do' to avoid the awkwardness, even though it won't happen",
      "Tell them the request is unreasonable and that other customers manage fine without it",
      "Acknowledge the need, explain clearly that it isn't something the support process can change, and offer the proper path (e.g., logging a feature request or connecting them to the right team)"
    ],
    "correctIndex": 3,
    "explanation": "A professional 'no' validates the request, states the limitation honestly, and offers a constructive alternative path. A blunt refusal feels dismissive, a false 'yes' destroys trust later, and calling the request unreasonable is disrespectful.  —  Real-world: Customers accept 'no' far better when it comes with empathy and a route forward, such as a feature-request channel, than when it is a flat or evasive denial."
  },
  {
    "id": "stef-customer-010",
    "topic": "stef-customer",
    "difficulty": "hard",
    "prompt": "During a major outage you discover that an earlier status update you sent to the customer contained incorrect information about the cause. What should you do?",
    "options": [
      "Quietly send a corrected update and hope no one notices the earlier mistake",
      "Leave the earlier message alone to avoid undermining confidence, and just move forward with accurate updates",
      "Wait until the incident is fully resolved, then explain the correction in the post-incident review only",
      "Promptly issue a clear correction acknowledging the earlier information was inaccurate, state the current accurate understanding, and continue normal updates"
    ],
    "correctIndex": 3,
    "explanation": "Ownership and honest communication require promptly correcting misinformation, owning the error plainly, and continuing transparent updates. Hiding, ignoring, or deferring the correction risks the customer acting on bad information and erodes trust when discovered.  —  Real-world: Transparent, timely corrections during incidents protect long-term credibility; customers forgive honest mistakes far more readily than concealment."
  },
  {
    "id": "stef-customer-011",
    "topic": "stef-customer",
    "difficulty": "easy",
    "prompt": "Which of the following best demonstrates active listening during a difficult support call?",
    "options": [
      "Interrupting as soon as you recognize the problem so you can start fixing it faster",
      "Letting the customer finish, then paraphrasing back what you heard ('So the export fails only on large files since this morning, is that right?') before proposing next steps",
      "Staying completely silent until they stop talking and then immediately giving the fix",
      "Typing your notes while they speak and asking them to repeat anything you missed afterward"
    ],
    "correctIndex": 1,
    "explanation": "Active listening means letting the person finish and reflecting their words back to confirm understanding, which makes them feel heard and reduces miscommunication. Interrupting or only half-attending signals you are not truly listening.  —  Real-world: A quick paraphrase ('let me make sure I've got this right...') both confirms the facts and visibly demonstrates to an upset customer that they've been understood."
  },
  {
    "id": "stef-customer-012",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "Review this ticket reply for tone: 'As I ALREADY told you in my last message, you obviously need to clear your cache. Did you even try that?' What is the main problem and the better approach?",
    "options": [
      "It is too long; the better approach is to shorten it to just 'Clear your cache.'",
      "Nothing is wrong; being direct and firm with repeat questions is efficient and appropriate",
      "The tone is condescending and accusatory; a better reply restates the step politely and checks in supportively (e.g., 'Just to confirm, were you able to clear the cache? Happy to walk through it if it didn't help.')",
      "The only issue is the capital letters; removing them fixes the message entirely"
    ],
    "correctIndex": 2,
    "explanation": "Appropriate written tone is courteous and supportive even when repeating yourself; sarcasm and accusatory phrasing ('did you even try') read as hostile in text. The fix is a polite restatement plus an offer to help.  —  Real-world: Written messages lack vocal warmth, so neutral words can read as cold and sarcasm reads as outright rude; erring toward patient and friendly phrasing protects the relationship."
  },
  {
    "id": "stef-customer-013",
    "topic": "stef-customer",
    "difficulty": "hard",
    "prompt": "An incident has breached its resolution SLA, the customer is escalating to your management, and a fix is still hours away. What combination best reflects strong ownership and stakeholder management?",
    "options": [
      "Brief your manager proactively with facts and current ETA, give the customer an honest update that acknowledges the breach and impact, and increase update frequency until resolution",
      "Wait for your manager to ask you for a briefing, since they may not have noticed the escalation yet",
      "Reassure the customer that it will be fixed 'very soon' to calm the escalation, and avoid mentioning the SLA breach",
      "Tell the customer to direct all further questions to management now that they have escalated"
    ],
    "correctIndex": 0,
    "explanation": "Strong ownership under an escalation means proactively informing both management and the customer, being honest about the breach and impact, and tightening the update cadence. Going quiet, vaguely over-promising, or pushing the customer away all worsen the situation.  —  Real-world: When things go wrong, escalation communication flows in two directions: keep management ahead of the customer's questions and keep the customer informed honestly and more frequently."
  },
  {
    "id": "stef-customer-014",
    "topic": "stef-customer",
    "difficulty": "medium",
    "prompt": "A customer asks for a deep technical explanation of why the bug happened, and they are clearly technical themselves. Earlier you simplified things for a business contact. How should you adapt?",
    "options": [
      "Keep using the same simplified, non-technical explanation for consistency across all contacts",
      "Refuse to share technical detail, citing internal confidentiality, regardless of who is asking",
      "Send them the full simplified summary plus a note that the real cause is too complex to explain",
      "Match the explanation to this audience by providing the appropriate technical depth they are asking for, while still being clear and structured"
    ],
    "correctIndex": 3,
    "explanation": "Communicating effectively means tailoring depth to the audience: a technical contact warrants accurate technical detail, while a business contact needs plain language. Refusing detail or forcing the wrong level frustrates the listener.  —  Real-world: The same incident often requires two different briefings; reading the audience and adjusting technical depth is a key L2 communication skill."
  },
  {
    "id": "stef-customer-015",
    "topic": "stef-customer",
    "difficulty": "easy",
    "prompt": "A customer is venting at length about how the issue ruined their day before describing the actual problem. What is the most empathetic and effective response?",
    "options": [
      "Cut in to say you can only help if they stick to the technical facts",
      "Let them vent briefly, acknowledge the impact sincerely ('That sounds really disruptive, I'm sorry this hit you today'), then gently guide them to the details so you can help",
      "Stay silent and wait it out, then ask them to summarize everything in writing instead",
      "Apologize repeatedly for everything they mention to show how sorry you are"
    ],
    "correctIndex": 1,
    "explanation": "Empathy plus a gentle redirect lets the customer feel heard and then moves toward resolution efficiently. Cutting them off feels cold, excessive apologizing sounds hollow, and total silence offers no acknowledgment.  —  Real-world: A brief, genuine acknowledgment of impact usually defuses venting quickly, after which most customers willingly shift to the practical details you need."
  }
];
