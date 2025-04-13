import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Talwar </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />
            A passionate Full Stack Developer with a keen interest in building innovative solutions.
            <br />
            I am currently pursuing my BTech in Metallurgy and Materials Engineering at IIT Roorkee.
            <br />
            <br />
            When I'm not coding, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying the rich culture of Jaipur
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into reality through code!"{" "}
          </p>
          <footer className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
