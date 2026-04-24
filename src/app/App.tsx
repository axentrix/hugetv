import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router';
import VotePage from './pages/VotePage';
import CardSwiperPage from './pages/CardSwiperPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardSwiperPage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}
