import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="fixed inset-0 z-0 opacity-50">
        <div className="absolute inset-0 grid-bg"></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-network"
            style={{
              top: `${20 * i}%`,
              left: '-100%',
              width: '200%',
              animationDelay: `${i * 1.6}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-network"
            style={{
              left: `${20 * i}%`,
              top: '-100%',
              height: '200%',
              animationDelay: `${i * 1.6}s`
            }}
          />
        ))}
      </div>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;