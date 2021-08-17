import React, { useEffect, useState } from 'react';
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
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import cookie from 'react-cookies';
import { deleteUser } from '../../redux/reducers/userSlice';

import { SearchIcon } from '@chakra-ui/icons';
import { BsCloudUpload } from 'react-icons/bs';
import { GrChat } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { Notifications } from '../Notifications';
import search from '../../screens/protected/Search/search';
import './Header.scss';
import axios from 'axios';

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(deleteUser());
    cookie.remove('user');
    history.push('/login');
  };

  const [searchTerm, setSearchTerm] = useState('');

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
        <Heading as={Link} to='/' fontWeight='500' size='lg'>
          Sticfocus
        </Heading>
      </HStack>

      <Box className='search__input__wrapper'>
        <InputGroup>
          <Input
            placeholder='Search accounts & sounds'
            focusBorderColor='none'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement
            children={
              <Link to={`/search/${searchTerm}`}>
                <IconButton
                  aria-label='Search accounts & sounds'
                  icon={<SearchIcon />}
                  variant='outline'
                />
              </Link>
            }
          />
        </InputGroup>
      </Box>

      <Box>
        <HStack minW='150' justify='space-between'>
          <Link to='/create-post'>
            <IconButton
              icon={<BsCloudUpload className='header__action__icon' />}
              variant='ghost'
              aria-label='Upload New Videos'
            />
          </Link>

          <Link to='/chat'>
            <IconButton
              icon={<GrChat className='header__action__icon' />}
              variant='ghost'
              aria-label='Chats'
            />
          </Link>

          <Notifications />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='User'
              variant='ghost'
              icon={<BiUser className='header__action__icon' />}
            />
            <MenuList>
              <MenuItem as={Link} to='/profile' icon={<AiOutlineUser />}>
                Profile
              </MenuItem>
              <MenuItem>Draft</MenuItem>
              <MenuItem>Settings</MenuItem>
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
