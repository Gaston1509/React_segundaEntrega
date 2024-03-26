import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navContainer'>
      <Heading>
        <Link to='/'><img src="./src/assets/logo_1.png" alt="" className='logo'/></Link>
        </Heading>

      
    <Menu>
  <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}  className='Menu'>
    Variedades
  </MenuButton>
  <MenuList>
    <MenuItem><Link to={'/category/Rubias'}>Rubias</Link></MenuItem>
    <MenuItem><Link to={'/category/Rojas'}>Rojas</Link></MenuItem>
  </MenuList>
  </Menu>

    <CartWidget/>
</div>
  )
}

export default NavBar