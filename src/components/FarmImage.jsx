import React from 'react';
import aloeImage from '../assets/aloe5.jpg'; // adjust path if needed

function FarmImage() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden group">
      
      <img
        src={aloeImage}
        alt="Aloe Vera Processing Facility"
        className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-white" />
              <p className="text-xs tracking-[0.3em] uppercase text-white">
                Processing Facility
              </p>
            </div>

            <h3 className="text-2xl md:text-4xl text-white font-light">
              High-temperature processing & coating at our Karur facility
            </h3>
          </div>

        </div>
      </div>

    </section>
  );
}

export default FarmImage;