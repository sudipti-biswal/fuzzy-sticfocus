import React, { Fragment } from "react";
import { Box, Flex,Spacer,Button, Text, Image } from "@chakra-ui/react";
import Sidebar from '../protected/componentss/SideBar'
import { FiMenu } from 'react-icons/fi'
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";
import check from '../../assets/img/check.png'
import audi from '../../assets/img/audi.png'
import kko from '../../assets/img/kko.PNG'
import coursesection from '../../assets/img/course-section.png'
import Header from './componentss/Header'

const course = () => {
    return (
<>
<Flex w="100%">
      <Sidebar />
      <Flex
        flexDirection="column"
        pos="absolute"
        top="1%"
        left="6%"
        w="90%"
      >
        <Header />
        <Box w="80%" ml={"10%"} mt={15} backgroundColor="#F7F7F7">
          <Flex p={10}>
              <img src={check} width="90" height="90"/>
              <Spacer></Spacer>
              <Box alignSelf="center" alignContent="center">
              <Text fontSize="3xl" fontFamily="Roboto">Jump Into Course Creation</Text>
              <Text textAlign="center" color="rgba(89, 87, 87, 0.57)">know more....</Text>
              </Box>
              <Spacer></Spacer>
              <Link to="/create-course" >
              <Button colorScheme="red" mt={5} alignSelf="center">Create Your Course</Button>
              </Link>
          </Flex>
        </Box>
        <Flex w="80%" ml={"10%"} mt={19.5}  >
        <Box w="45%" backgroundColor="#F7F7F7">
        <Flex pl={10} pt={5} pr={10} direction="column">
        <Box alignSelf="center" mt={5}>
            <Image src={kko} alt="Segun Adebayo" />
            </Box>
              
              <Box alignSelf="center" alignContent="center" mt={5}>
              <Text fontSize="3xl" fontSize="2xl" fontWeight="bold" textAlign="center">Get Started with Video</Text>
              <Text textAlign="center" fontSize="1.5xl" fontWeight="bold" color="rgba(89, 87, 87, 0.57)" mt={5}>Quality video lectures can set 
your course apart. Use our res-
ources to learn the basics.</Text>
              </Box>
              
              <Text mt={20} cursor="pointer" color="#C40A2C" fontWeight="bold" fontSize="2xl" alignSelf="center">Get Started</Text>
          </Flex>
        </Box>
        <Spacer></Spacer>
        <Box w="45%" backgroundColor="#F7F7F7">
          <Flex pl={10} pt={5} pr={10} direction="column">
          <Box w={220} h={220} alignSelf="center">
            <Image src={audi}  />
            </Box>
              
              <Box alignSelf="center" alignContent="center" mt="-20">
              <Text  fontSize="3xl" fontSize="2xl" fontWeight="bold" textAlign="center">Build Your Audience</Text>
              <Text textAlign="center" fontSize="1.5xl" fontWeight="bold" color=" rgba(89, 87, 87, 0.57)" mt={5}>Set your course up for success 
by building your audience.</Text>
              </Box>
              
              <Text alignSelf="flex-end" cursor="pointer" mt={10} mb={10} color="#C40A2C" fontWeight="bold" fontSize="2xl" alignSelf="center">Get Started</Text>
          </Flex>
        </Box>
        </Flex>

        <Text  w="100%" mt={20} mb={10} fontSize="3xl" fontWeight="semibold" textAlign="center">Have questions? Here are our most popular instructor resources.
</Text>

        <Box  w="90%" alignSelf="center">
            <Image src={coursesection}  />
            </Box>

            <Text  w="100%" mt={20} mb={10} fontSize="2xl" fontWeight="bold" textAlign="center">Are You Ready to Begin?</Text>

            <Flex w="100%" justify="center">
            <Link to="/create-course">
            <Button  mb={20}
             colorScheme="red" alignSelf="center">Create Your Course</Button>
            </Link>
            </Flex>
      </Flex>

      
    </Flex>
    <Box >
    <Footer />
    </Box>
    </>
    )
}

export default course
