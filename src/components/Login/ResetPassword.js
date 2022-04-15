import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../firebase.init';

const ResetPassword = () => {
    
    const [email, setEmail] = useState('')

    const handleResetPassword = () => {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            sendPasswordResetEmail(auth , email)
            .then(() => toast.success('Sent reset email'))
            .catch(() =>  toast.error('Please Check Your Email'))
        }
        else {
            toast.error('Please Check Your Email')
        }
    }
    return (
        <div className='forgot-pass-container'>
            <div className="forgot-input">
                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email'required />
                <button onClick={handleResetPassword}>Reset Password</button>
      </div>
        </div> 
    );
};

export default ResetPassword;