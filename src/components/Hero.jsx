import React from 'react';
import aloeHero from '../assets/aloe1.jpg'; // adjust path if needed

function Hero({ loaded }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img
          src={aloeHero}
          alt="Fresh Aloe Vera Leaf"
          className="w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-20">
        <div className={`max-w-2xl transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-aloe-600" />
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-900/60">
              ALOES ELWA - Specialized Processing
            </p>
          </div>

          <h1 className="mb-8 font-light text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-neutral-900">
            Aloe Vera Solids,
            <br />
            <span className="text-aloe-600 font-normal">Heat-Processed & Coated</span>
          </h1>

          <p className="text-lg leading-relaxed text-neutral-900/70 mb-10 max-w-xl">
            Specialized in high-temperature processing of aloe vera into solid form, 
            coated and packaged for nationwide distribution from our Karur facility.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-aloe-600 text-white text-xs tracking-[0.3em] uppercase py-3.5 px-8 hover:bg-aloe-700 transition-all duration-300 group"
            >
              <span>Bulk Order Inquiry</span>
              <span className="ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </a>

            <a
              href="#process"
              className="inline-flex items-center border border-neutral-900/20 text-neutral-900 text-xs tracking-[0.3em] uppercase py-3.5 px-8 hover:border-aloe-600 hover:text-aloe-600 transition-all duration-300"
            >
              Our Process
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse-slow hidden lg:block">
        <div className="w-32 h-32 border border-aloe-600/30 rotate-45" />
      </div>

    </section>
  );
}

export default Hero;