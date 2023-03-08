import React from "react"
import './Card.css'

export default props => {
    const titulo = props.titulo;
    const content = props.content;
    const estilo  = {
        backgroundColor : props.color || '#666'
    }
    return(
        <div className="Card" style={estilo}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {props.children}
            </div>  
        </div>
    )
}