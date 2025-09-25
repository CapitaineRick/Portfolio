import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import RGPDPage from './components/pages/RGPDPage';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    
    <HelmetProvider>
      <ThemeProvider>
        <ProjectProvider>
          <Router>
            <Routes>
              <Route path="/rgpd" element={<RGPDPage />} />
              <Route path="/" element={
          <Layout>              

            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <TechWatch />
            <Contact />
          </Layout>
              } />
            </Routes>
          </Router>
        </ProjectProvider>
      </ThemeProvider>
                  <Analytics />
            <SpeedInsights/>
      
      
    </HelmetProvider>
    
  );
}

export default App;