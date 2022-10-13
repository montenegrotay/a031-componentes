import React from "react"
import InfosUsuario from "./InfosUsuario"

export default function CardVideo (props) {
    
    
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8" alt="" />
            <h4>{props.titulo}</h4>
            <InfosUsuario usuario={props.usuario}/>  
        </div>
    )
}