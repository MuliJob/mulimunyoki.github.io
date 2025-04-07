import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-opacity-0 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-bold">&copy; {new Date().getFullYear()} Muli Munyoki. <a href="https://digicrafts.co.ke/" target="_blank" rel="noopener noreferrer" class="hover:underline">Crafted by yours truly</a></p>
      </div>
    </footer>
  );
};

export default Footer;

