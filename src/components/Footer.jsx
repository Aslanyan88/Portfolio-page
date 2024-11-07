import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Arman Aslanyan. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/Aslanyan88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/arman-aslanyan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://medium.com/@aslanyanarman88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="hover:text-gray-400"
          >
            <FaMedium size={24} />
          </a>
        </div>
        <a
          href="#top"
          className="block mt-4 text-blue-500 hover:text-blue-700"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
