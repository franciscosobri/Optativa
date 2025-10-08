
export default function Profile() {

    return (

        <>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="src/img/sierra.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="text-secondary">johndoe@example.com</p>
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

        </>
    )


}


