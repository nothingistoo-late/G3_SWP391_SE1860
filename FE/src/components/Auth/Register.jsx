import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('Male');
  const [studentId, setStudentId] = useState('');
  const [relationship, setRelationship] = useState('Father'); 
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      toast.error('First name and Last name are required!');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Invalid email!');
      return;
    }
    if (!phone || !/^\d{9,15}$/.test(phone)) {
      toast.error('Phone number must be 9-15 digits!');
      return;
    }
    if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      toast.error('Password must be at least 8 characters long, include a number and an uppercase letter!');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    if (!studentId.trim()) {
      toast.error('Student ID is required!');
      return;
    }
    if (!phoneNumber || !/^\d{9,15}$/.test(phoneNumber)) {
    toast.error('Phone number must be 9-15 digits!');
    return;
    }

    // Tách fullName

    try {
      // Gọi API đăng ký
      await postRegister(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        studentId,
        relationship,
        isPrimaryContact,
        phoneNumber
      );

      toast.success('Registration successful! Please check your phone for verification.');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Registration failed!');
    }
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



              {/* First Name */}
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Full Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
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
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Student ID */}
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-id-card"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Relationship only if parent */}
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-child"></i>
                  </div>
                  <div className="div">
                    <select
                      className="input" 
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      required
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

              {/* Phone Number */}
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
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
