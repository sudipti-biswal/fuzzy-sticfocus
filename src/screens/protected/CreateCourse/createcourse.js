import React, { useState } from 'react';
import { Box, Flex,Spacer,Button, Text, Image, Progress, Input,InputGroup, InputRightElement, Select, option } from "@chakra-ui/react";
import vd from '../../../assets/img/vd.jpeg'
import { CheckIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
const Createcourse = () => {

  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(35);

    return (
        <Flex w="100%" direction="column" backgroundColor="#fff">

            <Box w="100%" backgroundColor="white">
                <Flex w="100%" p={3}>
                    <Text ml={5} fontSize="2xl" fontWeight="semibold">logo</Text>
                    <Text ml={20} mt={2} textColor="grey" fontSize="1xl" >Step {count} of 3</Text>
                    <Flex w="80%" fontSize="1.5xl"  justify="right">
                    <Link to="/instructor" >
                <Text ml={20} mt={2} textColor="red" cursor="pointer" fontWeight="bold" fontSize="1xl" >Exit</Text>
                </Link>
                </Flex>
                </Flex>
               
            </Box>
          
            <Progress value={progress} colorScheme="red" size="sm"/>
            {
            (count === 1)?
            <Box h="80vh" w="100%" p={10}>
            <Text  w="100%"  fontSize="4xl"  textAlign="center">First, let's find out what type of course you're making.
</Text>

            <Flex w="100%"  mt={5}>
            <Flex w="100%" ml="40%"   mt={10} >

            <Flex pl={10} pt={5} pr={10} boxShadow="outline" p="6" rounded="md" bg="white"  direction="column">
          <Box w={70} h={70} mt={-4} alignSelf="center" >
            <Image src={vd}  />
            </Box>
              
              <Box w={250} alignSelf="center" alignContent="center" >
              <Text  fontSize="2xl" fontWeight="semibold"mt={7} textAlign="center">Course</Text>
              <Text textAlign="center" fontSize="1xl"  color="gray.600" mb={10} mt={5}>Create Reach Learning experience with the help of video lecture, quizes, coding exercise, etc.  </Text>
              </Box>
              
          </Flex>
                
                {/* <Flex ml={10} pl={10} pt={5} pr={10} boxShadow="lg" p="6" rounded="md" bg="white"  direction="column">
          <Box w={50} h={50} alignSelf="center" >
            <Image src={audi}  />
            </Box>
              
              <Box w={250} alignSelf="center" alignContent="center" >
              <Text  fontSize="2xl" fontWeight="semibold"mt={7} textAlign="center">Practice Test</Text>
              <Text mb={30} textAlign="center" fontSize="1xl" fontWeight="bold" color=" rgba(89, 87, 87, 0.57)" mt={5}> </Text>
              </Box>
              
          </Flex> */}

            </Flex>
            </Flex>
            <Flex mt={20} ml={20} justify="right" mt={20}>
            <Button  w="10%" mb={20} onClick={
             () =>{ 
               setCount(count + 1)
               setProgress(progress+35)
            }
            } colorScheme="red" alignSelf="center">Continue</Button>
            </Flex>
            </Box>
            : count === 2 ?
            <Box h="80vh" w="100%" p={10}>
            <Text  w="100%"  fontSize="5xl"   textAlign="center"> How about a working Title?
</Text>

<Text  w="100%"  fontSize="20" color="gray.600"  textAlign="center"> It's ok if you can't think of a good title now. You can change it later.
</Text>
           
             <Flex justify="center">
             <InputGroup w="60%" mt={20} alignSelf="center">
              <Input  borderColor="gray.400"   placeholder="eg. Learn Photoshop CS6 From Scratch"  size="lg" />
              <InputRightElement children={<Text pl={2} pr={2}pt={1} pb={1} mr={2} mt={1} fontWeight="bold" textColor="grey" backgroundColor="lightgray">60</Text>} />
              </InputGroup>
              </Flex>
            <Flex mt={60}>
            <Button  w="10%" mb={20} onClick={
             () =>{ 
               setCount(count - 1)
               setProgress(progress-35)
            }
            } colorScheme="red" alignSelf="center">Previous</Button>
            <Spacer></Spacer>
                <Button  w="10%" mb={20} onClick={
             () =>{ 
               setCount(count + 1)
               setProgress(progress+35)
            }
            } colorScheme="white" mt={1} fontSize="20" textColor="red" alignSelf="center">Continue</Button>
            </Flex>
            </Box>
            : <Box h="80vh" w="100%" p={10}>
            <Text  w="100%"  fontSize="4xl"   textAlign="center"> What Category best fits the knowledge you'll share?
</Text>

<Text  w="100%" mt={5}  fontSize="20" color="gray.600"  textAlign="center"> If you are not sure about the right category, You can change it later. 
</Text>
           
             {/* <Flex justify="center">
             <InputGroup w="60%" mt={20} alignSelf="center">
              <Input  borderColor="gray.400"   placeholder="eg. Learn Photoshop CS6 From Scratch"  size="lg" />
              <InputRightElement children={<Text pl={2} pr={2}pt={1} pb={1} mr={2} mt={1} fontWeight="bold" textColor="grey" backgroundColor="lightgray">60</Text>} />
              </InputGroup>
              </Flex> */}

              <Flex justify="center" mt="10">
              <Select w="50%" borderColor="gray.400" placeholder="Choose a category" size="lg">
              <option value="option1">Development</option>
              <option value="option2">Bussiness</option>
              <option value="option3">Financing & Accounting</option>
              <option value="option1">IT & Software</option>
              <option value="option2">Office Productivity</option>
              <option value="option3">Personal development</option>
              <option value="option3">Design</option>
            </Select>
            </Flex>
           
            <Flex mt={60}>
            <Button  w="10%" mb={20} onClick={
             () =>{ 
               setCount(count - 1)
               setProgress(progress-35)
            }
            } colorScheme="red" alignSelf="center">Previous</Button>
            <Spacer></Spacer>
                <Button  w="10%" mb={20} onClick={
             () =>{ 
               setCount(count + 1)
               setProgress(progress+35)
            }
            } colorScheme="white" mt={1} fontSize="20" textColor="red" alignSelf="center">Continue</Button>
            </Flex>
            </Box>
            
        }
        </Flex>
     
    )
}

export default Createcourse
