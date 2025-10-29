import { useState } from "react";

export function CambiadorTexto(){

    const [texto, setTexto] = useState('Texto Original');

    function changeText(){
        setTexto('Texto Modificado');
    }

    function resetText(){
        setTexto('Texto Original');
    }

    return (

        <div>
            <h2>{texto}</h2>
            <button onClick={changeText}>Cambiar Texto</button>
            <button onClick={resetText}>Restaurar Texto</button>
        </div>
    )
}