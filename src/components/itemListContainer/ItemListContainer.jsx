import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])

  useEffect(() =>{
    getProducts()
    .then((data)=> setProductos(data))
    .catch((error) => console.log(error))
    }, []);
    console.log(productos);

  return (
    <div> 
    <Heading className='titulo'>{title}</Heading>
    <ItemList productos={productos} />
    </div> 
  )
}

export default ItemListContainer