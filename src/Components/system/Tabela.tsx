import { ArrowDownIcon, ArrowUpIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  chakra,

  Grid,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React from 'react';
import './table.css';

const mockDados: any = [
  {
    "id": 1,
    "fleet": "#WO 0123456",
    "rate": 85,
    "revenue": 56780,
    "tendency": "up"
  },
  {
    "id": 2,
    "fleet": "#WO 736252",
    "rate": 75,
    "revenue": 48780,
    "tendency": "up"
  },
  {
    "id": 3,
    "fleet": "#WO 876394",
    "rate": 65,
    "revenue": 26500,
    "tendency": "warning"
  },
  {
    "id": 4,
    "fleet": "#WO 834564",
    "rate": 45,
    "revenue": 30700,
    "tendency": "warning"
  },
  {
    "id": 5,
    "fleet": "#WO 092639",
    "rate": 22,
    "revenue": 40000,
    "tendency": "down"
  },
];

const header: any = [
  { label: 'Fleet', field: 'fleet', sortable: true },
  { label: 'Performance Rate', field: 'rate', sortable: true },
  { label: 'Revenue', field: 'revenue', sortable: true },
]

const inputChangedHandler = (event: any) => {
  const updated = event.target.value;
}

function renderSwitch(coluna: any, linha: any) {
  switch (coluna.field) {
    case 'rate':
      if (linha.tendency === "up") {
        return (
          <Td key={linha.id + coluna.field}>
            <Grid templateColumns="1fr 56px" alignItems="center">
              <Progress size="sm" value={linha[coluna.field]} onChange={(event: any) => inputChangedHandler(event)} colorScheme="green" borderRadius="5px" />
              <Text ml="10px">{linha[coluna.field]}%</Text>
            </Grid>

          </Td>
        );
      } else if (linha.tendency === "down") {
        return (
          <Td key={linha.id + coluna.field}>
            <Grid templateColumns="1fr 56px" alignItems="center">
              <Progress size="sm" value={linha[coluna.field]} onChange={(event: any) => inputChangedHandler(event)} colorScheme="red" borderRadius="5px" />
              <Text ml="10px">{linha[coluna.field]}%</Text>
            </Grid>
          </Td>
        );
      } else {
        return (
          <Td key={linha.id + coluna.field}>
            <Grid templateColumns="1fr 56px" alignItems="center">
              <Progress size="sm" value={linha[coluna.field]} onChange={(event: any) => inputChangedHandler(event)} colorScheme="yellow" borderRadius="5px" />
              <Text ml="10px">{linha[coluna.field]}%</Text>
            </Grid>
          </Td>
        );
      }
    case 'revenue':
      if (linha.tendency === "up") {
        return (
          <Td key={linha.id + coluna.field}>
            $ {linha[coluna.field]} <ArrowUpIcon color="green" />
          </Td>
        );
      } else if (linha.tendency === "down") {
        return (
          <Td key={linha.id + coluna.field}>
            $ {linha[coluna.field]} <ArrowDownIcon color="red" />
          </Td>
        );
      } else {
        return (
          <Td key={linha.id + coluna.field}>
            $ {linha[coluna.field]} <ArrowDownIcon color="orange" />
          </Td>
        );
      }
    default:
      return (
        <Td key={linha.id + coluna.field}>
          {linha[coluna.field]}
        </Td>
      );
  }

}

const Tabela = () => {

  const [colunas, setColunas] = React.useState(header)
  const [linhas, setLinhas] = React.useState(mockDados)

  const filter: any = {};

  function ordenador(index: any) {
    // Cria uma cópia para fazer as alterações nela
    let copiaColunas: any = [...colunas]
    let copiaLinhas: any = [...linhas]

    // Retira a ordenação de outra coluna, caso ela esteja sendo ordenada
    copiaColunas.map((item: any, indexAux: number) => {
      if (indexAux !== index && item.isSorted) {
        item.isSorted = 0;
      }
    });

    // Adiciona variável isSorted, caso não exista
    if (!copiaColunas[index].isSorted) {
      copiaColunas[index].isSorted = 0;
    }

    switch (copiaColunas[index].isSorted) {
      // Está null
      case 0:
        copiaColunas[index].isSorted = 1;
        copiaLinhas.sort(function (a: any, b: any) {
          if (a[copiaColunas[index].field] < b[copiaColunas[index].field]) {
            return -1;
          } else {
            return true;
          }
        });
        filter.name = copiaColunas[index].accessor;
        filter.order = 'asc';
        break;
      // Está asc
      case 1:
        copiaColunas[index].isSorted = 2;
        copiaLinhas.sort(function (a: any, b: any) {
          if (a[copiaColunas[index].field] > b[copiaColunas[index].field]) {
            return -1;
          } else {
            return true;
          }
        });
        filter.name = copiaColunas[index].accessor;
        filter.order = 'desc';
        break;
      // Está desc
      case 2:
        copiaColunas[index].isSorted = 0;
        copiaLinhas = [...mockDados];
        delete filter.name;
        delete filter.order;
        break;
      default:
        copiaColunas[index].isSorted = 0;
        copiaLinhas = [...mockDados];
        delete filter.name;
        delete filter.order;
        break;
    }

    // Apĺica as mudanças no array para poder exibí-lo
    setColunas(copiaColunas);
    setLinhas(copiaLinhas);
  }

  return (
    <div>
      <Table bgColor="white" boxShadow="0 1px 4px rgba(0, 21, 41, 0.08)" borderRadius="5px">
        <Thead>
          <Tr>
            {colunas.map((column: any, index: number) => (
              <Th className="t-head" transition="all 0.3s" cursor="pointer" p="16px" fontSize="14px" lineHeight="1.5" color="#ABABAB" borderBottom="1px solid #e8e8e8" textTransform="none" pos="relative" key={column.field} onClick={() => ordenador(index)}
              >
                {column.label}
                <chakra.span pos="absolute" right="5" pl="4">
                  {column.isSorted ? (
                    (column.isSorted === 2) ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {linhas.map((row: any) => (
            <Tr key={row.id}>
              {colunas.map((cell: any) => (
                renderSwitch(cell, row)
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default Tabela
