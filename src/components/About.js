const About = () => {
    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-primary text-white rounded shadow">
                <h1 className="display-5 fw-bold text-center">About This App</h1>
                <p className="lead text-center">
                    This is my first React app, a simple yet powerful notes application that helps you store and manage your notes securely.
                </p>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center text-primary mb-3">Tech Stack</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>React.js</strong> - Frontend framework for building the UI.</li>
                        <li className="list-group-item"><strong>Express.js</strong> - Backend framework for handling API requests.</li>
                        <li className="list-group-item"><strong>Node.js</strong> - Runtime environment for running JavaScript on the server.</li>
                        <li className="list-group-item"><strong>Context API</strong> - State management for handling global app state.</li>
                        <li className="list-group-item"><strong>JWT Token</strong> - Secure authentication and authorization system.</li>
                        <li className="list-group-item"><strong>Bootstrap</strong> - CSS framework for styling and responsive design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
