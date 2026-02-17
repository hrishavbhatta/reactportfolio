import React from "react";
import "./Services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const servicesData = [
  {
    icon: faCode,
    title: "Web Design",
    description:
      "I create modern, responsive websites that are visually appealing and user-friendly.",
    link: "#",
  },
  {
    icon: faCropSimple,
    title: "UI/UX Design",
    description:
      "Designing seamless and intuitive interfaces for web and mobile applications.",
    link: "#",
  },
  {
    icon: faAppStore,
    title: "App Design",
    description:
      "Building beautiful and functional Android/iOS applications from scratch.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link} className="service-link">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
