import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';

import DownloadBanner from '../../components/DownloadBanner';
import PostCard from '../../components/PostCard/';

import './Common.scss';
import { Spinner } from '@chakra-ui/spinner';

import { VIDEO_URL } from '../../utils/api';

const ForYou = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.user);

  const getAllVideos = () => {
    axios
      .get(`${VIDEO_URL}/getAll`, {
        headers: { Authorization: user.accessToken },
      })
      .then((res) => {
        if (res.data.code === 200) {
          const { data } = res.data;
          setData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      <Flex direction='column' className='videos__wrapper'>
        {loading ? (
          <Spinner alignSelf='center' mt='50%' size='xl' color='red.500' />
        ) : data.length !== 0 ? (
          data.map((item) => {
            return <PostCard key={item._id} item={item} />;
          })
        ) : (
          <h1>No videos at the moment</h1>
        )}
      </Flex>
      <Box className='download__wrapper'>
        <DownloadBanner />
      </Box>
    </>
  );
};

export default ForYou;
