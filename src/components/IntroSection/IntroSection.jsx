import React from "react";
import "./IntroSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import portraitImg from "../../assets/images/studio-portrait-1.jpg";

function IntroSection({ isSmallScreen }) {
  return (
    <div style={{ padding: "none", margin: "none" }} id="intro">
      <Container className="mx-auto">
        <Row>
          <Col xs lg={5}>
            <div className={`${isSmallScreen && "m-heading-box"} heading-box`}>
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
              <div className={"typist"}>
                <Typewriter
                  options={{
                    strings: [
                      "<h1 >Software<br/>Engineer</h1>",
                      "<h1 >Web<br/>Developer</h1>",
                      "<h1 >Graphic<br/>Designer</h1>",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
              </div>
              {!isSmallScreen && (
                <Button className="scrollBtn">Scroll for more</Button>
              )}
            </div>
          </Col>
          <Col lg={5} md={1} className={`${isSmallScreen && "profile-box"}`}>
            {isSmallScreen ? (
              <div className="m-profile-box">
                {isSmallScreen ? (
                  <img src={portraitImg} alt="" className="m-profile-box-img" />
                ) : (
                  <img src={portraitImg} alt="" width="500" />
                )}
              </div>
            ) : (
              <div>
                {isSmallScreen ? (
                  <img src={portraitImg} alt="" className="m-profile-box-img" />
                ) : (
                  <img src={portraitImg} alt="" width="500" />
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
