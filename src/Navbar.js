import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Nav>
                    <LinkContainer to="/brands">
                        <NavItem eventKey={1}>
                            Brands
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/men">
                        <NavItem eventKey={2}>
                            Men
                        </NavItem>
                    </LinkContainer >

                    <LinkContainer to="/women">
                        <NavItem eventKey={3}>
                            Women
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/login">
                        <NavItem eventKey={4}>
                            Log in
                        </NavItem>
                    </LinkContainer>

                </Nav>
            </Navbar>
        )
    }
}