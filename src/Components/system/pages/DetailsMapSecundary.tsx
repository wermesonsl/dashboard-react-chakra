import { WarningTwoIcon } from "@chakra-ui/icons";
import { Alert, Box, Button, Circle, CloseButton, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from 'react';
import CardEmRota from "../CardEmRota";

const DetailsMapSecundary = (props: any) => {

  return (
    <Box bgColor="white" left="350px" w="350px" position="absolute" zIndex="2" boxShadow="#d8d8d8 8px 0px 8px -5px">
      <Flex justifyContent="space-between" h="50px" p="1rem" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="bold">Detalhes da Viagem</Text>
        <CloseButton size="sm" />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" p="1rem" >
        <Box>
          <Text fontWeight="bold">WO 123456</Text>
          <Box>
            <Button colorScheme="gray" size="xs" mt="3" p="3">
              TRUCK
            </Button>
            <Text><Circle size="10px" bgColor="green.200" display="inline-block" /> Driving</Text>
          </Box>
        </Box>
        <Box>
          <Alert status="error" p="1px 10px" borderRadius="5px" bgColor="#fef0ec" color="#ef6151" border="1px solid #ef6151" fontSize="12px">
            Errors <WarningTwoIcon color="red.400" />
          </Alert>
        </Box>
      </Flex>
      <Tabs borderTop="1px solid #e2e8f0">
        <TabList h="50px">
          <Tab>Todos</Tab>
          <Tab>Circulando</Tab>
          <Tab>Estacionados</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0" maxH="calc(100vh - 200px)" overflow="auto">
            <CardEmRota />
          </TabPanel>
          <TabPanel p="0" maxH="calc(100vh - 200px)" overflow="auto">
            <CardEmRota />
          </TabPanel>
          <TabPanel p="0" maxH="calc(100vh - 200px)" overflow="auto">
            <CardEmRota />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default DetailsMapSecundary
