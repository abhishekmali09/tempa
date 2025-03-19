import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import img_logo from '../../public/Images/navbar__logo.png';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const navbarRef = useRef(null);

  // Reset Discover submenu when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsDiscoverOpen(false);
    }
  }, [isMenuOpen]);

  // Toggle mobile menu and control body overflow
  function handleMenuOpen() {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      if (typeof window !== 'undefined' && window.document) {
        document.body.style.overflow = newState ? 'hidden' : 'unset';
      }
      return newState;
    });
  }

  return (
    <nav className="bg-white h-24 flex text-[#37474F] justify-around items-center border-b-2 border-gray-300 sticky top-0 z-20" style={{ fontFamily: 'var(--font-text)' }}>
      {/* Logo */}
      <div>
        <img alt="logo" src={img_logo} className="w-50 h-50" />
      </div>
      {/* Desktop Navigation */}
      <ul className="  font-heading hidden lg:flex gap-14 transition duration-300 ease-in group">
        <li>
          <a href="/" className="nav-item">Home</a>
        </li>
        <li className="relative z-10" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <span className="nav-item cursor-pointer">Discover</span>
          <ul className={`flex flex-col gap-2 p-3 w-[159px] absolute bg-white rounded-lg shadow-lg text-[#37474F] ${isHover ? 'block' : 'hidden'}`}>
            <li className="flex gap-3">
              <div className="bg-[url('/Images/Others/about-us-dark.jpeg')] bg-no-repeat bg-center bg-contain"></div>
              <a href="/about-us" className="nav-item">About Us</a>
            </li>
            <li className="flex gap-3">
              <div className="bg-[url('/Images/Others/quality-dark-icon.jpeg')] bg-no-repeat bg-center bg-contain"></div>
              <a href="/contact-us" className="nav-item">Contact Us</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/treatments" className="nav-item">Treatments</a>
        </li>
        <li>
          <a href="/hospitals" className="nav-item">Hospitals</a>
        </li>
        <li>
          <a href="/doctors" className="nav-item">Doctors</a>
        </li>
        <li>
          <a href="/free-quote" className="golden-yellow text-[#37474F] px-4 py-2 rounded hover:brightness-90 transition duration-300 ease-in">
            Free Quote
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="relative">
        <button onClick={handleMenuOpen} className="lg:hidden z-30 text-[#37474F]">
          {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <ul className={`mobile-navbar lg:hidden z-10 bg-white absolute h-screen w-full top-0 left-0 flex justify-center items-center flex-col gap-10 ${isMenuOpen ? 'block' : 'hidden'}`} ref={navbarRef}>
        <li>
          <a href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>About Us</a>
        </li>
        <li>
          <a href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </li>
        <li>
          <a href="/treatments" className="nav-item" onClick={() => setIsMenuOpen(false)}>Treatments</a>
        </li>
        <li>
          <a href="/hospitals" className="nav-item" onClick={() => setIsMenuOpen(false)}>Hospitals</a>
        </li>
        <li>
          <a href="/doctors" className="nav-item" onClick={() => setIsMenuOpen(false)}>Doctors</a>
        </li>
        <li>
          <a href="/free-quote" className="golden-yellow text-[#37474F] px-4 py-2 rounded hover:brightness-90 transition duration-300 ease-in w-full" onClick={() => setIsMenuOpen(false)}>
            Free Quote
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;