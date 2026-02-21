import { Suspense } from 'react';
import Loader from './components/Loader';
import GlassLens from './components/GlassLens';
import BackToTop from './components/BackToTop';
import StaggeredMenu from './components/StaggeredMenu';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Education from './sections/Education';
import Contact from './sections/Contact';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#hero' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Skills', ariaLabel: 'View skills', link: '#skills' },
  { label: 'Experience', ariaLabel: 'View experience', link: '#experience' },
  { label: 'Work', ariaLabel: 'View work', link: '#work' },
  { label: 'Education', ariaLabel: 'View education', link: '#education' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
  { label: 'Resume', ariaLabel: 'View resume', link: 'https://drive.google.com/file/d/1HTQisS7dRVy8_q32POFI_gN94gUC_cR3/view?usp=sharing' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com/in/chitranshupandey' },
  { label: 'GitHub', link: 'https://github.com/chitranshu234' },
  { label: 'Email', link: 'mailto:chitranshupandey234@gmail.com' },
];

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlassLens />
      <BackToTop />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#c8c2b4"
        openMenuButtonColor="#1a1a17"
        changeMenuColorOnOpen
        colors={['#3a3530', '#c8c2b4']}
        accentColor="#c8c2b4"
        isFixed
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
    </Suspense>
  );
}

export default App;
