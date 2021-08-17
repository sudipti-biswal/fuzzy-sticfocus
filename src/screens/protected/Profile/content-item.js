import React from 'react'
import {Box, VStack} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import './Profile.scss';
import { Link } from 'react-router-dom';
import VideoThumbnail from 'react-video-thumbnail'

const ContentItem = ({img,item}) => {
    return (
     <Box className="onh" cursor="pointer" w="100%"   >
         <Link to={`/video-solo/fhjfdfffd55888d`}>
         <Image h="65vh" w="100%" src={img}></Image>
         </Link>
     </Box>
    )
}

export default ContentItem
