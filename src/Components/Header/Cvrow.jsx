import React from "react";
import CV from "../../assets/cv.pdf";

function Cvrow() {
  return (
    <div className="cv-row">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default Cvrow;
