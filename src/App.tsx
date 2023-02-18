import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero';
import { About } from './components/About'

function App() {
  return (
    <div className="App">
      <div className='landing-section bg-black'>
      <div className='sticky top-0 z-40 bg-black text-whiter'>
          <NavBar />
        </div>
        <Hero />
        <About />
      </div>
      
    </div>
  );
}

export default App;
