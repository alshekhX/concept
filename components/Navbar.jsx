"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';
import Main from '@/assets/images/logo/main.png'
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/projects', label: 'Projects' }
];

const Navbar = () => {
  const pathName = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed (e.g., 50 pixels)
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => !prev);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header className={`
      bg-wall sticky top-0 z-50 shadow-md 
      transition-all duration-200 ease-in-out
      ${isScrolled ? 'py-2' : 'py-4'}
    `}>
      <nav className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo - Adjust size when scrolled */}
        <Link 
          href="/" 
          className="text-2xl font-bold hover:text-gray-200 transition-colors"
        >
          <Image 
            src={Main} 
            width={isScrolled ? 90 : 120} 
            alt="Logo"
            className="transition-all duration-300 ease-in-out"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className={`
          hidden md:flex absolute left-1/2 transform -translate-x-1/2 
          space-x-8 items-center 
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'text-base' : 'text-xl'}
        `}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`
                text-xl text-black opacity-85 hover:opacity-100 hover:text-2xl transition-all  
                ${pathName === link.href ? 'font-bold border-b-2 border-darkBlue' : ''}
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle for Desktop */}
        <Link 
          href="/" 
          className={`
          text-xl text-black opacity-85 hover:opacity-100 transition-colors 
          ${isScrolled ? 'text-base' : 'text-xl'}
          `}
        >
          العربية
        </Link>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMobileNav} 
          className="md:hidden text-2xl focus:outline-none z-50"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
        >
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-wall shadow-lg"
            >
              <ul className="flex flex-col items-center space-y-4 py-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      onClick={toggleMobileNav}
                      className={`
                        text-xl text-black opacity-85 hover:opacity-100 transition-colors 
                        ${pathName === link.href ? 'font-bold underline' : ''}
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                
                {/* Mobile Language Toggle */}
                <li>
                  <Link 
                    href="/" 
                    onClick={toggleMobileNav}
                    className="                        text-xl text-black opacity-85 hover:opacity-100 transition-colors 
                    "
                  >
                    العربية
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;