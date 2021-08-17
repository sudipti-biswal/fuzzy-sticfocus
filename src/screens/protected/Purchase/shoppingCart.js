import React from 'react'
import { Flex, Text, Box, Badge,  } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react"
import { Button } from '@chakra-ui/button'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import pricetag from '../../../assets/img/pricetag.png'
import Header from "../../../components/Headersss";
 
const ShoppingCart = () => {
    return (
        <>
        <Header />
        <Flex w="100%" direction="row" mt={10} pl={20} pr={10} pt={10} backgroundColor="rgb(254, 254, 254)">
           <Flex w="70%" direction="column" >
                <Text fontWeight="bold" fontSize="4xl">Shopping Cart</Text>
                <Text textColor="gray" mt={5} fontSize="2xl">1 Course in Cart</Text>

                <Flex w="95%" boxShadow="base" p={1}  rounded="md" bg="white" mt={5} h="20vh" direction="row">
                    <Image h="19vh" src="https://www.extremetech.com/wp-content/uploads/2019/07/Python-Course-1.jpg"></Image>
                    <Flex direction="column" ml={10}>
                    <Text fontWeight="semibold" mt={2} fontSize="18">The complete Android N Developer course</Text>
                    <Text textColor="gray" mt={1} fontSize="13">By Rob Percival and 2 others</Text>
                    </Flex>

                    <Flex direction="column" ml={10} justify="center">
                    <Text mt={2} fontWeight="semibold" cursor="pointer" textColor="blue" fontSize="13">Remove</Text>
                    <Text cursor="pointer" fontWeight="semibold" textColor="blue" mt={1} fontSize="13">Save for later</Text>
                    <Text cursor="pointer" fontWeight="semibold" textColor="blue" mt={1} fontSize="13">Move to Wishlist</Text>
                    </Flex>

                    <Flex direction="column" ml={10} mt={5} >
                    <Flex mt={2}>
                    <Text  fontSize="1xl" fontWeight="bold" cursor="pointer" textColor="red">₹-2,745</Text>
                    <Box w={12} h={12}>
                        <Image src={pricetag}></Image>
                    </Box>
                    </Flex>
                    <Text mt="-5" cursor="pointer" fontWeight="bold" textColor="grey" ml={5} style={{textDecorationLine: 'line-through'}} fontSize="13">₹3200</Text>
                    </Flex>

                </Flex>
                <Box mt={10} w="95%">
                <hr color="grey" ></hr>
                <Text textColor="grey" mt={5} fontSize="2xl">Saved for Later</Text>
                <Text textColor="lightgray" mt={2} fontSize="20">You haven't saved saved course for later</Text>
                <Box mt={12}>
                <hr color="grey" ></hr>
                </Box>
                </Box>

                <Text textColor="black.400" mt={5} fontWeight="semibold" fontSize="1xl">Other Most popular Courses</Text>

           </Flex>
           <Flex w="25%">
               <Flex direction="column"  mt={20} h="55vh" w="80%" backgroundColor="#F7F7F7">
                    <Text fontSize="13" mb={2} textColor="grey" fontWeight="semibold" mt={3} ml={5}>ORDER SUMMARY</Text>
                    <hr color="#000" ></hr>
                    <Text fontSize="17" mb={2} textColor="blackAlpha.700" mt={1} ml={5}>Total:</Text>
                    <Flex>
                    <Text ml={5} fontSize="1xl" fontWeight="semibold" cursor="pointer" textColor="black">₹-2,745</Text>
                    <Badge mt={1} ml={5} borderRadius="full" fontSize="11" pt={1} pl={2} pr={2} pb={1} colorScheme="teal">
                         60% off
                     </Badge>
                     
                    </Flex>
                    <Text mt="-1" cursor="pointer"  textColor="grey" ml={12} style={{textDecorationLine: 'line-through'}} fontSize="13">₹3200</Text>
                    <Button mt={5} borderRadius="1" size="sm" ml={8} mb={5} mr={8} colorScheme="red" variant="solid" >Checkout</Button>
                    <hr color="#000" ></hr>
                    <InputGroup  m={5} size="sm">
                        <Input
                            w="60%"
                            type= "text" 
                            backgroundColor="white"
                            value="Enter Coupon"
                        />
                        <InputRightElement width="60%">
                            <Button borderRadius="1" fontSize="12" colorScheme="red" h={8} >
                                Apply
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        <Flex ml={10} mt="-1">
                        <Text  cursor="pointer"  textColor="black" fontWeight="bold" fontSize="15">X</Text>
                        <Text  textAlign="center" mt={1} ml={1}  textColor="grey" fontWeight="semibold"  fontSize="11">  STICFOCUS299 is applied</Text>
                        </Flex>
                        <Flex  justify="right">
                        <Button mt={2} h={25} mr={2} fontSize="10" w={100} size="sm"  colorScheme="red" variant="solid" >Another Coupon</Button>
                        </Flex>
               </Flex>
               
           </Flex>
        </Flex>
        </>
    )
}

export default ShoppingCart
