import type { ExamManifest } from '../../../types/exam';

export const stefaniniManifest: ExamManifest = {
  id: 'stefanini-tse-l2',
  title: 'Stefanini TSE L2',
  subtitle: 'Technical Support Engineer L2 — pregătire interviu',
  icon: '🛠️',
  accentColor: 'emerald',
  order: 4,
  topics: [
    { id: 'stef-linux', title: "Linux", icon: '🐧', order: 1, questionCount: 120, description: "Permisiuni, systemd, jurnale, procese, disk/CPU/memorie, rețea, cron, troubleshooting" },
    { id: 'stef-sql', title: "SQL & MySQL", icon: '🗄️', order: 2, questionCount: 80, description: "SELECT/JOIN/GROUP BY, indecși, tranzacții, lock-uri, performanță, citire & debugging" },
    { id: 'stef-appsupport', title: "Application Support", icon: '🎫', order: 3, questionCount: 80, description: "Tichete, prioritizare, escaladare L3, SLA, RCA, incidente de producție" },
    { id: 'stef-networking', title: "Networking", icon: '🌐', order: 4, questionCount: 70, description: "TCP/IP, DNS, HTTP/HTTPS, TLS, firewall, load balancer, reverse proxy" },
    { id: 'stef-monitoring', title: "Monitoring & Observability", icon: '📊', order: 5, questionCount: 50, description: "Metrici, loguri, trasare, alerte, Splunk, golden signals, degradare serviciu" },
    { id: 'stef-php', title: "PHP Support", icon: '🐘', order: 6, questionCount: 25, description: "Citire cod PHP, erori comune, debugging, limite php.ini" },
    { id: 'stef-messaging', title: "MuleSoft / RabbitMQ / AMQP", icon: '📨', order: 7, questionCount: 25, description: "Cozi, producători/consumatori, DLQ, retries, integrare, poison messages" },
    { id: 'stef-mongodb', title: "MongoDB", icon: '🍃', order: 8, questionCount: 20, description: "Colecții, documente, query-uri, indecși, replicare, troubleshooting" },
    { id: 'stef-cloud', title: "Cloud", icon: '☁️', order: 9, questionCount: 15, description: "AWS/Azure, VM vs containere, storage, networking cloud" },
    { id: 'stef-customer', title: "Customer Support", icon: '💬', order: 10, questionCount: 15, description: "Clienți dificili, comunicare, escaladare, ownership incident" },
  ],
};
