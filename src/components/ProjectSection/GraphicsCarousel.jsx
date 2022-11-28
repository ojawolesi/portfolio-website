import React from "react";
import "./GraphicsCarousel.css";
import carouselImg1 from "../../assets/images/carouselImgs/carouselImg01.jpg";
import carouselImg2 from "../../assets/images/carouselImgs/carouselImg02.jpg";
import carouselImg3 from "../../assets/images/carouselImgs/carouselImg03.jpg";
import carouselImg4 from "../../assets/images/carouselImgs/carouselImg04.jpg";
import carouselImg5 from "../../assets/images/carouselImgs/carouselImg05.jpg";
import carouselImg6 from "../../assets/images/carouselImgs/carouselImg06.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, CardImg, Carousel } from "react-bootstrap";

function GraphicsCarousel() {
  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item>
          <Row>
            <Col>
              <Card
                style={{
                  top: "25%",
                  width: "100%",
                  alignItems: "center",
                  border: 0,
                  background: "#000",
                }}
              >
                <CardImg
                  src={carouselImg1}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>5STARUK Flyer</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  background: "#000",
                  margin: "0 0 1.5rem 0",
                  border: 0,
                }}
              >
                <CardImg
                  src={carouselImg2}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>Instagram Stories</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  background: "#000",
                  margin: "0 0 1.5rem 0",
                  border: 0,
                }}
              >
                <CardImg
                  src={carouselImg3}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>Instagram Posts</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card
                style={{
                  top: "25%",
                  width: "100%",
                  alignItems: "center",
                  border: 0,
                  background: "#000",
                }}
              >
                <CardImg
                  src={carouselImg4}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>YouTube Thumbnails</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  background: "#000",
                  margin: "0 0 1.5rem 0",
                  border: 0,
                }}
              >
                <CardImg
                  src={carouselImg5}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>OFFSPRING Raffle</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  background: "#000",
                  margin: "0 0 1.5rem 0",
                  border: 0,
                }}
              >
                <CardImg
                  src={carouselImg6}
                  style={{
                    borderRadius: "1rem",
                    objectFit: "cover",
                    height: "330px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2>Party Stickers</h2>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GraphicsCarousel;
