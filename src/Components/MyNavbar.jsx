import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
  </Navbar>
);
export default MyNavbar;
