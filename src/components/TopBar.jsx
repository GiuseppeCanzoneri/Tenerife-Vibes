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
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Mete" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Escursioni</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Prezzi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Galleria</Nav.Link>
            <Nav.Link href="#action2">Chi Siamo</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
