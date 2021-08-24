import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, Circle, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from 'react';

const CardEmRota = (props: any) => {
  const inputChangedHandler = (event: any) => {
    const updated = event.target.value;
  }

  const mockDados = [
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: true
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'danger',
      atencao: true
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'danger',
      atencao: true
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'warning',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'danger',
      atencao: true
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'danger',
      atencao: true
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'warning',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    },
    {
      nome: 'WO 123456',
      data_atualizacao: '14 May, 20',
      tempo_em_rota: '5h 48min',
      status: 'ok',
      atencao: false
    }
  ];

  function renderIconeCircular(status: any) {
    if (status === "ok") {
      return (
        <Circle size="50px" bgColor="#f5f5f7" border="1px solid #0b8b72">
          <Image h="20px" w="20px" src="/icons/truck2-icon.png" alt="ìcone de caminhão." opacity="0.5" />
        </Circle>
      );
    } else if (status === "danger") {
      return (
        <Circle size="50px" bgColor="#f5f5f7" border="1px solid #ffba4d">
          <Image h="20px" w="20px" src="/icons/truck2-icon.png" alt="ìcone de caminhão." opacity="0.5" />
        </Circle>
      );
    } else {
      return (
        <Circle size="50px" bgColor="#f5f5f7" border="1px solid #ef6151">
          <Image h="20px" w="20px" src="/icons/truck2-icon.png" alt="ìcone de caminhão." opacity="0.5" />
        </Circle>
      );
    }

  }

  return (
    <div>
      {mockDados.map((item: any, index: number) => {
        return (
          <Grid key={index} templateColumns="50px 1fr 30px" justifyContent="space-between" alignItems="center" p="1em 1.5em" borderBottom="1px solid #ececec">
            <Box>
              {renderIconeCircular(item.status)}
            </Box>
            <Box m="0px 10px">
              <Text fontWeight="bold">{item.nome}</Text>
              <Text fontSize="12px" color="#9e9e9e">{item.data_atualizacao} / {item.tempo_em_rota}</Text>
            </Box>

            <Flex direction="column" alignItems="flex-end" justifyContent="space-between">
              <WarningTwoIcon color="red.400" />
              <Button colorScheme="gray" size="xs" mt="3" p="3">
                Viajar <Image h="8px" w="8px" src="/icons/cursor-icon.png" alt="Ícone de seta." />
              </Button>
            </Flex>
          </Grid>
        )
      })}
    </div>
  )
}

export default CardEmRota
