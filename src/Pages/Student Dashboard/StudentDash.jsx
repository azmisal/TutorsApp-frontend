import React,{useState,useEffect} from 'react';
import './StudentDash.css';
import Profile from '../../Assets/profile.webp';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Box, Button, Text, VStack, HStack, Image } from "@chakra-ui/react";
import axios from 'axios';
import { useUser } from "../../Contexts/UserContext";


const StudentDash = () => {
  const { userId } = useUser();
  const studentName = 'John Doe';
  const studentEmail = 'johndoe2001@gmail.com';
  const [bids ,setBids] = useState([]); 

 useEffect(()=>{
  const fetchBids = async () => {
  try{
    const response = await axios.post("http://localhost:5000/api/bids/getbidbyid",userId)
    setBids(response.data);
    console.log(response.data)
  }catch(error){
    console.log(error);
  }

 };
 fetchBids();
},[])
    

  return (
    <Box className="studentDash" height="100vh" width="100vw" bg="rgb(231, 234, 249)" display="flex">
      {/* Student Navigation */}
      <Box className="stuDashNav" bg="rgb(11, 11, 11)" width="20%" height="100vh">
        <Box className="stuProfile" bg="rgb(60, 60, 60)" height="15%" display="flex" p="0 5%" alignItems="center">
          <Image src={Profile} className="dp" borderRadius="full" boxSize="60px" alt="Profile" />
          <Box className="student" textAlign="left" pl="5%" width="80%" height="100%" display="flex" flexDirection="column" justifyContent="center">
            <Text className="stuName" fontSize="18px" margin="0">{userId}</Text>
            <Text className="stuEmail" fontSize="14px" margin="0">{studentEmail}</Text>
          </Box>
        </Box>
        <Box>
          <VStack>
            
          </VStack>
        </Box>
      </Box>

      {/* Student Dashboard Content */}
      <Box className="stuDashContent" width="80%" pl="2%" pt="2%" pr="2%" color="black" display="flex" overflowY="scroll" scrollbarWidth="none" scrollBehavior="smooth">
        <Box className="bidPart" width="100%" display="flex" flexDirection="column" alignItems="flex-start">
          {/* Bid Header */}
          <HStack className="bidHeadAdd" mb="30px" width="100%" justifyContent="space-between">
            <Text className="stuBidsHead" fontSize="20px" marginTop="0">Your Bids</Text>
            <Button className="addButt" as="a" href="/student/addbid" bg="rgb(4, 4, 212)" color="white" _hover={{ bg: "rgb(0, 0, 254)", transform: "scale(1.1)" }}>
              Add
            </Button>
          </HStack>

          {/* Bids Container */}
          <Box className="bidsContainer" width="100%">
            {bids.map((bid, index) => (
              <Box key={index} className="bidCard" p="2% 4% 4% 4%" mb="2%" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" cursor="pointer" transition=".15s ease-in-out" _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", transform: "scale(1.015)" }}>
                <HStack className="topOfBid" width="100%" justifyContent="space-between" alignItems="center">
                  <Box className="topLeftOfBid" width="75%" display="flex">
                    <Text className="bidSubject" mr="5%" color="rgb(3, 3, 119)">
                      Subject: <Text as="span" fontWeight="semibold">{bid.subject}</Text>
                    </Text>
                    <Text className="bidSyllabus" mr="5%" color="rgb(3, 3, 119)">
                      Syllabus: <Text as="span" fontWeight="semibold">{bid.syllabus}</Text>
                    </Text>
                    <Text className="bidLanguage" mr="5%" color="rgb(3, 3, 119)">
                      Language: <Text as="span" fontWeight="semibold">{bid.language}</Text>
                    </Text>
                    <Text className="bidStandard" color="rgb(3, 3, 119)">
                      Class: <Text as="span" fontWeight="semibold">{bid.standard}</Text>
                    </Text>
                  </Box>
                  <Box className="topRightOfBid" display="flex" justifyContent="flex-end">
                    <Text className="bidCost" color="rgb(1, 157, 1)" fontWeight="semibold">
                      Cost: <Text as="span">{bid.cost}</Text>
                    </Text>
                  </Box>
                </HStack>
                <Text className="bidRemarks" mt="20px" fontSize="20px" color="rgb(3, 3, 119)">
                  Remarks: <br />
                  <Text as="span" className="remark" fontSize="16px" lineHeight="20px">{bid.remarks}</Text>
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDash;
