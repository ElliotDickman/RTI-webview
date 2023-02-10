import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Path/Landing';
// import ModelViewer from './Components/ModelViewer';
import ModelPage from './Components/ModelPage/ModelPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/model" element={<ModelPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
