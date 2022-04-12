import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './SignUp.css'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';
const SignUp = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
    const [error, setError] = useState('')
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
        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        }
        if (email.value && password.value && confirmPassword.value) {
            // signup new user
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => toast.success('Thanks for SignUp', { id: "test", duration: 3000, style: { backgroundColor: 'black', color: 'white', } }))

                // error
                .catch(() => toast.error('User Already Registered', { id: "test", duration: 3000, style: { backgroundColor: 'black', color: 'white', } }))
        }
    }
    const handleEmail = (email) => {
        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Invalid Email' })
        }
    }
    const handlePassword = (password) => {
        if (password.length < 6) {
            setPassword({ value: '', error: 'Password is too short ' })
        }
        else { setPassword({ value: password, error: '' }) }
    }
    const handleConfirmPassword = (confirmpassword) => {
        if (password.value === confirmpassword) {
            setConfirmPassword({ value: confirmPassword, error: '' })
        }
        else {
            setConfirmPassword({ value: '', error: 'Password is not Match' })
        }
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSignUp}>
                    <h1 className='form-title'>Please Sign Up</h1>
                    <div className="inputs">

                        <label htmlFor="email">Email </label>
                        {
                            email?.error && <small style={{ color: 'red' }}>{email.error}</small>
                        }
                        <input onBlur={(e) => handleEmail(e.target.value)} name='email' type="email" placeholder='Email' />

                        <label htmlFor="email">Password </label>
                        {
                            password?.error && <small style={{ color: 'red' }}>{password.error}</small>
                        }
                        <input onBlur={(e) => handlePassword(e.target.value)} name='password' type="password" placeholder='Password' />

                        <label htmlFor="email">Confirm Password </label>

                        <input onBlur={(e) => handleConfirmPassword(e.target.value)} name='confirmPassword' type="password" placeholder='Confirm Password' /> <br />
                        {
                            confirmPassword?.error && <small style={{ color: 'red' }}>{confirmPassword.error}</small>
                        }
                        {
                            error && <small>{error}</small>
                        }

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