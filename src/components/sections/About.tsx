import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <img 
              src="/src/assets/images/business_professional.jpeg" 
              alt="Sustainability Consultant" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-sky-700 mb-4">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As the founder of Stratadevs, I bring over eight years of experience in environmental sustainability and ESG reporting. 
              My expertise lies in transforming complex sustainability data into actionable insights through innovative automation solutions. 
              I've helped organizations across various sectors navigate the evolving landscape of ESG regulations, 
              enabling them to not only meet compliance requirements but also leverage sustainability as a strategic advantage...
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium">8+ Years Experience</span>
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium">GHG Protocol</span>
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium">AI Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
