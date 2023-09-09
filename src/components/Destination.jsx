import React from "react";
import { Button, Card } from "react-bootstrap";

const Destination = ({ destination }) => {
  return (
    <div className="destination-card">
      <Card>
        <Card.Img
          width="200px"
          height="400px"
          className="image-fluid rounded-2"
          style={{ objectFit: "cover" }}
          variant="top"
          src={destination.image}
        />
        <Button>Scopri</Button>
        <Card.Body>
          <h5 className="text-center mt-1 text-dark">{destination.name}</h5>
          <p className="text-dark">{destination.description}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Destination;
