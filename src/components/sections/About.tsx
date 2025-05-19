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
              
              I’m a Sustainability & Risk Consultant with over 8 years of experience helping businesses navigate 
              the evolving landscape of environmental compliance and ESG reporting. 
              With a BSc and MSc in environmental sciences, I’ve worked with organizations across sectors to design decarbonization strategies, 
              calculate GHG emissions, align with frameworks like CSRD, GRI, CDP, and the GHG Protocol, and prepare stakeholder-ready reports.

              But I’m not just a traditional consultant — I also bring technical fluency in AI and automation. 
              That means I don’t just help you plan your ESG roadmap — I help you streamline it. 
              From automating data pipelines to building sustainability dashboards and audit-ready reporting systems, 
              I combine deep subject matter expertise with hands-on digital solutions to save your team time, cost, and effort.

              My mission is to simplify sustainability for mid-sized and growing companies — giving you tools, strategies, 
              and confidence to meet your compliance obligations while making meaningful progress on your climate goals.
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
