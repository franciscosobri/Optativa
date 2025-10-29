import { use, useState } from "react";

export function MostrarOcultar(){
    const [mostrar, setMostrar] = useState(false);

    function alternarMostrar(){
        setMostrar(!mostrar);
    }

    return(
        <div>
            <p>{mostrar ? 'Información secreta' : ''}</p>
            <button onClick={alternarMostrar}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    )


}