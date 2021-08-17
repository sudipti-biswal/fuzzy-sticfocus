import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { GrFavorite, GrCart } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {
  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', false);
    window.location.href = '/login';
  };

  return (
    <Flex
      width='full'
      boxShadow='xs'
      p='4'
      pl='8'
      pr='8'
      bg='white'
      justify='space-between'
      position='fixed'
      top='0'
      zIndex='1000'
    >
      <HStack>
        <Heading fontWeight='500' size='lg'>
          Sticfocus
        </Heading>
      </HStack>

      <Box className='search__input__wrapper'>
        <InputGroup>
          <Input
            size='md'
            value='Search for anything'
            focusBorderColor='none'
          />
          <InputRightElement
            children={
              <IconButton
                aria-label='Search fot anything'
                icon={<SearchIcon />}
                variant='outline'
              />
            }
          />
        </InputGroup>
      </Box>

      <Box>
        <HStack minW='150' justify='space-between'>
          <Link exact to='/course'>
            <Text textColor='grey' cursor='pointer' fontSize='17' mr={5}>
              My Courses
            </Text>
          </Link>

          <Link exact to='/instructor'>
            <Text textColor='grey' cursor='pointer' fontSize='17' mr={5}>
              Teach us on Sticfocus
            </Text>
          </Link>

          <Link exact to='/upload_video'>
            <IconButton
              icon={<GrFavorite className='header__action__icon' />}
              variant='ghost'
              aria-label='Upload New Videos'
            />
          </Link>

          <Link to='/shopping-cart'>
            <IconButton
              icon={<GrCart className='header__action__icon' />}
              variant='ghost'
              aria-label='Chats'
            />
          </Link>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='User'
              variant='ghost'
              icon={<BiUser className='header__action__icon' />}
            />
            <MenuList>
              <Link to='/profile'>
                <MenuItem icon={<AiOutlineUser />}>Profile</MenuItem>
              </Link>
              <Link to='/course1'>
                <MenuItem>Draft</MenuItem>
              </Link>
              <Link to='/author'>
                <MenuItem>Settings</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Header;
