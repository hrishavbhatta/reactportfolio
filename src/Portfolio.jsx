import React from "react";
import "./Portfolio.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import work1 from "./Image/work-1.png";
import work2 from "./Image/work-2.png";
import work3 from "./Image/work-3.png";

// Data-driven projects
const projects = [
  {
    img: work1,
    title: "Social Media App",
    desc: "The app connects you to talented people around the world. Download it from Play Store.",
    link: "#",
  },
  {
    img: work2,
    title: "Music App",
    desc: "The app connects you to talented people around the world. Download it from Play Store.",
    link: "#",
  },
  {
    img: work3,
    title: "Online Shopping App",
    desc: "The app connects you to talented people around the world. Download it from Play Store.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/hrishavbhatta"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          See more
        </a>
      </div>
      
    </section>
  );
};

export default Portfolio;
