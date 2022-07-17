import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, NumberInput, NumberInputField, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function Transfer() {
    const [amount, setAmount] = useState(0)
    const [account, setAccount] = useState('')
    const handleChangeAmount = (value) => setAmount(value)
    const handleChangeAccount = (account) => setAccount(account)

    return(
        <>
            <form>
                <FormControl mt="4">
                    <Flex ml="6" alignItems='center'>
                        <FormLabel htmlFor='amount'>Account Name: </FormLabel>
                        <Input width="100" onChange={handleChangeAccount} />
                    </Flex>  
                </FormControl>
                <FormControl mt="4">
                    <Flex ml="6" alignItems='center'>
                        <FormLabel htmlFor='amount'>Amount: </FormLabel>
                        <NumberInput ml="46" onChange={handleChangeAmount}>
                            <NumberInputField id='amount' value={amount} />
                        </NumberInput>
                        <Text ml="4">DAI</Text>
                    </Flex>      
                    <FormHelperText ml="6" align="left">
                    There is a 1% fee, If you transfer to another account. There is no fee, if you transfer to your account
                    </FormHelperText>
                </FormControl>
                <Flex>
                    <Button ml="6" mt="4" type="submit" colorScheme="purple">Transfer</Button>
                </Flex>
            </form>  
        </> 
    )
}