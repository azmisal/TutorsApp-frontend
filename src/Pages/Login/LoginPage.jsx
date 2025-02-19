import React, { useState } from 'react';
import './LoginSignupPage.css';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, VStack } from "@chakra-ui/react"
import { useUser } from "../../Contexts/UserContext";
import axios from 'axios';

export default function Login() {
  const { userId,setUserId } = useUser();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: 'sasi@kund.com',
    password: '123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(formData);
      try{
      const response = await axios.post("http://localhost:5000/api/auth/login",formData);
      if (response) {
        const id = response.data.userId
        setUserId(id);
        alert("Login");
        if(response.data.role === 'student'){
          navigate("/studentdashboard");
        }
        else if(response.data.role === 'teacher'){
          navigate("/bidpage");
        }
      }
    else{
      console.log(response);
    }}
      catch(error){
        alert("Invalid Credentials"+error);
      }

    
    
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // return emailRegex.test(email);
    return true;
  }

  return (
    <div className="login-form">

      <Box bg="bg" width={'30%'} shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius="md" p={'2rem'}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <VStack>
            <Input placeholder="Enter your email" gap={'10px'} name="email" value={formData.email} onChange={handleChange} />
            <Input placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <Button type="submit" color={'rgba(0, 0, 0, 0.71)'} bg={'rgba(30, 153, 30, 0.36)'} _hover={{ bg: "rgba(30, 153, 30, 0.76)" ,color:"white"}}>Sign In</Button>
          </VStack>

        </form>
      </Box>
    </div>
  );
}
