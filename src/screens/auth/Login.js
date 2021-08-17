import React from 'react';

import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  Link,
  useToast,
} from '@chakra-ui/react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookies';
import { addUser } from '../../redux/reducers/userSlice';
import './Auth.scss';
import { AUTH_URL } from '../../utils/api';
import AuthBanner from '../../assets/img/auth-banner.png';
import GoogleIcon from '../../assets/img/google-icon.png';
import FacebookIcon from '../../assets/img/facebook-icon.png';
import LoginForm from './components/LoginForm';
import SocialAuthButton from '../../components/SocialAuthButton';

function Login() {
  let toast = useToast();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (email, password, mobileNumber) => {
    const data = {
      email,
      password,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(`${AUTH_URL}/login`, data, headers)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          const { data } = res.data;
          dispatch(addUser(data));
          // alert(JSON.stringify(data))
          cookie.save('user', data, { path: '/' });
          cookie.save('accessToken', data.accessToken, { path: '/' });
          history.push('/for-you');
        }
      })
      .catch((err) => {
        console.log({ err });

        toast({
          title: err.response.data.message,
          status: 'error',
          position: 'top-right',
        });
      });
  };

  const responseGoogle = (res) => {
    if (res.profileObj) {
      let google_response = {
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        loginType: 'Google',
        designation: 'Student',
      };
      axios
        .post(`${AUTH_URL}/login/by/social`, google_response)
        .then((res) => {
          if (res.data.code === 200) {
            const { data } = res.data;
            dispatch(addUser(data));
            cookie.save('user', data, { path: '/' });
            cookie.save('accessToken', data.accessToken, { path: '/' });
          }
        })
        .catch((err) => {
          toast({
            title: err.response.data.message,
            status: 'error',
            position: 'top-right',
          });
        });
    } else {
      toast({
        title: 'Something went wrong',
        status: 'error',
        position: 'top-right',
      });
    }
  };

  const responseFacebook = (res) => {
    if (res.status === 'connected') {
      let fb_response = {
        firstName: res.name.split(' ')[0],
        lastName: res.name.split(' ')[1],
        email: res.email,
        loginType: 'Facebook',
        designation: 'Student',
      };
      axios
        .post(`${AUTH_URL}/login/by/social`, fb_response)
        .then((res) => {
          if (res.data.code === 200) {
            const { data } = res.data;
            dispatch(addUser(data));
            cookie.save('user', data, { path: '/' });
            cookie.save('accessToken', data.accessToken, { path: '/' });
          }
        })
        .catch((err) => {
          toast({
            title: err.response.data.message,
            status: 'error',
            position: 'top-right',
          });
        });
    } else {
      toast({
        title: 'Something went wrong',
        status: 'error',
        position: 'top-right',
      });
    }
  };

  return (
    <Flex width='full'>
      <Box className='auth__banner'>
        <img
          className='auth__banner__img'
          src={AuthBanner}
          alt='Authentication Banner'
        />
      </Box>

      <Box className='form__wrapper'>
        <Box textAlign='center'>
          <Heading>Log in to Sticfocus</Heading>
          <Text mt={3} color='gray.500'>
            Manage your account, check comment on videos, and more.
          </Text>
        </Box>

        <Box mt={10} textAlign='center'>
          <LoginForm handleLogin={handleLogin} />
        </Box>

        <Box mt={8}>
          <HStack justify='center' className='social__auth__button__wrapper'>
            <GoogleLogin
              clientId='424359930356-ph7q7gnmpkfffm7mttaee2v84irdeh81.apps.googleusercontent.com'
              render={(renderProps) => (
                <SocialAuthButton
                  socialIconImage={GoogleIcon}
                  text='Continue with'
                  socialName='Google'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            ></GoogleLogin>

            <FacebookLogin
              appId='512779639494311'
              fields='name,email,picture'
              callback={responseFacebook}
              render={(renderProps) => (
                <SocialAuthButton
                  socialIconImage={FacebookIcon}
                  text='Continue with'
                  socialName='Facebook'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
            />
          </HStack>
        </Box>

        <Divider orientation='horizontal' mt={10} mb={6} />

        <Text mt={8} textAlign='center'>
          Don't have an accout?{' '}
          <Link as={RouterLink} to='/signup' color='brand.800' href='#'>
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Login;
