import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApolloLanding from './components/ApolloLanding';
import ScribeLanding from './components/ScribeLanding';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Apollo Imperial Hospital Landing Page */}
        <Route path="/" element={<ApolloLanding />} />
        
        {/* Hanna Scribe Landing Page */}
        <Route path="/scribe" element={<ScribeLanding />} />

        {/* Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
