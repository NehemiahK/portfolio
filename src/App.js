import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'

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
