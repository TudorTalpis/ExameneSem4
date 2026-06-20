import type { Question } from '../types/question';

export const stefSqlQuestions: Question[] = [
  {
    "id": "stef-sql-001",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "In `SELECT id, name FROM customers WHERE country = 'RO' ORDER BY name;`, which clause decides WHICH rows are returned (not how they are sorted)?",
    "options": [
      "WHERE country = 'RO'",
      "ORDER BY name",
      "SELECT id, name",
      "FROM customers"
    ],
    "correctIndex": 0,
    "explanation": "WHERE filters which rows qualify; ORDER BY only sorts rows that already passed the filter; SELECT picks columns and FROM picks the table.  —  Real-world: Scoping a data-pull ticket to the right customers always starts with the WHERE clause."
  },
  {
    "id": "stef-sql-002",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "A query ends with `ORDER BY created_at;` with no ASC or DESC. In what order are rows returned?",
    "options": [
      "Descending (newest first)",
      "Ascending (oldest first)",
      "Random / unspecified",
      "The physical insert order"
    ],
    "correctIndex": 1,
    "explanation": "ORDER BY defaults to ASC, so the oldest timestamp comes first. You must add DESC for newest-first.  —  Real-world: A 'the export shows oldest first' complaint is usually just a missing DESC."
  },
  {
    "id": "stef-sql-003",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "An engineer runs `UPDATE users SET status = 'active';` against production. What happens?",
    "options": [
      "Only rows with an empty status change",
      "Syntax error: UPDATE requires WHERE",
      "Every row in users is set to 'active'",
      "Only the first row changes"
    ],
    "correctIndex": 2,
    "explanation": "With no WHERE, UPDATE applies to every row in the table; MySQL allows it unless safe-updates mode is on. There is no implicit limit.  —  Real-world: The most damaging L2 mistake: a missing WHERE turns a one-row fix into a full-table overwrite, so always SELECT the target first."
  },
  {
    "id": "stef-sql-004",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "Which statement deletes ONLY the customer with id = 42?",
    "options": [
      "DELETE FROM customers;",
      "DELETE FROM customers WHERE id = 42;",
      "TRUNCATE customers WHERE id = 42;",
      "DROP FROM customers WHERE id = 42;"
    ],
    "correctIndex": 1,
    "explanation": "DELETE FROM table WHERE ... targets specific rows. The first deletes all rows, TRUNCATE empties the whole table (and takes no WHERE), and DROP is invalid here.  —  Real-world: Before any production DELETE, confirm the WHERE with `SELECT COUNT(*)` using the same condition."
  },
  {
    "id": "stef-sql-005",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does `SELECT * FROM orders ORDER BY total DESC LIMIT 5;` return?",
    "options": [
      "All orders sorted by total",
      "A random set of 5 orders",
      "The 5 orders with the lowest total",
      "The 5 orders with the highest total"
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY total DESC puts the largest totals first and LIMIT 5 keeps the first five, i.e. the top 5 by total.  —  Real-world: 'Show the 5 biggest orders today' is ORDER BY ... DESC LIMIT N."
  },
  {
    "id": "stef-sql-006",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does `SELECT DISTINCT country FROM customers;` return?",
    "options": [
      "Every customer row including duplicates",
      "Each country value once, duplicates removed",
      "Only countries that appear more than once",
      "The count of distinct countries"
    ],
    "correctIndex": 1,
    "explanation": "DISTINCT removes duplicate rows, so each country appears once. The count would need COUNT(DISTINCT country).  —  Real-world: Listing 'which countries do we have customers in' for a quick report is a DISTINCT query."
  },
  {
    "id": "stef-sql-007",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "`SELECT * FROM tickets WHERE assignee = NULL;` returns 0 rows even though many tickets are unassigned. Why?",
    "options": [
      "NULL means the column is missing",
      "The table is empty",
      "= NULL is slower but still correct",
      "Nothing equals NULL; you must use `WHERE assignee IS NULL`"
    ],
    "correctIndex": 3,
    "explanation": "Any comparison to NULL with = yields UNKNOWN (never true), so no rows match. Null tests require IS NULL / IS NOT NULL.  —  Real-world: 'My filter for blank fields returns nothing' is almost always `= NULL` instead of `IS NULL`."
  },
  {
    "id": "stef-sql-008",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which rows match `WHERE name LIKE 'A%'`?",
    "options": [
      "Names that start with A",
      "Names that end with A",
      "Names containing A anywhere",
      "Names exactly equal to the text 'A%'"
    ],
    "correctIndex": 0,
    "explanation": "% matches any sequence of characters, so 'A%' matches anything beginning with A. '%A' is ends-with and '%A%' is contains.  —  Real-world: Searching customers whose name starts with a given letter uses LIKE 'A%'."
  },
  {
    "id": "stef-sql-009",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which is equivalent to `WHERE status IN ('open','pending','hold')`?",
    "options": [
      "WHERE status = 'open','pending','hold'",
      "WHERE status = 'open' AND status = 'pending' AND status = 'hold'",
      "WHERE status = 'open' OR status = 'pending' OR status = 'hold'",
      "WHERE status LIKE 'open|pending|hold'"
    ],
    "correctIndex": 2,
    "explanation": "IN is shorthand for a series of OR equality checks. The AND version can never be true since one column cannot equal three values at once.  —  Real-world: Filtering tickets across several statuses at once is cleanest with IN."
  },
  {
    "id": "stef-sql-010",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "`SELECT * FROM products WHERE id NOT IN (SELECT product_id FROM order_items);` returns no rows, and the subquery contains some NULL product_id values. Why?",
    "options": [
      "NOT IN ignores the outer table",
      "A NULL in the NOT IN list makes the condition UNKNOWN for every row, so none match",
      "NOT IN is not valid SQL",
      "The subquery must use DISTINCT"
    ],
    "correctIndex": 1,
    "explanation": "With a NULL in the list, `id NOT IN (..., NULL)` evaluates to UNKNOWN (never true) for all rows. Use NOT EXISTS or exclude NULLs in the subquery.  —  Real-world: A classic 'anti-join returns empty' bug: one NULL in the NOT IN subquery silently kills the result, so NOT EXISTS is the safe pattern."
  },
  {
    "id": "stef-sql-011",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Of the values 100, 150, 200, 201, how many match `WHERE amount BETWEEN 100 AND 200`?",
    "options": [
      "3 — 100, 150 and 200, because BETWEEN is inclusive",
      "1 — only 150",
      "2 — only 100 and 200",
      "4 — all of them"
    ],
    "correctIndex": 0,
    "explanation": "BETWEEN includes both bounds, so 100, 150 and 200 match; 201 is outside the range.  —  Real-world: Off-by-one disputes on amount or date ranges usually trace back to forgetting BETWEEN includes both endpoints."
  },
  {
    "id": "stef-sql-012",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "What does `INSERT INTO archive_orders SELECT * FROM orders WHERE created_at < '2024-01-01';` do?",
    "options": [
      "Creates a new archive_orders table",
      "Deletes the old orders",
      "Copies the matching old orders into the existing archive_orders table",
      "Updates orders in place"
    ],
    "correctIndex": 2,
    "explanation": "INSERT ... SELECT inserts the rows the SELECT returns into an existing target table; it neither creates the table nor removes the source rows.  —  Real-world: Archiving old data is often INSERT ... SELECT into the archive table, followed by a separate, verified DELETE."
  },
  {
    "id": "stef-sql-013",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which correctly sets BOTH price and updated_at for product 7 in one statement?",
    "options": [
      "UPDATE products SET price = 9.99 AND updated_at = NOW() WHERE id = 7;",
      "UPDATE products SET price = 9.99; SET updated_at = NOW() WHERE id = 7;",
      "UPDATE products (price, updated_at) VALUES (9.99, NOW()) WHERE id = 7;",
      "UPDATE products SET price = 9.99, updated_at = NOW() WHERE id = 7;"
    ],
    "correctIndex": 3,
    "explanation": "Multiple columns in UPDATE are comma-separated in SET. Using AND would be parsed as a boolean expression assigned to price, corrupting the value.  —  Real-world: Updating a value plus its audit timestamp together is a single comma-separated SET."
  },
  {
    "id": "stef-sql-014",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A developer reports `SELECT * FROM users WHERE phone = 0742123456;` returns no rows. The phone column is VARCHAR. What's the bug?",
    "options": [
      "The value must be quoted as '0742123456'; the unquoted number is read as an integer and loses the leading zero",
      "VARCHAR columns cannot be compared with =",
      "It needs LIKE instead of =",
      "phone must be indexed before it can be queried"
    ],
    "correctIndex": 0,
    "explanation": "An unquoted 0742123456 is treated as the integer 742123456 (leading zero lost) and compared to strings, matching nothing. String literals must be quoted.  —  Real-world: 'Lookup by phone or zip returns nothing' is frequently an unquoted numeric literal dropping a leading zero against a VARCHAR column."
  },
  {
    "id": "stef-sql-015",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which query returns the single most recent order?",
    "options": [
      "SELECT * FROM orders WHERE created_at = MAX(created_at);",
      "SELECT * FROM orders ORDER BY created_at DESC LIMIT 1;",
      "SELECT MAX(*) FROM orders;",
      "SELECT * FROM orders LIMIT 1;"
    ],
    "correctIndex": 1,
    "explanation": "Sort by the timestamp descending and take one row. You cannot use an aggregate directly in WHERE without a subquery, and a bare LIMIT 1 has no defined order.  —  Real-world: 'Show me the latest record' is ORDER BY <time> DESC LIMIT 1."
  },
  {
    "id": "stef-sql-016",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "order_items has no status column. Which safely deletes order_items whose parent order is cancelled (orders.status = 'cancelled')?",
    "options": [
      "DELETE FROM order_items WHERE status = 'cancelled';",
      "DELETE FROM order_items, orders WHERE orders.status = 'cancelled';",
      "DELETE FROM order_items WHERE order_id IN (SELECT id FROM orders WHERE status = 'cancelled');",
      "DELETE order_items WHERE orders.status = 'cancelled';"
    ],
    "correctIndex": 2,
    "explanation": "The child table must reference the parent state via a subquery on the foreign key order_id. The other forms reference a non-existent column or are invalid.  —  Real-world: Deleting child rows based on a parent's state uses a subquery on the FK, verified with a SELECT first."
  },
  {
    "id": "stef-sql-017",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "Column `discount` is NULL for some rows. What does `SELECT price - discount AS net FROM items;` produce for those rows?",
    "options": [
      "net = price",
      "net = 0",
      "A division-by-zero style error",
      "net = NULL, because any arithmetic with NULL yields NULL"
    ],
    "correctIndex": 3,
    "explanation": "Arithmetic involving NULL returns NULL. To treat a missing discount as zero, use `price - COALESCE(discount, 0)` (or IFNULL).  —  Real-world: 'Net totals come out blank for some rows' is usually NULL propagating through arithmetic; wrap nullable columns in COALESCE/IFNULL."
  },
  {
    "id": "stef-sql-018",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A table has status values 'open', 'closed', and NULL. Compared with the non-open rows, what does `SELECT * FROM t WHERE status <> 'open';` return?",
    "options": [
      "The 'closed' rows but NOT the NULL rows",
      "Both the closed and the NULL rows",
      "Every row in the table",
      "Only the NULL rows"
    ],
    "correctIndex": 0,
    "explanation": "`status <> 'open'` is UNKNOWN for NULL rows, so they are excluded. To include them, add `OR status IS NULL`.  —  Real-world: 'My not-equal filter is missing the blank ones' — NULLs never satisfy <>, a frequent cause of undercounts."
  },
  {
    "id": "stef-sql-019",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "With MySQL safe-updates (sql_safe_updates) ON, `UPDATE accounts SET locked = 1 WHERE last_login < '2020-01-01';` errors out. Most likely why?",
    "options": [
      "UPDATE is fully disabled in safe mode",
      "Safe-updates blocks UPDATE/DELETE whose WHERE uses no key column and no LIMIT, to prevent mass changes",
      "The date literal format is invalid",
      "locked must be TRUE, not 1"
    ],
    "correctIndex": 1,
    "explanation": "sql_safe_updates rejects UPDATE/DELETE whose WHERE doesn't reference an indexed key (or include a LIMIT), guarding against accidental full-table writes. Targeting an indexed column or adding LIMIT resolves it.  —  Real-world: Safe-updates is a client guardrail; the fix is to target an indexed column, not to blindly disable the protection."
  },
  {
    "id": "stef-sql-020",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "An L2 engineer must correct one mistyped email on production. Which approach is safest?",
    "options": [
      "UPDATE users SET email = 'x@y.com'; then fix the rest later",
      "Remove the WHERE to be sure the statement runs",
      "First SELECT ... WHERE id = 123 to confirm the target, then UPDATE ... WHERE id = 123 inside a transaction so it can be rolled back",
      "DELETE the row and re-insert it"
    ],
    "correctIndex": 2,
    "explanation": "Confirm the exact target with a keyed SELECT, then update by that key inside a transaction so a mistake can be rolled back. The other options risk mass corruption.  —  Real-world: Production data fixes follow SELECT-to-confirm, then UPDATE-by-key inside a transaction, then COMMIT or ROLLBACK, never a blind write."
  },
  {
    "id": "stef-sql-021",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does an INNER JOIN between orders and customers return?",
    "options": [
      "Only rows where a matching customer exists for the order (and vice versa)",
      "All orders, with NULLs where no customer matches",
      "All customers, even those with no orders",
      "Every combination of orders and customers"
    ],
    "correctIndex": 0,
    "explanation": "INNER JOIN returns only rows that have a match on both sides. Keeping unmatched rows would require a LEFT/RIGHT JOIN; a cross join would give every combination.  —  Real-world: If a report 'loses' orders that have no linked customer, an INNER JOIN is silently dropping them."
  },
  {
    "id": "stef-sql-022",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "`SELECT c.name, o.id FROM customers c LEFT JOIN orders o ON o.customer_id = c.id;` returns what for a customer with no orders?",
    "options": [
      "The customer is omitted",
      "One row for the customer with o.id = NULL",
      "An error",
      "The customer repeated once per other customer"
    ],
    "correctIndex": 1,
    "explanation": "A LEFT JOIN keeps every left-side (customer) row; columns from the unmatched right side (orders) come back as NULL.  —  Real-world: Listing all customers and their order count, including those with zero orders, needs a LEFT JOIN."
  },
  {
    "id": "stef-sql-023",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What is the purpose of the ON clause in a JOIN?",
    "options": [
      "It sorts the joined result",
      "It limits how many rows return",
      "It specifies the condition that matches rows between the two tables",
      "It selects which columns to display"
    ],
    "correctIndex": 2,
    "explanation": "ON defines the matching predicate (usually a key equality) between the two tables. Sorting is ORDER BY, row limits are LIMIT, and columns are chosen in SELECT.  —  Real-world: A wrong ON condition is a top cause of 'too many' or 'too few' rows in a joined report."
  },
  {
    "id": "stef-sql-024",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "Two tables: orders has 100 rows, but 10 of them have a customer_id that exists in no customer. How many rows does `orders INNER JOIN customers ON ...` return?",
    "options": [
      "110",
      "100",
      "10",
      "90"
    ],
    "correctIndex": 3,
    "explanation": "INNER JOIN keeps only matching rows, so the 10 orphan orders are dropped, leaving 90.  —  Real-world: Orphaned foreign keys are exactly why totals shrink unexpectedly when a query uses INNER JOIN."
  },
  {
    "id": "stef-sql-025",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "`A RIGHT JOIN B` keeps which unmatched rows?",
    "options": [
      "All rows from B (the right table), with NULLs for A",
      "All rows from A (the left table)",
      "No unmatched rows",
      "Both tables' unmatched rows"
    ],
    "correctIndex": 0,
    "explanation": "RIGHT JOIN preserves every row of the right table, filling A's columns with NULL where there is no match. Preserving both sides would be a FULL OUTER JOIN.  —  Real-world: RIGHT JOIN is rarely used in practice; most engineers rewrite it as a LEFT JOIN with the tables swapped for readability."
  },
  {
    "id": "stef-sql-026",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What happens if you join two tables but forget the ON / join condition (e.g. `FROM a JOIN b`)?",
    "options": [
      "Syntax error every time",
      "You may get a cross join: every row of A paired with every row of B",
      "It returns zero rows",
      "It auto-matches columns with the same name"
    ],
    "correctIndex": 1,
    "explanation": "Without a join condition you get a Cartesian product (cross join) of the two tables, exploding the row count. MySQL does not auto-match same-named columns for a plain JOIN.  —  Real-world: A query that suddenly returns millions of rows and hammers the DB is often a missing ON clause creating a cross join."
  },
  {
    "id": "stef-sql-027",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "This is meant to list all customers and their cancelled orders, but customers with no cancelled order disappear: `SELECT c.name, o.id FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.status = 'cancelled';`. Why?",
    "options": [
      "LEFT JOIN is the wrong keyword here",
      "The WHERE on the right-table column o.status drops the NULL rows, turning the LEFT JOIN into an INNER JOIN",
      "ON should use AND",
      "status must be indexed"
    ],
    "correctIndex": 1,
    "explanation": "For non-matching customers o.status is NULL, and `NULL = 'cancelled'` is false in WHERE, so they are filtered out. Move the condition into the ON clause to preserve the LEFT JOIN.  —  Real-world: The single most common LEFT JOIN bug: a filter on the right table in WHERE silently makes it behave like an INNER JOIN."
  },
  {
    "id": "stef-sql-028",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "After a LEFT JOIN, which condition correctly keeps only the left rows that had NO match on the right?",
    "options": [
      "WHERE right_table.key IS NULL",
      "WHERE right_table.key = 0",
      "WHERE right_table.key != left_table.key",
      "HAVING COUNT(*) = 0"
    ],
    "correctIndex": 0,
    "explanation": "Unmatched right-side rows are NULL after a LEFT JOIN, so `WHERE r.key IS NULL` isolates left rows with no match (the anti-join pattern).  —  Real-world: 'Find customers who have never placed an order' is a LEFT JOIN ... WHERE orders.id IS NULL."
  },
  {
    "id": "stef-sql-029",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which query finds products that have never been ordered?",
    "options": [
      "SELECT * FROM products INNER JOIN order_items ON ...",
      "SELECT * FROM products WHERE id = NULL",
      "SELECT * FROM products p WHERE EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = p.id)",
      "SELECT p.* FROM products p LEFT JOIN order_items oi ON oi.product_id = p.id WHERE oi.product_id IS NULL"
    ],
    "correctIndex": 3,
    "explanation": "LEFT JOIN then filter where the right key IS NULL returns left rows with no match. The EXISTS option returns the opposite (products that WERE ordered), and = NULL never matches.  —  Real-world: Reports like 'dead stock that never sold' are anti-joins: LEFT JOIN ... WHERE child.key IS NULL (or NOT EXISTS)."
  },
  {
    "id": "stef-sql-030",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "An order has 3 line items. `SELECT o.id, o.total FROM orders o JOIN order_items oi ON oi.order_id = o.id;` then someone does `SUM(o.total)`. What goes wrong?",
    "options": [
      "o.total is summed once per order (correct)",
      "The join returns an error",
      "o.total is duplicated across the 3 item rows, so SUM(o.total) triple-counts it",
      "order_items rows are ignored"
    ],
    "correctIndex": 2,
    "explanation": "A one-to-many join repeats the order row once per line item, so summing the order total counts it multiple times. Aggregate the items separately or SUM a DISTINCT/pre-aggregated value.  —  Real-world: 'Revenue is way too high' after joining headers to line items is classic row multiplication double-counting."
  },
  {
    "id": "stef-sql-031",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Table A = {1,2,3} on key k; Table B = {2,2,4} on key k. How many rows does `A INNER JOIN B ON A.k = B.k` produce?",
    "options": [
      "1",
      "3",
      "2",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Only k=2 matches, and B has two rows with k=2, so A's single k=2 row pairs with both, giving 2 rows. k=1 and 3 have no match; k=4 has no match in A.  —  Real-world: Predicting join cardinality matters when a join unexpectedly inflates or shrinks a result during incident analysis."
  },
  {
    "id": "stef-sql-032",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "customers has 50 rows; 30 have at least one order. Compared to `INNER JOIN orders`, how many distinct customers appear with `LEFT JOIN orders`?",
    "options": [
      "All 50 customers appear (20 with NULL order columns); INNER JOIN shows only the 30 matched ones",
      "Both show 30",
      "Both show 50",
      "LEFT JOIN shows 20"
    ],
    "correctIndex": 0,
    "explanation": "LEFT JOIN keeps all 50 customers (20 with NULLs), while INNER JOIN keeps only the 30 that have a matching order.  —  Real-world: Choosing LEFT vs INNER is exactly the difference between 'all customers' and 'only customers who ordered' in a report."
  },
  {
    "id": "stef-sql-033",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "To list each employee with their manager's name from a single `employees(id, name, manager_id)` table, you use:",
    "options": [
      "A GROUP BY on manager_id",
      "A self join: employees e JOIN employees m ON e.manager_id = m.id",
      "A UNION of the table with itself",
      "A subquery in the FROM with no join"
    ],
    "correctIndex": 1,
    "explanation": "Joining a table to itself with two aliases (a self join) lets you match each employee's manager_id to another employee's id.  —  Real-world: Org-hierarchy lookups ('who is X's manager') are self joins on the same table."
  },
  {
    "id": "stef-sql-034",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "You need order id, customer name, and product name across orders, customers, and order_items+products. What is the correct shape?",
    "options": [
      "You cannot join more than two tables in one query",
      "Use a UNION of three SELECTs",
      "Use GROUP BY across all three",
      "Chain joins: orders JOIN customers ON ... JOIN order_items ON ... JOIN products ON ..."
    ],
    "correctIndex": 3,
    "explanation": "Multi-table joins are chained, each with its own ON condition linking to the next table. UNION stacks rows, not columns, and GROUP BY does not join.  —  Real-world: Most support data pulls span 3-4 tables chained by their foreign keys."
  },
  {
    "id": "stef-sql-035",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A 3-table join errors with 'Column 'id' in field list is ambiguous'. What does that mean?",
    "options": [
      "The id column does not exist",
      "More than one joined table has a column named id, so you must qualify it (e.g. orders.id)",
      "id must be the primary key",
      "JOINs cannot select id columns"
    ],
    "correctIndex": 1,
    "explanation": "When several tables expose the same column name, you must prefix it with the table/alias so the engine knows which one you mean.  —  Real-world: Ambiguous-column errors are routine when joining tables that all have id/created_at; the fix is alias-qualifying every column."
  },
  {
    "id": "stef-sql-036",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A join is written `ON o.customer_id = c.id` but should be `ON o.customer_id = c.id AND o.tenant_id = c.tenant_id` in a multi-tenant DB. What is the likely symptom?",
    "options": [
      "Orders match customers from the wrong tenant, inflating/duplicating rows",
      "A syntax error",
      "Zero rows always",
      "Slower query but identical results"
    ],
    "correctIndex": 0,
    "explanation": "An incomplete join key matches across tenants, producing extra/incorrect rows. Composite keys must be fully matched in ON.  —  Real-world: In multi-tenant systems, an incomplete join key leaks or duplicates data across tenants, a serious correctness bug."
  },
  {
    "id": "stef-sql-037",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "`SELECT c.id, COUNT(*) FROM customers c LEFT JOIN orders o ON o.customer_id = c.id GROUP BY c.id;` reports 1 for customers with zero orders. Why, and what's the fix?",
    "options": [
      "COUNT(*) is always wrong; use SUM",
      "COUNT(*) counts the single NULL-filled row from the LEFT JOIN; use COUNT(o.id) to count actual orders",
      "GROUP BY should be on o.id",
      "LEFT JOIN cannot be grouped"
    ],
    "correctIndex": 1,
    "explanation": "After a LEFT JOIN, a customer with no orders still produces one row (with NULL order columns), and COUNT(*) counts that row. COUNT(o.id) ignores NULLs and returns 0.  —  Real-world: 'Customers with no orders show a count of 1' is the LEFT-JOIN + COUNT(*) trap; count a non-null right-side column instead."
  },
  {
    "id": "stef-sql-038",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A = rows (1,'x'),(2,'y'); B = rows (1,'a'). For `A LEFT JOIN B ON A.id = B.id`, what is the exact result?",
    "options": [
      "Only (1,'x','a')",
      "(1,'x','a') and (2,'y',NULL)",
      "(1,'x','a'), (2,'y','a')",
      "(1,'x','a'), (2,'y',NULL), and an extra B row"
    ],
    "correctIndex": 1,
    "explanation": "Both A rows are kept; id=1 matches B's row, and id=2 has no match so B's columns are NULL.  —  Real-world: Tracing a LEFT JOIN row-by-row is how you confirm whether 'missing' values are real data gaps or join artifacts."
  },
  {
    "id": "stef-sql-039",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "To keep ALL customers but only attach orders from 2024, where must the date condition go?",
    "options": [
      "In WHERE: `WHERE o.created_at >= '2024-01-01'`",
      "In HAVING",
      "It cannot be done with a LEFT JOIN",
      "In the ON clause: `LEFT JOIN orders o ON o.customer_id = c.id AND o.created_at >= '2024-01-01'`"
    ],
    "correctIndex": 3,
    "explanation": "Conditions on the right table must go in ON to preserve unmatched left rows; the same condition in WHERE would drop customers with no 2024 order by filtering out their NULL rows.  —  Real-world: 'Keep all X, but only matching Y' reports require the Y-filter in ON, not WHERE, or you lose the X rows you wanted to keep."
  },
  {
    "id": "stef-sql-040",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A nightly revenue report suddenly drops ~5% of transactions. Investigation shows some transactions have a NULL account_id, and the report uses `transactions t INNER JOIN accounts a ON a.id = t.account_id`. What's the root cause and fix?",
    "options": [
      "The INNER JOIN drops transactions whose account_id is NULL/unmatched; switch to a LEFT JOIN (and investigate the NULL account_ids)",
      "accounts table is corrupt",
      "The report needs GROUP BY",
      "INNER JOIN is faster but rounds totals"
    ],
    "correctIndex": 0,
    "explanation": "INNER JOIN excludes transactions with a NULL or non-matching account_id, silently shrinking the total. A LEFT JOIN keeps them, and the NULL account_ids should be investigated as a data-quality issue.  —  Real-world: A recurring 'numbers don't reconcile' incident: an INNER JOIN quietly drops rows with broken/empty foreign keys."
  },
  {
    "id": "stef-sql-041",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does `SELECT status, COUNT(*) FROM tickets GROUP BY status;` produce?",
    "options": [
      "One row per distinct status, with the number of tickets in each",
      "The total number of tickets only",
      "Every ticket row",
      "Only the most common status"
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY collapses rows into one per distinct status, and COUNT(*) gives the size of each group.  —  Real-world: 'How many tickets in each state' dashboards are GROUP BY status with COUNT(*)."
  },
  {
    "id": "stef-sql-042",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does COUNT(*) count?",
    "options": [
      "Only non-null values of the first column",
      "All rows in the group, including those with NULLs",
      "Distinct rows only",
      "The number of columns"
    ],
    "correctIndex": 1,
    "explanation": "COUNT(*) counts rows regardless of NULLs; COUNT(column) would skip rows where that column is NULL.  —  Real-world: Row totals use COUNT(*); a per-column non-null tally uses COUNT(column)."
  },
  {
    "id": "stef-sql-043",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "Which aggregate returns the total of a numeric column?",
    "options": [
      "AVG(amount)",
      "COUNT(amount)",
      "SUM(amount)",
      "MAX(amount)"
    ],
    "correctIndex": 2,
    "explanation": "SUM adds the values; AVG averages them, COUNT counts them, MAX returns the largest.  —  Real-world: 'Total revenue this month' is SUM(amount) with a date filter."
  },
  {
    "id": "stef-sql-044",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "In a grouped query, which clause filters individual rows BEFORE they are grouped?",
    "options": [
      "HAVING",
      "GROUP BY",
      "ORDER BY",
      "WHERE"
    ],
    "correctIndex": 3,
    "explanation": "WHERE filters rows before aggregation; HAVING filters whole groups after aggregation.  —  Real-world: Restricting to 'this month' before counting per status is a WHERE, not HAVING."
  },
  {
    "id": "stef-sql-045",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does `SELECT MIN(created_at), MAX(created_at) FROM orders;` return?",
    "options": [
      "The earliest and latest order timestamps",
      "The first and last rows by id",
      "The count of orders",
      "An error, because there is no GROUP BY"
    ],
    "correctIndex": 0,
    "explanation": "MIN/MAX over the whole table return the smallest and largest values; a single overall aggregate needs no GROUP BY.  —  Real-world: 'What date range does our data cover' is MIN/MAX on the timestamp."
  },
  {
    "id": "stef-sql-046",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "`GROUP BY country` on a customers table produces how many rows?",
    "options": [
      "One row per customer",
      "One row per distinct country",
      "One row total",
      "One row per column"
    ],
    "correctIndex": 1,
    "explanation": "Grouping by country yields one output row for each distinct country value.  —  Real-world: Per-country breakdowns are GROUP BY country."
  },
  {
    "id": "stef-sql-047",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A users table has 100 rows; the email column is NULL for 12 of them. What does `SELECT COUNT(email) FROM users;` return?",
    "options": [
      "100",
      "12",
      "88",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "COUNT(column) ignores NULLs, so it counts the 88 non-null emails. COUNT(*) would return 100.  —  Real-world: 'The count doesn't match the row total' is usually COUNT(column) skipping NULLs versus COUNT(*)."
  },
  {
    "id": "stef-sql-048",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "You want statuses that have more than 100 tickets. Which is correct?",
    "options": [
      "SELECT status FROM tickets WHERE COUNT(*) > 100",
      "SELECT status FROM tickets GROUP BY status WHERE COUNT(*) > 100",
      "SELECT status FROM tickets ORDER BY COUNT(*) > 100",
      "SELECT status FROM tickets GROUP BY status HAVING COUNT(*) > 100"
    ],
    "correctIndex": 3,
    "explanation": "Aggregate conditions are filtered with HAVING after GROUP BY; WHERE cannot reference an aggregate, and there is no WHERE after GROUP BY.  —  Real-world: 'Show only groups above a threshold' always uses HAVING on the aggregate."
  },
  {
    "id": "stef-sql-049",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which expression counts how many DIFFERENT customers placed an order?",
    "options": [
      "COUNT(DISTINCT customer_id)",
      "COUNT(*)",
      "COUNT(customer_id)",
      "SUM(customer_id)"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(DISTINCT customer_id) counts unique customers; COUNT(*) and COUNT(customer_id) count order rows (with repeats), and SUM adds ids meaninglessly.  —  Real-world: 'How many unique customers bought something' needs COUNT(DISTINCT), not COUNT(*)."
  },
  {
    "id": "stef-sql-050",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Read: `SELECT priority, COUNT(*) AS c FROM incidents WHERE created_at >= '2024-01-01' GROUP BY priority ORDER BY c DESC;`. What does it return?",
    "options": [
      "All incidents since 2024 with no grouping",
      "A count of 2024-onward incidents per priority, highest count first",
      "The single most common priority only",
      "Priorities whose count exceeds a threshold"
    ],
    "correctIndex": 1,
    "explanation": "It filters to 2024 onward, groups by priority, counts each group, and orders the groups by count descending.  —  Real-world: This is a standard 'incidents by priority this year, busiest first' report."
  },
  {
    "id": "stef-sql-051",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A score column holds 10, 20, and NULL. What does `AVG(score)` return?",
    "options": [
      "10, treating NULL as 0: (10+20+0)/3",
      "NULL",
      "15, ignoring the NULL: (10+20)/2",
      "An error"
    ],
    "correctIndex": 2,
    "explanation": "AVG ignores NULLs, averaging only the two present values: (10+20)/2 = 15. It does not treat NULL as zero.  —  Real-world: Averages that look 'too high' are often AVG ignoring NULLs rather than counting them as zero."
  },
  {
    "id": "stef-sql-052",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "What is the correct logical processing order of these clauses?",
    "options": [
      "GROUP BY, WHERE, HAVING, SELECT",
      "SELECT, WHERE, GROUP BY, HAVING",
      "HAVING, WHERE, GROUP BY, ORDER BY",
      "WHERE, GROUP BY, HAVING, ORDER BY"
    ],
    "correctIndex": 3,
    "explanation": "Rows are filtered (WHERE), grouped (GROUP BY), groups filtered (HAVING), then ordered (ORDER BY); the SELECT projection is applied late.  —  Real-world: Knowing this order explains why a SELECT alias often can't be referenced in WHERE."
  },
  {
    "id": "stef-sql-053",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "On MySQL with only_full_group_by enabled, `SELECT customer_id, name, COUNT(*) FROM orders GROUP BY customer_id;` errors. Why?",
    "options": [
      "`name` is neither in GROUP BY nor wrapped in an aggregate, so its per-group value is ambiguous",
      "COUNT(*) is invalid",
      "customer_id must be the primary key",
      "You cannot group by a foreign key"
    ],
    "correctIndex": 0,
    "explanation": "only_full_group_by requires every selected non-aggregated column to appear in GROUP BY; otherwise the value per group is undefined. Add name to GROUP BY or aggregate it.  —  Real-world: Queries that 'worked on the old server' but break after a MySQL upgrade are usually hitting only_full_group_by."
  },
  {
    "id": "stef-sql-054",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "`GROUP BY country, city` produces one row per...?",
    "options": [
      "Distinct country only",
      "Distinct (country, city) combination",
      "Distinct city only",
      "Every customer"
    ],
    "correctIndex": 1,
    "explanation": "Grouping by multiple columns produces one row per unique combination of those column values.  —  Real-world: Drill-down reports (country, then city) group by both columns."
  },
  {
    "id": "stef-sql-055",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "`SELECT c.id, COUNT(*) FROM customers c JOIN orders o ON o.customer_id=c.id JOIN order_items i ON i.order_id=o.id GROUP BY c.id;` — what does COUNT(*) actually count?",
    "options": [
      "Orders per customer",
      "Customers",
      "Order-item rows per customer (inflated by the second join)",
      "Distinct products"
    ],
    "correctIndex": 2,
    "explanation": "After joining down to order_items, each item is a row, so COUNT(*) counts item rows, not orders. Use COUNT(DISTINCT o.id) to count orders.  —  Real-world: 'Order counts look several times too high' happens when a deeper join multiplies rows before COUNT(*)."
  },
  {
    "id": "stef-sql-056",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Find the bug: `SELECT department, AVG(salary) FROM employees WHERE AVG(salary) > 5000 GROUP BY department;`",
    "options": [
      "AVG is misspelled",
      "GROUP BY must come before SELECT",
      "salary must be indexed",
      "An aggregate (AVG) cannot be used in WHERE; filter it with HAVING after grouping"
    ],
    "correctIndex": 3,
    "explanation": "WHERE runs before aggregation, so it cannot reference AVG(salary). Move the condition to `HAVING AVG(salary) > 5000`.  —  Real-world: 'Invalid use of group function' errors come from putting an aggregate in WHERE instead of HAVING."
  },
  {
    "id": "stef-sql-057",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A filtered aggregate query matches zero rows. What do `COUNT(*)` and `SUM(amount)` return, respectively?",
    "options": [
      "COUNT(*) returns 0; SUM returns NULL",
      "Both return 0",
      "Both return NULL",
      "Both raise an error"
    ],
    "correctIndex": 0,
    "explanation": "Over zero rows, COUNT returns 0 but SUM returns NULL (not 0). Use COALESCE(SUM(amount),0) when you need a zero.  —  Real-world: A 'total shows blank instead of 0' bug is SUM returning NULL when no rows match; COALESCE fixes it."
  },
  {
    "id": "stef-sql-058",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "payments.amount holds 100, 200, NULL, 300. What do `COUNT(amount)` and `SUM(amount)` return?",
    "options": [
      "4 and 600",
      "3 and 600",
      "4 and NULL",
      "3 and 500"
    ],
    "correctIndex": 1,
    "explanation": "COUNT(amount) ignores the NULL → 3; SUM ignores the NULL and adds 100+200+300 = 600.  —  Real-world: Reconciling 'count vs sum' on a column with NULLs requires knowing both aggregates skip NULLs."
  },
  {
    "id": "stef-sql-059",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "Which clause correctly filters groups by an aggregate value?",
    "options": [
      "WHERE SUM(x) > 10",
      "ORDER BY HAVING SUM(x) > 10",
      "HAVING SUM(x) > 10",
      "GROUP BY SUM(x) > 10"
    ],
    "correctIndex": 2,
    "explanation": "HAVING is the clause that filters groups using aggregate expressions such as SUM(x) > 10.  —  Real-world: Thresholding grouped results ('teams whose total exceeds X') is done in HAVING."
  },
  {
    "id": "stef-sql-060",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A 'tickets per agent' report counts about double after adding a join to a one-to-many comments table. Best fix?",
    "options": [
      "Add DISTINCT to SELECT *",
      "Remove the GROUP BY",
      "Use COUNT(*) and divide by 2",
      "Count the distinct key, e.g. COUNT(DISTINCT t.id), or pre-aggregate comments in a subquery before joining"
    ],
    "correctIndex": 3,
    "explanation": "The one-to-many join multiplies ticket rows, so COUNT(*) over-counts. Counting DISTINCT ticket ids, or pre-aggregating comments in a subquery, restores the correct total.  —  Real-world: Double-counting after fanning out a one-to-many join is fixed with COUNT(DISTINCT) or a pre-aggregated subquery, not a magic divide."
  },
  {
    "id": "stef-sql-061",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What is the primary purpose of a database index?",
    "options": [
      "To speed up row lookups and searches on the indexed column(s)",
      "To encrypt the data at rest",
      "To enforce foreign-key constraints",
      "To compress the table on disk"
    ],
    "correctIndex": 0,
    "explanation": "An index is a lookup structure (usually a B-tree) that lets the engine find rows without scanning the whole table, trading some write cost and storage for faster reads.  —  Real-world: When a query on a large table is slow, the first question is whether the filtered column is indexed."
  },
  {
    "id": "stef-sql-062",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "Which is true of a PRIMARY KEY column?",
    "options": [
      "It may contain duplicate values",
      "It is unique, NOT NULL, and automatically indexed",
      "It must be a string type",
      "It allows NULLs"
    ],
    "correctIndex": 1,
    "explanation": "A primary key uniquely identifies each row, cannot be NULL, and is backed by an index automatically.  —  Real-world: Lookups by primary key are the fastest access path, which is why data fixes target rows by their PK."
  },
  {
    "id": "stef-sql-063",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "What does COMMIT do in a transaction?",
    "options": [
      "Undoes all changes",
      "Starts a new transaction",
      "Makes the transaction's changes permanent and visible to other sessions",
      "Locks the table permanently"
    ],
    "correctIndex": 2,
    "explanation": "COMMIT finalizes the transaction, persisting its changes and releasing its locks; ROLLBACK would discard them.  —  Real-world: After verifying a data fix inside a transaction, COMMIT makes it stick."
  },
  {
    "id": "stef-sql-064",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "You ran several UPDATEs inside a transaction and realize they're wrong (before COMMIT). Which command undoes them?",
    "options": [
      "DELETE",
      "COMMIT",
      "FLUSH",
      "ROLLBACK"
    ],
    "correctIndex": 3,
    "explanation": "ROLLBACK discards all uncommitted changes in the current transaction, returning the data to its pre-transaction state.  —  Real-world: Wrapping production data edits in a transaction gives you ROLLBACK as a safety net for mistakes."
  },
  {
    "id": "stef-sql-065",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "In ACID, what does Atomicity mean?",
    "options": [
      "All statements in a transaction succeed together, or none take effect",
      "Data is encrypted at rest",
      "Each row is stored on a single disk",
      "Queries can run in parallel"
    ],
    "correctIndex": 0,
    "explanation": "Atomicity means a transaction is all-or-nothing; a failure rolls back the whole unit. The other letters are Consistency, Isolation, and Durability.  —  Real-world: Atomicity is why a half-finished multi-step update doesn't leave the data in a broken in-between state."
  },
  {
    "id": "stef-sql-066",
    "topic": "stef-sql",
    "difficulty": "easy",
    "prompt": "Why is `SELECT *` discouraged in production application queries?",
    "options": [
      "It returns incorrect data",
      "It fetches every column (more I/O and network), can break when the schema changes, and prevents covering-index optimizations; selecting only needed columns is safer",
      "It is invalid SQL",
      "It always forces a full table scan"
    ],
    "correctIndex": 1,
    "explanation": "SELECT * pulls all columns whether needed or not, increasing I/O and coupling code to the schema; naming required columns is leaner and can let a covering index satisfy the query.  —  Real-world: Trimming SELECT * to the needed columns is a common quick win when reviewing a slow application query."
  },
  {
    "id": "stef-sql-067",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "EXPLAIN on a slow query shows `type: ALL` and `rows: 1500000`. What does this indicate?",
    "options": [
      "The query uses an ideal index",
      "Only 1.5 MB of data is read",
      "A full table scan of about 1.5M rows because no index serves the filter",
      "The table has 1,500,000 indexes"
    ],
    "correctIndex": 2,
    "explanation": "type: ALL means a full table scan; the engine examines every row because no index covers the WHERE/JOIN. An appropriate index usually changes type to ref or range.  —  Real-world: Seeing type=ALL on a large table in EXPLAIN is the classic signal to add an index on the filtered column."
  },
  {
    "id": "stef-sql-068",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Why can `WHERE name LIKE '%smith'` not use a normal B-tree index on name?",
    "options": [
      "LIKE is never indexable",
      "The index must be corrupt",
      "name must be numeric",
      "A leading wildcard makes the value's prefix unknown, so the sorted B-tree cannot be range-scanned"
    ],
    "correctIndex": 3,
    "explanation": "B-tree indexes are ordered by prefix; a leading % means the start is unknown, forcing a scan. `LIKE 'smith%'` (trailing wildcard) can use the index.  —  Real-world: A slow 'contains' search (%term%) is expected to scan; it needs a full-text index or a different approach, not a plain B-tree."
  },
  {
    "id": "stef-sql-069",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "A composite index exists on (last_name, first_name). Which query can use it efficiently?",
    "options": [
      "WHERE last_name = 'Pop'",
      "WHERE first_name = 'Ion'",
      "WHERE first_name = 'Ion' AND middle_name = 'X'",
      "WHERE YEAR(dob) = 1990"
    ],
    "correctIndex": 0,
    "explanation": "A composite index helps when the leftmost column(s) are in the predicate. Filtering only on first_name skips the leading column, so the index can't be used effectively.  —  Real-world: The 'leftmost prefix' rule decides whether a multi-column index actually helps a given query."
  },
  {
    "id": "stef-sql-070",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Several app requests fail with 'Lock wait timeout exceeded; try restarting transaction'. Most likely cause?",
    "options": [
      "The table has no primary key",
      "Another transaction holds row locks (often a long or uncommitted one), blocking these until it commits or they time out",
      "The query has a syntax error",
      "The disk is full"
    ],
    "correctIndex": 1,
    "explanation": "InnoDB makes a statement wait for locks held by another transaction; if that transaction doesn't commit/rollback in time, the waiter times out. Find and end the blocking transaction.  —  Real-world: Lock-wait-timeout incidents trace to a long or stuck transaction; you check SHOW ENGINE INNODB STATUS / processlist for the blocker."
  },
  {
    "id": "stef-sql-071",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "`WHERE DATE(created_at) = '2024-06-01'` is slow despite an index on created_at. Why?",
    "options": [
      "DATE() is not a valid function",
      "created_at must be a string",
      "Wrapping the indexed column in a function blocks index use; rewrite as a range `created_at >= '2024-06-01' AND created_at < '2024-06-02'`",
      "Indexes never work on date columns"
    ],
    "correctIndex": 2,
    "explanation": "Applying a function to an indexed column prevents the engine from using the index on the raw values. A half-open range on the bare column is sargable and uses the index.  —  Real-world: A frequent optimization: replace DATE(col)= or other column-wrapping functions with a range predicate so the index applies."
  },
  {
    "id": "stef-sql-072",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "What is a 'covering index'?",
    "options": [
      "An index that covers all tables in the database",
      "A backup copy of an index",
      "An index that locks rows during reads",
      "An index that contains every column a query needs, so the query is answered from the index without reading the table rows"
    ],
    "correctIndex": 3,
    "explanation": "When an index includes all columns a query references, the engine can satisfy it from the index alone (index-only scan), skipping the extra row lookups.  —  Real-world: Adding the few selected columns into an index can turn a slow query into a fast index-only scan during tuning."
  },
  {
    "id": "stef-sql-073",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Two transactions each lock row A then try to lock row B in the opposite order and hang on each other. What is this, and what does InnoDB do?",
    "options": [
      "A deadlock; InnoDB detects it and rolls back one transaction as the victim so the other proceeds",
      "A full table scan; it waits forever",
      "A syntax error; both abort",
      "A network partition; it reconnects"
    ],
    "correctIndex": 0,
    "explanation": "Circular lock waiting is a deadlock. InnoDB detects the cycle and rolls back the lower-cost transaction; the application should retry the victim.  —  Real-world: Occasional deadlock errors are normal under concurrency; the fix is consistent lock ordering plus retrying the rolled-back transaction."
  },
  {
    "id": "stef-sql-074",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "With autocommit ON (MySQL default) and no explicit BEGIN, what happens after a single UPDATE statement?",
    "options": [
      "It stays pending until you COMMIT",
      "It is committed immediately as its own transaction",
      "It is rolled back at the end of the session",
      "Nothing changes until FLUSH"
    ],
    "correctIndex": 1,
    "explanation": "With autocommit on, each standalone statement is its own transaction and commits as soon as it succeeds. To group statements you must START TRANSACTION explicitly.  —  Real-world: This is why an accidental UPDATE without WHERE is instantly permanent unless you opened a transaction first."
  },
  {
    "id": "stef-sql-075",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "What does `SELECT ... FOR UPDATE` inside a transaction do?",
    "options": [
      "Nothing different from a normal SELECT",
      "Updates the rows automatically",
      "Locks the selected rows so other transactions cannot modify them until you commit",
      "Deletes the rows after reading them"
    ],
    "correctIndex": 2,
    "explanation": "FOR UPDATE places write locks on the matched rows for the duration of the transaction, preventing concurrent modification (used for safe read-modify-write).  —  Real-world: Stock or seat-reservation flows use SELECT ... FOR UPDATE so two requests can't grab the same row."
  },
  {
    "id": "stef-sql-076",
    "topic": "stef-sql",
    "difficulty": "medium",
    "prompt": "Which MySQL feature helps identify which queries are slow in production?",
    "options": [
      "The error log only",
      "SHOW DATABASES",
      "The binary log",
      "The slow query log (records statements exceeding long_query_time)"
    ],
    "correctIndex": 3,
    "explanation": "The slow query log records statements running longer than long_query_time (optionally those not using indexes), the starting point for tuning. The binary log is for replication/recovery, not performance triage.  —  Real-world: Performance investigations usually start by reading the slow query log and then running EXPLAIN on the offenders."
  },
  {
    "id": "stef-sql-077",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "An indexed integer column user_id is queried as `WHERE user_id = '123'` (a string literal) and in some setups the index isn't used cleanly. The deeper lesson is:",
    "options": [
      "Type mismatches and functions on a column can defeat an index; compare with the column's native type (123, not '123') and keep the column un-wrapped in the predicate",
      "String and integer are identical to indexes",
      "user_id should not be indexed",
      "Indexes only work with string columns"
    ],
    "correctIndex": 0,
    "explanation": "Implicit type conversions, or wrapping the column in a function, can prevent clean index use; comparing with the column's own type and a bare column keeps the predicate sargable.  —  Real-world: Subtle 'the index exists but isn't used' cases often come down to a type mismatch or a function applied to the indexed column."
  },
  {
    "id": "stef-sql-078",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "A batch job opens a transaction, runs for 40 minutes, then commits. During it, other users hit lock waits and the DB's undo/history grows. Best remediation?",
    "options": [
      "Disable transactions entirely",
      "Break the work into smaller transactions that commit frequently, so locks and undo are released sooner",
      "Add more indexes to the table",
      "Turn autocommit off globally"
    ],
    "correctIndex": 1,
    "explanation": "One huge long-running transaction holds locks and forces InnoDB to retain undo (old row versions) the whole time, hurting concurrency. Committing in smaller batches releases locks and trims history.  —  Real-world: 'Everything got slow during the nightly batch' is often one giant transaction; chunking it with periodic commits fixes the contention."
  },
  {
    "id": "stef-sql-079",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "EXPLAIN shows `key: NULL`, `rows: 2000000`, `Extra: Using where` for a query filtering on email. What is the takeaway?",
    "options": [
      "The query is already optimal",
      "email is the primary key",
      "No index is being used (key NULL), so it scans about 2M rows; add an index on email",
      "The result set contains 2,000,000 rows"
    ],
    "correctIndex": 2,
    "explanation": "key: NULL means no index was chosen, and rows ~2M is the estimated scan size, not the result size. Indexing email lets the query seek instead of scan.  —  Real-world: Reading EXPLAIN's key and rows columns is how an L2 engineer confirms a missing index before recommending one."
  },
  {
    "id": "stef-sql-080",
    "topic": "stef-sql",
    "difficulty": "hard",
    "prompt": "App logs show one page issuing 1 query for a list plus 1 query per item (hundreds of tiny SELECTs). What pattern is this, and how is it fixed?",
    "options": [
      "A deadlock; add retries",
      "A full table scan; add LIMIT",
      "A lock wait; commit sooner",
      "The N+1 query problem; fetch related data in one query with a JOIN or a single `IN (...)` instead of per-item queries"
    ],
    "correctIndex": 3,
    "explanation": "N+1 means one query to fetch N rows then N more for each row's related data. Replacing the per-item queries with a JOIN or `WHERE id IN (...)` collapses it to a couple of queries.  —  Real-world: An endpoint that's slow under load with hundreds of near-identical queries in the log is the N+1 pattern, a frequent app-support finding."
  }
];
