import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Card, CardHeader, CardBody, Text, Heading, Button, Flex } from "@chakra-ui/react";
import axios from "axios";

const BidList = () => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        // Fetch bids from API
        axios.get("http://localhost:8080/api/bids") // Update with your backend URL
            .then(response => {
                setBids(response.data);
            })
            .catch(error => {
                console.error("Error fetching bids:", error);
            });
    }, []);

    return (
        <Box p={5}>
            <Heading size="lg" mb={4} textAlign="center">
                Bids Available
            </Heading>
            
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {bids.length > 0 ? (
                    bids.map((bid) => (
                        <Card key={bid.id} p={4} shadow="md" borderRadius="lg">
                            <CardHeader>
                                <Heading size="md">Bid: {bid.title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text><strong>Teacher:</strong> {bid.teacher}</Text>
                                <Text><strong>Subject:</strong> {bid.subject}</Text>
                                <Text><strong>Amount:</strong> ${bid.amount}</Text>
                                <Flex mt={3} justifyContent="space-between">
                                    <Button colorScheme="blue" size="sm">Chat</Button>
                                    <Button colorScheme="green" size="sm">Select</Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    ))
                ) : (
                    <Text textAlign="center" colSpan={3}>
                        No bids available
                    </Text>
                )}
            </SimpleGrid>
        </Box>
    );
};

export default BidList;
