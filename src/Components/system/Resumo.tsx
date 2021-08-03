import { Grid } from "@chakra-ui/react";
import React from 'react';
import CardResumo from "./CardResumo";

// import './table.css';

const Resumo = () => {
  const inputChangedHandler = (event: any) => {
    const updated = event.target.value;
  }


  function renderCardResumo(dados: any) {
    return (
      <CardResumo value={dados.value} onChange={(event: any) => inputChangedHandler(event)} label={dados.label} src={'/icons/' + dados.icone + '.png'} h={dados.h + 'px'} w={dados.w + 'px'} />
    );
  }

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap="1rem" mb="3">
        {renderCardResumo({ value: 124, label: 'Total Expenses', icone: 'money-icon-g', h: 16, w: 9.19 })}
        {renderCardResumo({ value: 134, label: 'Profit', icone: 'arow-graph-icon-g', h: 10.13, w: 16 })}
        {renderCardResumo({ value: 100, label: 'Revenue', icone: 'suitcase-icon-g', h: 16, w: 16 })}
        {renderCardResumo({ value: 300, label: 'Labour Hours', icone: 'clock-icon-g', h: 16, w: 16 })}
      </Grid>

    </div>
  )
}

export default Resumo
