import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Foods from './pages/Foods';
import AIPlanner from './pages/AIPlanner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/ai' element={<AIPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}
