import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import StudyBuddy from './pages/StudyBuddy/StudyBuddy';
import BudgetBuddy from './pages/BudgetBuddy/BudgetBuddy';
import MarketMingle from './pages/MarketMingle/MarketMingle';
import PackPal from './pages/PackPal/PackPal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-buddy" element={<StudyBuddy />} />
            <Route path="/budget-buddy" element={<BudgetBuddy />} />
            <Route path="/market-mingle" element={<MarketMingle />} />
            <Route path="/pack-pal" element={<PackPal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App