import React from "react";
import "./Services.css";
import web from "../../assets/coding.png";
import responsive from "../../assets/responsive-design.png";
import code from "../../assets/code.png";
import ontime from "../../assets/clock.png";
import learner from "../../assets/student.png";
import online from "../../assets/wireless-symbol.png";

const data = [
  {
    id: 1,
    image: web,
    title: "Web Development",
    description:
      "I do some research before starting my development to choose the right way for the job.",
  },
  {
    id: 2,
    image: responsive,
    title: "Fully Responsive",
    description:
      "I design my websites for every screen size available and I make sure it looks great on every device.",
  },
  {
    id: 3,
    image: code,
    title: "Beautiful Code",
    description:
      "Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.",
  },
  {
    id: 4,
    image: ontime,
    title: "On Time",
    description: "Always responsible to complete any given project on time.",
  },
  {
    id: 5,
    image: learner,
    title: "Quick Learner",
    description:
      "I like to learn new things and I have the ability to learn it quickly.",
  },
  {
    id: 6,
    image: online,
    title: "Online",
    description: "Easy to reach and happy to help.",
  },
];

function Services() {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {data.map(({ id, image, title, description }) => {
          return (
            <article className="service__item" key={id}>
              <div className="service__item-image serice-icon">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="service__item-cta">
                <p className="text-light">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
