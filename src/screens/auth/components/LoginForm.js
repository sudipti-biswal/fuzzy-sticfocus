import React, { useState } from "react";
import { HStack, FormControl, FormLabel, Button, Text, PinInput, PinInputField, InputGroup, Input, InputRightElement, Tooltip } from "@chakra-ui/react";
import { QuestionOutlineIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import _ from "lodash";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function LoginForm({ handleLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("email");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  let [errors, setErrors] = useState({});
  let [visited, setVisited] = useState({
    email: false,
    password: false,
    mobileNumber: false,
  });

  // Initial Validation
  const doValidate = () => {
    errors = {};

    // Email Validation
    if (email === undefined || email === "") {
      if (visited.email) {
        errors.email = "Please enter your email";
      }
    } else if (
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)
    ) {
      errors.email = "Please enter a valid email address";
    }

    // Mobile Number Validation
    // if (mobileNumber === undefined || mobileNumber === "") {
    //   if (visited.mobileNumber) {
    //     errors.mobileNumber = "Please enter your mobile number";
    //   }
    // }

    // Password Validation
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      ) &&
      visited.password
    ) {
      errors.password = "Please enter a valid password";
    }

    setErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // Handle Visited Fields
  const handleVisited = (e, defaultValue = "") => {
    if (defaultValue === "") {
      let { name } = e.target || e;

      _.set(visited, name, true);
      setVisited({ ...visited });
      doValidate();
    } else {
      let name = defaultValue;

      _.set(visited, name, true);
      setVisited({ ...visited });
      doValidate();
    }
  };

  // Final Validation
  const finalValidate = () => {
    errors = {};

    // Validating Email Input
    if (email === undefined || email === "") {
      errors.email = "Please enter your email";
    } else if (
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)
    ) {
      errors.email = "Please enter a valid email address";
    }

    // Mobile Number Validation
    // if (mobileNumber === undefined || mobileNumber === "") {
    //   if (visited.mobileNumber) {
    //     errors.mobileNumber = "Please enter your mobile number";
    //   }
    // }

    // Validating Password Input
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      errors.password = "Please enter a valid password";
    }

    setErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (!finalValidate()) return;

    handleLogin(email, password, mobileNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      {loginType === "email" ? (
        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Email</FormLabel>
              <FormLabel
                className="alt__login__link"
                color="gray.500"
                onClick={() => setLoginType("phone")}
              >
                Log in with phone
             </FormLabel>
            </HStack>
            <Input
              type="email"
              name="email"
              placeholder="username@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleVisited}
            />
            <Text color="red.400" fontSize="14" textAlign="left">
              {errors.email || ""}
            </Text>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>
              Password
              <Tooltip
                label="Your password must contain at least: 8 characters, 1 upper case letter, 1 lower case letter, 1 number and 1 special character"
                placement="top"
                hasArrow
              >
                <QuestionOutlineIcon className="password__tooltip" w={3} h={3} />
              </Tooltip>
            </FormLabel>

            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleVisited}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text color="red.400" fontSize="14" textAlign="left">
              {errors.password || ""}
            </Text>
          </FormControl>
        </>
      ) : (

        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Phone</FormLabel>
              <FormLabel
                className="alt__login__link"
                color="gray.500"
                onClick={() => setLoginType("email")}
              >
                Log in with email
            </FormLabel>
            </HStack>

            <PhoneInput
              country={"in"}
              preferredCountries={["in", "us"]}
              containerClass="phone__input__wrapper"
              inputClass="phone__input"
              buttonClass="phone__input__btn"
              dropdownClass="phone__input__dropdown"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(number) => setMobileNumber(number)}
              onBlur={() => handleVisited({}, "mobileNumber")}
            />
            <Text color="red.400" fontSize="14" textAlign="left">
              {errors.mobileNumber || ""}
            </Text>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>Enter 4-digit code</FormLabel>
            <HStack justify="space-between">
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Button>Send Code</Button>
            </HStack>
          </FormControl>
        </>
      )}

      <Button width="full" className="form__submit__btn" mt={8} type="submit">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
