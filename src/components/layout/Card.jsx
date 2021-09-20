import React from 'react'
import './Card.css'

function Card(props) {
  return (
      <div className="Card">
        <div className="CardThumb" style={{ backgroundColor : props.CardThumb }}></div>
        <div className="Description">
          <h1 className="TituloCard">{props.TituloCard}</h1>
          <p className="TextoCard">{props.TextoCard}</p>
        </div>
    </div>
  )
}
export default Card