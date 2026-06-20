import type { Question } from '../types/question';

export const stefAppSupportQuestions: Question[] = [
  {
    "id": "stef-appsupport-001",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "In a standard ticket lifecycle, what does the status 'Pending customer' (also called 'Pending - awaiting customer') primarily indicate?",
    "options": [
      "The ticket is blocked waiting for information or action from the requester, so SLA timers are typically paused",
      "The support engineer is actively working the issue and needs no input",
      "The ticket has been resolved and is awaiting automatic closure",
      "The ticket was rejected and routed back to the service desk"
    ],
    "correctIndex": 0,
    "explanation": "'Pending customer' means the engineer cannot progress until the user replies or acts, and most tools pause the resolution SLA clock while in this state. It is not an 'actively working' status, which is why that distractor is wrong.  —  Real-world: An L2 engineer sets a ticket to 'Pending customer' after requesting a screenshot or error log, so the unanswered wait time is not counted against the team's SLA."
  },
  {
    "id": "stef-appsupport-002",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Which statement best distinguishes severity from priority on a support ticket?",
    "options": [
      "Severity and priority always carry the same value and are interchangeable",
      "Severity measures the technical impact of the fault, while priority determines the order and urgency in which it is worked",
      "Severity is set by the customer and priority is set by the vendor's legal team",
      "Priority describes the bug's technical depth and severity describes the response deadline"
    ],
    "correctIndex": 1,
    "explanation": "Severity reflects how bad the malfunction is technically, whereas priority reflects how soon it must be addressed given business impact and urgency. They are not interchangeable, and a high-severity issue with a workaround can be lower priority.  —  Real-world: A cosmetic typo on an internal admin page can be high severity to a perfectionist developer but remains low priority because it does not affect business operations."
  },
  {
    "id": "stef-appsupport-003",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Priority is most commonly derived from a matrix combining which two factors?",
    "options": [
      "Severity and the engineer's seniority",
      "Cost of the fix and the customer's contract tier",
      "Impact (how many users/business functions affected) and urgency (how quickly it must be fixed)",
      "Number of previous tickets and the time of day"
    ],
    "correctIndex": 2,
    "explanation": "The standard ITIL approach combines impact with urgency to produce priority. Contract tier or fix cost may influence handling but are not the two axes of the canonical priority matrix.  —  Real-world: When logging an incident, an L2 engineer selects impact (e.g., 'whole site') and urgency (e.g., 'business stopped'), and the tool auto-assigns P1 from the matrix."
  },
  {
    "id": "stef-appsupport-004",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Which scenario best matches a P1 (Priority 1) incident?",
    "options": [
      "A single user cannot change their avatar image in the profile page",
      "A scheduled report is formatted with the wrong font",
      "A user requests a new feature for a future release",
      "The company's customer-facing payment platform is completely down for all users during business hours with no workaround"
    ],
    "correctIndex": 3,
    "explanation": "P1 is reserved for critical, widespread production outages with major business impact and no workaround, exactly matching a total payment-platform outage. A single cosmetic profile issue affects one user and has minimal impact, so it is not P1.  —  Real-world: An L2 on call escalates a full payment-gateway outage as P1 immediately, triggering major-incident bridge calls and management notification."
  },
  {
    "id": "stef-appsupport-005",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "What does MTTA (Mean Time To Acknowledge) measure, and how does it differ from MTTR (Mean Time To Resolve)?",
    "options": [
      "MTTA measures average time to first acknowledge/respond to a ticket; MTTR measures average time to fully resolve it",
      "MTTA measures total downtime; MTTR measures the number of tickets closed",
      "MTTA and MTTR both measure resolution speed and are calculated identically",
      "MTTA measures how long the customer waits before reopening; MTTR measures escalation count"
    ],
    "correctIndex": 0,
    "explanation": "MTTA tracks how quickly the team acknowledges/responds, while MTTR tracks how long it takes to resolve end to end. They are distinct metrics, so treating them as identical is incorrect.  —  Real-world: A support lead reviews dashboards where a low MTTA but high MTTR signals fast triage but slow fixes, prompting a look at L3 escalation delays."
  },
  {
    "id": "stef-appsupport-006",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A ticket has been bounced between the Network team, the Application team, and the Database team three times in two hours, with each reassigning it and no one investigating. What is this anti-pattern called, and what is the correct remedy?",
    "options": [
      "It is 'fast triage'; the remedy is to keep reassigning until the right team self-identifies",
      "It is 'ticket ping-pong'; the remedy is clear ownership where the current owner investigates and coordinates before any handoff",
      "It is 'swarming'; the remedy is to close and ask the user to re-raise",
      "It is 'shift-left'; the remedy is to send it straight to L3"
    ],
    "correctIndex": 1,
    "explanation": "Repeated reassignment without investigation is classic 'ticket ping-pong', solved by assigning a single accountable owner who drives the ticket and coordinates other teams. Closing and asking the user to re-raise just penalizes the customer.  —  Real-world: An L2 engineer takes ownership of a ping-ponging incident, hosts a quick joint check with DB and network, and keeps the ticket assigned to themselves until root cause is found."
  },
  {
    "id": "stef-appsupport-007",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Why should an engineer NOT mark a ticket 'Closed' immediately after deploying what looks like a fix?",
    "options": [
      "Because closing a ticket permanently deletes its history",
      "Because only L3 engineers are allowed to use the 'Closed' status",
      "Because the resolution should first be verified with the user (or via monitoring) to confirm the issue is actually gone",
      "Because closing increases the team's MTTA metric"
    ],
    "correctIndex": 2,
    "explanation": "A ticket should move to 'Resolved' and only be 'Closed' once the user confirms the fix works, preventing premature closure of an unresolved issue. Closing does not delete history, so that distractor is incorrect.  —  Real-world: An L2 engineer applies a config change, sets the ticket to 'Resolved', and asks the user to confirm before final closure, avoiding an angry reopen the next morning."
  },
  {
    "id": "stef-appsupport-008",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "At 09:00 four incidents arrive simultaneously: (A) the core order-entry app is down for all 400 users, (B) one user forgot their password, (C) a manager wants a report color changed, (D) a printer in one office is jammed. Which should you work first?",
    "options": [
      "B, because password resets are quick wins",
      "C, because it is a manager's request",
      "D, because hardware faults always take precedence",
      "A, because a full outage affecting all users has the highest impact and urgency (P1)"
    ],
    "correctIndex": 3,
    "explanation": "Prioritization is driven by impact and urgency, and a full outage for 400 users is the clear P1 that must be tackled first. Choosing a quick win or a VIP-flavored task over a P1 outage is a classic prioritization error.  —  Real-world: During a busy morning an L2 engineer triages the queue by priority, jumps on the all-user outage first, and parks the password reset and printer jam as lower-priority items."
  },
  {
    "id": "stef-appsupport-009",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A new ticket reads: 'Cannot connect to the VPN from home.' Your team only handles the ERP application; a separate Network/Infrastructure queue owns VPN. What is the best next action?",
    "options": [
      "Re-categorize it correctly and route/transfer it to the Network queue with a brief note, so it reaches the right team without bouncing",
      "Attempt to fix the VPN yourself even though it is outside your scope",
      "Close the ticket as 'not our problem'",
      "Leave it unassigned in your queue and hope someone notices"
    ],
    "correctIndex": 0,
    "explanation": "Correct categorization and a clean single handoff to the owning queue gets the issue to the right team efficiently. Closing it as 'not our problem' abandons the customer and is poor practice.  —  Real-world: An L2 ERP analyst recognizes a misrouted VPN ticket, recategorizes it, and transfers it to Network with context so the user is not asked to start over."
  },
  {
    "id": "stef-appsupport-010",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Your SLA states a 'response time' (acknowledgement) of 30 minutes for P2 incidents. A P2 ticket arrives and you know the full fix will take two days. What does meeting the response SLA require?",
    "options": [
      "Fully resolving the issue within 30 minutes",
      "Acknowledging the ticket and contacting the customer within 30 minutes, even though resolution will take longer",
      "Ignoring the timer because resolution is what matters",
      "Waiting until you have the complete solution before any contact"
    ],
    "correctIndex": 1,
    "explanation": "Response (acknowledgement) SLA is about making first meaningful contact within the window, separate from the resolution SLA. Confusing response time with resolution time leads to missed acknowledgement targets.  —  Real-world: An L2 engineer sends a holding reply within the 30-minute response SLA confirming the P2 is logged and being investigated, then works the longer fix without breaching the response metric."
  },
  {
    "id": "stef-appsupport-011",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "In the typical lifecycle New -> Open/In-Progress -> Pending -> Resolved -> Closed, what does the 'In-Progress' status communicate?",
    "options": [
      "The ticket has not yet been picked up by anyone",
      "The issue is permanently fixed and archived",
      "An engineer has taken ownership and is actively investigating or working the issue",
      "The ticket is waiting on the customer to reply"
    ],
    "correctIndex": 2,
    "explanation": "'In-Progress' signals active work by an assigned owner, distinguishing it from 'New' (not yet picked up) and 'Pending' (waiting on someone else). It is not an archived or customer-wait state.  —  Real-world: When an L2 engineer starts diagnosing an incident, they move it from 'New' to 'In-Progress' so the queue and the customer can see it is actively being handled."
  },
  {
    "id": "stef-appsupport-012",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "You are alone on shift when two incidents land within a minute: (1) a P1 - the billing system is fully down for all customers; (2) a P2 - a finance team of 10 cannot run month-end reports, with a regulatory filing due tomorrow. You can only actively drive one while triaging the other. What is the most defensible action?",
    "options": [
      "Work the P2 first because its regulatory deadline makes it more urgent than a P1",
      "Split your attention equally and work both at 50% so neither waits",
      "Resolve neither until a manager tells you which one matters",
      "Begin driving the P1 immediately, while acknowledging the P2 and escalating/pulling in help so it is not neglected"
    ],
    "correctIndex": 3,
    "explanation": "The P1 full outage outranks the P2 by impact and is engaged first, but good incident management means you still acknowledge the P2 and escalate for additional hands rather than leaving it idle. Working the P2 ahead of a P1, or splitting focus 50/50, both mishandle a critical outage.  —  Real-world: A lone L2 on the night shift opens the P1 bridge for the billing outage, then pages the on-call backup to pick up the time-sensitive P2 month-end reporting incident in parallel."
  },
  {
    "id": "stef-appsupport-013",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "During an ongoing P1 incident, the business stakeholders are anxious and keep calling. What is the recommended practice for customer updates?",
    "options": [
      "Go silent until the incident is fully resolved to avoid distraction",
      "Set and communicate a regular update cadence (e.g., every 30 minutes) and send updates even if there is no change",
      "Only update once, at the very start of the incident",
      "Let each caller speak to a different engineer to spread the load"
    ],
    "correctIndex": 1,
    "explanation": "Agreeing and honoring a fixed update cadence keeps stakeholders informed and reduces inbound chaos, even when the update is 'still investigating'. Going silent erodes trust and generates more interruptions.  —  Real-world: During a P1, the L2 incident handler posts a status update every 30 minutes to the stakeholder bridge so management stops calling individual engineers for ETAs."
  },
  {
    "id": "stef-appsupport-014",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "An incident was logged with impact 'single user' and urgency 'low', so the tool set it to P4. While investigating, you discover the same fault is actually silently corrupting data for hundreds of users. What should you do?",
    "options": [
      "Leave the priority at P4 because changing it after creation is not allowed",
      "Re-assess impact and urgency and re-prioritize the ticket upward (e.g., to P1/P2), since the matrix inputs have changed",
      "Open a brand-new ticket and let the P4 expire",
      "Keep it P4 but just work it faster without changing the record"
    ],
    "correctIndex": 1,
    "explanation": "Priority is not fixed forever; when impact or urgency is found to be higher than first thought, the ticket must be re-evaluated against the matrix and escalated. Silently working a misclassified data-corruption issue as P4 hides a major incident.  —  Real-world: An L2 engineer who finds that a 'minor' bug is corrupting shared records reclassifies the ticket to P1 and triggers the major-incident process rather than leaving it as a low-priority item."
  },
  {
    "id": "stef-appsupport-015",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A customer replies to a 'Resolved' ticket two days later saying 'the problem is back and worse.' What is the most appropriate handling?",
    "options": [
      "Tell them to open a completely new ticket because this one is resolved",
      "Mark it 'Closed' immediately to protect the resolution metrics",
      "Reopen (or relate to a new linked) ticket, re-assess priority based on current impact, and resume ownership",
      "Ignore it since 'Resolved' tickets cannot be touched"
    ],
    "correctIndex": 2,
    "explanation": "A recurrence means the issue was not truly fixed, so the right move is to reopen or link a new ticket and re-evaluate priority given the now-worse impact. Forcing the customer to start over or closing to protect metrics is poor support practice.  —  Real-world: An L2 engineer reopens a recurring incident, notes that impact has grown, and bumps the priority so it gets faster attention the second time around."
  },
  {
    "id": "stef-appsupport-016",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Using a standard impact x urgency matrix, an issue affects a single non-critical user (low impact) but they need it 'as soon as possible' (high urgency). What priority does the matrix most likely yield, and why?",
    "options": [
      "P1, because the user said 'as soon as possible'",
      "P1, because urgency alone always wins",
      "No priority can be assigned without the manager",
      "A mid/low priority (e.g., P3/P4), because low impact tempers the high urgency in the matrix"
    ],
    "correctIndex": 3,
    "explanation": "Priority comes from combining both axes, so low impact pulls the result down to a mid/low priority despite high stated urgency. Treating a single user's 'ASAP' as automatic P1 ignores the impact dimension.  —  Real-world: An L2 engineer politely sets a single-user 'urgent' request to P3, explaining that priority reflects business impact, not just how the requester feels."
  },
  {
    "id": "stef-appsupport-017",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "Your team's dashboard shows MTTA is well within target but MTTR has been steadily climbing for P2/P3 tickets. Which interpretation and action is most sound?",
    "options": [
      "Acknowledgement is slow, so add more first-line staff to answer faster",
      "Resolution is fast, so the rising MTTR must be a reporting error to ignore",
      "Both metrics are fine because MTTA is green, so no action is needed",
      "Tickets are acknowledged promptly but take longer to resolve; investigate resolution bottlenecks such as L3 handoffs, missing knowledge articles, or recurring root causes"
    ],
    "correctIndex": 3,
    "explanation": "Good MTTA with worsening MTTR points to fast triage but slow fixes, so the investigation should target the resolution phase (escalations, knowledge gaps, repeat issues). Adding first-line staff addresses acknowledgement, which is already healthy.  —  Real-world: A support lead seeing this split digs into L3 queue wait times and finds a recurring defect inflating MTTR, then pushes for a permanent fix and a knowledge article."
  },
  {
    "id": "stef-appsupport-018",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is the main purpose of accurate ticket categorization (e.g., choosing the right category/sub-category at logging time)?",
    "options": [
      "It makes the ticket look more professional but has no functional effect",
      "It enables correct routing to the right queue, better reporting, and faster resolution by the right specialists",
      "It automatically resolves the ticket without human involvement",
      "It is only needed for billing the customer"
    ],
    "correctIndex": 1,
    "explanation": "Categorization drives routing, trend reporting, and getting the ticket to the right skilled team quickly. It does not auto-resolve tickets, so that distractor is incorrect.  —  Real-world: An L2 engineer categorizes an incident as 'Email > Outlook > Cannot send', which routes it to the messaging team and later helps spot a spike of identical issues."
  },
  {
    "id": "stef-appsupport-019",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "You acknowledged a customer's P3 ticket within SLA, then went quiet for five days while waiting on an L3 investigation; the customer escalates angrily. What process failure does this best illustrate?",
    "options": [
      "A breach of the response/acknowledgement SLA",
      "Incorrect initial categorization of the ticket",
      "A failure to maintain an agreed update cadence and ticket ownership during the resolution phase",
      "Closing the ticket before verification"
    ],
    "correctIndex": 2,
    "explanation": "The acknowledgement was on time, so the SLA breach is not the issue; the real failure is not keeping the customer updated and not actively owning the ticket while it sat with L3. Categorization and premature closure are unrelated to this silence.  —  Real-world: An L2 engineer learns to send periodic 'still in progress with L3' updates on long-running tickets so customers do not feel abandoned and escalate."
  },
  {
    "id": "stef-appsupport-020",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "Three incidents are open: (X) a P2 affecting 50 users in one department with a workaround in place; (Y) a P3 affecting 200 users but only mildly inconvenient; (Z) a P1 affecting 5 users in the executive suite whose trading desk is completely down with no workaround. Which is the most defensible work order?",
    "options": [
      "Y, then X, then Z, because Y affects the most users",
      "X first because P2 with a workaround is the safest to clear quickly",
      "All three equally since they are all open at once",
      "Z (P1) first, then X (P2 with workaround), then Y (P3), because assigned priority reflects combined impact and urgency, not raw user count"
    ],
    "correctIndex": 3,
    "explanation": "Priority order (P1 then P2 then P3) already encodes the impact x urgency assessment, so the P1 trading-desk outage with no workaround is worked first despite affecting few people. Sorting purely by user count ignores urgency and business criticality, which is why the highest-headcount-first option is wrong.  —  Real-world: An L2 engineer defends working the 5-user executive trading-desk outage before a 200-user minor annoyance because the financial and time impact per minute is far greater."
  },
  {
    "id": "stef-appsupport-021",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "In ITIL terms, a user calls because they need a new mailbox provisioned and access granted to a shared drive. Nothing is broken. How should this be classified?",
    "options": [
      "Incident",
      "Problem",
      "Service request",
      "Change"
    ],
    "correctIndex": 2,
    "explanation": "A service request is a formal request for something to be provided (access, a new account, information) when nothing is broken. It is fulfilled via a standard, pre-approved workflow, not the incident process.  —  Real-world: L2 agents routinely sort tickets at intake; mislabeling an access request as an incident skews outage metrics and pulls it into the wrong queue/SLA."
  },
  {
    "id": "stef-appsupport-022",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is the primary ITIL distinction between an incident and a problem?",
    "options": [
      "An incident affects one user while a problem affects many",
      "An incident is an unplanned interruption to service; a problem is the underlying cause of one or more incidents",
      "An incident is logged by users and a problem is logged by managers",
      "An incident is urgent and a problem is non-urgent"
    ],
    "correctIndex": 1,
    "explanation": "Incident management aims to restore service as fast as possible; problem management investigates the root cause to prevent recurrence. They are separate processes that often run in parallel.  —  Real-world: After repeated login outages, L2 restores service each time (incident) while a problem record is opened to find why the auth token cache keeps expiring."
  },
  {
    "id": "stef-appsupport-023",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "A standard change such as applying a routine, pre-approved monthly OS patch is best described as which type of change?",
    "options": [
      "Emergency change",
      "Normal change requiring full CAB review",
      "An incident, because it modifies production",
      "Standard change (pre-authorized, low risk)"
    ],
    "correctIndex": 3,
    "explanation": "A standard change is low-risk, repeatable, and pre-authorized, so it does not need individual CAB approval each time. Normal changes need assessment/approval and emergency changes follow an expedited path.  —  Real-world: L2 teams execute many standard changes (patches, cert renewals) under a blanket approval, reserving CAB time for higher-risk work."
  },
  {
    "id": "stef-appsupport-024",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is the key difference between functional escalation and hierarchical escalation?",
    "options": [
      "Functional escalation routes a ticket to a more specialized team (e.g., L3); hierarchical escalation raises it to management",
      "Functional escalation is for P1s and hierarchical escalation is for P4s",
      "Functional escalation closes the ticket; hierarchical escalation reopens it",
      "They are two names for the same routing action"
    ],
    "correctIndex": 0,
    "explanation": "Functional (horizontal) escalation moves work to people with more specialized skills or access. Hierarchical (vertical) escalation engages management for authority, resources, or decisions, not for technical depth.  —  Real-world: When L2 cannot resolve a database corruption, it functionally escalates to L3 DBAs; if a major incident needs a vendor emergency contract signed, that is hierarchical."
  },
  {
    "id": "stef-appsupport-025",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Which of the following is the clearest example of a major incident (P1)?",
    "options": [
      "A single user cannot change their desktop wallpaper",
      "The customer-facing payment service is fully down for all users during business hours",
      "A report is formatted slightly differently than expected",
      "A user requests a software license"
    ],
    "correctIndex": 1,
    "explanation": "A major incident has high impact and high urgency, typically a critical service unavailable to many users or customers. The other items are low-impact or are requests, not outages.  —  Real-world: Total loss of payments triggers the major-incident process: bridge, incident commander, and frequent stakeholder updates."
  },
  {
    "id": "stef-appsupport-026",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "During a declared major incident, who is the incident commander?",
    "options": [
      "The most senior developer who wrote the affected code",
      "The first user who reported the outage",
      "The single person who coordinates the response, drives the timeline, and owns decisions and communication flow",
      "The vendor's account manager"
    ],
    "correctIndex": 2,
    "explanation": "The incident commander (or major-incident manager) coordinates the technical responders, keeps the timeline moving, and ensures communication happens; they own the process, not necessarily the fix.  —  Real-world: On a P1 bridge the commander assigns tasks and keeps everyone focused so engineers can troubleshoot without also managing comms."
  },
  {
    "id": "stef-appsupport-027",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "You are L2 on a P1: a core API is returning 500s for all customers. You have confirmed it is not a network or auth issue and your runbook steps are exhausted, but the root cause is clearly in application code you cannot modify. What is the correct next action?",
    "options": [
      "Functionally escalate to L3 now with a clean handoff, since you have hit the limit of your scope and tools",
      "Keep retrying the runbook steps until something changes",
      "Wait an hour to see if it self-recovers before bothering anyone",
      "Close the ticket and ask the customer to re-test later"
    ],
    "correctIndex": 0,
    "explanation": "The criteria to escalate to L3 are met: it is outside your skills/access (code-level), your runbook is exhausted, and impact is high. Sitting on it or looping the same steps only extends the outage.  —  Real-world: L2 is expected to triage and rule out the easy causes, then hand off promptly to L3 rather than guessing at code they cannot change."
  },
  {
    "id": "stef-appsupport-028",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "When handing off a stuck incident to L3, which set BEST represents a clean, complete handoff?",
    "options": [
      "Just the ticket ID and 'it's broken, please fix'",
      "Ticket ID, symptoms, scope/impact, steps already taken with results, and relevant logs/timestamps",
      "A screenshot of the error only",
      "The customer's phone number so L3 can ask them what happened"
    ],
    "correctIndex": 1,
    "explanation": "A clean handoff lets the next team start immediately without redoing your work: identifiers, what is failing, who/how many are affected, what you tried and what happened, plus evidence (logs, errors, timestamps).  —  Real-world: L3 engineers complain most about handoffs that omit steps already taken, forcing them to repeat triage and waste outage minutes."
  },
  {
    "id": "stef-appsupport-029",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A P2 ticket has been with you for 90 minutes. You are out of ideas, you have not made progress in the last 30 minutes, and the customer is asking for updates. The right behavior is to:",
    "options": [
      "Keep it to yourself a bit longer so you don't look like you couldn't solve it",
      "Mark it resolved to stop the SLA clock",
      "Escalate functionally to the specialized team and update the customer, rather than sitting on a stuck ticket",
      "Reassign it to a random colleague at your level without context"
    ],
    "correctIndex": 2,
    "explanation": "Sitting on a stuck ticket to save face harms the customer and the SLA. When you have stopped making progress, escalate with context and keep stakeholders informed.  —  Real-world: A common L2 failure mode is holding a ticket past the point of progress; mature teams reward timely, well-documented escalation."
  },
  {
    "id": "stef-appsupport-030",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A user reports the internal wiki is 'a little slow' for them only. Your monitoring shows the service healthy and no other reports. According to 'don't escalate prematurely,' what should you do first?",
    "options": [
      "Gather more information (their network, browser, reproduce it, check scope) before deciding whether escalation is even warranted",
      "Immediately declare a P1 and open an incident bridge",
      "Page L3 and the incident commander right away",
      "Escalate hierarchically to your manager for visibility"
    ],
    "correctIndex": 0,
    "explanation": "Premature escalation wastes specialist time on something that may be local to one user. Confirm scope and reproduce before escalating; a single-user slowness with a healthy service is not yet a major incident.  —  Real-world: Escalating every minor single-user report erodes trust with L3; L2 is expected to triage and confirm impact first."
  },
  {
    "id": "stef-appsupport-031",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "During an active outage, how should stakeholder communication typically be handled?",
    "options": [
      "Send one email only after the incident is fully resolved",
      "Provide regular, time-boxed status updates at an agreed cadence, even when there is no new fix yet",
      "Only respond if a stakeholder asks directly",
      "Let each engineer message stakeholders individually with their own view"
    ],
    "correctIndex": 1,
    "explanation": "Stakeholders need predictable updates on a set cadence (e.g., every 30 minutes), including 'still investigating, next update at X.' Centralizing comms prevents conflicting messages.  —  Real-world: On major incidents a dedicated comms lead or the commander sends scheduled updates so the business is not left guessing."
  },
  {
    "id": "stef-appsupport-032",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "What is the main purpose of an incident bridge (a conference call/channel) during a major incident?",
    "options": [
      "To create a permanent record that replaces the ticket",
      "To let users join and watch engineers work",
      "To assign blame for the outage while it is ongoing",
      "To bring the right responders together in real time to coordinate diagnosis and resolution under the incident commander"
    ],
    "correctIndex": 3,
    "explanation": "The bridge is the live coordination point where responders share findings, the commander directs actions, and decisions are made quickly. Root-cause/blame discussions belong in the post-incident review.  —  Real-world: On a P1 bridge, L2 reports what has been ruled out, L3 drives the fix, and the commander keeps the call on track and stakeholders informed."
  },
  {
    "id": "stef-appsupport-033",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Three P1s hit at once: (A) checkout is fully down for all customers, (B) an internal admin dashboard is down for the support team, (C) one VIP user cannot log in. With limited responders, how should you prioritize?",
    "options": [
      "By business impact: tackle checkout (A) first as it affects all customers and revenue, then the others",
      "Whichever was reported first, strictly in order",
      "The VIP (C) first because they are important",
      "Split attention equally across all three at the same time"
    ],
    "correctIndex": 0,
    "explanation": "When several P1s run in parallel, prioritize by true business impact and urgency, not arrival order or individual status. A full customer-facing revenue outage outranks an internal tool or a single user.  —  Real-world: Handling parallel P1s well means triaging by impact and, if needed, escalating hierarchically to get more responders rather than thinning everyone across all incidents."
  },
  {
    "id": "stef-appsupport-034",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Midway through a P1 you realize the team needs vendor emergency support and approval to spend on it, plus more engineers pulled off other work. Which type of escalation does this call for?",
    "options": [
      "Functional escalation to L3",
      "Hierarchical escalation to management for authority, resources, and decisions",
      "No escalation; keep working with who you have",
      "Escalation to the end users for a decision"
    ],
    "correctIndex": 1,
    "explanation": "Engaging a vendor under emergency terms, approving spend, and reallocating people are management decisions. That is hierarchical escalation, distinct from getting more technical depth via L3.  —  Real-world: An incident commander frequently escalates hierarchically to a duty manager to unlock vendor contracts or pull in extra staff during a severe outage."
  },
  {
    "id": "stef-appsupport-035",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "You have escalated an incident to L3, but you remain the assigned L2 owner. What is your continuing responsibility?",
    "options": [
      "Nothing further; ownership transferred entirely to L3",
      "Close the ticket since L3 now has it",
      "Re-run all your earlier steps again in parallel with L3",
      "Stay engaged: track progress, relay updates to stakeholders/customer, and provide any extra info L3 needs"
    ],
    "correctIndex": 3,
    "explanation": "Functional escalation passes the technical work to L3 but L2 often retains ownership of communication and coordination. You keep the customer informed and feed L3 information rather than going silent.  —  Real-world: Customers experience a black hole when L2 escalates and stops responding; good L2 owners shepherd the ticket and updates until resolution."
  },
  {
    "id": "stef-appsupport-036",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A change was deployed last night, and this morning users report a feature is broken. ITIL-wise, how should the broken-feature report and the deployment be handled?",
    "options": [
      "Log the broken feature as an incident (restore service) and link it to the change; consider rollback per the change's back-out plan",
      "Treat the broken feature as a new service request",
      "Reclassify the change as an incident and delete the change record",
      "Ignore it because a change cannot cause an incident"
    ],
    "correctIndex": 0,
    "explanation": "The outage is an incident to be resolved fast, while the change record explains the likely cause and provides a back-out plan. Linking them aids root-cause and shows change-related impact.  —  Real-world: Post-deploy breakages are common; L2 raises the incident, references the change ID, and triggers the documented rollback if restoring service quickly is the priority."
  },
  {
    "id": "stef-appsupport-037",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "On a P1 bridge, L3 has been quiet for 20 minutes 'still investigating,' the agreed stakeholder update is now overdue, and a senior leader joins asking pointed technical questions directly to the engineers. As the incident commander, what is the best move?",
    "options": [
      "Let the leader interrogate the engineers so they get answers fastest",
      "Mute the bridge and stop all updates until there is a fix",
      "Politely take the leader's questions yourself, send the overdue stakeholder update with 'still investigating, next update in 15 min,' and ask L3 for a brief status without derailing their work",
      "Hand the commander role to the senior leader on the spot"
    ],
    "correctIndex": 2,
    "explanation": "The commander shields responders from interruptions, keeps the comms cadence even without a fix, and gathers concise status. Letting leadership directly grill engineers stalls the fix and fragments communication.  —  Real-world: Protecting responders and maintaining update cadence under executive pressure is a defining incident-commander skill during long P1 bridges."
  },
  {
    "id": "stef-appsupport-038",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "You are about to escalate a P1 to L3. To avoid both premature escalation and sitting on it, which combination best justifies escalating NOW?",
    "options": [
      "You just opened the ticket and have not looked at anything yet, but it sounds scary",
      "Only that the customer is angry and demanding a senior person",
      "Only that 30 minutes have passed, regardless of what you have tried",
      "You confirmed broad impact and urgency, ruled out the causes within your scope, exhausted the runbook, and the fix requires skills/access you do not have"
    ],
    "correctIndex": 3,
    "explanation": "Good escalation timing combines confirmed impact, completed in-scope triage, and a genuine need for specialized skills or access. Neither raw elapsed time nor an unstarted investigation nor anger alone is sufficient justification.  —  Real-world: L2 engineers are judged on escalating at the right moment with evidence, not on reflexively bouncing tickets up or clinging to them too long."
  },
  {
    "id": "stef-appsupport-039",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "Two parallel P1s share one likely root cause (a shared authentication service), and you suspect a recent change to it. With one incident commander, what is the most effective coordination approach?",
    "options": [
      "Run two fully separate bridges and forbid the teams from talking",
      "Pick one incident to work and ignore the other until the first is closed",
      "Manage them as linked incidents under one bridge/commander, focus investigation on the shared auth service and its recent change, and update stakeholders for both together",
      "Escalate both to different vendors simultaneously without coordinating findings"
    ],
    "correctIndex": 2,
    "explanation": "When parallel P1s likely share a cause, consolidating coordination prevents duplicated effort and conflicting actions; investigating the common dependency (and its recent change) can resolve both at once.  —  Real-world: A single auth-service regression often manifests as several simultaneous P1s; linking them under one commander speeds diagnosis and keeps comms consistent."
  },
  {
    "id": "stef-appsupport-040",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "An L3 engineer rejects your handoff saying it is 'not actionable.' Reviewing it, which omission most likely caused that, and how do you fix the handoff?",
    "options": [
      "You included the ticket ID; remove it to keep things short",
      "You described impact, so the problem must be that you were too detailed",
      "You attached logs, so the fix is to delete them and just describe the error verbally",
      "You listed symptoms but omitted the steps already taken, their results, and supporting logs/timestamps, so add those plus confirmed scope/impact"
    ],
    "correctIndex": 3,
    "explanation": "A handoff without 'what was tried and what happened' plus evidence forces L3 to restart triage, which is why it reads as not actionable. Adding steps-taken, results, logs/timestamps, and scope makes it immediately usable.  —  Real-world: The single most common reason L3 bounces an L2 handoff is missing 'steps already taken' and logs, turning escalation into a frustrating round-trip during an outage."
  },
  {
    "id": "stef-appsupport-041",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "In ITIL terms, what is the key difference between an SLA and an OLA?",
    "options": [
      "An SLA is an agreement with the customer/business, while an OLA is an internal agreement between teams within the same organization",
      "An SLA is internal between IT teams, while an OLA is the legal contract signed with the customer",
      "An SLA covers only response times, while an OLA covers only resolution times",
      "An SLA applies to hardware, while an OLA applies to software"
    ],
    "correctIndex": 0,
    "explanation": "An SLA (Service Level Agreement) is between the service provider and the customer/business, whereas an OLA (Operational Level Agreement) is an internal agreement between supporting teams that underpins the SLA.  —  Real-world: On an L2 desk you commit to a 4-hour SLA with the client, but rely on an OLA with the DBA team to investigate database issues within 1 hour so the overall SLA is met."
  },
  {
    "id": "stef-appsupport-042",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "A vendor provides authentication services to your application under a formal commercial agreement. What type of agreement governs your relationship with that external vendor?",
    "options": [
      "An Operational Level Agreement (OLA)",
      "A Service Level Agreement (SLA)",
      "An underpinning contract (UC)",
      "A blameless postmortem charter"
    ],
    "correctIndex": 2,
    "explanation": "An underpinning contract is a formal agreement with an external third-party supplier that supports the targets promised in the SLA, whereas OLAs are strictly internal.  —  Real-world: When a third-party SSO provider is down, the underpinning contract defines their committed restore time, which you must factor into your own customer-facing SLA commitments."
  },
  {
    "id": "stef-appsupport-043",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is the difference between a 'response time' target and a 'resolution time' target in an SLA?",
    "options": [
      "Response time is how long the fix takes; resolution time is how long the customer waits on hold",
      "Response time is how quickly the ticket is first acknowledged/worked; resolution time is how quickly the issue is fully fixed",
      "They are two names for the same SLA metric",
      "Response time applies to email only; resolution time applies to phone only"
    ],
    "correctIndex": 1,
    "explanation": "Response time measures how fast support first acknowledges or begins working a ticket, while resolution time measures how long until the incident is fully resolved.  —  Real-world: A P2 ticket might carry a 30-minute response SLA but a 4-hour resolution SLA, so you must acknowledge quickly even if the full fix takes longer."
  },
  {
    "id": "stef-appsupport-044",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Which of the following best describes a 'workaround' in incident and problem management?",
    "options": [
      "A permanent code change that eliminates the underlying defect",
      "A formal request to extend the SLA deadline",
      "The document that records the root cause for auditors",
      "A temporary means of restoring service that reduces or removes impact without fixing the underlying cause"
    ],
    "correctIndex": 3,
    "explanation": "A workaround restores service or reduces impact temporarily without addressing the root cause, buying time until a permanent fix is delivered.  —  Real-world: When a report fails to generate, restarting the reporting service is a workaround that restores service, even though the memory leak causing it still needs a permanent fix."
  },
  {
    "id": "stef-appsupport-045",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is a 'known error' in ITIL problem management?",
    "options": [
      "Any incident that has breached its SLA",
      "A problem that has a documented root cause and/or a workaround",
      "An error message the user typed incorrectly",
      "A change that was rejected by the CAB"
    ],
    "correctIndex": 1,
    "explanation": "A known error is a problem for which the root cause and/or a workaround has been identified and documented, typically recorded in a Known Error Database (KEDB).  —  Real-world: When five users hit the same export failure, you check the KEDB, find it logged as a known error with a documented workaround, and resolve their tickets in minutes."
  },
  {
    "id": "stef-appsupport-046",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "What is the primary purpose of a blameless post-incident review (postmortem)?",
    "options": [
      "To identify which individual caused the outage so they can be disciplined",
      "To calculate the financial penalty owed to the customer for the SLA breach",
      "To close the incident ticket as quickly as possible",
      "To understand what happened and produce action items that prevent recurrence, without assigning personal blame"
    ],
    "correctIndex": 3,
    "explanation": "A blameless postmortem focuses on systemic causes and concrete prevention action items rather than punishing individuals, which encourages honest disclosure and real learning.  —  Real-world: After a major outage, an L2 engineer can describe exactly what command was run without fear of blame, so the review captures the real sequence and produces guardrails to stop it happening again."
  },
  {
    "id": "stef-appsupport-047",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A P2 incident has a 4-hour resolution SLA. At the 2.5-hour mark you realize the fix requires a database change you cannot make and that the DBA team is your only path forward. What is the most appropriate action?",
    "options": [
      "Wait until the 4-hour mark passes, then log the breach and reassign to the DBA team",
      "Proactively escalate to the DBA team now and notify your incident manager that a breach is at risk, before the deadline passes",
      "Close the ticket as 'cannot resolve' to stop the SLA clock",
      "Quietly attempt the database change yourself despite lacking the permissions and skills"
    ],
    "correctIndex": 1,
    "explanation": "Proactive escalation before a breach is the correct response: engage the team that can act and alert management while there is still time to avoid or mitigate the breach.  —  Real-world: Waiting passively until an SLA breaches is a common L2 mistake; escalating at the 2.5-hour mark gives the DBA team a chance to resolve within target or at least minimize the overrun."
  },
  {
    "id": "stef-appsupport-048",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A user reports: 'The app is slow every afternoon around 2 PM.' Investigation shows CPU spikes to 100% at 2 PM daily because a heavy batch report job runs then. Which statement correctly distinguishes the symptom from the root cause?",
    "options": [
      "Symptom: the 100% CPU spike; Root cause: the app feels slow to the user",
      "Both the slowness and the CPU spike are root causes",
      "Symptom: the app is slow at 2 PM; Root cause: a heavy batch report job consuming all CPU at 2 PM",
      "Symptom: the batch job; Root cause: the user's perception"
    ],
    "correctIndex": 2,
    "explanation": "The user-visible slowness is the symptom; the underlying batch job saturating the CPU is the root cause that, if addressed (e.g., rescheduling or throttling it), removes the symptom.  —  Real-world: L2 engineers must trace from the reported symptom (slowness) to the actual cause (resource-hungry job) rather than just restarting the app each afternoon."
  },
  {
    "id": "stef-appsupport-049",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "When does the SLA clock typically PAUSE on an incident ticket?",
    "options": [
      "While the support engineer is actively investigating the issue",
      "Whenever the engineer goes on a lunch break",
      "The SLA clock never pauses once the ticket is opened",
      "When the ticket status is set to 'Pending Customer' / awaiting customer information, or awaiting a third party, per the SLA terms"
    ],
    "correctIndex": 3,
    "explanation": "Most SLAs pause (stop the clock) when the ticket is genuinely waiting on the customer or an external third party, since that delay is outside the provider's control; the clock resumes when the provider can act again.  —  Real-world: If you ask a user for a screenshot and set the ticket to 'Pending Customer,' the SLA clock pauses, but it must reflect reality, not be misused to dodge a breach while you actually still owe work."
  },
  {
    "id": "stef-appsupport-050",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "An incident is at risk of breaching its resolution SLA in 20 minutes. The fastest way to restore service is a temporary workaround, but the permanent fix will take two more days. What is the best immediate course of action?",
    "options": [
      "Apply the workaround now to restore service and minimize the SLA impact, then raise a problem record to track the permanent fix",
      "Hold off on the workaround and deliver only the permanent fix, accepting the breach",
      "Mark the incident resolved without doing anything because a fix is planned",
      "Escalate to the customer and ask them to extend the SLA before doing any work"
    ],
    "correctIndex": 0,
    "explanation": "Restoring service quickly with a workaround addresses the immediate impact and the SLA, while a linked problem record ensures the permanent fix is not forgotten.  —  Real-world: Incident management prioritizes restoring service fast (workaround), while problem management owns the slower permanent fix; conflating the two is a frequent L2 error."
  },
  {
    "id": "stef-appsupport-051",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Users cannot log in. You apply the 5 Whys: (1) Why can't they log in? Login service returns errors. (2) Why? It can't reach the database. (3) Why? Connection pool is exhausted. (4) Why? Connections are not being released. (5) Why? A recent code change removed a 'close connection' call. Which item is the ROOT CAUSE?",
    "options": [
      "Users cannot log in",
      "The login service returns errors",
      "The connection pool is exhausted",
      "A recent code change removed the 'close connection' call, leaking connections"
    ],
    "correctIndex": 3,
    "explanation": "The 5 Whys drills past symptoms (login failures, pool exhaustion) to the deepest actionable cause: the code change that stopped releasing connections, which is what must be fixed to prevent recurrence.  —  Real-world: An L2 engineer using 5 Whys avoids the trap of 'fixing' by just restarting the service (which clears the pool temporarily) instead of identifying the leaking code as the true cause."
  },
  {
    "id": "stef-appsupport-052",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Which technique organizes the possible causes of a problem into categories such as People, Process, Technology, and Environment to support brainstorming during root cause analysis?",
    "options": [
      "Ishikawa (fishbone) diagram",
      "Gantt chart",
      "SLA burndown chart",
      "Pareto front"
    ],
    "correctIndex": 0,
    "explanation": "The Ishikawa (fishbone/cause-and-effect) diagram groups potential causes into categories branching off the main problem, helping teams brainstorm systematically rather than fixating on one theory.  —  Real-world: During a problem review for recurring outages, an L2 team uses a fishbone diagram to ensure they consider process and people factors, not just the obvious technical ones."
  },
  {
    "id": "stef-appsupport-053",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A customer disputes an SLA breach, claiming the ticket was resolved within target. The ticket shows it sat in 'Pending Customer' for 3 hours while awaiting their approval. How should this period normally be treated?",
    "options": [
      "It counts fully against your resolution SLA because the ticket was still open",
      "It doubles the SLA penalty because the ticket was idle",
      "The 3 hours of 'Pending Customer' time is typically excluded from the SLA clock, so it should not count as provider delay",
      "It must be logged as a separate incident with its own SLA"
    ],
    "correctIndex": 2,
    "explanation": "Time spent legitimately awaiting the customer is excluded from the SLA clock, since the delay was on the customer's side, not the provider's.  —  Real-world: Accurate use of 'Pending Customer' status protects both sides: it stops the clock fairly and provides an audit trail when a customer challenges a breach claim."
  },
  {
    "id": "stef-appsupport-054",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Which scenario is the clearest example of treating a SYMPTOM rather than the ROOT CAUSE?",
    "options": [
      "Identifying and patching a memory leak in the service code",
      "Setting up a scheduled restart of a service every night to mask a memory leak that keeps recurring",
      "Rescheduling a batch job that was saturating the database",
      "Adding the leaking connection close call back into the code"
    ],
    "correctIndex": 1,
    "explanation": "A nightly restart hides the recurring memory leak (the symptom keeps coming back) without fixing the underlying defect, which is symptom management, not root cause resolution.  —  Real-world: Scheduled restarts are a legitimate temporary workaround, but if treated as the permanent solution they leave the real bug in place and the problem will resurface under load."
  },
  {
    "id": "stef-appsupport-055",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Which set of outputs should a good blameless post-incident review produce?",
    "options": [
      "A documented timeline, identified contributing causes, and concrete, owned action items focused on prevention",
      "A list of employees to reprimand and a revised org chart",
      "Only the financial cost of the outage",
      "A single root cause with no follow-up tasks"
    ],
    "correctIndex": 0,
    "explanation": "An effective postmortem yields a clear timeline, the contributing/root causes, and specific prevention action items each with an owner and due date, so the same failure is less likely to recur.  —  Real-world: Without owned action items, postmortems become paperwork; L2 teams track each item to closure (e.g., add monitoring, fix the bug, update the runbook) to drive real improvement."
  },
  {
    "id": "stef-appsupport-056",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Three separate incidents this month were all caused by the same nightly job timing out, and each was closed with a restart. What is the most appropriate process action for an L2 engineer to take?",
    "options": [
      "Keep closing each incident individually with a restart, since the restart works",
      "Raise a problem record to investigate and permanently fix the underlying cause of the recurring incidents",
      "Increase the SLA resolution target so future restarts are not breaches",
      "Reassign all future related tickets to the customer"
    ],
    "correctIndex": 1,
    "explanation": "Repeated incidents from a single underlying cause are the trigger to open a problem record, which drives root cause analysis and a permanent fix rather than endless reactive restarts.  —  Real-world: Problem management exists precisely for this pattern: an L2 engineer who spots the repeat and raises a problem record stops the team from firefighting the same issue indefinitely."
  },
  {
    "id": "stef-appsupport-057",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "Why is 'timeline analysis' valuable when investigating a major incident's root cause?",
    "options": [
      "It guarantees the SLA clock is paused during the investigation",
      "It replaces the need for any monitoring or logging",
      "It reconstructs the exact sequence of events and changes to reveal correlation, triggers, and where things first went wrong",
      "It is only useful for billing the customer accurately"
    ],
    "correctIndex": 2,
    "explanation": "Building a precise timeline of deployments, alerts, and actions helps correlate cause and effect, often exposing a change or trigger that immediately preceded the failure.  —  Real-world: Mapping that an outage began two minutes after a config push lets the L2 team focus the investigation on that change rather than chasing unrelated theories."
  },
  {
    "id": "stef-appsupport-058",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "An L2 engineer marks a ticket 'Pending Customer' to stop the SLA clock, even though the team is actually still waiting on an internal infrastructure fix and the customer has nothing to provide. Why is this a problem beyond a single ticket?",
    "options": [
      "It is harmless because the SLA clock behaves identically either way",
      "It automatically escalates the ticket to the customer's executives",
      "It converts the incident into an underpinning contract",
      "It corrupts SLA reporting and hides a real internal/OLA failure, leading to wrong decisions and eroded trust, even if the individual ticket looks 'green'"
    ],
    "correctIndex": 3,
    "explanation": "Misusing 'Pending Customer' to game the clock falsifies metrics, masks an internal OLA breach that needs attention, and damages credibility when the truth surfaces in audits or postmortems.  —  Real-world: Status gaming makes dashboards look healthy while the real bottleneck (an internal team) goes unaddressed, which is exactly the kind of systemic issue a blameless postmortem aims to catch and correct."
  },
  {
    "id": "stef-appsupport-059",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "During RCA you find that a single deployment triggered the outage. Applying the 5 Whys further: the bad deployment went out because it skipped automated testing, which was skipped because the pipeline allowed manual override without approval. Which conclusion best reflects correct root cause thinking?",
    "options": [
      "The root cause is systemic: the pipeline permits unreviewed manual overrides that bypass testing, so a process/guardrail change is needed",
      "The root cause is the individual engineer who clicked deploy, so retraining them resolves it",
      "The root cause is the outage itself, which is now over",
      "There is no root cause because the deployment eventually succeeded"
    ],
    "correctIndex": 0,
    "explanation": "Mature RCA points to the systemic gap (a pipeline that allows untested, unapproved overrides) rather than blaming the individual, and the fix is a process/guardrail change such as mandatory approvals.  —  Real-world: A blameless review reframes 'who deployed it' into 'why did the system allow an untested deploy,' producing a preventive control instead of a scapegoat."
  },
  {
    "id": "stef-appsupport-060",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "A customer-facing SLA promises 99.9% monthly availability. Your monitoring shows a third-party payment gateway, governed by an underpinning contract, was the cause of most downtime this month. What is the most accurate way to interpret accountability?",
    "options": [
      "Because a third party caused it, your team has no responsibility and the SLA simply does not apply",
      "The customer must renegotiate directly with the payment gateway vendor",
      "You remain accountable to the customer for the SLA, but the underpinning contract should hold the vendor to terms that make your SLA achievable; weak UC terms are your risk to manage",
      "The downtime should be reclassified as 'Pending Customer' so it does not count"
    ],
    "correctIndex": 2,
    "explanation": "The provider still owns the customer SLA; underpinning contracts must be strong enough to support it, and a gap between UC terms and the SLA is a risk the provider has to manage proactively.  —  Real-world: If a vendor's underpinning contract only guarantees 99% but you promised the customer 99.9%, your team carries the exposure, so L2/service management must monitor vendor performance and escalate breaches under the contract."
  },
  {
    "id": "stef-appsupport-061",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "A user reports the application is completely unreachable, showing a browser timeout. As the L2 on first response, what should you check FIRST to confirm scope?",
    "options": [
      "Whether the application responds at all from your own session and from a monitoring/health endpoint",
      "The exact version of the user's browser and operating system",
      "Whether the user has cleared their browser cache recently",
      "The user's individual account permissions in the admin console"
    ],
    "correctIndex": 0,
    "explanation": "Before deep-diving into one user's environment, confirm whether the outage is global or isolated by hitting the app and its health endpoint yourself. This immediately distinguishes a total outage from a single-user connectivity issue.  —  Real-world: On a major incident bridge, the first question asked is always 'is it down for everyone or just the reporter?' because that determines severity and who gets paged."
  },
  {
    "id": "stef-appsupport-062",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "The application is down for all users. Monitoring shows the web tier is up and returning HTTP 503 from every node. What is the MOST likely cause to investigate first?",
    "options": [
      "Each user's local DNS resolver is misconfigured simultaneously",
      "A shared backend dependency (database, auth, or upstream service) is unhealthy and the web tier is failing readiness/health checks",
      "The corporate firewall is blocking outbound traffic for the whole company",
      "The TLS certificate on every client machine expired at the same moment"
    ],
    "correctIndex": 1,
    "explanation": "A uniform 503 across all healthy web nodes points to a shared downstream dependency failing, since the web tier itself is serving responses but cannot fulfill requests. Client-side causes cannot produce identical server-generated 503s.  —  Real-world: A classic outage pattern is the app pool staying up while a saturated or down database makes every request return 503, sending responders straight to the data tier."
  },
  {
    "id": "stef-appsupport-063",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "An application went down approximately 10 minutes ago. You have access to the change/deployment calendar. What is the single most valuable correlation step?",
    "options": [
      "Restart all application servers immediately to clear the fault",
      "Ask every affected user to submit a separate ticket for tracking",
      "Check whether a deployment, config change, or infrastructure change occurred in the window just before the outage began",
      "Open a vendor support case before gathering any internal evidence"
    ],
    "correctIndex": 2,
    "explanation": "Most production outages correlate tightly with a recent change. Aligning the outage start time against the change calendar is the fastest path to a probable cause and a rollback decision.  —  Real-world: Incident retrospectives repeatedly show that 'what changed in the last hour?' resolves a large share of outages faster than any log spelunking."
  },
  {
    "id": "stef-appsupport-064",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "A deployment 15 minutes ago is strongly correlated with a full outage. The release has no documented backout and the team is debating a forward-fix. As L2, what is the correct recommendation under an active Sev-1?",
    "options": [
      "Wait for the developers to write and test a forward-fix, however long that takes",
      "Take no action and continue collecting logs until root cause is fully proven",
      "Attempt random configuration changes in production to see what helps",
      "Recommend rolling back to the last known-good release to restore service, then investigate root cause afterward"
    ],
    "correctIndex": 3,
    "explanation": "During an active Sev-1, restoring service takes priority over root cause; rolling back to the last known-good version is the fastest reliable recovery when a change is the suspected trigger. Root cause analysis continues once users are restored.  —  Real-world: Mature incident processes mandate 'mitigate first, diagnose later' — rollback is preferred over forward-fix during outages because it has a predictable outcome."
  },
  {
    "id": "stef-appsupport-065",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Multiple users across different regions report they cannot log in, while already-authenticated sessions keep working. What dependency should you check FIRST?",
    "options": [
      "The CSS styling of the login page",
      "Each user's saved password in their personal password manager",
      "The health and reachability of the authentication provider / identity service (SSO, LDAP, OAuth)",
      "The application's marketing landing page uptime"
    ],
    "correctIndex": 2,
    "explanation": "Login fails while existing sessions persist is the signature of an auth provider problem, since token issuance is broken but already-issued tokens remain valid. Check the identity service health immediately.  —  Real-world: When SSO or an OAuth provider has an outage, logged-in users notice nothing while everyone trying to authenticate is locked out — a frequent and confusing L2 ticket pattern."
  },
  {
    "id": "stef-appsupport-066",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "A single user reports they cannot log in, but you and other users log in fine. What is the most appropriate FIRST action?",
    "options": [
      "Verify the specific error message the user sees and confirm their account status (locked, expired, disabled) and exact username",
      "Declare a major incident and page the on-call engineer",
      "Roll back the most recent application deployment",
      "Restart the authentication server for all users"
    ],
    "correctIndex": 0,
    "explanation": "When the issue is isolated to one user while others succeed, it is almost certainly account- or credential-specific. Gathering the exact error and checking account state scopes it correctly without overreacting.  —  Real-world: Single-user login tickets are usually a locked account, expired password, or typo'd username — escalating these as incidents wastes responder time."
  },
  {
    "id": "stef-appsupport-067",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Users report that login succeeds but they are immediately bounced back to the login page in a loop. Across tiers, which correlation is most diagnostic?",
    "options": [
      "Checking the disk space on the user's local workstation",
      "Correlating auth logs (successful token issue) with app/session logs showing the session is rejected or not persisted",
      "Reviewing the color contrast settings of the login button",
      "Counting how many browser tabs the user has open"
    ],
    "correctIndex": 1,
    "explanation": "A login loop where credentials are accepted but the session does not stick means authentication succeeds while session validation or cookie/token handling fails downstream. Correlating auth-tier success with app-tier session rejection isolates the break.  —  Real-world: Redirect loops often trace to a clock skew, cookie domain/SameSite misconfig, or session store outage — visible only by reading auth and app logs together."
  },
  {
    "id": "stef-appsupport-068",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "After an SSO certificate rotation last night, all federated users get 'authentication failed' but local fallback accounts still work. What is the most likely root cause and correct handoff?",
    "options": [
      "The application database is corrupted; restore from backup immediately",
      "Users forgot their passwords overnight; trigger a mass password reset",
      "The web servers are out of memory; add more nodes to the pool",
      "The new SSO signing certificate / metadata was not updated on the relying party (or has a trust mismatch); hand off to the identity/SSO team with the cert details and timestamps"
    ],
    "correctIndex": 3,
    "explanation": "Federated login breaking right after a certificate rotation while local accounts work points squarely at an SSO trust/metadata mismatch. This belongs with the identity team, supplied with the rotation timestamp and certificate details.  —  Real-world: SAML/OIDC certificate rotations that miss the relying-party side are a recurring cause of mass federated-login failures the morning after a maintenance window."
  },
  {
    "id": "stef-appsupport-069",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Users report a feature is intermittently failing with 'request timed out.' The feature calls a third-party upstream API. What should you check FIRST?",
    "options": [
      "Reinstall the application on each affected user's machine",
      "Rewrite the feature's source code to be more efficient",
      "The latency, error rate, and status page of the upstream API plus your app's outbound call timing in the logs",
      "The font rendering of the error dialog box"
    ],
    "correctIndex": 2,
    "explanation": "Timeouts on a feature that depends on an upstream API point first to that dependency's health and response times. Check the upstream status/latency and your own outbound-call logs before assuming an internal fault.  —  Real-world: Slow third-party payment, geocoding, or auth APIs routinely surface as intermittent timeouts; confirming upstream latency quickly redirects effort to the right owner."
  },
  {
    "id": "stef-appsupport-070",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "When gathering information about an intermittent API timeout from a user, which detail is MOST useful for reproduction and correlation?",
    "options": [
      "The exact timestamps of failures, the action being performed, and any request/correlation ID shown in the error",
      "The user's favorite browser theme",
      "How long the user has worked at the company",
      "The brand of the user's computer mouse"
    ],
    "correctIndex": 0,
    "explanation": "Precise timestamps plus the action and a correlation/request ID let you find the exact transactions in the logs and align them with upstream metrics. This is the backbone of reproducing and tracing an intermittent issue.  —  Real-world: A correlation ID handed over by the user can turn an hour of log searching into a single targeted query across tiers."
  },
  {
    "id": "stef-appsupport-071",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "An upstream API's latency has climbed and your application is now exhausting its connection/thread pool, making the whole app slow even on unrelated pages. What is this pattern and the best immediate L2 mitigation?",
    "options": [
      "It is a client-side caching bug; instruct users to hard-refresh",
      "It is resource exhaustion from a slow dependency; reduce the timeout on the upstream call and/or enable a circuit breaker so threads are released instead of piling up",
      "It is a font-loading delay; disable web fonts globally",
      "It is a DNS issue on the user side; have users flush their DNS cache"
    ],
    "correctIndex": 1,
    "explanation": "A slow dependency holding connections causes thread/connection pool exhaustion that degrades the entire app. Tightening the upstream timeout or tripping a circuit breaker frees resources so unrelated requests recover.  —  Real-world: Cascading failures from one slow downstream call are a textbook outage mode; circuit breakers and aggressive timeouts are the standard containment used in production."
  },
  {
    "id": "stef-appsupport-072",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "You confirm an upstream third-party API is returning HTTP 500s and its public status page shows a partial outage. Your application's own code and infrastructure are healthy. What is the correct next step?",
    "options": [
      "Roll back your last internal deployment even though it is unrelated",
      "Spend hours debugging your own application code line by line",
      "Tell affected users the problem is permanent and close the ticket",
      "Document the upstream outage, communicate impact and the dependency status to stakeholders, and track the vendor's resolution while applying any available fallback"
    ],
    "correctIndex": 3,
    "explanation": "When the fault is confirmed external and your stack is healthy, the L2 job shifts to clear communication, impact tracking, and using any fallback rather than changing your own healthy system. The vendor owns the fix.  —  Real-world: During a known cloud-provider or SaaS outage, L2's value is accurate stakeholder updates and dependency tracking, not churning the in-house codebase."
  },
  {
    "id": "stef-appsupport-073",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "A user reports that data they expect (a recent order) is 'missing' from their dashboard. Before assuming data loss, what should you verify FIRST?",
    "options": [
      "Immediately restore the production database from last night's backup",
      "Tell the user the data was permanently deleted",
      "Whether the record actually exists in the source database and whether the user is looking at the correct account, filters, or environment",
      "Reboot every server in the cluster"
    ],
    "correctIndex": 2,
    "explanation": "'Missing data' is far more often a display, filter, permission, or wrong-account issue than true data loss. Confirming the record exists at the source and that the user's view/filters are correct prevents drastic and unnecessary recovery actions.  —  Real-world: Most 'my data disappeared' tickets resolve as an active filter, a different tenant/environment, or a permission scope — not actual deletion."
  },
  {
    "id": "stef-appsupport-074",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "Newly created records appear for some users but not others, and the data exists in the primary database. What is the MOST likely cause to investigate?",
    "options": [
      "A read replica is lagging or a cache is stale, so some users read outdated data while the primary is correct",
      "The users who cannot see data have broken keyboards",
      "The application's logo image failed to load",
      "The data center lost power but everything still runs"
    ],
    "correctIndex": 0,
    "explanation": "When the primary holds the record but only some users see it, suspect replication lag on a read replica or a stale cache serving old results. This explains the inconsistency without any actual data loss.  —  Real-world: Read-replica lag and cache staleness are common reasons users on different nodes see different data right after a write, especially under heavy load."
  },
  {
    "id": "stef-appsupport-075",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "An overnight batch/ETL job failed and downstream reports are now missing a whole day of records, though the operational database is intact. What is the best correlation and action sequence?",
    "options": [
      "Restore the operational database, which is already healthy, from backup",
      "Check the ETL/job logs for the failure, confirm the load step did not complete, then coordinate a controlled re-run or backfill for the affected window",
      "Ask users to refresh their browsers to make yesterday's records reappear",
      "Roll back the front-end web application to a previous version"
    ],
    "correctIndex": 1,
    "explanation": "Missing data in reports while the source system is intact points to a broken data pipeline, not the database. Confirming the failed load and arranging a targeted re-run/backfill restores the reporting data correctly.  —  Real-world: Failed nightly ETL loads are a leading cause of 'the report is missing yesterday's data' tickets; the fix is a scoped backfill, not touching the healthy OLTP store."
  },
  {
    "id": "stef-appsupport-076",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "A user insists a specific record is gone. You confirm it is absent from the database, and audit logs show a DELETE on that record tied to a recent feature deployment. What is the correct escalation?",
    "options": [
      "Silently recreate the record by hand and close the ticket without notes",
      "Blame the user for deleting it and take no further action",
      "Ignore it because one record is not worth investigating",
      "Hand off to L3/development with the audit evidence and deployment correlation, since a code change may be erroneously deleting data, and flag potential wider impact"
    ],
    "correctIndex": 3,
    "explanation": "Audit-confirmed deletion correlated with a deployment suggests a defect that may be destroying data for many records, which is beyond L2 remediation. Escalate to L3/dev with evidence and raise the possibility of broader impact.  —  Real-world: A buggy migration or feature that deletes rows can cause silent, spreading data loss; L2's role is to catch the pattern early and escalate with the audit trail."
  },
  {
    "id": "stef-appsupport-077",
    "topic": "stef-appsupport",
    "difficulty": "easy",
    "prompt": "Users report the application is 'slow' but still working. As L2, what is the best FIRST step to make the report actionable?",
    "options": [
      "Assume it is the user's internet and close the ticket",
      "Add more servers to the cluster before measuring anything",
      "Quantify it: which pages/actions are slow, how slow (seconds), since when, and for how many users/regions",
      "Restart the database immediately during business hours"
    ],
    "correctIndex": 2,
    "explanation": "'Slow' is subjective and untriageable until quantified. Pinning down which actions, the magnitude, the onset time, and the scope turns a vague complaint into something you can correlate with metrics and changes.  —  Real-world: Performance tickets stall without numbers; 'the export takes 40s since 9am for everyone in EU' is actionable, 'it feels slow' is not."
  },
  {
    "id": "stef-appsupport-078",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "The application has become progressively slower over several hours with no deployment. Memory usage on the app servers is steadily climbing and garbage-collection pauses are increasing. What is the most likely cause?",
    "options": [
      "A memory leak or unbounded resource growth in the application process",
      "Users typing too quickly into forms",
      "The company logo being too high-resolution",
      "Daylight saving time changing the clock"
    ],
    "correctIndex": 0,
    "explanation": "Gradual slowdown with continuously rising memory and lengthening GC pauses is the classic signature of a memory leak or unbounded growth. A restart may give temporary relief while the leak is fixed.  —  Real-world: Slow creep in latency that resets after a restart, with climbing heap usage, is the everyday fingerprint of a memory leak in production app servers."
  },
  {
    "id": "stef-appsupport-079",
    "topic": "stef-appsupport",
    "difficulty": "medium",
    "prompt": "One specific report page is very slow while the rest of the app is fast. Database CPU spikes only when that page loads. Across tiers, what is the most likely cause to confirm?",
    "options": [
      "The user's monitor refresh rate is too low",
      "An expensive or unindexed database query (or a missing index causing a full table scan) behind that specific page",
      "The favicon is loading from a slow CDN",
      "The application title bar text is too long"
    ],
    "correctIndex": 1,
    "explanation": "Slowness isolated to one page that drives a DB CPU spike points to a costly query, often from a missing index causing full table scans. Confirm via the slow-query log or query plan for that page's statement.  —  Real-world: A single heavy report query lacking an index is a frequent cause of localized slowness and DB CPU spikes that L2 spots by correlating the slow page with the slow-query log."
  },
  {
    "id": "stef-appsupport-080",
    "topic": "stef-appsupport",
    "difficulty": "hard",
    "prompt": "Under peak load the app is slow and you observe the database connection pool is maxed out with many connections stuck in a waiting/idle-in-transaction state. After confirming no recent deployment, what is the correct analysis and handoff?",
    "options": [
      "Tell users to buy faster computers and close the incident",
      "Delete user data to reduce the table sizes immediately",
      "Disable all logging so the servers have less work to do",
      "Connections are not being released (pool exhaustion / long-held transactions); apply immediate mitigation if available and escalate to L3/dev with pool metrics and the offending query/transaction evidence"
    ],
    "correctIndex": 3,
    "explanation": "A maxed pool with connections stuck in-transaction means connections are leaking or transactions are held too long, starving other requests. L2 mitigates if possible and escalates to L3 with the pool and transaction evidence for a code/config fix.  —  Real-world: Connection-pool exhaustion from unclosed transactions is a common high-load failure; identifying the stuck transactions and handing them to dev is the realistic L2 outcome."
  }
];
