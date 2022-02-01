import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom'
import axios from 'axios';
import Detail from './Detail';

// data
import productData from "./data";

function App() {

  let [products, setProducts] = useState(productData);
  let [remains, setRemains] = useState([10,2,3,1,10,3]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Coke Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
        <button className="btn btn-primary" onClick={() => {
          axios.get("https://codingapple1.github.io/shop/data2.json")
          .then( (result) => { setProducts( [...products, ...result.data] ) } )
          .catch( () => { console.log("조회 실패") } );
        }}>더보기</button>

      </Route>

      <Route path="/detail/:id">
        <Detail products={products} remains={remains} setRemains={setRemains} />
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
