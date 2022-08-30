import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import Board from './pages/Board/Board';
import Landing from './pages/Landing/Landing';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="board" element={<Board />} />
        <Route path="backlog" element={<Backlog />} />
      </Routes>
    </>
  );
}

export default App;
