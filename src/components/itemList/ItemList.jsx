import React from "react";
import Item from "../item/Item";
// import { inventario } from "../../data/asyncMock";

const ItemList = ({ inventario }) => {
  // console.log(productos);
  return (
    <div>
      {inventario.map((prod) => (
        <Item {...prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
