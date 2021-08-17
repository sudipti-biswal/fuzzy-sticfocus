import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

const CourseCard = ({ title, author, banner }) => (
  <VStack maxW='300' boxShadow='lg' p='2' borderRadius='4' m='4'>
    <Box>
      <img src={banner} alt={title} />
    </Box>
    <Box mt='4'>
      <Text fontSize='18' fontWeight='500'>
        {title}
      </Text>
      <Text color='gray.500'>By {author}</Text>
      <HStack mt='6' mb='6'>
        <Button variant='outline'>View Details</Button>
        <Button className='primary__btn' mt={4}>
          Enroll Now
        </Button>
      </HStack>
    </Box>
  </VStack>
);

export default CourseCard;

// Card with API Integration --
// const CourseCard = ({ title, description, fileURL, id }) => (
//   <VStack maxW='300' boxShadow='lg' p='2' borderRadius='4' m='4'>
//     <Box>
//       <img src={fileURL} alt={title} />
//     </Box>
//     <Box mt='4'>
//       <Text fontSize='18' fontWeight='500'>
//         {description}
//       </Text>
//       <Text color='gray.500'>By Someone</Text>
//       <HStack mt='6' mb='6'>
//         <Button variant='outline'>View Details</Button>
//         <Button className='primary__btn' mt={4}>
//           Enroll Now
//         </Button>
//       </HStack>
//     </Box>
//   </VStack>
// );
