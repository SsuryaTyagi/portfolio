import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav className="bg-black text-white p-4 fixed w-full z-10 flex justify-between px-8 shadow-md">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
