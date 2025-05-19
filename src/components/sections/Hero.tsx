import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Sustainability Made Smarter.
        </h1>
        <p className="text-xl md:text-2xl text-center mb-10">
          ESG reporting and climate strategy, automated.
        </p>
        <a 
          href="https://calendly.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-sky-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-sky-100 transition duration-300"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
};

export default Hero;
