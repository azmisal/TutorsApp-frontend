import React, { useEffect, useState } from "react";
import { 
    Box, SimpleGrid, Card, CardHeader, CardBody, Text, 
    Heading, Button, Flex, Divider, Badge 
} from "@chakra-ui/react";
import axios from "axios";

const BidList = () => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        // Fetch bids from API
        axios.get("http://localhost:5000/api/bids/getbid") // Update with your backend URL
            .then(response => {
                setBids(response.data);
            })
            .catch(error => {
                console.error("Error fetching bids:", error);
            });
    }, []);

    return (
        <Box p={6} bg="gray.100" minH="100vh">
            <Heading size="lg" mb={6} textAlign="center" color="teal.600">
                📌 Available Bids
            </Heading>
            
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {bids.length > 0 ? (
                    bids.map((bid,index) => (
                        <Card 
                            key={bid.id} 
                            p={5} 
                            shadow="xl" 
                            borderRadius="xl" 
                            transition="0.3s ease-in-out"
                            _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
                            bg="white"
                        >
                            <CardHeader pb={2}>
                                <Heading size="md" color="teal.700">
                                    {bid.subject}
                                </Heading>
                                <Badge colorScheme="purple" mt={2}>{bid.language}</Badge>
                            </CardHeader>
                            <Divider />
                            <CardBody mt={3}>
                                <Text fontSize="md" fontWeight="bold" color="gray.700">
                                    ✨ <strong>Name:</strong> {bid.username}
                                </Text>
                                <Text fontSize="md" color="gray.600">
                                    🎯 <strong>Subject:</strong> {bid.subject}
                                </Text>
                                <Text fontSize="md" color="gray.600">
                                    💰 <strong>Bid Amount:</strong> ${bid.cost}
                                </Text>
                                <Text fontSize="md" color="gray.600">
                                    📘 <strong>Syllabus:</strong> {bid.syllabus}
                                </Text>
                                <Text fontSize="md" color="gray.600">
                                    🎓 <strong>Standard:</strong> {bid.standard}
                                </Text>
                                <Text fontSize="md" color="gray.600">
                                    📝 <strong>Remarks:</strong> {bid.remarks}
                                </Text>

                                <Flex mt={4} justifyContent="space-between">
                                    <Button 
                                        size="sm" 
                                        bgGradient="linear(to-r, blue.400, teal.400)" 
                                        color="white"
                                        _hover={{ bgGradient: "linear(to-r, blue.500, teal.500)" }}
                                    >
                                        💬 Chat
                                    </Button>
                                    <Button 
                                        size="sm" 
                                        bgGradient="linear(to-r, green.400, lime.400)" 
                                        color="teal.900"
                                        fontWeight={700}
                                        _hover={{ bgGradient: "linear(to-r, green.500, lime.500)" }}
                                    >
                                        Place Bid
                                    </Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    ))
                ) : (
                    <Text textAlign="center" colSpan={3} fontSize="lg" color="gray.500">
                        ❌ No bids available
                    </Text>
                )}
            </SimpleGrid>
        </Box>
    );
};

export default BidList;
