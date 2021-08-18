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


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");


  

  const { user } = useSelector((state) => state.user);

  console.log("user --------->", user);

 const upDateProfile = () => {

   const data = {

    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    designation: designation,
    id: user.id,

  };

  console.log("data", data);

    axios
      .put(`${BASE_URL}/authentication/update/profile`,data, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          // setUserData(res.data.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName)
    setEmail(user.email);
    setPhone(user.phone)
    setDesignation(user.designation)
  }, []);
   // console.log("firstName --------->", firstName);
   //  console.log("lastName --------->", lastName);
   //   console.log("email --------->", email);
   //    console.log("phone --------->", phone);
   //     console.log("designation --------->", designation);

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
                     <Stack spacing={5} m={5} >
                      
                  <Box mt={30}
                    justify='left'
                    boxSize='150px'>
                    <Image src="https://bit.ly/sage-adebayo" alt="Profile "borderRadius='full' borderRadius='full' />
                  </Box> 

                     <Flex justify='left' >
                     <Text p={2} mr={3}>First Name</Text>
                       <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} size="md" width="auto" />
                    </Flex>

                    <Flex justify='left' >
                     <Text p={2} mr={3}>Last Name</Text>
                       <Input value={lastName} onChange={(e) => setLastName(e.target.value)}  size="md"  width="auto"/>
                    </Flex>

                    <Flex justify='left' >
                     <Text p={2} mr={7}>Email Id</Text>
                       <Input value={email} onChange={(e) => setEmail(e.target.value)}    size="md"  width="auto" />
                    </Flex>

                    <Flex justify='left' >
                     <Text p={2} mr={7}>Number</Text>
                    <InputGroup >
                      <InputLeftAddon children="+91" />
                      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}  width="auto" />
                    </InputGroup>
                    </Flex>
                    
                    <Spacer mt={4} mb={5}/>
                    <Textarea value={designation} onChange={(e) => setDesignation(e.target.value)} />
                    
                    <Flex justify='right' mr={5}>
                      <Button                 
                          colorScheme="linkedin" 
                          height="48px"
                          width="100px" onClick={() => upDateProfile()}>        
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


