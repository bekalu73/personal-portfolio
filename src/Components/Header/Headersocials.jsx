import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Headersocials() {
  return (
    <div className="header__socials">
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
  );
}

export default Headersocials;
