import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RenderTune from './RenderTune/RenderTune';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RenderTune title="RenderTune" />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
