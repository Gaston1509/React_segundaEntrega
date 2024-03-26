import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() =>{
    if(categoryId){
      getProductsByCategory(categoryId)
      .then((data)=> setProductos(data))
      .catch((error) => console.log(error))
    }else{

      getProducts()
      .then((data)=> setProductos(data))
      .catch((error) => console.log(error))
      }
    }, [categoryId]);

    console.log(productos);

  return (
    <div> 
    <Heading className='titulo'>{title}</Heading>
    <ItemList productos={productos} />
    </div> 
  )
}

export default ItemListContainer