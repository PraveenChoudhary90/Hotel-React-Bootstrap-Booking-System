import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet ,Link } from 'react-router-dom';
import Footer from './Footer';

const Navbarr = ()=>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Hotel Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{textDecoration:"none"}}>Home</Link>!!
            <Link to="about" style={{textDecoration:"none"}} >About</Link>!!
           
         <Link to="room" style={{textDecoration:"none"}}>Room</Link>!!
            <Link to="section" style={{textDecoration:"none"}} >Section</Link>!!


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main><Outlet/></main>
    <Footer/>
        </>
    )
}
export default Navbarr;