import React from "react";
import Item from "../item/Item";

const ItemList = ({ inventario }) => {
  return (
    <div>
      {inventario.map((prod) => (
        <Item {...prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
