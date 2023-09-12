// MetePrezzi.jsx
import React from "react";
import SingleMeta from "./SingleMeta";
import meteDataGiorno from "./meteDataGiorno";

const MetePrezzi = () => {
  return (
    <div>
      <h1>Qui troverai tutte le mete presenti nell'isola</h1>
      {meteDataGiorno.map(meta => (
        <SingleMeta key={meta.id} meta={meta} />
      ))}
    </div>
  );
};

export default MetePrezzi;
