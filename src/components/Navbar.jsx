import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Arman Aslanyan</div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 w-full md:w-auto`}
        >
          <Link to="/" className="block py-2 px-4 hover:text-blue-500">
            Home
          </Link>
          <Link to="/linkedin" className="block py-2 px-4 hover:text-blue-500">
          Articles
          </Link>
          <Link
            to="/certifications"
            className="block py-2 px-4 hover:text-blue-500"
          >
            Certifications
          </Link>
          <Link to="/github" className="block py-2 px-4 hover:text-blue-500">
            Projects
          </Link>
          <Link to="/reviews" className="block py-2 px-4 hover:text-blue-500">
            Reviews
          </Link>
          <Link to="/about" className="block py-2 px-4 hover:text-blue-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
