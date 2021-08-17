// import {
//     Box,
//     StarIcon,
//     Button,
//     Flex,
//     Stack,
//     HStack,
//     VStack,
//     Text,
//     SimpleGrid,
//     Container,
//     Heading,
//     Icon,
//     CheckIcon,
//     Linkk,
//     Badge,
//     useColorModeValue,
//     Center,
  
//  } from "@chakra-ui/react";
//  import ReactPlayer from 'react-player/lazy'
//  import { Link } from "react-router-dom";
//  import Header from "../../../components/Headersss";
//  import bgImg3 from "../../../assets/img/Rectangle 49.png";
//  import {  RepeatClockIcon} from '@chakra-ui/icons';
//  import Enroll1 from "../Enroll/Enroll1";
//  const features = Array.apply(null, Array(8)).map(function (x, i) {
//     return {
//       id: i,
      
//       text: 'Understanding the fundamental of the C Programming Language.',
//       header:'300 hour of video lectures'
//     };
//   });
//  function Enroll() {

//  return (

//    <>
//    <Header />
//      <Box mt={20} w="100%">
// <Flex>
// <Box bg="#1A202C"  width="100%" height="50%" p={4} color="white" >
//      <Box p="6">
//         <Box d="flex" alignItems="baseline" color="green.200" ml="20" cursor="pointer">
//         Development  Programming languages > C(programming languages)
//           </Box>
//           <Box d="flex" alignItems="baseline" fontSize="28px" ml="20" >
//           C Programming For Beginners-Master the C languages
//           </Box>
//           <Box d="flex" alignItems="baseline"  fontSize="15px" ml="20">
//            C Programming will increase carrer options.Become a better dev  in other language by learning C.Pointer Explained.
//           </Box>
//           <Box d="flex" alignItems="baseline"  fontSize="15px" ml="20" mt="5">
//           <Button colorScheme="green" color="white" variant="solid">Best Seller</Button>
//             <Text ml="4"> 4.4 (22,323 ratings) 88,821 students</Text>
//           </Box>
//       </Box>    
//  </Box>
//  <Center  py={6}>
//       <Box ml="-80vh"
//          height="100vh"
//         width="40vh"
//         bg={useColorModeValue('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'lg'}
//         p={6}
//         textAlign={'center'}>
          
//           <ReactPlayer width="100%" height="160px"  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//         {/* <img
//          objectfit="cover"
//           size={'xl'}
//           src={bgImg3} alt=""/> */}
//         <Heading mt={2} fontSize={'4xl'} ml="-40" fontFamily={'body'}>
//           ₹ 544
//         </Heading>
//         <Text fontSize="20" mt="-8" ml="10" color="gray.400" textDecoration="line-through">₹ 1040</Text>
//         <RepeatClockIcon ml="-60" mt="4" color="red"/>
//         <Text mt="-5" color="red">1 day left at this price !</Text>
        
//         <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//          </Stack>

//          <Link to="/shopping-cart">

//         <Stack mt={4} direction={'row'}  spacing={4}>
        
        
//           <Button
            
//             flex={1}
            
//             fontSize={'sm'}
//             rounded={'10'}
//             bg={'red.400'}
//             color={'white'}
//             boxShadow={
//               '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//             }
//             _hover={{
//               bg: 'red.500',
//             }}
//             _focus={{
//               bg: 'red.500',
//             }}>
//            Add to cart
          
//           </Button>
          
//         </Stack>
//         </Link>
//         <Link to="/checkout">
//         <Button mt="5" width="50%"
//             flex={1}
//             fontSize={'sm'}
//             rounded={'10'}
//             colorScheme="green"
//             variant="outline"
           
//             boxShadow={
//               '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//             }
//             _hover={{
//               bg: 'green.500',
//             }}
//             _focus={{
//               bg: 'green.500',
//             }}>
//            Buy Now
//           </Button>
//           </Link>
//           <Heading fontSize="15" mt="25" ml="-20"> This Course Icludes</Heading>
//           <Box mt="4" ml="15">
//           <Enroll1/>
//           <Enroll1/>
//           <Enroll1/>
//           <Enroll1/>
//           </Box>
//           <Heading fontSize="15" mt="30" ml="-20">Apply Coupon</Heading>
//           <Box  ml="15" mt="4">
//           <Enroll1/>
//           <Enroll1/>
//           <Enroll1/>
//           <Enroll1/>
//           </Box>
//       </Box>
//     </Center>
//     </Flex>

// <Box mt={20} py={4} bg="gray.200" mt="-35%" width="50%" ml="20" 
//   boxShadow={
//     '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//   }>
//       <Stack spacing={2} as={Container} maxW={'1xl'}  >
//         <Heading fontSize={'3xl'} >What you'll learn</Heading>
//       </Stack>

//       <Container maxW={'2xl'} mt={10}>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={4}>
//           {features.map((feature) => (
//             <HStack key={feature.id} align={'top'}>
//               <Box color={'green.400'} px={2}>
//                 <Icon as={CheckIcon} />
//               </Box>
//               <VStack align={'start'}>
//                 <Text fontWeight={600}>{feature.title}</Text>
//                 <Text color={'gray.600'}>{feature.text}</Text>
//               </VStack>
//         </HStack>
            
//           ))}
//         </SimpleGrid>
//       </Container>
     
//     </Box>
//     <Button mt="10" fontSize="25" ml="20"width="50%">Poster</Button> 
//     </Box>
   

//    </>
     
//   )
// }
     
   
    
//   export default Enroll;


import React, { Fragment } from 'react';
import './enroll.scss'
 import HeaderP from "../../../components/Headersss";

import { Layout, Typography,Card } from 'antd';
import Design from './Design';
import Viewing from './viewing';
import Business from './Business'
import Development from './Development';
import Software from './Software';

const { Header } = Layout;

function Enroll() { 
  return (
    <div className="enroll">
        <HeaderP />
        <Layout>
            <Header className="header">
                <div className="logo">
                    <h1>Get real-world skills</h1>
                    <p>lorem that the development build is not optimized.
                        To create a production build, use
                    </p>
                </div>
                </Header>
                <div>
                   <Design />
                   <Viewing />
                   <Business />
                   <Development />
                   <Software />
                </div>
        </Layout>
    </div>
  )
}

export default Enroll;