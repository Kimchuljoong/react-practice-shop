import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail.js';

// data
import productData from "./data.js";

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
              <Link to="/">Home</Link>
              <Link to="/detail">Detail</Link>
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

      <Route exact path="/">
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
            { products.map( (e, i) =>  <Product key={i} product={ e } /> ) }
          </div>
        </div>
      </Route>

      <Route path="/detail/:id">
        <Detail products={ products } />
      </Route>

    </div>
  );
}

function Product(props){
  return (
    <div className="col-md-4">
      <img src={ props.product.image } width="100%" alt="zeroCan"/>
      <h4>{ props.product.title }</h4>
      <p>{ props.product.content } & { props.product.price }</p>
    </div>);
}

export default App;
