import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Input,
  Flex,
  Text,
  Image,
  InputGroup,
  InputLeftAddon,
  Button, 
  Textarea,
  Spacer,
} from '@chakra-ui/react';
import './EditProfile.scss';
import { BASE_URL } from '../../../utils/api';
import cookie from 'react-cookies';


const EditProfile = () => {
  const token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMwOWMzMmI1ZWVmYzliYzQxOTEzZTEiLCJmaXJzdE5hbWUiOiJzYWtzaGkiLCJsYXN0TmFtZSI6IkRoZW5nZSIsIm1vYmlsZU51bWJlciI6Ijk3NjcwNDUwMzYiLCJlbWFpbCI6InJ1Y2hpQGdtYWlsLmNvbSIsImRlc2lnbmF0aW9uIjoiU3R1ZGVudCIsInNlc3Npb25JZCI6IjYxMWJiNGIxZjkwNGEzZGU1Y2JmNDY1NCIsImlhdCI6MTYyOTIwNTY4MX0.l3Mzhm5KQbuIX1V4GK0hTMxhVgnSho6x-i1sPL67Cbk";
// console
  const [upData, setUpData] = useState(null);
  const { user } = useSelector((state) => state.user);

  console.log("token",token);

 const upDateProfile = () => {
  const config = {
    headers: { Authorization: ` ${token}` }
  };

    axios
      .put(`http://3.108.14.230:3333/api/authentication/update/profile`, config)
      .then((res) => {
        if (res.data.code === 200) {
          // setUpData(res.data.data);
          // setUpData(res.data.data);
        }
        console.log("res", res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

        useEffect(() => {
            upDateProfile();
          }, []);



 return (
    <>

      
             <Accordion  allowToggle ml={9} mt={5} width="70%">
                <AccordionItem >
                  <h2>
                    <AccordionButton>
                     <AccordionIcon />
                      <Box flex="1" textAlign="left">
                        Edit Profile
                      </Box>
                     
                    </AccordionButton>
                  </h2>
          
             
                <AccordionPanel pb={4} >
                  
                  <Box mt={30}>
                       <Image
                       className="edit-img"
                          borderRadius='full'
                          boxSize='150px'
                          // src={item.avatar}
                          alt='Profile'/>
                  </Box>     
                     <Stack spacing={5} m={5} >

                     <Flex justify='center' >
                     <Text p={2} mr={3}>First Name</Text>
                       <Input placeholder="{item.firstName}" size="md" width="auto" />
                    </Flex>

                    <Flex justify='center' >
                     <Text p={2} mr={3}>Last Name</Text>
                       <Input placeholder="{item.lastName}" size="md"  width="auto"/>
                    </Flex>

                    <Flex justify='center' >
                     <Text p={2} mr={3}>User Name</Text>
                       <Input placeholder="@{item.username}" size="md"  width="auto" />
                    </Flex>

                  
                    <InputGroup className="call-input" >
                      <InputLeftAddon children="+91" />
                      <Input type="tel" placeholder="phone number" width="auto" />
                    </InputGroup>
                    
                    <Box
                    display='flex'
                    fontSize='15px'
                    fontStyle='normal'
                    fontWeight='600'
                    lineHeight='72px'
                    letterSpacing='0em'
                    textAlign='left'
                    justify='center'
                  >
                    
                    <Text ml={4}> Following</Text>
                     <Spacer ml={5} />                  
                    <Text ml={4}>Followers</Text>
                    <Spacer ml={5} />
                    <Text ml={4}>Likes</Text>
                    <Spacer ml={5} />
                    <Text ml={4}>rating</Text>
                    <Spacer ml={5} />
                    <Text ml={4}>paidVideos</Text>
                  </Box>
                    <Spacer mt={4} mb={5}/>
                    <Textarea placeholder= "{item.bio}" />
                    
                    <Flex justify='right' mr={5}>
                      <Button                 
                          colorScheme="linkedin" 
                          height="48px"
                          width="100px">        
                           Save
                      </Button>
                    </Flex>
                     </Stack>         
                  </AccordionPanel>
               
                </AccordionItem>
         </Accordion>
        
      
    </>
  );
};

export default EditProfile;