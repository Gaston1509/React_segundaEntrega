import React from "react";
import useCounter from "../../hooks/useCounter";
import { Button } from "@chakra-ui/react";
import "./itemCount.css";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(stock, initialValue);

  return (
    <div className="contadores">
      <button className="decrementar" onClick={decrementar}>
        -
      </button>
      <h2 className="count">{count}</h2>
      <button className="incrementar" onClick={incrementar}>
        +
      </button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;
