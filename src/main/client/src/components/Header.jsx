import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const toggleNav = () => {
        (navigation) ? setNavigation(false) : setNavigation(true);
    }


    const MenuItem = ({ to, linkName }) => {
        return (
            <NavItem>
                <NavLink className='nav-link' to={to} onClick={toggleNav}>{linkName}</NavLink>
            </NavItem>
        );
    }

    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-lg p-1 d-flex justify-content-between sticky-top text-light bg-dark' style={{zIndex: '5', border: '2px solid blue'}}>
                <div className='d-flex'>
                    {/* <Zoom> */}
                        <NavLink tag='link' to='/' 
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                {/* <img src={myLogo}  alt='logo' className='text-primary mt-1' /> */}
                        </NavLink>
                    {/* </Zoom> */}
                </div>

                <NavbarToggler onClick={openNav} className='align-self-center justify-content-end px-0'>
                        {/* <img src={menu}  alt='menu' className='text-success'/>  */}
                </NavbarToggler>

                <Collapse isOpen={navigation} navbar className='justify-content-end'>
                    <Nav navbar className='ml-auto text-center text-light '>
                        <MenuItem to='/' linkName='Home' />
                    
                        <MenuItem to='/login' linkName='Login' />
                    
                        <MenuItem to='/register' linkName='Register' />

                        <MenuItem to='/provider' linkName='Provider' />
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header