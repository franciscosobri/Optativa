import Profile from "./Profile"

export default function Index() {

    const profilesData = [
        {
            url: "public/img/sierra.jpg",
            name: "John Doe",
            email: "johndoe@example.com",
            bio: "Software developer with a passion for building web applications using JavaScript and React.",
            skills: ["Node.js", "JavaScript"],
            isPremium: true
        },
        {
            url: "public/img/sierra.jpg",
            name: "Pepe Doe",
            email: "pepedoe@example.com",
            bio: "Software developer with a passion for building web applications using JavaScript and React."
        },
        {
            url: "",
            name: "Paco Doe",
            email: "pacodoe@example.com",
        }
    ]

    return (
        <>
            <h1>About Us</h1>

            <div>

                {profilesData.map((profile, index) => (
                    <Profile
                        key={index}
                        url={profile.url}
                        name={profile.name}
                        email={profile.email}
                        bio={profile.bio || ''}
                        skills={profile.skills || []} 
                        isPremium={profile.isPremium}
                    />
                ))

                }



            </div>
        </>
    )

}