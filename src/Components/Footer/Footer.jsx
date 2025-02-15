import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Bekalu
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/bekalu-sisay-b82147241/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/bekalu73" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Bekalu Sisay. All rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
