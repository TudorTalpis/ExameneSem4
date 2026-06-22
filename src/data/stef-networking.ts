import type { Question } from '../types/question';

export const stefNetworkingQuestions: Question[] = [
  {
    "id": "stef-networking-001",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A user reports they cannot reach a website by its name (e.g. portal.company.com) but it loads fine when they type its IP address. Which TCP/IP service is most likely failing, and what port does it normally use?",
    "options": [
      "DNS, UDP/TCP port 53",
      "HTTP, port 80",
      "DHCP, port 67",
      "HTTPS, port 443"
    ],
    "correctIndex": 0,
    "explanation": "Name resolution is handled by DNS, which uses port 53 (UDP for most lookups, TCP for larger responses/zone transfers). If the IP works but the name does not, DNS resolution is the broken link.  —  Real-world: A very common L2 ticket: 'the site is down' really means DNS is misconfigured or the DNS server is unreachable, while the web server itself is healthy."
  },
  {
    "id": "stef-networking-002",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A customer must allow secure web traffic (HTTPS) through their firewall to a hosted application. Which port should be opened?",
    "options": [
      "Port 80",
      "Port 22",
      "Port 443",
      "Port 25"
    ],
    "correctIndex": 2,
    "explanation": "HTTPS (HTTP over TLS/SSL) uses TCP port 443. Port 80 is plain HTTP, port 22 is SSH, and port 25 is SMTP.  —  Real-world: When a web app loads internally but fails from outside, an L2 engineer often finds the perimeter firewall is permitting 80 but blocking 443."
  },
  {
    "id": "stef-networking-003",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which of these IPv4 addresses is a PRIVATE address that would never be routed directly on the public internet?",
    "options": [
      "8.8.8.8",
      "172.16.5.10",
      "203.0.113.7",
      "1.1.1.1"
    ],
    "correctIndex": 1,
    "explanation": "RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255), and 192.168.0.0/16. 172.16.5.10 falls inside the 172.16/12 range; the others are public.  —  Real-world: Recognizing private vs public IPs helps an L2 engineer quickly tell whether a host is behind NAT and why it cannot be reached directly from the internet."
  },
  {
    "id": "stef-networking-004",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "In the TCP three-way handshake used to open a connection, what is the correct order of packets?",
    "options": [
      "ACK, SYN, SYN-ACK",
      "SYN-ACK, SYN, ACK",
      "SYN, ACK, SYN-ACK",
      "SYN, SYN-ACK, ACK"
    ],
    "correctIndex": 3,
    "explanation": "The client sends SYN, the server replies SYN-ACK, and the client completes with ACK. Only after this exchange is the TCP connection established.  —  Real-world: In a packet capture, an L2 engineer who sees repeated SYN packets with no SYN-ACK can conclude the server or a firewall is dropping the connection request."
  },
  {
    "id": "stef-networking-005",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which protocol is connectionless and does NOT guarantee delivery, ordering, or retransmission of lost packets?",
    "options": [
      "UDP",
      "TCP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "UDP is connectionless and provides no handshake, acknowledgment, retransmission, or ordering. TCP provides those reliability features; HTTP and FTP run on top of TCP.  —  Real-world: Knowing a service uses UDP (like DNS lookups or VoIP) tells an L2 engineer that lost packets simply disappear, so symptoms look like intermittent failures rather than hangs."
  },
  {
    "id": "stef-networking-006",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "The default gateway configured on a host is primarily used for what purpose?",
    "options": [
      "Resolving hostnames into IP addresses",
      "Assigning IP addresses to other hosts on the LAN",
      "Forwarding traffic destined for hosts outside the local subnet",
      "Encrypting traffic before it leaves the host"
    ],
    "correctIndex": 2,
    "explanation": "The default gateway is the router a host sends packets to when the destination is not on the local subnet. Name resolution is DNS, address assignment is DHCP, and encryption is unrelated.  —  Real-world: If a PC can ping other devices on its own subnet but nothing beyond it, an L2 engineer immediately suspects a missing or wrong default gateway."
  },
  {
    "id": "stef-networking-007",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A workstation that normally gets its address from DHCP shows an IP of 169.254.18.44 and cannot reach anything. What does this indicate?",
    "options": [
      "The host received a valid lease from the DHCP server",
      "The host failed to reach a DHCP server and self-assigned an APIPA address",
      "The host has a static public IP that needs NAT",
      "DNS resolution failed but the network is otherwise fine"
    ],
    "correctIndex": 1,
    "explanation": "The 169.254.0.0/16 range is APIPA (link-local). A host uses it only when it cannot contact a DHCP server, so it has no usable gateway or DNS and cannot communicate beyond its local link.  —  Real-world: Seeing a 169.254 address is a classic sign for L2 support that the DHCP server, scope, or the path to it (cable, VLAN, relay) is broken."
  },
  {
    "id": "stef-networking-008",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Which sequence correctly describes the DHCP DORA process by which a client obtains an address?",
    "options": [
      "Offer, Discover, Acknowledge, Request",
      "Request, Discover, Offer, Acknowledge",
      "Discover, Request, Offer, Acknowledge",
      "Discover, Offer, Request, Acknowledge"
    ],
    "correctIndex": 3,
    "explanation": "DORA stands for Discover (client broadcast), Offer (server proposes an address), Request (client asks for that address), and Acknowledge (server confirms the lease).  —  Real-world: When troubleshooting why clients aren't getting addresses, an L2 engineer captures traffic to see which DORA step is missing, e.g. Discover sent but no Offer returning."
  },
  {
    "id": "stef-networking-009",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Why does a database application typically use TCP (port 3306 for MySQL) rather than UDP for client connections?",
    "options": [
      "UDP is blocked by all firewalls by default",
      "TCP is faster than UDP for every workload",
      "TCP provides reliable, ordered delivery so queries and results are not lost or scrambled",
      "UDP cannot use port numbers above 1024"
    ],
    "correctIndex": 2,
    "explanation": "Database protocols need every byte delivered in order, so they use TCP, which guarantees reliable, in-order delivery via acknowledgments and retransmission. MySQL listens on TCP 3306 by default.  —  Real-world: An L2 engineer verifying app-to-DB connectivity will test TCP 3306 (e.g. with telnet or Test-NetConnection), not UDP, when a service can't reach its database."
  },
  {
    "id": "stef-networking-010",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A host has IP 192.168.1.50 with subnet mask 255.255.255.0 (/24). Which of the following addresses is on the SAME local subnet?",
    "options": [
      "192.168.2.50",
      "192.168.1.200",
      "192.169.1.50",
      "10.168.1.50"
    ],
    "correctIndex": 1,
    "explanation": "A /24 mask means the first three octets (192.168.1) define the network. 192.168.1.200 shares that network portion; 192.168.2.50 and the others differ in the network bits and are on different subnets.  —  Real-world: Determining whether two hosts share a subnet tells an L2 engineer whether traffic stays local (Layer 2 switching) or must cross the default gateway."
  },
  {
    "id": "stef-networking-011",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "On the OSI model, at which layer do IP addresses and routing between networks operate, and at which layer do TCP/UDP port numbers operate?",
    "options": [
      "IP at Layer 2 (Data Link); ports at Layer 3 (Network)",
      "IP at Layer 3 (Network); ports at Layer 4 (Transport)",
      "IP at Layer 4 (Transport); ports at Layer 7 (Application)",
      "IP at Layer 1 (Physical); ports at Layer 2 (Data Link)"
    ],
    "correctIndex": 1,
    "explanation": "IP addressing and routing are Layer 3 (Network) functions, while TCP and UDP, including port numbers, operate at Layer 4 (Transport).  —  Real-world: Framing an issue by OSI layer helps L2 support isolate it: a wrong gateway is a Layer 3 problem, while a blocked port is a Layer 4 problem, even if the cable and switch (Layers 1–2) are fine."
  },
  {
    "id": "stef-networking-012",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "An administrator needs remote command-line access to a Linux server. Which protocol and default port should be permitted?",
    "options": [
      "Telnet on port 23",
      "RDP on port 3389",
      "SSH on port 22",
      "SMTP on port 25"
    ],
    "correctIndex": 2,
    "explanation": "SSH provides encrypted remote shell access and uses TCP port 22 by default. Telnet (23) is unencrypted, RDP (3389) is for Windows graphical sessions, and SMTP (25) is for mail.  —  Real-world: When an admin says 'I can't SSH into the box,' an L2 engineer checks that TCP 22 is open end-to-end and the SSH daemon is listening before suspecting credentials."
  },
  {
    "id": "stef-networking-013",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Outbound email submission from mail clients increasingly uses port 587 instead of port 25. What is port 587 primarily intended for?",
    "options": [
      "Authenticated client mail submission (SMTP submission)",
      "Receiving inbound mail from other mail servers",
      "Encrypting DNS queries",
      "Web traffic over TLS"
    ],
    "correctIndex": 0,
    "explanation": "Port 587 is the dedicated SMTP submission port for authenticated clients sending outbound mail, while port 25 is used for server-to-server mail relay/delivery.  —  Real-world: If a user can receive mail but not send, an L2 engineer checks whether outbound 587 (submission) is blocked, since many ISPs and firewalls restrict 25 to fight spam."
  },
  {
    "id": "stef-networking-014",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Several office PCs all share the same private 192.168.x.x range yet reach the internet using one public IP. Which technology makes this possible?",
    "options": [
      "DNS",
      "DHCP",
      "VLAN tagging",
      "NAT (Network Address Translation)"
    ],
    "correctIndex": 3,
    "explanation": "NAT translates many internal private addresses to one (or a few) public addresses on the router, tracking sessions so return traffic reaches the right internal host. DNS, DHCP, and VLANs serve other functions.  —  Real-world: Understanding NAT explains to L2 support why an external party cannot connect inbound to a workstation by its private IP without port forwarding configured on the router."
  },
  {
    "id": "stef-networking-015",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A real-time video conferencing application is sensitive to delay and can tolerate occasional lost frames. Which transport protocol is it most likely to use, and why?",
    "options": [
      "TCP, because retransmitting every lost frame improves call quality",
      "UDP, because low latency matters more than retransmitting late data",
      "TCP, because it uses smaller headers than UDP",
      "UDP, because it guarantees ordered delivery of every packet"
    ],
    "correctIndex": 1,
    "explanation": "Real-time media favors UDP: a frame that arrives late is useless, so it is better to skip it than to wait for TCP retransmission and add latency. UDP does not guarantee ordering or delivery.  —  Real-world: When users report choppy video but stable file transfers, an L2 engineer suspects UDP packet loss or QoS issues rather than a total connectivity outage."
  },
  {
    "id": "stef-networking-016",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A host is configured with IP 10.0.5.130, mask 255.255.255.192 (/26), and gateway 10.0.5.129. It can reach 10.0.5.140 but cannot reach 10.0.5.200. What best explains this?",
    "options": [
      "10.0.5.200 is on a different /26 subnet, so traffic must route through the gateway, which is failing or blocked",
      "10.0.5.200 is a broadcast address and can never be reached",
      "The host's subnet mask is invalid for the 10.0.0.0 range",
      "10.0.5.200 is a public IP and requires NAT"
    ],
    "correctIndex": 0,
    "explanation": "A /26 splits the third-octet block into /26 subnets of 64 addresses. 10.0.5.130 and .140 are in the 10.0.5.128–191 subnet, but .200 is in the next subnet (10.0.5.192–255), so reaching it requires routing through the gateway.  —  Real-world: L2 engineers handling subnetted networks must recognize that two close-looking addresses can be on different subnets, making a gateway/routing problem look like a single-host outage."
  },
  {
    "id": "stef-networking-017",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "From a client, a TCP connection attempt to a server's port returns an immediate 'connection refused' rather than timing out. What is the most likely cause?",
    "options": [
      "A firewall is silently dropping the SYN packets",
      "The server is reachable but no service is listening on that port (it sent a TCP RST)",
      "DNS failed to resolve the server name",
      "The client and server are on the same subnet"
    ],
    "correctIndex": 1,
    "explanation": "An immediate refusal means the SYN reached the host, but nothing was listening on that port, so the OS replied with a TCP RST. A silently dropping firewall instead causes a timeout, not an instant refusal.  —  Real-world: Distinguishing 'connection refused' (service down/not listening) from 'timeout' (blocked or unreachable) lets L2 support decide whether to restart a service or chase a firewall rule."
  },
  {
    "id": "stef-networking-018",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "Two devices on the same LAN are both statically assigned 192.168.10.20. Intermittently, one or both lose connectivity. Which explanation fits, and how does this differ from DHCP behavior?",
    "options": [
      "An IP address conflict; DHCP normally prevents this by tracking leases and not handing out an in-use address",
      "A subnet mask mismatch; DHCP would cause the same conflict",
      "A default gateway loop; DHCP cannot assign gateways",
      "A DNS cache problem; DHCP has no role in addressing"
    ],
    "correctIndex": 0,
    "explanation": "Duplicate IP addresses cause an address conflict where ARP responses collide, dropping traffic intermittently. A DHCP server avoids this by leasing each address to only one client at a time and tracking those leases.  —  Real-world: When a user has random drops after a manual IP was set, an L2 engineer checks for duplicate-address warnings and often resolves it by returning the host to DHCP."
  },
  {
    "id": "stef-networking-019",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A user reports that an internal web app loads fine when they type its IP address into the browser, but fails with a 'server not found' error when they use its hostname. Which layer of the problem should you investigate FIRST?",
    "options": [
      "The web server's application configuration",
      "Name resolution (DNS), since the IP works but the name does not",
      "The user's physical Ethernet cable",
      "The TLS certificate on the web server"
    ],
    "correctIndex": 1,
    "explanation": "When the service responds by IP but not by name, the network path and the service itself are proven working; the only thing that differs is the hostname-to-IP translation, which is DNS.  —  Real-world: This 'works by IP, not by name' split is one of the fastest ways an L2 engineer can isolate a DNS fault from a true network or service outage."
  },
  {
    "id": "stef-networking-020",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which DNS record type maps a hostname to an IPv4 address?",
    "options": [
      "A",
      "AAAA",
      "MX",
      "CNAME"
    ],
    "correctIndex": 0,
    "explanation": "An A record maps a name to a 32-bit IPv4 address. AAAA maps to IPv6, MX points to mail servers, and CNAME is an alias to another name.  —  Real-world: Reading the record type in nslookup output is a daily task when confirming whether a host has an IPv4 address configured at all."
  },
  {
    "id": "stef-networking-021",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "In DNS, what is the purpose of an MX record?",
    "options": [
      "It specifies the mail server(s) responsible for receiving email for a domain",
      "It maps an IP address back to a hostname",
      "It stores a human-readable text note such as SPF data",
      "It delegates a zone to a set of authoritative name servers"
    ],
    "correctIndex": 0,
    "explanation": "MX (Mail eXchanger) records tell sending mail servers which host(s) accept mail for the domain, ordered by a priority value. TXT holds free-form text, PTR does reverse lookups, and NS delegates zones.  —  Real-world: When users report bounced email, checking the MX record is the first DNS step before suspecting the mail platform itself."
  },
  {
    "id": "stef-networking-022",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "What does a PTR (pointer) record do?",
    "options": [
      "Maps a hostname to an IPv6 address",
      "Lists the authoritative name servers for a zone",
      "Defines an alias from one hostname to another",
      "Maps an IP address back to a hostname (reverse DNS)"
    ],
    "correctIndex": 3,
    "explanation": "A PTR record provides reverse resolution, translating an IP address back into a name; it lives in the reverse (in-addr.arpa / ip6.arpa) zone.  —  Real-world: Mail servers often reject senders whose IP has no matching PTR record, so reverse DNS comes up constantly in email deliverability tickets."
  },
  {
    "id": "stef-networking-023",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "What is the role of the default gateway in IP routing on a typical client?",
    "options": [
      "It caches DNS responses to speed up future lookups",
      "It assigns the host its IP address via DHCP",
      "It is the router the host sends traffic to when the destination is on a different subnet",
      "It translates hostnames into IP addresses"
    ],
    "correctIndex": 2,
    "explanation": "The default gateway is the next-hop router used for any destination not on the local subnet; without it, a host can reach local devices but nothing beyond its own network.  —  Real-world: A missing or wrong default gateway is a classic cause of 'I can reach local printers but not the internet' tickets."
  },
  {
    "id": "stef-networking-024",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Two days after a server migration, some users still connect to the OLD IP address for an internal portal while others reach the new one. The DNS A record was updated correctly at the authoritative server. What is the MOST likely cause for the affected users?",
    "options": [
      "Their default gateway is misconfigured",
      "The portal's TLS certificate expired",
      "The authoritative name server is returning SERVFAIL",
      "Their resolver or local cache still holds the old record until its TTL expires"
    ],
    "correctIndex": 3,
    "explanation": "Until the previously cached A record's TTL counts down, recursive resolvers and clients keep serving the stale IP, so some users get the old address while others (whose cache already expired or never cached it) get the new one.  —  Real-world: Lowering TTLs before a planned migration, then flushing caches afterward, is the standard fix for this stale-record split during cutovers."
  },
  {
    "id": "stef-networking-025",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "In the normal recursive DNS resolution flow for 'www.example.com', which component does the recursive resolver query FIRST when it has nothing cached?",
    "options": [
      "A root name server",
      "The authoritative name server for example.com",
      "The .com TLD name server",
      "The stub resolver on the client"
    ],
    "correctIndex": 0,
    "explanation": "With an empty cache, the recursive resolver starts at a root server, which refers it to the .com TLD servers, which then refer it to the authoritative servers for example.com.  —  Real-world: Understanding this top-down referral chain helps an engineer reason about which tier might be failing when only certain domains break."
  },
  {
    "id": "stef-networking-026",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user runs 'nslookup intranet.corp.local' and gets the response '** server can't find intranet.corp.local: NXDOMAIN'. What does this specifically tell you?",
    "options": [
      "The DNS server is unreachable on the network",
      "The name exists but the server failed while resolving it",
      "The DNS server answered, but the name does not exist in DNS",
      "The name resolved successfully to an old IP address"
    ],
    "correctIndex": 2,
    "explanation": "NXDOMAIN is an authoritative 'this name does not exist' answer, which means DNS connectivity is fine and you should look at typos, a missing record, or the wrong search domain rather than at the network.  —  Real-world: Distinguishing NXDOMAIN (record missing) from SERVFAIL (server-side failure) immediately changes whether you call the DNS-zone owner or troubleshoot the resolver."
  },
  {
    "id": "stef-networking-027",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "An nslookup for a domain returns 'SERVFAIL'. Which interpretation and next step is MOST appropriate?",
    "options": [
      "The name definitely does not exist; tell the user to check their spelling",
      "The query timed out because the local network cable is unplugged",
      "The record resolved correctly but to the wrong IP",
      "The resolver could not complete the lookup (e.g., broken delegation, DNSSEC failure, or unresponsive authoritative server); investigate the resolver and the domain's authoritative servers"
    ],
    "correctIndex": 3,
    "explanation": "SERVFAIL means the resolver received the query but failed to produce a valid answer, commonly due to unreachable or misconfigured authoritative servers, broken delegation, or a DNSSEC validation failure, not a missing record.  —  Real-world: SERVFAIL on one domain while others resolve fine usually points upstream to that domain's authoritative DNS, not to the user's machine."
  },
  {
    "id": "stef-networking-028",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "On a Linux workstation, an application connects to the wrong host for 'build-server', even though DNS returns the correct IP. You suspect a local override. Which file should you check?",
    "options": [
      "/etc/resolv.conf",
      "/etc/hosts",
      "/etc/nsswitch.conf",
      "/etc/services"
    ],
    "correctIndex": 1,
    "explanation": "Entries in /etc/hosts are typically consulted before DNS and statically map names to IPs, so a leftover line there can pin a name to an outdated or wrong address regardless of what DNS says.  —  Real-world: Stale /etc/hosts entries from old testing are a frequent cause of 'only this one machine connects to the wrong server' mysteries."
  },
  {
    "id": "stef-networking-029",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "What does the TTL value on a DNS record control?",
    "options": [
      "How long a resolver or client may cache the record before it must query again",
      "The priority order in which multiple A records are returned",
      "The maximum number of router hops a DNS packet may traverse",
      "The timeout before the stub resolver gives up on a query"
    ],
    "correctIndex": 0,
    "explanation": "TTL (time to live) is the caching lifetime in seconds; resolvers may serve the cached answer until the TTL expires, after which they must re-query the authoritative source.  —  Real-world: Engineers lower a record's TTL well before a planned IP change so the world picks up the new value quickly after cutover."
  },
  {
    "id": "stef-networking-030",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user cannot reach an external site. From their machine, 'nslookup' resolves the site's name to a correct-looking public IP, but 'ping' and traceroute to that IP both fail at the first hop with no reply. Where is the problem MOST likely located?",
    "options": [
      "In DNS resolution",
      "In the network path or local routing/gateway, not DNS",
      "In the remote web server's application",
      "In the user's browser cache"
    ],
    "correctIndex": 1,
    "explanation": "Successful name resolution rules out DNS, and a traceroute that dies at the first hop points to a local routing or gateway problem rather than the destination service.  —  Real-world: Separating 'name resolves but packets don't flow' from a DNS fault is core L2 triage and prevents wasted time on the wrong team."
  },
  {
    "id": "stef-networking-031",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "When reading traceroute output, several intermediate hops show '* * *' (timeouts) but the final destination still replies and the connection works. What is the BEST interpretation?",
    "options": [
      "The connection is broken at those hops and must be escalated immediately",
      "DNS is failing for those hops",
      "Those routers are likely deprioritizing or not replying to TTL-expired/ICMP probes, which is often normal and not necessarily a fault",
      "The destination server is down"
    ],
    "correctIndex": 2,
    "explanation": "Many routers rate-limit or suppress the ICMP 'time exceeded' responses traceroute relies on, so starred hops in the middle are common and harmless as long as the final target responds.  —  Real-world: Misreading normal mid-path timeouts as an outage is a common rookie mistake; what matters is whether the destination ultimately answers."
  },
  {
    "id": "stef-networking-032",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A CNAME record for 'shop.example.com' points to 'lb.cloudvendor.net'. What happens during resolution of 'shop.example.com'?",
    "options": [
      "The client receives the literal text 'lb.cloudvendor.net' and connects to it as a hostname only",
      "The CNAME directly contains the IPv4 address to connect to",
      "The CNAME is ignored unless an MX record also exists",
      "Resolution follows the CNAME to 'lb.cloudvendor.net' and then resolves THAT name's A/AAAA record to get the final IP"
    ],
    "correctIndex": 3,
    "explanation": "A CNAME is an alias; the resolver chases it to the target (canonical) name and then resolves that target's A or AAAA record to obtain the address actually used for the connection.  —  Real-world: CNAMEs to vendor load balancers are everywhere in cloud setups, so understanding the alias chase explains why a vendor-side change can break your hostname."
  },
  {
    "id": "stef-networking-033",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "After a DNS change, users on resolver A get the NEW IP while users on resolver B still get the OLD IP. The authoritative servers all return the new record, and resolver B's cache TTL for the record has already expired. Which cause best fits?",
    "options": [
      "Resolver B is unreachable from its clients",
      "Resolver B is serving a stale answer, e.g., from a forwarder still holding the old record or serve-stale behavior, rather than honoring the expired TTL",
      "The authoritative servers are returning NXDOMAIN to resolver B",
      "The clients of resolver B have the wrong default gateway"
    ],
    "correctIndex": 1,
    "explanation": "If the authoritative data is correct and B's own TTL has lapsed, B should have re-fetched; continued old answers point to a stale upstream forwarder or serve-stale behavior on B that must be flushed.  —  Real-world: Multi-tier resolver/forwarder chains are why 'we already lowered the TTL' is sometimes not enough and an explicit cache flush is required on intermediate resolvers."
  },
  {
    "id": "stef-networking-034",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A user's machine returns NXDOMAIN for 'app' but resolves 'app.corp.example.com' correctly. Other machines on the same subnet resolve 'app' fine. Which configuration difference on the failing machine is the MOST likely culprit?",
    "options": [
      "A wrong default gateway",
      "An expired TLS certificate on the app server",
      "A missing or incorrect DNS search domain (search suffix) so the short name is not expanded to the FQDN",
      "A duplicate IP address on the subnet"
    ],
    "correctIndex": 2,
    "explanation": "Short, unqualified names rely on the configured search domain(s) to be completed into an FQDN; if that suffix is missing or wrong, the bare name resolves to NXDOMAIN even though the fully qualified name works.  —  Real-world: Search-suffix drift after a VPN profile or DHCP option change is a subtle cause of 'short names don't work on just my laptop' tickets."
  },
  {
    "id": "stef-networking-035",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A user reports a connection failure and the OS returns 'No route to host'. DNS resolved the name to an IP without error. What does this error most directly indicate?",
    "options": [
      "The hostname does not exist in DNS",
      "The destination service is up but refusing the connection",
      "The DNS resolver timed out",
      "The system has no usable route (or an unreachable gateway/ARP failure) to deliver packets to that destination IP"
    ],
    "correctIndex": 3,
    "explanation": "'No route to host' is a network/routing-layer error meaning the stack cannot find a path or reach the next hop for that IP; since DNS already succeeded, the issue is routing, the gateway, or local reachability, not name resolution.  —  Real-world: Contrasting 'No route to host' (routing problem) with 'Connection refused' (service reachable but not listening) tells the engineer which team owns the fix."
  },
  {
    "id": "stef-networking-036",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "You run 'dig +trace www.example.com'. The output walks from the root to the .com servers, but at the .com level the referral lists the example.com authoritative servers and the trace then stops with no answer and timeouts to those servers. What is the MOST likely problem?",
    "options": [
      "The local stub resolver's /etc/hosts file has a bad entry",
      "The .com TLD delegation does not exist",
      "The example.com authoritative name servers are unreachable or not responding, so resolution cannot complete (commonly surfacing as SERVFAIL to clients)",
      "The TTL on the A record is set too high"
    ],
    "correctIndex": 2,
    "explanation": "A +trace that reaches the correct authoritative servers via delegation but then times out points to those authoritative servers being down or unreachable, which is why clients see SERVFAIL rather than a valid A record.  —  Real-world: dig +trace is the go-to tool for pinpointing exactly which tier of the delegation chain breaks, letting an engineer prove the fault lies with the domain's authoritative DNS."
  },
  {
    "id": "stef-networking-037",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which HTTP method is idempotent and intended to retrieve a resource without changing server state?",
    "options": [
      "POST",
      "GET",
      "DELETE",
      "PATCH"
    ],
    "correctIndex": 1,
    "explanation": "GET is a safe, read-only method used to retrieve a resource; repeating it does not alter server state. POST typically creates or submits data and is not idempotent.  —  Real-world: When a user reports a page 'loading' or a report failing to display, you are almost always looking at a GET request in the logs."
  },
  {
    "id": "stef-networking-038",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A REST API call that successfully creates a brand-new record should typically return which status code?",
    "options": [
      "201 Created",
      "200 OK",
      "204 No Content",
      "302 Found"
    ],
    "correctIndex": 0,
    "explanation": "201 Created indicates the request succeeded and a new resource was created, often with a Location header pointing to it. 200 OK is a generic success used mainly for GET or updates.  —  Real-world: Developers integrating with an API may ask why a POST returns 201 instead of 200; explaining the create semantics resolves the confusion."
  },
  {
    "id": "stef-networking-039",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which standard TCP port does HTTPS use by default?",
    "options": [
      "80",
      "8080",
      "443",
      "22"
    ],
    "correctIndex": 2,
    "explanation": "HTTPS (HTTP over TLS) listens on TCP port 443 by default, while plain HTTP uses port 80.  —  Real-world: If a firewall change blocks port 443, users can reach the HTTP site but every HTTPS page times out, which is a common post-change ticket."
  },
  {
    "id": "stef-networking-040",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Which HTTP request header tells the server which website (virtual host) the browser is trying to reach?",
    "options": [
      "Content-Type",
      "Location",
      "Authorization",
      "Host"
    ],
    "correctIndex": 3,
    "explanation": "The Host header carries the target hostname, allowing one server or reverse proxy to route requests for many sites sharing the same IP. Location is a response header used in redirects.  —  Real-world: On a shared nginx server, a wrong or missing Host header is why a request lands on the default site instead of the customer's application."
  },
  {
    "id": "stef-networking-041",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "What does an HTTP 404 status code mean?",
    "options": [
      "The requested resource was not found",
      "The server refuses to authorize the request",
      "The server encountered an internal error",
      "The client must authenticate first"
    ],
    "correctIndex": 0,
    "explanation": "404 Not Found means the server reached the application but has no resource at the requested URL/path. It is a client-side (4xx) error, not a server fault.  —  Real-world: A 404 on a link that used to work usually points to a renamed route or a broken deployment rather than the server being down."
  },
  {
    "id": "stef-networking-042",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user reports getting a '401 Unauthorized' on an internal app, while a colleague on the same app sees '403 Forbidden'. What is the most accurate distinction to relay?",
    "options": [
      "401 means the server is down; 403 means it is overloaded",
      "Both mean the page does not exist and should be treated identically",
      "401 means the certificate expired; 403 means the URL is wrong",
      "401 means the user is not authenticated (no/invalid credentials); 403 means authenticated but lacking permission for that resource"
    ],
    "correctIndex": 3,
    "explanation": "401 indicates missing or invalid authentication, so the user must log in or refresh a token. 403 means identity is established but the account lacks authorization for that resource.  —  Real-world: This distinction tells you whether to reset a login/token (401) or escalate a permissions/role request (403) for the user."
  },
  {
    "id": "stef-networking-043",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Two users hit the same URL through an nginx reverse proxy. User A gets '502 Bad Gateway' and User B gets '504 Gateway Timeout'. What is the key difference in what the proxy is telling you?",
    "options": [
      "502 means the backend returned an invalid/no response (likely dead or crashing); 504 means the backend was reachable but did not respond in time (likely slow/overloaded)",
      "502 means the client's browser is broken; 504 means the DNS lookup failed",
      "Both codes mean the TLS certificate has expired",
      "502 means too many requests; 504 means the user is unauthorized"
    ],
    "correctIndex": 0,
    "explanation": "502 means the proxy got an invalid or empty reply from the upstream (often the app process is down or crashing). 504 means the proxy connected but the upstream exceeded the timeout, pointing to a slow or hung backend.  —  Real-world: This is a core L2 triage split: 502 sends you to check if the app process is alive, while 504 sends you to investigate slow queries, locks, or timeout settings."
  },
  {
    "id": "stef-networking-044",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "An entire web application is returning '503 Service Unavailable' to all users for a few minutes during a maintenance window, then recovers on its own. What does 503 most directly indicate?",
    "options": [
      "The client sent a malformed request body",
      "The requested page was permanently moved",
      "The server is temporarily unable to handle the request, often due to overload or maintenance",
      "The user's credentials were rejected"
    ],
    "correctIndex": 2,
    "explanation": "503 Service Unavailable signals a temporary inability to serve requests, commonly during maintenance, restarts, or overload, and often carries a Retry-After hint. It is a server-side condition expected to be transient.  —  Real-world: Seeing 503 during a known deploy window usually means the app is intentionally drained or restarting, so you confirm the maintenance rather than chase a fault."
  },
  {
    "id": "stef-networking-045",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user reports '500 Internal Server Error' when submitting a form, and it is reproducible. As L2, what does this code tell you about where to look first?",
    "options": [
      "The problem is in the user's browser cache and a hard refresh will fix it",
      "The problem is on the server/application side (an unhandled exception or backend fault), so check application logs",
      "The URL no longer exists and must be recreated",
      "The reverse proxy cannot reach any backend at all"
    ],
    "correctIndex": 1,
    "explanation": "500 is a generic server-side error indicating the application hit an unhandled condition or exception while processing the request. The next step is reading the application/error logs for the stack trace, not the client.  —  Real-world: A reproducible 500 on form submit almost always means a bug or bad data path in the app, so you gather the timestamp and correlate it with server logs before escalating to developers."
  },
  {
    "id": "stef-networking-046",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user reports that an API client is suddenly being blocked with HTTP 429 after working fine. What is the most likely cause and appropriate first action?",
    "options": [
      "The server crashed; restart the backend process",
      "The TLS certificate is untrusted; reinstall the CA bundle",
      "The resource was deleted; recreate it",
      "The client exceeded a rate limit (too many requests); back off and respect any Retry-After header"
    ],
    "correctIndex": 3,
    "explanation": "429 Too Many Requests means the client has sent too many requests in a given window and is being throttled. The proper response is to slow down and honor the Retry-After header rather than retry aggressively.  —  Real-world: A script in a tight retry loop hammering an API is a classic 429 source; advising backoff or a higher rate-limit tier resolves the ticket."
  },
  {
    "id": "stef-networking-047",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A browser shows 'Your connection is not private — NET::ERR_CERT_DATE_INVALID' for an internal site that worked yesterday. What is the most probable root cause?",
    "options": [
      "The server's TLS certificate has expired (or the client clock is badly wrong)",
      "The user typed the wrong password",
      "The app returned a 404 for the home page",
      "The load balancer ran out of backends"
    ],
    "correctIndex": 0,
    "explanation": "A date-invalid certificate error means the certificate is outside its validity window, most commonly because it expired (or the client's system clock is far off). The fix is renewing/replacing the certificate or correcting the clock.  —  Real-world: Certificates that worked 'yesterday' and fail today are the textbook symptom of an expired cert that nobody renewed, a frequent and high-visibility outage."
  },
  {
    "id": "stef-networking-048",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Users reach https://app.example.com and get 'NET::ERR_CERT_COMMON_NAME_INVALID' (name mismatch), even though the certificate is valid and not expired. What does this most likely mean?",
    "options": [
      "The backend application crashed with a 500 error",
      "The user lacks permission and should get a 403",
      "The certificate presented does not include the hostname being requested (e.g., it is issued for a different domain or missing the SAN entry)",
      "The DNS record points to the wrong port"
    ],
    "correctIndex": 2,
    "explanation": "A name/hostname mismatch means the certificate's Subject Alternative Names do not cover the requested hostname, so the browser rejects it even though it is otherwise valid. The fix is issuing a certificate that includes the correct hostname.  —  Real-world: This often appears after adding a new subdomain or vhost to a load balancer that still presents the old site's certificate, breaking HTTPS for that name."
  },
  {
    "id": "stef-networking-049",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A POST request to a JSON API returns 400 Bad Request, and the app log says it could not parse the body. Which request header is the most likely culprit to check?",
    "options": [
      "Location",
      "Host",
      "Content-Type (e.g., it is missing or not set to application/json)",
      "Authorization"
    ],
    "correctIndex": 2,
    "explanation": "Content-Type tells the server how to interpret the request body; if it is wrong or missing, the API may fail to parse JSON and return 400. Location is a response header and unrelated to parsing the request body.  —  Real-world: A client sending JSON but with Content-Type set to text/plain or form-encoded is a common cause of 400 parse errors that you can spot quickly in request headers."
  },
  {
    "id": "stef-networking-050",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "An old bookmark to http://shop.example.com/login returns '301 Moved Permanently' with a Location header pointing to the HTTPS URL. What is the correct interpretation?",
    "options": [
      "The page is broken and returns an error",
      "The user must authenticate before proceeding",
      "The server is temporarily down for maintenance",
      "The resource has permanently moved; the browser should follow the Location header and the new URL should be cached/used going forward"
    ],
    "correctIndex": 3,
    "explanation": "301 is a permanent redirect; the Location header gives the new URL and clients/caches should update to it. A 302 would indicate a temporary redirect that should not be cached as permanent.  —  Real-world: HTTP-to-HTTPS upgrades are commonly implemented as 301 redirects, so seeing them in logs is expected behavior, not a fault."
  },
  {
    "id": "stef-networking-051",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "An expired-certificate alert fires on a public site served by a load balancer with two backend nodes. You renew and install the new certificate on Node A, but roughly half of users still see the expired-certificate warning. What is the most likely explanation?",
    "options": [
      "The browser cache must be cleared on every client device",
      "Node B is still presenting the old expired certificate, and the load balancer distributes users across both nodes",
      "The DNS TTL has not expired yet",
      "The 443 port was closed on the load balancer"
    ],
    "correctIndex": 1,
    "explanation": "When TLS terminates on the backends, every node must have the renewed certificate; users routed to the un-updated Node B still get the expired one. Roughly half failing matches a two-node round-robin split.  —  Real-world: Intermittent 'half my users' certificate errors behind a load balancer are a classic sign of an inconsistent cert deployment across pool members."
  },
  {
    "id": "stef-networking-052",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A site loads fine in your browser but a partner's server reports 'unable to get local issuer certificate' when calling the API over HTTPS. The leaf certificate is valid and not expired. What is the most likely cause?",
    "options": [
      "The server is missing the intermediate certificate(s), so the client cannot build a complete chain to a trusted root CA",
      "The Host header is missing from the request",
      "The API returned a 429 rate-limit error",
      "The client used GET instead of POST"
    ],
    "correctIndex": 0,
    "explanation": "A valid leaf still fails if the server does not send the intermediate CA certificates needed to chain up to a trusted root; lenient browsers may fetch them, but strict clients fail. Installing the full chain (leaf + intermediates) resolves it.  —  Real-world: Incomplete chains often pass in browsers but break server-to-server API calls and tools like curl, producing confusing 'works for me' tickets."
  },
  {
    "id": "stef-networking-053",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "During the TLS handshake at a high level, what does a server's certificate, signed by a trusted Certificate Authority, primarily prove to the client?",
    "options": [
      "That the public key in the certificate genuinely belongs to the named hostname, vouched for by a CA the client trusts",
      "That the server's application code is free of bugs",
      "That all traffic will be compressed for speed",
      "That the user is authorized to access the resource"
    ],
    "correctIndex": 0,
    "explanation": "A CA-signed certificate binds a public key to a verified identity (hostname), so a client trusting the CA can confirm it is talking to the legitimate server and not an impostor. It establishes identity and enables secure key exchange, not application correctness or user authorization.  —  Real-world: Understanding that the certificate proves server identity (not user identity or app quality) helps you explain why name mismatch and untrusted-CA errors block the connection."
  },
  {
    "id": "stef-networking-054",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user reports that 'curl https://api.internal:8443' just hangs for a long time and then fails with a timeout, while 'curl https://api.internal:9000' returns 'connection refused' instantly. What does this difference most likely indicate?",
    "options": [
      "Both ports are blocked identically; the timing difference is just network jitter",
      "Port 8443 is silently dropped by a firewall (no reply), while on port 9000 the host is reachable but nothing is listening",
      "Port 8443 has nothing listening, while port 9000 is blocked by a firewall",
      "DNS resolution is failing only for the 8443 request"
    ],
    "correctIndex": 1,
    "explanation": "A firewall configured to DROP packets sends no response, so the client waits until it times out. A RST (connection refused) is returned quickly when the host is reachable but no service is bound to that port.  —  Real-world: This timeout-vs-refused distinction is one of the fastest ways an L2 engineer separates a firewall/security-group problem from an application that simply isn't running."
  },
  {
    "id": "stef-networking-055",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "In stateful firewall inspection, why is an explicit inbound rule usually NOT required for the return traffic of a connection that an internal host initiated outbound?",
    "options": [
      "Stateful firewalls disable all inbound filtering by default",
      "Return traffic always uses a different firewall that is fully open",
      "The firewall tracks the established connection in its state table and automatically permits the matching return packets",
      "Outbound rules are evaluated after inbound rules, so they cancel each other out"
    ],
    "correctIndex": 2,
    "explanation": "A stateful firewall records each permitted connection in a state table and allows the corresponding return traffic without needing a separate inbound allow rule. This is the core difference from a stateless ACL.  —  Real-world: Understanding statefulness explains why outbound web requests work even when no inbound rule mentions the ephemeral response ports."
  },
  {
    "id": "stef-networking-056",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "Users in the Berlin office cannot reach the internal HR web app, but the New York office and remote VPN users can. Pings to the app server time out from Berlin only. What is the most likely cause?",
    "options": [
      "The app's SSL certificate has expired for Berlin users",
      "The application server is completely down",
      "DNS is broken globally for the HR app",
      "A firewall or security-group rule is not permitting the Berlin office subnet/source IP range"
    ],
    "correctIndex": 3,
    "explanation": "When one location is blocked while others succeed, the differentiator is the source network. A firewall or security group whose allow list omits the Berlin subnet produces exactly this 'only one office fails' pattern.  —  Real-world: Allow/deny lists scoped by source IP range are a frequent root cause when a single site loses access after a network or office IP change."
  },
  {
    "id": "stef-networking-057",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "An AWS EC2 instance hosting a web service has a security group inbound rule allowing TCP 443 from 0.0.0.0/0, but external clients still get connection timeouts on 443. The instance OS firewall is off. What should you check next?",
    "options": [
      "Whether a network ACL or route/Internet-gateway setting on the subnet is blocking the traffic",
      "Whether the security group has an explicit outbound deny rule for 443",
      "Whether the security group needs a separate inbound rule for the return traffic",
      "Whether the certificate on the instance is self-signed"
    ],
    "correctIndex": 0,
    "explanation": "Security groups are stateful, so return traffic and outbound rules are not the issue. A timeout despite a correct inbound rule points to a stateless network ACL, missing route, or absent Internet gateway on the subnet.  —  Real-world: Cloud connectivity problems often live one layer above the security group, in subnet NACLs or routing, which L2 engineers must rule out methodically."
  },
  {
    "id": "stef-networking-058",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A remote employee can browse public websites normally but cannot open the company's internal wiki at wiki.corp.local. Connecting to the corporate VPN immediately fixes it. Why?",
    "options": [
      "The VPN upgrades the user's home internet bandwidth",
      "The internal wiki is only routable/resolvable through the corporate network, which the VPN tunnel provides access to",
      "The VPN installs a newer browser that supports the wiki",
      "Public DNS automatically blocks all .local domains for security"
    ],
    "correctIndex": 1,
    "explanation": "Internal resources live on private networks that are not reachable from the public internet. The VPN places the user logically inside the corporate network so internal routes and DNS resolve.  —  Real-world: The classic 'can't reach the internal app unless I'm on VPN' ticket is expected behavior, not a fault, once the resource is confirmed to be internal-only."
  },
  {
    "id": "stef-networking-059",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A company uses split-tunnel VPN. A user complains that while connected to the VPN, traffic to an internal database works but a specific internal SaaS-style tool (hosted in the corporate datacenter) is unreachable, even though general internet browsing is fine. What is the most likely VPN-related cause?",
    "options": [
      "Split tunnel always sends all traffic through the VPN, so this cannot be VPN-related",
      "Split tunnel disables DNS entirely while connected",
      "The user must disconnect from the internet for the VPN to work",
      "The route/subnet for that internal tool is not included in the VPN's split-tunnel 'send through tunnel' list"
    ],
    "correctIndex": 3,
    "explanation": "With split tunneling, only the configured internal subnets are routed through the VPN; everything else goes directly to the internet. If the tool's subnet is missing from the tunnel routes, it is sent out the local internet path and fails.  —  Real-world: Misconfigured split-tunnel route lists are a common reason some internal apps work over VPN while others mysteriously do not."
  },
  {
    "id": "stef-networking-060",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A load balancer is configured with round-robin distribution across three identical backend servers. What does round-robin do?",
    "options": [
      "Sends every request to the server with the fewest active connections",
      "Sends all traffic to one primary server until it fails, then to the next",
      "Distributes incoming requests sequentially to each backend in turn, cycling through them",
      "Routes each client permanently to the same backend based on its IP"
    ],
    "correctIndex": 2,
    "explanation": "Round-robin hands out requests to backends one after another in a repeating cycle, regardless of current load. Least-connections, by contrast, considers active connection counts.  —  Real-world: Knowing the difference between round-robin and least-connections helps explain uneven load when some requests are far heavier than others."
  },
  {
    "id": "stef-networking-061",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A load balancer dashboard shows one of four backend servers marked 'unhealthy' and no traffic is being sent to it, yet users report the site is working normally. What is happening?",
    "options": [
      "The site is broken and users are mistaken",
      "The health check on that backend is failing, so the LB pulled it out of rotation and serves traffic from the remaining healthy backends",
      "The load balancer itself has failed over to a backup LB",
      "Sticky sessions are forcing all users onto the unhealthy server"
    ],
    "correctIndex": 1,
    "explanation": "Health checks let the load balancer detect a bad backend and stop routing to it. The other healthy backends absorb the traffic, so users see no impact while one node is out.  —  Real-world: This is the load balancer working as designed; the real task is investigating why that one backend's health check is failing before capacity becomes a concern."
  },
  {
    "id": "stef-networking-062",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "After scaling a web tier behind a load balancer, users intermittently get logged out and their shopping carts reset, seemingly at random during a session. The app stores session state in each server's local memory. Which load balancer feature would fix this?",
    "options": [
      "Enabling sticky sessions / session affinity so a client stays bound to one backend",
      "Switching from least-connections to round-robin",
      "Adding more backend servers to the pool",
      "Shortening the health-check interval"
    ],
    "correctIndex": 0,
    "explanation": "Without affinity, successive requests can land on different backends that don't share session memory, causing logouts and lost carts. Sticky sessions pin a client to one backend so its local session stays valid.  —  Real-world: Apps with server-local sessions behind a balancer require sticky sessions, or a shared session store, to avoid this exact intermittent-logout symptom."
  },
  {
    "id": "stef-networking-063",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Immediately after a deployment, users hitting the site through the reverse proxy receive '502 Bad Gateway'. Before the deploy everything worked. What is the most likely cause?",
    "options": [
      "The client's browser cache is corrupted",
      "The backend application failed to start or crashed, so the proxy cannot get a valid response from it",
      "The reverse proxy's TLS certificate just expired",
      "DNS for the public site name stopped resolving"
    ],
    "correctIndex": 1,
    "explanation": "A 502 means the reverse proxy reached out to the upstream backend but received an invalid/no response, typically because the backend is down, crashed, or failed to bind after the deploy.  —  Real-world: A 502 right after a release almost always points at the new build failing to start; checking app logs and the backend process is the immediate next step."
  },
  {
    "id": "stef-networking-064",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "Through a reverse proxy, a heavy reporting endpoint returns '504 Gateway Timeout' while all other pages load fine. The backend logs show the report query still running and eventually completing after the error appears. What does the 504 indicate?",
    "options": [
      "There are no healthy backends available to serve the request",
      "The backend process crashed when the report was requested",
      "The backend was reachable but took longer to respond than the proxy's upstream timeout allowed",
      "The proxy could not resolve the backend's hostname"
    ],
    "correctIndex": 2,
    "explanation": "A 504 means the proxy successfully connected to the backend but did not receive a response within its configured timeout. The slow report exceeding that timeout produces a 504 even though the query later finishes.  —  Real-world: Distinguishing 504 (backend too slow) from 502 (backend gave a bad/no response) directs you to tune timeouts or optimize the query rather than restart a 'crashed' service."
  },
  {
    "id": "stef-networking-065",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A reverse proxy sits in front of a backend pool managed with health checks. During a rolling restart, all backend instances briefly fail their health checks at once. What status code will clients most likely receive, and why?",
    "options": [
      "503 Service Unavailable, because the proxy has no healthy backend in the pool to forward to",
      "504 Gateway Timeout, because a single backend responded too slowly",
      "502 Bad Gateway, because one backend returned malformed headers",
      "200 OK, because the proxy serves a cached copy indefinitely"
    ],
    "correctIndex": 0,
    "explanation": "When every backend is marked unhealthy or unavailable, the proxy has nowhere to route requests and returns 503. A 502 implies a bad response from a reachable backend, and 504 implies a slow one.  —  Real-world: Rolling restarts that take down all nodes simultaneously cause brief 503 storms; staggering restarts keeps at least one backend healthy at all times."
  },
  {
    "id": "stef-networking-066",
    "topic": "stef-networking",
    "difficulty": "easy",
    "prompt": "A user reports the browser shows 'Your connection is not private' / 'NET::ERR_CERT_DATE_INVALID' when visiting an internal site, but the page still loads if they click through the warning. What is the most likely root cause?",
    "options": [
      "The site's DNS record was deleted",
      "The server's TCP port 443 is being blocked by a firewall",
      "The site's SSL/TLS certificate has expired (or is otherwise outside its valid date range)",
      "The load balancer removed all backends from rotation"
    ],
    "correctIndex": 2,
    "explanation": "A date-invalid certificate error means the TLS handshake succeeded enough to present a certificate, but its validity dates are no longer current. Connectivity (DNS/TCP) is clearly working since the page can still be reached.  —  Real-world: Expired certificates are a routine, high-visibility incident; the fix is renewing and redeploying the cert, and the warning confirms the transport layer itself is fine."
  },
  {
    "id": "stef-networking-067",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "A public website is 'unreachable.' You run diagnostics: 'nslookup' returns the correct IP, 'telnet <ip> 443' connects successfully, but 'curl https://site.example' fails with a TLS handshake error citing certificate validation. Where is the fault?",
    "options": [
      "At DNS resolution, since the name did not resolve",
      "At the TCP layer, since port 443 could not be reached",
      "At the TLS layer, since the connection and port are fine but the certificate fails validation",
      "At the reverse proxy backend, returning a 502"
    ],
    "correctIndex": 2,
    "explanation": "DNS resolved correctly and the TCP connection to 443 succeeded, so those layers are healthy. The failure occurring specifically during certificate validation isolates the problem to the TLS layer (expired, mismatched, or untrusted cert).  —  Real-world: Walking DNS to TCP to TLS in order is the canonical end-to-end method for pinpointing exactly which layer breaks a 'site is down' report."
  },
  {
    "id": "stef-networking-068",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "Reports say 'the website is completely unreachable.' From your machine, 'ping' and 'nslookup' of the domain fail to return an IP, but the same site loads instantly for a colleague in another country. What is the most probable cause?",
    "options": [
      "The site's SSL certificate expired only for your region",
      "The origin backend is returning 503 to everyone",
      "Your firewall is blocking outbound TCP 443",
      "A DNS resolution problem on your side (e.g., your resolver, local cache, or a regional DNS issue), not the web server itself"
    ],
    "correctIndex": 3,
    "explanation": "If the name does not resolve for you but the site works elsewhere, the web/TLS layers are reachable and the failure is in DNS resolution on your path. A blocked 443 would still let the name resolve, and a cert/503 issue would affect the colleague too.  —  Real-world: Testing an alternate DNS resolver (or flushing the local cache) quickly confirms whether a 'site down' report is really a localized name-resolution problem."
  },
  {
    "id": "stef-networking-069",
    "topic": "stef-networking",
    "difficulty": "hard",
    "prompt": "An internal app behind a load balancer is reachable over the corporate VPN but 'curl' from a jump host in the same datacenter subnet returns 'connection refused' on the app port, while 'curl' to the load balancer's VIP succeeds. What does this most strongly suggest?",
    "options": [
      "DNS is misconfigured for the app's hostname",
      "The VPN tunnel is down for all users",
      "The backend app process on that node is not listening on the expected port (refused), but the LB is healthy and routing to other backends",
      "The load balancer's certificate has expired"
    ],
    "correctIndex": 2,
    "explanation": "A 'connection refused' directly to the backend port means the host is reachable but no process is bound there, while the LB VIP succeeding shows the load balancer is healthy and steering traffic to working backends. This is a single dead backend, not a firewall drop (which would time out).  —  Real-world: Refused on a backend but success through the VIP is a textbook sign of one crashed app instance that the load balancer's health check should already be excluding."
  },
  {
    "id": "stef-networking-070",
    "topic": "stef-networking",
    "difficulty": "medium",
    "prompt": "A user on VPN reports an internal dashboard loads its HTML but all API calls to api.internal time out, while the same APIs respond fine from a server inside the datacenter. The dashboard host and API host are on different internal subnets. What is the most likely VPN cause?",
    "options": [
      "The API server's certificate is expired",
      "The VPN split-tunnel routes include the dashboard's subnet but not the API server's subnet, so API requests are sent out the local internet path and time out",
      "The load balancer is using round-robin instead of least-connections",
      "DNS for api.internal does not exist anywhere"
    ],
    "correctIndex": 1,
    "explanation": "Timeouts only to the API subnet, while a datacenter-internal client works, indicate the API subnet is not routed through the VPN tunnel. Split-tunnel route lists must include every internal subnet the user needs, not just the front-end's.  —  Real-world: Partial-app failures over VPN frequently trace back to an incomplete split-tunnel route table missing one of several back-end subnets."
  }
];
