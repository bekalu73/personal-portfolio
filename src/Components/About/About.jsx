import React from "react";
import "./About.css";
import MEabout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderOpenDot } from "react-icons/lu";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEabout} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>
            <article className="about__card">
              <LuFolderOpenDot className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div> */}
          <p>
            Greetings👋 ! I am a dedicated MERN (MongoDB, Express.js, React.js,
            Node.js) full-stack website developer located in Addis Ababa,
            Ethiopia. With a passion for crafting seamless digital experiences,
            I specialize in transforming ideas into user-friendly and innovative
            web solutions. My journey in web development is marked by a
            commitment to continuous learning, and I thrive on creating websites
            that not only meet but exceed expectations. Living in the dynamic
            tech scene of Addis Ababa has provided me with diverse project
            experiences, contributing to the digital transformation of the
            region. I believe in the power of technology to bridge gaps and
            create meaningful connections, and I am dedicated to shaping the
            digital future. Explore my portfolio, and let's collaborate to turn
            your ideas into extraordinary digital realities. 🚀
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
