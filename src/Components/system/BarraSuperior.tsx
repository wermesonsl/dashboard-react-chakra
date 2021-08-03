import { ArrowForwardIcon, BellIcon, CalendarIcon, CheckCircleIcon, ChevronDownIcon, HamburgerIcon, LockIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Avatar, Box, Button, Flex, Grid, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text
} from "@chakra-ui/react";
import React from 'react';
import LogoCSS from './LogoCSS';

// import './table.css';

const BarraSuperior = (props: any) => {

  const setAtivaMenu = props.setAtivaMenu;

  function changeMenu() {
    setAtivaMenu((prevState: any) => (
      !prevState
    ));
  }

  return (
    <div>
      <Flex justify="space-between" align="center"
        bgColor="#0d8a72" color="white" h="50px"
        fontSize="14px"
      >
        <Flex align="center" ml="5">
          <LogoCSS />
          <Flex h="50px" align="center" ml="3" pl="3" pr="3" borderLeft="1px solid #06776a" borderRight="1px solid #06776a">
            <HamburgerIcon cursor="pointer" onClick={() => changeMenu()} />
          </Flex>
        </Flex>
        <Grid alignItems="center" templateColumns="30px 30px 1fr" gap="3">
          <Popover>
            <PopoverTrigger>
              <Button size="sm" bgColor="#279680"
                _hover={{
                  background: "#2cba7c",
                }}
                _active={{
                  background: "#16dc85",
                }}
              >
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button size="sm" bgColor="#279680"
                _hover={{
                  background: "#2cba7c"
                }}
                _active={{
                  background: "#16dc85",
                }}
              >
                <BellIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>
          <Grid alignItems="center" templateColumns="30px 1fr 10px" gap="3" borderLeft="1px solid #06776a" mr="5" pl="5">
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Text fontWeight="thin">User name</Text>
              <Text fontWeight="semibold">name.something@gmail.com</Text>
            </Box>
            <Menu>
              <MenuButton p="0.8em">
                <ChevronDownIcon />
              </MenuButton>
              <MenuList color="black">
                <MenuItem icon={<SettingsIcon />}>
                  Perfil
                </MenuItem>
                <MenuItem icon={<CheckCircleIcon />}>
                  Minhas Tarefas
                </MenuItem>
                <MenuItem icon={<LockIcon />}>
                  Privacidade
                </MenuItem>
                <MenuItem icon={<ArrowForwardIcon />}>
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </Grid>
      </Flex>

    </div>
  )
}

export default BarraSuperior
