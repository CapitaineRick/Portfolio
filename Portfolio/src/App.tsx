import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectProvider } from './contexts/ProjectContext';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Documentation from './components/sections/Documentation';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <Layout>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Documentation />
          <Contact />
        </Layout>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App