import React, { useState } from 'react';
import { faCheck, faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [ isLogggedIn, setIsLoggedIn ] = useState(false);
    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);

    const loggedIn = () => {
        setIsLoggedIn(true);
    }

    const loggedOut = () => {
        setIsLoggedIn(false);
    }


    const MenuItem = ({ to, linkName }) => {
        return (
            <NavItem>
                <NavLink className='nav-link' to={to} onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>{linkName}</NavLink>
            </NavItem>
        );
    }

    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-md p-1 d-flex justify-content-between sticky-top  myNav' style={{zIndex: '5'}}>
                <div className='container-fluid'>
                    {/* <Zoom> */}
                        <NavLink tag='link' to='/' 
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                
                        </NavLink>
                    {/* </Zoom> */}
                </div>

                <NavbarToggler onClick={openNav} className='align-self-center justify-content-end px-0'>
                        <FontAwesomeIcon icon={faBars} size='2x' className='text-light' />
                </NavbarToggler>

                <Collapse isOpen={navigation} navbar className='justify-content-end'>
                    <Nav navbar className='ml-auto text-center text-light '>
                        <MenuItem to='/' linkName='Home' />
                    
                        <MenuItem to='/login' linkName='Login' />
                    
                        <MenuItem to='/register' linkName='Register' />

                        {/* <MenuItem to='/provider' linkName='Provider' /> */}
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header
