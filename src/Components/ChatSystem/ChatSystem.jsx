import React, { useState, useEffect } from "react";
import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const Chat = () => {
  const { username } = useParams(); // Get receiver's username from URL
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const sender = localStorage.getItem("username"); // Get sender from localStorage

  useEffect(() => {
    fetch(`http://localhost:5000/api/chatmessages?sender=${sender}&receiver=${username}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));

    const socket = new SockJS("http://localhost:5000/api/chat");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/queue/messages", (msg) => {
        setMessages((prev) => [...prev, JSON.parse(msg.body)]);
      });
    });
  }, [username]);

  const sendMessage = () => {
    const chatMessage = { sender, receiver: username, content: message };
    fetch("http://localhost:5000/api/chat/send", {
      method: "POST",
      body: JSON.stringify(chatMessage),
      headers: { "Content-Type": "application/json" },
    });
    setMessage("");
  };

  return (
    <Box p={5}>
      <VStack align="start">
        {messages.map((msg, i) => (
          <Text key={i}>
            <b>{msg.sender}:</b> {msg.content}
          </Text>
        ))}
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button colorScheme="blue" onClick={sendMessage}>
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default Chat;
