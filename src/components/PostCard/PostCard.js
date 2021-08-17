import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
} from '@chakra-ui/react';
import Comments from './comments';
// import { GoVerified } from 'react-icons/go';
import cookie from 'react-cookies';

import { BASE_URL } from '../../utils/api';

import {
  BsHeart,
  BsChatDots,
  BsReply,
  BsMusicNote,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsPlayFill,
  BsPauseFill,
  BsFillHeartFill,
} from 'react-icons/bs';

// import WhatsappIcon from "../../assets/img/option-whatsapp.png";
// import FacebookIcon from "../../assets/img/option-fb.png";
// import TwitterIcon from "../../assets/img/option-twitter.png";
// import EmailIcon from "../../assets/img/option-email.png";
// import URLIcon from "../../assets/img/option-url.png";
import AddIcon from '../../assets/img/plus.svg';
import MusicDisc from '../../assets/img/cd.svg';
import MusicNote from '../../assets/img/musical-note.svg';
import MusicNote2 from '../../assets/img/musical-note-2.svg';
import axios from 'axios';
import './PostCard.scss';
import { Link } from 'react-router-dom';
import { findLastKey } from 'lodash';

function PostCard({ item }) {
  const [videoState, setVideoState] = useState('playing');
  const [volumeState, setVolumeState] = useState('muted');
  const [follow, setFollow] = useState('FOLLOW');
  const [commentClick, setCommentClick] = useState('false');
  const [isLike, setLike] = useState(false);

  const {
    user,
    videoURL,
    thumbnail,
    title,
    likeCount,
    commentCount,
    likeStatus,
  } = item;

  const [likCount, setLikCount] = useState(likeCount);
  const [likedStatus, setLikedStatus] = useState(likeStatus);

  const addLike = () => {
    setLike(true);
    const body = { videoId: `${item._id}` };
    const token = cookie.load('accessToken');
    axios
      .post(`${BASE_URL}/videoLike/add`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          // const { data } = res.data;
          // setData(data);
          setLikedStatus(res.data.data.likeStatus);
          getLikeCount();
        }
      })
      .catch((err) => {
        console.log({ err });
        //alert(err)
      });
  };

  const getLikeCount = () => {
    axios
      .get(`${BASE_URL}/videoLike/getLikeCount/${item._id}`)
      .then((res) => {
        if (res.data.code === 200) {
          setLikCount(res.data.data);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err);
      });
  };

  const followUser = () => {
    setLike(true);
    const body = {
      followingId: `${user.userId}`,
      followStatus: 'follow',
    };
    const token = cookie.load('accessToken');
    axios
      .post(`${BASE_URL}/follow/add`, body, {
        headers: { Authorization: `Bearer ${token}` },
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

  let videoElement = null;

  const onVolumeStateChangeHandler = () => {
    if (volumeState === 'muted') {
      videoElement.muted = false;

      setVolumeState('volume');
    } else {
      videoElement.muted = true;

      setVolumeState('muted');
    }
  };

  const onVideoStateChangeHandler = () => {
    if (videoState === 'playing') {
      videoElement.pause();
      setVideoState('paused');
    } else {
      videoElement.play();
      setVideoState('playing');
    }
  };

  console.log(likedStatus);

  return (
    <Flex direction='column' mb={20} className='post__card'>
      <HStack className='post__card__header'>
        <Avatar
          size='md'
          bg='gray.200'
          src={user.avatar}
          className='post__card__user__avatar'
        />

        <VStack align='flex-start' className='post__card__user__details'>
          <Link
            to={`/authorpro/${user.userId}`}
            className='post__card__user__name'
          >
            {/* @{user.name} {isVerified && <GoVerified />} */}
            {/* @username */}@{user.firstName} {user.lastName}
          </Link>
          {follow === 'FOLLOW' ? (
            <Button
              onClick={() => {
                followUser();
              }}
              size='sm'
              className='post__card__follow__btn'
            >
              <img src={AddIcon} alt='Add Icon' /> {follow}
            </Button>
          ) : (
            <Button
              onClick={() => {
                followUser();
              }}
              size='sm'
              className='post__card__follow__btn'
            >
              {follow}
            </Button>
          )}
        </VStack>
      </HStack>

      <Box className='post__card__description'>
        <Text>{title}</Text>
      </Box>

      <Flex className='post__card__video__container'>
        <Box className='post__card__video__player__container'>
          <video
            autoPlay
            muted
            loop
            ref={(video) => {
              videoElement = video;
            }}
            poster={thumbnail}
          >
            <source src={videoURL} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <HStack className='video__action__buttons' justify='space-between'>
            <Box
              className='play__pause__btn'
              onClick={onVideoStateChangeHandler}
            >
              {videoState === 'playing' ? <BsPauseFill /> : <BsPlayFill />}
            </Box>
            <Box className='volume__btn' onClick={onVolumeStateChangeHandler}>
              {volumeState === 'muted' ? (
                <BsFillVolumeMuteFill />
              ) : (
                <BsFillVolumeUpFill />
              )}
            </Box>
          </HStack>
        </Box>

        <Flex mb='50%' className='post__card__video__actions__container'>
          <VStack
            onClick={() => {
              addLike();
            }}
            className='action'
          >
            {likedStatus ? (
              <BsFillHeartFill className='post__liked' />
            ) : (
              <BsHeart />
            )}

            <Text>{likCount}</Text>
          </VStack>
          <VStack
            className='action'
            onClick={() => {
              setCommentClick('true');
            }}
          >
            <BsChatDots />

            <Text>{commentCount}</Text>
          </VStack>
          <VStack className='action'>
            <BsReply />
          </VStack>
          {/* <Menu placement="top">
            <MenuButton as={VStack} className="action">
              <BsReply />
              <Text>18.2k</Text>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <img src={WhatsappIcon} />
                <Text ml="4">Share on Whatsapp</Text>
              </MenuItem>
              <MenuItem>
                <img src={FacebookIcon} />
                <Text ml="4">Share on Facebook</Text>
              </MenuItem>
              <MenuItem>
                <img src={TwitterIcon} />
                <Text ml="4">Share on Twitter</Text>
              </MenuItem>
              <MenuItem>
                <img src={EmailIcon} />
                <Text ml="4">Share on Email</Text>
              </MenuItem>

              <MenuItem>
                <img src={URLIcon} />
                <Text ml="4">Copy Link</Text>
              </MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
      </Flex>
      {commentClick === 'true' ? (
        <Comments item={item}></Comments>
      ) : (
        <Box></Box>
      )}

      <HStack className='music__info__wrapper'>
        <Box className='musical__disc'>
          <img className='disc' src={MusicDisc} alt='Music' />
          <img className='note note__two' src={MusicNote2} alt='Music' />
          <img className='note' src={MusicNote} alt='Music' />
        </Box>
        <HStack style={{ marginLeft: '40px' }}>
          <Text>original sound</Text>
          <BsMusicNote />
        </HStack>
      </HStack>
      <Box mt={10}>
        <div
          style={{
            borderTop: '1px solid rgba(89, 87, 87, 0.17) ',
            borderWidth: '0.1',
          }}
        ></div>
      </Box>
    </Flex>
  );
}

export default PostCard;
