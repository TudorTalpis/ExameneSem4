import type { Question } from '../types/question';

export const stefMessagingQuestions: Question[] = [
  {
    "id": "stef-messaging-001",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "In message-queue terminology, which component is responsible for publishing messages onto the messaging system?",
    "options": [
      "The producer",
      "The broker",
      "The consumer",
      "The queue"
    ],
    "correctIndex": 0,
    "explanation": "The producer (publisher) is the application that creates and sends messages. The broker stores and routes them, the consumer reads them, and the queue is the buffer that holds them in between.  —  Real-world: When an order service emits an 'OrderPlaced' event, that order service is acting as the producer in the messaging architecture."
  },
  {
    "id": "stef-messaging-002",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "What is the primary role of a message broker such as RabbitMQ?",
    "options": [
      "To compile and deploy the producer's application code",
      "To permanently archive every message in a relational database",
      "To receive messages and route/store them until a consumer retrieves them",
      "To replace the need for any consumer applications"
    ],
    "correctIndex": 2,
    "explanation": "A broker accepts messages from producers and is responsible for routing and buffering them in queues until consumers are ready to process them. It is middleware, not a database or a build tool.  —  Real-world: Support engineers treat RabbitMQ as the central broker that sits between microservices, so an outage of the broker can stall many integrations at once."
  },
  {
    "id": "stef-messaging-003",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "Why do teams commonly use asynchronous messaging to decouple two services instead of a direct synchronous API call?",
    "options": [
      "It guarantees the message is delivered in under one millisecond",
      "It removes the need to ever monitor either service",
      "It forces both services to be online at the exact same moment",
      "The producer can keep working even if the consumer is temporarily slow or down, because the queue buffers the work"
    ],
    "correctIndex": 3,
    "explanation": "Decoupling via a queue means the producer does not wait for the consumer; the broker holds messages so a slow or offline consumer does not block or crash the producer. This improves resilience and absorbs load spikes.  —  Real-world: If the email-sending service goes down for maintenance, orders still flow into the queue and are processed when it returns, instead of failing the checkout."
  },
  {
    "id": "stef-messaging-004",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "In AMQP/RabbitMQ, where does a producer actually send a message?",
    "options": [
      "To an exchange, which then routes it to one or more queues",
      "Directly to a consumer's TCP socket",
      "Straight into the dead letter queue by default",
      "To the management UI for manual forwarding"
    ],
    "correctIndex": 0,
    "explanation": "In AMQP, producers publish to an exchange, not directly to a queue. The exchange uses bindings and routing keys to decide which queue(s) receive the message.  —  Real-world: A frequent support gotcha is a producer publishing to an exchange that has no binding, so messages are silently dropped even though the publish 'succeeds'."
  },
  {
    "id": "stef-messaging-005",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "A 'fanout' exchange in RabbitMQ routes messages how?",
    "options": [
      "Only to the single queue whose name matches the routing key",
      "To queues whose binding pattern matches the routing key using wildcards",
      "To all queues bound to it, ignoring the routing key entirely",
      "To a random queue chosen for load balancing"
    ],
    "correctIndex": 2,
    "explanation": "A fanout exchange broadcasts every message to all bound queues and disregards the routing key. This is the classic publish/subscribe pattern.  —  Real-world: A fanout exchange is used when one event, such as 'PriceUpdated', must reach several independent consumers like caching, search indexing, and audit logging simultaneously."
  },
  {
    "id": "stef-messaging-006",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "What does a 'direct' exchange use to decide which queue receives a message?",
    "options": [
      "The size of the message payload",
      "A round-robin counter across all queues",
      "The timestamp at which the message was published",
      "An exact match between the message's routing key and the queue's binding key"
    ],
    "correctIndex": 3,
    "explanation": "A direct exchange delivers a message to the queues whose binding key exactly equals the message's routing key. It is the simplest keyed routing model in AMQP.  —  Real-world: Routing log messages by severity, such as binding key 'error' versus 'info', is a textbook use of a direct exchange."
  },
  {
    "id": "stef-messaging-007",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "What is a message acknowledgement (ack) in RabbitMQ used for?",
    "options": [
      "To tell the producer the broker is full",
      "To duplicate the message to a backup queue",
      "To increase the message's priority",
      "To signal that a consumer has successfully processed a message so the broker can remove it from the queue"
    ],
    "correctIndex": 3,
    "explanation": "An ack confirms successful processing, allowing the broker to delete the message. Until the broker receives an ack (in manual-ack mode), it considers the message unacknowledged and will redeliver it if the consumer disconnects.  —  Real-world: An L2 engineer investigating 'unacked' messages climbing in the management UI usually finds a consumer that processes work but forgot to send the ack."
  },
  {
    "id": "stef-messaging-008",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "For a message to survive a RabbitMQ broker restart, which conditions must generally all be met?",
    "options": [
      "The consumer must use auto-ack mode only",
      "The exchange must be of type fanout",
      "The queue must be durable AND the message must be published as persistent",
      "The prefetch count must be set to 1"
    ],
    "correctIndex": 2,
    "explanation": "Durability requires both a durable queue and persistent (delivery_mode 2) messages; a durable queue holding non-persistent messages still loses them on restart. Both pieces are needed for the message to be written to disk.  —  Real-world: A common production incident is losing in-flight messages after a broker reboot because the queue was durable but the publisher never marked the messages persistent."
  },
  {
    "id": "stef-messaging-009",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "What does consumer 'prefetch' (basic.qos / prefetch count) control?",
    "options": [
      "How many messages the broker keeps on disk",
      "The number of exchanges a queue can bind to",
      "The maximum number of unacknowledged messages the broker will deliver to a consumer at once",
      "The TTL before a message is dead-lettered"
    ],
    "correctIndex": 2,
    "explanation": "Prefetch limits how many messages a consumer can hold unacknowledged simultaneously. A low value spreads load evenly; a very high or unlimited value lets one consumer hog the backlog.  —  Real-world: Setting prefetch=1 is a standard fix when one fast consumer grabs thousands of messages while other consumers sit idle, hurting load balancing."
  },
  {
    "id": "stef-messaging-010",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "Queue depth on a RabbitMQ queue has been steadily climbing for the last hour while publish rates look normal. What is the MOST likely cause?",
    "options": [
      "Consumers are down, too few, or processing slower than messages arrive",
      "The exchange type was changed from direct to topic",
      "The queue was declared as durable",
      "The routing key contains a wildcard"
    ],
    "correctIndex": 0,
    "explanation": "Queue depth grows when the consume rate falls below the publish rate, which happens when consumers crash, are scaled too low, or are stuck/slow. Durability and exchange type do not by themselves cause a backlog.  —  Real-world: The first thing an L2 engineer checks on a backing-up queue is the consumer count and consumer ack rate in the management UI to see whether anything is actually draining the queue."
  },
  {
    "id": "stef-messaging-011",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "A queue shows 50,000 ready messages but the management UI reports 0 consumers. What does this most directly indicate?",
    "options": [
      "No consumer application is currently connected and subscribed to drain the queue",
      "The broker has run out of disk and is corrupt",
      "The messages have all expired via TTL",
      "The exchange is misconfigured as fanout"
    ],
    "correctIndex": 0,
    "explanation": "Zero consumers means nothing is subscribed to pull messages, so they accumulate as 'ready'. The fix is to confirm the consumer service is running, connected, and subscribed to the correct queue.  —  Real-world: Seeing '0 consumers' next to a large ready count usually points to a crashed worker pod or a consumer that lost its connection and failed to reconnect."
  },
  {
    "id": "stef-messaging-012",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "A consumer is connected and shows a high number of 'unacknowledged' messages that is not decreasing, while 'ready' keeps growing. What is the most likely problem?",
    "options": [
      "The exchange is dropping messages before they reach the queue",
      "The consumer is fetching messages but is stuck/slow and not sending acks, so the broker stops delivering more once prefetch is exhausted",
      "The queue is not durable",
      "The producer is publishing with the wrong content type"
    ],
    "correctIndex": 1,
    "explanation": "Unacked messages that never clear indicate the consumer received them but is blocked, deadlocked, or slow in processing, so it never acks. Once the prefetch window is full of unacked messages, the broker delivers no more and the ready count rises.  —  Real-world: This pattern frequently traces back to a consumer thread hung on a slow downstream API or database call, holding messages unacked for minutes."
  },
  {
    "id": "stef-messaging-013",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "What is a Dead Letter Queue (DLQ) primarily used for?",
    "options": [
      "Storing the highest-priority messages for faster delivery",
      "Caching messages to improve throughput",
      "Holding messages that could not be delivered or processed successfully so they can be inspected later",
      "Replicating messages to a second data center"
    ],
    "correctIndex": 2,
    "explanation": "A DLQ captures messages that failed normal processing so they are not lost and can be examined or replayed. It acts as a safety net and an investigation point rather than a performance or replication feature.  —  Real-world: Support engineers routinely open the DLQ first when users report 'some transactions silently disappeared' to find the failed messages and their failure reason."
  },
  {
    "id": "stef-messaging-014",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "Which of the following is NOT a typical reason a message gets routed to a Dead Letter Queue in RabbitMQ?",
    "options": [
      "The message was rejected or nacked with requeue set to false",
      "The message's TTL expired before it was consumed",
      "The queue reached its configured max-length limit",
      "The consumer successfully acknowledged the message"
    ],
    "correctIndex": 3,
    "explanation": "Messages are dead-lettered on negative acknowledgement (reject/nack without requeue), TTL expiry, or queue length overflow. A successful ack is the normal path and removes the message; it does not send it to the DLQ.  —  Real-world: Knowing the three dead-letter triggers lets an L2 engineer quickly classify why messages are piling up in the DLQ rather than guessing."
  },
  {
    "id": "stef-messaging-015",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "Users report that messages keep landing in the DLQ within milliseconds of being published, every time. The payloads look malformed. What is the most likely root cause and correct first action?",
    "options": [
      "The broker disk is full; restart the broker immediately",
      "The queue is not durable; redeclare it as durable",
      "The prefetch count is too high; lower it to 1",
      "The consumer keeps rejecting/nacking the bad messages because they fail validation or parsing; inspect a DLQ message to confirm the failure reason"
    ],
    "correctIndex": 3,
    "explanation": "Immediate, consistent dead-lettering of malformed payloads points to the consumer nacking messages it cannot process. The right first step is to inspect a dead-lettered message (its body and x-death header) to confirm the failure cause before deciding to fix the producer or replay.  —  Real-world: An upstream producer that changed its JSON schema commonly triggers a flood of validation failures that immediately dead-letter, and the DLQ message headers reveal the exact error."
  },
  {
    "id": "stef-messaging-016",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "After fixing the underlying bug, how does a support engineer typically get the messages currently sitting in a DLQ processed again?",
    "options": [
      "Inspect the messages, then replay/re-publish them back to the original queue or exchange (shovel, requeue, or a replay tool)",
      "Delete the DLQ so the messages are automatically resent",
      "Increase the prefetch count on the main queue",
      "Restart the producer so it regenerates the messages"
    ],
    "correctIndex": 0,
    "explanation": "Once the defect is resolved, dead-lettered messages are inspected and then moved back to the original queue or exchange for reprocessing, often using a shovel/replay mechanism. Deleting the DLQ would discard the data, and restarting the producer does not recover already-failed messages.  —  Real-world: Teams often keep a controlled 'replay from DLQ' runbook so reprocessed messages are not lost and are not blindly looped back while still broken."
  },
  {
    "id": "stef-messaging-017",
    "topic": "stef-messaging",
    "difficulty": "hard",
    "prompt": "A single message fails processing, is requeued, fails again, and this repeats endlessly, stalling the consumer and blocking newer messages behind it. What is this called and what is the standard remedy?",
    "options": [
      "A durable message; mark it non-persistent",
      "A fanout loop; switch the exchange to direct",
      "An idempotent message; enable auto-ack",
      "A poison message; cap retries and route it to a DLQ after N failed attempts instead of infinitely requeuing"
    ],
    "correctIndex": 3,
    "explanation": "A message that always fails and is endlessly redelivered is a poison message, which can block the queue and burn CPU. The standard fix is a retry limit (max delivery count) that dead-letters the message after a set number of attempts so processing of other messages continues.  —  Real-world: Without a retry cap, one bad message can pin a worker in a tight failure loop and stall an entire payment queue, so a delivery-count-to-DLQ policy is a common production safeguard."
  },
  {
    "id": "stef-messaging-018",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "When a consumer nacks (or rejects) a message with requeue=true on a transient failure, what is the immediate effect?",
    "options": [
      "The message is permanently deleted",
      "The message is put back on the queue to be redelivered, which can cause a tight retry loop if the failure is permanent",
      "The message is sent straight to the producer",
      "The broker pauses all other queues"
    ],
    "correctIndex": 1,
    "explanation": "Nacking with requeue=true returns the message to the queue for another delivery attempt, which is useful for transient errors but dangerous for permanent ones because it can loop forever. Distinguishing transient from permanent failures is key to choosing requeue versus dead-letter.  —  Real-world: Blindly requeuing on every exception is a frequent cause of CPU-spinning consumers, so engineers add backoff or a retry ceiling."
  },
  {
    "id": "stef-messaging-019",
    "topic": "stef-messaging",
    "difficulty": "hard",
    "prompt": "Why does at-least-once delivery in RabbitMQ make duplicate message processing possible?",
    "options": [
      "Because the broker intentionally publishes every message twice",
      "Because durable queues always store two copies of each message",
      "Because if a consumer processes a message but disconnects before its ack reaches the broker, the broker redelivers the message",
      "Because topic exchanges duplicate messages across all bindings"
    ],
    "correctIndex": 2,
    "explanation": "Under at-least-once semantics, a message whose ack is lost (consumer crash or network blip after processing) is redelivered, so the same work can run twice. This is an inherent trade-off of reliable delivery without exactly-once guarantees.  —  Real-world: An L2 engineer explaining 'why did the customer get charged twice' often points to a redelivery after a lost ack rather than a true producer duplicate."
  },
  {
    "id": "stef-messaging-020",
    "topic": "stef-messaging",
    "difficulty": "hard",
    "prompt": "A consumer occasionally processes the same message twice, causing duplicate database records. Which concept directly addresses this, and how is it typically implemented?",
    "options": [
      "Durability; by declaring the queue durable",
      "Prefetch; by raising the prefetch count",
      "Fanout routing; by broadcasting to more queues",
      "Idempotency; by designing the consumer so processing the same message more than once has the same end result, e.g. via a unique message/business key or dedup check"
    ],
    "correctIndex": 3,
    "explanation": "Because at-least-once delivery can redeliver messages, the consumer must be idempotent so duplicates do not cause side effects, commonly enforced with an idempotency key, upsert, or a processed-message table. Durability and prefetch do not prevent duplicate side effects.  —  Real-world: Payment and order systems store a unique idempotency key per request so a redelivered message updates the existing record instead of creating a second charge."
  },
  {
    "id": "stef-messaging-021",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "Which two metrics are the most useful starting point for monitoring the health of a RabbitMQ workload?",
    "options": [
      "Exchange name length and binding count",
      "Queue depth (number of ready/unacked messages) and consumer count",
      "Broker hostname and port number",
      "Routing key string and content encoding"
    ],
    "correctIndex": 1,
    "explanation": "Queue depth tells you whether work is piling up, and consumer count tells you whether anything is draining it; together they reveal most backlog and stalled-consumer problems. The other options are static configuration details, not health signals.  —  Real-world: Alerts are commonly configured on rising queue depth and on consumer count dropping to zero, since those catch the majority of messaging incidents early."
  },
  {
    "id": "stef-messaging-022",
    "topic": "stef-messaging",
    "difficulty": "hard",
    "prompt": "On a topic exchange, a queue is bound with the routing pattern 'order.*.eu'. Which published routing key will be delivered to that queue?",
    "options": [
      "order.created.us",
      "order.eu",
      "order.created.eu",
      "order.created.high.eu"
    ],
    "correctIndex": 2,
    "explanation": "In a topic binding, '*' matches exactly one word between dots, so 'order.*.eu' matches 'order.created.eu'. 'order.created.us' ends in the wrong word, 'order.eu' has too few words, and 'order.created.high.eu' has an extra word that '*' cannot cover.  —  Real-world: Misunderstanding the difference between '*' (one word) and '#' (zero or more words) is a common reason support engineers find that messages 'never arrive' at a topic-bound queue."
  },
  {
    "id": "stef-messaging-023",
    "topic": "stef-messaging",
    "difficulty": "easy",
    "prompt": "In MuleSoft, what is a 'flow'?",
    "options": [
      "A physical server that hosts the Mule runtime",
      "A database table used to store integration logs",
      "An ordered sequence of processing steps that handles a message/event from a source through to a response",
      "The license tier of the Anypoint Platform"
    ],
    "correctIndex": 2,
    "explanation": "A Mule flow is the core building block: an ordered series of components (source, processors, connectors) that receive and process an event. It is logic, not hardware or licensing.  —  Real-world: When a user says 'the integration isn't firing', an L2 engineer checks whether the relevant Mule flow is deployed and started in Runtime Manager."
  },
  {
    "id": "stef-messaging-024",
    "topic": "stef-messaging",
    "difficulty": "medium",
    "prompt": "A MuleSoft flow appears 'stuck' and stops processing new messages, while the downstream REST API it calls is timing out. At a support level, what is the most likely explanation?",
    "options": [
      "The flow is waiting/blocked on the slow or unresponsive downstream connector call, so it cannot accept new work",
      "The flow was renamed, which always halts processing",
      "API-led connectivity automatically disables flows at night",
      "The connector type was changed from HTTP to a database connector"
    ],
    "correctIndex": 0,
    "explanation": "A stuck flow whose downstream dependency is timing out is usually blocked waiting on that connector, exhausting threads or connections so new events back up. The first checks are downstream health, timeout settings, and the flow's thread/connection pool.  —  Real-world: L2 engineers frequently correlate a stalled Mule flow with a slow backend system, then confirm via Anypoint Monitoring whether requests are piling up behind the failing call."
  },
  {
    "id": "stef-messaging-025",
    "topic": "stef-messaging",
    "difficulty": "hard",
    "prompt": "In MuleSoft's API-led connectivity model, what is the correct ordering of the three API layers from edge (consumer-facing) to backend (systems of record)?",
    "options": [
      "System API, Process API, Experience API",
      "Experience API, Process API, System API",
      "Process API, Experience API, System API",
      "Experience API, System API, Process API"
    ],
    "correctIndex": 1,
    "explanation": "API-led connectivity layers as Experience (tailored to a channel/consumer), Process (orchestration of business logic), then System (direct access to underlying systems of record). Requests flow from Experience down through Process to System.  —  Real-world: Knowing the layer where a failure occurs helps an L2 engineer route a ticket correctly, for example a malformed mobile response is likely an Experience API issue while a database connection error sits at the System API."
  }
];
