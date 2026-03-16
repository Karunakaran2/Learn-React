import { Link } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { PlusCircle, MinusCircle, RefreshCcw, Contrast, Menu, Search } from 'lucide-react';

export function Header() {
  const { increaseFontSize, decreaseFontSize, resetFontSize, toggleHighContrast } = useAccessibility();

  return (
    <header className="header">
      {/* Top Bar - Accessibility & Quick Links */}
      <div className="top-bar bg-primary text-white py-1">
        <div className="container flex justify-between items-center text-sm">
          <div className="gov-links flex gap-4">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to Main Content</a>
            <span>Government of India</span>
            <span>Ministry of Ports, Shipping and Waterways</span>
          </div>
          <div className="accessibility-bar flex items-center gap-4">
            <div className="font-controls flex gap-2">
              <button onClick={decreaseFontSize} title="Decrease Font Size" aria-label="Decrease Font Size"><MinusCircle size={16} /></button>
              <button onClick={resetFontSize} title="Reset Font Size" aria-label="Reset Font Size"><RefreshCcw size={16} /></button>
              <button onClick={increaseFontSize} title="Increase Font Size" aria-label="Increase Font Size"><PlusCircle size={16} /></button>
            </div>
            <button onClick={toggleHighContrast} title="Toggle High Contrast" aria-label="Toggle High Contrast" className="flex items-center gap-1">
              <Contrast size={16} /> Contrast
            </button>
            <div className="language-toggle">
              <button className="font-bold">English</button> | <button>हिन्दी</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="main-header glass-panel my-2">
        <div className="container flex justify-between items-center py-4">
          <div className="brand flex items-center gap-4">
            <div className="logo-placeholder bg-secondary w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              SPFO
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Seamen's Provident Fund Organisation</h1>
              <p className="text-sm text-light">Directorate General of Shipping, Govt. of India</p>
            </div>
          </div>
          <div className="emblem-placeholder flex items-center">
            {/* Placeholder for Govt Emblem */}
            <div className="text-center text-xs text-light border-l border-border-color pl-4">
              <p>सत्यमेव जयते</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="main-nav bg-primary text-white rounded-md container flex justify-between items-center p-0">
        <ul className="flex">
          <li><Link to="/" className="block px-4 py-3 hover:bg-secondary transition">Home</Link></li>
          <li><Link to="/about" className="block px-4 py-3 hover:bg-secondary transition">About SPFO</Link></li>
          <li><Link to="/acts-rules" className="block px-4 py-3 hover:bg-secondary transition">Acts & Rules</Link></li>
          <li><Link to="/circulars" className="block px-4 py-3 hover:bg-secondary transition">Circulars & Notifications</Link></li>
          <li><Link to="/services" className="block px-4 py-3 hover:bg-secondary transition">Services</Link></li>
          <li><Link to="/news" className="block px-4 py-3 hover:bg-secondary transition">News</Link></li>
          <li><Link to="/gallery" className="block px-4 py-3 hover:bg-secondary transition">Gallery</Link></li>
          <li><Link to="/contact" className="block px-4 py-3 hover:bg-secondary transition">Contact Us</Link></li>
        </ul>
        <div className="search-bar pr-4 flex items-center gap-2">
           <input type="text" placeholder="Search..." className="px-2 py-1 rounded text-black text-sm" />
           <Search size={18} className="cursor-pointer hover:text-secondary" />
        </div>
      </nav>
    </header>
  );
}
