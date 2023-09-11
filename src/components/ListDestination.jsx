import Destination from "./Destination";
import React, { useEffect, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import Noi from "..//assets/chi-siamo.jpg";
import Tenerife from "..//assets/tenerife.jpg";

const ListDestination = ({ destinations }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionElement.classList.add("active");
          }
        });
      });

      observer.observe(sectionElement);

      return () => {
        observer.unobserve(sectionElement);
      };
    }
  }, [sectionRef]);

  return (
    <Container className="my-4 ">
      <>
        {/* Sezione "Descrizione" */}
        <div className="row mt-5 scroll-animation-2 border border-3 border-dark rounded bg-white ">
          <div className="col-md-6">
            <h2 className="display-4 mt-3 ">Un'isola che conquista cuori di ogni età</h2>
            <p className="fs-4 mt-3 font-link">
              Per i ragazzi, Tenerife offre spiagge mozzafiato bagnate dal caldo sole dell'Atlantico, perfette per
              praticare sport acquatici emozionanti come il surf e lo snorkeling. Le discoteche e i locali notturni
              trasformano l'isola in una festa senza fine, e i parchi a tema come Siam Park aggiungono una dose di
              adrenalina alle vostre giornate.Per gli adulti, Tenerife offre una varietà di opportunità di relax e
              cultura. I parchi naturali come il Teide National Park offrono tranquillità e bellezza paesaggistica,
              perfetti per passeggiate rigeneranti.
            </p>
          </div>
          <div className="col-md-6">
            <img src={Tenerife} alt="Immagine Chi Siamo" className="img-fluid foto2 mt-3 mb-2 " />
          </div>
        </div>

        {/* Sezione "Chi Siamo" */}
        <div className="row mt-5 scroll-animation border border-3 border-dark rounded bg-white " ref={sectionRef}>
          <div className="col-md-6">
            <img src={Noi} alt="Immagine Chi Siamo" className=" foto3 mt-4 mb-2" />
          </div>
          <div className="col-md-6">
            <h2 className="display-4 mt-3 ">Chi Siamo</h2>
            <p className=" fs-5 mt-3 font-link">
              "Benvenuti nel nostro affascinante mondo di Tenerife! Siamo un gruppo di 7 giovani appassionati di viaggi,
              uniti dalla curiosità e dall'amore per l'esplorazione. Dopo un'indimenticabile esperienza su questa
              straordinaria isola, siamo qui per condividere con voi tutto ciò che Tenerife ha da offrire. Tenerife è
              molto più di una destinazione turistica. È un luogo dove la natura si fonde con una cultura vibrante,
              creando un'esperienza di viaggio unica. Qui troverete consigli su spiagge incontaminate, spettacolari
              montagne, cittadine pittoresche e luoghi storici da visitare. Sveleremo i nostri ristoranti preferiti per
              gustare la deliziosa cucina locale e vi guideremo tra le discoteche e i locali notturni più trendy.
              Inoltre, condivideremo suggerimenti per rendere il vostro soggiorno indimenticabile, dalle attività
              emozionanti ai consigli pratici per ottimizzare il vostro viaggio. Siete pronti per un'avventura virtuale
              a Tenerife? Lasciatevi ispirare dalle nostre storie e consigli per un viaggio memorabile!"
            </p>
            <Button variant="outline-dark mb-2 btn-lg">Scopri di più</Button>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <h2 className="display-4 fw-bold fs-2">Esplora il Mondo</h2>
            <p className="fs-4">
              "Benvenuti a Tenerife, la prima tappa nella nostra app 'Esplora il Mondo'! Scopri le meravigliose
              destinazioni disponibili qui. Per la nostra HomePage abbiamo selezionato solo 3 delle incredibili mete che
              puoi esplorare su quest'isola affascinante . Per Visualizzare le altre vai sulla sezione Mete presente
              nella barra di navigazione"
            </p>
          </div>
        </div>

        {/* Carosello con le 3 mete della HomePage */}

        <Destination destination={destinations} />
      </>
    </Container>
  );
};

export default ListDestination;
