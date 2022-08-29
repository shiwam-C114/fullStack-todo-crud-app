import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function TodoPage({taskname="eat", status = "done", tag= "personal"}) {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
           {tag}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            
            <Text fontSize={'6xl'} fontWeight={800}>
             {taskname}
            </Text>

          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {status}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}