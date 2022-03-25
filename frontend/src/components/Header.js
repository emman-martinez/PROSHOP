import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const { Link } = Nav;
    const { Brand, Collapse, Toggle } = Navbar;

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Brand>ProShop</Brand>
                    </LinkContainer>
                    
                    <Toggle aria-controls='basic-navbar-nav' />
                    
                    <Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Link>
                                    <i className='fas fa-shopping-cart'></i> Cart
                                </Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Link>
                                    <i className='fas fa-user'></i> Sign In
                                </Link>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;