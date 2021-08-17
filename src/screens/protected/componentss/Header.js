import React from 'react'
import {
    Flex,
    Text,
    Box,
    IconButton,
    Divider,
    Avatar,
    Spacer,
    Heading
} from '@chakra-ui/react'
import pf from '../../../assets/img/pf.png'
import { Notifications } from '../../../components/Notifications';

const Header = () => {

    return (
       <Flex justify="right" >
           <Box width="250px">
            <Flex>
           <h1 style={{color:"rgba(89, 87, 87, 0.57)", marginTop:"7px"}}>Rewards</h1>
           <Spacer ></Spacer>
           <h1 style={{color:"rgba(89, 87, 87, 0.57)", marginTop:"7px"}}>Student</h1>
           <Spacer ></Spacer>
           <Notifications />
           <Spacer ></Spacer>
           <img src={pf} width="50" height="50"  style={{alignSelf:"center"}}/>
           </Flex>
           </Box>
       </Flex>
    )
}

export default Header
