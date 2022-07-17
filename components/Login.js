import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Login({authenticate, isAuthenticated, user}){
    return (
        <>
            <Head>
                <title>10XBank</title>
            </Head>
            <Flex bgGradient="linear(to-br, #E0AAFF, #5A189A)" 
                direction="column" 
                width="100vw"
                height="100vh">
                <Flex>
                    <Text bgClip='text' bgGradient='linear(to-r, #5A189A, #9D4EDD)' 
                        ml="6" fontSize="5xl" fontWeight="bold">10XBank</Text>
                    <Spacer />
                    <Button mt="6" mr="6" onClick={() => authenticate()} colorScheme="purple">
                        Login with Metamask
                    </Button>
                </Flex>
            </Flex>
        </>      
    )
}
    

