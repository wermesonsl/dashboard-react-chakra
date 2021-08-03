import { Box, Button, Flex, Grid, Image, Text, Tooltip } from "@chakra-ui/react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import Tabela from "./Tabela";


const optionsRevenue = {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    title: {
      text: null
    },
    lineWidth: 0,
    labels: {
      style: {
        color: '#718096'
      }
    },
  },
  tooltip: {
    valueSuffix: ' ($)'
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
    labels: {
      overflow: 'justify',
      style: {
        color: '#718096'
      }
    },
    gridLineDashStyle: 'longdash',
    gridLineColor: '#E2E8F0',
    lineColor: '#E2E8F0',
    lineWidth: 1
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  series: [{
    name: 'Average Income',
    data: [51000, 60000, 90000, 69000, 65000, 120000, 61000, 99000, 80000, 60000, 63000, 62000],
    lineColor: '#bfbfbf',
    lineWidth: 3,
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, '#d2d2d2'],
        [1, 'rgba(255,255,255, 0.5)']
      ]
    }
  }, {
    name: 'Average Avenue',
    data: [60000, 95000, 40000, 90000, 92000, 80000, 56000, 99000, 125000, 20000, 60000, 81000],
    lineColor: '#0d8a72',
    lineWidth: 3,
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, '#2cbb78'],
        [1, 'rgba(255,255,255, 0.5)']
      ]
    }
  }]
}
const optionsExpenses = {
  chart: {
    type: 'pie'
  },
  title: {
    text: null
  },
  credits: {
    enabled: false
  },
  tooltip: {
    valueSuffix: ' ($)'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '$ {point.y:.2f}'
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Expenses',
    data: [{
      name: 'Maintenance',
      y: 32000,
      color: '#0f8972'
    }, {
      name: 'Labour Cost',
      y: 25000,
      color: '#2cba7c'
    }, {
      name: 'Fuel',
      y: 15000,
      color: '#aad876'
    }, {
      name: 'Other',
      y: 3000,
      color: '#ffd85a'
    }]
  }]
}
const optionsEmissionCo2 = {
  chart: {
    type: 'bar'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov'],
    title: {
      text: null
    },
    lineWidth: 0,
    labels: {
      style: {
        color: '#718096'
      }
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
    labels: {
      overflow: 'justify',
      style: {
        color: '#718096'
      }
    },
    gridLineDashStyle: 'longdash',
    gridLineColor: '#E2E8F0',
    lineColor: '#E2E8F0',
    lineWidth: 1
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      color: '#2cbb78'
    }
  },
  series: [{
    name: 'População',
    data: [5200, 8200, 7700, 5500, 7700, 6600, 9200, 7000]
  }]
}

const Graficos = (props: any) => {
  const widgets = props.widgets;

  const [grid, setGrid] = useState('2fr 1fr');


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    let contador = 0;
    if (widgets.revenue) {
      ++contador;
    }
    if (widgets.expenses) {
      ++contador;
    }
    if (widgets.fleets) {
      ++contador;
    }
    if (widgets.emission) {
      ++contador;
    }

    if (contador === 1) {
      setGrid('1fr');
    } else {
      setGrid('2fr 1fr');
    }
  }, [widgets]);

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

  return (
    <div>
      <Grid templateColumns={grid} w="100%" gap="1rem" mb="3">
        {widgets.revenue ?
          <Box borderRadius="3" bg="white" boxShadow="0px 3px 6px -1px #e4e4e4">
            <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #edf0ef" p="0.8em 1.5em" mb="0.5em">
              <Text fontWeight="bold">Revenue</Text>
              <Flex textTransform="uppercase" color="#808792">
                <Button fontSize="12px" size="xs" borderRightRadius="0" variant="outline">Day</Button>
                <Button fontSize="12px" size="xs" borderRadius="0" variant="outline">Month</Button>
                <Button fontSize="12px" size="xs" borderLeftRadius="0" variant="outline">Year</Button>
              </Flex>
            </Flex>

            <Box w="100%" p="0.8em 1.5em" mb="1rem">
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsRevenue}
              />
            </Box>
          </Box>
          :
          null}

        {widgets.expenses ?
          <Box borderRadius="3" bg="white" boxShadow="0px 3px 6px -1px #e4e4e4">
            <Flex justifyContent="space-between" borderBottom="1px solid #edf0ef" p="0.8em 1.5em" mb="0.5em">
              <Text fontWeight="bold">Expenses</Text>

              <Flex>
                <CSVLink data={csvData}>
                  <Tooltip hasArrow label="Baixar CSV">
                    <Button size="xs" variant="ghost">
                      <Image boxSize="16px" src="/icons/download-icon.png" alt="ícone" opacity="0.5" />
                    </Button>
                  </Tooltip>
                </CSVLink>

              </Flex>
            </Flex>

            <Box w="100%" p="0.8em 1.5em" mb="1rem">
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsExpenses}
              />
            </Box>
          </Box>
          :
          null}


        {widgets.fleets ?
          <Box borderRadius="3" bg="white" boxShadow="0px 3px 6px -1px #e4e4e4">
            <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #edf0ef" p="0.8em 1.5em" mb="0.5em">
              <Text fontWeight="bold">Fleets Performance</Text>
              <Flex>
                <Button size="xs" variant="ghost">
                  <Image boxSize="16px" src="/icons/sort-icon.png" alt="ícone" opacity="0.5" />
                </Button>
                <Button size="xs" variant="ghost" ml="10px">
                  <Image boxSize="16px" src="/icons/filter-icon.png" alt="ícone" opacity="0.5" />
                </Button>
              </Flex>
            </Flex>

            <Box w="100%" p="0.8em 1.5em" mb="1rem">
              <Tabela />
            </Box>
          </Box>
          :
          null}

        {widgets.emission ?
          <Box borderRadius="3" bg="white" boxShadow="0px 3px 6px -1px #e4e4e4">
            <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #edf0ef" p="0.8em 1.5em" mb="0.5em">
              <Text fontWeight="bold">Co2 Emission</Text>
              <Flex textTransform="uppercase" color="#808792">
                <Button fontSize="12px" size="xs" borderRightRadius="0" variant="outline">Day</Button>
                <Button fontSize="12px" size="xs" borderRadius="0" variant="outline">Month</Button>
                <Button fontSize="12px" size="xs" borderLeftRadius="0" variant="outline">Year</Button>
              </Flex>
            </Flex>

            <Box w="100%" p="0.8em 1.5em" mb="1rem">
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsEmissionCo2}
              />
            </Box>
          </Box>
          :
          null}
      </Grid>
    </div>
  )
}

export default Graficos
