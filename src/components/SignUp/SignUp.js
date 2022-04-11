import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './SignUp.css'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider(auth)
    const navigate = useNavigate()
    const SignInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => setUser(result.user))

    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSignUp}>
                    <h1 className='form-title'>Please Sign Up</h1>
                    <div className="inputs">

                        <label htmlFor="email">Email </label>
                        <input name='email' type="email" placeholder='Email' />

                        <label htmlFor="email">Password </label>
                        <input name='password' type="password" placeholder='Password' />

                        <label htmlFor="email">Confirm Password </label>
                        <input name='confirmPassword' type="confirmPassword" placeholder='Confirm Password' /> <br />

                        <button type='submit' className='button'>Sign Up</button>
                        <p className='signup-link'>Already Registered ? <Link to="/login">Login </Link></p>

                    </div>
                    <hr />
                </form>
                <button onClick={SignInGoogle} className='button'>Continue With Google </button>
            </div>
        </div>
    );
};

export default SignUp;