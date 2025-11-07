import { useState } from "react";
import { Menu, X } from "lucide-react";
import IMG1 from "./assets/RAFAZ-WEB-LOGO-BLUE.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar flex justify-between items-center w-full px-4 md:px-6 py-4 mx-auto overflow-hidden">
      {/* Logo */}
      <div className="navbar-logo flex gap-2 text-2xl font-bold">
        <img className="w-10 h-10" src={IMG1} alt="Logo" />
        RAFAZ <span className="text-[#473BF0]">WEB</span>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links hidden md:flex gap-6 items-center">
        <li><button onClick={() => scrollToSection("home")} className="hover:text-[#473BF0]">Home</button></li>
        <li><button onClick={() => scrollToSection("about")} className="hover:text-[#473BF0]">About</button></li>
        <li><button onClick={() => scrollToSection("services")} className="hover:text-[#473BF0]">Services</button></li>
        <li><button onClick={() => scrollToSection("contact")} className="hover:text-[#473BF0]">Contact</button></li>
        <li>
          <button
            onClick={() => scrollToSection("quote")}
            className="border rounded-[10px] bg-[#473BF0] hover:bg-[#362FCC] text-white py-2 px-4"
          >
            Get A Free Quote
          </button>
        </li>
      </ul>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-screen bg-white shadow-md md:hidden border-t border-gray-200 z-50">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("services")}>Services</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
            <li>
              <a
                href="https://wa.link/n13cpz"
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
