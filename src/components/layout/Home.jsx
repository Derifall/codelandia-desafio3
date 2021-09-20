import React from 'react'
import './Home.css'
import Picture from '../img/image.svg'

function Home(props) {
  return (
    <div className="Home">
      <div className="TextContent">
        <h1 className="Titulo">{props.Titulo}</h1>
        <p className="Texto">{props.Texto}</p>
        <form className="Button" action="">
          <input type="button" value="Botão" />
        </form>
      </div>
      <div className="Imagem">
        <img src={Picture} alt="" /> 
      </div>
    </div>
  )
}
export default Home