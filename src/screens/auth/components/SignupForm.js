import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FormControl, FormLabel, Button, InputGroup, Input, InputRightElement, Text, Tooltip } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import _ from "lodash";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function SignupForm({ handleSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");

  let [errors, setErrors] = useState({});
  let [visited, setVisited] = useState({
    username: false,
    email: false,
    dob: false,
    mobileNumber: false,
    password: false,
  });

  // Initial Validation
  const doValidate = () => {
    errors = {};

    // Name Validation
    if ((username === undefined || username === "") && visited.username) {
      errors.username = "Please enter your name";
    }

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

    // DoB Validation
    if (dob === undefined || dob === "") {
      if (visited.dob) {
        errors.dob = "Please enter your date of birth";
      }
    }

    // Mobile Number Validation
    if (mobileNumber === undefined || mobileNumber === "") {
      if (visited.mobileNumber) {
        errors.mobileNumber = "Please enter your mobile number";
      }
    }

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

    // Validating Name Input
    if (username === undefined || username === "") {
      errors.username = "Please enter your name";
    }

    // Validating Email Input
    if (email === undefined || email === "") {
      errors.email = "Please enter your email";
    } else if (
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)
    ) {
      errors.email = "Please enter a valid email address";
    }

    // DoB Validation
    if (dob === undefined || dob === "") {
      if (visited.dob) {
        errors.dob = "Please enter your date of birth";
      }
    }

    // Mobile Number Validation
    if (mobileNumber === undefined || mobileNumber === "") {
      if (visited.mobileNumber) {
        errors.mobileNumber = "Please enter your mobile number";
      }
    }

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

    let splitedDateString = dob.toString().split(" ");
    let monthIndex = months.indexOf(splitedDateString[1]) + 1;
    let month = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
    let dateOfBirth = `${month}/${splitedDateString[2]}/${splitedDateString[3]}`;

    handleSignup(username, email, mobileNumber, password, dateOfBirth);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          name="username"
          placeholder="ex. John Doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleVisited}
        />
        <Text color="red.400" fontSize="14" textAlign="left">
          {errors.username || ""}
        </Text>
      </FormControl>

      <FormControl mt={3}>
        <FormLabel>Email</FormLabel>
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

      <FormControl mt={3}>
        <FormLabel>When's your birthday?</FormLabel>

        <DatePicker
          selected={dob}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => {
            console.log(date);
            setDob(date);
          }}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="MM/DD/YYYY"
          customInput={<Input />}
          className="datepicker__input"
          maxDate={new Date()}
          name="dob"
          onBlur={handleVisited}
        />
        <Text color="red.400" fontSize="14" textAlign="left">
          {errors.dob || ""}
        </Text>
      </FormControl>

      <FormControl mt={3}>
        <FormLabel>Phone</FormLabel>
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

      <FormControl mt={3}>
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

      <Button width="full" className="form__submit__btn" mt={8} type="submit">
        Sign Up
      </Button>
    </form>
  );
        }

export default SignupForm;
