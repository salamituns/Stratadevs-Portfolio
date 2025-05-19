import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-700 mb-10 text-center">Let's Talk</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Discovery Call</h3>
              <p className="text-gray-700 mb-6">
                Ready to discuss how Stratadevs can help streamline your ESG reporting and climate strategy? 
                Book a no-obligation discovery call to explore how we can work together.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-4">Select a time that works for you:</p>
                {/* Calendly inline widget placeholder */}
                <div className="h-64 bg-gray-200 flex items-center justify-center rounded">
                  <p className="text-gray-600">Calendly booking widget will appear here</p>
                </div>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center mt-4 bg-sky-600 text-white font-medium px-6 py-2 rounded hover:bg-sky-700 transition duration-300"
                >
                  Open Calendly
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Connect</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Email</p>
                  <a href="mailto:contact@stratadevs.com" className="text-sky-600 hover:text-sky-800">
                    contact@stratadevs.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/stratadevs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800"
                  >
                    linkedin.com/in/stratadevs
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Office Hours</p>
                  <p className="text-gray-700">Monday - Friday: 9am - 5pm CET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
