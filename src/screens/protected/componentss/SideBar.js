import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
    Flex,
    Text,
    Box,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../componentss/NavItem'
import lg from '../../../assets/img/lg.png'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            h="200vh"
            backgroundColor="#C40A2C"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w="75px"
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                {/* <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                       
                            changeNavSize("small")
                    }}
                /> */}
                <Box w="100%" p={3}>
                <img src={lg} width="40" height="40"  />
                </Box>
                <Link to="/instructor">
                <NavItem navSize={navSize} icon={FiHome} title=""  /> 
                </Link>              
            </Flex>

        </Flex>
    )
}