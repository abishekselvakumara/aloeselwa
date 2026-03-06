import React from 'react';
import Section from './Section';

function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="md:sticky md:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-aloe-600" />
                <p className="text-xs tracking-[0.3em] uppercase text-neutral-900/60">
                  Our Experience
                </p>
              </div>

              <h2 className="text-3xl md:text-5xl leading-tight font-light mb-8 text-neutral-900">
                Tradition of Aloe Processing
                <br />
                <span className="text-aloe-600">Aloes Elwa Production</span>
              </h2>

              <p className="text-lg text-neutral-900/70 leading-relaxed">
                Founded by <strong>R. Arjunan</strong>, our company focuses on the 
                traditional preparation of Aloes Elwa from fresh aloe vera leaves. 
                With careful heating, solid formation, and coating, we produce a 
                natural aloe product ready for supply across India.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">

            <div className="group cursor-pointer">
              <div className="h-[1px] w-full bg-neutral-900/10 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                Fresh Aloe Sourcing
              </h3>
              <p className="text-neutral-900/70 leading-relaxed">
                Fresh aloe vera leaves are sourced from nearby farms and carefully 
                selected to ensure good quality raw material for Aloes Elwa production.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-[1px] w-full bg-neutral-900/10 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                Traditional Processing
              </h3>
              <p className="text-neutral-900/70 leading-relaxed">
                The aloe is processed through controlled heating to convert the gel 
                into solid Aloes Elwa blocks, maintaining its natural properties.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-[1px] w-full bg-neutral-900/10 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                Reliable Supply
              </h3>
              <p className="text-neutral-900/70 leading-relaxed">
                From our Karur facility, the finished Aloes Elwa is packed and supplied 
                to traders and distributors across different regions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}

export default Philosophy;