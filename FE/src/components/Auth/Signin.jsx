import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Signin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState(''); 
    const [formState2, setFormState2] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Invalid email!');
            return;
        }

        // Validate password
        if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            toast.error('Password must be at least 8 characters long, include a number and an uppercase letter!');
            return;
        }
        navigate('/');
    };

    const handleForgotPasswordClick = () => {
        setFormState('login-form-change'); 
        setFormState2('login-form-content-change');
        setTimeout(() => {
            navigate('/register'); 
        }, 1000); 
    };

    return (
        <>
            <img className="wave" src="public/wave.png" alt="Wave"/>
            <div className="container">
                <div className="img">
                    <img src="public/logo.png" alt="Background" />
                </div>
                <div className="login-content">
                    <form className={`login-form ${formState}`} onSubmit={handleLogin}>
                        <div className={`login-form-content ${formState2}`}>
                            <img src="public/avatar.svg" alt="Avatar" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Email'
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i"> 
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="password" 
                                        placeholder='Password'
                                        className="input" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className='action-link'>
                            <a onClick={handleForgotPasswordClick} href="#">Need Account?</a>
                            <a onClick={handleForgotPasswordClick} href="#">Forgot Password?</a>
                            </div>

                            <input type="submit" className="btn" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signin;
