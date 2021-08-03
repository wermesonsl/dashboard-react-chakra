import { Circle, Flex, Text } from "@chakra-ui/react";
import React from 'react';

// import './table.css';

const LogoCSS = () => {
  return (
    <div>
      <Flex align="center">
        <Circle
          position="relative"
          size="27px"
          bg="white"
          mr="3"
          mt="-2px"
          _before={{
            content: `""`,
            position: 'absolute',
            display: 'block',
            w: '19px',
            h: '19px',
            bg: 'white',
            border: '4px solid #0d8a72',
            borderRadius: '50%'
          }}
          _after={{
            content: `""`,
            position: 'absolute',
            bottom: '-8px',
            display: 'block',
            w: '3px',
            h: '3px',
            border: '5px solid transparent',
            borderTopColor: 'white'
          }} />
        <Text fontWeight="800">Fleet Management</Text>
      </Flex>

    </div>
  )
}

export default LogoCSS
