import React from 'react';
import Logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-10 w-10 mr-2"
                />
                <span className="text-white text-2xl font-semibold">Tech</span>
            </div>

            {/* Navigation Links */}
            <div className="space-x-4">
                <a href="/" className="text-white hover:text-gray-300">
                    Solutions
                </a>
                <a href="/" className="text-white hover:text-gray-300">
                    Services
                </a>
                <a href="/" className="text-white hover:text-gray-300">
                    About
                </a>
                <a href="/" className="text-white hover:text-gray-300">
                    Culture
                </a>
            </div>

            {/* Contact Us Button */}
            <div className="flex items-center space-x-2">
                <button className="bg-slate-700 text-white hover:bg-slate-700 hover:text-white px-4 py-2 rounded-full">
                    Contact Us
                </button>
                <button className="bg-slate-700 text-white hover:bg-slate-700 hover:text-white px-2.5 py-1.5 rounded-full relative " style={{ userSelect: 'none' }}>
                    <span className="text-lg">→</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
