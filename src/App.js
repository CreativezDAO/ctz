// import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Voting from "./components/Voting"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CTZArcade from './components/CTZArcade';
import Stats from './components/Stats';
import Earn from './components/Earn';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
    <Router>
    <ScrollToTop/>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/voting" element={<Voting />} />
      <Route path="/ctzarcade" element={<CTZArcade />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/earn" element={<Earn />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
