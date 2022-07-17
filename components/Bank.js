import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import CreateBankAccount from "./CreateBankAccount";

export default function Bank({user, logout}) {
    return (
        <>
            <Head>
                <title>10XBank</title>
            </Head>
            <Flex bgGradient="linear(to-br, #80ffdb, #c77dff)" 
                direction="column" 
                width="100vw"
                height="100vh">
                <Flex>
                    <Text bgClip='text' bgGradient='linear(to-r, #5A189A, #E0AAFF)' 
                        ml="6" fontSize="5xl" fontWeight="bold">10XBank
                    </Text>
                    <Spacer />
                    <Button m={6} colorScheme="purple" onClick={logout}>{user.attributes.ethAddress}</Button> 
                </Flex>
                <Text textAlign="center" color="#5A189A" fontWeight="bold" fontSize="3xl">My Accounts </Text>
                <CreateBankAccount user={user} />
            </Flex>           
        </>
    )
}