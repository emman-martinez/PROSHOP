import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const { Link } = Nav;
    const { Brand, Collapse, Toggle } = Navbar;

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Brand href='/'>ProShop</Brand>
                    <Toggle aria-controls='basic-navbar-nav' />
                    <Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Link href='/cart'>
                                <i className='fas fa-shopping-cart'></i> Cart
                            </Link>
                            <Link href='/login'>
                            <i className='fas fa-user'></i> Sign In
                            </Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;