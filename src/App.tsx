import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';
import LandingPage from './pages/LandingPage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<MainPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
