import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          {" "}
          <img src={logo} alt="logo" height={150} width={150} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to={"/"} className="font-nav nav-link">
              Home
            </Link>
            <NavDropdown title="Mete" className="font-nav" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="font-nav">
                Escursioni
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="font-nav">
                Prezzi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className="font-nav">
              Galleria
            </Nav.Link>
            <Link to={"/chi-siamo#chi-siamo"} className="font-nav nav-link">
              Chi Siamo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
