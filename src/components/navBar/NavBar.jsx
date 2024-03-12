import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'


const NavBar = () => {
  return (
    <div className='navContainer'>
       <img src="./src/assets/logo_1.png" alt="" className='logo'/>
    <div>

    </div>

    <Menu>
  <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
    Variedades
  </MenuButton>
  <MenuList>
    <MenuItem>Kolsh</MenuItem>
    <MenuItem>Golden</MenuItem>
    <MenuItem>Irish Red</MenuItem>
    <MenuItem>Ipa</MenuItem>
  </MenuList>
</Menu>

    <CartWidget/>
</div>
  )
}

export default NavBar