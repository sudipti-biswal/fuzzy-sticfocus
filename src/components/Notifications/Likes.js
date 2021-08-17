import React from "react";
//import { Link } from "react-router-dom";
import {
  Box,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
    BsInbox
  } from "react-icons/bs";

export const Likes = (props) => {
  return (
    <Box w="full">
      <Center minH="96">
        <VStack align="center">
          <BsInbox />
          <Text fontSize="small" fontWeight="thin">
            All likes
          </Text>
          <Text fontSize="xx-small" fontWeight="thin">
            Notifications of your account will appear here
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};
