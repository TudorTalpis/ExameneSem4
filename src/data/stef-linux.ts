import type { Question } from '../types/question';

export const stefLinuxQuestions: Question[] = [
  {
    "id": "stef-linux-001",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "On a RHEL server, which directory is the standard location for variable application and system log files that an L2 engineer checks first during an incident?",
    "options": [
      "/var/log",
      "/etc/log",
      "/proc/log",
      "/opt/log"
    ],
    "correctIndex": 0,
    "explanation": "/var/log holds variable log data such as messages, secure, and application logs. /etc holds configuration, /proc is a virtual kernel/process filesystem, and /opt holds optional third-party software, none of which is the standard log location.  —  Real-world: When a ticket reports an application error, the first reflex is to tail files under /var/log (e.g. /var/log/messages or an app-specific log) to find the stack trace or error."
  },
  {
    "id": "stef-linux-002",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which directory contains system-wide configuration files such as /etc/passwd, /etc/fstab, and service config?",
    "options": [
      "/etc",
      "/var",
      "/home",
      "/proc"
    ],
    "correctIndex": 0,
    "explanation": "/etc is the conventional location for host-specific, system-wide configuration files. /var is for variable data, /home for user home directories, and /proc is a virtual filesystem exposing kernel and process state.  —  Real-world: Editing a service's behavior on a ticket usually means changing a file in /etc and then restarting the unit with systemctl."
  },
  {
    "id": "stef-linux-003",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "During capacity triage on a slow server, you need live CPU and memory info that the kernel exposes as virtual files (e.g. cpuinfo, meminfo) without installing extra tools. Which directory provides these?",
    "options": [
      "/etc",
      "/tmp",
      "/proc",
      "/opt"
    ],
    "correctIndex": 2,
    "explanation": "/proc is a virtual (pseudo) filesystem that the kernel populates at runtime with files like /proc/cpuinfo and /proc/meminfo. The others store configuration, temporary files, and optional software on disk, not live kernel data.  —  Real-world: During capacity triage you might read /proc/meminfo or a process's /proc/<pid>/status to understand resource usage without installing extra tooling."
  },
  {
    "id": "stef-linux-004",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A vendor support ticket asks you to locate the install path of their monitoring agent on a RHEL host. Self-contained third-party packages are installed by convention under which top-level directory?",
    "options": [
      "/home",
      "/proc",
      "/opt",
      "/etc"
    ],
    "correctIndex": 2,
    "explanation": "/opt is reserved for optional, self-contained add-on application software packages, often from third-party vendors. /home is for users, /proc is virtual kernel data, and /etc is for configuration.  —  Real-world: When supporting a vendor agent (monitoring, APM, backup), its binaries and bundled libraries often live under /opt/<vendor>, which is where you go to check versions or logs."
  },
  {
    "id": "stef-linux-005",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which statement about /tmp is correct on a typical modern Linux system?",
    "options": [
      "It stores permanent user configuration that survives reboots",
      "It is intended for temporary files and its contents may be cleared on reboot or by a cleanup timer",
      "It is a read-only directory containing kernel modules",
      "It holds the system's main log files"
    ],
    "correctIndex": 1,
    "explanation": "/tmp is for transient temporary files and is commonly world-writable with the sticky bit; its contents are often wiped at boot or by a systemd-tmpfiles timer. It is not for permanent config, kernel modules, or logs.  —  Real-world: If an application relies on a file it left in /tmp persisting across a reboot, that is a design bug you may surface during root cause analysis."
  },
  {
    "id": "stef-linux-006",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Given the output line `-rw-r--r-- 1 root root 1240 Jun 17 09:12 app.conf`, what type of object is this?",
    "options": [
      "A directory",
      "A regular file",
      "A symbolic link",
      "A block device"
    ],
    "correctIndex": 1,
    "explanation": "The first character of the mode string is the type field; a hyphen (-) denotes a regular file. A directory shows 'd', a symbolic link 'l', and a block device 'b'.  —  Real-world: Reading ls -l output quickly tells you whether you are dealing with a config file, a directory, or a symlink before you try to edit or follow it."
  },
  {
    "id": "stef-linux-007",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "In the ls -l output `drwxr-x--- 4 deploy webops 4096 Jun 17 app/`, what does the leading 'd' indicate and who can enter the directory?",
    "options": [
      "A symlink; nobody can enter it",
      "A regular file; everyone can read it",
      "A device file; only root can enter",
      "A directory; the owner (deploy) and members of group webops can enter it"
    ],
    "correctIndex": 3,
    "explanation": "'d' marks a directory. The mode rwxr-x--- gives the owner full access, the group webops read+execute (execute = ability to enter/traverse), and others nothing. For directories, the execute bit is what permits cd into them.  —  Real-world: A user reporting 'cannot cd into the app directory' often lacks the execute (x) bit via their group, which you confirm by reading ls -l like this."
  },
  {
    "id": "stef-linux-008",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A web service must read but never modify its config file, and only the owner should be able to write it. Which octal mode best matches 'owner read+write, group read, others read'?",
    "options": [
      "600",
      "777",
      "755",
      "644"
    ],
    "correctIndex": 3,
    "explanation": "644 = rw-r--r--: owner read+write (6), group read (4), others read (4). 600 removes group/other read, 777 grants everyone write, and 755 adds execute bits not needed for a config file.  —  Real-world: Setting world-readable config to 644 is standard, but if it contains secrets you would instead use 640 or 600 to avoid exposing credentials to all users."
  },
  {
    "id": "stef-linux-009",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "You connected to a server via a shared jump host and are unsure whether you are still root or a regular user before running a change. Which command shows your current effective username?",
    "options": [
      "whoami",
      "groups",
      "passwd",
      "chmod"
    ],
    "correctIndex": 0,
    "explanation": "whoami prints the effective user name of the current user. groups lists group memberships, passwd changes passwords, and chmod changes file permissions.  —  Real-world: After using sudo -i or su to switch accounts during troubleshooting, whoami confirms which identity your commands will run as before you make changes."
  },
  {
    "id": "stef-linux-010",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A user runs an app and gets `bash: ./start.sh: Permission denied`. ls -l shows `-rw-r--r-- 1 appuser appuser 512 start.sh`. The user IS appuser. What is the cause and best fix?",
    "options": [
      "The file is owned by the wrong user; run chown root start.sh",
      "The script lacks the execute bit; run chmod +x start.sh (or chmod 755 start.sh)",
      "The disk is full; free space and retry",
      "SELinux is blocking it; disable SELinux permanently"
    ],
    "correctIndex": 1,
    "explanation": "The mode rw-r--r-- has no execute (x) bit, so the script cannot be executed directly even by its owner. Adding execute with chmod +x (or 755) fixes it. Ownership is already correct, and the error is about exec permission, not disk or SELinux.  —  Real-world: A classic 'Permission denied' on a freshly copied deploy script: the file was transferred without its executable bit, and chmod +x resolves the ticket."
  },
  {
    "id": "stef-linux-011",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "After a deploy that ran as root copied files into /var/www/app, the web server (running as www-data) logs `Permission denied` opening /var/www/app/config.php. ls -l shows `-rw------- 1 root root config.php`. What is the most correct fix?",
    "options": [
      "chmod 777 /var/www/app/config.php so everyone can read it",
      "Move the file to /tmp where permissions do not matter",
      "chown www-data:www-data /var/www/app/config.php (and set mode 640) so the service user can read it",
      "Restart the web server; the file will become readable"
    ],
    "correctIndex": 2,
    "explanation": "The file is owned by root with mode 600, so www-data cannot read it. Re-assigning ownership to the service account (and using a safe mode like 640) lets the service read it without exposing it to everyone. chmod 777 is insecure for a config with secrets, and moving to /tmp or restarting does not address ownership.  —  Real-world: Wrong ownership after a root-run deploy is one of the most common post-release incidents; fixing ownership to the service user restores the app without weakening security."
  },
  {
    "id": "stef-linux-012",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Which chmod command uses symbolic notation to add execute permission for the group only, leaving all other bits unchanged?",
    "options": [
      "chmod 710 file",
      "chmod +x file",
      "chmod g=x file",
      "chmod g+x file"
    ],
    "correctIndex": 3,
    "explanation": "g+x adds the execute bit for the group without altering owner or other bits. chmod 710 sets an absolute mode (changing everything), chmod +x adds execute for all classes affected by umask, and g=x would set group to exactly execute, removing any existing group read/write.  —  Real-world: When you only need to let a group traverse a directory, g+x is a precise, low-risk change versus an absolute octal that might clobber existing permissions."
  },
  {
    "id": "stef-linux-013",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A config file holds a database password and must be readable by its owner and by the app's group, but NOT by other users. Which octal mode is correct?",
    "options": [
      "640",
      "644",
      "604",
      "664"
    ],
    "correctIndex": 0,
    "explanation": "640 = rw-r-----: owner read+write, group read, others none. 644 and 664 grant others read (exposing the secret), and 604 grants others read while removing group read entirely.  —  Real-world: Hardening secrets in /etc or an app directory commonly means tightening world-readable 644 files down to 640 (or 600) so non-privileged users cannot harvest credentials."
  },
  {
    "id": "stef-linux-014",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "What does the octal mode 755 on a directory permit?",
    "options": [
      "Everyone full read/write/execute including delete",
      "Only the owner can do anything; group and others are denied",
      "Owner read/write/execute; group and others read+execute (can list and traverse, but not create files)",
      "Owner read only; group and others write only"
    ],
    "correctIndex": 2,
    "explanation": "755 = rwxr-xr-x. On a directory, r allows listing names, x allows entering/traversing, and w (absent for group/others here) would allow creating or deleting entries. So group/others can list and cd in but cannot create files.  —  Real-world: Standard mode for shared application or web directories: the service owner can manage contents while others can read and traverse without being able to tamper."
  },
  {
    "id": "stef-linux-015",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Reading /etc/passwd you see: `svc_app:x:1015:1015:Service App:/opt/app:/sbin/nologin`. What does the 'x' in the second field mean and what does /sbin/nologin do?",
    "options": [
      "The account is disabled; /sbin/nologin is the home directory",
      "The encrypted password is stored in /etc/shadow; /sbin/nologin prevents interactive login shells for this service account",
      "x means the user is root; /sbin/nologin grants a full shell",
      "x is the user ID; /sbin/nologin is the password hash"
    ],
    "correctIndex": 1,
    "explanation": "The 'x' in the password field of /etc/passwd is a placeholder meaning the actual hash lives in /etc/shadow. The final field is the login shell; /sbin/nologin denies an interactive shell, which is normal for service accounts.  —  Real-world: When a vendor asks why their service account 'cannot SSH in', the /sbin/nologin shell is usually intentional, and you confirm it by reading the /etc/passwd entry."
  },
  {
    "id": "stef-linux-016",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You must add the existing user 'deploy' to the supplementary group 'docker' WITHOUT removing them from any other groups. Which command is correct?",
    "options": [
      "usermod -G docker deploy",
      "usermod -aG docker deploy",
      "useradd -G docker deploy",
      "groupadd docker deploy"
    ],
    "correctIndex": 1,
    "explanation": "usermod -aG appends (a) the user to the supplementary group(s) listed with -G. Omitting -a (usermod -G docker deploy) REPLACES all supplementary groups, dropping the others. useradd creates a new user, and groupadd creates a group.  —  Real-world: Forgetting -a is a frequent mistake that silently removes a user from sudo or other critical groups; -aG is the safe pattern when granting an existing user new access."
  },
  {
    "id": "stef-linux-017",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "After running `usermod -aG webops deploy`, the user 'deploy' is already logged in and still cannot access group-restricted files. Why?",
    "options": [
      "usermod -aG does not work on existing users",
      "You must reboot the entire server for any group change",
      "Group membership changes do not apply to existing sessions; the user must log out and back in (or start a new login session) for the new group to take effect",
      "The file permissions are corrupted and must be reset"
    ],
    "correctIndex": 2,
    "explanation": "Supplementary group membership is established at login, so an already-open session keeps its old group set. The user must start a new login session (log out/in) to pick up the new group; the change itself was applied correctly. A full reboot is unnecessary.  —  Real-world: A common 'I added them to the group but it still says permission denied' ticket is resolved by having the user open a fresh session rather than touching permissions further."
  },
  {
    "id": "stef-linux-018",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A user reports that newly created files have mode `-rw-r--r--` (644) but policy requires that group and others get NO access by default (i.e. 600). Which umask achieves this for new files?",
    "options": [
      "umask 022",
      "umask 644",
      "umask 000",
      "umask 077"
    ],
    "correctIndex": 3,
    "explanation": "For regular files the base is 666; umask 077 subtracts group and other permissions, yielding 600 (rw-------). umask 022 yields 644, umask 000 yields 666, and umask 644 is not a meaningful mask for this goal (it would strip far more than intended and is rarely used).  —  Real-world: Tightening a service account's umask to 077 ensures files it creates (logs, dumps) are not world-readable, a frequent hardening request after a security review."
  },
  {
    "id": "stef-linux-019",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "On the /tmp directory you see `drwxrwxrwt 10 root root 4096 /tmp`. What is the meaning of the trailing 't'?",
    "options": [
      "The directory is a temporary symlink",
      "All files inside are automatically executable",
      "The directory is owned by the 'temp' group",
      "The sticky bit is set: in a world-writable directory, users can only delete or rename files they own"
    ],
    "correctIndex": 3,
    "explanation": "The 't' in the others-execute position is the sticky bit. On a shared world-writable directory like /tmp it restricts deletion/renaming so a user can only remove their own files, preventing users from deleting each other's temp files. It is unrelated to symlinks, auto-execution, or group ownership.  —  Real-world: If users complain they cannot delete a file in /tmp that belongs to someone else, the sticky bit is working as designed, not a bug."
  },
  {
    "id": "stef-linux-020",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "ls -l shows `-rwsr-xr-x 1 root root /usr/bin/passwd`. What does the 's' in the owner's execute position mean?",
    "options": [
      "The file is a symbolic link to the shadow file",
      "SUID is set: the program runs with the privileges of its owner (root), not the calling user",
      "The file is shared and cannot be modified",
      "Only superusers can execute the binary"
    ],
    "correctIndex": 1,
    "explanation": "An 's' in the owner execute slot is the SUID bit, causing the program to execute with the file owner's privileges (root here) regardless of who runs it. That is why ordinary users can change their own password via passwd. It is not a symlink or an execution restriction.  —  Real-world: When auditing for privilege-escalation risk, you scan for unexpected SUID-root binaries, since a vulnerable one effectively grants root to any user who can run it."
  },
  {
    "id": "stef-linux-021",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A shared project directory needs all NEW files created inside it to automatically belong to the group 'webteam'. Which special permission set on the directory accomplishes this?",
    "options": [
      "Sticky bit (chmod +t dir)",
      "SUID (chmod u+s dir)",
      "SGID on the directory (chmod g+s dir)",
      "Setting umask to 002"
    ],
    "correctIndex": 2,
    "explanation": "SGID on a directory (chmod g+s) makes new files and subdirectories inherit the directory's group ownership, ideal for shared team folders. The sticky bit only governs deletion, SUID applies to executables (and is ignored on directories for this purpose), and umask 002 affects mode bits, not group inheritance.  —  Real-world: For a collaborative deploy or document directory, SGID guarantees every team member's new files stay group-owned by webteam so the whole team retains access."
  },
  {
    "id": "stef-linux-022",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A junior engineer wants to give user 'oncall' the ability to restart the nginx service via sudo without a password, the safe way. Which approach is correct?",
    "options": [
      "Add 'oncall ALL=(ALL) NOPASSWD: ALL' to /etc/sudoers directly with a text editor",
      "chmod 4755 /usr/bin/systemctl",
      "Add oncall to the root group",
      "Run visudo and add a scoped rule like 'oncall ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx' in a file under /etc/sudoers.d/"
    ],
    "correctIndex": 3,
    "explanation": "Using visudo (which validates syntax) and a scoped, least-privilege rule limited to the exact command is the safe practice; placing it in /etc/sudoers.d keeps it modular. Granting NOPASSWD: ALL is over-broad, adding to the root group is dangerous and not how sudo works, and SUID on systemctl would let anyone control all services.  —  Real-world: On-call access requests should be granted with the narrowest sudo rule that covers the task, edited via visudo to avoid a syntax error that could lock everyone out of sudo."
  },
  {
    "id": "stef-linux-023",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Why should you edit the sudoers configuration with `visudo` rather than opening /etc/sudoers directly in a plain editor?",
    "options": [
      "visudo validates the syntax before saving and locks the file to prevent concurrent edits, avoiding a broken sudoers that could deny all sudo access",
      "visudo encrypts the file so it cannot be read",
      "visudo is the only program allowed to read /etc/sudoers",
      "There is no difference; both behave identically"
    ],
    "correctIndex": 0,
    "explanation": "visudo performs a syntax check on save and applies a lock against simultaneous edits; a malformed /etc/sudoers can make sudo refuse to run entirely, so this safeguard matters. It does not encrypt the file, and a plain editor can technically open the file but offers no validation.  —  Real-world: A single typo in /etc/sudoers saved with a plain editor can lock the whole team out of sudo, turning a small change into a console-access emergency; visudo prevents that."
  },
  {
    "id": "stef-linux-024",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Which command reports the current user's UID, primary GID, and all supplementary group memberships in one line?",
    "options": [
      "id",
      "whoami",
      "passwd -S",
      "ls -l /etc/group"
    ],
    "correctIndex": 0,
    "explanation": "id prints uid, gid, and the full list of groups for the user. whoami shows only the username, passwd -S reports password status, and ls -l /etc/group just lists the file's permissions, not your membership.  —  Real-world: Before debugging a permission issue you run id to confirm exactly which groups the user is in, so you know whether a group-based access rule should apply."
  },
  {
    "id": "stef-linux-025",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A backup job copied an app tree to a new host using `scp -r` run as root, then the service (user svc_app, group svc_app) fails with `Permission denied` across many files now owned root:root. Which single command most efficiently restores correct ownership recursively?",
    "options": [
      "chmod -R 777 /opt/app",
      "chown -R svc_app:svc_app /opt/app",
      "chgrp -R root /opt/app",
      "usermod -aG root svc_app"
    ],
    "correctIndex": 1,
    "explanation": "chown -R svc_app:svc_app recursively resets both user and group ownership to the service account so it can access its files again. chmod 777 dangerously opens everything to all users, chgrp -R root makes it worse, and adding svc_app to the root group is an insecure workaround for the real problem (wrong ownership).  —  Real-world: Bulk wrong-ownership after a root-run scp/rsync migration is a frequent post-deploy incident; a single recursive chown to the service identity is the standard, secure remediation."
  },
  {
    "id": "stef-linux-026",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A user can read /data/reports/summary.txt but reports `Permission denied` opening /data/reports/secret.txt in the SAME directory. The directory is rwxr-xr-x. ls -l shows summary.txt is `-rw-r--r--` and secret.txt is `-rw-r-----` owned by `alice:finance`. The user is bob, not in 'finance'. What is the cause?",
    "options": [
      "The directory permissions block bob",
      "The file is corrupted",
      "secret.txt grants read only to owner alice and group finance; bob (other) has no read bit, so he is denied at the file level",
      "bob needs the execute bit on secret.txt to read it"
    ],
    "correctIndex": 2,
    "explanation": "secret.txt mode rw-r----- gives read to the owner and the finance group only; bob falls into the 'other' class with no permissions, hence denied. The directory (r-x for others) is fine since he can read summary.txt there, the file is not corrupt, and execute is irrelevant to reading a regular file.  —  Real-world: Per-file permission differences within one directory are a common source of selective 'Permission denied' tickets; the fix is to add bob to the finance group or adjust the file's group/mode per data-access policy."
  },
  {
    "id": "stef-linux-027",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "An admin runs `chmod 4755 /usr/local/bin/report` intending 755. What is the practical effect of the leading 4, and why is it a concern if 'report' is owned by root?",
    "options": [
      "It sets the sticky bit; no security impact",
      "The 4 is ignored because it exceeds three octal digits",
      "It makes the file read-only for everyone",
      "It sets the SUID bit, so the program runs as root for any user who executes it, a privilege-escalation risk if the program is exploitable"
    ],
    "correctIndex": 3,
    "explanation": "The leading 4 in a four-digit octal mode sets SUID. With a root-owned binary, every invocation runs with root privileges regardless of the caller, which is dangerous if the binary has any flaw. It is not the sticky bit (that would be a leading 1) and the high digit is not ignored.  —  Real-world: An accidental 4755 instead of 755 on a custom root-owned tool can quietly create a local root-escalation path that a security scan later flags as a finding."
  },
  {
    "id": "stef-linux-028",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "On Ubuntu, sudo access is typically granted by membership in which group, and how do you verify a user currently belongs to it?",
    "options": [
      "The 'sudo' group; verify with `groups <user>` or `id <user>`",
      "The 'wheel' group; verify with `cat /etc/shadow`",
      "The 'admin' group only; verify with `whoami`",
      "The 'root' group; verify with `ls -l /etc/sudoers`"
    ],
    "correctIndex": 0,
    "explanation": "On Debian/Ubuntu the conventional administrative group is 'sudo' (RHEL/CentOS uses 'wheel'); groups <user> or id <user> lists the user's group membership. whoami only shows the username, and inspecting /etc/shadow or the sudoers file's listing does not directly confirm group membership.  —  Real-world: Verifying sudo eligibility on an Ubuntu host means checking for the 'sudo' group with groups, a routine step when onboarding an engineer or diagnosing why their sudo commands are rejected."
  },
  {
    "id": "stef-linux-029",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A service writing to /var/log/myapp/ suddenly logs `Permission denied` after an admin 'cleaned up' permissions. ls -ld shows `dr-xr-xr-x 2 root root /var/log/myapp`, and the service runs as user 'myapp' which owns the files inside. Why can't the service create new log files now?",
    "options": [
      "The directory lost its write bit for everyone (no w), and creating or deleting files requires write permission on the DIRECTORY, not on individual files",
      "/var/log cannot contain subdirectories",
      "The files inside are read-only",
      "The service must run as root to write logs"
    ],
    "correctIndex": 0,
    "explanation": "Creating, renaming, or deleting files is governed by write (and execute) permission on the containing directory, not the files themselves. Here the directory mode r-xr-xr-x has no write bit, so even the file owner cannot add new logs. The fix is to restore write/ownership on the directory (e.g. chown myapp and add the w bit), not to run as root.  —  Real-world: An over-zealous permission cleanup that strips a log directory's write bit is a classic cause of an app silently failing to rotate or create logs, surfacing as a 'Permission denied' in its error output."
  },
  {
    "id": "stef-linux-030",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "What is the primary security purpose of /etc/shadow versus /etc/passwd on a modern Linux system?",
    "options": [
      "/etc/shadow stores usernames while /etc/passwd stores the password hashes",
      "Both files are world-readable and store identical data for redundancy",
      "/etc/shadow lists installed packages; /etc/passwd lists open ports",
      "/etc/shadow stores the password hashes and aging info and is readable only by root, while /etc/passwd is world-readable and holds account metadata (UID, GID, home, shell)"
    ],
    "correctIndex": 3,
    "explanation": "Hashes were moved out of the world-readable /etc/passwd into /etc/shadow (mode 000/640, root-only) along with password-aging fields, so non-privileged users cannot read or attack the hashes. /etc/passwd remains readable and stores account metadata, not the secrets.  —  Real-world: When asked whether non-root users could harvest password hashes, you confirm /etc/shadow is restricted to root, which is why a normal user's cat of it returns Permission denied."
  },
  {
    "id": "stef-linux-031",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "An application is down and you need to bring it back up immediately. Which systemctl subcommand starts a stopped service named 'payment-api' right now?",
    "options": [
      "systemctl enable payment-api",
      "systemctl start payment-api",
      "systemctl reload payment-api",
      "systemctl is-active payment-api"
    ],
    "correctIndex": 1,
    "explanation": "'start' activates the unit immediately. 'enable' only configures it to launch at boot (it does not start it now), 'reload' re-reads config of an already-running service, and 'is-active' only queries state.  —  Real-world: First action on most 'service is down' tickets: get it running again with 'systemctl start' before deeper investigation."
  },
  {
    "id": "stef-linux-032",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "What is the difference between 'systemctl enable nginx' and 'systemctl start nginx'?",
    "options": [
      "enable starts it now; start configures it for boot",
      "Both do exactly the same thing",
      "enable configures it to start automatically at boot; start activates it in the current session",
      "enable reloads the config; start restarts the process"
    ],
    "correctIndex": 2,
    "explanation": "'enable' creates the symlinks so the unit auto-starts at boot but does not affect the current running state; 'start' activates it now but does not persist across reboot. They are independent actions, which is why 'enable --now' exists to do both.  —  Real-world: A classic L2 mistake: starting a service after a fix but forgetting to enable it, so it disappears again after the next server reboot."
  },
  {
    "id": "stef-linux-033",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command checks ONLY whether a service is currently running, returning 'active' or 'inactive' without printing full status?",
    "options": [
      "systemctl is-active sshd",
      "systemctl status sshd",
      "systemctl is-enabled sshd",
      "systemctl list-units sshd"
    ],
    "correctIndex": 0,
    "explanation": "'is-active' returns the simple runtime state and a 0/non-zero exit code, ideal for scripts. 'is-enabled' reports the boot configuration (enabled/disabled), not the running state, and 'status' prints verbose output.  —  Real-world: Used inside monitoring scripts and quick CLI checks to confirm a service came back up after a restart."
  },
  {
    "id": "stef-linux-034",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You edited /etc/systemd/system/myapp.service to change the ExecStart line, then ran 'systemctl restart myapp'. systemctl warns the unit file changed on disk and the old behavior is still in effect. What did you forget?",
    "options": [
      "systemctl enable myapp",
      "systemctl reset-failed myapp",
      "systemctl daemon-reload",
      "systemctl mask myapp"
    ],
    "correctIndex": 2,
    "explanation": "After editing any unit file you must run 'systemctl daemon-reload' so systemd re-parses unit definitions into memory; otherwise restart still uses the cached old unit. 'enable' affects boot, 'reset-failed' clears a failed state, and 'mask' blocks the service entirely.  —  Real-world: Extremely common L2 confusion: 'I changed the config and restarted but nothing changed' — the fix is daemon-reload before the restart."
  },
  {
    "id": "stef-linux-035",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "'systemctl status myapp' shows: 'Active: failed (Result: exit-code) since ...' and 'Process: 4821 ExecStart=/usr/bin/myapp (code=exited, status=203/EXEC)'. What does status=203/EXEC most likely indicate?",
    "options": [
      "systemd could not execute the binary (missing file or not executable)",
      "A port the service needs is already in use",
      "The service exited cleanly with success",
      "The service ran out of memory and was killed"
    ],
    "correctIndex": 0,
    "explanation": "Exit code 203/EXEC means systemd failed to exec the ExecStart program — typically the binary path is wrong, the file is missing, or it lacks the execute permission bit. OOM kills show 'signal=KILL' / status 137, and a port conflict appears in the application's own log lines, not as 203/EXEC.  —  Real-world: Seen after a bad deployment where the binary path in the unit is wrong or the deployed file lost its +x permission."
  },
  {
    "id": "stef-linux-036",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A service won't start. journalctl shows: 'bind() to 0.0.0.0:8080 failed (98: Address already in use)'. What is the root cause and best next step?",
    "options": [
      "Another process is already bound to port 8080; find and stop it (e.g. with ss -ltnp)",
      "The config file has a syntax error; validate the config",
      "The service binary is missing; reinstall the package",
      "The disk is full; clear space in /var"
    ],
    "correctIndex": 0,
    "explanation": "Errno 98 'Address already in use' means the TCP port is occupied by another process. Use 'ss -ltnp' (or 'lsof -i:8080') to identify and stop the conflicting process, or change the port. It is not a syntax, missing-binary, or disk-space problem.  —  Real-world: Happens when an old instance of the app didn't fully terminate, or a second service is misconfigured onto the same port."
  },
  {
    "id": "stef-linux-037",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A user can reproduce an intermittent error in 'myapp' on demand. You want to watch only that unit's logs stream live while they click the failing button. Which command do you run?",
    "options": [
      "journalctl -f myapp",
      "journalctl --unit=myapp --since now",
      "journalctl -u myapp -f",
      "journalctl -p err -u myapp"
    ],
    "correctIndex": 2,
    "explanation": "'-u myapp' filters to that unit and '-f' follows the journal in real time, equivalent to 'tail -f' for systemd. 'journalctl -f myapp' is invalid syntax (myapp is treated as a match field, not a unit), and '-p err' filters by priority, not live-follow.  —  Real-world: Standard move when reproducing an issue: follow the unit's journal live while the user triggers the failing action so you catch the error as it happens."
  },
  {
    "id": "stef-linux-038",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A service was disabled by an admin so it can never be started even accidentally, and 'systemctl start' on it fails with 'Unit is masked'. What state is the unit in and how do you reverse it?",
    "options": [
      "It is inactive; run systemctl start",
      "It is failed; run systemctl reset-failed",
      "It is disabled; run systemctl enable",
      "It is masked; run systemctl unmask then start"
    ],
    "correctIndex": 3,
    "explanation": "A masked unit is symlinked to /dev/null and cannot be started by any means until unmasked with 'systemctl unmask'. Masking is stronger than disable: disabled units can still be started manually, but masked units refuse to start.  —  Real-world: You inherit a host where a predecessor masked a service to stop flapping; you must unmask it before recovery."
  },
  {
    "id": "stef-linux-039",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A service keeps restarting in a loop ('flapping'). 'systemctl status' shows repeated 'start request repeated too quickly' and 'Active: failed'. Which journalctl command best reveals WHY each start attempt fails?",
    "options": [
      "journalctl --disk-usage",
      "journalctl -u myapp -b -p err -xe",
      "systemctl list-dependencies myapp",
      "journalctl -k"
    ],
    "correctIndex": 1,
    "explanation": "'-u myapp -b' scopes to this unit since the current boot, '-p err' filters to error-priority entries, and '-xe' adds explanatory help and jumps to the end (most recent). 'journalctl -k' shows only kernel messages, and '--disk-usage' reports journal size — neither shows the app's failure reason.  —  Real-world: Flapping services are common on-call pages; systemd's rate limiter eventually gives up, so you must read the underlying error to break the loop."
  },
  {
    "id": "stef-linux-040",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "In 'systemctl status sshd' output, what does the 'Main PID:' field tell you?",
    "options": [
      "The total number of restarts since boot",
      "The parent PID of systemd itself",
      "The process ID systemd considers the primary process of the service",
      "The port number the service listens on"
    ],
    "correctIndex": 2,
    "explanation": "'Main PID' is the process ID of the service's primary process, which systemd tracks to determine liveness. It is not a restart count, not systemd's parent, and not a port number.  —  Real-world: Quickly grabbing the Main PID lets you inspect the live process with tools like ps, top, or lsof during an incident."
  },
  {
    "id": "stef-linux-041",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "'systemctl is-enabled myapp' returns 'enabled' but 'systemctl is-active myapp' returns 'inactive'. The server has not rebooted since the last crash. What does this combination mean?",
    "options": [
      "The service is configured to start at boot but is not running right now",
      "The unit file is corrupt and must be recreated",
      "The service is masked and cannot run",
      "The service is running but logging is disabled"
    ],
    "correctIndex": 0,
    "explanation": "'enabled' is the boot-time configuration; 'inactive' is the current runtime state. Together they mean it would start on the next boot but is currently stopped — likely it crashed/was stopped and nothing restarted it. Masked would report 'masked', not 'enabled'.  —  Real-world: Classic 'it's enabled but not running' ticket: you still need 'systemctl start' (and to investigate why it stopped) even though boot config is correct."
  },
  {
    "id": "stef-linux-042",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You need to apply new config to nginx with zero downtime, keeping existing connections alive. The unit supports reloading. Which command is correct?",
    "options": [
      "systemctl stop nginx && systemctl start nginx",
      "systemctl reload nginx",
      "systemctl daemon-reload",
      "systemctl mask nginx"
    ],
    "correctIndex": 1,
    "explanation": "'systemctl reload' sends the service its defined reload signal (e.g. SIGHUP for nginx) so it re-reads config without dropping the process or active connections. A stop/start causes downtime, and 'daemon-reload' reloads systemd's own unit definitions, not the application's config.  —  Real-world: Applying a vhost or upstream change on a busy web server during business hours where a hard restart would break live sessions."
  },
  {
    "id": "stef-linux-043",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A service fails to start. journalctl shows: 'Failed to start myapp.service: Unit nginx.service not found.' and the unit has 'Requires=nginx.service'. The required unit name is wrong for this host. What is the correct conclusion?",
    "options": [
      "The service is OOM-killed at startup",
      "The port is already in use",
      "A required dependency unit cannot be resolved, so myapp refuses to start",
      "The binary lacks execute permission"
    ],
    "correctIndex": 2,
    "explanation": "'Requires=' creates a hard dependency; if the named unit cannot be found or fails, the dependent unit will not start. The fix is to correct the dependency name (or ensure the required unit exists). This is a dependency-resolution failure, not OOM, a port conflict, or a permission issue.  —  Real-world: Seen when a unit is copied between distros (RHEL vs Ubuntu) where service names differ, breaking the Requires= chain."
  },
  {
    "id": "stef-linux-044",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You must review what a service logged yesterday between 09:00 and 12:00. Which journalctl invocation is correct?",
    "options": [
      "journalctl -u myapp --since \"yesterday 09:00\" --until \"yesterday 12:00\"",
      "journalctl -u myapp -b -1",
      "journalctl -u myapp -p info --lines=all",
      "journalctl -u myapp -f --since 09:00"
    ],
    "correctIndex": 0,
    "explanation": "'--since' and '--until' accept human-readable timestamps and bound the time window for the unit. '-f' would follow live (wrong for a past window), '-b -1' selects the previous boot (not a clock time), and '-p info' filters by priority, not time.  —  Real-world: Reconstructing a timeline for an RCA after users reported errors during a specific window the previous day."
  },
  {
    "id": "stef-linux-045",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "'systemctl status myapp' shows: 'Active: failed (Result: oom-kill)' and journalctl -k shows 'Out of memory: Killed process 5123 (myapp)'. The service had Restart=on-failure and is now flapping. What is the BEST first action?",
    "options": [
      "Run daemon-reload to refresh the unit",
      "Mask the service permanently",
      "Change the listening port to free memory",
      "Investigate and address memory exhaustion (raise limits, fix the leak, or add RAM); restart alone will just recur"
    ],
    "correctIndex": 3,
    "explanation": "An OOM kill means the kernel reclaimed memory by killing the process; simply restarting reproduces the same exhaustion and keeps it flapping. You must address the memory pressure (memory leak, too-low MemoryMax, insufficient host RAM). daemon-reload, masking, or changing ports does not solve memory exhaustion.  —  Real-world: On-call OOM incidents: the durable fix is capacity or a leak fix, while a temporary restart only buys minutes before the next kill."
  },
  {
    "id": "stef-linux-046",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "On a RHEL/CentOS system, which traditional /var/log file holds general system messages including service and kernel events?",
    "options": [
      "/var/log/syslog",
      "/var/log/messages",
      "/var/log/auth.log",
      "/var/log/httpd.log"
    ],
    "correctIndex": 1,
    "explanation": "On RHEL-family systems the general log is /var/log/messages, whereas Debian/Ubuntu use /var/log/syslog for the same purpose. /var/log/auth.log is a Debian auth log, and /var/log/httpd.log is not a standard path.  —  Real-world: Knowing the distro-specific log path saves time when SSHing into an unfamiliar RHEL host during triage."
  },
  {
    "id": "stef-linux-047",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "On a Debian/Ubuntu server, which /var/log file is the general-purpose system log equivalent to RHEL's /var/log/messages?",
    "options": [
      "/var/log/dmesg",
      "/var/log/messages",
      "/var/log/syslog",
      "/var/log/secure"
    ],
    "correctIndex": 2,
    "explanation": "Ubuntu/Debian write general system logs to /var/log/syslog. /var/log/messages is the RHEL equivalent (usually absent on Ubuntu), /var/log/dmesg holds boot-time kernel ring buffer output, and /var/log/secure is RHEL's auth log.  —  Real-world: Avoids the common error of looking for /var/log/messages on an Ubuntu box where it doesn't exist."
  },
  {
    "id": "stef-linux-048",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A service won't start after a config edit. journalctl -u myapp -xe shows: 'myapp[4501]: FATAL: line 12: unexpected token near }' then 'Active: failed (Result: exit-code)'. What is the cause?",
    "options": [
      "The service hit an OOM condition",
      "A dependency service is missing",
      "The listening port is already in use",
      "There is a configuration file syntax error the app rejects on startup"
    ],
    "correctIndex": 3,
    "explanation": "A FATAL parse/syntax message referencing a specific config line means the application refused to start because its config is malformed; fix line 12 and restart. This is distinct from OOM (which shows oom-kill/signal=KILL), a missing dependency, or a port-in-use (errno 98) error.  —  Real-world: Very common after a manual config change or a botched template render in a deployment pipeline."
  },
  {
    "id": "stef-linux-049",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "What is the purpose of 'systemctl daemon-reload' specifically?",
    "options": [
      "It reloads systemd's manager configuration and re-reads changed unit files into memory",
      "It restarts every running service on the host",
      "It reloads the application config of one service",
      "It reboots the machine"
    ],
    "correctIndex": 0,
    "explanation": "'daemon-reload' makes systemd re-read unit files and regenerate its in-memory dependency tree after units are added or edited; it does not restart services, reload an app's own config, or reboot. You still must restart the affected service for new ExecStart/options to take effect.  —  Real-world: Run after creating or editing any .service/.timer file so systemd is aware of the change before you restart the unit."
  },
  {
    "id": "stef-linux-050",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A service fails to start. journalctl shows: 'myapp[3300]: error: cannot open /etc/myapp/secret.key: Permission denied' and the unit failed. The file exists. What is the most likely fix?",
    "options": [
      "Reinstall the application package",
      "Increase the system memory",
      "Correct the file ownership/permissions so the service user can read it",
      "Open the firewall port"
    ],
    "correctIndex": 2,
    "explanation": "'Permission denied' on an existing file the service must read means the service's user/group lacks read access; fix ownership or mode (e.g. chown to the service user or adjust chmod). Reinstalling, adding RAM, or opening a port does not address a filesystem permission problem.  —  Real-world: Frequent after secrets or certs are copied in as root with 0600, leaving the unprivileged service account unable to read them."
  },
  {
    "id": "stef-linux-051",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Standard recovery procedure: a production service is reported down. Which ordered sequence is the most sound L2 approach?",
    "options": [
      "Reboot the server, then file the incident",
      "Immediately 'systemctl mask' the service to stop alerts",
      "Check 'systemctl status', read recent journalctl logs to identify the cause, attempt 'systemctl restart', then verify with 'is-active' and confirm recovery",
      "Disable the service and escalate to L3 without investigating"
    ],
    "correctIndex": 2,
    "explanation": "Best practice is observe (status + logs) to capture the cause, then act (restart), then verify (is-active / re-check status and the app endpoint). Rebooting blindly destroys evidence, masking hides the service, and disabling+escalating without any triage skips your L2 responsibility.  —  Real-world: The exact triage flow expected on an L2 on-call rotation: diagnose, recover, verify, and document before any escalation."
  },
  {
    "id": "stef-linux-052",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "You ran 'systemctl restart myapp' and it reports active, but users still hit the OLD configuration. daemon-reload was already done and the config file on disk is correct. The unit uses EnvironmentFile=/etc/myapp/env. What is a likely explanation?",
    "options": [
      "systemctl restart never re-reads EnvironmentFile",
      "There are multiple instances/processes still bound (a stale process survived restart) or the app caches config and needs a full stop/start",
      "journalctl is showing cached logs",
      "is-active is reporting a false positive"
    ],
    "correctIndex": 1,
    "explanation": "If a previous process didn't terminate cleanly (orphaned/stale PID still serving) or the app caches config in memory and only reloads on a clean stop/start, restart can appear successful while old config remains live. Verify with 'ss -ltnp'/ps for stale PIDs and do a full stop then start. EnvironmentFile is in fact re-read on restart, so the first option is false.  —  Real-world: The frustrating 'I restarted it but the old config is still active' ticket — usually a lingering process or an app that only re-reads config on a clean start."
  },
  {
    "id": "stef-linux-053",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "What does logrotate primarily do?",
    "options": [
      "Encrypts log files for compliance",
      "Streams logs to a remote SIEM in real time",
      "Periodically rotates, compresses, and prunes log files to prevent them from filling the disk",
      "Parses logs and raises alerts on errors"
    ],
    "correctIndex": 2,
    "explanation": "logrotate renames/rotates logs on a schedule, optionally compresses old ones, and deletes those beyond a retention limit so /var/log does not grow unbounded. It is not an encryption tool, a log shipper, or an alerting engine.  —  Real-world: Prevents the 'disk full because /var/log/app.log grew to 40 GB' incident that itself can take a service down."
  },
  {
    "id": "stef-linux-054",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "After a logrotate run, an application keeps writing to the old (now-renamed) log file and the new file stays empty. Which logrotate directive most commonly fixes this for apps that don't reopen their log file?",
    "options": [
      "compress",
      "missingok",
      "rotate 7",
      "copytruncate (or a postrotate signal telling the app to reopen its log)"
    ],
    "correctIndex": 3,
    "explanation": "Apps that hold an open file handle keep writing to the rotated (renamed) inode. 'copytruncate' copies then truncates the original file in place so the app's handle stays valid, or alternatively a postrotate hook signals the app to reopen its log. 'compress' only gzips old logs, 'missingok' suppresses errors for absent logs, and 'rotate 7' sets retention count.  —  Real-world: Explains 'logs stopped appearing after the nightly rotation' tickets for daemons that don't handle SIGHUP log reopen."
  },
  {
    "id": "stef-linux-055",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You want only the error-and-worse messages for a unit since the current boot. Which command is correct?",
    "options": [
      "journalctl -u myapp --since boot",
      "journalctl -u myapp -p info -b -1",
      "journalctl -u myapp -f -p warning",
      "journalctl -u myapp -b -p err"
    ],
    "correctIndex": 3,
    "explanation": "'-b' limits to the current boot and '-p err' shows priority 'err' and higher (crit, alert, emerg). '--since boot' is not valid time syntax, '-b -1' is the previous boot, and '-p info' is lower priority (more verbose) than err.  —  Real-world: Cuts through noisy logs to surface just the failures from the running boot during fast incident triage."
  },
  {
    "id": "stef-linux-056",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "'systemctl status myapp' shows: 'Active: active (running)' yet users report the app is unreachable, and journalctl shows the app logging 'listening on 127.0.0.1:8080'. What is the most likely issue?",
    "options": [
      "The service is masked",
      "The unit needs daemon-reload",
      "The Main PID is zero",
      "The service is healthy at the process level but bound only to loopback (127.0.0.1) instead of 0.0.0.0, so remote clients can't connect"
    ],
    "correctIndex": 3,
    "explanation": "systemd reports the process as running because it is — but binding to 127.0.0.1 makes it reachable only from localhost, so external users fail to connect. This is an application bind-address/config issue, not a masked unit, a daemon-reload need, or a PID problem.  —  Real-world: A real gap between 'service is up' and 'service is usable' — L2 must check the bind address and not stop at the green 'active (running)' line."
  },
  {
    "id": "stef-linux-057",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A unit has 'Restart=always' and 'StartLimitIntervalSec=10' with 'StartLimitBurst=5'. The service crashes instantly on startup. After several seconds systemctl reports 'failed' with 'start request repeated too quickly'. Besides fixing the crash, which command clears the rate-limit failed state so systemd will attempt starts again?",
    "options": [
      "systemctl daemon-reload",
      "systemctl reset-failed myapp",
      "systemctl reload myapp",
      "systemctl is-failed myapp"
    ],
    "correctIndex": 1,
    "explanation": "Once the start-limit burst is exceeded, systemd latches the unit as failed and stops retrying; 'systemctl reset-failed' clears that latched state so start attempts resume (after you fix the underlying crash). daemon-reload re-reads units, reload re-reads app config, and is-failed only queries the state.  —  Real-world: On-call recovery of a flapping service: after patching the root cause you must reset-failed (or restart) to escape systemd's rate-limit lockout."
  },
  {
    "id": "stef-linux-058",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "An app writes its own log to /var/log/myapp/app.log (not the journal). Users report errors 'a few minutes ago' but 'journalctl -u myapp' shows nothing relevant. What is the correct reasoning?",
    "options": [
      "The journal is corrupt and must be rebuilt",
      "The service must be masked to enable logging",
      "journalctl only works after a reboot",
      "The application logs to its own file rather than stdout/journald, so you must inspect /var/log/myapp/app.log directly"
    ],
    "correctIndex": 3,
    "explanation": "Not all applications send output to stdout/stderr (which journald captures); many write directly to their own files under /var/log/<app>/. When 'journalctl -u' is empty but the app is clearly active, check the application's own log files. The journal being corrupt or reboot-dependent is not implied here.  —  Real-world: Frequent with legacy or Java/Tomcat-style apps whose real errors live in app-specific logs, not the systemd journal."
  },
  {
    "id": "stef-linux-059",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A new application build has been deployed and the app must do a clean process bounce to load the new code. The unit is already running. Which single command stops it and starts it again?",
    "options": [
      "systemctl reload myapp",
      "systemctl restart myapp",
      "systemctl enable myapp",
      "systemctl daemon-reload"
    ],
    "correctIndex": 1,
    "explanation": "'restart' performs a stop (if active) followed by a start in one command. 'reload' only re-reads config without restarting the process, 'enable' configures boot behavior, and 'daemon-reload' refreshes systemd's unit definitions rather than the service.  —  Real-world: The everyday recovery command after deploying a code change that requires a clean process bounce."
  },
  {
    "id": "stef-linux-060",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "In 'systemctl status myapp' output, what does the 'Active:' line tell you at a glance?",
    "options": [
      "The high-level state (e.g. active (running), inactive (dead), failed) and how long it has been in that state",
      "The list of users currently connected to the service",
      "The exact contents of the application config file",
      "Only the absolute path to the unit file"
    ],
    "correctIndex": 0,
    "explanation": "The 'Active:' line summarizes the unit's current high-level state and the timestamp/duration since it entered that state, which is the first thing to read during triage. It is not the unit file path, a connected-users list, or the config contents.  —  Real-world: The 'Active:' line is the fastest signal on a status check — 'active (running)' vs 'failed' immediately steers your next step in an incident."
  },
  {
    "id": "stef-linux-061",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "You need to search a large application log for the word \"error\" regardless of case (Error, ERROR, error). Which command does this?",
    "options": [
      "grep -i error app.log",
      "grep -v error app.log",
      "grep -c error app.log",
      "grep -E error app.log"
    ],
    "correctIndex": 0,
    "explanation": "grep -i makes the match case-insensitive, catching Error/ERROR/error. -v inverts the match (lines WITHOUT error), -c only counts matches, and -E enables extended regex but stays case-sensitive.  —  Real-world: On a ticket where developers logged errors inconsistently, -i ensures you don't miss capitalized variants while triaging an incident."
  },
  {
    "id": "stef-linux-062",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A teammate wants to find every line that does NOT contain the string \"DEBUG\" so the noisy debug lines are hidden. Which grep flag inverts the match?",
    "options": [
      "grep -n DEBUG app.log",
      "grep -r DEBUG app.log",
      "grep -A DEBUG app.log",
      "grep -v DEBUG app.log"
    ],
    "correctIndex": 3,
    "explanation": "grep -v prints lines that do NOT match the pattern, filtering out the DEBUG lines. -n adds line numbers, -r recurses directories, and -A needs a numeric argument for trailing context.  —  Real-world: When an app floods its log with DEBUG entries, piping through grep -v DEBUG quickly isolates the WARN/ERROR lines that matter on a call."
  },
  {
    "id": "stef-linux-063",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You are handed an Apache access log and asked: \"How many requests in this log returned HTTP 500?\" The status code is the 9th space-separated field. Which command counts them correctly?",
    "options": [
      "awk '$9 == 500 {print count}' access.log",
      "grep -c 500 access.log",
      "awk '$9 == 500 {count++} END {print count}' access.log",
      "awk '{sum += $9} END {print sum}' access.log"
    ],
    "correctIndex": 2,
    "explanation": "Testing $9 == 500 and incrementing a counter, then printing it in END, counts only lines whose status field equals 500. grep -c 500 would wrongly match 500 anywhere (bytes, URLs, timestamps), and summing $9 adds the codes together instead of counting.  —  Real-world: During a 5xx spike investigation, this exact one-liner tells you how many server errors occurred so you can quantify customer impact in the incident ticket."
  },
  {
    "id": "stef-linux-064",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "An application process (PID 4821) is hung but you want it to flush buffers and shut down cleanly first, only force-killing if that fails. What is the correct FIRST step?",
    "options": [
      "kill -9 4821",
      "kill -15 4821",
      "kill -HUP 4821",
      "kill -0 4821"
    ],
    "correctIndex": 1,
    "explanation": "kill -15 (SIGTERM) is the default, graceful signal that asks the process to clean up and exit, allowing it to flush data and close files. kill -9 (SIGKILL) cannot be caught and gives no chance to clean up, -HUP usually triggers a config reload, and -0 only checks if the process exists.  —  Real-world: Standard L2 recovery procedure: always try SIGTERM first so the app can commit in-flight transactions before you escalate to SIGKILL."
  },
  {
    "id": "stef-linux-065",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "SIGTERM has been sent twice to a frozen process but it refuses to die and is still blocking a port the service needs. Which signal forces immediate termination that the process cannot ignore or trap?",
    "options": [
      "kill -9 (SIGKILL)",
      "kill -1 (SIGHUP)",
      "kill -2 (SIGINT)",
      "kill -15 (SIGTERM)"
    ],
    "correctIndex": 0,
    "explanation": "SIGKILL (9) is handled by the kernel and cannot be caught, blocked, or ignored, so it always terminates the process. SIGHUP, SIGINT, and SIGTERM can all be trapped or ignored by an application, which is exactly why they failed here.  —  Real-world: When a deadlocked Java process won't honor SIGTERM during a restart, kill -9 is the last resort to free the port before the service can come back up."
  },
  {
    "id": "stef-linux-066",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "free -h shows:\n```\n              total        used        free      shared  buff/cache   available\nMem:           15Gi       3.1Gi       0.4Gi       0.2Gi        11Gi        11Gi\nSwap:         2.0Gi          0B       2.0Gi\n```\nA junior says \"only 0.4Gi free, we're out of memory!\" What is the correct interpretation?",
    "options": [
      "Correct — 0.4Gi free means the system is critically low and will start swapping",
      "Swap is full, which proves a memory leak is in progress",
      "The 11Gi in buff/cache is reclaimable; 'available' (11Gi) is the real free memory, so the system is fine",
      "used (3.1Gi) plus free (0.4Gi) should equal total, so the numbers are corrupt"
    ],
    "correctIndex": 2,
    "explanation": "Linux uses otherwise-idle RAM for buff/cache, which is instantly reclaimable when applications need it; the 'available' column already accounts for this and shows 11Gi truly usable. Low 'free' is normal and healthy, and swap here is 0B used, not full.  —  Real-world: A very common false alarm on monitoring tickets — teaching the team to read 'available' instead of 'free' prevents needless 3 a.m. escalations."
  },
  {
    "id": "stef-linux-067",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A service died unexpectedly. In dmesg you find:\n```\n[12345.678] Out of memory: Killed process 8123 (java) total-vm:8200000kB, anon-rss:7900000kB\n[12345.679] oom_reaper: reaped process 8123 (java)\n```\nWhat happened and what is the correct conclusion?",
    "options": [
      "The application called exit() normally; no action needed",
      "The kernel OOM killer terminated the java process because the system ran out of memory; investigate the memory growth or add memory/limits",
      "A user ran kill -9 8123 manually; check sudo logs for who did it",
      "The disk filled up, which forced the kernel to kill the process"
    ],
    "correctIndex": 1,
    "explanation": "The 'Out of memory: Killed process' line is the signature of the kernel's OOM killer reclaiming memory by terminating the largest offender (here java using ~7.9GB RSS). It is not a manual kill, a normal exit, or a disk-space issue.  —  Real-world: When a JVM service vanishes with no application stack trace, checking dmesg for the OOM killer is the fastest way to root-cause it and justify a heap/limit change to L3."
  },
  {
    "id": "stef-linux-068",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A 4-core server shows this in top:\n```\ntop - 14:02:11 up 9 days,  load average: 16.04, 15.88, 14.92\n```\nWhat does this load average indicate?",
    "options": [
      "CPU usage is 16%, which is healthy",
      "16 users are logged in",
      "The machine has been up for 16 days",
      "On average ~16 tasks are competing for runtime against only 4 cores, so the system is heavily overloaded (~4x)"
    ],
    "correctIndex": 3,
    "explanation": "Load average is the average number of runnable/uninterruptible tasks, not a percentage; 16 on a 4-core box means demand is roughly 4x capacity, so processes are queuing for CPU. It is unrelated to user count or uptime.  —  Real-world: A textbook capacity ticket: comparing load average to core count (nproc) tells you instantly whether the box is CPU-saturated before you dig into which process is to blame."
  },
  {
    "id": "stef-linux-069",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "In top, you see a process with VIRT 12.5g and RES 480m. Which statement is correct about RES vs VIRT?",
    "options": [
      "VIRT is the physical RAM actually used; RES is virtual address space",
      "RES and VIRT always mean the same thing",
      "RES (Resident Set Size) is the physical RAM actually used; VIRT is the total virtual address space, much of which may never be in RAM",
      "VIRT must always be smaller than RES"
    ],
    "correctIndex": 2,
    "explanation": "RES is the resident set — actual physical memory the process occupies — while VIRT includes all mapped memory (code, libraries, reserved-but-unused space) and is typically much larger. A large VIRT is usually harmless; RES is what you watch for real memory pressure.  —  Real-world: L2 engineers reassure stakeholders that a Java process showing 12g VIRT but 480m RES is not consuming 12g of RAM, avoiding a misdirected memory escalation."
  },
  {
    "id": "stef-linux-070",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "Users report the app is slow. You run top and the very first process listed (sorted by %CPU) shows:\n```\n  PID USER      PR  NI    VIRT    RES   %CPU  %MEM     TIME+ COMMAND\n 9043 appuser   20   0  2310m   890m  398.7   5.6  812:33.10 report-gen\n```\non a server with 4 cores. What is the correct reading?",
    "options": [
      "report-gen is using ~398% CPU, i.e. saturating roughly 4 cores — it is the CPU-bound culprit",
      "report-gen uses 398 MB of memory",
      "%CPU over 100 is a display bug; ignore it",
      "report-gen is idle because %MEM is only 5.6"
    ],
    "correctIndex": 0,
    "explanation": "In top, %CPU can exceed 100% because it sums across cores; 398.7% means the process is consuming nearly all of 4 cores. It is not a memory figure (that's %MEM/RES) and not a display bug.  —  Real-world: Pinpointing report-gen as the CPU hog lets you renice it, throttle it, or schedule it off-hours, directly addressing the slowness ticket."
  },
  {
    "id": "stef-linux-071",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command lists ALL processes on the system in the BSD-style format showing USER, PID, %CPU, %MEM and the full command?",
    "options": [
      "ps -e",
      "ps T",
      "ps a",
      "ps aux"
    ],
    "correctIndex": 3,
    "explanation": "ps aux is the BSD syntax that shows every process for all users with the USER/%CPU/%MEM columns and the command. ps -e lists all PIDs but in the minimal default format, while ps a and ps T are restricted to terminal-attached processes.  —  Real-world: ps aux is the go-to first command when a user reports a runaway process and you need to see ownership and resource usage at a glance."
  },
  {
    "id": "stef-linux-072",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You want to find the PID of the running nginx master process. A colleague suggests `ps -ef | grep nginx`. What is the well-known gotcha with this command?",
    "options": [
      "The grep command itself often appears in the output as a matching line (the 'grep nginx' process), which can be mistaken for the target",
      "ps -ef does not show PIDs",
      "grep cannot read piped input",
      "ps -ef only shows processes for the current user"
    ],
    "correctIndex": 0,
    "explanation": "Because grep is itself a running process whose argument contains 'nginx', it frequently matches its own command line. The common fix is `grep '[n]ginx'` or using `pgrep nginx`. ps -ef does show PIDs and all users' processes, and grep reads piped input fine.  —  Real-world: Knowing this avoids the classic mistake of acting on the grep PID instead of the real service when scripting a restart check."
  },
  {
    "id": "stef-linux-073",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "An access log uses commas as separators. You need the first field (the client IP) from each line. Which awk command extracts it?",
    "options": [
      "awk '{print $1}' access.csv",
      "awk -F, '{print $NF}' access.csv",
      "awk -F, '{print $1}' access.csv",
      "awk '-F,' '{print NF}' access.csv"
    ],
    "correctIndex": 2,
    "explanation": "-F, sets the field separator to a comma, and $1 prints the first field. Without -F, awk splits on whitespace and breaks comma-delimited data; $NF would print the LAST field, and NF (no $) prints the field count, not the value.  —  Real-world: Parsing CSV-style logs or exported reports to pull out client IPs for a security or rate-limiting investigation is routine L2 work."
  },
  {
    "id": "stef-linux-074",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A pipe-delimited billing log has the transaction amount in the 5th column. You need the total of all amounts. Which command sums that column?",
    "options": [
      "awk -F'|' '{print $5}' billing.log",
      "awk -F'|' '{count++} END {print count}' billing.log",
      "awk '{sum += $5} END {print sum}' billing.log",
      "awk -F'|' '{sum += $5} END {print sum}' billing.log"
    ],
    "correctIndex": 3,
    "explanation": "Accumulating $5 into sum on every line and printing sum in the END block totals the column, with -F'|' correctly splitting on the pipe. The first option only prints each value, the second counts rows, and the third omits -F'|' so $5 is wrong for pipe-delimited data.  —  Real-world: Quickly reconciling a total from a delimited export — e.g. confirming a day's transaction sum during a billing-discrepancy ticket."
  },
  {
    "id": "stef-linux-075",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "You need to replace every occurrence of the string \"localhost\" with \"db01\" on each line of config.txt and print the result to the screen (without modifying the file). Which command is correct?",
    "options": [
      "sed 's/localhost/db01/' config.txt",
      "sed 's/localhost/db01/g' config.txt",
      "sed -i 's/localhost/db01/g' config.txt",
      "sed 'd/localhost/db01/g' config.txt"
    ],
    "correctIndex": 1,
    "explanation": "The g flag makes the substitution global, replacing EVERY occurrence on each line, and without -i it prints to stdout rather than editing the file. Option 1 replaces only the first match per line, -i edits in place (modifying the file), and 'd/.../' is invalid syntax.  —  Real-world: Previewing a config change with sed before committing it lets you verify the substitution is correct prior to an in-place edit on a production host."
  },
  {
    "id": "stef-linux-076",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You must edit a config file in place on a server, changing debug=false to debug=true and saving the change directly to the file. Which command does this?",
    "options": [
      "grep -i 's/debug=false/debug=true/' app.conf",
      "sed 's/debug=false/debug=true/' app.conf",
      "sed -n 's/debug=false/debug=true/' app.conf",
      "sed -i 's/debug=false/debug=true/' app.conf"
    ],
    "correctIndex": 3,
    "explanation": "sed -i performs the substitution and writes it back into the file in place. Without -i the change only prints to stdout, -n suppresses output entirely, and grep does not perform substitutions at all.  —  Real-world: Toggling a debug flag directly in a service's config during a troubleshooting session, then restarting the service, is a frequent L2 task."
  },
  {
    "id": "stef-linux-077",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A config file has blank lines and full-line comments you want to strip. Which sed command deletes all lines that begin with a # character?",
    "options": [
      "sed '/^#/d' file.conf",
      "sed 's/#//g' file.conf",
      "sed -n '/^#/p' file.conf",
      "sed '/#/s///' file.conf"
    ],
    "correctIndex": 0,
    "explanation": "/^#/d matches lines starting with # (^ anchors to line start) and d deletes them. 's/#//g' only removes the # characters but keeps the line, '-n ... p' would print only comment lines, and the last option is incomplete/incorrect substitution.  —  Real-world: Producing a clean, comment-free view of a verbose config (like sshd_config) to quickly see only the active settings during an audit."
  },
  {
    "id": "stef-linux-078",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "You are tailing a huge multi-gigabyte log and need every line containing \"timeout\", plus the 3 lines AFTER each match for context, and you only care about matches case-insensitively. Which command is correct?",
    "options": [
      "grep -i -B 3 timeout big.log",
      "grep -v -A 3 timeout big.log",
      "grep -i -A 3 timeout big.log",
      "grep -c -A 3 timeout big.log"
    ],
    "correctIndex": 2,
    "explanation": "-A 3 prints 3 lines After each match and -i makes it case-insensitive. -B 3 would print lines Before instead, -v inverts (showing non-matching lines), and -c only outputs a count and ignores the -A context.  —  Real-world: When a timeout error is followed by a stack trace on the next lines, -A context captures the trace in one command instead of manually scrolling a giant log."
  },
  {
    "id": "stef-linux-079",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You need to recursively search an entire directory tree of microservice logs under /var/log/app for the unique request ID \"req-9f3a\" and see which file and line each hit is on. Which command fits best?",
    "options": [
      "grep req-9f3a /var/log/app",
      "grep -rn req-9f3a /var/log/app",
      "grep -v req-9f3a /var/log/app",
      "grep -c req-9f3a /var/log/app"
    ],
    "correctIndex": 1,
    "explanation": "-r recurses through all files in the directory tree and -n prints the line number; grep also shows the filename automatically when searching multiple files. Plain grep on a directory errors without -r, -v inverts the match, and -c only counts.  —  Real-world: Tracing a single request ID across many service logs is how you reconstruct a distributed transaction's path during an incident."
  },
  {
    "id": "stef-linux-080",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A runaway batch job is hammering the CPU but you must NOT kill it (it's mid-transaction). You want to lower its CPU priority so interactive work gets served first. The job is PID 5567. Which command does this correctly?",
    "options": [
      "renice -n 19 -p 5567",
      "renice -n -20 -p 5567",
      "nice -n 19 5567",
      "kill -19 5567"
    ],
    "correctIndex": 0,
    "explanation": "renice changes the priority of an ALREADY-running process; a higher niceness (19 is the max, lowest priority) makes it yield CPU to others. renice -20 would RAISE its priority, nice is only for launching new commands (not an existing PID), and kill -19 is SIGSTOP which pauses the process entirely.  —  Real-world: De-prioritizing a heavy report job with renice keeps a box responsive for users without aborting the job and losing its progress."
  },
  {
    "id": "stef-linux-081",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "Which statement about nice values and process priority on Linux is correct?",
    "options": [
      "A higher nice value (toward +19) means HIGHER priority and more CPU",
      "Any user can renice their own process to -20 to speed it up",
      "A lower nice value (toward -20) means HIGHER priority; only root can set a negative niceness",
      "nice values range from 0 to 100"
    ],
    "correctIndex": 2,
    "explanation": "Niceness ranges from -20 (highest priority) to +19 (lowest), so a LOWER value gets more CPU, and setting a negative (more favorable) niceness requires root. Non-root users can only increase niceness (make a process nicer), not decrease it below its current value.  —  Real-world: Understanding that a normal service account cannot grant itself -20 priority explains why a 'speed up my job' request may need a privileged change or sudo."
  },
  {
    "id": "stef-linux-082",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "After editing nginx's configuration, you want the running master process to reload its config WITHOUT a full restart or dropping connections. Which signal is conventionally used?",
    "options": [
      "kill -9 (SIGKILL)",
      "kill -15 (SIGTERM)",
      "kill -STOP (SIGSTOP)",
      "kill -HUP (SIGHUP)"
    ],
    "correctIndex": 3,
    "explanation": "Many daemons (nginx, sshd, rsyslog) treat SIGHUP as 'reload configuration' without exiting. SIGKILL and SIGTERM would terminate the process, and SIGSTOP merely suspends it.  —  Real-world: Reloading nginx with kill -HUP after a config tweak applies changes with zero downtime, ideal during business hours."
  },
  {
    "id": "stef-linux-083",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You need to terminate ALL running processes named \"worker\" at once by name (not by looking up each PID). Which command does this?",
    "options": [
      "kill worker",
      "pkill worker",
      "kill -l worker",
      "nice worker"
    ],
    "correctIndex": 1,
    "explanation": "pkill matches processes by name (and other attributes) and signals them all, defaulting to SIGTERM; killall worker behaves similarly. kill expects a PID not a name, kill -l only lists signal names, and nice launches a command.  —  Real-world: Cleanly stopping a pool of stuck worker processes by name is faster than enumerating PIDs during a hung-queue incident."
  },
  {
    "id": "stef-linux-084",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "On an 8-core host, uptime shows `load average: 2.10, 4.50, 7.80`. Combined with normal CPU idle in top, what is the most accurate conclusion?",
    "options": [
      "Load is well under 8 cores and the 1/5/15-min trend (2.10 < 4.50 < 7.80) shows load is DECREASING over time — the spike is recovering",
      "The system is currently overloaded and getting worse",
      "Load average of 7.80 means 7.8% CPU usage",
      "The three numbers are the load on cores 1, 5, and 15"
    ],
    "correctIndex": 0,
    "explanation": "The three figures are the 1-, 5-, and 15-minute averages; here the most recent (2.10) is lowest while the 15-min (7.80) is highest, indicating load has been falling. All three are below the 8-core capacity, so the box is not saturated, and the numbers are not percentages or per-core figures.  —  Real-world: Reading the load-average trend tells you whether an incident is escalating or already subsiding before you decide to wake up L3."
  },
  {
    "id": "stef-linux-085",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You want to confirm how much memory is genuinely used vs cached by reading the kernel's own source. Which file exposes detailed memory statistics like MemFree, Buffers, Cached, and SwapTotal?",
    "options": [
      "/etc/meminfo",
      "/var/log/meminfo",
      "/proc/meminfo",
      "/sys/memory"
    ],
    "correctIndex": 2,
    "explanation": "/proc/meminfo is the kernel-provided virtual file that lists MemTotal, MemFree, Buffers, Cached, SwapTotal/SwapFree and more; free -h reads from it. /etc holds config, /var/log holds logs, and /sys/memory is not the standard path for these stats.  —  Real-world: When free -h output is ambiguous, reading /proc/meminfo gives the raw numbers to settle whether memory pressure is real on a flagged host."
  },
  {
    "id": "stef-linux-086",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "free -h on a database server shows:\n```\n              total        used        free      shared  buff/cache   available\nMem:           31Gi        28Gi       0.3Gi       0.1Gi       2.6Gi       2.1Gi\nSwap:          4.0Gi       3.8Gi       0.2Gi\n```\nWhich conclusion is best supported?",
    "options": [
      "Memory is healthy because buff/cache exists",
      "Swap usage of 3.8Gi is always normal and not a concern",
      "Real memory pressure is high: 'available' is only ~2.1Gi and swap is almost fully used (3.8/4.0Gi), suggesting the system is short on RAM",
      "The server has no swap configured"
    ],
    "correctIndex": 2,
    "explanation": "Here both 'available' (~2.1Gi of 31Gi) is low AND swap is 3.8Gi of 4.0Gi used, which together indicate genuine memory exhaustion — unlike the healthy case where free is low but available and swap are fine. Heavy active swap use on a DB box is a real performance red flag.  —  Real-world: This pattern justifies escalating for more RAM or investigating a leak, and explains user-reported slowness from swap thrashing on a production database."
  },
  {
    "id": "stef-linux-087",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You suspect a CPU-bound process. You run `ps -eo pid,comm,%cpu --sort=-%cpu | head -5` and get:\n```\n  PID COMMAND         %CPU\n 7781 ffmpeg          99.4\n 2210 postgres         3.2\n  998 sshd             0.1\n```\nWhat is the correct interpretation and next step?",
    "options": [
      "postgres is the problem; restart the database",
      "sshd is leaking CPU; kill it immediately",
      "The list is sorted ascending, so sshd is the top consumer",
      "ffmpeg is pegging a CPU at ~99%; investigate or renice/stop that encoding job"
    ],
    "correctIndex": 3,
    "explanation": "--sort=-%cpu sorts descending, so the first row (ffmpeg at 99.4%) is the top CPU consumer. Killing sshd would lock you out, postgres at 3.2% is negligible, and the sort is descending not ascending.  —  Real-world: Using ps with --sort is a quick, scriptable way to nail the CPU hog on a headless server where you can't watch top interactively."
  },
  {
    "id": "stef-linux-088",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "You need a single pipeline that finds all \"FATAL\" lines in app.log, extracts the 4th whitespace-separated field (the module name), and counts how many fatals came from each module. Which pipeline is correct?",
    "options": [
      "grep FATAL app.log | awk '{print $4}' | sort | uniq -c",
      "grep -v FATAL app.log | awk '{print $4}' | uniq -c",
      "awk '{print $4}' app.log | grep FATAL | sort",
      "grep FATAL app.log | awk -F4 '{print}' | wc -l"
    ],
    "correctIndex": 0,
    "explanation": "grep FATAL filters to fatal lines, awk '{print $4}' pulls the module field, and sort | uniq -c groups and counts per module. Option 2 inverts the match (-v) and skips sort (uniq -c needs sorted input), option 3 extracts before filtering and never counts, and -F4 is an invalid separator that doesn't count occurrences.  —  Real-world: Aggregating fatal errors by component during an outage shows which subsystem is failing most, focusing the root-cause effort."
  },
  {
    "id": "stef-linux-089",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "In htop you see the colored CPU meter bars and a 'Load average' line at the top. A new hire asks what the RES column and the load average tell you. Which pairing is correct?",
    "options": [
      "Load average is the percentage of RAM used; RES is swap size",
      "Load average reflects how many tasks are competing for CPU over time; RES is the physical RAM a process currently occupies",
      "Load average and RES both measure disk I/O",
      "RES is the process's virtual address space; load average is CPU temperature"
    ],
    "correctIndex": 1,
    "explanation": "Load average measures runnable/blocked task demand over 1/5/15 minutes (not a RAM percentage), and RES is the resident physical memory of a process. Neither measures disk I/O or temperature, and RES is physical (not virtual) memory.  —  Real-world: Coaching a junior on htop's key fields builds the muscle memory to triage a 'server feels slow' ticket quickly."
  },
  {
    "id": "stef-linux-090",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A production API node is unresponsive. top shows load average 24 on a 4-core box, one java PID at ~390% CPU and climbing RES, and dmesg shows no OOM events yet. You must restore service with the least data loss. What is the best sequenced action?",
    "options": [
      "Immediately kill -9 the java PID to free CPU fastest",
      "Send SIGTERM (kill -15) to the java PID to let it shut down gracefully; if it doesn't exit within a reasonable window, escalate to kill -9, and capture a thread dump for L3",
      "Reboot the entire server right away",
      "renice the java process to +19 and take no further action"
    ],
    "correctIndex": 1,
    "explanation": "Graceful SIGTERM first lets the JVM flush state and complete in-flight work, with SIGKILL reserved as a fallback if it ignores the request — this minimizes data loss while still restoring service. An immediate kill -9 risks corruption/lost transactions, a full reboot is heavier-handed and slower, and renicing alone won't recover a saturated, climbing process.  —  Real-world: This is the canonical L2 on-call decision: balance speed of recovery against data integrity, and grab a thread dump so L3 can root-cause the runaway thread afterward."
  },
  {
    "id": "stef-linux-091",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "In a crontab line, the five time fields appear in a fixed order before the command. What is that order from left to right?",
    "options": [
      "minute, hour, day-of-month, month, day-of-week",
      "hour, minute, day-of-month, month, day-of-week",
      "minute, hour, month, day-of-month, day-of-week",
      "second, minute, hour, day-of-month, month"
    ],
    "correctIndex": 0,
    "explanation": "Standard cron fields are minute, hour, day-of-month, month, day-of-week. Cron has no seconds field, and day-of-month comes before month, ruling out the other options.  —  Real-world: When reviewing a colleague's crontab during a change request, misreading the field order is the most common reason a scheduled job runs at the wrong time."
  },
  {
    "id": "stef-linux-092",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "A user runs `crontab -r` by accident. What just happened?",
    "options": [
      "Their crontab was opened in an editor for review",
      "Their entire user crontab was deleted with no confirmation prompt",
      "All cron jobs on the system were reloaded",
      "The crontab was printed to standard output"
    ],
    "correctIndex": 1,
    "explanation": "`crontab -r` removes the invoking user's crontab entirely and does not ask for confirmation. `-e` edits and `-l` lists; neither deletes, which is why the dangerous proximity of `-r` to `-e` on the keyboard causes accidents.  —  Real-world: A frequent L2 ticket is a user who 'lost all their scheduled jobs' after fat-fingering `crontab -r` instead of `crontab -e`, requiring restoration from backup."
  },
  {
    "id": "stef-linux-093",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command lists the current user's crontab entries without opening an editor?",
    "options": [
      "crontab -e",
      "crontab -r",
      "crontab -l",
      "cron --list"
    ],
    "correctIndex": 2,
    "explanation": "`crontab -l` prints the current user's crontab to standard output. `-e` opens the editor, `-r` removes the crontab, and `cron --list` is not a valid command.  —  Real-world: First step when investigating a scheduled job ticket is `crontab -l` for the relevant user to confirm what is actually scheduled."
  },
  {
    "id": "stef-linux-094",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "What does the schedule `*/5 * * * *` mean?",
    "options": [
      "Once every 5 hours",
      "At minute 5 of every hour",
      "Every 5 days",
      "Every 5 minutes"
    ],
    "correctIndex": 3,
    "explanation": "`*/5` in the minute field is a step value meaning 'every 5th minute' (0,5,10,...), so the job runs every 5 minutes. 'At minute 5' would be just `5` in the minute field, not `*/5`.  —  Real-world: Health-check and monitoring scripts are commonly scheduled with `*/5 * * * *`; confusing this with 'minute 5 only' leads to missed monitoring coverage."
  },
  {
    "id": "stef-linux-095",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A job must run at 08:00, 12:00, and 17:00 every weekday (Monday-Friday). Which crontab line is correct?",
    "options": [
      "0 8,12,17 * * 1-5 /opt/app/run.sh",
      "0 8-17 * * 1-5 /opt/app/run.sh",
      "8,12,17 0 * * 1-5 /opt/app/run.sh",
      "0 8,12,17 1-5 * * /opt/app/run.sh"
    ],
    "correctIndex": 0,
    "explanation": "Minute 0, hours as a list 8,12,17, any day-of-month and month, day-of-week 1-5 (Mon-Fri) is correct. `8-17` would run hourly across that range, swapping minute/hour breaks the times, and `1-5` in the day-of-month field restricts to the 1st-5th of the month instead of weekdays.  —  Real-world: Business-hours batch jobs (report generation, syncs) are frequently scheduled this way, and putting the weekday range in the wrong field is a classic misconfiguration found during incident review."
  },
  {
    "id": "stef-linux-096",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "How does the format of a line in `/etc/crontab` differ from a line in a user's personal crontab (`crontab -e`)?",
    "options": [
      "/etc/crontab uses only four time fields instead of five",
      "There is no difference; the formats are identical",
      "/etc/crontab has an extra field specifying the user to run the job as, placed after the five time fields",
      "/etc/crontab requires the command to be wrapped in quotes"
    ],
    "correctIndex": 2,
    "explanation": "System-wide crontabs (`/etc/crontab` and files in `/etc/cron.d`) add a username field after the five time fields and before the command. User crontabs always run as the owning user and therefore omit that field.  —  Real-world: A common cause of failed `/etc/cron.d` jobs is copying a line from a user crontab and forgetting to insert the user field, which makes cron treat the username as part of the schedule and reject the line."
  },
  {
    "id": "stef-linux-097",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "A backup script works perfectly when run manually as `/opt/scripts/backup.sh`, but the cron job below produces an empty output and the backup is missing:\n\n`30 2 * * * backup.sh`\n\nWhat is the most likely cause?",
    "options": [
      "Cron does not support the 30th minute",
      "The hour field 2 is interpreted as 2 PM",
      "Cron jobs cannot run shell scripts, only binaries",
      "The command uses a bare filename, but cron's PATH is minimal and does not include the script's directory, so the script is not found"
    ],
    "correctIndex": 3,
    "explanation": "Cron runs with a very minimal PATH (typically /usr/bin:/bin), so a bare `backup.sh` is not located unless its directory is on PATH. The fix is to use the absolute path `/opt/scripts/backup.sh`. The minute and hour values are valid, and cron can run scripts.  —  Real-world: 'It works when I run it but not from cron' is one of the most frequent automation tickets; the root cause is almost always the difference between an interactive PATH/environment and cron's stripped-down environment."
  },
  {
    "id": "stef-linux-098",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A cron job that calls a freshly created shell script fails every night. Investigating, you see the script file but `ls -l` shows `-rw-r--r--`. What is the problem?",
    "options": [
      "The script lacks the execute bit, so cron cannot run it directly",
      "The script is owned by the wrong group",
      "The script must be world-writable to run from cron",
      "Cron requires scripts to have a .cron extension"
    ],
    "correctIndex": 0,
    "explanation": "`-rw-r--r--` has no execute permission, so invoking the script directly fails. Running `chmod +x /path/script.sh` (or calling it via an interpreter like `bash /path/script.sh`) fixes it. World-writable is a security risk and not required, and there is no .cron extension requirement.  —  Real-world: After a deploy that copies scripts without preserving the execute bit, scheduled jobs silently fail; checking permissions with `ls -l` is an early triage step."
  },
  {
    "id": "stef-linux-099",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A cron job 'silently did not run last night' according to a ticket. The crontab entry looks correct and the script is executable. Which investigation step most directly confirms whether cron actually attempted to run the job?",
    "options": [
      "Run the script manually and confirm it works",
      "Check the cron/syslog logs (e.g. journalctl -u cron / grep CRON /var/log/syslog) for an entry at the scheduled time",
      "Reboot the server to reload cron",
      "Increase the job frequency to */1 and wait"
    ],
    "correctIndex": 1,
    "explanation": "The cron daemon logs each job invocation to syslog/journal, so checking those logs tells you whether cron triggered the job at the scheduled time, distinguishing a scheduling/daemon problem from a script problem. Running it manually only proves the script works now, not that cron fired.  —  Real-world: For 'job didn't run' incidents, confirming whether cron logged an attempt immediately splits the investigation between 'cron never fired' (schedule/daemon/user issue) and 'cron fired but the job failed' (script/environment issue)."
  },
  {
    "id": "stef-linux-100",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "This crontab line is meant to write a timestamped log filename, but it fails to run as intended:\n\n`0 1 * * * /opt/app/report.sh > /var/log/report-$(date +\\%Y\\%m\\%d).log`\n\nIf the backslashes were removed so the percent signs were left bare, why would cron mis-handle the line?",
    "options": [
      "Redirection is not allowed in crontab lines",
      "An unescaped percent sign (%) is treated by cron as a newline, so everything after the first % is cut off or fed as stdin",
      "date is not available to cron",
      "The hour 1 conflicts with the minute 0"
    ],
    "correctIndex": 1,
    "explanation": "In crontab, an unescaped `%` is interpreted as a newline (the first % ends the command and the rest becomes standard input), breaking the line. The fix is to escape each percent as `\\%` (as shown) or move the logic into a wrapper script. Redirection itself is fully supported.  —  Real-world: Date-stamped log or dump filenames built inline in crontab are a notorious trap; escaping the % signs or wrapping the logic in a script is the standard fix L2 applies."
  },
  {
    "id": "stef-linux-101",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A cron job runs a script that occasionally errors, but nobody ever sees the errors and the crontab has no redirection. How should output and errors be captured so failures are visible?",
    "options": [
      "Cron automatically emails all output to root regardless of configuration",
      "Add a fifth time field to enable logging",
      "Errors from cron jobs are always written to /var/log/syslog with full detail",
      "Set MAILTO=ops@example.com in the crontab and ensure local mail delivery works, or redirect both stdout and stderr to a file with >> /var/log/job.log 2>&1"
    ],
    "correctIndex": 3,
    "explanation": "Cron sends a job's output to the user via local mail only if a mail transport is configured and/or MAILTO is set; otherwise output goes nowhere. Explicitly redirecting stdout and stderr (`>> file 2>&1`) is the most reliable way to retain output. Syslog only records that cron ran the job, not the script's own stderr.  —  Real-world: 'The job seems to fail but there's no error anywhere' tickets almost always trace back to a cron line with no MAILTO and no redirection, so the failure output is silently discarded."
  },
  {
    "id": "stef-linux-102",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A job placed in `/etc/cron.d/app-sync` does not run. The file contains:\n\n`*/10 * * * * /usr/local/bin/sync.sh`\n\nAssuming the script is correct and executable, what is the most likely reason?",
    "options": [
      "The line is missing the required user field that /etc/cron.d entries need after the five time fields",
      "Files in /etc/cron.d are ignored unless they end in .conf",
      "cron.d only supports @reboot syntax",
      "The step value */10 is invalid"
    ],
    "correctIndex": 0,
    "explanation": "Entries in `/etc/cron.d` follow the system crontab format and require a user field (e.g. `root`) after the time fields and before the command. Without it, cron cannot parse the line. `/etc/cron.d` files must avoid certain characters in their name but do not need a .conf extension, and `*/10` is valid.  —  Real-world: When packaging an app's scheduled task as a drop-in in /etc/cron.d, omitting the user field is a very common deployment bug that L2 catches by comparing against /etc/crontab's format."
  },
  {
    "id": "stef-linux-103",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A script runs fine from cron when triggered by user `appuser`, but the same crontab line under `root` writes files that `appuser` cannot read, and a later step fails. The job was recently moved between users. What is the underlying issue and best fix?",
    "options": [
      "Cron cannot run jobs as non-root users",
      "root crontabs cannot create files",
      "The job runs as a different user than intended, so file ownership/permissions and the user's environment differ; schedule it under the correct user's crontab (or set the user field correctly in /etc/cron.d)",
      "The PATH is identical for all users, so user choice never matters"
    ],
    "correctIndex": 2,
    "explanation": "Cron jobs run with the privileges, home directory, and environment of the owning user (or the user named in /etc/cron.d). Running as the wrong user changes file ownership and environment, breaking downstream steps. The fix is to run the job under the intended user. Cron fully supports non-root users.  —  Real-world: After migrating automation from a personal account to a service account, 'permission denied' chain failures appear because some jobs still run as the old user; verifying which user owns each cron entry is key."
  },
  {
    "id": "stef-linux-104",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which crontab schedule runs a job at minute 0 of hours 9 through 17 inclusive, every day?",
    "options": [
      "0 9,17 * * *",
      "*/9 * * * *",
      "0 9-17/2 * * *",
      "0 9-17 * * *"
    ],
    "correctIndex": 3,
    "explanation": "`0 9-17 * * *` uses a range in the hour field, firing at 09:00, 10:00, ... 17:00. `0 9,17` only fires at 9 and 17, `*/9` is a minute step, and `9-17/2` adds a step of 2 so it skips alternate hours.  —  Real-world: Hourly business-hours polling jobs use the `9-17` range form; mixing it up with a list (`9,17`) silently reduces a job to twice-daily."
  },
  {
    "id": "stef-linux-105",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command shows filesystem usage in human-readable units (GB/MB) per mounted filesystem?",
    "options": [
      "du -h",
      "df -h",
      "ls -lh",
      "free -h"
    ],
    "correctIndex": 1,
    "explanation": "`df -h` reports per-filesystem capacity and usage in human-readable units. `du` measures directory/file space (not per-filesystem capacity), `ls -lh` lists file sizes, and `free -h` reports memory.  —  Real-world: `df -h` is the first command run on any 'disk full' alert to identify which mount point is at or near 100%."
  },
  {
    "id": "stef-linux-106",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "You want the total size used by a single directory tree, shown as one human-readable number. Which command do you use?",
    "options": [
      "du -sh /var/log",
      "df -h /var/log",
      "ls -l /var/log",
      "du -a /var/log"
    ],
    "correctIndex": 0,
    "explanation": "`du -sh /var/log` gives a single (-s summary) human-readable (-h) total for that directory tree. `df -h` reports the whole filesystem, `ls -l` only lists immediate entries, and `du -a` lists every file individually without a single summary.  —  Real-world: When a mount is full, `du -sh` on suspect directories quickly quantifies which tree is the biggest consumer before drilling deeper."
  },
  {
    "id": "stef-linux-107",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "On a full filesystem you want to find which immediate subdirectories under /var consume the most space, one level deep. Which command is best?",
    "options": [
      "du -sh /var",
      "df -i /var",
      "du -h --max-depth=1 /var | sort -h",
      "ls -lhR /var"
    ],
    "correctIndex": 2,
    "explanation": "`du -h --max-depth=1 /var` reports the size of /var and each immediate child directory; piping to `sort -h` ranks them. `du -sh /var` gives only the grand total, `df -i` shows inodes not space, and `ls -lhR` does not aggregate directory tree sizes.  —  Real-world: Drilling down with `--max-depth=1` and re-running on the largest child is the standard top-down technique to pinpoint the directory filling a disk."
  },
  {
    "id": "stef-linux-108",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "An application is throwing 'No space left on device', but `df -h` shows the filesystem at only 60% used. What should you check next?",
    "options": [
      "Run df -i to check for inode exhaustion on that filesystem",
      "Reboot to clear memory",
      "Run du -sh / to recount blocks",
      "Add more RAM"
    ],
    "correctIndex": 0,
    "explanation": "'No space left on device' with free blocks usually means inodes are exhausted (too many small files). `df -i` shows inode usage; an IUse% of 100% confirms it. `du`/RAM/reboot do not address inode exhaustion.  —  Real-world: Mail spools, session files, or runaway log fragments can create millions of tiny files, exhausting inodes while plenty of block space remains, producing this confusing 'disk full but it isn't' incident."
  },
  {
    "id": "stef-linux-109",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "The root filesystem is at 100%. An engineer deleted a 9 GB file `/var/log/app.log` with `rm`, but `df -h` still reports the filesystem full. The application process is still running. What is happening and how do you reclaim the space?",
    "options": [
      "The delete has not synced; run sync and space returns",
      "rm only removed the directory entry name; run rm -f again to truly delete it",
      "The running process still holds the deleted file open, so its blocks are not freed; find the holder with lsof and either restart the process or truncate via its /proc fd, e.g. : > /proc/<pid>/fd/<n>",
      "The filesystem needs fsck before space is released"
    ],
    "correctIndex": 2,
    "explanation": "When a process has a file open and you `rm` it, the directory entry is removed but the inode and its blocks persist until the last open file descriptor is closed. Restarting the process (or truncating through its /proc/<pid>/fd entry) releases the space. `sync`, re-running `rm`, or `fsck` do not help.  —  Real-world: This is the classic 'we deleted the big log but df still shows full' incident: a daemon keeps the deleted log open, so space only returns after the service is restarted or the descriptor is truncated."
  },
  {
    "id": "stef-linux-110",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "After deleting several large logs, `df -h` still shows the disk nearly full. Which command specifically lists deleted-but-still-open files (unlinked files held open by processes) so you can identify what is holding the space?",
    "options": [
      "lsof +L1",
      "du -sh /var/log",
      "df -i",
      "ls -la /proc"
    ],
    "correctIndex": 0,
    "explanation": "`lsof +L1` lists open files whose link count is less than 1, i.e. files that were deleted but are still open and therefore still occupying disk space, along with the holding PID. `du` and `ls` cannot see unlinked files, and `df -i` reports inodes.  —  Real-world: When recovering a full disk after a log purge, `lsof +L1` (or `lsof | grep deleted`) is the precise way to find which process must be restarted to actually free the space."
  },
  {
    "id": "stef-linux-111",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "The disk is 100% full and `/var/log/app/current.log` is actively growing while the app runs. You must free space immediately without stopping the application. Which action is the safest?",
    "options": [
      "rm /var/log/app/current.log",
      "mv the log to /tmp on the same full filesystem",
      "Run du -sh on the file",
      "Truncate the file in place with : > /var/log/app/current.log (or truncate -s 0), which frees blocks while the open file descriptor stays valid"
    ],
    "correctIndex": 3,
    "explanation": "Truncating the file (`: >` or `truncate -s 0`) frees its blocks immediately while keeping the inode and the process's open descriptor valid, so the app keeps logging. `rm` would leave the space held by the running process until restart, and moving within the same full filesystem frees nothing.  —  Real-world: On a production box you often cannot restart the service instantly, so truncating the active log in place is the standard emergency move to recover space without an outage."
  },
  {
    "id": "stef-linux-112",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You need to locate files larger than 500 MB under /var to free space. Which command finds them?",
    "options": [
      "du -sh /var",
      "df -h /var",
      "find /var -type f -size +500M -exec ls -lh {} \\;",
      "ls -lhS /var"
    ],
    "correctIndex": 2,
    "explanation": "`find /var -type f -size +500M` matches regular files over 500 MB, and `-exec ls -lh` shows their sizes. `du -sh`/`df -h` aggregate rather than list individual large files, and `ls -lhS /var` only sorts the immediate directory, not the whole tree.  —  Real-world: After identifying a full mount, hunting individual oversized files (core dumps, stray tarballs, runaway logs) with find is a routine cleanup step."
  },
  {
    "id": "stef-linux-113",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command displays the IP addresses currently assigned to this host's network interfaces using the modern iproute2 tooling?",
    "options": [
      "ifconfig -l",
      "ip a",
      "netstat -r",
      "hostname -f"
    ],
    "correctIndex": 1,
    "explanation": "`ip a` (short for `ip addr`) lists interfaces and their assigned addresses and is the modern replacement for the deprecated `ifconfig`. `netstat -r` shows routes, and `hostname -f` shows the FQDN, not interface addresses.  —  Real-world: On a connectivity ticket, `ip a` is the first check to confirm the host even has the expected IP on the right interface before looking further."
  },
  {
    "id": "stef-linux-114",
    "topic": "stef-linux",
    "difficulty": "easy",
    "prompt": "Which command shows the host's routing table, including its default gateway, using iproute2?",
    "options": [
      "ss -tulpn",
      "ip a",
      "ip r",
      "dig +short"
    ],
    "correctIndex": 2,
    "explanation": "`ip r` (short for `ip route`) prints the routing table; the `default via ...` line is the default gateway. `ip a` shows addresses, `ss -tulpn` shows sockets, and `dig` queries DNS.  —  Real-world: When a host can reach its local subnet but nothing beyond it, `ip r` quickly reveals a missing or wrong default gateway."
  },
  {
    "id": "stef-linux-115",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "A ticket says 'the app should be listening on port 8080 but clients get connection refused.' On the server, which command confirms whether any process is actually listening on TCP 8080 and which process it is?",
    "options": [
      "ping localhost",
      "ss -tulpn | grep :8080",
      "curl http://example.com",
      "ip r get 8080"
    ],
    "correctIndex": 1,
    "explanation": "`ss -tulpn` lists listening TCP/UDP sockets with port numbers and owning process (the -p flag), so grepping `:8080` shows whether something is bound and what it is. `ping` tests reachability not ports, `curl` to an unrelated host proves nothing, and `ip r get` is for route lookup.  —  Real-world: 'Connection refused' almost always means nothing is listening on that port; `ss -tulpn | grep :8080` is the definitive check before blaming the network or firewall."
  },
  {
    "id": "stef-linux-116",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "`ss -tulpn` on the server shows:\n\n`tcp LISTEN 0 128 127.0.0.1:8080 0.0.0.0:* users:((\"java\",pid=2210,fd=50))`\n\nRemote clients still get 'connection refused' on port 8080, though the process is up. What is the cause?",
    "options": [
      "The port 8080 is below 1024 and therefore privileged",
      "TCP cannot be used for port 8080",
      "The service is bound only to the loopback address 127.0.0.1, so it accepts local connections but not remote ones; it must bind to 0.0.0.0 (or the host's external IP)",
      "The fd number 50 is invalid"
    ],
    "correctIndex": 2,
    "explanation": "The Local Address `127.0.0.1:8080` means the listener is bound to loopback only, so only local clients can connect; remote clients are refused. Binding to `0.0.0.0:8080` (all interfaces) or the host IP fixes it. Port 8080 is not privileged, and the fd is fine.  —  Real-world: A very common app-config bug: the service listens on 127.0.0.1 by default, so it works in local tests but every remote client gets refused until the bind address is changed."
  },
  {
    "id": "stef-linux-117",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "From an app host you cannot reach a backend on port 5432. `ping backend-db` succeeds (replies received). Which single command best tests whether TCP port 5432 specifically is open and reachable?",
    "options": [
      "nc -zv backend-db 5432",
      "ping -p 5432 backend-db",
      "ip a show backend-db",
      "df -h backend-db"
    ],
    "correctIndex": 0,
    "explanation": "`nc -zv backend-db 5432` attempts a TCP connection to that port (-z scan, -v verbose) and reports success or failure, which is exactly the port-level test needed (telnet host 5432 works too). `ping` uses ICMP and cannot test a TCP port, and the other commands are unrelated.  —  Real-world: When ICMP works but the app still cannot connect, a targeted `nc -zv host port` (or `telnet host port`) distinguishes a port/firewall problem from a host-down problem during step-by-step connectivity triage."
  },
  {
    "id": "stef-linux-118",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You suspect DNS is returning the wrong IP for `api.internal`. Which command queries DNS directly and shows the resolved address (bypassing any cached app behavior)?",
    "options": [
      "ping api.internal",
      "dig +short api.internal",
      "curl api.internal",
      "ss -tulpn"
    ],
    "correctIndex": 1,
    "explanation": "`dig +short api.internal` performs a DNS lookup and prints just the resolved address(es), making it the precise DNS diagnostic (`nslookup api.internal` is the alternative). `ping`/`curl` do resolve names but also do other work and obscure the raw answer, and `ss` shows sockets.  —  Real-world: For 'DNS returns the wrong IP' incidents, `dig +short` (or `dig api.internal @specific-server`) shows exactly what answer the resolver gives and from which server, isolating stale or split-horizon DNS."
  },
  {
    "id": "stef-linux-119",
    "topic": "stef-linux",
    "difficulty": "hard",
    "prompt": "An app resolves `payments.example.com` to 10.0.0.9, but the correct address is 10.0.0.50, and only this one host is affected. `dig +short payments.example.com` returns 10.0.0.50 (correct), yet the app keeps hitting 10.0.0.9. What is the most likely cause?",
    "options": [
      "The DNS server is down",
      "dig is reading a different domain",
      "The default gateway in ip r is wrong",
      "A stale static entry in /etc/hosts maps the name to 10.0.0.9, and on most systems /etc/hosts is consulted before DNS"
    ],
    "correctIndex": 3,
    "explanation": "Because `dig` (which queries DNS directly) returns the correct IP but the application still uses the wrong one, name resolution is being overridden locally. The NSS order (nsswitch.conf) typically puts `files` before `dns`, so a leftover `/etc/hosts` entry wins. Removing or fixing that line resolves it.  —  Real-world: A classic single-host DNS mystery: an old troubleshooting entry left in /etc/hosts silently overrides correct DNS, so the app talks to a decommissioned server while dig looks fine."
  },
  {
    "id": "stef-linux-120",
    "topic": "stef-linux",
    "difficulty": "medium",
    "prompt": "You need to see the HTTP response status and headers an app returns for `http://localhost:8080/health` without downloading the body, and to inspect the full request/response handshake for troubleshooting. Which commands fit?",
    "options": [
      "ping localhost for headers, traceroute for the body",
      "ss -tulpn for headers, dig for the body",
      "df -h for status, du -sh for headers",
      "curl -I http://localhost:8080/health for headers only, and curl -v http://localhost:8080/health for a verbose request/response trace"
    ],
    "correctIndex": 3,
    "explanation": "`curl -I` issues a HEAD request and prints only the status line and response headers, while `curl -v` shows the verbose connection, request, and response details for deep troubleshooting. `ping`, `ss`, `dig`, and disk tools do not speak HTTP.  —  Real-world: When validating a service after a restart, `curl -I` quickly confirms a 200 on the health endpoint, and `curl -v` exposes redirects, TLS handshakes, or header issues when the response is unexpected."
  }
];
