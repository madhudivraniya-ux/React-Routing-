import React from "react";

const About = () => {
    return (
        <div className="container my-5">
            {/* About Intro */}
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <div className="blob-shape">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                            alt="Team"
                            className="img-fluid"
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2>About Us</h2>
                    <h5 className="fw-bold">Who We Are</h5>

                    <p>
                        WorkNest is a modern project management platform designed to help individuals and teams stay organized, focused, and productive. We provide smart tools to manage tasks, track progress, and collaborate efficiently in one place.
                    </p>

                    <p>
                        At WorkNest, our goal is to simplify your workflow by offering a clean, user-friendly experience where planning and execution become effortless.
                        Whether you're managing a small project or working with a large team, WorkNest helps you stay on schedule and achieve your goals faster.
                    </p>

                    <p className="fw-semibold">
                        We believe in smart work, better planning, and seamless teamwork.
                    </p>
                    <button className="btn btn-outline-success">Read More &rarr;</button>
                </div>
            </div>

            {/* Training Section */}
            <section className="py-5">
                <h3 className="text-center fw-bold">
                    Manage Projects with <span className="text-success">WorkNest</span>

                </h3>

                <p className="text-center text-secondary mb-5">
                    WorkNest provides powerful tools that help you plan projects, manage tasks,
                    and collaborate with your team efficiently.
                </p>


                {/* Row 1 */}
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="p-4 rounded-4 shadow bg-dark text-white h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold mb-0">WorkNest Live Demo</h4>
                                <span className="badge bg-success">Weekend</span>
                            </div>

                            <p className="mt-3 mb-1">10th December, Saturday</p>
                            <p className="mb-1">10:00 AM – 12:00 PM</p>
                            <p className="mb-4">Online</p>

                            <p className="mb-4">
                                Join our live demo session and learn how WorkNest helps you manage
                                projects, assign tasks, and track progress efficiently.
                            </p>

                            <button className="btn btn-success px-4 rounded-pill">
                                Join Now &rarr;
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 rounded-4 shadow bg-white h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold mb-0">Project Planning Workshop</h4>
                                <span className="badge bg-success">Weekend</span>
                            </div>

                            <p className="mt-3 mb-1">10th December, Saturday</p>
                            <p className="mb-1">10:00 AM – 12:00 PM</p>
                            <p className="mb-4">Online</p>

                            <p className="mb-4">
                                Learn how to plan projects, set deadlines, and organize workflows using
                                WorkNest tools for better productivity.
                            </p>

                            <button className="btn btn-success px-4 rounded-pill">
                                Join Now &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 mt-1">
                    <div className="col-md-6">
                        <div className="p-4 rounded-4 shadow bg-white h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold mb-0">Team Collaboration Session</h4>
                                <span className="badge bg-success">Weekend</span>
                            </div>

                            <p className="mt-3 mb-1">10th December, Saturday</p>
                            <p className="mb-1">10:00 AM – 12:00 PM</p>
                            <p className="mb-4">Online</p>

                            <p className="mb-4">
                                Learn how teams can collaborate smoothly, share updates, and complete
                                tasks faster using WorkNest collaboration features.
                            </p>

                            <button className="btn btn-success px-4 rounded-pill">
                                Join Now &rarr;
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 rounded-4 shadow bg-dark text-white h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold mb-0">Reports & Progress Tracking</h4>
                                <span className="badge bg-success">Weekend</span>
                            </div>

                            <p className="mt-3 mb-1">10th December, Saturday</p>
                            <p className="mb-1">10:00 AM – 12:00 PM</p>
                            <p className="mb-4">Online</p>

                            <p className="mb-4">
                                Understand how WorkNest helps track progress, generate reports, and keep
                                your projects on schedule with smart analytics.
                            </p>


                            <button className="btn btn-success px-4 rounded-pill">
                                join Now &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;