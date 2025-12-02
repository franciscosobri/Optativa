import { useEffect, useState } from "react"
import { getCreatures } from "../services/creatureServices";

export default function Creatures(){

    const [creatures, setCreatures] = useState([]);

    useEffect(() => {
        getCreatures()
            .then(data => {
                setCreatures(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h1>Guardianes del Santuario</h1>

            {creatures.map(creature => (
                <div key={creature.id}>
                        <h2>{creature.name}</h2>
                        <p>Especie: {creature.species}</p>
                        <p>Felicidad: {creature.happiness}</p>
                        <button style={{margin: '10px'}}>Alimentar</button>
                        <button>Eliminar</button>
                        <br />
                </div>
            ))}
        </div>
    )

}