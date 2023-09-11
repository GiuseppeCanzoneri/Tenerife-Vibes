import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white ">
      <Container>
        <Row>
          <Col className="mt-3 " md={3}>
            <h5>Contatti</h5>
            <address>
              Avenida Gomez
              <br />
              Playa de las Américas
              <br />
              Tenerife, Spagna
              <br />
              <i className="fas fa-phone"></i> +34 3295656116
              <br />
              <i className="far fa-envelope"></i> gcanzoneri6@gmail.com
            </address>
          </Col>
          <Col className="mt-3" md={3}>
            <p>
              Esplora Tenerife con noi e vivi un'esperienza unica! Scopri le bellezze naturali, la cultura vibrante e i
              segreti nascosti di quest'isola affascinante. Resta aggiornato con le ultime notizie e le destinazioni
              imperdibili. Siamo qui per farti vivere Tenerife al massimo!
            </p>
          </Col>
          <Col className="mt-3" md={3}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://instagram.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">&copy; {new Date().getFullYear()} TeneriVibes. Tutti i diritti riservati.</div>
    </footer>
  );
};

export default Footer;
