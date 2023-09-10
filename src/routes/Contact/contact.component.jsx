import React from 'react'
import classes from "./contact.module.css";

import Button from "../../components/button/button.component";

const Contact = () => {
  return (
    <section className={classes["contact-page"]}>
      <form className={classes["contact-form"]}>
        <input id="email" type="email" placeholder="Your Email" />
        <input id="name" type="text" placeholder="Your Name" />
        <textarea id="message" placeholder="Your Message" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default Contact