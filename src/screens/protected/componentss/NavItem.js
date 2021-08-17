import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import yt from '../../../assets/img/yt.png'
import NavHoverBox from '../componentss/NavHoverBox'

export default function NavItem({ icon, title, description, active, navSize }) {
    return (
        <Flex
            mt={2}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#fff" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%" >
                        <Flex>
                            {/* <Icon as={yt} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} /> */}
                            <img src={yt} width="70" height="70"/>
                            <Text color="#fff" ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
  
            </Menu>
        </Flex>
    )
}