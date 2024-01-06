
import './App.css';

import { AllProducts1 } from './Components/AllProducts1.jsx';
import { Footer } from './Components/Footer.jsx';
import { Main_Section } from './Components/Main_section.jsx';
import { Navbar } from './Components/Navbar.jsx'
import { Winter } from './Components/Winter.jsx';
import { CopyRight } from './Components/copyright.jsx';
import { Hero } from './Components/hero_section.jsx';
import { Products_Main } from './Components/products_main.jsx';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Main_Section />
    <Products_Main />
    <Winter />
    <AllProducts1 />
    <Footer />
    <CopyRight />
    </>
  );
};

export { App };


