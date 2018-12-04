import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Brand>
                    <LinkContainer to="/">
                        <NavItem eventKey={1}>
                            Home
           </NavItem>
                    </LinkContainer>
                </Navbar.Brand>
                <Nav>
                    <LinkContainer to="/brands">
                        <NavItem eventKey={2}>
                            Brands
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/men">
                        <NavItem eventKey={3}>
                            Men
                        </NavItem>
                    </LinkContainer >

                    <LinkContainer to="/women">
                        <NavItem eventKey={4}>
                            Women
                        </NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem eventKey={5}>
                            Log in
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/signup">
                        <NavItem eventKey={6}>
                            Sign up
                    </NavItem>
                    </LinkContainer>

                </Nav>

            </Navbar>
        )
    }
}