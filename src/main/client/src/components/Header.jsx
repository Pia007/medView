import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import menu from '../images/menu.svg';


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

    // if token is undefined  go to login page
    if (token === undefined) {
        navigate('/login');
        logout();
    }
    

    const MenuItem = ({ to, linkName }) => {
        return (
            <NavItem>
                <NavLink className='nav-link text-decoration-none' to={to} onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} end>{linkName}</NavLink>
            </NavItem>
        );
    }

    return (
        <>
            <Navbar className='navbar navbar-expand-md p-1 d-flex justify-content-between sticky-top  myNav' style={{zIndex: '5'}}>
                <div className='container-fluid d-flex flex-row justify-content-between'>
                
                    <div className='d-flex align-content-around'>
                        <NavLink tag='link' to='/' className='py-2 text-decoration-none med-view'
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                <h1 className='mb-0 med-view'>MedView</h1>
                        </NavLink>
                    </div>
                

                    <NavbarToggler onClick={openNav} className='align-self-end p-0 pb-2'>
                        <img src={menu} alt='menu bars' className='menu-bars' />
                    </NavbarToggler>
                </div>

                <Collapse isOpen={navigation} navbar className='justify-content-end'>
                    <Nav navbar className='ml-auto text-center text-light '>

                        { pathname === '/' || pathname === '/login' || pathname === '/register' ? (
                            <>
                                <MenuItem to='/' linkName='Home' exact={true} />
                                <MenuItem to='/login' linkName='Login' />
                                <MenuItem to='/register' linkName='Register' /> 
                            </>
                        ) : (
                            <>
                                <MenuItem to='/' linkName='Home' />
                                <button className='btn btn-link-link logout' onClick={logout}>Logout </button> 
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header
