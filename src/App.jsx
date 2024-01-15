import React from 'react';
import { About } from './About.jsx';
import './App.css';
import { Footer } from './Components/Footer.jsx';
import { Navbar } from './Components/Navbar.jsx'
import { CopyRight } from './Components/copyright.jsx';
import { Hero } from './Components/hero_section.jsx';
import { Main_Section } from './Components/Main_section.jsx';
import { Winter } from './Components/Winter.jsx';
import { About2 } from './About2.jsx';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Main_Section />
    <About />
   <Winter />
   <About2 />
    <Footer />
    <CopyRight />
    </>
  );
};

export { App };


