import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Contador'
import { CambiadorTexto } from './CambiadorTexto'
import { MostrarOcultar } from './MostrarOcultar'
import ContadorClics from './ContadorClics'
import LimiteContador from './LimiteContador.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contador></Contador>
    <CambiadorTexto></CambiadorTexto>
    <MostrarOcultar></MostrarOcultar>
    <ContadorClics></ContadorClics>
    <LimiteContador></LimiteContador>
    </>
  )
}

export default App
