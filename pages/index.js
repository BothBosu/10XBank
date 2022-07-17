import { Button, Flex, Text } from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'
import Bank from '../components/Bank';
import Login from '../components/Login';

export default function Home() {
  
  const {authenticate, isAuthenticated, user, logout, isLoggingOut} = useMoralis();

  if (!isAuthenticated) {
    return (
      <>
          <Login authenticate={authenticate} isAuthenticated={isAuthenticated} user={user}/>
      </>
    )
  } else {
    return (
      <>
        <Bank user={user} logout={logout}/>
      </>
    )
  } 
}
