import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import TodoPage from './components/TodoPage'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isRegister, setisRegister] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box pos={"fixed"} >
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      {
        !isRegister ?
          <Register />
          :
          isAuth ?
            <Login />
            :
            <>
              <Box textAlign={'center'}>
                <Button
                  mt={10}
                  p={30}
                  w={'max-content'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.1000',
                  }}>
                  Add Todo
                </Button>
              </Box>
              <TodoPage />
            </>
      }
    </>
  )
}

export default App
