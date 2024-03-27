import React from "react";
import Item from "../item/Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div>
      {productos.map((prod) => (
        <Item {...prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
