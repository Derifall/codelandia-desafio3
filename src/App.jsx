import React from 'react'
import './App.css'

import Home from './components/layout/Home.jsx'
import Card from './components/layout/Card.jsx'
import Contact from './components/layout/Contact.jsx'

function App() {
  return (
    <>
      <Home Titulo="Lorem ipsum dolor sit amet" Texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident tempore earum aliquid voluptatem quae rem molestiae recusandae."/>
      <div className="Cards">
        <Card CardThumb="springgreen" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="darkgrey" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="blue" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="red" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="darkkhaki" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="purple" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="darkorange" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
        <Card CardThumb="deepskyblue" TituloCard="Título do card" TextoCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis hic ut quidem."/>
      </div>
      <Contact Contact="Entre em contato"/>
    </>
  )
}
export default App