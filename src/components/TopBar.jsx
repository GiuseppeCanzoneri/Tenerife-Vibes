import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

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
            <Nav.Link href="#action1" className="font-nav">
              Home
            </Nav.Link>
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
            <Nav.Link href="#action2" className="font-nav">
              Chi Siamo
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2 font-nav" aria-label="Search" />
            <Button className="font-nav" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
