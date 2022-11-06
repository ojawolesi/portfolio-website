import React from "react";
import "./SkillSection.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import portraitImg from "../../assets/images/studio-portrait-1.jpg";


function SkillSection (){
    return (
        <div >
            <Container class="mx-auto">
                <Row >
                    <Col xs lg="5">
                        <div className="skill-set">
                        <h6 >MY SKILLSET</h6>
                        <h2 >
                            Software Engineer,
                            <br />
                            Web Developer &
                            <br />
                            Graphic Designer
                        </h2>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <p className="text-justify text-lightGray md:w-3/4">
                            Working as a Software Engineer, I have developed my skills as
                            they pertain to: assessing client needs; understanding the functionality
                            of a codebase and refactoring code to implement new features. I
                            relish the opportunity to take creative and analytical approaches to
                            solving client problems. I would consider myself technology agnostic,
                            I have taken up web-development projects in my free-time, using the MERN tech
                            stack. Whilst, I have been exposed to Java and C# using WPF and ASP.NET
                            professionally.
                            <br />
                            I work extensively with my church designing graphics and have also worked with
                            SME clients. I am always seeking new exciting opportunities work on new
                            projects software and graphics alike. Let's connect and create!
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default SkillSection;