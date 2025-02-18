import React, { useEffect, useState } from 'react';
import './ChatSystem.css';
import axios from 'axios';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { Box, Input, Button } from "@chakra-ui/react";
import { useUser } from "../../Contexts/UserContext";

const ChatSystem = () => {
    const { userId } = useUser();


    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [stompClient, setStompClient] = useState(null);


    useEffect(
        ()=>{
            const socket = new SockJS('http:/localhost:8080/ws');
            const client = Stomp.over(socket);

            client.connect({},()=>{
                client.subscribe('topic/messages', (message)=>{
                    const recievedMessage = JSON.parse(message.body);
                    setMessages((prevMessages) => [...prevMessages, recievedMessage]);
                });

            });
            setStompClient(client);
            return () =>{
                client.disconnect();
            }
    },[])



    // const handleSubmit = () => {

    //     try {
    //         message.userID=userId
    //     }

    // }
    

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    useEffect(()=>{
        console.log(userId);
    })
    return (
        <Box>
            <Box>
                <h1>userId :  {userId}</h1>
            </Box>
            <Box>
                <Input placeholder="Enter your email" />
                <Button>Send</Button>
            </Box>
        </Box>

    );
};

export default ChatSystem;
