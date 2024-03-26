import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import './cartWidget.css'
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  return (
    <Box mr={3} className='CartNav'>
      <Link to='/cart' ><RiShoppingCartLine /></Link>
    </Box>
  )
}

export default CartWidget