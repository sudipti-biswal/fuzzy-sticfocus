import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard/';
import { BASE_URL } from '../../utils/api';
import { Flex } from '@chakra-ui/layout';
import axios from 'axios';
import { useParams } from 'react-router';

const PostDetail = () => {

  const { id } = useParams()
  const [item, setItem] = useState([]);

  const getVideo = () => {
    axios
      .get(`${BASE_URL}/Video/getBy/${id}`)
      .then((res) => {
        if (res.data.code === 200) {
          const { data } = res.data;
          setItem(data);

        }
      })
      .catch((err) => {

        console.log({ err });
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

    return (
      <Flex >
       <PostCard key={item._id} item={item} />
      </Flex>
    )
}

export default PostDetail
