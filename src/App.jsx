import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Jumbo />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
