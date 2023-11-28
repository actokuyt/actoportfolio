import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import projImg7 from "../assets/img/projImg7.png";
import projImg9 from "../assets/img/projImg9.png";
import projImg10 from "../assets/img/projImg10.png";
import projImg11 from "../assets/img/projImg11.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Acto's Portfolio",
      imgUrl: projImg1,
      link: "https://actoportfolio.netlify.app/",
      github: "https://github.com/actokuyt/actoportfolio",
    },
    {
      title: "cs.fyi",
      imgUrl: projImg2,
      link: "https://actokuyt.github.io/fullstack-roadmap/HTML_CSS/csfyi/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/HTML_CSS/csfyi",
    },
    {
      title: "Loading Animation",
      imgUrl: projImg4,
      link: "https://actokuyt.github.io/fullstack-roadmap/HTML_CSS/Loading-Animation/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/HTML_CSS/Loading-Animation",
    },
    {
      title: "Writings",
      imgUrl: projImg5,
      link: "https://actokuyt.github.io/fullstack-roadmap/HTML_CSS/Writings/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/HTML_CSS/Writings",
    },
    {
      title: "Calculator App",
      imgUrl: projImg6,
      link: "https://actokuyt.github.io/fullstack-roadmap/JavaScript/myCalculatorApp/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/JavaScript/myCalculatorApp",
    },
    {
      title: "Todo App",
      imgUrl: projImg7,
      link: "https://actokuyt.github.io/fullstack-roadmap/JavaScript/myTodoApp/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/JavaScript/myTodoApp",
    },
    {
      title: "Social Media Accordion",
      imgUrl: projImg9,
      link: "https://actokuyt.github.io/fullstack-roadmap/JavaScript/Social-media-accordion/",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/JavaScript/Social-media-accordion",
    },
    {
      title: "Github Profiler",
      imgUrl: projImg10,
      link: "https://actokuyt.github.io/fullstack-roadmap/npm/githubProfiler/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/githubProfiler",
    },
    {
      title: "International Clock",
      imgUrl: projImg11,
      link: "https://actokuyt.github.io/fullstack-roadmap/npm/internationalClock/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/internationalClock",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of the projects I've been a part of. Feel
                    free to connect with me if any is of interest to you. It's
                    an ever growing collection, you can always come back to
                    check for updates.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Embedded Systems Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Repairs and Maintainance</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          this page will be updated soon.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          this page will be updated soon.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
