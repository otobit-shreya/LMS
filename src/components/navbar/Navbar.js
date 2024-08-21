import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };
  return (
    <Navbar fixed="top" expand="lg" className="bg-[#DD6A70]">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="text-white font-bold text-2xl tracking-wider"
        >
          LEARNER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="news" className="text-white font-bold">Home</Nav.Link>
          </Nav>

          <Dropdown align="end" className="d-flex align-items-center">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-custom-components"
              className="p-0 d-flex align-items-center"
            >
              <img
                src="./assets/avatar.png"
                alt="Avatar"
                className="w-[50px] h-[50px] rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
