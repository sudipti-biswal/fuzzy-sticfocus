import { ReactNode } from 'react';

import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Avatar,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import "../footer/footer.scss";
const Logo = (props) => {
  return (
	 
    <div className="logo" >
      <Avatar name="LOGO" className="avatar" ml={-25}/>
		<Text fontWeight={'700'}fontSize={35} mt={-50} ml={45}>Sticfocus</Text>
    </div>

  );
};

const ListHeader = ({ children }: { children:ReactNode}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      { children }
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bgGradient="linear(to-l,#7928CA,#FF0080)"
      color={useColorModeValue('white', 'gray.800')}>
      <Container as={Stack} maxW={'6xl'} mt={50}py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader >Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Carrers</Link>
            <Link href={'#'}>ByteDance</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Programs</ListHeader>
            <Link href={'#'}>Sticfocus for good</Link>
            <Link href={'#'}>Advertise</Link>
            <Link href={'#'}>Developers</Link>
            {/* <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Partners</Link> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Control</Link>
            <Link href={'#'}>Safety Control</Link>
            <Link href={'#'}>Creator Portal</Link>
            <Link href={'#'}>Community Guidelines</Link>
            <Link href={'#'}>Transparency</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Terms of Services</Link>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Property Policy</Link>
            <Link href={'#'}>Law Enforcement</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
	  <Box py={1}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            // borderBottom: '1px solid',
            // borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            
          }}
          _after={{
            content: '""',
            // borderBottom: '1px solid',
            // borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
           
          }}>
          
        </Flex>
        <Text mt={-30} fontSize={'sm'} textAlign={"center"}>
          © 2020 Sticfocus
        </Text>
      </Box>
    </Box>
  );
}
