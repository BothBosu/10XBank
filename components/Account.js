import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Deposit from "./Panels/Deposit";
import Transfer from "./Panels/Transfer";
import Withdraw from "./Panels/Withdraw";

export default function Account({user}) {
    return (
        <>
            <Text ml="10" align="left"><b>Account name: </b> {user.get("username")}</Text>
            <Text ml="10" mt="4" align="left"><b>Balance: </b> </Text>
            <Tabs mb="-20" mt="6" size="lg" colorScheme="purple" isFitted variant='enclosed'>
                <TabList >
                    <Tab fontWeight="bold">Deposit</Tab>
                    <Tab fontWeight="bold">Withdraw</Tab>
                    <Tab fontWeight="bold">Transfer</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Deposit />
                    </TabPanel>
                    <TabPanel>
                        <Withdraw />
                    </TabPanel>
                    <TabPanel>
                        <Transfer />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box mt="50">
            </Box>
        </>
    )
}

