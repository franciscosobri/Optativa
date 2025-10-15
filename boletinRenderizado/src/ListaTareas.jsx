export default function ListaTareas({nombre, isDone}){

    return(

        <div>

            {isDone ? null : nombre}
    
        </div>
    );
}