import { useState } from 'react'
import { Header } from './components/header'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Pricing } from './components/Pricing'
import {Features} from './components/Features'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Pricing/>
      <Features/>
         </div>
         
  )
}

export default App;
