import { Alert, Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const SingleMeta = ({ meta }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Stato iniziale (nascosto)
      animate={{ opacity: 1, scale: 1 }} // Stato finale (visualizzato)
      transition={{ duration: 4, ease: "easeOut" }} // Durata e tipo di animazione
    >
      <Card className="mt-3 mb-3 card-with-background font-mete me-3 ms-3">
        <Card.Body>
          <Row>
            <Col sm={12} md={6}>
              <Card.Title className="fw-bold fs-2 text-center">{meta.name}</Card.Title>
              <Card.Text className=" fs-5 fw-bold "> {meta.description}</Card.Text>
            </Col>
            <Col sm={12} md={6}>
              <Card.Img src={meta.image} alt={meta.name} />
            </Col>
          </Row>
          <Alert variant="info text-dark fs-5" style={{ maxWidth: "45%" }}>
            Prezzo: {meta.prezzo}
          </Alert>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default SingleMeta;
