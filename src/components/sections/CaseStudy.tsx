import React from 'react';
import esgScrabble from '../../assets/images/esg_scrabble.jpeg';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-700 mb-10 text-center">Case Study</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={esgScrabble} 
                alt="ESG Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Manufacturing Company Reduces Reporting Time by 68%</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A mid-sized manufacturing company was struggling with their ESG reporting process, 
                spending over 120 hours quarterly gathering data from disparate sources. 
                By implementing our automated data collection system and standardized calculation methodologies, 
                we reduced their reporting time to just 38 hours per quarter while improving data accuracy. 
                This efficiency gain allowed their sustainability team to focus on strategic initiatives 
                rather than manual data processing, resulting in a 22% reduction in Scope 1 and 2 emissions 
                within the first year of implementation.
              </p>
              <a 
                href="#" 
                className="inline-block bg-sky-600 text-white font-medium px-6 py-2 rounded hover:bg-sky-700 transition duration-300"
              >
                Download Full Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
