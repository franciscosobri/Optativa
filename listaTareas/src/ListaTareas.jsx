import { useState } from "react";


export default function ListaTareas(){

    const [inputValue, setInputValue] = useState("");

    function handleChange(event){
        setInputValue(event.target.value);
    }

    return (

        <div>
            <div>

            <form action="">
                <input type="text" placeholder="Añadir Ciudad" value={inputValue} onChange={handleChange}/>
                <button>Añadir</button>
            </form>
            </div>

            <div>
                <ul>
                    <li>{inputValue}</li>
                </ul>
            </div>
        </div>


    )
}