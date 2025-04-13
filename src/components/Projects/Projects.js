import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecell from "../../Assets/Projects/e-cell.png";
import intellihire from "../../Assets/Projects/intellihire.png";
import esummit from "../../Assets/Projects/e-summit .png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intellihire}
              isBlog={false}
              title="Intelli Hire"
              description="This virtual Ai is a cutting edge AI-powered platform that leverages the power of AI to revolutionize the way companies hire employees. It uses advanced algorithms to analyze job descriptions, candidate profiles, and market trends to identify the best candidates for a given role."
              ghLink="https://github.com/yashh150/mindDBHackathon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esummit}
              isBlog={false}
              title="E-summit 2025"
              description="E-summit is an annual entrepreneurship summit organized by the Entrepreneurship Cell of IIT Roorkee. It is a platform for students to showcase their entrepreneurial skills and ideas.over 10000+ students participated in this event and purchased tickets from the website."
              websiteLink="https://www.esummit.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecell}
              isBlog={false}
              title="E-cell website"
              description="E-cell IIT Roorkee is a student-run organization that promotes entrepreneurship and innovation on the campus. The website holds information about all the initiatives and events conducted by the E-cell."
              websiteLink="https://ecelliitr.org/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
