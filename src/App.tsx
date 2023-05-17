import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/estaticos/navbar/Navbar'
import Futter from './componentes/estaticos/futter/Futter'
import Home from './paginas/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home />
    <Futter/>
      </>
  )
}

export default App
