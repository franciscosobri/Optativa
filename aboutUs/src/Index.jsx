import Profile from "./Profile"

export default function Index(){


    return (
        <>
        <h1>About Us</h1>

        <div>
            <Profile
                url = "src/img/sierra.jpg"
                name = "John Doe"
                email = "johndoe@example.com"
                bio = "Software developer with a passion for building web applications using JavaScript and React."
            />
            <Profile
                url = "src/img/sierra.jpg"
                name = "Pepe Doe"
                email = "pepedoe@example.com"
                bio = "Software developer with a passion for building web applications using JavaScript and React."
            />
            <Profile
                url = "src/img/sierra.jpg"
                name = "Paco Doe"
                email = "Pacodoe@example.com"
                bio = "Software developer with a passion for building web applications using JavaScript and React."
            />



        </div>
    </>
    )
    
}