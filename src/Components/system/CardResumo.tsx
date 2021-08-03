import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from 'react';

const CardResumo = (props: any) => {

  return (
    <div>
      <Flex justifyContent="space-between" p="0.8em 1.5em" borderRadius="3" bg="white" boxShadow="0px 3px 6px -1px #e4e4e4">
        <Box>
          <Text fontWeight="bold">${props.value}K</Text>
          <Text fontSize="14px">{props.label}</Text>
        </Box>

        <Box>
          <Circle size="40px" bgColor="#edf6f5" color="#2a907c">
            <Image h={props.h} w={props.w} src={props.src} alt="ícone" />
          </Circle>
        </Box>
      </Flex>

    </div>
  )
}

export default CardResumo
