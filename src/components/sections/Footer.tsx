import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© Stratadevs 2025 | All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <a href="/terms" className="text-sm text-gray-300 hover:text-white transition duration-300">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-gray-300 hover:text-white transition duration-300">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
