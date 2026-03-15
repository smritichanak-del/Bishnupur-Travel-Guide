import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function Nav(){
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/temples', label: 'Temples' },
        { path: '/artandcraft', label: 'Art & Craft' },
        { path: '/naturalview', label: 'Natural View' },
        { path: '/contact', label: 'Contact' }
    ];

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <h1 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                                🏛️ Bishnupur
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        location.pathname === item.path
                                            ? 'bg-orange-100 text-orange-700 border-b-2 border-orange-500'
                                            : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-orange-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => {
                                    navigate(item.path);
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                                    location.pathname === item.path
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}