import React from 'react'

function Services() {
  return (
    <div>
  <section
    className="py-5 text-center text-white position-relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      filter: "brightness(60%)",  // Correct syntax
    }}
  >
   <h1 className="fw-bold display-6 mt-5">WORKNEST SERVICES</h1>
  </section>
  <div className="container position-relative" style={{ marginTop: "-120px" }}>
  <div className="row justify-content-center">
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card border-0 shadow-lg p-3 text-center rounded-4">
        <i className="bi bi-bicycle fs-1 text-success"></i>
        <h5 className="fw-bold mt-3">Task Management</h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>
         Create, assign, and manage tasks easily with a smooth workflow system.
        </p>
        <a href="#" className="fw-bold text-success">
          MORE
        </a>
      </div>
    </div>
     <div className="col-md-3 col-sm-6 mb-4">
      <div className="card border-0 shadow-lg p-3 text-center rounded-4">
        <i className="bi bi-people fs-1 text-success"></i>
        <h5 className="fw-bold mt-3">Team Collaboration</h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Work together with your team and share updates to improve productivity.
        </p>
        <a href="#" className="fw-bold text-success">
          MORE
        </a>
      </div>
    </div>
     <div className="col-md-3 col-sm-6 mb-4">
      <div className="card border-0 shadow-lg p-3 text-center rounded-4">
        <i className="bi bi-award fs-1 text-success"></i>
        <h5 className="fw-bold mt-3">Project Planning</h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Plan projects, set deadlines, and organize your workflow efficiently.
        </p>
        <a href="#" className="fw-bold text-success">
          MORE
        </a>
      </div>
    </div>
     <div className="col-md-3 col-sm-6 mb-4">
      <div className="card border-0 shadow-lg p-3 text-center rounded-4">
        <i className="bi bi-calendar fs-1 text-success"></i>
        <h5 className="fw-bold mt-3">Reports & Analytics</h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Track progress and generate reports to make smarter project decisions.
        </p>
        <a href="#" className="fw-bold text-success">
          MORE
        </a>
      </div>
    </div>
  </div>
</div>

</div>

  )
}

export default Services