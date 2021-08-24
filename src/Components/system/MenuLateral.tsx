import { Flex } from "@chakra-ui/react";
import React from 'react';
import ItemExpansivel from "./ItemExpansivel";


const MenuLateral = (props: any) => {

  const inputChangedHandler = (event: any) => {
    const updated = event.target.value;
  }

  const [menu] = React.useState([
    {
      id: 1,
      nome: 'Dashboard',
      icon: '/icons/dashboard-icon.png',
      submenu: [
        {
          nome: 'Link AAAA',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    },
    {
      id: 2,
      nome: 'Relatórios',
      icon: '/icons/graph-circle-icon.png',
      submenu: [
        {
          nome: 'Link A',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    },
    {
      id: 3,
      nome: 'Relatórios',
      icon: '/icons/truck-icon.png',
      submenu: [
        {
          nome: 'Link A',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    },
    {
      id: 4,
      nome: 'Relatórios',
      icon: '/icons/map-icon.png',
      submenu: [
        {
          nome: 'Link A',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    },
    {
      id: 5,
      nome: 'Relatórios',
      icon: '/icons/box-icon.png',
      submenu: [
        {
          nome: 'Link A',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    },
    {
      id: 6,
      nome: 'Relatórios',
      icon: '/icons/set-icon.png',
      submenu: [
        {
          nome: 'Link A',
          acao: ''
        },
        {
          nome: 'Link B',
          acao: ''
        },
        {
          nome: 'Link C',
          acao: ''
        }
      ]
    }
  ]);

  return (
    <div style={{ boxShadow: "#d8d8d8 8px 0px 8px -5px", zIndex: 10 }}>
      <Flex justify="space-between" direction="column" fontSize="14px">
        {menu.map((item: any, index: number) => {
          return <ItemExpansivel value={item} key={index} onChange={(event: any) => inputChangedHandler(event)} ativaMenu={props.ativaMenu} />
        })}
      </Flex>

    </div>
  )
}

export default MenuLateral
