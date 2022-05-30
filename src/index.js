import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App';
import Homepage from './routes/Homepage';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);