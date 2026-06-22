import type { Question } from '../types/question';

export const stefMongoQuestions: Question[] = [
  {
    "id": "stef-mongodb-001",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "In MongoDB's data model, what is the correct hierarchy from largest to smallest container?",
    "options": [
      "Collection -> Database -> Document",
      "Database -> Collection -> Document",
      "Document -> Collection -> Database",
      "Database -> Document -> Collection"
    ],
    "correctIndex": 1,
    "explanation": "A MongoDB server hosts databases; each database contains collections; each collection holds documents. This is the standard nesting from broadest to most granular.  —  Real-world: When a user reports 'I can't find my data', confirming which database and collection they are connected to is the first orientation step."
  },
  {
    "id": "stef-mongodb-002",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "A developer coming from SQL asks how MongoDB terms map to relational ones. Which mapping is correct?",
    "options": [
      "table = document, row = collection, column = field",
      "table = field, row = document, column = collection",
      "table = collection, row = document, column = field",
      "table = database, row = field, column = document"
    ],
    "correctIndex": 2,
    "explanation": "A SQL table corresponds to a MongoDB collection, a row corresponds to a document, and a column corresponds to a field within the document.  —  Real-world: Translating between SQL and MongoDB vocabulary helps when supporting teams migrating an app from a relational backend to MongoDB."
  },
  {
    "id": "stef-mongodb-003",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "Documents in MongoDB are stored in which binary-encoded format?",
    "options": [
      "BSON, a binary form of JSON with extra types like Date and ObjectId",
      "Plain UTF-8 CSV rows",
      "Protocol Buffers (Protobuf)",
      "Gzipped YAML"
    ],
    "correctIndex": 0,
    "explanation": "MongoDB stores documents as BSON (Binary JSON), a binary serialization that extends JSON with additional types such as Date and ObjectId. Users typically read and write them as JSON in the shell.  —  Real-world: Knowing the storage is BSON explains why types like ObjectId and Date exist beyond plain JSON when inspecting documents during a support call."
  },
  {
    "id": "stef-mongodb-004",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "What does the following shell command do?\n\ndb.orders.find({ status: \"shipped\" })",
    "options": [
      "Updates every order's status to 'shipped'",
      "Deletes all orders whose status is 'shipped'",
      "Creates a new collection named 'shipped'",
      "Returns orders whose status field equals 'shipped'"
    ],
    "correctIndex": 3,
    "explanation": "find() with a filter document returns all documents in the orders collection where the status field equals the string 'shipped'. It is a read operation and changes nothing.  —  Real-world: find() with an equality filter is the most common query support engineers run to reproduce what an application is seeing."
  },
  {
    "id": "stef-mongodb-005",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "Which shell command inserts a single new document into the users collection?",
    "options": [
      "db.users.insertOne({ name: \"Ana\", age: 30 })",
      "db.users.addRow({ name: \"Ana\", age: 30 })",
      "db.users.find({ name: \"Ana\", age: 30 })",
      "db.users.set({ name: \"Ana\", age: 30 })"
    ],
    "correctIndex": 0,
    "explanation": "insertOne() adds exactly one document to the collection. addRow and set are not MongoDB methods, and find only reads.  —  Real-world: Inserting a known test document is a quick way to confirm write access and connectivity to a collection."
  },
  {
    "id": "stef-mongodb-006",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "Every MongoDB document automatically gets which field, and what index exists on it by default?",
    "options": [
      "A 'rowid' field, with no automatic index",
      "An '_id' field, with a unique index created automatically",
      "A 'pk' field, indexed only if you run createIndex",
      "A 'uuid' field, with a non-unique index"
    ],
    "correctIndex": 1,
    "explanation": "MongoDB adds an _id field to every document if one is not supplied, and it maintains a unique index on _id automatically. This guarantees each document is uniquely addressable.  —  Real-world: Because the _id index always exists, queries by _id are fast even on a brand-new collection with no other indexes."
  },
  {
    "id": "stef-mongodb-007",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "What does the projection in this query accomplish?\n\ndb.customers.find({ city: \"Lisbon\" }, { name: 1, email: 1, _id: 0 })",
    "options": [
      "Returns all fields except name and email for customers in Lisbon",
      "Sorts Lisbon customers by name then email",
      "Returns only the name and email fields, excluding _id, for customers in Lisbon",
      "Returns the first customer in Lisbon and hides their _id"
    ],
    "correctIndex": 2,
    "explanation": "The second argument is a projection: name: 1 and email: 1 include those fields, and _id: 0 explicitly suppresses the _id that is otherwise returned by default.  —  Real-world: Projections reduce payload size and avoid exposing internal fields, which matters when sharing query output with a customer or in a ticket."
  },
  {
    "id": "stef-mongodb-008",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "A support engineer needs the 5 most recent orders. Which query is correct?",
    "options": [
      "db.orders.find().limit(5).sort({ createdAt: 1 })",
      "db.orders.find().top(5).sort({ createdAt: 1 })",
      "db.orders.find().sort({ createdAt: 5 })",
      "db.orders.find().sort({ createdAt: -1 }).limit(5)"
    ],
    "correctIndex": 3,
    "explanation": "Sorting by createdAt: -1 orders documents newest-first, and limit(5) then takes the top five. Sort with -1 means descending; 1 would give oldest-first.  —  Real-world: Pulling the most recent records is a routine diagnostic when investigating a customer's latest activity or failed transactions."
  },
  {
    "id": "stef-mongodb-009",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "Which command updates the email field of one matching user without overwriting the rest of the document?",
    "options": [
      "db.users.updateOne({ _id: 7 }, { email: \"new@x.com\" })",
      "db.users.updateOne({ _id: 7 }, { $set: { email: \"new@x.com\" } })",
      "db.users.updateOne({ email: \"new@x.com\" })",
      "db.users.replaceOne({ _id: 7 }, { email: \"new@x.com\" })"
    ],
    "correctIndex": 1,
    "explanation": "The $set operator changes only the listed field and leaves all other fields intact. Passing a plain document without $set (or using replaceOne) would replace the entire document.  —  Real-world: Forgetting $set is a classic mistake that wipes out every other field in a user's record, causing data-loss incidents."
  },
  {
    "id": "stef-mongodb-010",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "What does this query return?\n\ndb.products.find({ price: { $gt: 100, $lt: 500 } })",
    "options": [
      "Products priced exactly 100 or 500",
      "The 100th through 500th products",
      "Products priced greater than 100 AND less than 500",
      "Products priced greater than 100 OR less than 500"
    ],
    "correctIndex": 2,
    "explanation": "$gt and $lt in the same field document are combined with AND, so it matches prices strictly between 100 and 500 (exclusive on both ends).  —  Real-world: Range filters with $gt/$lt are common when an application or report needs items within a price or date window."
  },
  {
    "id": "stef-mongodb-011",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "A teammate wants all documents where the country field is either 'PT', 'ES', or 'FR'. Which filter is the idiomatic choice?",
    "options": [
      "{ country: { $in: [\"PT\", \"ES\", \"FR\"] } }",
      "{ country: { $all: [\"PT\", \"ES\", \"FR\"] } }",
      "{ country: { $or: [\"PT\", \"ES\", \"FR\"] } }",
      "{ country: [\"PT\", \"ES\", \"FR\"] }"
    ],
    "correctIndex": 0,
    "explanation": "$in matches a field against any value in the supplied array, which is exactly 'one of these values'. $all requires the field (an array) to contain every listed value, and $or is a top-level logical operator, not a field operator.  —  Real-world: $in mirrors SQL's IN clause and is frequently used to filter by a set of statuses, regions, or IDs."
  },
  {
    "id": "stef-mongodb-012",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "What does this filter match?\n\ndb.accounts.find({ deletedAt: { $exists: false } })",
    "options": [
      "Accounts where deletedAt is null",
      "Accounts where deletedAt equals false",
      "All accounts, because $exists is ignored on find",
      "Accounts where the deletedAt field is not present at all"
    ],
    "correctIndex": 3,
    "explanation": "$exists: false matches documents that do not contain the deletedAt field. A field set to null still exists, so it would NOT match this filter.  —  Real-world: Filtering on field presence is common in soft-delete schemes where active records simply lack a deletedAt marker."
  },
  {
    "id": "stef-mongodb-013",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "A query on a 10-million-document collection that filters by { email: \"x@y.com\" } takes 8 seconds. There is no index on email. What is the most likely cause and fix?",
    "options": [
      "The shell is rate-limited; add a sleep between queries",
      "MongoDB is scanning every document (collection scan); create an index on email with createIndex({ email: 1 })",
      "The document is too large; split it into two collections",
      "The _id index is corrupted; rebuild it"
    ],
    "correctIndex": 1,
    "explanation": "Without an index on email, MongoDB must examine every document (a COLLSCAN), which scales with collection size. Creating an index on email lets the engine jump straight to matching documents.  —  Real-world: Slow queries that lack a supporting index are one of the most common L2 escalations; explain() showing a COLLSCAN confirms it."
  },
  {
    "id": "stef-mongodb-014",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "Which statement creates an ascending index on the lastName field of the employees collection?",
    "options": [
      "db.employees.addIndex(\"lastName\")",
      "db.employees.index({ lastName: \"asc\" })",
      "db.employees.createIndex({ lastName: 1 })",
      "db.employees.ensureSorted({ lastName: 1 })"
    ],
    "correctIndex": 2,
    "explanation": "createIndex() takes a key specification document where 1 means ascending and -1 means descending. The other method names are not valid MongoDB index commands.  —  Real-world: Knowing the exact createIndex syntax lets an engineer remediate a slow-query ticket directly from the shell."
  },
  {
    "id": "stef-mongodb-015",
    "topic": "stef-mongodb",
    "difficulty": "easy",
    "prompt": "In a replica set, how are reads and writes normally distributed between members?",
    "options": [
      "Writes go to the primary; secondaries replicate the primary's data",
      "All members accept writes simultaneously",
      "Writes go to secondaries; the primary only handles reads",
      "Each member owns a different shard of the writes"
    ],
    "correctIndex": 0,
    "explanation": "A replica set has exactly one primary that accepts all writes; secondaries copy the primary's oplog to stay in sync. By default reads also go to the primary unless a different read preference is set.  —  Real-world: Understanding the single-primary model explains why a write fails when an app is accidentally pointed at a secondary."
  },
  {
    "id": "stef-mongodb-016",
    "topic": "stef-mongodb",
    "difficulty": "medium",
    "prompt": "The primary node of a replica set crashes. What does the cluster do to remain writable?",
    "options": [
      "It stops accepting writes until an admin manually promotes a node",
      "It merges all secondaries into one node",
      "It redirects writes to the _id index",
      "The remaining members hold an election and a secondary is automatically promoted to primary"
    ],
    "correctIndex": 3,
    "explanation": "When the primary becomes unavailable, the surviving members vote in an automatic election and promote an eligible secondary to primary, restoring write availability without manual intervention.  —  Real-world: Automatic failover is why an app may see a brief blip of write errors during a primary outage but recovers on its own within seconds."
  },
  {
    "id": "stef-mongodb-017",
    "topic": "stef-mongodb",
    "difficulty": "hard",
    "prompt": "An application reports occasionally reading stale data. It uses read preference secondaryPreferred against a busy replica set. What is the most likely explanation?",
    "options": [
      "The _id index is missing on the secondaries",
      "Replication lag means secondaries are behind the primary, so reads can return slightly old data",
      "secondaryPreferred forces writes to secondaries, corrupting them",
      "The query has no projection, so fields are dropped"
    ],
    "correctIndex": 1,
    "explanation": "Secondaries apply the primary's oplog asynchronously; under load they can fall behind (replication lag), so reads served by a lagging secondary may not yet reflect the newest writes.  —  Real-world: Apps that need the freshest data should read from the primary; tolerating lag is a deliberate trade-off for offloading read traffic."
  },
  {
    "id": "stef-mongodb-018",
    "topic": "stef-mongodb",
    "difficulty": "hard",
    "prompt": "A user reports the app suddenly cannot connect to MongoDB with a 'connection refused' error, while it worked yesterday. Which is the LEAST likely root cause to check first?",
    "options": [
      "The mongod process or service has stopped or crashed",
      "A firewall or security-group rule is blocking the port (e.g., 27017)",
      "The find() query is missing a projection argument",
      "The connection string host, port, or credentials are wrong"
    ],
    "correctIndex": 2,
    "explanation": "A missing projection is a query-shaping detail and has nothing to do with establishing a connection. 'Connection refused' points to the server being down, a blocked port, or bad connection details.  —  Real-world: Connectivity tickets are triaged by checking process status, network/firewall, and credentials before ever looking at query syntax."
  },
  {
    "id": "stef-mongodb-019",
    "topic": "stef-mongodb",
    "difficulty": "hard",
    "prompt": "Monitoring alerts that a MongoDB data disk is at 95% usage and writes are starting to fail. Which action is the most appropriate immediate triage step?",
    "options": [
      "Drop the _id index to free space",
      "Increase the query limit() value to reduce disk reads",
      "Switch all reads to secondaryPreferred",
      "Identify what is consuming disk (large collections, logs, oplog) and free or expand space, e.g., archiving old data or growing the volume"
    ],
    "correctIndex": 3,
    "explanation": "A full data disk blocks writes, so the fix is to reclaim or add capacity: remove or archive old data, rotate/clear oversized logs, or expand the volume. Index drops and read-preference changes do not address the space shortage.  —  Real-world: Disk-full conditions can take a node read-only or crash it; rapid triage of what is consuming space prevents an outage from spreading."
  },
  {
    "id": "stef-mongodb-020",
    "topic": "stef-mongodb",
    "difficulty": "hard",
    "prompt": "A teammate runs db.logs.insertMany([...]) with 1,000 documents and asks how it behaves if one document fails midway through (default options). What should you tell them?",
    "options": [
      "By default inserts are ordered, so it stops at the failing document and the ones before it remain inserted",
      "All 1,000 are rolled back as a single atomic transaction",
      "It silently skips the bad document and inserts all the others",
      "insertMany cannot fail; it always inserts everything"
    ],
    "correctIndex": 0,
    "explanation": "insertMany defaults to ordered: true, so it processes documents sequentially and halts on the first error, leaving earlier documents inserted and later ones not. insertMany is not a single atomic transaction by default.  —  Real-world: Knowing ordered behavior explains partial-insert situations and why setting ordered: false (best-effort) changes the outcome during bulk loads."
  }
];
