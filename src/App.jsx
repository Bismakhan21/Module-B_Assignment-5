import React from 'react';
import { About } from './About.jsx';
import './App.css';
import { Footer } from './Components/Footer.jsx';
import { Navbar } from './Components/Navbar.jsx'
import { CopyRight } from './Components/copyright.jsx';
import { Hero } from './Components/hero_section.jsx';
import { Main_Section } from './Components/Main_section.jsx';
import { Winter } from './Components/Winter.jsx';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Main_Section />
    <About />
   <Winter />
    <Footer />
    <CopyRight />
    </>
  );
};

export { App };


