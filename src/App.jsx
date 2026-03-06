import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import FarmImage from './components/FarmImage';
import Benefits from './components/Benefits';
import Production from './components/Production';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-hidden">
      <Header loaded={loaded} />
      
      <main>
        <Hero loaded={loaded} />
        <Philosophy />
        <FarmImage />
        <Benefits />
        <Production />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;