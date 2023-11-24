import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import bgVid from "../assets/img/bg-vid.mp4";

import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const textChar =
    "Hey!, I'm ThankGod, CEO Acto Technologies, a multi talented and introverted tech nerd. Here's a portfolio of my skills, previous and on-going projects.";

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 100000000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let updatedText = textChar.substring(0, text.length + 1);
    setText(updatedText);
    if (updatedText === textChar) {
      setDelta(period);
    }
  };

  return (
    <section className="banner" id="home">
      <video autoPlay muted loop className="bg-vid">
        <source src={bgVid} type="video/mp4" />
      </video>
      <Container className="bg-shade">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    className="header-img"
                    src={headerImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <p className="wrap" data-rotate="">
                    {text}
                  </p>
                  <Nav>
                    <Nav.Link href="#connect">
                      <button>
                        Let’s Connect <ArrowDownCircle size={25} />
                      </button>
                    </Nav.Link>
                  </Nav>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
