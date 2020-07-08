import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {background-color:whitesmoke;
left:75px!important;
width:calc(100% - 75px)!important;
}
a, .navbar-nav, .navbar-lightt .nav-link {
    color:black;
    &:null
}
.navbar-brand {
    font-size:1.7em;
    color:black;
    &:null
}
.form-center {
    position:absolute !important;
    left:25%;
    right:25%;
}
`;

const Header = () => (
    <Styles>
        <Navbar expand="lg">
            <i className="fa fa-camera-retro fa-2x"></i>
            <Navbar.Brand href="/"><strong className='text-danger'>
                KGISL</strong></Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">
                    <strong className='text-danger'>Parvathi</strong>
                </Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
);
export default Header;