import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col className="mt-3" md={4}>
            <h5>Link utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-white">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-white">
                  Contatti
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mt-3 " md={4}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferre"
                  className="text-decoration-none text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/TenerifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mt-3" md={4}>
            <h5>Contatti</h5>
            <address>
              Via della Spiaggia, 123
              <br />
              Playa de las Américas
              <br />
              Tenerife, Spagna
              <br />
              <i className="fas fa-phone"></i> +34 123 456 789
              <br />
              <i className="far fa-envelope"></i> info@tenerifeapp.com
            </address>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">&copy; {new Date().getFullYear()} Tenerife App. Tutti i diritti riservati.</div>
    </footer>
  );
};

export default Footer;
