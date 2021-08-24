import { Box, CloseButton, Flex, Image, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from 'react';
import CardEmRota from "../CardEmRota";

const DetailsMap = (props: any) => {

  return (
    <Box bgColor="white" w="350px" position="absolute" zIndex="3" boxShadow="#d8d8d8 8px 0px 8px -5px">
      <Flex justifyContent="space-between" h="50px" p="1rem" borderBottom="1px solid #e2e8f0">
        <Text fontWeight="bold">Veículos em rota</Text>
        <CloseButton size="sm" />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" h="50px" p="1rem" >
        <Input placeholder="Busque pelo nome" />
        <Image h="25px" w="25px" src="/icons/filter2-icon.png" alt="ìcone de filtro." ml="20px" cursor="pointer" />
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

export default DetailsMap
