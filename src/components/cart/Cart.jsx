import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
  } from '@chakra-ui/react'
  import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, getTotal, clearCart, removeItem } = useContext(CartContext)

    console.log('cart', cart);

    if(cart.length === 0){
        return(
            <>
            <Heading>No has agredado ninguna cerveza</Heading>
            <Link to={'/'}>Ver productos</Link>
            </>
        )
    }else{

    

  return (
    <div>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Variedad</Th>
        <Th>Cantidad por Unidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>

        {
            cart.map((producto) => (

      <Tr key={producto.id}>
            <Td>{producto.nombre}</Td>
            <Td>U-{producto.quantity}</Td>
            <Td>$ {producto.precio}</Td>
            <Td>$ {producto.precio * producto.quantity}</Td>
            <Td><Button onClick={() => removeItem(producto.id)}><RiDeleteBin6Line /></Button></Td>
      </Tr>
        ))
        }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th>Total de la compra: $ {getTotal()}</Th>
        <Th><Button onClick={clearCart}>Vaciar Carrito</Button></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
        
    </div>
  )
}
}
export default Cart