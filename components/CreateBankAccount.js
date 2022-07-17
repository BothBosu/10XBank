import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import Create from "./Create";

export default function CreateBankAccount({user}) {
    return(
        <>
            {click(user={user})}
        </>
    )
}

function click({user}) {
    const [isInput, setIsInput] = useState(false);
    if (!isInput) {
        return (
            <>
                <Box ml="250" mr="250" mt="6" bg="white" py="10" 
                    rounded="lg" shadow="xl" align="center" >
                    <Button onClick={() => setIsInput(true)}>
                        Create Bank Account
                    </Button>
                </Box>
            </>  
        )
    } else {
        return (
            <>
                <Box ml="250" mr="250" mt="6" bg="white" py="10" 
                    rounded="lg" shadow="xl" align="center">
                    <Create user={user}/>
                </Box>
                <CreateBankAccount user={user} />
            </>
        )
    }
}