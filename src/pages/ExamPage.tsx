import { useNavigate, useParams } from 'react-router-dom';
import { getExam } from '../data/registry';
import { useProgress } from '../context/ProgressContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import type { TopicInfo } from '../types/exam';

export function ExamPage() {
  const { examId = '' } = useParams<{ examId: string }>();
  const navigate        = useNavigate();
  const { getProgress } = useProgress();

  const exam = getExam(examId);

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Examen inexistent.{' '}
        <button className="ml-2 text-indigo-500 underline" onClick={() => navigate('/')}>
          Acasă
        </button>
      </div>
    );
  }

  const totalQuestions = exam.topics.reduce((s, t) => s + t.questionCount, 0);
  const examProgress   = getProgress(examId, totalQuestions);

  const handleStart = (topicId?: string) => {
    const path = topicId
      ? `/exam/${examId}/quiz?topic=${topicId}`
      : `/exam/${examId}/quiz`;
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Breadcrumbs
          crumbs={[
            { label: 'Acasă', to: '/' },
            { label: exam.title },
          ]}
        />

        {/* Exam header */}
        <div className="flex items-center gap-3 mt-4 mb-6">
          <span className="text-4xl">{exam.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{exam.title}</h1>
            <p className="text-slate-500 text-sm">{exam.subtitle}</p>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-700 font-medium">
              {examProgress.learnedCount} / {totalQuestions} învățate
            </span>
            <span className="text-indigo-600 font-bold">{examProgress.pct}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${examProgress.pct}%` }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleStart()}
              className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold
                hover:bg-indigo-700 active:scale-95 transition-all duration-150"
            >
              {examProgress.hasSession ? '▶ Continuă' : '🚀 Începe toate temele'}
            </button>

            {examProgress.mistakeCount > 0 && (
              <button
                onClick={() => navigate(`/exam/${examId}/quiz?mode=review`)}
                className="flex-1 py-2.5 rounded-xl bg-rose-50 border-2 border-rose-200
                  text-rose-700 text-sm font-medium hover:bg-rose-100 active:scale-95 transition-all"
              >
                📝 Greșeli ({examProgress.mistakeCount})
              </button>
            )}
          </div>
        </div>

        {/* Topic list */}
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Teme
        </h2>
        <div className="flex flex-col gap-2">
          {exam.topics.map((topic: TopicInfo) => (
            <TopicRow
              key={topic.id}
              topic={topic}
              examId={examId}
              totalQuestions={topic.questionCount}
              onStart={() => handleStart(topic.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- sub-component ----

interface TopicRowProps {
  topic: TopicInfo;
  examId: string;
  totalQuestions: number;
  onStart: () => void;
}

function TopicRow({ topic, onStart }: TopicRowProps) {
  return (
    <button
      onClick={onStart}
      className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl bg-white
        border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50
        active:scale-95 transition-all duration-150"
    >
      <span className="text-xl w-7 text-center">{topic.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-slate-800 font-medium text-sm leading-tight">{topic.title}</p>
        {topic.description && (
          <p className="text-slate-400 text-xs mt-0.5 truncate">{topic.description}</p>
        )}
      </div>
      <span className="text-slate-400 text-xs shrink-0">{topic.questionCount} înt.</span>
      <span className="text-slate-300 text-sm">›</span>
    </button>
  );
}
