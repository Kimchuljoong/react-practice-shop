import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

// img
import can from "./can.jpg";
import miniCoke from "./miniCoke.jpg";
import zeroCan from "./zeroCan.jpg";

// data
import productData from "./data";

function App() {

  let [products, setProducts] = useState(productData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Coke Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1>~40% Sale</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={ can } width="100%" alt="can"/>
            <h4>{ products[0].title }</h4>
            <p>{ products[0].content } & { products[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src={ miniCoke } width="100%" alt="miniCoke"/>
            <h4>{ products[1].title }</h4>
            <p>{ products[1].content } & { products[1].price }</p>
          </div>
          <div className="col-md-4">
            <img src={ zeroCan } width="100%" alt="zeroCan"/>
            <h4>{ products[2].title }</h4>
            <p>{ products[2].content } & { products[2].price }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
