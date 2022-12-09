import "./ContactSection.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

function ContactSection() {
  return (
    <div id="contact">
      <Container className="mx-auto">
        <div style={{ textAlign: "center" }}>
          <h6
            style={{
              marginBottom: "1.5rem",
              fontWeight: "700",
              color: "#5f99ff",
            }}
          >
            WHAT'S NEXT?
          </h6>
          <h2 style={{ marginBottom: "2rem" }}>Let's connect!</h2>
          <p style={{ textAlign: "center" }}>
            If you'd like to discuss a software or design project you think I
            can be of
            <br />
            assistance with, just drop me a message at
            <span className="font-bold text-white">
              {" "}
              j.awolesi99@gmail.com
            </span>{" "}
          </p>
          <div className="flex justify-center">
            <a href="mailto:j.awolesi99@gmail.com">
              <Button className="email-btn">
                Write me an email {"   "}
                <i className="fa fa-envelope"></i>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactSection;
