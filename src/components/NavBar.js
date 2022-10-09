import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import React from 'react'


function NavBar({ setsearchName}) {
  return (
    <Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">API</Navbar.Brand>
  <Nav className="me-auto">
  </Nav>
 
  <Form className="d-flex">
    <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    onChange={(e)=>setsearchName(e.target.value)}
    />
    <Button variant="outline-success">Search</Button>
  </Form>

</Container>
</Navbar>
  ) 
}

export default NavBar