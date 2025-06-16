import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectProvider } from './contexts/ProjectContext';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import TechWatch from './components/sections/TechWatch';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ProjectProvider>
          <Layout>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <TechWatch />
            <Contact />
          </Layout>
        </ProjectProvider>
      </ThemeProvider>
      <Analytics />
    </HelmetProvider>
    
  );
}

export default App;