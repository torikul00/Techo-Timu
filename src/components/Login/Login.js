import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import useSocialLogin from '../hooks/useSocialLogin';

const Login = () => {

    const { signInGoogle, signInFacebook, signGithub } = useSocialLogin()
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(() => toast.success('Login succesful'))
            .catch(() => toast.error('Password or Email incorrect'))
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>Please Login</h1>
                <div className="inputs">
                    <input type="email" placeholder='Email' name='email' />

                    <input  type="password" placeholder='Password' name='password' /> <br />
                    <p onClick={()=>navigate('/resetPassword')} className='forgot-password'>Forgot Password ?</p>
                    <button type='submit' className='button'>Login</button>
                    <p className='signup-link'>New User ? <Link to="/signup">Sign Up </Link></p>

                </div>

                <div className="horizontal">
                    <div className='line' />
                    <p>OR</p>
                    <div className='line' />

                </div>
                <div className="icons">
                    <FcGoogle onClick={signInGoogle} className='google-icon' />
                    <BsFacebook onClick={signInFacebook} className='facebook-icon' />
                    <BsGithub onClick={signGithub} className='github-icon' />
                </div>


            </form>

        </div>
    );
};

export default Login;