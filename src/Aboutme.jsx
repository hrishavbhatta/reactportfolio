import React, { useState } from "react";
import "./Aboutme.css";
import me from "./Image/Memyself.jpg";

const Aboutme = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
  ];

  const tabContents = {
    skills: [
      { title: "UI/UX", desc: "Designing Web/App Interfaces" },
      { title: "Web Development", desc: "Web App Development" },
      { title: "App Development", desc: "Android / iOS Apps" },
    ],
    experience: [
      { title: "2024-Current", desc: "UI/UX Training at Sunway College" },
      { title: "2019-2021", desc: "Team Lead" },
      { title: "2017-2018", desc: "Internship" },
    ],
    education: [
      { title: "2029", desc: "Bachelor" },
      { title: "2024", desc: "+2" },
      { title: "2022", desc: "School" },
    ],
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">

          {/* Left Column */}
          <div className="about-col-1">
            <img src={me} alt="Me" />
          </div>

          {/* Right Column */}
          <div className="about-col-2">
            <h1 className="subtitle">About Me</h1>
            <p>
              Passionate designer and developer creating seamless digital experiences.
            </p>

            {/* Tabs */}
            <div className="tab-titles">
              {tabs.map((tab) => (
                <p
                  key={tab.id}
                  className={`tab-links ${activeTab === tab.id ? "active-link" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </p>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="tab-contents-container">
              {tabContents[activeTab].map((item, index) => (
                <div className="tab-contents" key={index}>
                  <li>
                    <span>{item.title}</span><br />
                    {item.desc}
                  </li>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
