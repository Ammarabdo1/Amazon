import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineLocationOn } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

function NavScrollExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary Navbarr">
        <Container fluid>
          <Navbar.Brand href="#" className='MainImg'><img src="images\navbar\amazon_Nav.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='NavbarToggler'  />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="Location">
                <MdOutlineLocationOn className='iconLocation' />
                <p> <span> Deliver to</span> Egypt </p>

              </div>

              <div className='input'>
                <select name="select">
                    <option value="All">All</option>
                    <option value="Devices">Devices</option>
                    <option value="Pharmacy">Pharmacy</option>
                  </select>              
              </div>
    

            <Form className="d-flex form">
              <input type="text" name='Search' />
              <button> <IoSearch/> </button>
            </Form>
            <div className="lang">
                <img src="images\navbar\USA-nav.png" alt="USA" />
                <div className='inputs'>
                  <select name="lang">
                      <option value="en">en</option>
                    </select>              
                </div>            
            </div>

              <div className="SignIn">
                <p> <a href="#!">Hello, Sign In </a>Account & Lists</p>

              </div>
              
              <div className="Returns">
                <div>
                <span>Returns</span>
                <p> & Orders</p>                
                </div>


              </div>

              <Nav.Link href="#" className='shopCar'>
                <PiShoppingCartLight/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>  
       
        <div className='naveLinks'>
          <a href="#!">All</a>
          <a href="#!">Today's Deals</a>
          <a href="#!">Buy Again</a>
          <a href="#!">Customer Service</a>
          <a href="#!">Browsing History</a>
          <a href="#!">Gift Cards</a>
          <a href="#!">Registry</a>
          <a href="#!">Sell</a>
          <a href="#!">Amazon.com</a>          
        </div>

    </>

  );
}

export default NavScrollExample;