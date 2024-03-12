import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './App.css'


const App = () => {
  return (
    <ChakraProvider>
      <NavBar  />
      <ItemListContainer title='Cerveza Búho Artesanal'/>
    </ChakraProvider>
  )
}

export default App
