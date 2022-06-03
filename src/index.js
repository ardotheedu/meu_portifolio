import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App';
import Homepage from './routes/Homepage';
import Portifolio from './routes/Portifolio';
import Servicos from './routes/Servicos';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="portifolio" element={<Portifolio />} />
      <Route path="servicos" element={<Servicos />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="contato" element={<Contato />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);