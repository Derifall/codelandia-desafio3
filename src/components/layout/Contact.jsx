import React from 'react'
import './Contact.css'

function Contact(props) {
  return (
    <div className="Contact">
      <h1>{props.Contact}</h1>
      <form className="Inputs" action="">
        <input type="text" required="true" placeholder="Nome" />
        <input type="email" required="true" placeholder="Email" />
        <input type="tel" placeholder="Telefone" />
        <textarea className="MessageText" required="true" placeholder="Mensagem..." />
        <input type="submit" value="Enviar mensagem" />
      </form>
    </div>
  )
}
export default Contact