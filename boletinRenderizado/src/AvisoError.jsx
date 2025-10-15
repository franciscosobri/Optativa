
export default function AvisoError({hasError}){

    return(
        <div>

            {hasError && 'Ha ocurrido un error'}
        </div>

    );
}