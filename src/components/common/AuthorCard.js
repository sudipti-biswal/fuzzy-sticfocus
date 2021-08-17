import { Avatar, Box, Button, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AuthorCard = ({ title, description, fileURL, id }) => (
  <VStack boxShadow='lg' p='4' pl='6' pr='6' borderRadius='4' m='4'>
    <Avatar size='xl' bg='gray.200' src={fileURL} />
    <Box textAlign='center'>
      <Text fontSize='18' fontWeight='500'>
        {title}
      </Text>
      <Text color='gray.500'>{description}</Text>
      <Button backgroundColor="#C40A2C" as={Link} to={`/authorpro/${id}`} className='primary__btn' mt={4}>
        View Profile
      </Button>
    </Box>
  </VStack>
);

export default AuthorCard;
