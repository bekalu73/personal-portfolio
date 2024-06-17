import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mfrh1qq",
      "template_5k71bst",
      form.current,
      "c6CjRUOc0JEugPpoj"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bekalusisay2010@gmail.com</h5>
            <a href="mailto:bekalusisay2010@gmail.com" target="_blank">
              Send Message
            </a>
          </article>
          {/* <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Bekalu Sisay</h5>
            <a href="http://facebook.com" target="_blank">
              Send Message
            </a>
          </article> */}
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2519 46 93 12 71</h5>
            <a
              href="https://api.whatsapp.com/send?phone=%2B251946931271"
              target="_blank"
            >
              Send Whatsapp Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Full email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Leave Your Message Here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
