import { Box, ChakraProvider, Grid } from "@chakra-ui/react";
import * as React from "react";
import Filtro from "./Components/system/BarraFiltro";
import BarraSuperior from "./Components/system/BarraSuperior";
import Graficos from "./Components/system/Graficos";
import MenuLateral from "./Components/system/MenuLateral";
import Resumo from "./Components/system/Resumo";

export const App = () => {

  const [widgets, setWidgets] = React.useState({
    resumo: true,
    revenue: true,
    expenses: true,
    fleets: true,
    emission: true
  });

  const [ativaMenu, setAtivaMenu] = React.useState(true);


  return (
    <ChakraProvider>
      <BarraSuperior ativaMenu={ativaMenu} setAtivaMenu={setAtivaMenu} />
      <Grid templateColumns={ativaMenu ? "200px 1fr" : "100px 1fr"}>
        <MenuLateral ativaMenu={ativaMenu} />
        <Grid minH="calc(100vh - 50px)" alignContent="flex-start" bgColor="#f2f4f5">
          <Filtro setWidgets={setWidgets} />
          <Box p="3">
            {widgets.resumo ? <Resumo /> : null}
            <Graficos widgets={widgets} />

          </Box>
        </Grid>
      </Grid>
    </ChakraProvider>
  )
}
