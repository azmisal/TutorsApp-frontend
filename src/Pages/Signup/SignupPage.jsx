import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
// import './LoginSignupPage.css';
import { Box, VStack, Input, Button, RadioGroup, Radio, Text, HStack } from "@chakra-ui/react";
import "./SignupPage.css"

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
  });
  const [cnfrmPass, setCnfrmPass] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const navigate = useNavigate();

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
    if (validateEmail(formData.email)) {
      console.log(formData);
      try{
      const response = await axios.post("http://localhost:5000/api/auth/signup");
      if (response.data.success) {
        alert("Signup Successfull");
        navigate('/login');
        
      }}
      catch(error){
        alert("Invalid Credentials"+error);
      }


    } else {
      alert("please provide valid credentials");
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
      <h1>Sign Up</h1>
      <Box maxWidth={'40%'} width={'40%'} shadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} p={"2rem"}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <RadioGroup onChange={(value) => handleChange({ target: { name: "role", value } })} value={formData.role}>
            <HStack align="start">
              <Radio value="student">Student</Radio>
              <Radio value="teacher">Teacher</Radio>
            </HStack>
          </RadioGroup>

          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            
          />

          {/* Last Name */}
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            
          />

          {/* Username */}
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            isRequired
          />
          {usernameExists && <Text color="red.500" fontSize="sm">Username already exists</Text>}

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            isRequired
          />

          {/* Mobile Number */}
          <Input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            
          />

          {/* Password */}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            isRequired
          />

          {/* Confirm Password */}
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e)=>setCnfrmPass(e.target.value)}
            
          />

          {/* Submit Button */}
          <Button type="submit" colorScheme="teal" width="full">
            Sign Up
          </Button>
        </VStack>
      </form>
      </Box>
    </div>
  );
}
