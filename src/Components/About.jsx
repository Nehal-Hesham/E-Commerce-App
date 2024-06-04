import React from "react";
import shoppingOnline from "./Images/shopping-online.jpg";
import "./about.css";

function About() {
  return (
    <>
      <div className="heading">
        <h1>About Us</h1>
        <p>Online Shopping is the best</p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={shoppingOnline} alt="shopping" />
          </div>
          <div className="about-content">
            <h2>Feel Free and shopping online</h2>
            <p>
              buying and selling of goods and services, or the transmitting of
              funds or data, over an electronic network, primarily the internet.
              This includes transactions between businesses, consumers, and
              organizations, as well as internal organizational transactions
              that support these activities.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
