import React from "react";
import "./Header.css";
import Cvrow from "./Cvrow";
import ME from "../../assets/me.png";
import Headersocials from "./Headersocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello 👋 , I'm </h5>
        <h1>Bekalu Sisay Iticha</h1>
        <h5>Fullstack Website Developer</h5>
        <Cvrow />
        <Headersocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
