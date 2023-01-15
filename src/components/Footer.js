import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import {Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Nav.Link className="LOGO" href="#home">
              DJ Bone
            </Nav.Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/laihong-kuo-83b186245/"
                target="_blank"
                title="Linkedin"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="mailto:F111110111@nkust.edu.tw"
                target="_blank"
                title="Email"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/klhong_0627/"
                target="_blank"
                title="Instagram"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://github.com/jake0627a1"
                target="_blank"
                title="GitHub"
                rel="noreferrer"
              >
                <img src={navIcon4} alt="" />
              </a>
              <a
                href="https://testnets.opensea.io/"
                target="_blank"
                title="Opensea"
                rel="noreferrer"
              >
                <img src={navIcon5} alt="" />
              </a>
              <a
                href="https://www.privacypolicies.com/live/3c71f0c5-a687-46d9-a07a-dbe7e8242c21"
                target="_blank"
                title="content security policy"
                rel="noreferrer"
              >
                <img src={navIcon6} alt="" />
              </a>
            </div>
            <p>BoneBoss 2022. Crypto NFT </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
