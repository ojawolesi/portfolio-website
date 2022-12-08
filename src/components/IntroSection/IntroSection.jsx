import React from "react";
import "./IntroSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portraitImg from "../../assets/images/studio-portrait-1.jpg";
import { Button } from "react-bootstrap";

function IntroSection({ isSmallScreen }) {
  return (
    <div style={{ padding: "none", margin: "none" }}>
      <Container className="mx-auto">
        <Row>
          <Col xs lg="5">
            <div></div>
            <div style={{ marginTop: "12rem" }}>
              <h3>Hello, it's me</h3>
              <h1>
                Olasubomi
                <span style={{ color: "#5f99ff" }}>.</span>
              </h1>
              <p>
                An enthusiastic and proactive technologist, passionate about all
                things design. Currently looking for an innovative environment
                with a positive culture to develop and grow as a full-stack
                software engineer.
              </p>
              <Button className="scrollBtn">Scroll for more</Button>
            </div>
          </Col>
          <Col lg={5}>
            <div>
              <img src={portraitImg} alt="" width="535" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
