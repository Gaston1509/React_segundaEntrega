import { ChakraProvider, FormErrorMessage } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar  /> 
        <Routes>
            <Route path='/' element={<ItemListContainer title='Cerveza Búho Artesanal'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer title='Cerveza Búho Artesanal'/>} />
            <Route path='/product/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  )
}

export default App
