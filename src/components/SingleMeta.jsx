// SingleMeta.jsx
import { Card, Col, Row } from "react-bootstrap";

const SingleMeta = ({ meta }) => {
  return (
    <Card className="mt-3 mb-3">
      <Card.Body>
        <Row>
          <Col sm={12} md={6}>
            <Card.Title>{meta.name}</Card.Title>
            <Card.Text>{meta.description}</Card.Text>
            <Card.Text>Prezzo: {meta.prezzo}</Card.Text>
          </Col>
          <Col sm={12} md={6}>
            <Card.Img src={meta.image} alt={meta.name} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SingleMeta;
