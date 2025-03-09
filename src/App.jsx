import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/sections/HeroSection';
import TopBar from '@/components/sections/TopBar';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';

const App = () => {
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

  const sections = [HeroSection, Skills, Projects, Experience, Contacts];

  return (
    <div>
      <TopBar />
      {sections.map((Section, index) => (
        <Section
          key={index}
          className={index % 2 === 0 ? 'bg-background' : 'bg-background-alt'}
        />
      ))}
      <Footer />
      <motion.div
        ref={ref}
        className="fixed h-30 w-30 blur-3xl bg-accent rounded-full shadow-lg z-10 pointer-events-none"
        animate={{ x: coordinates.x, y: coordinates.y }}
        transition={{
          type: 'spring',
        }}
      />
    </div>
  );
};

export default App;
