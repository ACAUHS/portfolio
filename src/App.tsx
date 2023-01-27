import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <div className='landing-section bg-black'>
      <NavBar />
      <Hero />
      </div>
    </div>
  );
}

export default App;
