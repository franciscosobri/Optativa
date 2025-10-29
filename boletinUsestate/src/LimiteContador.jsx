import { use, useState } from "react";

export default function LimiteContador(){
    const [contador, setContador] = useState(0);

    function incrementar(){
        if(contador < 5){

            setContador(contador + 1);
        }
    }

    function reset(){
        setContador(0);
    }

    return(
        <div>
            <h3>Contador: {contador}</h3>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}