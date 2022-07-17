import { Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import { useState } from "react"
import { useMoralis } from "react-moralis"
import Account from "./Account"

export default function Create({user}){
    const [input, setInput] = useState('')
    const [isInput, setIsInput] = useState(false);
    const {setUserData, isUserUpdating} = useMoralis()

    if (!isInput) {
        return (
            <>
                <form onSubmit={e => {
                    e.preventDefault()
                    if(input.trim() != '') { //input is not an empthy string
                        setUserData({
                            username: input
                        }).then(() => setInput(''))
                        .then(() => setIsInput(true))
                    }
                }}>
                    <FormControl mt="6" mb="6">
                            <Flex>
                                <FormLabel ml="6" htmlFor="username">Account name: </FormLabel>
                                <Input mr="6" id="username" type="text" placeholder="ex. Unnawut" 
                                value={input} onChange={e => setInput(e.target.value)}/>
                            </Flex> 
                    </FormControl>
                    <Button type="submit" colorScheme="purple">
                        Create
                    </Button>
                </form>      
            </>
        )
    } else {
        return (
            <Account user={user}/>
        )
    }
}