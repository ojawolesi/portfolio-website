import "./CareerSection.css";
import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function CareerSection(props) {
  return (
    <div id="career">
      <Container className="mx-auto">
        <a href="https://www.icloud.com/iclouddrive/081dZpoAmaq_YgLnXCZP5ePvQ#website-portfolio-CV">
          <Button className="career-cv-btn">Download CV</Button>
        </a>
        <h1 style={{ margin: "6rem 0 3rem" }}>
          Career
          <span style={{ color: "#5f99ff" }}>+</span>
        </h1>

        <Container>
          <Row className="career-row">
            {props.career.map((career, index) => (
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
