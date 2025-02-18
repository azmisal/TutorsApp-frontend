import React, { useState } from 'react';
import './LoginSignupPage.css';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, VStack } from "@chakra-ui/react"
import { useUser } from "../../Contexts/UserContext";
import axios from 'axios';

export default function Login() {
  const { setUserId } = useUser();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(formData.identifier)) {
      // console.log(formData);
      // try{
      // const response = await axios.post("http://localhost:5000/login");
      // if (response.data.success) {
      //   setUserId(response.data.userId);
      //   alert("Login");
      //   navigate("/studentdashboard");
      // }}
      // catch(error){
      //   alert("Invalid Credentials");
      // }

      setUserId(formData.email);

    } else {
      alert("please provide valid credentials");
    }
    alert("Login");
    
      navigate("/chat");
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
