import { useState } from "react";

export default function Profile({ url, bio, name, email, skills = [], isPremium = false }) {

    const defaultImage = 'public/img/defaultImage.png';

    const [fav, setFav] = useState(false);

    function markFav(){
        setFav(!fav);
    }

    return (

        <>
            {/* Perfil 1 */}
            <div className="card mb-3 bg-secondary text-light">
                {isPremium && (
                    <span style={{ fontSize: '0.80rem' }} className="position-absolute top-0 start-0 badge bg-warning text-dark m-2">
                        Premium
                    </span>
                    
                )}
                {fav && (
                    <span style={{ fontSize: '0.80rem' }} className="position-absolute top-0 end-0 badge bg-danger text-dark m-2">
                        Favorito
                    </span>
                )}
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={url !== "" ? url : defaultImage} className="img-fluid rounded" alt={name || 'User Profile'} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="text-secondary">{email}</p>
                            <p className="card-text">
                                {bio || 'No tiene biografía aun.'}
                            </p>

                            {skills.length > 0 && (
                                <div className="mt-2">
                                    {skills.map((skill, index) =>
                                        <span key={index} className="btn btn-primary disabled me-2 mb-2">
                                            {skill}
                                        </span>
                                    )}
                                </div>
                            )}
                            <button onClick={markFav} className="card-button">
                                {fav ? 'Quitar favorito' : 'Marcar Favorito'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Perfil 2
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="src/img/sierra.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Paco Joe</h5>
                            <p className="text-secondary">paco@example.com</p>
                            <p className="card-text">
                                Software developer with a passion for building web applications using JavaScript and React.
                            </p>
                            <span className="btn btn-primary disabled">
                                JavaScript
                            </span>
                            <span className="m-2 btn btn-primary disabled">
                                React
                            </span>
                            <span className="btn btn-primary disabled">
                                CSS
                            </span>
                            <span className="ms-2 btn btn-primary disabled">
                                Node.js
                            </span>
                        </div>
                    </div>
                </div>
            </div>

{/* Perfil 3 
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="src/img/sierra.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Pepe Doe</h5>
                            <p className="text-secondary">pepe@example.com</p>
                            <p className="card-text">
                                Software developer with a passion for building web applications using JavaScript and React.
                            </p>
                            <span className="btn btn-primary disabled">
                                JavaScript
                            </span>
                            <span className="m-2 btn btn-primary disabled">
                                React
                            </span>
                            <span className="btn btn-primary disabled">
                                CSS
                            </span>
                            <span className="ms-2 btn btn-primary disabled">
                                Node.js
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )


}


