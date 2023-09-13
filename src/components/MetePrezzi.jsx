// MetePrezzi.jsx
import React from "react";
import SingleMeta from "./SingleMeta";
import meteDataGiorno from "./meteDataGiorno";
import { Alert } from "react-bootstrap";

const MetePrezzi = () => {
  return (
    <div>
      <h1 className="font-mete mt-4 mb-4 text-center">Lasciati sorprendere dalle bellissime mete di quest'isola</h1>
      <Alert variant="info" className="font-mete fs-4 mx-auto d-flex text-" style={{ maxWidth: "50%" }}>
        In questa sezione troverete pregi e difetti delle varie mete. Più i prezzi.
      </Alert>
      {meteDataGiorno.map(meta => (
        <SingleMeta key={meta.id} meta={meta} />
      ))}
    </div>
  );
};

export default MetePrezzi;
