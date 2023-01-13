import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import ModelViewer from "./Components/ModelViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/model" element={<ModelViewer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
