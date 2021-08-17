import { Flex,VStack,Box, Avatar, Text, Grid, Icon } from '@chakra-ui/react';
import {CloseIcon} from "@chakra-ui/icons";
import React from 'react';
import ProfileImg from "../../assets/img/profile.png";
import {BsHeartFill, BsReply} from "react-icons/bs";

const Comments1 = () => {
    return (
        <Flex w="100%"  h="80%">
        <Box w="50%" border="1px" >
        <Flex  m="10px" justifyContent="space-between">
        <Text ml="40%" fontWeight="600">2 Comments</Text>
        <CloseIcon />
        </Flex>
       <Grid display="flex" m="10px" mt="40px" justifyContent="space-between">
       <Box display="flex">
       <Avatar size="sm" src={ProfileImg}/>
       <Text ml="5px" fontWeight="700">@arshad1234</Text>
       <Text ml="5px" fontWeight="500" color="grey">.Following</Text>
       <Icon as={BsReply}  w={7} h={7} ml="5px"/>
       </Box>
       
       <Box  className="action" color="red">
              <BsHeartFill/>
               <Text mt="-4px" ml="2px">1</Text>
              </Box>
              
       </Grid>
      <Grid ml="50px" mt="-20px">
      <Text fontWeight="700">2 Good</Text>
      <Text fontSize="12px">11hr</Text>
      </Grid>
       <Grid display="flex" m="10px" mt="40px" justifyContent="space-between">
       <Box display="flex">
       <Avatar size="sm" src={ProfileImg}/>
       <Text ml="5px" fontWeight="700">@arshadKhan1234</Text>
       <Icon as={BsReply}  w={7} h={7} ml="5px"/>
       </Box>
       
       <Box  className="action" color="red">
              <BsHeartFill/>
               <Text mt="-4px" ml="2px">1</Text>
              </Box>
              
       </Grid>
      <Grid ml="50px" mt="-20px">
      <Text fontWeight="700">Good Song</Text>
      <Text fontSize="12px">11hr</Text>
      </Grid>
        </Box>
        </Flex>
    );
};

export default Comments1;