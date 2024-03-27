import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <Box mr={3} className="CartNav">
      <Link to="/cart">
        <RiShoppingCartLine />
      </Link>
    </Box>
  );
};

export default CartWidget;
