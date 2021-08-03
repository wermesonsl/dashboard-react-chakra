import { Box, Button, Checkbox, Flex, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from 'react';
import DatePickerBrisa from "./DatePicker";


const Filtro = (props: any) => {

  const setWidgets = props.setWidgets;

  const [botaoExpandir, setbotaoExpandir] = useState(true);


  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      // botaoExpandir = !botaoExpandir;
      setbotaoExpandir(!botaoExpandir);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setbotaoExpandir(!botaoExpandir);
      }
    }
  }

  function changeWidget(event: any) {
    setWidgets((prevState: any) => ({
      ...prevState, [event.target.defaultValue]: event.target.checked
    }));

  }

  return (
    <div>
      <Flex justify="space-between" align="center"
        bgColor="#ffffff" boxShadow="0px 3px 6px -1px #e4e4e4" h="50px" fontSize="14px"
      >
        <Flex align="center" ml="5">
          <Text fontWeight="600" fontSize="20px" borderRight="1px solid #edf0ef" h="50px" lineHeight="50px" pr="20px">
            Finance
          </Text>
          <Select placeholder="Filtre por tempo" fontSize="14px" ml="20px" mr="10px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <DatePickerBrisa />
        </Flex>
        <Flex alignItems="center" mr="3" color="#34373d">
          <Popover>
            <PopoverTrigger>
              <Button size="sm">
                <Image boxSize="16px" display="inline-block" src="/icons/dashboard-icon.png" alt="ícone" mr="5px" /> WIDGETS
              </Button>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Stack spacing={1}>
                  <Checkbox colorScheme="green" value="resumo" defaultIsChecked onChange={(e) => changeWidget(e)}>Resumo</Checkbox>
                  <Checkbox colorScheme="green" value="revenue" defaultIsChecked onChange={(e) => changeWidget(e)}>Gráfico Revenue</Checkbox>
                  <Checkbox colorScheme="green" value="expenses" defaultIsChecked onChange={(e) => changeWidget(e)}>Gráfico</Checkbox>
                  <Checkbox colorScheme="green" value="fleets" defaultIsChecked onChange={(e) => changeWidget(e)}>Tabela</Checkbox>
                  <Checkbox colorScheme="green" value="emission" defaultIsChecked onChange={(e) => changeWidget(e)}>Gráfico</Checkbox>
                </Stack>

              </PopoverBody>
            </PopoverContent>
          </Popover>
          {
            botaoExpandir ?
              <Box p="0.5em 1em" w="fit-content" bg="#edeff3" borderRadius="3" cursor="pointer" ml="3" onClick={toggleFullScreen}>
                <Text><Image boxSize="16px" src="/icons/expand-icon.png" alt="ícone" /></Text>
              </Box>
              :
              <Box p="0.5em 1em" w="fit-content" bg="#edeff3" borderRadius="3" cursor="pointer" ml="3" onClick={toggleFullScreen}>
                <Text><Image boxSize="16px" src="/icons/minimize-icon.png" alt="ícone" /></Text>
              </Box>
          }
        </Flex>
      </Flex>

    </div>
  )
}

export default Filtro
