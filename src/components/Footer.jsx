import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-neutral-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-aloe-600" />
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-900">
                ALOES ELWA - Musabbar
              </span>
            </div>
            <p className="text-sm text-neutral-900/70 leading-relaxed max-w-md">
              Specialized in high-temperature processing of aloe vera into coated solids.
              Pan-India distribution from our Karur District facility.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-900/60 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#philosophy" className="text-sm text-neutral-900/70 hover:text-aloe-600 transition-colors duration-300">Our Expertise</a></li>
              <li><a href="#benefits" className="text-sm text-neutral-900/70 hover:text-aloe-600 transition-colors duration-300">Product Benefits</a></li>
              <li><a href="#production" className="text-sm text-neutral-900/70 hover:text-aloe-600 transition-colors duration-300">Processing</a></li>
              <li><a href="#contact" className="text-sm text-neutral-900/70 hover:text-aloe-600 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-900/60 mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-neutral-900/70">
                <span className="font-semibold">A. Selvakumar</span><br />
                <a href="tel:+917904473079" className="hover:text-aloe-600"> 8056732317</a>
              </p>

              <p className="text-sm text-neutral-900/70">
                4, Jothivadam, Uppidamangalam<br />
                Karur Dt., Tamilnadu - 639 114
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900/10 mt-12 pt-8 text-center">
          <p className="text-sm text-neutral-900/60">
            © {new Date().getFullYear()} ALOES ELWA - Musabbar | Specialized Aloe Vera Processing |
            Selvakumar - Production & Sales
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;