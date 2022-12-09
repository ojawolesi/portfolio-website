import "./CareerSection.css";
import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function CareerSection({ isSmallScreen, career }) {
  return (
    <div id="career" className="career-box">
      <Container className="mx-auto">
        <div
          className={`${
            isSmallScreen ? "m-career-heading-box" : "career-heading-box"
          }`}
        >
          <h1>
            Career
            <span style={{ color: "#5f99ff" }}>+</span>
          </h1>
          <a
            className="career-cv-btn"
            href="https://www.icloud.com/iclouddrive/081dZpoAmaq_YgLnXCZP5ePvQ#website-portfolio-CV"
          >
            <Button>Download CV</Button>
          </a>
        </div>
        <Container>
          <Row className={`${isSmallScreen && "m-career-row"} career-row`}>
            {career.map((career, index) => (
              <Col key={`career-col-${index}`}>
                <div key={career.id}>
                  <div className="flex items-center">
                    <span style={{ color: "#5f99ff" }}>|</span>
                    <h5>{career?.company}</h5>
                  </div>
                  <div>
                    <p className="career-role">{career?.role}</p>
                    <p className="career-date">{career?.date}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default CareerSection;
