import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./contact.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoCodepen } from "react-icons/bi";
import { SiUpwork } from "react-icons/si";

import Button from "../../components/button/button.component";

const Contact = () => {
  const formInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formInputRef.current,
      process.env.REACT_APP_EMAILJS_PUPLIC_KEY
    );
    e.target.reset();
  };
  return (
    <section className={classes["contact-page"]}>
      <ul className={classes.social}>
        <li>
          <a
            target="_blank"
            href="https://mostaql.com/u/karim_ghanim"
            rel="noreferrer"
          >
            <span className={`${classes.mostaql} icon`}></span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="www.linkedin.com/in/karim-ghanem-99b805228"
          >
            <BiLogoLinkedin className={classes.icon} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.upwork.com/freelancers/~011e4d04eabb6768a5"
          >
            <SiUpwork className={classes.icon} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KarimWG7"
          >
            <BiLogoGithub className={classes.icon} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://codepen.io/Karimwg">
            <BiLogoCodepen className={classes.icon} />
          </a>
        </li>
      </ul>
      <form
        className={classes["contact-form"]}
        onSubmit={formSubmitHandler}
        ref={formInputRef}
      >
        <input
          id="name"
          type="text"
          placeholder="Your Full Name"
          name="name"
          required
        />
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          required
          name="message"
        />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
