import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
        .then((el) => setProduct(el))
        .catch((error) => console.log(error))
    }, [])

    console.log(product);

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer