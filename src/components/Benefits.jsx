import React from 'react';
import Section from './Section';
import aloeElwa from '../assets/aloe2.jpg'; // your Aloe Elwa image

function Benefits() {
  const benefitsData = [
    {
      title: "Natural Product",
      benefits: [
        "Made from fresh aloe vera leaves",
        "100% natural processing",
        "No artificial additives",
        "Maintains natural aloe properties"
      ]
    },
    {
      title: "Long Shelf Life",
      benefits: [
        "Solid form improves storage life",
        "Stable under normal conditions",
        "Suitable for bulk storage",
        "Easy to handle and preserve"
      ]
    },
    {
      title: "Easy Transportation",
      benefits: [
        "Solid blocks for convenient transport",
        "Compact packaging",
        "Safe for long-distance shipping",
        "Suitable for export distribution"
      ]
    },
    {
      title: "Multiple Uses",
      benefits: [
        "Used in traditional medicine",
        "Suitable for herbal products",
        "Used in cosmetic preparations",
        "Used in various herbal formulations"
      ]
    },
    {
      title: "Quality Processing",
      benefits: [
        "Carefully heat processed",
        "Clean and hygienic preparation",
        "Uniform solid formation",
        "Quality checked before packaging"
      ]
    },
    {
      title: "Bulk Supply",
      benefits: [
        "Available for bulk orders",
        "Secure packaging",
        "Reliable supply from Karur",
        "Ready for domestic and export markets"
      ]
    }
  ];

  return (
    <Section id="benefits">
      <div className="py-16 md:py-24">

        {/* Aloe Elwa Image */}
        <div className="mb-12">
          <img
            src={aloeElwa}
            alt="Aloes Elwa Product"
            className="w-full max-h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-aloe-600" />
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-900/60">
              Aloes Elwa
            </p>
            <div className="h-[1px] w-8 bg-aloe-600" />
          </div>

          <h2 className="text-3xl md:text-5xl leading-tight font-light mb-8 text-neutral-900">
            Benefits of Aloes Elwa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer p-6 md:p-8 border border-neutral-900/5 hover:border-aloe-600/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-6 bg-aloe-600 transition-all duration-500 group-hover:w-12" />
                <h3 className="text-xl font-light text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {item.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-neutral-900/70 flex items-center gap-3">
                    <div className="w-1 h-1 bg-aloe-600 rounded-full flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;