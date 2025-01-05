import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import Header component
import Dashboard from './components/Dashboard';
import NewsCard from './components/NewsCard';
import PayoutCard from './components/PayoutCard';
import './App.css';

function App() {
  return (
    <Router>
      <Header />  {/* Make sure to use Header component here */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<NewsCard />} />
        <Route path="/payout" element={<PayoutCard />} />
      </Routes>
    </Router>
  );
}

export default App;
