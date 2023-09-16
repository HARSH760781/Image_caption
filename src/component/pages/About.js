import React from "react";
import "../style/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a dedicated team of developers passionate
        about creating innovative solutions.
      </p>
      <p>
        Our mission is to provide high-quality software that meets the needs of
        our users. We are constantly striving to improve and deliver the best
        user experience possible.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>
          <strong>John Doe</strong> - CEO & Co-founder
        </li>
        <li>
          <strong>Jane Smith</strong> - CTO & Lead Developer
        </li>
        <li>
          <strong>Alice Johnson</strong> - UI/UX Designer
        </li>
        <li>
          <strong>Bob Williams</strong> - Marketing Manager
        </li>
      </ul>
      <p>
        We are always looking for talented individuals to join our team. If you
        are passionate about technology and want to make a difference, consider
        applying to work with us.
      </p>
    </div>
  );
};

export default About;
