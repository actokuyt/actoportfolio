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
import projImg12 from "../assets/img/projImg12.png";
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
      link: "https://actokuyt.github.io/fullstack-roadmap/html-css/csfyi/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/csfyi",
    },
    {
      title: "Loading Animation",
      imgUrl: projImg4,
      link: "https://actokuyt.github.io/fullstack-roadmap/html-css/loading-animation/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/loading-animation",
    },
    {
      title: "Writings",
      imgUrl: projImg5,
      link: "https://actokuyt.github.io/fullstack-roadmap/html-css/writings/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/writings",
    },
    {
      title: "Calculator App",
      imgUrl: projImg6,
      link: "https://actokuyt.github.io/fullstack-roadmap/javascript/calculator-app/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/calculator-app",
    },
    {
      title: "Todo App v1",
      imgUrl: projImg7,
      link: "https://actokuyt.github.io/fullstack-roadmap/javascript/todo-app-v1/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/todo-app-v1",
    },
    {
      title: "Social Media Accordion",
      imgUrl: projImg9,
      link: "https://actokuyt.github.io/fullstack-roadmap/javascript/social-media-accordion/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/social-media-accordion",
    },
    {
      title: "Github Profiler",
      imgUrl: projImg10,
      link: "https://actokuyt.github.io/fullstack-roadmap/npm/github-profiler/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/github-profiler",
    },
    {
      title: "International Clock",
      imgUrl: projImg11,
      link: "https://actokuyt.github.io/fullstack-roadmap/npm/international-clock/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/international-clock",
    },
    {
      title: "Todo App v2",
      imgUrl: projImg12,
      link: "https://actokuyt.github.io/fullstack-roadmap/crud/todo-app-v2/frontend/index.html",
      github: "https://github.com/actokuyt/fullstack-roadmap/tree/master/crud/todo-app-v2",
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
