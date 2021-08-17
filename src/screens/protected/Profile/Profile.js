import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Box,
  Flex,
  Grid,
  Spacer,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  IconButton,
  Image,
  Spinner,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import './Profile.scss';
import lg from '../../../assets/img/2.jpg';
import lk from '../../../assets/img/3.jpg';
import Content from './content-item';
import { BASE_URL } from '../../../utils/api';
import PostCard from '../../../components/PostCard';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userVideos, setUserVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.user);

  const getVideo = () => {
    axios
      .get(`${BASE_URL}/video/getBy/${user.id}`, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setUserVideos(res.data.resData);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const getProfileById = () => {
    axios
      .get(`${BASE_URL}/user/get/${user.id}`, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setUserData(res.data.data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getProfileById();
    getVideo();
    setLoading(false);
  }, []);

  return (
    <>
      {loading || !userData ? (
        <Flex w='100%' justify='center'>
          <Spinner alignSelf='center' size='xl' color='red.500' />
        </Flex>
      ) : (
        <Flex
          w='100%'
          h='100%'
          direction={['column', 'column', 'column', 'column']}
          overflow='auto'
        >
          <Box
            w={['100%', '100%', '100%', '100%']}
            h={['fit-content', '30%', 'fit-content', 'fit-content']}
          >
            <Box ml={45} mt={30} display='flex'>
              <Image
                borderRadius='full'
                boxSize='100px'
                src={userData.avatar}
                alt='Profile'
              />
              <Grid display='initial' mt={-2} ml={9}>
                <Text
                  font-family='Roboto'
                  fontSize='25px'
                  fontStyle='normal'
                  fontWeight='700'
                  lineHeight='56px'
                >
                  {userData.firstName} {userData.lastName}
                  <IconButton
                    background='none'
                    w={2}
                    h={6}
                    mb={2}
                    ml={6}
                    as={ExternalLinkIcon}
                  />
                </Text>

                <Text
                  mt={-4}
                  fontFamily='heading'
                  fontSize='18px'
                  fontStyle='normal'
                  fontWeight='500'
                  lineHeight='32px'
                  textAlign='left'
                >
                  @{userData.username}
                </Text>

                <Grid ml={-141} mt={38}>
                  <Box
                    display='flex'
                    fontSize='20px'
                    fontStyle='normal'
                    fontWeight='600'
                    lineHeight='72px'
                    letterSpacing='0em'
                    textAlign='left'
                  >
                    <span>{userData.following}</span>
                    <Text ml={4}> Following</Text> <Spacer ml={5} />
                    <span>{userData.followers}</span>
                    <Text ml={4}>Followers</Text>
                    <Spacer ml={5} />
                    <span>{userData.likes}</span>
                    <Text ml={4}>Likes</Text>
                  </Box>
                  <Box>
                    <Text
                      mt={2}
                      fontStyle='Regular'
                      fontWeight='600'
                      fontSize='20px'
                      lineHeight='22px'
                    >
                      {userData.bio}
                    </Text>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box w='100%' mt={10}>
            <Tabs isFitted variant='enclosed'>
              <TabList>
                <Tab>
                  <Text fontWeight='semibold' fontSize='18px'>
                    Videos
                  </Text>
                </Tab>
                <Tab>
                  <Text fontWeight='semibold' fontSize='18px'>
                    Liked
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns='repeat(3, 1fr)' gap={0.5}>
                    {userVideos && userVideos.length !== 0 ? (
                      userVideos.map((item) => (
                        <PostCard key={item._id} item={item} />
                      ))
                    ) : (
                      <Text className='no-videos-text'>
                        You have no videos at the moment
                      </Text>
                    )}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns='repeat(3, 1fr)' gap={0.5}>
                    <Content img={lk} />
                    <Content img={lk} />
                    <Content img={lg} />
                    <Content img={lk} />
                    <Content img={lk} />
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Profile;
