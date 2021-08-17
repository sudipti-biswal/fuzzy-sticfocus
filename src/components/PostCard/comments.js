import React, { useEffect, useState } from 'react'
import { Flex, Text,Box } from '@chakra-ui/layout'
import { Input,InputGroup,InputRightAddon } from '@chakra-ui/input';
import { FiSend } from 'react-icons/fi';
import { Avatar } from '@chakra-ui/avatar';
import './PostCard.scss';
import cookie from 'react-cookies'
import axios from 'axios';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { BASE_URL } from '../../utils/api';


const Comments = ({ item }) => {
    const [value, setValue] = React.useState("Enter comments")
    const [boder, setBorder] = React.useState("blackAlpha.400")
  const handleChange = (event) => setValue(event.target.value)
  const [replyvalue, setReplyValue] = React.useState("Reply comment")
  const handleChangeReply = (event) => setReplyValue(event.target.value)
  const [commentData, setCommentData] = React.useState([])
  const [commentReplyData, setCommentReplyData] = React.useState([])
  const [commentClick, setCommentClick] = useState('false');

 

  const addComment = () => {
    if(value === ''){
        //alert('empty hai')
        setBorder('crimson')
        return;
    }
    if(value !== ''){
      setBorder('blackAlpha.400')
  }
    const body = { 'videoId': `${item._id}`, 'comment':`${value}`, 'reply':' ' };
    const token = cookie.load('accessToken')
    axios
      .post(`${BASE_URL}/videoComment/add`,body
      ,
      { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then((res) => {
        if (res.data.code === 200) {
          // const { data } = res.data;
          // setData(data);
          getComment()
          console.log('success')
            setValue('')
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err)
      });
  };

  const addReplyComment = (videoId) => {
    const body = { 'videoId':item._id,'commentId':videoId, 'comment':replyvalue };
    const token = cookie.load('accessToken')
    axios
      .post(`${BASE_URL}/CommentReply/add`,body,
      { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then((res) => {
        if (res.data.code === 200) {
          // const { data } = res.data;
          // setData(data);

          getReplyComment(videoId)
          console.log('success')
            setReplyValue('Enter comment')
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err)
      });
  };

  const getComment = () => {
    const body = { 'videoId': `${item._id}`, 'comment':`${value}`, 'reply':' ' };
    const token = cookie.load('accessToken')
    axios
      .get(`${BASE_URL}/videoComment/getComment/${item._id}`,
      { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then((res) => {
        if (res.data.code === 200) {
           const { data } = res.data;
           setCommentData(data);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err)
      });
  };

  const getReplyComment = (commentId) => {
    const body = { 'videoId': `${item._id}`, 'comment':`${value}`, 'reply':' ' };
    const token = cookie.load('accessToken')
    axios
      .get(`${BASE_URL}/commentReply/get/${commentId}`,
      )
      .then((res) => {
        if (res.data.code === 200) {
           const { data } = res.data;
          // alert(JSON.stringify(data))
          const modifiedData = {...data}
          //alert(JSON.stringify( modifiedData))
           setCommentReplyData(modifiedData);
           //alert(commentReplyData.length)
        }
      })
      .catch((err) => {
        console.log({ err });
        alert(err)
      });
  };

  useEffect(() => {
    if(value !==''){
      setBorder('blackAlpha.400')
    }
    getComment()
    // getReplyComment()
  }, []);


    return (
        <Flex mt={1} w="100%" direction="column" border="1px" borderWidth="0.1" p={2}>
            <Flex justify="center">
            <Text>Comments</Text>
            </Flex>
            <Flex w="100%" mt={7} direction="column">
            { commentData.length !== 0 ? (
            commentData.map((item) => {
                return (
                    <Flex w="100%" mt={4}>
                    <Avatar size='sm' src={item.avatar} bg='gray.200' className='post__card__user__avatar' />
                    <Flex w="100%" direction="column" ml={4} mt="-1">
                        <Text fontWeight="semibold" fontSize="14">{item.firstName} {item.lastName}</Text>
                        <Text textColor="blackAlpha.600" fontSize="16">{item.comment}</Text>

                        {/* <Text onClick={()=>{
                          setCommentClick(`true${item._id}`)
                          getReplyComment(item._id)
                        }} mt={1} cursor="pointer" textColor="blackAlpha.600" fontWeight="bold" fontSize="11">Reply</Text>
                         */}
                        
                        {
                          commentClick ==`true${item._id}`?
                        <Flex direction="column" mt={1} justify="end" w="100%" >
                          {/* <Flex direction="column" ml={5} mt={2} w="100%">

{ commentReplyData.length !== 0 ?
Object.keys(commentReplyData).map((item) =>{
    <Flex>
      <Avatar size='sm' src={item.avatar} bg='gray.200' className='post__card__user__avatar' />
   <Flex w="100%" direction="column" ml={4} mt="-1">
<Text fontWeight="semibold" fontSize="14">{item.firstName} {item.lastName}</Text>
<Text textColor="blackAlpha.600" fontSize="16">{item.comment}</Text>
</Flex>
    </Flex>
})

:<div></div>
}

</Flex> */}

                          <InputGroup borderRadius="15"  size="sm" backgroundColor="white">
                              <Input value={replyvalue}
                              fontSize="11"
                  onChange={handleChangeReply}
                  placeholder="Reply Comment" size="sm"/>
                              <InputRightAddon cursor="pointer" onClick={()=>{
                                  addReplyComment(item._id)
                              }}>
                                  <FiSend/>
                              </InputRightAddon>
                </InputGroup>
            </Flex>
          :<div></div>  
          }
                    </Flex>
                    </Flex>
                );
            })
            ) : (
            <h1>No comments at the moment</h1>
            )}
               
            </Flex>

            <Flex mt={5} justify="end" w="100%" >
                <InputGroup size="sm" backgroundColor="white">
                    <Input value={value}
                    borderColor={boder}
                    onChange={handleChange}
                    placeholder="Enter Comments" size="sm"/>
                    <InputRightAddon cursor="pointer" onClick={()=>{
                        addComment()
                    }}>
                        <FiSend/>
                    </InputRightAddon>
                </InputGroup>
            </Flex>
        </Flex>
    )
}

export default Comments
