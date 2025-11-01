import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger + close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center px-6 py-4 max-w-full mx-auto">
      {/* Logo */}
      <div className="navbar-logo text-2xl font-bold">
        RAFAZ <span className="text-[#473BF0]">WEB</span>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links hidden md:flex gap-6 items-center">
        <li><a href="#home" className="hover:text-[#473BF0]">Home</a></li>
        <li><a href="#about" className="hover:text-[#473BF0]">About</a></li>
        <li><a href="#services" className="hover:text-[#473BF0]">Services</a></li>
        <li><a href="#contact" className="hover:text-[#473BF0]">Contact</a></li>
        <li>
          <a
            className="border rounded-[10px] bg-[#473BF0] hover:bg-[#362FCC] text-white py-2 px-4"
            href="#quote"
          >
            Get A Free Quote
          </a>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden border-t border-gray-200 z-50">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li>
              <a
                href="#quote"
                className="border rounded-[10px] bg-[#473BF0] hover:bg-[#362FCC] text-white py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Get A Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
