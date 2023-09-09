import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Destination from "./Destination";

const ListDestination = ({ destinations }) => {
  return (
    <Container className="my-4">
      <>
        <Form onSubmit={e => e.preventDefault()}>
          <Form.Group className="mb-3">
            <Form.Label className="text-dark fs-3">Cerca tra le nostre Destinazioni:</Form.Label>
            <Form.Control className="input-ricerca" type="text" placeholder="Inserisci il nome di una Destinazione" />
          </Form.Group>
        </Form>
        <h2 className="fs-3 display-4 mb-3">
          La tua prossima avventura inizia qui. Inserisci il luogo che desideri visitare e scopri il tuo itinerario
          ideale!
        </h2>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
          {destinations.map(destination => (
            <Col key={destination.id}>
              <Destination destination={destination} />
            </Col>
          ))}
        </Row>
        <div className="mt-3">
          <div>
            <h2 className="display-4 fw-bold fs-2">Esplora il Mondo</h2>
            <p className="fs-4">
              Scopri le meravigliose destinazioni disponibili! Qui troverai solo alcune delle 8 destinazioni incredibili
              che puoi esplorare. Continua a scorrere la mappa per trovare altre avventure!
            </p>
          </div>
        </div>
      </>
    </Container>
  );
};

export default ListDestination;
