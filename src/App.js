import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Voting from "./components/Voting"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CTZGallery from './components/CTZGallery';
import Stats from './components/Stats';
import Mint from './components/Mint';
import Earn from './components/Earn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/voting" element={<Voting />} />
      <Route path="/ctzgallery" element={<CTZGallery />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/earn" element={<Earn />} />
    </Routes>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
