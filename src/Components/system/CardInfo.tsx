import { InfoIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import React from 'react';

const CardInfo = (props: any) => {

  function renderIcone(status: any) {
    if (status === "ok") {
      return (
        <InfoIcon color="#0b8b72" />
      );
    } else if (status === "danger") {
      return (

        <WarningTwoIcon color="#ef6151" />
      );
    } else {
      return (
        <WarningIcon color="#ffba4d" />
      );
    }

  }

  return (
    <Flex bgColor="white" borderRadius="5px" boxShadow="#d8d8d8 0px 0px 15px 1px" p="5px 10px" textAlign="center" justifyContent="space-between" cursor="pointer">
      <Box>
        {renderIcone(props.status)}
      </Box>
      <Box p="10px">
        <Text fontWeight="bold" fontSize="20px">{props.quantidade}</Text>
        <Text fontSize="12px">{props.subtitulo}</Text>
      </Box>
      <Box>
        <CloseButton size="sm" />
      </Box>
    </Flex>


  )
}

export default CardInfo
