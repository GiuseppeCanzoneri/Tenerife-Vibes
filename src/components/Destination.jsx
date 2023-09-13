import React from "react";
import { Button, Carousel } from "react-bootstrap";
import destinations from "./destinationData";
import { Link } from "react-router-dom";

const Destination = ({ destination }) => {
  return (
    <div>
      <Carousel fade className="custom-carousel">
        {destinations.map(destination => (
          <Carousel.Item key={destination.id}>
            <img src={destination.image} alt={destination.name} className="custom-carousel-image" />
            <Carousel.Caption>
              <h3 className="bg-warning rounded  text-dark border border-2 border-dark  d-md-block">
                {destination.name}
              </h3>
              <p className="bg-dark rounded border border-2 border-white d-none d-md-block">
                {destination.description}
              </p>
              <Link to={"/mete-prezzi"}>
                <Button className="mb-5 bg-warning text-dark border border-2 border-dark fw-bold btn-lg">
                  Scopri di più
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Destination;
