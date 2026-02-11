import React from "react";

const Contact = () => {
    return (
        <div className="contact-wrapper d-flex align-items-center justify-content-center text-white text-center">
            <div className="overlay"></div>

            <div className="content position-relative">
                <h1 className="fw-bold mb-2">Get in Touch with WorkNest</h1>


                <div className="bg-white rounded-pill shadow mx-auto d-flex align-items-center p-2 gap-2 form-box">
                    <input
                        type="text"
                        className="form-control rounded-pill border-0"
                        placeholder="Enter Your Name"
                    />
                    <input
                        type="email"
                        className="form-control rounded-pill border-2"
                        placeholder="Enter Your Email"
                    />
                    <button className="btn bg-success text-white rounded-pill px-4">
                        Submit
                    </button>
                </div>

                <div className="container mt-5">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-md-4 d-flex justify-content-center">
                            <div
                                className="p-4 text-white rounded-4 bg-success text-start"
                                style={{ width: "260px" }}
                            >
                                <h5 className="fw-bold mb-3">CALL US 📞
</h5>
                                <p className="mb-1">+91 77777 15771</p>
                                <p>support@worknest.com</p>

                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div
                                className="p-4 text-white rounded-4 bg-success text-start"
                                style={{ width: "260px" }}
                            >
                                <p className="mb-1">WorkNest Office</p>
                                <p>Ahmedabad, Gujarat, India</p>

                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div
                                className="p-4 text-white rounded-4 bg-success text-start"
                                style={{ width: "260px" }}
                            >
                                <h5 className="fw-bold mb-3">HOURS ⏰</h5>
                                <p className="mb-1">Mon - Fri: 9am - 6pm</p>
                                <p>Sat: 10am - 2pm</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;