import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import HomePage from "./components/HomePage";
import Contatti from "./components/Contatti";
import MetePrezzi from "./components/MetePrezzi";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Jumbo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<Contatti />} />
        <Route path="/mete-prezzi" element={<MetePrezzi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
