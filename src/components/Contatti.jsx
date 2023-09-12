import React from "react";
import video from "../assets/ciao.mp4";
import { Card, Container } from "react-bootstrap";
import UtenteSingolo from "./UtenteSingolo";

const Contatti = ({ admin }) => {
  return (
    <div>
      <Container>
        <Card.Body>
          <div className="text-center mt-3 bg-warning rounded border border-2 border-dark contenitore-video">
            <video className="video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Il tuo browser non supporta la riproduzione di video.
            </video>
            <div className="testo-sopra-video">
              <h1 className="mt-4 display-4 text-dark border border-4 rounded border-dark bg-warning fw-bold">
                CHI SIAMO ?
              </h1>
            </div>
          </div>
        </Card.Body>
        <UtenteSingolo utente={admin} />
      </Container>
    </div>
  );
};

export default Contatti;
