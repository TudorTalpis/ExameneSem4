import type { Question } from '../types/question';

export const stefPhpQuestions: Question[] = [
  {
    "id": "stef-php-001",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "A PHP page returns a completely blank white screen with HTTP 500 and no message in the browser. As an L2 engineer, what is the FIRST thing you should check to see the actual error?",
    "options": [
      "Clear the browser cache and reload the page",
      "Check the PHP error log (or temporarily enable display_errors) to reveal the suppressed error",
      "Reinstall PHP on the server",
      "Increase the browser's timeout setting"
    ],
    "correctIndex": 1,
    "explanation": "The 'white screen of death' usually means a fatal error occurred while display_errors is off. The real message is written to the PHP error log, or can be surfaced by enabling display_errors in a non-production context.  —  Real-world: A customer reports a blank page after deploying a release; the support engineer tails the PHP error log and finds the fatal error that the browser hid."
  },
  {
    "id": "stef-php-002",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "What does the following PHP snippet output?\n\n$name = 'Stefanini';\necho 'Hello ' . $name . '!';",
    "options": [
      "Hello . Stefanini . !",
      "Hello $name!",
      "Hello Stefanini!",
      "A parse error because strings cannot be joined"
    ],
    "correctIndex": 2,
    "explanation": "The dot (.) is the string concatenation operator in PHP, so the three string pieces are joined into 'Hello Stefanini!'.  —  Real-world: Reading concatenation correctly helps an engineer trace how a log message or SQL string is assembled when debugging output in a PHP app."
  },
  {
    "id": "stef-php-003",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "A log shows: 'Fatal error: Uncaught Error: Call to undefined function format_price()'. What does this error most commonly mean?",
    "options": [
      "The database connection failed",
      "The function exists but returned the wrong value",
      "The variable $format_price holds the wrong type",
      "The function is being called but is never defined, or its file was not included/required"
    ],
    "correctIndex": 3,
    "explanation": "'Call to undefined function' means PHP reached a call to a function name that does not exist in scope, typically because the file defining it was not included, a typo was made, or a required PHP extension is missing.  —  Real-world: After a refactor, a developer moved a helper file but forgot the require, so every checkout hits 'Call to undefined function format_price()' until the include is restored."
  },
  {
    "id": "stef-php-004",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "In PHP, which comparison checks that two values are equal in BOTH value AND type (no type juggling)?",
    "options": [
      "===",
      "==",
      "=",
      "<>"
    ],
    "correctIndex": 0,
    "explanation": "=== is the identical (strict) comparison operator: it returns true only when value and type match. == performs loose comparison with type juggling, and = is assignment.  —  Real-world: An engineer reviewing an auth check sees == used on a token and recognizes that strict === would avoid type-juggling surprises."
  },
  {
    "id": "stef-php-005",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "What does this snippet output?\n\n$user = ['id' => 5, 'name' => 'Ana'];\nif (isset($user['email'])) {\n    echo $user['email'];\n} else {\n    echo 'no email';\n}",
    "options": [
      "An empty string",
      "A Warning about an undefined array key, then nothing",
      "no email",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "isset() safely returns false when the key 'email' does not exist (and emits no warning), so the else branch runs and prints 'no email'.  —  Real-world: Using isset() before reading optional array keys is the standard way support engineers see code avoid 'Undefined array key' warnings in PHP apps."
  },
  {
    "id": "stef-php-006",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "Which superglobal array holds data submitted from an HTML form using method=\"post\"?",
    "options": [
      "$_GET",
      "$_SESSION",
      "$_COOKIE",
      "$_POST"
    ],
    "correctIndex": 3,
    "explanation": "$_POST contains values sent in the body of a POST request (such as a submitted form), while $_GET holds query-string parameters and $_SESSION holds server-side session data.  —  Real-world: When a form submission fails, an engineer checks whether the expected field actually arrives in $_POST or got sent via the URL in $_GET instead."
  },
  {
    "id": "stef-php-007",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "A teammate asks which command quickly shows the PHP version and confirms the CLI is working on a server. Which is it?",
    "options": [
      "php -v",
      "php --info-only",
      "php status",
      "phpversion.sh"
    ],
    "correctIndex": 0,
    "explanation": "'php -v' prints the installed PHP CLI version and build info, a fast first check when diagnosing version-related issues or confirming PHP is on the PATH.  —  Real-world: Before debugging a compatibility error, an engineer runs 'php -v' to confirm the server is on PHP 8.1 rather than an older 7.x runtime."
  },
  {
    "id": "stef-php-008",
    "topic": "stef-php",
    "difficulty": "easy",
    "prompt": "You see this error in the log: 'Parse error: syntax error, unexpected \"}\" in /var/www/app/cart.php on line 42'. What does this tell you?",
    "options": [
      "The code ran but produced wrong output near line 42",
      "PHP could not even compile the file due to a syntax mistake at/near line 42; look there (often a missing semicolon or brace just before)",
      "The database table on line 42 is missing",
      "A network timeout occurred while loading cart.php"
    ],
    "correctIndex": 1,
    "explanation": "A parse/syntax error means PHP failed to compile the script before running it. The reported line is where parsing broke, but the real cause (e.g., a missing semicolon or unbalanced brace) is often on a line just before it.  —  Real-world: A hotfix edited directly on the server left a stray brace, and every request to cart.php returns a parse error until the syntax is corrected."
  },
  {
    "id": "stef-php-009",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "The error log repeatedly shows: 'PHP Fatal error: Allowed memory size of 134217728 bytes exhausted (tried to allocate 20480 bytes)'. Which php.ini directive controls this limit?",
    "options": [
      "max_execution_time",
      "post_max_size",
      "memory_limit",
      "upload_max_filesize"
    ],
    "correctIndex": 2,
    "explanation": "'Allowed memory size ... exhausted' means the script exceeded memory_limit (here 128 MB = 134217728 bytes). You either raise memory_limit or fix code that loads too much data into memory.  —  Real-world: A report that loads an entire year of orders into an array blows past memory_limit; support raises the limit temporarily while developers add pagination."
  },
  {
    "id": "stef-php-010",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "A long-running export script dies with: 'Fatal error: Maximum execution time of 30 seconds exceeded'. Which php.ini setting is responsible, and what is a typical fix?",
    "options": [
      "memory_limit; reduce the array size",
      "upload_max_filesize; increase the upload size",
      "display_errors; turn it off",
      "max_execution_time; raise it (or optimize/queue the job) for that script"
    ],
    "correctIndex": 3,
    "explanation": "max_execution_time caps how long a PHP script may run (default often 30s). The fix is to raise the limit for that workload or move the heavy job to a background queue/CLI run.  —  Real-world: A nightly CSV export over the web times out at 30s; the team moves it to a CLI cron job where max_execution_time can be relaxed."
  },
  {
    "id": "stef-php-011",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "What is the result of this comparison in PHP?\n\nvar_dump('0' == false);",
    "options": [
      "bool(true)",
      "bool(false)",
      "int(0)",
      "A TypeError is thrown"
    ],
    "correctIndex": 0,
    "explanation": "With == PHP juggles types: the string '0' is considered falsy, so '0' == false evaluates to true. Using === (strict) would return false because a string and a boolean differ in type.  —  Real-world: A feature flag stored as the string '0' is treated as 'off' due to loose comparison, and an engineer must recognize this juggling when a toggle behaves unexpectedly."
  },
  {
    "id": "stef-php-012",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "On a legacy PHP 5.6 system you see this surprising result:\n\nvar_dump('abc' == 0);\n\nWhat does it output on that old version, and why?",
    "options": [
      "bool(false), because strings never equal numbers",
      "bool(true), because the non-numeric string 'abc' was cast to int 0 for the loose comparison",
      "int(0), because the string is converted to its length",
      "A fatal error about comparing incompatible types"
    ],
    "correctIndex": 1,
    "explanation": "In PHP versions before 8.0, comparing a string to a number with == cast the string to a number; non-numeric 'abc' became 0, so 'abc' == 0 was true. PHP 8 changed this so it now returns false.  —  Real-world: An old auth check using == 0 unexpectedly matched arbitrary text on a PHP 5.6 box, a classic loose-comparison bug support engineers must spot in legacy code."
  },
  {
    "id": "stef-php-013",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "What does this snippet print?\n\n$qty = 0;\nif (empty($qty)) {\n    echo 'empty';\n} else {\n    echo 'has value';\n}",
    "options": [
      "has value",
      "A warning, then nothing",
      "empty",
      "0"
    ],
    "correctIndex": 2,
    "explanation": "empty() returns true for values PHP considers falsy, and the integer 0 is one of them, so it prints 'empty'. This is a common gotcha when a legitimate 0 is mistakenly treated as 'no value'.  —  Real-world: A stock check using empty($qty) wrongly flags items with 0 stock the same as missing data, a subtle bug an engineer must catch when quantities behave oddly."
  },
  {
    "id": "stef-php-014",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "A user uploads a 12 MB file and the upload fails silently, but $_FILES shows an error code. Two php.ini directives commonly cause this. Which pair?",
    "options": [
      "memory_limit and max_execution_time",
      "display_errors and error_reporting",
      "session.gc_maxlifetime and session.save_path",
      "upload_max_filesize and post_max_size"
    ],
    "correctIndex": 3,
    "explanation": "Uploads are limited by upload_max_filesize (per-file) and post_max_size (whole POST body). post_max_size must be larger than upload_max_filesize, or the upload is rejected before PHP code runs.  —  Real-world: Users can't attach large PDFs; support finds post_max_size is smaller than upload_max_filesize, silently blocking the upload."
  },
  {
    "id": "stef-php-015",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "An engineer wants to know exactly WHERE PHP writes its error messages on a Linux server. Which php.ini directive defines the log file path?",
    "options": [
      "error_log",
      "log_path",
      "display_errors",
      "error_reporting"
    ],
    "correctIndex": 0,
    "explanation": "The error_log directive in php.ini sets the file PHP writes errors to (e.g., /var/log/php_errors.log). display_errors controls on-screen output, and error_reporting controls which levels are reported.  —  Real-world: To investigate intermittent 500s, an engineer checks php.ini for the error_log path so they know which file to tail."
  },
  {
    "id": "stef-php-016",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "A page works but the log fills with: 'Notice: Undefined variable $total in /var/www/app/invoice.php on line 18'. What does this indicate?",
    "options": [
      "A fatal error that stops the page from rendering",
      "A variable is being read before it was ever assigned a value; the code likely assumes it was initialized",
      "The server is out of memory",
      "The database column 'total' is missing"
    ],
    "correctIndex": 1,
    "explanation": "An 'Undefined variable' notice/warning means the code uses a variable that was never set on that path. It is not fatal, but it signals a logic gap (often a missing initialization or a typo in the variable name).  —  Real-world: An invoice total shows as blank because $total is only set inside an if-branch that didn't run, producing the undefined-variable notice in the log."
  },
  {
    "id": "stef-php-017",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "In a PHP-FPM setup behind Nginx, which is the MOST relevant place to look for the actual PHP fatal error message when a request returns 502/500?",
    "options": [
      "The Nginx access log only",
      "The browser's developer console",
      "The PHP-FPM / PHP error log (path set by error_log), in addition to the web server log",
      "The MySQL slow query log"
    ],
    "correctIndex": 2,
    "explanation": "PHP fatal errors are written to PHP's error log (often configured for PHP-FPM); the web server log may show the 502/500 but not the PHP message. Checking both the PHP error log and the web server log is standard.  —  Real-world: A 502 from Nginx tells the engineer FPM failed, but the root cause (a fatal PHP error) is found only in the PHP-FPM error log."
  },
  {
    "id": "stef-php-018",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "After editing php.ini to raise memory_limit on a PHP-FPM server, the change does not take effect. What is the usual reason?",
    "options": [
      "memory_limit can only be changed by recompiling PHP",
      "The browser cached the old limit",
      "memory_limit is ignored when display_errors is on",
      "PHP-FPM must be restarted (or reloaded) for php.ini changes to apply"
    ],
    "correctIndex": 3,
    "explanation": "PHP-FPM reads php.ini at startup, so changes require restarting or reloading the FPM service (e.g., systemctl restart php-fpm) before they take effect for new requests.  —  Real-world: An engineer raises memory_limit but the OOM errors persist until they restart php-fpm so the worker pool picks up the new value."
  },
  {
    "id": "stef-php-019",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "What does this snippet output?\n\n$a = null;\nvar_dump(isset($a));\nvar_dump(empty($a));",
    "options": [
      "bool(false) then bool(true)",
      "bool(true) then bool(false)",
      "bool(true) then bool(true)",
      "bool(false) then bool(false)"
    ],
    "correctIndex": 0,
    "explanation": "isset() returns false for a variable whose value is null, while empty() returns true for null (and other falsy values). So you get false then true.  —  Real-world: Knowing isset() treats null as 'not set' helps an engineer explain why a null session value falls through an isset() guard in a PHP app."
  },
  {
    "id": "stef-php-020",
    "topic": "stef-php",
    "difficulty": "medium",
    "prompt": "Which statement about $_SESSION is correct for a support engineer debugging a login that 'forgets' the user?",
    "options": [
      "$_SESSION data is stored in the URL and visible to the user",
      "$_SESSION is server-side state tied to a session ID; if session_start() is missing or the session cookie isn't sent, the data won't persist",
      "$_SESSION is the same as $_GET but encrypted",
      "$_SESSION only works on HTTPS and never on HTTP"
    ],
    "correctIndex": 1,
    "explanation": "$_SESSION holds server-side data keyed by a session ID (carried in a cookie). If session_start() isn't called or the cookie is lost, the values appear empty on the next request, which looks like the app 'forgetting' the user.  —  Real-world: Users get logged out randomly; the engineer finds a page missing session_start(), so $_SESSION reads empty there."
  },
  {
    "id": "stef-php-021",
    "topic": "stef-php",
    "difficulty": "hard",
    "prompt": "Examine this snippet. What is printed?\n\n$value = '5 apples';\nif ($value == 5) {\n    echo 'matched';\n} else {\n    echo 'no match';\n}\n// Assume PHP 7.4\n",
    "options": [
      "no match",
      "5 apples",
      "matched",
      "A TypeError"
    ],
    "correctIndex": 2,
    "explanation": "In PHP 7.x, the loose == cast the leading-numeric string '5 apples' to the integer 5, so it equals 5 and prints 'matched' (with a notice). PHP 8 changed string-to-number comparison rules so this would differ.  —  Real-world: A price-matching check using == accepted a malformed '5 apples' input on PHP 7.4, a loose-typing trap an engineer must recognize when bad data slips through validation."
  },
  {
    "id": "stef-php-022",
    "topic": "stef-php",
    "difficulty": "hard",
    "prompt": "Spot the bug. This code is meant to grant admin access only when the role is exactly 'admin':\n\nif ($role = 'admin') {\n    grantAdmin();\n}\n\nWhy does EVERY user get admin?",
    "options": [
      "grantAdmin() ignores its caller",
      "'admin' must be written in uppercase",
      "The if statement needs a semicolon to work",
      "A single = was used (assignment), so $role is set to 'admin' and the condition is always truthy; it should be == or ==="
    ],
    "correctIndex": 3,
    "explanation": "Using = assigns 'admin' to $role and the expression evaluates to the truthy string 'admin', so the branch always runs. The intended comparison is == or, better, === for a strict match.  —  Real-world: A one-character typo (= instead of ==) in an access check granted every visitor admin rights, the kind of high-severity bug support escalates immediately."
  },
  {
    "id": "stef-php-023",
    "topic": "stef-php",
    "difficulty": "hard",
    "prompt": "A script intermittently logs 'Allowed memory size exhausted' only for certain large customers, while small customers are fine. What is the MOST likely root cause an L2 should suspect?",
    "options": [
      "The code loads a result set whose size scales with the customer's data (e.g., fetching all rows at once), exceeding memory_limit for big datasets",
      "The PHP version is too new",
      "max_execution_time is set too high",
      "display_errors is disabled in production"
    ],
    "correctIndex": 0,
    "explanation": "Memory exhaustion that correlates with data size points to unbounded loading (e.g., fetchAll on a huge query) rather than a fixed leak. The fix is to stream/paginate the data or raise memory_limit if appropriate.  —  Real-world: Only the biggest tenant's nightly report crashes with an OOM, leading the team to add chunked processing instead of just bumping memory_limit."
  },
  {
    "id": "stef-php-024",
    "topic": "stef-php",
    "difficulty": "hard",
    "prompt": "A developer reports 'I added error_reporting(E_ALL) and ini_set(\"display_errors\", 1) at the top of the file, but I still get a blank page on a syntax error.' Why?",
    "options": [
      "E_ALL disables display_errors automatically",
      "A parse/syntax error stops the file from compiling, so code that enables display_errors never runs; the error only appears in the PHP error log (or must be enabled in php.ini)",
      "display_errors must be set to the string 'yes'",
      "The browser strips error output for security"
    ],
    "correctIndex": 1,
    "explanation": "Because a syntax error prevents the whole file from compiling, any runtime statements that turn on display_errors are never executed. To see compile-time errors you must enable display_errors in php.ini or read the PHP error log.  —  Real-world: An engineer keeps getting a white screen on a broken file; only after checking the PHP error log (not the in-file ini_set) do they find the parse error."
  },
  {
    "id": "stef-php-025",
    "topic": "stef-php",
    "difficulty": "hard",
    "prompt": "On Linux, an engineer cannot find any PHP error output and the error_log directive in php.ini is empty/unset. Where do PHP errors typically go in that case?",
    "options": [
      "They are permanently discarded and unrecoverable",
      "They are emailed to the server administrator automatically",
      "When error_log is unset, errors are sent to the SAPI's default destination, often the web server's error log (e.g., Apache/Nginx) or stderr, rather than a dedicated PHP file",
      "They are written to the MySQL general log"
    ],
    "correctIndex": 2,
    "explanation": "If the error_log directive is not set, PHP logs to the SAPI default, which for web requests is usually the web server's error log (or stderr for CLI). Setting error_log gives you a predictable, dedicated location.  —  Real-world: With no error_log configured, an engineer finds the missing PHP fatal errors buried in the Apache error_log under /var/log/httpd/."
  }
];
