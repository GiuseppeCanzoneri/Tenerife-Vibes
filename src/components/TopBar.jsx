import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
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
            <Link to={"/"} className="font-nav nav-link underline-on-hover ">
              Home
            </Link>
            <NavDropdown title="Mete" className="font-nav underline-on-hover" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/mete-prezzi" className="font-nav underline-on-hover ">
                Escursioni / Prezzi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className="font-nav underline-on-hover">
              Galleria
            </Nav.Link>
            <Link to={"/chi-siamo"} className="font-nav nav-link underline-on-hover">
              Chi Siamo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
