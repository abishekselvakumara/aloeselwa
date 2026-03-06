import React from 'react';
import Section from './Section';
import aloeImage from '../assets/aloe3.jpg'; // adjust path if needed

function Production() {
  const processSteps = [
    {
      step: "01",
      title: "Fresh Aloe Harvest",
      desc: "Mature Aloe Vera leaves are carefully harvested from trusted farms around the Karur region to ensure premium quality."
    },
    {
      step: "02",
      title: "Gel Extraction",
      desc: "The aloe leaves are cleaned and the natural gel is extracted using hygienic methods while preserving its natural nutrients."
    },
    {
      step: "03",
      title: "High-Temperature Processing",
      desc: "The extracted aloe gel is heated at controlled temperatures to concentrate the natural compounds and form Aloe Elwa resin."
    },
    {
      step: "04",
      title: "Solid Formation",
      desc: "The processed aloe is cooled and solidified into Aloe Elwa blocks while maintaining its natural medicinal properties."
    },
    {
      step: "05",
      title: "Precision Coating",
      desc: "A protective coating process is applied to maintain product stability and quality during storage and transport."
    },
    {
      step: "06",
      title: "Quality Check & Export",
      desc: "Each batch undergoes manual inspection and secure packaging before distribution and export from our Karur facility."
    }
  ];

  return (
    <Section id="production">
      <div className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <img
              src={aloeImage}
              alt="Aloe Elwa Processing"
              className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 border border-green-600/20 -z-10 hidden md:block" />
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-green-600" />
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-900/60">
                Our Process
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl leading-tight font-light mb-8 text-neutral-900">
              From Fresh Aloe Leaf<br />to Aloe Elwa Solid
            </h2>

            <div className="space-y-8 md:space-y-10">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <div className="text-3xl md:text-4xl font-light text-neutral-900/20 group-hover:text-green-600/30 transition-colors duration-300 flex-shrink-0">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-light mb-2 text-neutral-900 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-neutral-900/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}

export default Production;