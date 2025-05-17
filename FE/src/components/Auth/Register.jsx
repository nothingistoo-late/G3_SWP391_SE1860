import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('student'); // 'student' or 'parent'
    const [relationship, setRelationship] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Validate email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Invalid email!');
            return;
        }

        // Validate password
        if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            toast.error('Password must be at least 8 characters long, include a number and an uppercase letter!');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        // Validate student ID for specific roles
        if (role === 'student' && !studentId) {
            toast.error('Student ID is required for students!');
            return;
        }

        if (role === 'parent' && !studentId) {
            toast.error('Student ID is required for parents!');
            return;
        }

        // Proceed with registration (you can make API calls here)
        toast.success('Registration successful!');
        navigate('/');
    };

    return (
        <>
            <img className="wave" src="public/wave.png" alt="Wave" />
            <div className="container">
                <div className="img">
                    <img src="public/logo.png" alt="Background" />
                </div>
                <div className="register-content">
                    <form className="register-form" onSubmit={handleRegister}>
                        <div className="register-form-content">
                            <img src="public/avatar.svg" alt="Avatar" />
                            <h2 className="title">Register</h2>

                            {/* Role selection */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <select 
                                        className="input" 
                                        value={role} 
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="student">Student</option>
                                        <option value="parent">Parent</option>
                                    </select>
                                </div>
                            </div>

                            {/* Common fields */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Full Name'
                                        value={fullName} 
                                        onChange={(e) => setFullName(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="date" 
                                        className="input" 
                                        value={dob} 
                                        onChange={(e) => setDob(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-venus-mars"></i>
                                </div>
                                <div className="div">
                                    <select 
                                        className="input" 
                                        value={gender} 
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Specific fields based on role */}
                            {role === 'student' && (
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-id-card"></i>
                                    </div>
                                    <div className="div">
                                        <input 
                                            type="text" 
                                            className="input" 
                                            placeholder='Student ID'
                                            value={studentId} 
                                            onChange={(e) => setStudentId(e.target.value)} 
                                        />
                                    </div>
                                </div>
                            )}

                            {role === 'parent' && (
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-child"></i>
                                    </div>
                                    <div className="div">
                                        <input 
                                            type="text" 
                                            className="input" 
                                            placeholder='Relationship to Student'
                                            value={relationship} 
                                            onChange={(e) => setRelationship(e.target.value)} 
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Contact Info */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Phone Number'
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="email" 
                                        className="input" 
                                        placeholder='Email'
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                            </div>

                            {/* Password and Confirm Password */}
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

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input 
                                        type="password" 
                                        placeholder='Confirm Password'
                                        className="input" 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                    />
                                </div>
                            </div>


                            <input type="submit" className="btn" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
