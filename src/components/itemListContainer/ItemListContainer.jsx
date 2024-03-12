import { Heading } from '@chakra-ui/react'
import React from 'react'
import './itemListContainer.css'

const ItemListContainer = ({title}) => {
  return (
    <Heading className='titulo'>{title}</Heading>
  )
}

export default ItemListContainer