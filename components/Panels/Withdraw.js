import { Button, Flex, FormControl, FormLabel, NumberInput, NumberInputField, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useWeb3ExecuteFunction } from "react-moralis";

export default function Withdraw() {
    const [amount, setAmount] = useState(0)
    const handleChange = (value) => setAmount(value)
    const contractProcessor = useWeb3ExecuteFunction();

    async function withdraw(val){
        let options = {
            contractAddress: "0x9594a6e23Bb2cD3687ec84b19737121249c70490",
            functionName: "withdraw",
            abi: [{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],
                "name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            msgValue: Moralis.Units.ETH(val) 
        }
        await contractProcessor.fetch({
            params: options
        })
    }
    
    return(
        <>
            <form>
                <FormControl mt="4">
                    <Flex ml="6" alignItems='center'>
                        <FormLabel htmlFor='amount'>Amount: </FormLabel>
                        <NumberInput onChange={handleChange}>
                            <NumberInputField id='amount' value={amount} />
                        </NumberInput>
                        <Text ml="4">DAI</Text>
                    </Flex>      
                </FormControl>
                <Flex>
                    <Button onClick={() => withdraw(amount)} ml="6" mt="4" type="submit" colorScheme="purple">Withdraw</Button>
                </Flex>
            </form>  
        </>    
    )
}