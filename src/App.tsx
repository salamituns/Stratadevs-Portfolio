import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Frameworks from './components/sections/Frameworks';
import CaseStudy from './components/sections/CaseStudy';
import FreeResource from './components/sections/FreeResource';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Frameworks />
      <CaseStudy />
      <FreeResource />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
