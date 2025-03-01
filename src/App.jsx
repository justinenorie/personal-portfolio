import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/sections/HeroSection';
import TopBar from '@/components/sections/TopBar';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';

function App() {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setCoordinates({ x, y });
      };

      window.addEventListener('pointermove', handlePointerMove);
      return () => window.removeEventListener('pointermove', handlePointerMove);
    }
  }, []);

  return (
    <div>
      <TopBar />
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <motion.div
        ref={ref}
        className="fixed h-30 w-30 blur-3xl bg-accent rounded-full shadow-lg -z-10"
        animate={{ x: coordinates.x, y: coordinates.y }}
        transition={{
          type: 'spring',
        }}
      />
    </div>
  );
}

export default App;
