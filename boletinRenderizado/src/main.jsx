import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MensajeBienvenida from './MensajeBienvenida'
import EstadoCuenta from './EstadoCuenta'
import AvisoError from './AvisoError'
import Notificacion from './Notificacion'
import ListaTareas from './ListaTareas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MensajeBienvenida isLoggedIn={true}/>
    <MensajeBienvenida isLoggedIn={false}/>
    <EstadoCuenta isPositive={true}/>
    <EstadoCuenta isPositive={false}/>
    <AvisoError hasError={true} />
    <AvisoError hasError={false} />
    <Notificacion isCompleted={true} />
    <Notificacion isCompleted={false} />
    <ListaTareas nombre="Aprender React" isDone={true}/>
    <ListaTareas nombre="Hacer ejercicios de JavaScript" isDone={false} />
    <ListaTareas nombre="Practicar CSS" isDone={false} />
  </StrictMode>,
)
