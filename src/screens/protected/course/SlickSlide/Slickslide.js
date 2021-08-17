
import React,{ useEffect, useState }  from 'react';

import Slider from "react-slick";
import Courseitem from "../courseitem";
import  "../SlickSlide/slickslide.scss";
import { Spinner } from '@chakra-ui/spinner';
import axios from 'axios';
import { AUTHOR_URL, COURSE_URL } from '../../../../utils/api';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, Flex } from "@chakra-ui/react";
import  "../SlickSlide/slickslide.scss";

function Slickslide() {

  const config = {
    
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const [settings, setSettings] = useState(config);

  const products = [
    {
      img: '../../../assets/img/Rectangle 49.png',
      title: 'Cards Personalization',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      img: '../../../assets/img/Rectangle 49.png',
      title: 'Cards Personalization',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      img: ' ../../../assets/img/Rectangle 49.png',
      title: 'Cards Personalization',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      img: ' ../../assets/img/Rectangle 49.png',
      title: 'Cards Personalization',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      img: ' ../../assets/img/Rectangle 49.png',
      title: 'Cards Personalization',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
   
  ]

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);

  const getAllCourse = () => {
    axios
      .get(`${COURSE_URL}/get`)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          const { data } = res.data;
          setCourse(data);
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllCourse();
    setLoading(false);
  }, []);

  

  return (
    <>
    { loading? 
    <Flex w="100%" justify="center" >
    <Spinner alignSelf="center"  size="xl" color="red.500" />
    </Flex>
    :
    <div className="App">
      <Slider {...settings}>
        {course.map((item) => {
          return <Courseitem 
          key={item._id}
                  item={item}
                  id={item._id}
                  title={item.title}
                  fileURL={item.fileURL}
                  description={item.description}
          />
        })}
      </Slider>
    </div>
      }
    </>
  );
}



  

    

export default Slickslide;