import type { Question } from '../types/question';

export const stefCloudQuestions: Question[] = [
  {
    "id": "stef-cloud-001",
    "topic": "stef-cloud",
    "difficulty": "easy",
    "prompt": "A team needs to host a web application on a virtual server in AWS where they control the OS, install packages, and run their own processes. Which AWS service provides this?",
    "options": [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon CloudWatch"
    ],
    "correctIndex": 0,
    "explanation": "Amazon EC2 (Elastic Compute Cloud) provides resizable virtual machines where you control the operating system and installed software. S3 is object storage, RDS is a managed database, and CloudWatch is monitoring.  —  Real-world: When a ticket says 'the app server is down,' it usually refers to an EC2 instance you can SSH or RDP into to investigate."
  },
  {
    "id": "stef-cloud-002",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "A developer reports that their web app running on an EC2 instance cannot be reached on HTTPS (port 443) from the internet, even though the service is listening locally. What should you check FIRST?",
    "options": [
      "Whether the RDS database is online",
      "Whether CloudWatch logging is enabled",
      "Whether the S3 bucket policy is public",
      "Whether the security group allows inbound traffic on port 443"
    ],
    "correctIndex": 3,
    "explanation": "Security groups act as virtual firewalls at the instance level; if there is no inbound rule allowing TCP 443, connections are blocked before reaching the app. This is the most common cause of 'service runs but is unreachable.'  —  Real-world: L2 engineers routinely fix connectivity tickets by adding a missing inbound rule (e.g., 443 from 0.0.0.0/0) to the instance's security group."
  },
  {
    "id": "stef-cloud-003",
    "topic": "stef-cloud",
    "difficulty": "easy",
    "prompt": "A company wants to store user-uploaded images and static website files (HTML, CSS, JS) cheaply and serve them at scale. Which AWS service is the best fit?",
    "options": [
      "Amazon EBS",
      "Amazon RDS",
      "Amazon S3",
      "Amazon VPC"
    ],
    "correctIndex": 2,
    "explanation": "Amazon S3 is object storage designed for storing and retrieving files (objects) like images, documents, and static assets. EBS is block storage attached to EC2, RDS is for relational data, and VPC is networking.  —  Real-world: Static assets and backups are commonly offloaded to S3 so application servers stay lean and storage scales independently."
  },
  {
    "id": "stef-cloud-004",
    "topic": "stef-cloud",
    "difficulty": "easy",
    "prompt": "Which AWS service is a managed relational database, handling patching, backups, and failover so your team does not administer the database server directly?",
    "options": [
      "Amazon RDS",
      "Amazon S3",
      "Amazon EC2",
      "Amazon CloudWatch"
    ],
    "correctIndex": 0,
    "explanation": "Amazon RDS (Relational Database Service) is a managed service for engines like MySQL, PostgreSQL, and SQL Server, automating maintenance tasks. The others are compute, object storage, and monitoring respectively.  —  Real-world: Using RDS means a backup or minor-version patch is a managed operation rather than a manual task on an EC2-hosted database."
  },
  {
    "id": "stef-cloud-005",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "An application running on EC2 needs to read files from an S3 bucket. What is the recommended AWS-native way to grant this access WITHOUT storing static credentials on the instance?",
    "options": [
      "Hard-code an access key and secret in the application config",
      "Make the S3 bucket fully public",
      "Email the credentials to the application owner",
      "Attach an IAM role with the required permissions to the EC2 instance"
    ],
    "correctIndex": 3,
    "explanation": "Attaching an IAM role to the EC2 instance lets the app obtain temporary, automatically rotated credentials, avoiding long-lived secrets on disk. Hard-coding keys or making buckets public are security risks.  —  Real-world: IAM roles for EC2 (instance profiles) are the standard pattern, so you rarely see access keys stored in app servers in well-run environments."
  },
  {
    "id": "stef-cloud-006",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "Two EC2 instances are in the same VPC: a web server in a public subnet and a database in a private subnet. The web server can reach the internet but the database instance cannot, by design. What primarily defines a subnet as 'public'?",
    "options": [
      "It has a route to an internet gateway",
      "It uses block storage instead of object storage",
      "It is in a different region than the private subnet",
      "It has CloudWatch metrics enabled"
    ],
    "correctIndex": 0,
    "explanation": "A public subnet is one whose route table directs internet-bound traffic to an internet gateway; a private subnet has no such route, so its resources are not directly reachable from the internet. This separation is a core networking pattern.  —  Real-world: Placing databases in private subnets is standard practice so they are never directly exposed to the public internet."
  },
  {
    "id": "stef-cloud-007",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "You are migrating a workload from AWS to Azure. The team used EC2 virtual machines and S3 buckets. Which Azure services are the closest equivalents, respectively?",
    "options": [
      "Azure Functions and Azure SQL",
      "Azure VM and Azure Blob Storage",
      "Azure Kubernetes Service and Azure Files",
      "Azure VM and Azure Cosmos DB"
    ],
    "correctIndex": 1,
    "explanation": "Azure Virtual Machines are the equivalent of EC2 (IaaS compute), and Azure Blob Storage is the equivalent of S3 (object storage). The other pairings mix in serverless, container, or database services.  —  Real-world: Knowing cross-cloud equivalents helps when a customer describes an Azure setup but your runbooks were written for AWS."
  },
  {
    "id": "stef-cloud-008",
    "topic": "stef-cloud",
    "difficulty": "easy",
    "prompt": "In Docker, what is the difference between an 'image' and a 'container'?",
    "options": [
      "An image is a running process; a container is a stored template",
      "An image is a read-only template/package; a container is a running instance of that image",
      "They are two words for exactly the same thing",
      "An image runs on Kubernetes only; a container runs on Docker only"
    ],
    "correctIndex": 1,
    "explanation": "A Docker image is a static, read-only template containing the app and its dependencies; a container is a running (or stopped) instance created from that image. Many containers can be started from one image.  —  Real-world: When debugging, you 'pull an image' from a registry and then 'run a container' from it, so distinguishing the two clarifies log and lifecycle questions."
  },
  {
    "id": "stef-cloud-009",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "A colleague asks why the team is packaging their app in containers instead of giving each one a full virtual machine. Which statement BEST captures the difference?",
    "options": [
      "Containers each include a full guest operating system, making them heavier than VMs",
      "Containers can only run on Windows, while VMs run anywhere",
      "Containers share the host OS kernel and package only the app and its dependencies, so they are lighter and start faster than VMs",
      "Containers store data permanently by default, while VMs never do"
    ],
    "correctIndex": 2,
    "explanation": "Containers share the host operating system kernel and bundle only the application and its libraries, so they are smaller and start in seconds, unlike VMs which each run a full guest OS. This is why containers improve density and deployment speed.  —  Real-world: Teams adopt containers to run many isolated app copies efficiently on fewer hosts and to ship consistent environments from dev to prod."
  },
  {
    "id": "stef-cloud-010",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "In Kubernetes, what is a 'pod' at a high level?",
    "options": [
      "A physical server in the cluster",
      "The smallest deployable unit, wrapping one or more tightly coupled containers that share network and storage",
      "A managed relational database",
      "A firewall rule applied to a subnet"
    ],
    "correctIndex": 1,
    "explanation": "A pod is Kubernetes' smallest deployable unit; it groups one or more containers that share the same network namespace (IP) and can share storage. Kubernetes schedules and scales pods, not individual containers.  —  Real-world: When checking why an app is unhealthy in Kubernetes, you often start by listing pods and viewing a pod's logs or restart count."
  },
  {
    "id": "stef-cloud-011",
    "topic": "stef-cloud",
    "difficulty": "hard",
    "prompt": "An EC2 web server's security group already allows inbound TCP 443 from 0.0.0.0/0, yet remote clients still get connection timeouts. The instance is in a public subnet and the app is confirmed listening on 443. Which is the MOST likely remaining cause?",
    "options": [
      "The S3 bucket holding static assets is private",
      "A network ACL on the subnet is denying the inbound or return traffic, or the route to the internet gateway is missing",
      "CloudWatch is not collecting metrics for the instance",
      "The instance is using an IAM role with too many permissions"
    ],
    "correctIndex": 1,
    "explanation": "Beyond security groups, traffic also passes subnet-level network ACLs and depends on a correct route to the internet gateway; a denying NACL rule or missing IGW route causes timeouts even with a permissive security group. NACLs are stateless, so return traffic can be blocked separately.  —  Real-world: When the obvious security-group fix does not resolve a connectivity ticket, escalating to NACL and route-table checks is the logical next step."
  },
  {
    "id": "stef-cloud-012",
    "topic": "stef-cloud",
    "difficulty": "hard",
    "prompt": "A database needs a fast, low-latency volume that the OS treats like a raw disk it can format and mount (e.g., for a transactional database file system). Which storage type is appropriate, and what is the key contrast with object storage?",
    "options": [
      "Object storage, because it lets the OS mount a file system directly",
      "Block storage (e.g., EBS), because it presents raw volumes the OS formats and mounts, whereas object storage stores whole files accessed via an API",
      "Object storage, because it offers the lowest latency for database I/O",
      "Block storage, because it is accessed only through HTTP GET/PUT like a web bucket"
    ],
    "correctIndex": 1,
    "explanation": "Block storage exposes raw volumes (blocks) that an operating system formats and mounts, ideal for databases and boot disks, while object storage (like S3) stores whole objects retrieved by key via an API and is not mounted as a file system. The access model and use cases differ fundamentally.  —  Real-world: Databases and OS boot disks live on block volumes; bulk files, backups, and media go to object storage, so picking the wrong one causes performance or design problems."
  },
  {
    "id": "stef-cloud-013",
    "topic": "stef-cloud",
    "difficulty": "medium",
    "prompt": "An application's performance degraded last night. You need to review CPU utilization over time and look at the application's logs centrally. Which AWS service is designed for collecting these metrics and logs?",
    "options": [
      "Amazon VPC",
      "Amazon S3",
      "Amazon CloudWatch",
      "AWS IAM"
    ],
    "correctIndex": 2,
    "explanation": "Amazon CloudWatch collects metrics (like EC2 CPU utilization) and can aggregate logs via CloudWatch Logs, making it the go-to service for monitoring and troubleshooting. VPC is networking, S3 is storage, and IAM is access control.  —  Real-world: L2 troubleshooting frequently begins in CloudWatch graphs to correlate a metric spike with the time an incident started."
  },
  {
    "id": "stef-cloud-014",
    "topic": "stef-cloud",
    "difficulty": "easy",
    "prompt": "What is the relationship between AWS regions and availability zones?",
    "options": [
      "An availability zone contains many regions spread across continents",
      "A region is a geographic area containing multiple isolated availability zones (separate data center locations)",
      "Regions and availability zones are identical terms",
      "An availability zone is a single physical server inside a region"
    ],
    "correctIndex": 1,
    "explanation": "A region is a geographic area (e.g., eu-west-1) made up of multiple availability zones, each one or more physically separate data centers. Spreading resources across AZs improves fault tolerance within a region.  —  Real-world: Deploying across multiple availability zones keeps an app running if one data center location fails, a common high-availability requirement."
  },
  {
    "id": "stef-cloud-015",
    "topic": "stef-cloud",
    "difficulty": "hard",
    "prompt": "A backend EC2 instance must accept traffic ONLY from the front-end web servers' security group on port 5432, and nothing else. Which security group rule configuration best achieves least-privilege access?",
    "options": [
      "Inbound allow TCP 5432 with the source set to the web servers' security group ID",
      "Inbound allow all traffic from the web servers' security group",
      "Inbound allow TCP 5432 from 0.0.0.0/0",
      "Outbound deny TCP 5432 to the web servers"
    ],
    "correctIndex": 0,
    "explanation": "Security groups can reference another security group as the source, so allowing inbound TCP 5432 from the web tier's security group restricts access to exactly those instances on just that port. Opening 5432 to 0.0.0.0/0 or allowing all traffic violates least privilege.  —  Real-world: Referencing security groups (rather than IP ranges) is a common pattern that keeps database access tightly scoped to the application tier as instances scale in and out."
  }
];
