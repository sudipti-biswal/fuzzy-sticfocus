import React, { useState } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  useToast,
} from "@chakra-ui/react";

import "./Auth.scss";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const toast = useToast();
  const history=useHistory()

  const handleRedirect=()=>{
    history.push("/verify-email")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      email
    }

    axios.post("http://localhost:8585/api/authentication/forget/password",data)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

    toast({
      title: "Email sent with reset link.",
      status: "success",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex width="full">
      <Box className="form__wrapper">
        <Box textAlign="center">
          <Heading>Yo! Forgot Your Password</Heading>
          <Text mt={3} color="gray.500">
            No worries! You will receive an email with instructions to reset
            your password. Please enter your login email.
          </Text>
        </Box>

        <Box mt={10} textAlign="center">
          <form onSubmit={handleSubmit}>
            <FormControl mt={6}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="username@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormControl>

            <Button
              width="full"
              className="form__submit__btn"
              mt={8}
              type="submit"
              onClick={handleRedirect}
            >
              Get Reset Link
            </Button>
          </form>
        </Box>

        <Divider orientation="horizontal" mt={10} mb={6} />

        <Text mt={8} textAlign="center">
          Go back to{" "}
          <Link as={RouterLink} to="/login" color="brand.800" href="#">
            Log in
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default ForgotPassword;
