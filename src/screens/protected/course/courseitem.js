import React from 'react'
import { 
    Box,
    Badge,
    Text,
    Flex
} from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/image'
import { StarIcon } from '@chakra-ui/icons'
import { WrapItem } from '@chakra-ui/react'

const Courseitem = ({item,id,title,fileURL,description}) => {

    const property = {
        imageUrl: "https://www.extremetech.com/wp-content/uploads/2019/07/Python-Course-1.jpg",
        imageAlt: "2021 Complete Pyhton Bootcamp",
        beds: 3,
        baths: 2,
        title: "2021 Complete Pyhton Bootcamp",
        formattedPrice: "₹1,900",
        reviewCount: 34,
        rating: 4,
      }


    return (
        <Link to={`/enrollcourse/${id}`}
        style={{ color: 'black' }} >
       <Box cursor="pointer" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={title} />

      <Box pt="3" pl="6" pr="6" pb="6">


        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Text mt={2} fontSize="12" textAlign="left" >Author name</Text>

        <Box  d="flex" mt="1" alignItems="center">
            <Text mr={3} textColor="yellow.400">4.5</Text>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "yellow.300" : "gray.200"}
              />
            ))}
  
        </Box >
        <Flex>
          <Text mt={2} fontSize="15" fontWeight="bold" textAlign="left">{property.formattedPrice}</Text>
          
          <Badge borderRadius="2" mt={2.5} ml={20} h={5} pt={1} colorScheme="yellow">
            <Text fontSize="10">Bestseller</Text>
          </Badge>
        </Flex>
      </Box>
    </Box>
        </Link>
    )
}

export default Courseitem
