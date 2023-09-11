import { Card, Col, Row } from "react-bootstrap"; // Utilizziamo Col e Row per la griglia
import admin from "./chiSiamoData";

const UtenteSingolo = ({ utente }) => {
  return (
    <div>
      <Row xs={1} md={2} lg={3}>
        {" "}
        {/* Definiamo quante card per riga su base responsiva */}
        {admin.map(utente => (
          <Col key={utente.id}>
            <Card className="mt-3 mb-3">
              <Card.Img variant="top" src={utente.image} alt={`${utente.name} ${utente.surname}`} />
              <Card.Body>
                <Card.Title>{`${utente.name} ${utente.surname}`}</Card.Title>
                <Card.Text>{utente.description}</Card.Text>
                <Card.Text>Social: {utente.social}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UtenteSingolo;
