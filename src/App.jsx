import { ChakraProvider, FormErrorMessage } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './App.css'


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar  /> 
        <Routes>
            <Route path='/' element={<ItemListContainer title='Cerveza Búho Artesanal'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer title='Cerveza Búho Artesanal'/>} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  )
}

export default App
