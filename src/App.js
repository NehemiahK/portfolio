import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <section id='about'><About /> </section>
      <section id='portfolio'><Portfolio /> </section>
      <section id='contact'><Contact /> </section>
    </div>
  );
}

export default App;
