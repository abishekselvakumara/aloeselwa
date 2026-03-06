import React from 'react';
import { useInView } from '../hooks/useInView';

function Section({ id, children }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  
  return (
    <section
      id={id}
      ref={ref}
      className={`section opacity-0 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{children}</div>
    </section>
  );
}

export default Section;