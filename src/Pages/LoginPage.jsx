import React, { useState } from 'react';
import './Styles/LoginSignupPage.css';

export default function Login() {
  const [formData, setFormData] = useState({
    role: 'student',
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateEmail(formData.identifier) || validateMobileNumber(formData.identifier)){
      console.log(formData);
      alert("Login");
      // POST request to backend
      // fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      } else{
        alert("invalid credentials");
      }
  };

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
    <div className="login-form">
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
        
        <input type="text" name="identifier" placeholder="Email or Phone Number" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
