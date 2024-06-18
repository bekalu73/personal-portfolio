import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/retina logo.jpg";
import Blog from "../../assets/blog logo.jpg";
import Book from "../../assets/bookstore logo.jpg";
import CHAT from "../../assets/chatapp logo.jpg";
import FORUM from "../../assets/evangadi form.jpeg";
import SOCIAL from "../../assets/social media app.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix React Clone",
    // github: "https://github.com/bekalu73/Netflix-Clone",
    demo: "https://netflix-clone-7f097.firebaseapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Apple React Clone",
    github: "https://github.com/bekalu73/Apple-React-Clone",
    demo: "https://65926c3364ff8c9209499613--aquamarine-genie-c73f3f.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Apple Bootstrap Clone",
    github: "http://github.com",
    demo: "https://aquamarine-genie-c73f3f.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Amazon Frontend Clone",
    github: "https://github.com/bekalu73/amazon-frontend-clone",
    // demo: "react-clone-727fc.web.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Retina Pharmaceuticals",
    github: "https://github.com/bekalu73/retina-pharma",
    demo: "https://6592670864ff8c8fb049969f--aquamarine-genie-c73f3f.netlify.app/",
  },
  {
    id: 6,
    image: Blog,
    title: "Fullstack Blogging App",
    github: "https://github.com/bekalu73/MERN-blog-website",
  },
  {
    id: 7,
    image: Book,
    title: "Fullstack Bookstore App",
    github: "https://github.com/bekalu73/Book-Store-MERN-Stack",
  },
  {
    id: 8,
    image: SOCIAL,
    title: "Social Media App",
    github: "https://github.com/bekalu73/Nodejs-social-media-app",
  },
  {
    id: 9,
    image: CHAT,
    title: "Chat App with WebSocket",
    github: "https://github.com/bekalu73/chat-app-with-websockets",
  },
  {
    id: 10,
    image: FORUM,
    title: "Evangadi Forum Backend",
    github: "https://github.com/bekalu73/Evangadi-Forum",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : (
                  ""
                )}
                {demo ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
