import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import admin from "./chiSiamoData";

const UtenteSingolo = ({ utente }) => {
  return (
    <div>
      <Row xs={1} md={2} lg={3}>
        {" "}
        {admin.map(utente => (
          <Col key={utente.id}>
            <Card className="mt-3 mb-3 bg-dark text-white  card-fade-in" style={{ height: 900 }}>
              <Card.Img variant="top" src={utente.image} alt={`${utente.name} ${utente.surname}`} />
              <Card.Body>
                <Card.Title>
                  <span className="orange-line">{`${utente.name} ${utente.surname}`}</span>
                </Card.Title>
                <Card.Text className="font-chi-siamo">{utente.description}</Card.Text>
              </Card.Body>
            </Card>
            <Card.Text className="fw-bold font-chi-siamo border border-4 border-dark rounded card-fade-in card-hover-color">
              <a href={utente.social} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fs-3 ms-1 me-2 text-dark" icon={faInstagram} />
              </a>
              Clicca sull'icona di instagram per vedere con i tuoi occhi ciò che abbiamo fatto a tenerife attaverso le
              nostre storie/post
            </Card.Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UtenteSingolo;
