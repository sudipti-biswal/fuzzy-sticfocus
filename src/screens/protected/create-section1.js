import React from "react";
import {
  Box,
  RadioGroup,
  Divider,
  Radio,
  Grid,
  Stack,
  Text,
  Flex,
  Button,
  ButtonGroup,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { AddIcon, ChevronLeftIcon,SettingsIcon } from "@chakra-ui/icons";

const Course2 = () => {
  return (
    <Flex w="100%" h="full" direction="column">
    
    <Box display="flex" border="1px" w="100%" h="12%" backgroundColor="red.300" justifyContent="space-between" color="white">
    <Flex display="flex">
   <ChevronLeftIcon w="50px" h="50px" alignSelf="center" />
   <Text fontSize="20px" alignSelf="center">Back to course</Text>
    </Flex>
   
    <Box  display="flex" >
    <Button alignSelf="center" bgColor="red.500" color="white" w="100px" h="40px" fontSize="25px" fontWeight="light" variant="outline" mr="50px">
Save
  </Button>
  <SettingsIcon alignSelf="center" color="white" w="40px" h="40px" mr="59px" />
    </Box>
    </Box>

      <Box
        m="40px"
        w="92%"
        h="100%"
        display="flex"
        justifyContent="space-between"
       
      >
      <Box  borderRadius="md"
      backgroundColor="blackAlpha.100"
      border="1px" w="20%" h="100%"  textAlign="center">
                   <Box mt="35px">
                   <Text fontWeight="bold">Plan your course</Text>
                   <RadioGroup defaultValue="1">
                     <Stack ml="20px" mt="10px">
                       <Radio size="sm" mb="2px" value="1">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="2">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="3">
                         Target your students
                       </Radio>
                     </Stack>
                   </RadioGroup>
      
                   <Text mt="10px" mt="20px" fontWeight="bold">
                     Plan your course
                   </Text>
                   <RadioGroup defaultValue="1">
                     <Stack ml="20px" mt="10px">
                       <Radio size="sm" mb="2px" value="1">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="2">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="3">
                         Target your students
                       </Radio>
                     </Stack>
                   </RadioGroup>
      
                   <Text mt="20px" fontWeight="bold">
                     Plan your course
                   </Text>
                   <RadioGroup defaultValue="1">
                     <Stack ml="20px" mt="10px">
                       <Radio size="sm" mb="2px" value="1">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="2">
                         Target your students
                       </Radio>
                       <Radio size="sm" value="3">
                         Target your students
                       </Radio>
                     </Stack>
                   </RadioGroup>
                   <Button colorScheme="red" w="110px" h="30px" mt="20px">
                     Button
                   </Button>
                   </Box>
                 </Box>

                 <Box w="75%" h="100%" borderRadius="md"
                 backgroundColor="blackAlpha.100"
                 border="1px">
                 <Box mt="8px" ml="15px">
             <Text color="gray.600" fontSize="16px" fontWeight="medium">Target Your Students</Text>
             <Divider orientation="horizontal" color="grey" mt="5px"/>
             <Text mt="10px" fontSize="13px">
               The descriptiom you write here will helps students and teachers
             </Text>
           </Box>

           <Box m="10px">
             <Text mt="20px" fontSize="13px" fontWeight="bold">What will student learn in this course</Text>
             <Box w="100%" h="20%" mt="10px" >
               <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
                         </Box>
             <ButtonGroup
             mt="13px"
             size="md"
             isAttached
             bg="white"
             color="green"
             variant="outline"
             bgColor="none"
             >
               <IconButton aria-label="Add to friends" icon={<AddIcon />} />
               <Button>Add an Answer</Button>
             </ButtonGroup>
           </Box>

           <Box m="10px">
           <Text mt="20px" fontSize="13px" fontWeight="bold">What will student learn in this course</Text>
           <Box w="100%" h="20%" mt="10px" >
             <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
                       </Box>
           <ButtonGroup
           mt="13px"
           size="md"
           isAttached
           bg="white"
           color="green"
           variant="outline"
           bgColor="none"
           >
             <IconButton aria-label="Add to friends" icon={<AddIcon />} />
             <Button>Add an Answer</Button>
           </ButtonGroup>
         </Box>

         <Box m="10px">
         <Text mt="20px" fontSize="1px" fontWeight="bold">What will student learn in this course</Text>
         <Box w="100%" h="20%" mt="10px" >
           <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
                     </Box>
         <ButtonGroup
         mt="13px"
         size="md"
         isAttached
         bg="white"
         color="green"
         variant="outline"
         bgColor="none"
         >
           <IconButton aria-label="Add to friends" icon={<AddIcon />} />
           <Button>Add an Answer</Button>
         </ButtonGroup>
       </Box>
                 </Box>
              </Box>
              
    </Flex>
  );
};

export default Course2;


// <Box
//           w="20%"
//           borderRadius="md"
//           backgroundColor="blackAlpha.100"
//           border="1px"
//           display="grid"
//         >
//           <Box textAlign="center" mt="30px">
//             <Text fontWeight="bold">Plan your course</Text>
//             <RadioGroup defaultValue="1">
//               <Stack ml="20px" mt="10px">
//                 <Radio size="sm" mb="2px" value="1">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="2">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="3">
//                   Target your students
//                 </Radio>
//               </Stack>
//             </RadioGroup>

//             <Text mt="10px" mt="20px" fontWeight="bold">
//               Plan your course
//             </Text>
//             <RadioGroup defaultValue="1">
//               <Stack ml="20px" mt="10px">
//                 <Radio size="sm" mb="2px" value="1">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="2">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="3">
//                   Target your students
//                 </Radio>
//               </Stack>
//             </RadioGroup>

//             <Text mt="20px" fontWeight="bold">
//               Plan your course
//             </Text>
//             <RadioGroup defaultValue="1">
//               <Stack ml="20px" mt="10px">
//                 <Radio size="sm" mb="2px" value="1">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="2">
//                   Target your students
//                 </Radio>
//                 <Radio size="sm" value="3">
//                   Target your students
//                 </Radio>
//               </Stack>
//             </RadioGroup>
//           </Box>
//           <Box justifySelf="center">
//             <Button colorScheme="red" w="110px" h="30px">
//               Button
//             </Button>
//           </Box>
//         </Box>

//         <Box w="75%" h="100%" borderRadius="md" border="1px">
//           <Box mt="8px" ml="15px">
//             <Text color="gray.600" fontSize="14px" fontWeight="medium">Target Your Students</Text>
//             <Divider orientation="horizontal" color="grey" mt="5px"/>
//             <Text mt="10px" fontSize="13px">
//               The descriptiom you write here will helps students and teachers
//             </Text>
//           </Box>

//           <Box m="10px">
//             <Text mt="20px" fontSize="14px" fontWeight="bold">What will student learn in this course</Text>
//             <Box w="100%" h="20%" mt="10px" >
//               <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
//                         </Box>
//             <ButtonGroup
//             mt="13px"
//             size="md"
//             isAttached
//             bg="white"
//             color="green"
//             variant="outline"
//             bgColor="none"
//             >
//               <IconButton aria-label="Add to friends" icon={<GrAddCircle />} />
//               <Button>Add an Answer</Button>
//             </ButtonGroup>
//           </Box>

//           <Box m="10px">
//           <Text mt="20px" fontSize="14px" fontWeight="bold">What will student learn in this course</Text>
//           <Box w="100%" h="20%" mt="10px" >
//             <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
//                       </Box>
//           <ButtonGroup
//           mt="13px"
//           size="md"
//           isAttached
//           bg="white"
//           color="green"
//           variant="outline"
//           bgColor="none"
//           >
//             <IconButton aria-label="Add to friends" icon={<GrAddCircle />} />
//             <Button>Add an Answer</Button>
//           </ButtonGroup>
//         </Box>

//         <Box m="10px">
//         <Text mt="20px" fontSize="14px" fontWeight="bold">What will student learn in this course</Text>
//         <Box w="100%" h="20%" mt="10px" >
//           <Input placeholder="Examples: Low-Light Photography"  h="40px" border="1px" borderColor="gray.200" borderRadius="sm" boxShadow="md"/>
//                     </Box>
//         <ButtonGroup
//         mt="13px"
//         size="md"
//         isAttached
//         bg="white"
//         color="green"
//         variant="outline"
//         bgColor="none"
//         >
//           <IconButton aria-label="Add to friends" icon={<GrAddCircle />} />
//           <Button>Add an Answer</Button>
//         </ButtonGroup>
//       </Box>
//         </Box>
