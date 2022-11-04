import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { faCheck, faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import axios from 'axios';
import menu from '../images/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PROVIDER_URL = '/providers';

const Header = () => {
    const navigate = useNavigate();
    
    const pathname = window.location.pathname;

    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    // get the provider id from the token
    const token = localStorage.getItem('username');
    console.log('token: ' + token);

    // if token is undefined  go to login page
    if (token === undefined) {
        navigate('/login');
        logout();
    }
    
    
    const MenuItem = ({ to, linkName }) => {
        return (
            <NavItem>
                <NavLink className='nav-link text-decoration-none' to={to} onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>{linkName}</NavLink>
            </NavItem>
        );
    }

    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-md p-1 d-flex justify-content-between sticky-top  myNav' style={{zIndex: '5'}}>
                <div className='container-fluid d-flex flex-row justify-content-between'>
                    {/* <Zoom> */}
                    <div className='d-flex align-content-around'>
                        <NavLink tag='link' to='/' className='py-2 text-decoration-none med-view'
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                <h1 className='mb-0 med-view'>MedView</h1>
                        </NavLink>
                    </div>
                    {/* </Zoom> */}
                

                    <NavbarToggler onClick={openNav} className='align-self-end p-0 pb-2'>
                        <img src={menu} alt='menu bars' className='menu-bars' />
                    </NavbarToggler>
                </div>

                <Collapse isOpen={navigation} navbar className='justify-content-end'>
                    <Nav navbar className='ml-auto text-center text-light '>

                        { pathname === '/' || pathname === '/login' || pathname === '/register' ? (
                            <React.Fragment>
                                <MenuItem to='/' linkName='Home' />
                                <MenuItem to='/login' linkName='Login' />
                                <MenuItem to='/register' linkName='Register' /> 
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                            <MenuItem to='/' linkName='Home' />
                            <button className='nav-link logout' onClick={logout}>Logout </button> 
                            </React.Fragment>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header
