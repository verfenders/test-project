import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
const Navbar_panel = () => {

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Verfenders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className="nav-link"
                            to="/">Главная
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="*">О продукте
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )











}

export default Navbar_panel;