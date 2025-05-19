import React from 'react';

const Frameworks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-700 mb-10 text-center">Frameworks I Work With</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {['CSRD', 'CDP', 'GHG Protocol', 'ISSB', 'GRI', 'TCFD', 'GRESB'].map((framework) => (
            <div 
              key={framework}
              className="bg-sky-50 border border-sky-200 text-sky-800 px-6 py-3 rounded-lg font-medium text-center"
            >
              {framework}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
