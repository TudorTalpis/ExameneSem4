import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ExamPage } from './pages/ExamPage';
import { QuizPage } from './pages/QuizPage';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"                 element={<HomePage />} />
        <Route path="/exam/:examId"     element={<ExamPage />} />
        <Route path="/exam/:examId/quiz" element={<QuizPage />} />
        <Route path="*"                 element={<Navigate to="/" replace />} />
      </Routes>
      <ThemeToggle />
    </>
  );
}
