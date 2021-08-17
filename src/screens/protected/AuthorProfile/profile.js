import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  Button,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import cookie from 'react-cookies';
import { useParams } from 'react-router';
import AddIcon from '../../../assets/img/plus.svg';
import { ExternalLinkIcon } from '@chakra-ui/icons';
// import './Profile.scss';
import '../Profile/Profile.scss';
import lg from '../../../assets/img/2.jpg';
import { GrShare } from 'react-icons/gr';
import lk from '../../../assets/img/3.jpg';
import Content from '../Profile/content-item';
import ProfileImg from '../../../assets/img/profile.png';
import ProfilePost from '../../../assets/img/post.jpg';
import { BASE_URL } from '../../../utils/api';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('username');
  const [followersCount, setfollowersCount] = useState(0);
  const [followingCount, setfollowingCount] = useState(0);
  const [likeCount, setlikeCount] = useState(0);
  const [firstName, setfirstname] = useState('firstname');
  const [lastName, setlastname] = useState('lastname');
  const [profileImage, setprofilImage] = useState(ProfileImg);
  const [loading, setLoading] = useState(true);
  const [follow, setFollow] = useState('FOLLOW');
  const [loadings, setLoadings] = useState(true);
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  const { user } = useSelector((state) => state.user);

  const getVideo = () => {
    axios
      .get(`${BASE_URL}/video/getBy/${id}`, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          const { data } = res.data;
          const modifiedData = { ...data.resData };
          setData(modifiedData);
          // setCountVideo(data.count)
          setLoadings(false);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err);
      });
  };

  const followUser = () => {
    const body = {
      followingId: '60c09c32b5eefc9bc41913e1',
      followStatus: 'follow',
    };

    axios
      .post(`${BASE_URL}/follow/add`, body, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setFollow('Following');
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err);
      });
  };

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/user/get/${id}`, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          const parsedResponse = res.data;
          const { data } = parsedResponse;
          // const number  = [...data]
          setUsername(data.username);
          // alert(data.firstName)
          setfirstname(data.firstName);
          setlastname(data.lastName);
          setfollowingCount(data.following);
          setfollowersCount(data.followers);
          setlikeCount(data.likes);
          setLoading(false);
          setprofilImage(data.avatar);
        }
      })
      .catch((err) => {
        console.log({ err });
        // alert(err)
      });
  };

  useEffect(() => {
    getProfile();
    getVideo();
  }, []);

  return (
    <>
      {loading ? (
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
                src={profileImage}
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
                  {/* Azam3213454 */}
                  {firstName} {lastName}
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
                  {/* KingKhan */}@{username}
                </Text>
                <Flex direction='row' mt={2}>
                  {follow === 'FOLLOW' ? (
                    <Button
                      onClick={() => {
                        followUser();
                      }}
                      mr={3}
                      textColor='#fff'
                      size='sm'
                      backgroundColor='red'
                    >
                      <Image src={AddIcon} mr={1} alt='Add Icon' /> {follow}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        followUser();
                      }}
                      mr={3}
                      textColor='#fff'
                      size='sm'
                      backgroundColor='red'
                    >
                      {follow}
                    </Button>
                  )}

                  <Button textColor='#fff' size='sm' backgroundColor='blue.300'>
                    MESSAGE
                  </Button>
                </Flex>
                <Grid ml={-141} mt={30}>
                  <Box
                    display='flex'
                    fontSize='20px'
                    fontStyle='normal'
                    fontWeight='600'
                    lineHeight='72px'
                    letterSpacing='0em'
                    textAlign='left'
                  >
                    <span>{followingCount}</span>
                    <Text ml={4}> Following</Text> <Spacer ml={5} />
                    <span>{followersCount}</span>
                    <Text ml={4}>Followers</Text>
                    <Spacer ml={5} />
                    <span>{likeCount}</span>
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
                      Born to express, not to impress
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
                    {/* { data.length !== 0 ? (
            data.map((item) => {
                return (
                  <Content img={lg} key={item._id} item={item}/>
                );
            })
            ) : (
            <h1>No comments at the moment</h1>
            )} */}

                    {loadings ? (
                      <Spinner
                        ml='90%'
                        alignSelf='center'
                        mt='30%'
                        size='xl'
                        color='red.500'
                      />
                    ) : data.length !== 0 ? (
                      Object.keys(data).map((item) => {
                        return <Content img={lg} key={item._id} item={item} />;
                      })
                    ) : (
                      <Text>No videos at the moment</Text>
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
