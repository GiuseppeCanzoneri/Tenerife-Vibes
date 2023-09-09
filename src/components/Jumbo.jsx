import { Container } from "react-bootstrap";

const Jumbo = () => {
  return (
    <Container fluid className="px-0 d-flex justify-content-center sfondo1">
      <div className="text-center mt-4 mx-2">
        <div className="mouse mt-2"></div>
        <h1 className="display-4 text-dark mt-5 font-weight-bold">TENERIVIBES</h1>
        <p className="display-2 fs-2 text-dark align-bottom mt-5">
          Tenerife Explorer è la tua porta d'accesso virtuale a uno dei luoghi più affascinanti e vibranti
          dell'arcipelago delle Canarie: l'isola di Tenerife. Questa app ti accompagna in un emozionante viaggio
          attraverso le meraviglie naturali, la cultura vivace e le esperienze indimenticabili che Tenerife ha da
          offrire.
        </p>
      </div>
    </Container>
  );
};

export default Jumbo;
