import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css'
const Navbar = () => {

    let navigate = useNavigate();

    return (
        <div className='links'>
            <h2 onClick={() => navigate('/')} className='logo'>TECHO TIMU</h2>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/' >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/login' >Log in </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/about' >About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;