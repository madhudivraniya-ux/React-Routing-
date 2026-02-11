function Home() {
    return (
        <div className="container-fluid mt-4">
            <header
                className="text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D')",
                    height: "80vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "white",
                }}
            >

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                ></div>
                <div
                    className="container position-relative"
                    style={{ zIndex: 2, color: "white" }}
                >
                    <div className="row py-lg-5">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h1>Manage Projects with Ease – WorkNest</h1>

                            <p className="lead mb-4">
                                WorkNest helps you organize tasks, track progress, and manage your projects
                                efficiently with a simple and clean interface.
                            </p>

                            <a href="#" className="btn btn-success me-2">
                                Get Started
                            </a>
                            <a href="#" className="btn btn-outline-light ">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section 2 */}
            <section className="py-5">
                <h2 className="mb-4 text-center">Why Choose Us?</h2>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Smart Task Management</h5>
                                <p className="card-text">
                                    Create, organize, and track tasks easily with a clean and
                                    user-friendly interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Project Progress Tracking</h5>
                                <p className="card-text">
                                    Monitor deadlines, track progress, and ensure every project
                                    stays on schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Team Collaboration</h5>
                                <p className="card-text">
                                    Work smoothly with your team, share updates, and improve
                                    productivity together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="text-center py-5 bg-success text-white rounded">
                <h2>Start Your Journey with WorkNest!</h2>

                <p className="mb-4">
                    Sign up today and manage your tasks, projects, and team in one powerful platform.
                </p>

                <a href="/register" className="btn btn-light btn-lg">
                    Register Now
                </a>
            </section>
        </div>
    );
}

export default Home;