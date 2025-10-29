import { useState } from "react";

export default function Contador(){

    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador + 1);
    }

    function decrementar(){
        setContador(contador - 1);
    }

    return(
        <div>
            <h3>Contador: {contador}</h3>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={incrementar}>Incrementar</button>
            
        </div>
    )

}