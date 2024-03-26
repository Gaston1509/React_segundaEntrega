import React from 'react'
import useCounter from '../../hooks/useCounter'
import './itemCount.css'

const ItemCount = (stock, initialValue ) => {
    const { count, incrementar, decrementar} = useCounter(stock, initialValue)
    console.log(count);

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <h2>{count}</h2>
        <button onClick={incrementar}>+</button>

    </div>
  )
}

export default ItemCount