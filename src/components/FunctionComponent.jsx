import React from 'react'
import "../styles/Component.css"
 
const FunctionComponent = (props) => {
    return (
        <li>{props.nome} trará {props.tarefa}</li>
    )
 }
 
export default FunctionComponent