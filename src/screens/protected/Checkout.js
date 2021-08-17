import React from 'react';
import {
    Box,
    Container,
    InputGroup,
    Checkbox,
    InputRightElement,
    Grid,
    Stack,
    Text,
    Flex,
    Input,
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RadioGroup,
  Radio,
  Divider,
    Heading,
    Button,
  } from '@chakra-ui/react';
  import Header from "../../components/Headersss"
  import {ChevronDownIcon,LockIcon} from '@chakra-ui/icons'


const Checkout = () => {
    return (
      <>
      <Header />
        <Flex mt={20} w="100%" direction={["column", "column", "column","row", "row"]}>
    <Box display="grid" w={[
        "21em", // 30em-48em
        "22em",
        "100%",
        "100%",
        "60%", // 62em+
      ]}
      h={[
        "fit-content", // 30em-48em
        "fit-content",
        "fit-content",
        "100%", // 62em+
      ]} >
    <Box m="30px">
    <Heading>Checkout</Heading>
    <Text>Billig Address</Text>
    <Flex mt="30px" justifyContent="space-between">
    <Menu>
  <MenuButton w="150px" h="60px" backgroundColor="blackAlpha.300" as={Button} rightIcon={<ChevronDownIcon />}>
    Country
  </MenuButton>
  <MenuList>
    <MenuItem>India</MenuItem>
    <MenuItem>Pak</MenuItem>
    <MenuItem>Sri-lanka</MenuItem>
    <MenuItem>Australia</MenuItem>
    <MenuItem>Bangladesh</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton w="150px" h="60px" backgroundColor="blackAlpha.300" as={Button} rightIcon={<ChevronDownIcon />}>
    City/State
  </MenuButton>
  <MenuList>
    <MenuItem>Nagpur</MenuItem>
    <MenuItem>Mumbai</MenuItem>
    <MenuItem>Delhi</MenuItem>
    <MenuItem>Hyderabad</MenuItem>
    <MenuItem>Pune</MenuItem>
  </MenuList>
</Menu>
    </Flex>

    <Box m="40px" justifyContent="space-around">
    <RadioGroup defaultValue="1">
  <Stack>
    <Radio colorScheme="green" value="1">
      Credit and Debit Card
    </Radio>
    <Radio colorScheme="green" value="2">Pay with net banking</Radio>
    <Radio colorScheme="green" value="3">Pay with UPI</Radio>
    <Radio colorScheme="green" value="4">Pay with Wallets india</Radio>
  </Stack>
</RadioGroup>
<Box>

<Box mt="30px" border="1px" borderRadius="md" background="blackAlpha.400">
<Grid m="20px">
<Stack spacing={4}>
  <InputGroup>
    <Input type="tel" placeholder="Name on Card" backgroundColor="white"/>
  </InputGroup>

  <InputGroup>
    <Input placeholder="Card Number" backgroundColor="white"  />
    <InputRightElement children={<LockIcon />} />
  </InputGroup>
  <Flex>
  <Input placeholder="Month" backgroundColor="white"  />
  <Input placeholder="Year" backgroundColor="white"  ml="19px"/>
  <Input placeholder="CVV" backgroundColor="white"  ml="19px"   />
  </Flex>
</Stack>
</Grid>
</Box>
</Box>
    </Box>
    </Box>
    
    </Box>
    <Box justifyContent="space-between" display="grid" w={[
        "17em", // 30em-48em
        "20em",
        "100%",
        "100%",
        "36%", // 62em+
      ]}
      h={[
        "fit-content", // 30em-48em
        "fit-content",
        "fit-content",
        "60%", // 62em+
      ]} border="1px"  h="60%"  borderRadius="md">
    <Box m="10px" w="100%">
    <Heading>Summary</Heading>
    <Flex mt="30px" ml='-10px' display="flex"  justifyContent="space-between">
    <Box className="col-8">
    <Text>Original Price</Text>
    <Text>Original Price</Text>
    
    </Box>
    <Box className="col-6" >
    <Text>Rs 2290/</Text>
    <Text>Rs-2290/</Text>
    </Box>
   
    
    </Flex>
    <Divider orientation="horizontal" mt="10px"/>
    <Flex  ml='-10px' display="flex"  justifyContent="space-between">
    <Box className="col-8">
    <Text>Totals:</Text>

    
    </Box>
    <Box className="col-6" >
    <Text>Rs 0000/</Text>
    
    </Box>
   
    
    </Flex>
    <Container  fontSize="12px" mt="6px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Container>
    <Checkbox size="sm" mt="10px">Lorem Ipsum of the typesetting industry</Checkbox>
    
    </Box>
    <Button justifySelf="center" colorScheme="red" h="40px" w="150px">Complete Payment</Button> 
    </Box>
        </Flex>
        </>
    );
};

export default Checkout;