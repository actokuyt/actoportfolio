import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/header-img.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://web.facebook.com/profile.php?id=100076898382655">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/acto60/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
