import type { Question } from '../types/question';

export const stefMonitoringQuestions: Question[] = [
  {
    "id": "stef-monitoring-001",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "Which set correctly names the three pillars of observability?",
    "options": [
      "Alerts, dashboards, runbooks",
      "Metrics, logs, traces",
      "CPU, memory, disk",
      "SLI, SLO, SLA"
    ],
    "correctIndex": 1,
    "explanation": "The three pillars of observability are metrics (numeric measurements over time), logs (discrete timestamped events), and traces (the path of a request across services).  —  Real-world: An L2 engineer pivots between these three data sources when triaging an incident: a metric flags the spike, logs reveal the error text, and a trace shows which service caused it."
  },
  {
    "id": "stef-monitoring-002",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "A counter metric in monitoring is best described as a value that:",
    "options": [
      "Can go up or down freely, like temperature",
      "Stores a distribution of observed values in buckets",
      "Holds free-text log lines",
      "Only ever increases (or resets to zero on restart)"
    ],
    "correctIndex": 3,
    "explanation": "A counter is a cumulative metric that only increases, typically resetting to zero when the process restarts. Examples include total HTTP requests served or total errors.  —  Real-world: When an L2 sees a request counter suddenly drop to zero, it usually means the service restarted, not that traffic vanished."
  },
  {
    "id": "stef-monitoring-003",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "Which of these is a classic example of a gauge metric?",
    "options": [
      "Total number of orders processed since boot",
      "Cumulative bytes sent on a network interface",
      "Total count of failed logins all-time",
      "Current number of active database connections"
    ],
    "correctIndex": 3,
    "explanation": "A gauge represents a value that can rise and fall, such as current memory usage, queue depth, or active connections at this moment.  —  Real-world: An L2 watching a connection-pool gauge climb toward its max can predict connection exhaustion before users start seeing errors."
  },
  {
    "id": "stef-monitoring-004",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "You need to report the 95th-percentile (p95) request latency for an API. Which metric type is designed to support percentile calculations?",
    "options": [
      "Counter",
      "Gauge",
      "Histogram",
      "Boolean flag"
    ],
    "correctIndex": 2,
    "explanation": "A histogram samples observations into configurable buckets, which lets the monitoring system compute quantiles such as p50, p95, and p99 latency.  —  Real-world: When a customer complains the app 'feels slow sometimes,' an L2 checks the latency histogram's p95/p99 rather than the average, since tail latency is what users actually feel."
  },
  {
    "id": "stef-monitoring-005",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "Which list correctly names Google's four golden signals?",
    "options": [
      "Latency, traffic, errors, saturation",
      "CPU, memory, disk, network",
      "Uptime, downtime, MTTR, MTBF",
      "Reads, writes, updates, deletes"
    ],
    "correctIndex": 0,
    "explanation": "The four golden signals are latency (how long requests take), traffic (demand on the system), errors (rate of failed requests), and saturation (how full the system is).  —  Real-world: An L2 opening an unfamiliar service's dashboard checks these four signals first to get a fast, vendor-neutral picture of health."
  },
  {
    "id": "stef-monitoring-006",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "The RED method recommends monitoring which three metrics for a request-driven service?",
    "options": [
      "Reads, errors, deletes",
      "Rate, errors, duration",
      "Resource, efficiency, demand",
      "Requests, endpoints, data"
    ],
    "correctIndex": 1,
    "explanation": "RED stands for Rate (requests per second), Errors (failed requests), and Duration (latency of those requests), and is well suited to user-facing, request-based services.  —  Real-world: For a stateless web API, an L2 can confirm health quickly using RED: traffic is normal, error rate is low, and latency is within bounds."
  },
  {
    "id": "stef-monitoring-007",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "The USE method is primarily intended for analyzing what?",
    "options": [
      "Resources such as CPU, memory, and disks",
      "User experience surveys",
      "Source-code quality",
      "Customer support tickets"
    ],
    "correctIndex": 0,
    "explanation": "USE stands for Utilization, Saturation, and Errors and is applied per resource (CPU, memory, disk, network) to find hardware or capacity bottlenecks.  —  Real-world: When a host is misbehaving, an L2 walks each resource with USE: is the CPU utilized, is its run-queue saturated, are there device errors?"
  },
  {
    "id": "stef-monitoring-008",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "A service's dashboard shows normal traffic and near-zero errors, but p99 latency has tripled and the thread pool's queue is full. Which golden signal is this primarily pointing to?",
    "options": [
      "Traffic",
      "Errors",
      "Saturation",
      "Availability"
    ],
    "correctIndex": 2,
    "explanation": "A full queue with rising latency but no error spike is a classic saturation symptom: the system is at or beyond capacity and work is backing up before failing.  —  Real-world: An L2 seeing this pattern would escalate for more capacity or investigate a downstream bottleneck rather than hunting for a code bug, since nothing is erroring yet."
  },
  {
    "id": "stef-monitoring-009",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "What does an SLI (Service Level Indicator) represent?",
    "options": [
      "A legal contract with financial penalties",
      "A measured value of service behavior, such as the percentage of successful requests",
      "An internal target you aim to meet",
      "The maximum number of users allowed"
    ],
    "correctIndex": 1,
    "explanation": "An SLI is a quantitative measurement of some aspect of service quality, for example the ratio of successful HTTP responses to total responses, or request latency under a threshold.  —  Real-world: During a degradation, an L2 reads the SLI (e.g., success rate dropped to 97%) to quantify customer impact instead of describing it vaguely."
  },
  {
    "id": "stef-monitoring-010",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Which statement correctly distinguishes an SLO from an SLA?",
    "options": [
      "An SLO is the external contract with penalties; an SLA is the internal target",
      "They are two names for the same thing",
      "An SLO is an internal reliability target; an SLA is an external agreement, often with consequences if breached",
      "An SLO measures latency only; an SLA measures errors only"
    ],
    "correctIndex": 2,
    "explanation": "An SLO is the internal objective (e.g., 99.9% success), while an SLA is the formal agreement with customers that usually carries financial or contractual consequences if missed. SLOs are typically stricter than SLAs.  —  Real-world: An L2 escalates faster when an SLO is at risk, because breaching the internal SLO is the early warning before the contractual SLA is violated and credits are owed."
  },
  {
    "id": "stef-monitoring-011",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "A service has a 99.9% monthly availability SLO. The error budget for the month is roughly 43 minutes of allowed downtime. By mid-month an incident has already consumed about 40 of those minutes. What is the most appropriate operational response?",
    "options": [
      "Ignore it; the SLA has not been breached yet",
      "Immediately issue SLA credits to all customers",
      "Loosen the SLO to 99% so the budget resets",
      "Treat remaining budget as nearly exhausted: freeze risky changes and prioritize reliability work"
    ],
    "correctIndex": 3,
    "explanation": "The error budget is the allowed unreliability (100% minus the SLO). When most of it is spent, the right move is to slow down risky deploys and focus on stability to avoid blowing the SLO entirely.  —  Real-world: An L2 reporting that the error budget is nearly gone gives the team a data-driven reason to pause a planned release rather than risk an SLO breach."
  },
  {
    "id": "stef-monitoring-012",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Approximately how much total downtime per month does a '99.9%' (three nines) availability target allow?",
    "options": [
      "About 43 minutes",
      "About 4.3 seconds",
      "About 7.2 hours",
      "About 3 days"
    ],
    "correctIndex": 0,
    "explanation": "99.9% availability permits roughly 0.1% of a ~30-day month as downtime, which is about 43 minutes per month (or ~8.7 hours per year).  —  Real-world: Knowing this lets an L2 immediately gauge how serious a 30-minute outage is against a three-nines commitment when filling out the incident report."
  },
  {
    "id": "stef-monitoring-013",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "A system promises '99.99%' (four nines) availability. Roughly how much downtime per month does that allow?",
    "options": [
      "About 43 minutes",
      "About 26 seconds",
      "About 2 hours",
      "About 4.3 minutes"
    ],
    "correctIndex": 3,
    "explanation": "Four nines (99.99%) allows about 0.01% of the month as downtime, which is roughly 4.3 minutes per month (~52.6 minutes per year).  —  Real-world: With only ~4 minutes of monthly budget, an L2 supporting a four-nines service knows even a brief blip requires fast acknowledgement and escalation."
  },
  {
    "id": "stef-monitoring-014",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "In monitoring, what does a 'baseline' refer to?",
    "options": [
      "The hardcoded maximum a metric can reach",
      "The first value recorded after deployment",
      "The lowest value ever observed",
      "The normal, expected range of a metric under typical conditions"
    ],
    "correctIndex": 3,
    "explanation": "A baseline is the established pattern of normal behavior for a metric over time, accounting for typical daily and weekly cycles, against which deviations are judged.  —  Real-world: An L2 who knows the baseline can tell whether 5,000 requests/second is a healthy peak or an unusual surge worth investigating."
  },
  {
    "id": "stef-monitoring-015",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Traffic to an e-commerce site routinely peaks every day at 8 PM. Tonight's 8 PM peak looks identical to the last 30 days. How should an L2 interpret this?",
    "options": [
      "It is an anomaly because the value is high",
      "It is expected behavior consistent with the established baseline",
      "It indicates a DDoS attack in progress",
      "It means monitoring is broken"
    ],
    "correctIndex": 1,
    "explanation": "An anomaly is a deviation from the baseline. A recurring peak that matches the historical pattern is normal seasonality, not an anomaly, even though the absolute number is high.  —  Real-world: Understanding baselines stops an L2 from raising false alarms on predictable daily peaks and reserves attention for genuine deviations."
  },
  {
    "id": "stef-monitoring-016",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Which characteristic best describes a GOOD alerting threshold?",
    "options": [
      "It fires on every minor fluctuation to be safe",
      "It is set to a value the metric can never reach",
      "It is actionable and tied to user-visible impact, minimizing false positives",
      "It is copied unchanged from another unrelated service"
    ],
    "correctIndex": 2,
    "explanation": "A good threshold is meaningful and actionable: it alerts on conditions that actually affect users or require a response, while avoiding noisy false positives that cause alert fatigue.  —  Real-world: An L2 drowning in noisy CPU-spike alerts will miss the one real outage; well-tuned, impact-based thresholds keep the on-call queue trustworthy."
  },
  {
    "id": "stef-monitoring-017",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "What is the core difference between synthetic monitoring and real-user monitoring (RUM)?",
    "options": [
      "Synthetic uses scripted/simulated transactions; RUM measures actual end users' experience",
      "Synthetic measures real users; RUM uses scripted bots",
      "They both only collect server-side CPU metrics",
      "Synthetic works only for databases; RUM works only for networks"
    ],
    "correctIndex": 0,
    "explanation": "Synthetic monitoring runs scripted checks (robots) against the service on a schedule, even with no real traffic, while RUM passively captures performance data from genuine user sessions.  —  Real-world: An L2 uses synthetic checks to catch an outage at 3 AM before any customer is awake, and uses RUM to confirm what real users in a given region are actually experiencing."
  },
  {
    "id": "stef-monitoring-018",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "Synthetic checks from your monitoring node report the login page as fully healthy, yet several real users in one country report timeouts. RUM confirms elevated load times only for that region. What is the most likely explanation?",
    "options": [
      "The whole service is down globally",
      "A regional issue (e.g., CDN edge or local network) affects real users but not the synthetic probe's location",
      "RUM data is always wrong and should be ignored",
      "Synthetic monitoring measures the database directly"
    ],
    "correctIndex": 1,
    "explanation": "Synthetic probes run from fixed locations, so a problem isolated to one region or CDN edge can be invisible to them while RUM, sourced from actual users, exposes it.  —  Real-world: This gap is exactly why L2 teams pair synthetic and RUM: the disagreement points the investigation at a regional CDN or ISP issue rather than the core application."
  },
  {
    "id": "stef-monitoring-019",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "Which best describes black-box monitoring?",
    "options": [
      "Inspecting internal application metrics and code-level counters",
      "Reading the source code for bugs",
      "Observing a system from the outside as a user would, without knowledge of internals",
      "Monitoring only the database query plans"
    ],
    "correctIndex": 2,
    "explanation": "Black-box monitoring tests the system externally (e.g., 'does the URL return HTTP 200?') without insight into internal state, mirroring the user's perspective.  —  Real-world: An L2 relies on black-box health checks to answer the first triage question: from the outside, is the service even reachable and responding?"
  },
  {
    "id": "stef-monitoring-020",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "White-box monitoring is distinguished from black-box monitoring primarily because it:",
    "options": [
      "Only works on white-listed IP addresses",
      "Can only detect total outages, never degradation",
      "Is performed exclusively by external third parties",
      "Exposes internal system details like queue depth, GC pauses, and per-endpoint error rates"
    ],
    "correctIndex": 3,
    "explanation": "White-box monitoring uses internal instrumentation and metrics exposed by the application itself, enabling root-cause analysis rather than just detecting that something is wrong from outside.  —  Real-world: Once a black-box check tells an L2 the site is slow, white-box metrics like thread-pool saturation or slow queries tell them why."
  },
  {
    "id": "stef-monitoring-021",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "An L2 must explain WHY checkout is failing for users. The dashboard shows the error rate climbing. Which observability data type is best suited to identifying the exact error and failing component?",
    "options": [
      "Logs, to read the actual error messages and stack traces",
      "A high-level traffic counter",
      "An uptime percentage badge",
      "A monthly SLA report"
    ],
    "correctIndex": 0,
    "explanation": "Metrics tell you that errors are rising; logs contain the concrete error text, stack traces, and context needed to identify what is actually failing.  —  Real-world: After a metric flags the checkout error spike, an L2 drills into logs to find the specific exception (e.g., a payment-gateway timeout) to attach to the escalation."
  },
  {
    "id": "stef-monitoring-022",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "A user reports their request was slow, and you suspect it crossed several microservices. Which observability data type is purpose-built to show where time was spent across that single request's journey?",
    "options": [
      "A counter of total requests",
      "A CPU utilization gauge",
      "A distributed trace following the request span-by-span across services",
      "An availability SLA document"
    ],
    "correctIndex": 2,
    "explanation": "A distributed trace records the path of one request as spans across services, revealing which hop consumed the most time and where the latency originated.  —  Real-world: When latency is high but no single service looks broken, an L2 opens the trace to see that, for example, one downstream call alone added 800 ms."
  },
  {
    "id": "stef-monitoring-023",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "On a dashboard you see a request-rate line graph and a latency graph. The latency graph plots three lines labeled p50, p95, and p99. What do these lines represent?",
    "options": [
      "Three different servers",
      "Latency percentiles: 50%, 95%, and 99% of requests are at or below that value",
      "The number 50, 95, and 99 of errors",
      "Three days of the week"
    ],
    "correctIndex": 1,
    "explanation": "Percentile lines summarize a latency distribution: p99 = 200 ms means 99% of requests completed in 200 ms or less, exposing the slow tail that averages hide.  —  Real-world: An L2 watches p99 rather than the average because a small fraction of very slow requests (the tail) is often what generates the support tickets."
  },
  {
    "id": "stef-monitoring-024",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "When first opening an unfamiliar service dashboard during an incident, what is a sensible initial reading strategy?",
    "options": [
      "Scan the golden signals (latency, traffic, errors, saturation) and look for deviations from the baseline",
      "Start by exporting every metric to a spreadsheet",
      "Immediately restart the service",
      "Read the oldest historical data first"
    ],
    "correctIndex": 0,
    "explanation": "Reading a dashboard well means starting with the highest-signal panels (the golden signals) and comparing current values to the known baseline to spot what changed.  —  Real-world: This habit lets an L2 form a quick hypothesis under pressure instead of getting lost in dozens of low-level panels during an active incident."
  },
  {
    "id": "stef-monitoring-025",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "A dashboard shows traffic at a normal level, but the error-rate panel jumped from 0.1% to 6% in the last five minutes while latency is unchanged. Using the golden signals, what is the best immediate triage conclusion?",
    "options": [
      "Saturation: the system is overloaded by traffic",
      "Traffic: a surge of new users arrived",
      "Everything is healthy; 6% errors is acceptable",
      "Errors: a fault is causing failed requests even though volume and speed look normal"
    ],
    "correctIndex": 3,
    "explanation": "Traffic and latency are steady, so this is an errors signal: requests are failing at an elevated rate, pointing to a fault (e.g., a bad deploy or a failing dependency) rather than a capacity or demand problem.  —  Real-world: An L2 seeing a sharp error jump with flat traffic would check what changed (recent deploy, dependency health) and escalate, since a 60x error increase is clear customer impact."
  },
  {
    "id": "stef-monitoring-026",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "In standard log-level conventions, which level should be used for a recoverable, non-fatal condition that does not stop the request but may need attention later (e.g. a retry succeeded after one failure, or a deprecated API was called)?",
    "options": [
      "WARN",
      "DEBUG",
      "INFO",
      "ERROR"
    ],
    "correctIndex": 0,
    "explanation": "WARN signals something abnormal that did not break the request but is worth noticing; ERROR is reserved for failures that actually broke an operation, and DEBUG/INFO are for diagnostic and normal-flow messages.  —  Real-world: Tuning log levels so WARN captures degradations without the noise of DEBUG keeps dashboards readable during an incident."
  },
  {
    "id": "stef-monitoring-027",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "What does 'centralized logging' (log aggregation) primarily provide compared to reading log files on each individual server?",
    "options": [
      "It encrypts logs so they cannot be read by attackers",
      "It collects logs from many hosts into one searchable place so you can query across the whole system",
      "It reduces the total disk space logs consume to near zero",
      "It replaces the need for metrics and tracing entirely"
    ],
    "correctIndex": 1,
    "explanation": "Centralized logging ships logs from all hosts/services into one system (e.g. Splunk, ELK) so engineers can search and correlate across the fleet instead of SSH-ing into each box.  —  Real-world: During an outage spanning ten services, one search across the aggregator is far faster than logging into ten machines."
  },
  {
    "id": "stef-monitoring-028",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "What is a 'structured log' as opposed to a plain free-text log line?",
    "options": [
      "A log emitted as key/value fields (often JSON) so individual fields can be parsed and queried",
      "A log written only in uppercase letters",
      "A log that is compressed before being written to disk",
      "A log that contains no timestamps to save space"
    ],
    "correctIndex": 0,
    "explanation": "Structured logs encode data as discrete fields (e.g. JSON like {\"status\":500,\"host\":\"web3\"}), which lets a log platform index and filter on each field rather than relying on fragile text matching.  —  Real-world: Structured logs let you run 'count by status code' instantly, which is painful with unstructured text lines."
  },
  {
    "id": "stef-monitoring-029",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "In Splunk SPL, what does the `sourcetype` of an event describe?",
    "options": [
      "The physical disk where the event is stored",
      "The username of the engineer who ran the search",
      "The severity level of the event",
      "The format/type of the data so Splunk knows how to parse it (e.g. access_combined, syslog)"
    ],
    "correctIndex": 3,
    "explanation": "sourcetype identifies the data format (e.g. access_combined, json, syslog) and drives how Splunk extracts fields and timestamps; 'source' is the file/input path and 'index' is the storage bucket.  —  Real-world: Filtering by sourcetype=access_combined narrows a search to web access logs and excludes unrelated data."
  },
  {
    "id": "stef-monitoring-030",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "In an on-call rotation, what does 'paging' someone mean?",
    "options": [
      "Sending an urgent, attention-demanding notification (e.g. phone call/push) to the engineer currently responsible, expecting a response",
      "Archiving old log files to cold storage",
      "Splitting a large log into smaller pages for display",
      "Rotating encryption keys for the alerting system"
    ],
    "correctIndex": 0,
    "explanation": "Paging is the act of alerting the on-call engineer through a high-urgency channel that is expected to wake them up or interrupt them, as opposed to a low-priority ticket or email.  —  Real-world: A page at 3am should mean 'a human must act now', which is why only actionable alerts should be allowed to page."
  },
  {
    "id": "stef-monitoring-031",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "What best describes an 'actionable' alert versus a 'noisy' alert?",
    "options": [
      "An actionable alert fires more frequently than a noisy one",
      "An actionable alert is sent by email and a noisy alert is sent by SMS",
      "An actionable alert requires a clear human response and indicates a real problem, while a noisy alert fires without a useful action to take",
      "An actionable alert has a lower severity than a noisy alert"
    ],
    "correctIndex": 2,
    "explanation": "Good alerts are actionable: when one fires, the responder knows there is a genuine issue and what to do; noisy alerts fire often, demand no clear action, and erode trust in the system.  —  Real-world: Teams routinely cut noisy alerts because every false page makes responders slower to react to the real one."
  },
  {
    "id": "stef-monitoring-032",
    "topic": "stef-monitoring",
    "difficulty": "easy",
    "prompt": "What is 'alert fatigue'?",
    "options": [
      "A hardware failure in the paging server",
      "A scheduled maintenance window where alerts are paused",
      "A metric that measures CPU exhaustion on monitoring hosts",
      "Desensitization caused by too many alerts (especially noisy or false ones), leading responders to ignore or be slow to act on alerts"
    ],
    "correctIndex": 3,
    "explanation": "When responders are bombarded with alerts—many of them noise—they stop trusting and reacting promptly, so a genuine critical alert can be missed.  —  Real-world: Alert fatigue is a leading reason real incidents are caught late; reducing false positives directly improves response time."
  },
  {
    "id": "stef-monitoring-033",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "A monitoring alert keeps firing and resolving every couple of minutes because a metric is hovering right at its threshold. What is this behavior called, and what is a standard fix?",
    "options": [
      "Flapping; add hysteresis (separate trigger/clear thresholds) or a 'for' duration so the condition must persist before firing",
      "Deduplication; merge the alerts into one",
      "Sharding; split the metric across more hosts",
      "Paging; route the alert to a different team"
    ],
    "correctIndex": 0,
    "explanation": "Flapping is rapid open/close cycling when a value oscillates around a single threshold; adding a sustained-duration requirement or distinct trigger/clear thresholds (hysteresis) stops the churn.  —  Real-world: A CPU-at-80% alert that pings every minute is classic flapping; requiring 'over 80% for 5 minutes' quiets it without hiding real saturation."
  },
  {
    "id": "stef-monitoring-034",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "What is the difference between alert 'deduplication' and alert 'grouping' in an incident/paging tool?",
    "options": [
      "They are identical terms with no difference",
      "Deduplication deletes alerts permanently; grouping forwards them to email",
      "Deduplication collapses repeated identical alerts into one, while grouping bundles multiple related-but-distinct alerts into a single incident",
      "Deduplication applies only to logs and grouping applies only to metrics"
    ],
    "correctIndex": 2,
    "explanation": "Deduplication suppresses duplicate copies of the same alert so you are not paged repeatedly for one issue; grouping/correlation gathers several different alerts that stem from the same underlying problem into one incident.  —  Real-world: When a database dies, dedup stops 500 identical 'DB unreachable' pages and grouping ties the dependent service alerts into one incident."
  },
  {
    "id": "stef-monitoring-035",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "At 3am you are paged by an 'alert storm': hundreds of alerts from dozens of services fire within the same minute. What is the MOST likely explanation, and the best first triage move?",
    "options": [
      "Every service independently developed a bug at once; restart each service one by one",
      "The paging tool is broken; ignore the alerts and go back to sleep",
      "Disk space filled on the alerting server; expand its disk first",
      "A shared dependency (e.g. database, network, auth, DNS) failed, causing cascading alerts; look for the common upstream cause rather than treating each alert separately"
    ],
    "correctIndex": 3,
    "explanation": "Alert storms almost always trace back to a single shared dependency failing and cascading; the efficient move is to find the common root (the upstream service everything depends on) instead of chasing hundreds of symptoms.  —  Real-world: A DNS or primary-database outage can light up an entire dashboard in seconds; correlating to the common dependency is what ends the incident fastest."
  },
  {
    "id": "stef-monitoring-036",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Why do alert storms happen, fundamentally, in a system of interdependent services?",
    "options": [
      "Because alerts are sent over UDP which duplicates packets",
      "Because a single root failure propagates: dependent services and redundant monitors each fire their own alerts for the same underlying cause",
      "Because on-call engineers acknowledge alerts too slowly",
      "Because structured logs generate more events than unstructured logs"
    ],
    "correctIndex": 1,
    "explanation": "One root cause (a failed shared dependency) produces failures in everything downstream, and each affected component plus each overlapping monitor emits alerts, multiplying a single problem into hundreds of notifications.  —  Real-world: This is exactly why correlation/grouping exists: to collapse a storm back down to the one incident an engineer should actually work."
  },
  {
    "id": "stef-monitoring-037",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "You need a Splunk search that counts errors grouped by host over the last 24 hours from your application index. Which SPL is correct?",
    "options": [
      "index=app earliest=-24h status=ERROR | top host",
      "index=app | timechart count by ERROR span=24h",
      "index=app earliest=-24h level=ERROR | stats count by host",
      "index=app level=ERROR | fields host | sort host"
    ],
    "correctIndex": 2,
    "explanation": "`stats count by host` aggregates a count of matching ERROR events per host, and `earliest=-24h` sets the time range; `top` would limit to most-frequent values and `fields`/`sort` do not aggregate counts.  —  Real-world: Counting errors by host is a daily L2 task to spot whether a problem is one bad node or fleet-wide."
  },
  {
    "id": "stef-monitoring-038",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "In Splunk, you want to see how the error count changes over time as a time-series chart with one line per service. Which command is designed for this?",
    "options": [
      "`timechart`",
      "`stats`",
      "`top`",
      "`dedup`"
    ],
    "correctIndex": 0,
    "explanation": "`timechart` produces time-bucketed aggregations ideal for plotting trends over a time range (e.g. `timechart count by service`); `stats` aggregates without a time axis and `top` returns most-common values.  —  Real-world: A timechart that shows errors climbing right after a deploy is a classic way to tie a regression to a release."
  },
  {
    "id": "stef-monitoring-039",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "In Splunk SPL, what does the `top` command do by default?",
    "options": [
      "Returns the most common values of a field along with their counts and percentages",
      "Returns the oldest events first",
      "Truncates the search to the top of the index",
      "Sorts results alphabetically and removes duplicates"
    ],
    "correctIndex": 0,
    "explanation": "`top <field>` returns the most frequent values of that field with count and percent columns (default top 10), which is handy for quickly seeing the biggest contributors.  —  Real-world: `top status` on web logs instantly shows whether 200s dominate or whether 500s have surged into the top results."
  },
  {
    "id": "stef-monitoring-040",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "A service's latency dashboard shows p99 latency spiked sharply while p50 (median) stayed flat. What does this most likely indicate?",
    "options": [
      "Every request got slower by the same amount",
      "The dashboard is broken because p99 cannot move without p50 moving",
      "A subset of requests is much slower (a long tail) while typical requests are unaffected — e.g. a slow dependency, GC pauses, a hot shard, or a few large/expensive requests",
      "The service has fully recovered and no action is needed"
    ],
    "correctIndex": 2,
    "explanation": "p50 reflects the typical request and p99 the slow tail; a high p99 with a flat p50 means most requests are fine but a minority are hitting something slow, so you investigate tail-specific causes.  —  Real-world: Tail latency spikes often trace to a single overloaded node, lock contention, or a slow downstream call affecting only some requests."
  },
  {
    "id": "stef-monitoring-041",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "Users report the checkout service is 'slow'. Which combination of signals would BEST confirm and localize service degradation rather than a single metric?",
    "options": [
      "Only the CPU usage of one web server",
      "Only the number of log lines written per second",
      "Only whether the host responds to ping",
      "Rising latency (especially p95/p99) plus an increased error rate and a drop in successful throughput, correlated against a recent deploy or a dependency's metrics"
    ],
    "correctIndex": 3,
    "explanation": "Degradation is best seen by correlating latency, error rate, and throughput together and lining them up with changes (deploys) or downstream dependency health, rather than trusting one isolated metric.  —  Real-world: The RED method (Rate, Errors, Duration) gives a fast, reliable read on whether a service is degraded and where to look next."
  },
  {
    "id": "stef-monitoring-042",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "In distributed tracing, what is the purpose of a 'trace ID' (correlation/request ID) propagated across services?",
    "options": [
      "To encrypt the request payload between services",
      "To tie together all log lines and spans belonging to a single end-to-end request as it passes through multiple services",
      "To load-balance requests evenly across hosts",
      "To compress logs so they take less storage"
    ],
    "correctIndex": 1,
    "explanation": "A trace/correlation ID is attached to a request and carried through every service, so you can stitch together that request's logs and spans across the whole system to follow its full path.  —  Real-world: Given one slow user request, searching the trace ID in the aggregator reconstructs the entire cross-service journey to find the slow hop."
  },
  {
    "id": "stef-monitoring-043",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "A request is slow end-to-end. Using its distributed trace, the API gateway span is 2ms but a single downstream span (the payments service call) is 1,400ms. What is the correct interpretation?",
    "options": [
      "The API gateway is the bottleneck and should be scaled",
      "The trace is invalid because spans must be equal length",
      "The payments service call is the dominant contributor to latency and is the place to investigate",
      "Network DNS resolution is the bottleneck"
    ],
    "correctIndex": 2,
    "explanation": "In a trace, the span consuming the bulk of the wall-clock time is the bottleneck; here payments dominates, so investigation focuses on that service or its dependencies, not the fast gateway.  —  Real-world: Reading spans by duration is how engineers pinpoint which microservice in a chain is responsible for a slow request."
  },
  {
    "id": "stef-monitoring-044",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "You want only the most recent matching event per host in a Splunk search to see each host's latest status. Which approach is appropriate?",
    "options": [
      "`... | stats count by host`",
      "`... | top host`",
      "`... | timechart count`",
      "`... | dedup host` (which keeps the first/most-recent event per host given default time ordering)"
    ],
    "correctIndex": 3,
    "explanation": "`dedup host` removes duplicate events for each host value and, with Splunk's default reverse-time ordering, retains the most recent event per host; the other commands aggregate or chart rather than return one event each.  —  Real-world: Showing each host's latest heartbeat or status line is a common use of dedup during a triage sweep."
  },
  {
    "id": "stef-monitoring-045",
    "topic": "stef-monitoring",
    "difficulty": "medium",
    "prompt": "During an alert storm, your paging tool has grouped 200 alerts into one incident. Three of the grouped alerts are 'database primary unreachable' and the rest are 'service X cannot connect to DB', 'service Y timeout', etc. Where should you focus first?",
    "options": [
      "On service X, because it has the most alerts",
      "On the database primary, because the dependent-service alerts are downstream symptoms of that root failure",
      "On the paging tool's grouping logic",
      "On service Y's timeout configuration"
    ],
    "correctIndex": 1,
    "explanation": "The dependent-service alerts (cannot connect, timeouts) are consequences of the database being unreachable; fixing the root dependency resolves the cascade, so you triage the database first.  —  Real-world: Grouping is valuable precisely because it surfaces the root-cause alert next to its many symptom alerts, guiding you to the real fix."
  },
  {
    "id": "stef-monitoring-046",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "An alert fires for 'high error rate' but on investigation the service is healthy and the errors were a brief, expected blip from a dependency restart that auto-recovered. The alert then keeps re-firing on tiny transient blips. Which change best reduces these false positives WITHOUT hiding real outages?",
    "options": [
      "Delete the alert entirely so it never fires",
      "Lower the threshold so it fires even more readily",
      "Raise the duration window and/or require a sustained error-rate over a threshold (e.g. >5% errors for 5 minutes) so brief transient blips don't trigger paging",
      "Route the alert to email only and stop monitoring error rate"
    ],
    "correctIndex": 2,
    "explanation": "Requiring the condition to persist (a sustained rate over a longer window) filters out short self-healing blips while still catching a genuine, lasting outage; deleting or silencing the alert would blind you to real failures.  —  Real-world: Tuning 'for duration' and rate thresholds is the standard way to kill false positives while preserving detection of true incidents."
  },
  {
    "id": "stef-monitoring-047",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "Latency p99 rose steadily over a week with no deploy, while traffic grew about 30%. CPU and memory look fine, but database connection-pool wait time is climbing. What is the most likely diagnosis?",
    "options": [
      "A code regression introduced in the last deploy",
      "A DNS misconfiguration",
      "Resource saturation/contention on a bounded resource (the DB connection pool) as load grows, causing requests to queue and tail latency to rise",
      "Random noise that requires no action"
    ],
    "correctIndex": 2,
    "explanation": "Rising tail latency tracking with traffic growth, plus increasing connection-pool wait while CPU/memory are healthy, points to contention on a limited resource (pool exhaustion) where requests queue for a free connection.  —  Real-world: Connection-pool or thread-pool saturation under growth is a classic slow-burn degradation that no single host metric reveals."
  },
  {
    "id": "stef-monitoring-048",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "Two dashboards disagree during an incident: the load balancer reports 5xx error rate near 0%, but client-side and application logs show many users getting errors. Which interpretation and next step is best?",
    "options": [
      "Trust the load balancer; there is no real problem",
      "Restart the load balancer immediately",
      "Conclude the application logs are wrong because the LB is authoritative",
      "The errors may be occurring beyond what the LB measures (e.g. client timeouts, errors in 200-coded responses, or a layer the LB doesn't see); correlate trace IDs/app logs to find where failures actually happen"
    ],
    "correctIndex": 3,
    "explanation": "A signal only reflects what it measures; if the LB sees healthy responses but users fail, the failure is in a place the LB can't observe (timeouts, soft errors in 200s, a downstream hop), so you correlate request IDs and app/client logs to locate it.  —  Real-world: Picking the right signal—and recognizing a metric's blind spots—prevents declaring 'all green' while customers are actually failing."
  },
  {
    "id": "stef-monitoring-049",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "You must build a Splunk search that, over the last hour, shows the 95th-percentile response time per endpoint as a time series so you can see which endpoint's tail latency is rising. Which SPL is most appropriate?",
    "options": [
      "index=web earliest=-1h | timechart span=5m perc95(response_time) by endpoint",
      "index=web earliest=-1h | stats avg(response_time) by host",
      "index=web earliest=-1h | top endpoint",
      "index=web earliest=-1h | dedup endpoint"
    ],
    "correctIndex": 0,
    "explanation": "`timechart span=5m perc95(response_time) by endpoint` plots the p95 of response_time in time buckets split per endpoint, exactly matching a per-endpoint tail-latency trend; the others give frequencies, a non-time-series average, or a single event per endpoint.  —  Real-world: Per-endpoint p95 timecharts are how teams spot that one specific route is dragging down overall latency."
  },
  {
    "id": "stef-monitoring-050",
    "topic": "stef-monitoring",
    "difficulty": "hard",
    "prompt": "A 'disk almost full' alert pages the on-call every night at 2am and auto-resolves by 2:30am because a nightly batch job writes large temp files and then cleans them up. The disk never actually fills. What is the best way to handle this recurring false page?",
    "options": [
      "Leave it as-is so the team stays aware of disk usage",
      "Adjust the alert so the high-usage condition must persist beyond the known batch window (or raise the threshold/duration) so the expected, self-clearing spike no longer pages",
      "Permanently silence all disk alerts on that host",
      "Page a second engineer as backup each night"
    ],
    "correctIndex": 1,
    "explanation": "A predictable, self-clearing spike that never causes real impact is a false positive; tuning the alert to require sustained high usage past the batch window (or a higher threshold) stops the nightly page while still catching a genuine fill-up.  —  Real-world: Recurring 2am pages for a known batch pattern are a top driver of alert fatigue, and tuning the condition is preferable to blanket silencing."
  }
];
