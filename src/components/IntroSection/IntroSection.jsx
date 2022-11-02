import React from "react";
import "./IntroSection.css"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portraitImg from "../../assets/images/studio-portrait-1.jpg";
import {Button} from "react-bootstrap";

function IntroSection(){
    return(
    <div >
        <Container class="mx-auto">
            <Row >
                <Col xs lg="5">
                    <div> </div>
                    <div style={{marginTop: "12rem"}} >
                        <h3 >Hello, it's me</h3>
                        <h1 >
                            Olasubomi
                            <span style={{color: "blue"}}>.</span>
                        </h1>
                        <p >
                            An enthusiastic and proactive technologist, passionate about all
                            things design. Currently looking for an innovative environment with
                            a positive culture to develop and grow as a full-stack software
                            engineer.
                        </p>
                        <br/>
                        <Button className="scrollBtn" >
                            SCROLL FOR MORE
                        </Button>
                        </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={portraitImg} alt="" width="535" />
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="mt-32 flex items-center md:mx-56 md:mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Hello, it's me</h2>
                <h1 className="text-7xl font-bold md:text-8xl">
                    Olasubomi<span className="text-blue">.</span>
                </h1>
                <p className="text-justify text-base text-lightGray">
                    An enthusiastic product designer currently shaping the future of
                    software development by designing smooth user-interfaces that
                    promote user interaction with information and data. While traveling
                    around the world.
                </p>
                <button className="actionBtn  border-b border-solid border-blue pr-4 pb-2">
                    SCROLL FOR MORE
                </button>
            </div>

            <div>
                <img src={portraitImg} alt="" width="" />
            </div>
        </div>
    </div>);
}

export default IntroSection;