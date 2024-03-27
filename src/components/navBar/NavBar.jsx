import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <Heading>
        <Link to="/">
          <img src="./src/assets/logo_1.png" alt="" className="logo" />
        </Link>
      </Heading>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<TiArrowSortedDown />}
          className="Menu"
        >
          Variedades
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"/category/Rubias"}>Cervezas Rubias</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/category/Rojas"}>Cervezas Rojas</Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <CartWidget />
    </div>
  );
};

export default NavBar;
