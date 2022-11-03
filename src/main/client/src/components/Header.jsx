import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faCheck, faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import menu from '../images/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);

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
                            {/* <FontAwesomeIcon icon={faBars} size='2x' className=''/> */}
                    </NavbarToggler>
                </div>

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
