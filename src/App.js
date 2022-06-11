import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Voting from "./components/Voting"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CTZArcade from './components/CTZArcade';
import Stats from './components/Stats';
import Mint from './components/Mint';
import Earn from './components/Earn';


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/voting" element={<Voting />} />
      <Route path="/ctzarcade" element={<CTZArcade />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/earn" element={<Earn />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
