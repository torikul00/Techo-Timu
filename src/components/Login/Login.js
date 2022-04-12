import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'

const Login = () => {
   
    const [error, setError] = useState('')
   


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
            .catch(() => toast.error('Password is incorrect'))
    }
    const handleEmail = (email) => {
        console.log(email)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>Please Login</h1>
                <div className="inputs">

                    <label htmlFor="email">Email </label>
                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" placeholder='Email' name='email' />

                    <label htmlFor="email">Password </label>
                    <input type="password" placeholder='Password' name='password' /> <br />
                    <p style={{ color: 'red' }}>{error ? error : ''}</p>
                    <button type='submit' className='button'>Login</button>
                    <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

                </div>

                <hr />

                <button onClick={SignInGoogle} className='button'>Continue With Google </button>

            </form>
        </div>
    );
};

export default Login;