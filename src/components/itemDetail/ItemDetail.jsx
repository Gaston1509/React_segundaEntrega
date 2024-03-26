import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, Avatar, IconButton, } from '@chakra-ui/react'

const ItemDetail = ({nombre, descripcion, precio, categoria, image}) => {

  return (
        <Card maxW='md'>
    <CardHeader>
        <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          
            <Box>
            <Heading size='sm'>{nombre}</Heading>
            <Text>Categoría: {categoria}</Text>
            </Box>
        </Flex>
        <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
        />
        </Flex>
    </CardHeader>
    <CardBody>
        <Text>
            {descripcion}
        </Text>
    </CardBody>
    <Image
        objectFit='cover'
        src= {image}
        alt='Chakra UI'
    />

    <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
        '& > button': {
            minW: '136px',
      },
    }}
  >
  </CardFooter>
</Card>

  )
}

export default ItemDetail
