import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-opacity-0 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} <a href="https://digicrafts.co.ke/" target="_blank" rel="noopener noreferrer">Portfolio</a>. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with 😁 by Muli Munyoki</p>
      </div>
    </footer>
  );
};

export default Footer;

