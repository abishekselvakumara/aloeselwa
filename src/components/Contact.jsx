import React from 'react';
import Section from './Section';

function Contact() {
  // Your actual Google Form embed URL
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLScifwDP127Fa8tClIahy5LO_jtFhv-NPdXa4WRWAxaqQrXc8g/viewform?embedded=true";

  return (
    <Section id="contact">
      <div className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-20">
          <div>
            <div className="md:sticky md:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-aloe-600" />
                <p className="text-xs tracking-[0.3em] uppercase text-neutral-900/60">
                  Get in Touch
                </p>
              </div>
              <h2 className="text-3xl md:text-5xl leading-tight font-light mb-8 text-neutral-900">
                Connect With <span className="font-normal"></span>
              </h2>
              <p className="text-lg text-neutral-900/70 leading-relaxed mb-6">
                <span className="font-semibold">ALOES ELWA - MUSAMPAR</span><br />
                Specialized Aloe Vera Processing (Production & Sales)
              </p>
              <p className="text-md text-neutral-900/80 leading-relaxed mb-12">
                4, Jothivadam, Uppidamangalam Post -639 114.<br />
                Karur Dt., Tamilnadu
              </p>

              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-neutral-900/10 group-hover:border-aloe-600 group-hover:bg-aloe-600/5 transition-all duration-300 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-neutral-900/60 mb-1">
                        A. Selvakumar
                      </p>
                      <a
                        href="tel:+917904473079"
                        className="text-lg text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300 block"
                      >
                        8056732317
                      </a>
                      <p className="text-sm text-neutral-900/60 mt-1">Primary Contact</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-neutral-900/10 group-hover:border-aloe-600 group-hover:bg-aloe-600/5 transition-all duration-300 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-neutral-900/60 mb-1">
                        Processing Facility
                      </p>
                      <p className="text-lg text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                        4, Jothivadam, Uppidamangalam<br />
                        Karur Dt., Tamilnadu - 639 114
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-neutral-900/10 group-hover:border-aloe-600 group-hover:bg-aloe-600/5 transition-all duration-300 flex-shrink-0">
                      🏭
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-neutral-900/60 mb-1">
                        Business Hours
                      </p>
                      <p className="text-lg text-neutral-900 group-hover:text-aloe-600 transition-colors duration-300">
                        Mon-Sat: 9AM - 7PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-900/5 p-6 md:p-12">
              <h3 className="text-2xl font-light mb-4 text-neutral-900">
                Aloes Elwa Enquiry
              </h3>
              <p className="text-sm text-neutral-900/60 mb-6">
                Please fill in the form below. All fields marked with * are required.
              </p>

              {/* Embedded Google Form */}
              <div className="w-full h-[550px] overflow-hidden rounded-lg border border-neutral-900/10 bg-white">
                <iframe
                  src={googleFormEmbedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Aloes Elwa Enquiry Form"
                >
                  Loading enquiry form...
                </iframe>
              </div>

              {/* Alternative contact methods */}
              <div className="border-t border-neutral-900/10 pt-6 mt-6">
                <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-900/60 mb-4 text-center">
                  Or contact directly
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918056732317"
                    className="flex-1 inline-flex items-center justify-center border border-aloe-600/30 text-neutral-900 text-xs tracking-[0.2em] uppercase py-3 px-4 hover:border-aloe-600 hover:text-aloe-600 transition-all duration-300"
                  >
                    📞 Call A. Selvakumar
                  </a>
                  <a
                    href={`https://wa.me/918056732317`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-green-600/10 text-green-700 text-xs tracking-[0.2em] uppercase py-3 px-4 hover:bg-green-600 hover:text-white transition-all duration-300 border border-green-600/30"
                  >
                    💬 WhatsApp
                  </a>
                </div>
                <p className="text-xs text-neutral-900/40 text-center mt-4">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;