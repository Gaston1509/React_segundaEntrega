import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect(() =>{
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
      dataProducts
      .then((data)=> setProductos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }, [categoryId]);

    console.log(productos);

  return (
    <div> 
      {
        loading ? 
    <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
    /> :
    <>
    <Heading className='titulo'>{title}</Heading>
    <ItemList productos={productos} />
    </>
   }
    </div> 
  )
}

export default ItemListContainer