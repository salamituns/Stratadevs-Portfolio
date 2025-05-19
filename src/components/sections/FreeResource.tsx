import React from 'react';

const FreeResource: React.FC = () => {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Get Your Free ESG Checklist</h2>
          <p className="text-gray-700 mb-8">
            Start your sustainability journey with our comprehensive ESG readiness checklist. 
            This resource will help you identify gaps in your current reporting and prioritize 
            actions to improve your organization's ESG performance.
          </p>
          <a 
            href="/esg-checklist.pdf" 
            download
            className="inline-block bg-sky-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-sky-700 transition duration-300"
          >
            Download ESG Checklist
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeResource;
