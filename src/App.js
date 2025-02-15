import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // นำเข้าการใช้งาน Router
import Home from './Home';
import ModeSelection from './Mode';
import SoloMode from './Solo';
import Matching from './Matching';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mode" element={<ModeSelection />} />
          <Route path="/solo" element={<SoloMode />} />
          <Route path="/matching" element={<Matching />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
