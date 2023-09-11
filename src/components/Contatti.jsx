import { Card, Container } from "react-bootstrap";
import UtenteSingolo from "./UtenteSingolo";
import Noi from "../assets/chi-siamo.jpg";

const Contatti = ({ admin }) => {
  return (
    <div>
      <Container>
        <Card.Body>
          <h1 className="text-center mt-3 bg-warning rounded border border-2 border-dark">CHI SIAMO ?</h1>
        </Card.Body>

        <h3 className="bg-white rounded text-dark border border-2 border-dark">
          Siamo un gruppo di giovani a cui piace viaggiare.
        </h3>
        <h4 className="bg-white rounded text-dark border border-2 border-dark">
          E questo è un sito creato per dare consiglio a voi che verrete a Tenerife.
        </h4>

        <UtenteSingolo utente={admin} />
      </Container>
    </div>
  );
};

export default Contatti;
