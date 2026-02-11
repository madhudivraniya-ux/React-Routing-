import React from "react";

function Register() {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start mb-5">
        
        {/* Left Side */}
        <div className="col-lg-7">
          <h2 className="fw-bold text-dark mb-3">
            Manage Projects With Ease –{" "}
            <span className="text-success">WorkNest</span>
          </h2>

          <p className="text-muted fs-5 mb-4">
            WorkNest helps you manage projects efficiently by organizing tasks,
            deadlines, and team collaboration in one place.
          </p>

          <p className="text-muted fs-5 mb-4">
            Whether you are a student, freelancer, or company team, WorkNest
            provides a smooth platform to track work progress and improve
            productivity.
          </p>

          <p className="text-muted fs-5 mb-4">
            With WorkNest, you can plan projects, assign tasks, and monitor
            progress with a clean and modern interface.
          </p>

          <p className="text-muted fs-5 mb-4">
            Register today and experience a smarter way to manage your workflow
            and achieve goals faster.
          </p>

          <div className="d-flex gap-3">
            <button className="btn btn-outline-success px-4 py-2">
              Explore Features
            </button>
            <button className="btn btn-success px-4 py-2">Join WorkNest</button>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-lg-5">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h4 className="text-center fw-bold mb-4">Register Now</h4>

            <form>
              <div className="mb-4">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control form-control-lg" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control form-control-lg" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Phone</label>
                <input type="number" className="form-control form-control-lg" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Select Plan</label>
                <select className="form-control form-control-lg">
                  <option>Free Plan</option>
                  <option>Pro Plan</option>
                </select>
              </div>

              <button className="btn btn-success w-100 py-2 fs-5">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-3">Unlock Your Project Power</h3>
        <p className="text-muted fs-6 mb-4">
          WorkNest provides the perfect tools for planning, collaboration, and
          tracking projects. Register now and start managing your work
          professionally.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card h-100 shadow-sm p-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661367947678-e61a5a019eed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Smart Planning"
              className="card-img-top card-img-fixed"
            />
            <div className="card-body">
              <h6 className="fw-bold mb-1">Smart Planning</h6>
              <p className="text-muted small mb-0">
                Plan projects smartly with clear deadlines and workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm p-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1682125248532-00da8c3530d2"
              alt="Creative Boards"
              className="card-img-top card-img-fixed"
            />
            <div className="card-body">
              <h6 className="fw-bold mb-1">Creative Boards</h6>
              <p className="text-muted small mb-0">
                Organize tasks using boards for better productivity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm p-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1658506729016-b0beeebda208"
              alt="Collaboration"
              className="card-img-top card-img-fixed"
            />
            <div className="card-body">
              <h6 className="fw-bold mb-1">Collaboration</h6>
              <p className="text-muted small mb-0">
                Collaborate with your team and share project updates.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm p-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D"
              alt="AI Support"
              className="card-img-top card-img-fixed"
            />
            <div className="card-body">
              <h6 className="fw-bold mb-1">AI Support</h6>
              <p className="text-muted small mb-0">
                Get smart assistance and suggestions for better project handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
