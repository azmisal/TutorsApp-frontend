import React, { useState } from 'react';
import './Styles/LoginSignupPage.css';
import axios from 'axios';
export default function Signup() {
  const [formData, setFormData] = useState({
    role: 'student',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [usernameExists, setUsernameExists] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    //change needed
    // if (name === 'username') {
    //   checkUsername(value);
    // }
  };

  const checkUsername = async (username) => {
    // try {
    //   const response = await fetch(`/api/check-username?username=${username}`);
    //   const data = await response.json();
    //   setUsernameExists(data.exists);
    // } catch (error) {
    //   console.error('Error checking username:', error);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateEmail(formData.email) && validateMobileNumber(formData.mobile)){
    // console.log(formData);
    // alert("Signup");
    const url = "http://localhost:8080/api/signup"
    // POST request to backend
    try {
      const response = await axios.post(url, formData);
      console.log('Response:', response.data);
      return response.data; // Return the response data if needed
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to handle it outside this function if needed
    }
  }
};
  // Validate Email function
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Validate Mobile Number function (assuming 10-digit format)
function validateMobileNumber(mobile) {
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(mobile);
}


  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="radio" name="role" value="student" checked={formData.role === 'student'} onChange={handleChange} />
            Student
          </label>
          <label>
            <input type="radio" name="role" value="teacher" checked={formData.role === 'teacher'} onChange={handleChange} />
            Teacher
          </label>
        </div>
        
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        {usernameExists && <p className="error">Username already exists</p>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
