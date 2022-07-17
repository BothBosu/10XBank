import { Button, Flex, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import Moralis from "moralis"
import { useState } from "react"
import { useWeb3ExecuteFunction } from "react-moralis"

export default function Deposit() {
    const [amount, setAmount] = useState(0)
    const handleChange = (value) => setAmount(value)
    const contractProcessor = useWeb3ExecuteFunction();
    
    async function deposit(val){
        let options = {
            contractAddress: "0x9594a6e23Bb2cD3687ec84b19737121249c70490",
            functionName: "deposit",
            abi: [{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"}],
            msgValue: Moralis.Units.ETH(val) 
        }
        await contractProcessor.fetch({
            params: options
        })
    }
    
    // const contractAddress = "0x9594a6e23Bb2cD3687ec84b19737121249c70490"
    // const contractABI = [{"inputs":[{"internalType":"address","name":"account","type":"address"}],
    // "name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    // async function deposit(val) {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     const depositContract = new ethers.Contract(contractAddress, contractABI, provider)
        
    //     await depositContract.deposit(val)
    // }

    return(
        <>
            <form>
                <FormControl mt="4">
                    <Flex ml="6"  alignItems='center'>
                        <FormLabel htmlFor='amount'>Amount: </FormLabel>
                        <NumberInput onChange={handleChange}>
                            <NumberInputField id='amount' value={amount} />
                        </NumberInput>
                        <Text ml="4">DAI</Text>
                    </Flex>      
                </FormControl>
                <Flex>
                    <Button onClick={() => deposit(amount)} ml="6" mt="4" colorScheme="purple">Deposit</Button>
                </Flex>
            </form>  
        </>    
    )
}
