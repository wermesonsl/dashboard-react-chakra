import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box, Button, Image, Menu, MenuButton, MenuItem, MenuList, Tooltip
} from "@chakra-ui/react";
import React from 'react';

// import './table.css';

const ItemExpansivel = (props: any) => {

  const dado = props.value;
  const ativaMenu = props.ativaMenu;


  return (
    <div>
      {ativaMenu ?
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton minH="50px" fontSize="14px" borderWidth="0">
              <Box flex="1" textAlign="left" lineHeight="50px">
                <Image boxSize="16px" src={dado.icon} alt="ícone" display="inline-block" opacity="0.5" mr="10px" /> {dado.nome}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {dado.submenu.map((item: any, index: number) => {
                return (
                  <Box key={index} m="0.5rem" p="0.5rem 1.5rem" cursor="pointer" color="#818895" borderRadius="3" transition="all 0.3s"
                    _hover={{
                      background: "#edf6f5",
                      color: "#0d8a72",
                      transition: "all 0.3s"
                    }}
                  >{item.nome}</Box>
                )
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        :
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100%" minH="50px" borderRadius="0" bgColor="white">
            <Tooltip hasArrow label={dado.nome}>
              <Image boxSize="16px" src={dado.icon} alt="ícone" display="inline-block" opacity="0.5" />
            </Tooltip>
          </MenuButton>
          <MenuList ml="10px" mt="-10px">
            {dado.submenu.map((item: any, index: number) => {
              return (
                <MenuItem key={index}>{item.nome}</MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      }

    </div >
  )
}

export default ItemExpansivel
