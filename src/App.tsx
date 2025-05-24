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

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ProjectProvider>
          <Layout>
            <main className="flex flex-col w-full">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <TechWatch />
              <Contact />
            </main>
          </Layout>
        </ProjectProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;