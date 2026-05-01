import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HannaLanding from './components/HannaLandingDesigned';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HannaLanding />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;