import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Flex, Grid, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import CardInfo from "../CardInfo";

const Map = (props: any) => {

  const [mockDados, setMockDados] = useState([
    {
      id: 1,
      status: 'ok',
      quantidade: 25,
      subtitulo: 'Veículos em Rota',
      aberto: false,
      visivel: true
    },
    {
      id: 2,
      status: 'danger',
      quantidade: 25,
      subtitulo: 'Veículos com Erros',
      aberto: false,
      visivel: true
    },
    {
      id: 3,
      status: 'warning',
      quantidade: 25,
      subtitulo: 'Veículos com Avisos',
      aberto: false,
      visivel: true
    },
    {
      id: 4,
      status: 'warning',
      quantidade: 25,
      subtitulo: 'Desengate Lateral',
      aberto: false,
      visivel: true
    },
    {
      id: 5,
      status: 'warning',
      quantidade: 25,
      subtitulo: 'Atrasando',
      aberto: false,
      visivel: true
    }
  ]);

  let [quantidadeCards, setQuantidadeCards] = useState(0);

  function changeWidget(event: any) {
    mockDados.map((item: any) => {
      if (item.id == event.target.defaultValue) {
        item.visivel = !item.visivel;
      }
    });


    // setQuantidadeCards((prevState: any) => (
    //   // ++prevState
    //   mockDados.length
    // ));

    // setMockDados(mockDados);
    // setMockDados((prevState: any) => (
    //   prevState.map((item: any) => {
    //     if (item.id == event.target.defaultValue) {
    //       item.visivel = !item.visivel;
    //     }
    //     return item;
    //   })
    // ));

    setMockDados((prevState: any) => (
      prevState = mockDados
    ));



    console.log('mockdados chabge :>> ', mockDados)
  }

  const inputChangedHandler = (event: any) => {
    const updated = event.target.value;
  }

  function contadorCards() {
    console.log('mockDados contadorrr :>> ', mockDados);
    mockDados.map((item: any) => {
      if (item.visivel) {
        ++quantidadeCards;
      }
    })
    console.log('quantidadeCards :>> ', quantidadeCards);
  }

  useEffect(() => {
    console.log('use effet', quantidadeCards);
  }, [quantidadeCards]);

  return (
    <div>
      <Box w="100%" position="relative">
        {/* {<DetailsMap />}
        {<DetailsMapSecundary />} */}
        <Grid templateColumns="1fr 30px" gap="1em" justifyContent="space-between" position="absolute" w="100%" p="1em">
          {contadorCards()}
          <Grid templateColumns={"repeat(" + quantidadeCards + ", 1fr)"} gap="1em">
            {
              mockDados.map((item: any, index: number) => {
                if (item.visivel) {
                  return (
                    <CardInfo key={index} status={item.status} quantidade={item.quantidade} subtitulo={item.subtitulo} />
                  );
                }

              })
            }
          </Grid>

          <Flex bgColor="white" borderRadius="5px" boxShadow="#d8d8d8 0px 0px 20px 3px" p="10px" w="100%" alignItems="center" justifyContent="center" cursor="pointer">

            <Popover>
              <PopoverTrigger>
                <SettingsIcon color="#0d8a72" />
              </PopoverTrigger>
              <PopoverContent color="black">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Stack spacing={1}>
                    <Checkbox colorScheme="green" value="1" defaultIsChecked onChange={(e) => changeWidget(e)}>Veículos em Rota</Checkbox>
                    <Checkbox colorScheme="green" value="2" defaultIsChecked onChange={(e) => changeWidget(e)}>Veículos com Erros</Checkbox>
                    <Checkbox colorScheme="green" value="3" defaultIsChecked onChange={(e) => changeWidget(e)}>Veículos com Avisos</Checkbox>
                    <Checkbox colorScheme="green" value="4" defaultIsChecked onChange={(e) => changeWidget(e)}>Desengate Lateral</Checkbox>
                    <Checkbox colorScheme="green" value="5" defaultIsChecked onChange={(e) => changeWidget(e)}>Atrasando</Checkbox>
                  </Stack>

                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Grid>

        <Box w="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3958.1898925148244!2d-39.32551682503754!3d-7.21916866238952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1628077032463!5m2!1spt-BR!2sbr"
            width="100%"
            height="900"
            style={{ border: 0 }}
            loading="lazy"></iframe>
        </Box>
      </Box>
    </div>
  )
}

export default Map
