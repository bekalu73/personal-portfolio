import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab amet veritatis reiciendis doloribus ut, facere porro, ipsa cum, unde quisquam quis corporis ipsam iusto tempore officiis. Accusantium, esse ab?",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab amet veritatis reiciendis doloribus ut, facere porro, ipsa cum, unde quisquam quis corporis ipsam iusto tempore officiis. Accusantium, esse ab?",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab amet veritatis reiciendis doloribus ut, facere porro, ipsa cum, unde quisquam quis corporis ipsam iusto tempore officiis. Accusantium, esse ab?",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ab amet veritatis reiciendis doloribus ut, facere porro, ipsa cum, unde quisquam quis corporis ipsam iusto tempore officiis. Accusantium, esse ab?",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Slider className="container testimoials__container" {...settings}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <div key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Testimonials;
