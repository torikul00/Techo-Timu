import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Login = () => {

    const googleProvider = new GoogleAuthProvider(auth)
    const SignInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => toast.success('Login succesful'))
            .catch(() => toast.error('Your email and dose not match'))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(() => toast.success('Login succesful'))
            .catch(() => toast.error('Password or Email incorrect'))
    }
    const handleEmail = (email) => {
        console.log(email)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>Please Login</h1>
                <div className="inputs">
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" placeholder='Email' name='email' />

                    <input type="password" placeholder='Password' /> <br />

                    <button type='submit' className='button'>Login</button>
                    <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

                </div>

                <div className="horizontal">
                    <div className='line' />
                    <p>OR</p>
                    <div className='line' />

                </div>
                <div className="icons">
                    <FcGoogle onClick={SignInGoogle} className='google-icon' />
                    <BsFacebook className='facebook-icon' />
                    <BsGithub className='github-icon' />
                </div>


            </form>

        </div>
    );
};

export default Login;