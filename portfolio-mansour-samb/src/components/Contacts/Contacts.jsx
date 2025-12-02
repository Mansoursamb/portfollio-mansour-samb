import React from "react";
import "./Contacts.css";

const Contact = () => {
  console.log("Contact render", new Date().toISOString());
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Vous pouvez me contacter via email ou réseaux sociaux.</p>
    </section>
  );
};

export default Contact;
