import React, { useState } from "react";
import "./Contact.css";
import cv from "./Image/CV.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("✅ Message sent successfully!");
    e.target.reset();

    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>

            <p>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span> hrishav321dev@gmail.com</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span> 9806416720</span>
            </p>

            <div className="socialicons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>

              <a
                href="https://www.instagram.com/hrishav005/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/in/bhattahrishav/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <a href={cv} download className="btn btn2">
              Download CV
            </a>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                required
              />

              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>

            {msg && <span id="msg">{msg}</span>}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
