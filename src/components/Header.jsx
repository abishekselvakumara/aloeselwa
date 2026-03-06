import React, { useState, useEffect } from 'react';

function Header({ loaded }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-neutral-100/30 bg-white/95 backdrop-blur-md transition-all duration-700 ${loaded ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'py-2' : 'py-4 md:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="h-[2px] w-8 bg-aloe-600 transition-all duration-500 group-hover:w-12" />
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-900 font-light transition-all duration-500 group-hover:tracking-[0.4em]">
            AR Traders
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#philosophy" className="text-[11px] tracking-[0.25em] uppercase text-neutral-900/70 hover:text-aloe-600 transition-all duration-300 relative group">
            <span className="relative z-10">Expertise</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-aloe-600 transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#benefits" className="text-[11px] tracking-[0.25em] uppercase text-neutral-900/70 hover:text-aloe-600 transition-all duration-300 relative group">
            <span className="relative z-10">Benefits</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-aloe-600 transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#production" className="text-[11px] tracking-[0.25em] uppercase text-neutral-900/70 hover:text-aloe-600 transition-all duration-300 relative group">
            <span className="relative z-10">Processing</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-aloe-600 transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#contact" className="text-[11px] tracking-[0.25em] uppercase text-neutral-900/70 hover:text-aloe-600 transition-all duration-300 relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-aloe-600 transition-all duration-500 group-hover:w-full" />
          </a>
        </nav>
        <a
          href="#contact"
          className="text-[11px] tracking-[0.25em] uppercase text-aloe-600 hover:text-neutral-900 transition-all duration-300 border border-aloe-600/30 hover:border-aloe-600 px-4 py-2.5"
        >
          Bulk Order
        </a>
      </div>
    </header>
  );
}

export default Header;