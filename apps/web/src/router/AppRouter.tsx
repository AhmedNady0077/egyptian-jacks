import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AuthPage from '../pages/Auth/AuthPage';
import GamePage from '../pages/Game/GamePage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}