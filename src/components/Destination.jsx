import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Destination = ({ destination }) => {
  return (
    <div>
      <Row className="mt-4">
        <Col md={8} xs={12} className="mt-2">
          <div className="d-flex flex-column align-items-end">
            <h5 className="mt-1 text-dark">{destination.name}</h5>
            <p className="text-dark ms-5" style={{ maxWidth: "80%" }}>
              {destination.description}
            </p>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <Card.Img className="custom-image" variant="top" src={destination.image} />
        </Col>
      </Row>
    </div>
  );
};

export default Destination;
