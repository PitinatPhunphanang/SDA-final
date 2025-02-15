import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // นำเข้าการใช้งาน Router
import Home from './Home';
import ModeSelection from './Mode';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mode" element={<ModeSelection />} /> {/* เส้นทางไปหน้า Mode */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
