import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Button, Input, Textarea } from "@chakra-ui/react";
import Profile from '../../Assets/profile.webp';
import { FiLogOut, FiEdit } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./TeacherDash.css";
import axios from 'axios';

const TeacherDash = () => {
    const navigate = useNavigate();

    // State to store user details
    const [teacherDetails, setTeacherDetails] = useState({
        username: '',
        email: '',
        mobile: '',
        bio: '',
        subject: '',
        experience: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    // Fetch user details from localStorage or API on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const storedUser = await axios.post("http://localhost:5000/api/auth/getuser");
                console.log(storedUser.data.user.username)
                if (storedUser) {
                    setTeacherDetails({
                        username: storedUser.data.user.username || '',
                        email: storedUser.data.user.email || '',
                        mobile: storedUser.data.user.mobile || '',
                        bio: storedUser.data.user.bio || 'No bio available.',
                        subject: storedUser.data.user.subject || 'Subject not specified.',
                        experience: storedUser.data.user.experience || 'Not provided.'
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    },[]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        sessionStorage.clear();
        setTimeout(() => {
            navigate("/login");
        }, 100);
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setTeacherDetails({ ...teacherDetails, [e.target.name]: e.target.value });
    };

    return (
        <Box w="100vw" h="100vh" color={'black'} display={'flex'} className="TeacherDash">
            {/* Navigation and Profile */}
            <Box className="stuDashNav">
                <Box className="stuProfile" bg="rgb(60, 60, 60)" height="15%" display="flex" p="0 5%" alignItems="center">
                    <Image src={Profile} className="dp" borderRadius="full" boxSize="60px" alt="Profile" />
                    <Box className="student" textAlign="left" pl="5%" width="80%" height="100%" display="flex" flexDirection="column" justifyContent="center">
                        <Text className="stuName" color="white" fontSize="19px" margin="0">{teacherDetails.username}</Text>
                        <Text className="stuEmail" color="#ffffffe3" fontSize="14px" margin="0">{teacherDetails.email}</Text>
                    </Box>
                </Box>

                {/* Logout Button */}
                <Box w="100%" h="7%" bg="#8080808f" className="dashLogoutButton" onClick={handleLogout}>
                    <FiLogOut style={{ marginRight: "10px", color: "white" }} />
                    <Text color="white" style={{ marginRight: "10px" }}>Logout</Text>
                    <MdKeyboardArrowRight style={{ fontSize: "20px", color: "white" }} />
                </Box>
            </Box>

            <Box p="5%" bg="white" flex="1" className="teachreDetails">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="24px" fontWeight="bold">Teacher Profile</Text>
                    <Button size="sm" colorScheme="blue" onClick={handleEditClick}>
                        <FiEdit style={{ marginRight: "5px" }} />
                        {isEditing ? "Save" : "Edit"}
                    </Button>
                </Flex>

                <Box mt="20px">
                    <Text fontSize="16px" fontWeight="bold">Username:</Text>
                    <Text>{teacherDetails.username}</Text>

                    <Text fontSize="16px" fontWeight="bold" mt="10px">Email:</Text>
                    <Text>{teacherDetails.email}</Text>

                    <Text fontSize="16px" fontWeight="bold" mt="10px">Mobile:</Text>
                    <Text>{teacherDetails.mobile}</Text>

                    <Text fontSize="16px" fontWeight="bold" mt="10px">Bio:</Text>
                    {isEditing ? (
                        <Textarea name="bio" value={teacherDetails.bio} onChange={handleChange} />
                    ) : (
                        <Text>{teacherDetails.bio}</Text>
                    )}

                    <Text fontSize="16px" fontWeight="bold" mt="10px">Subject:</Text>
                    {isEditing ? (
                        <Input name="subject" value={teacherDetails.subject} onChange={handleChange} />
                    ) : (
                        <Text>{teacherDetails.subject}</Text>
                    )}

                    <Text fontSize="16px" fontWeight="bold" mt="10px">Experience:</Text>
                    {isEditing ? (
                        <Input name="experience" value={teacherDetails.experience} onChange={handleChange} />
                    ) : (
                        <Text>{teacherDetails.experience}</Text>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default TeacherDash;
