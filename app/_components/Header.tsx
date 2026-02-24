'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', href: '#', active: true },
        { name: 'Haemostasis', href: '#' },
        { name: 'Coating', href: '#' },
        { name: 'Company', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Career', href: '#' },
        { name: 'Research Partner', href: '#' },
        { name: 'Download Area', href: '#' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-12 transition-all duration-300 z-[100] ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-sm shadow-md' : 'py-5 bg-white'}`}>
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={`/logo.png`} width={150} alt="BioCer Logo" className="h-auto transition-all duration-300" />
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden xl:flex items-center gap-8 text-[16px] font-medium text-gray-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors hover:text-primary ${link.active ? 'text-black font-semibold' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions - Desktop */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Language mock */}
                    <div className="flex items-center gap-3">
                        <img src="/home/flag-1.png" className="w-7 h-7 rounded-full object-cover shadow-sm border border-gray-100 cursor-pointer" title="German" alt="German" />
                        <img src="/home/flag-2.png" className="w-7 h-7 rounded-full object-cover border border-gray-200 cursor-pointer shadow-sm" title="English" alt="English" />
                    </div>
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-2.5 text-sm rounded-full font-medium transition-colors">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="xl:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700">
                        {isMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] xl:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/20" onClick={toggleMenu} />

                {/* Menu Content */}
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full pt-24 pb-10 px-8">
                        <nav className="flex flex-col gap-6 text-base font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`transition-colors hover:text-primary ${link.active ? 'text-black font-semibold' : 'text-gray-600'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto pt-10 border-t border-gray-100">
                            <div className="flex items-center gap-4 mb-8">
                                <img src="/home/flag-1.png" className="w-8 h-8 rounded-full object-cover shadow-sm border border-gray-100 cursor-pointer" alt="German" />
                                <img src="/home/flag-2.png" className="w-8 h-8 rounded-full object-cover border border-gray-200 cursor-pointer shadow-sm" alt="English" />
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-full font-medium transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content from jumping under fixed header */}
            <div className="h-[86px]" />
        </>
    );
}
