import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ViewData from './components/ViewData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view_data" element={<ViewData />} />
      </Routes>
    </Router>
  );
}

export default App;
