

export default function MensajeBienvenida({isLoggedIn}){

    if(isLoggedIn == true){
        return <p>Bienvenido de nuevo.</p>
    }
    else{
        return <p>Por favor, inicia sesión.</p>
    }
}