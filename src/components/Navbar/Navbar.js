import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
            .then(() => toast.success('Logout seccesful'))
        .catch(()=>toast.error('Something went wrong'))
    }

    return (
        <div className='links'>
            <h2 onClick={() => navigate('/')} className='logo'>TECHO TIMU</h2>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/' >Home</NavLink>
            
                    <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to='/about' >About</NavLink>
              
                 { user?.uid ? <button className='nav-button' onClick={handleLogout}>Logout  </button> 
                    :
                    <button onClick={()=>navigate('/login')} className='nav-button' >Log in </button>}
               
            </div>
        </div>
    );
};

export default Navbar; 