import React, { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Box, Flex, Text, useConst } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";
import "./cartWidget.css";

const CartWidget = () => {

  const { getQuantity } = useContext(Context)

  return (
    <Flex mr={3} className="CartNav">
      <Link to="/cart">
        <RiShoppingCartLine />
      </Link><Text className="cantidad">{getQuantity()}</Text>
    </Flex>
  );
};

export default CartWidget;
