import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Text,
  Flex,
  Link,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import '../Search/Search.scss';
import ProfileImg1 from '../../../assets/img/profile.png';
import { StarIcon } from '@chakra-ui/icons';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../utils/api';
import axios from 'axios';
import cookie from 'react-cookies';

const Menus = () => {
  const property = {
    imageUrl: { ProfileImg1 },
    // imageAlt: "Rear view of modern home with pool",
    author: 'Ramesh Shah',
    title: 'Chapterwise Topicwise',
    title1: 'NEET 33 BOOK',
    formattedPrice: '$1,900.00',
    reviewCount: '(34000)',
    rating: 3,
  };

  const { searchTerm } = useParams();

  const [data, setData] = useState({
    Course: [],
    Author: [],
    Video: [],
    Sounds: [],
    Trendings: [],
    Institude: [],
    TrendingsCourse: [],
    Topics: [],
  });

  const postSearch = () => {
    const token = cookie.load('accessToken');

    axios
      .post(
        `${BASE_URL}/Author/search/`,
        { search: searchTerm },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        if (res.data.code === 200) {
          console.log(res);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    postSearch();
  }, [searchTerm]);

  const {
    Course,
    Author,
    Video,
    Sounds,
    Trendings,
    Institude,
    TrendingsCourse,
    Topics,
  } = data;

  return (
    <Flex w='100%' mb={5} direction={['column', 'column', 'row', 'row']}>
      <Box w='90%' ml={5} display='grid'>
        <Box m='30px' display='grid'>
          <Text fontWeight='semibold' fontSize='23px'>
            {Course.length +
              Author.length +
              Video.length +
              Sounds.length +
              Trendings.length +
              Topics.length +
              Institude.length +
              TrendingsCourse.length}{' '}
            result's for {searchTerm}
          </Text>
          <Text fontWeight='semibold' fontSize='17px' mt='3px'>
            Explore{'  '}
            <Link color='teal.500' href='#'>
              {searchTerm}
            </Link>
          </Text>

          <Box
            mt='20px'
            borderRadius='lg'
            bg='blackAlpha.200'
            boxShadow='lg'
            w='100%'
            h='55px'
          >
            <Box m='15px' display='flex'>
              <Icon w='7' h='7' as={RiErrorWarningFill} color='teal' />
              <Text ml='5px' fontWeight='semibold' letterSpacing='wider'>
                Not sure? All course are 30 days money back gurantee
              </Text>
            </Box>
          </Box>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Courses
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Course?.length !== 0 &&
              Course.map((item, index) => {
                return (
                  <Box key={index} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={item.fileURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='start' fontWeight='bold'>
                      {item.title}
                    </Text>
                    <Text textAlign='start' fontWeight='bold'>
                      NEET 33 BOOK
                    </Text>
                    <Text textAlign='start' color='blackAlpha.600'>
                      {item.authorName}
                    </Text>
                    <Box display='flex' justifyContent='start'>
                      <Flex>
                        <Box mt='-4px' color='gold' fontWeight='bold'>
                          {property.rating}
                        </Box>
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon
                              ml='3px'
                              key={i}
                              color={i < property.rating ? 'gold' : 'gray.300'}
                            />
                          ))}
                        <Box mt='-5px'>{property.reviewCount}</Box>
                      </Flex>
                    </Box>
                    <Text>{property.formattedPrice}</Text>
                    <Button
                      colorScheme='teal'
                      justifyItems='start'
                      w='90px'
                      h='20px'
                      mt='10px'
                    >
                      Best Seller
                    </Button>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Author
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Author?.length !== 0 &&
              Author.map((auth, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={auth.fileURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      {auth.title}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      {auth.description}
                    </Text>
                    <Stack className='profile-btn'>
                      <Button colorScheme='red' size='sm'>
                        View Profile
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Video
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Video?.length !== 0 &&
              Video.map((video, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={video.thumbnail}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      {video.title}
                    </Text>

                    <Stack className='profile-btn'>
                      <Button colorScheme='red' size='sm'>
                        View Video
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Sounds
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Sounds?.length !== 0 &&
              Sounds.map((sound, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={sound.songURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      {sound.title}
                    </Text>
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      Volume : {sound.volume}
                    </Text>

                    <Stack className='profile-btn'>
                      <Button colorScheme='red' size='sm'>
                        Use Sound
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Trendings
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Trendings?.length !== 0 &&
              Trendings.map((trend, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={trend.fileURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      Trending Author{trend.title}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      {trend.description}
                    </Text>
                    <Stack className='profile-btn'>
                      <Button colorScheme='red' size='sm'>
                        View Profile
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Trending Courses
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {TrendingsCourse?.length !== 0 &&
              TrendingsCourse.map((trendCourse, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={trendCourse.fileURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      {trendCourse.title}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      {trendCourse.description}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      Likes : {trendCourse.likes}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      Ratings ({trendCourse.ratings})
                    </Text>

                    <Stack className='profile-btn'>
                      <Button colorScheme='red' size='sm'>
                        $ {trendCourse.price}
                      </Button>
                    </Stack>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>

        <Box bg='blackAlpha.100' m='30px' display='grid'>
          <Box mt='20px' ml='40px' display='flex'>
            <Text fontWeight='medium' fontSize='25px'>
              Topics
            </Text>
          </Box>

          <Flex mt='20px' ml='40px' className='box-wrap'>
            {Topics?.length !== 0 &&
              Topics.map((Topic, i) => {
                return (
                  <Box key={i} mr={10} display='grid' className='grid-box'>
                    <Avatar
                      borderRadius='none'
                      src={Topic.fileURL}
                      w='140px'
                      h='170px'
                    />
                    <Text textAlign='center' mt={2} fontWeight='bold'>
                      {Topic.title}
                    </Text>

                    <Text textAlign='center' color='blackAlpha.600'>
                      {Topic.description}
                    </Text>
                  </Box>
                );
              })}
          </Flex>
          <Button bg='none' justifyContent='flex-end'>
            View All
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Menus;
