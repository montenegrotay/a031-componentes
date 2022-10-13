import React from "react"
import img from "/Users/montenegro.taynaragmail.com/Desktop/labenu/frontend/componentes/a031-componentes/src/usuario-100x100.png"


export default function InfosUsuario (props) {
  
  return (
    <div className="usuario">
      <img src="src/usuario-100x100.png" alt="" />
      <span>{props.usuario}</span>
    </div>
  )
}



