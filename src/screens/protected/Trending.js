import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import axios from 'axios';

import { AUTHOR_URL, COURSE_URL } from '../../utils/api';
import courseBanner from '../../assets/img/course-banner.jpg';
import Slider from "react-slick";
import AuthorCard from '../../components/common/AuthorCard';
import CourseCard from '../../components/common/CourseCard';
import CourseItem from '../protected/course/courseitem'
import { Spinner } from '@chakra-ui/spinner';
import './Common.scss';

function Trending() {
  const [course, setCourse] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingg, setLoadingg] = useState(true);

  const config = {
    
    dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
  };

  const [settings, setSettings] = useState(config);

  const getAllCourse = () => {
    axios
      .get(`${COURSE_URL}/get`)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          const { data } = res.data;
          setCourse(data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const getAllAuthor = () => {
    axios
      .get(`http://3.108.14.230:3333/api/trendings/get`)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          const { data } = res.data;
          setAuthor(data);
          setLoadingg(false)
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllCourse();
    getAllAuthor();
    setLoading(false);
  }, []);

  return (
    <>
    { loadingg? 
    <Flex w="100%" justify="center" >
    <Spinner alignSelf="center"  size="xl" color="red.500" />
    </Flex>
    :
    <Flex flexDirection='column'>
      <Box p='10'>
        <Flex  direction="row" w="100%">
        <Heading fontSize='24' fontWeight='500'>
          Trending Authors
        </Heading>
        <Spacer></Spacer>
        <Flex justify="right">
        <Heading cursor="pointer" fontSize='20' fontWeight='500'>
          View More
        </Heading>
        </Flex>
        </Flex>
        <Flex mt={5}>
          {loading ? (
            <h1>Loading...</h1>
          ) : author.length !== 0 ? (
            author.slice(0, 4).map((item) => {
              return (
                <AuthorCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  fileURL={item.fileURL}
                  description={item.description}
                />
              );
            })
          ) : (
            <h1>No Author at the moment.</h1>
          )}
        </Flex>
      </Box>

      <Box p='10' >
      <Flex  direction="row" w="100%">
        <Heading fontSize='24' fontWeight='500'>
          Trending Courses
        </Heading>
        <Spacer></Spacer>
        <Flex justify="right">
        <Heading cursor="pointer" fontSize='20' fontWeight='500'>
          View More
        </Heading>
        </Flex>
        </Flex>
        <Flex mt={5} w="100%">
          {loading ? (
            <h1>Loading...</h1>
          ) : course.length !== 0  ? (
            course.slice(0, 3).map((item) => {
              return (
              
                <Box p="5">
                <CourseItem
                  key={item._id}
                  item={item}
                  id={item._id}
                  title={item.title}
                  fileURL={item.fileURL}
                  description={item.description}
                />
                </Box>
               
              );
            })
          ) : (
            <h1>No Course at the moment.</h1>
          )}
          {/* <div className="App">
          <Slider  {...settings}> */}
          {/* <Box p="5">
          <CourseItem />
          </Box>
          <Box p="5">
          <CourseItem />
          </Box>
          <Box p="5">
          <CourseItem />
          </Box> */}
  
          {/* </Slider>
          </div> */}

          {/* <CourseCard
            title='Advanced JavaScript Consecpts'
            author='Someone'
            price='200'
            banner={courseBanner}
          />
          <CourseCard
            title='Advanced JavaScript Consecpts'
            author='Someone'
            price='200'
            banner={courseBanner}
          />
          <CourseCard
            title='Advanced JavaScript Consecpts'
            author='Someone'
            price='200'
            banner={courseBanner}
          /> */}
        </Flex>
      </Box>
    </Flex>
}
    </>
  );
}

export default Trending;
