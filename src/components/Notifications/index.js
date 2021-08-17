import React, { useState } from "react";
import { All } from "./All";
import { Comments } from "./Comments";
import { Mentions } from "./Mentions";
import { Likes } from "./Likes";
import { Followers } from "./Followers";
import {
  BsBell
} from "react-icons/bs";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Flex, Spacer, IconButton,
} from "@chakra-ui/react";

export const Notifications = (props) => {
  let [activeComp, setActiveComp] = useState('all')

  const handleTabClicked = e => {
    e.preventDefault()
    setActiveComp(e.target.name)
  }

  const ActiveComp = props => {
    if (activeComp === 'all')
      return <All />
    else if (activeComp === 'likes')
      return <Likes />
    else if (activeComp === 'comments')
      return <Comments />
    else if (activeComp === 'mentions')
      return <Mentions />
    else if (activeComp === 'followers')
      return <Followers />
  }

  return (

    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<BsBell className="header__action__icon" />}
          variant="ghost"
          aria-label="Notification"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody>
          <Flex fontSize="small">
            <Box>
              <button name='all' onClick={handleTabClicked} >All</button>
            </Box>
            <Spacer />
            <Box>
              <button name='likes' onClick={handleTabClicked}>Likes</button>
            </Box>
            <Spacer />
            <Box>
              <button name='comments' onClick={handleTabClicked}>Comments</button>
            </Box>
            <Spacer />
            <Box>
              <button name='mentions' onClick={handleTabClicked}>Mentions</button>
            </Box>
            <Spacer />
            <Box>
              <button name='followers' onClick={handleTabClicked}>Followers</button>
            </Box>
          </Flex>
          <Flex>
            <ActiveComp />
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>

  );
};
