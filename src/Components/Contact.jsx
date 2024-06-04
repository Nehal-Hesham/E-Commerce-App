import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="contact-form">
              <h3>Send a message</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Write Your Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write Your Message"
                  ></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Details</h3>
              <p>
                <i className="fas fa-phone"></i>+1123456787
              </p>
              <p>
                {" "}
                <i className="fas fa-envelope"></i>deta@example.com
              </p>
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i>123 st. City, Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
