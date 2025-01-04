import { FaGithub, FaInstagram, FaLinkedin, FaCode } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={33}
            alt="logo"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/harshwaibhav1708"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Harsh1708V"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Harsh1708V/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
            <FaCode />
        </a>
        <a
          href="https://www.instagram.com/ha.rshh__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
