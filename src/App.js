import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RenderTune from './RenderTune/RenderTune';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RenderTune title="RenderTune" />} />
        <Route path="/download" element={<RenderTune title="Download - RenderTune" />} />
        <Route path="/features" element={<RenderTune title="Features - RenderTune" />} />
        <Route path="/contribute" element={<RenderTune title="Contribute - RenderTune" />} />
        <Route path="/support" element={<RenderTune title="Support - RenderTune" />} />
        <Route path="/help" element={<RenderTune title="Help - RenderTune" />} /> {/* Added "Help" route */}
      </Routes>
    </Router>
  );
}

export default App;
