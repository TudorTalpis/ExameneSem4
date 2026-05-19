export interface TopicInfo {
  id: string;
  title: string;
  icon: string;
  order: number;
  questionCount: number;
  /** Optional short description shown on ExamPage */
  description?: string;
}

export interface ExamManifest {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  /** Tailwind color name used for accent (e.g. 'indigo', 'emerald', 'blue') */
  accentColor: string;
  /** Display order on HomePage */
  order: number;
  topics: TopicInfo[];
}
