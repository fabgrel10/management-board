import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import Board from './pages/Board/Board';
import Landing from './pages/Landing/Landing';

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="board" element={<Board />} />
        <Route path="backlog" element={<Backlog />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
