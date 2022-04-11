import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import '../Styles/Navbar.css'
const Navbar = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                navigate('/')
            }
            else {
                setUser({})
           }
        })
    }, [])
    const handleLogout = () => {
        signOut(auth)
        .then()
    }

    return (
        <div className='links'>
            <h2 onClick={() => navigate('/')} className='logo'>TECHO TIMU</h2>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/' >Home</NavLink>
            
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/about' >About</NavLink>
              
                 { user?.uid ? <button className='logout-button' onClick={handleLogout}>Logout  </button> 
                    :
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/login' >Log in </NavLink>}
               
            </div>
        </div>
    );
};

export default Navbar; 