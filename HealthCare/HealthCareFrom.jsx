import React from 'react';
import './HealthCare.css';

const HealthCareForm = () => {
    return ( <div className='ms-5 me-5'>

            <div className=" ms-5 me-5 mt-3">
                <p className="custom-color fs-1 fw-bold ">Start your Stephen's Pilot today</p>
                <p className="fs-5 mb-5">
                    We're certain we excel in delivering exceptional results. This could be a pivotal shift for your business. Reach out to us today, schedule a 30-minute call where we'll demonstrate how our solutions can address your challenges and boost your ROI.
                </p>
            </div>
            <div className="ms-5 me-5">
                <div className="row mb-3 gx-5">
                    <div className="col-12 col-md-6">
                        <label htmlFor="firstName" className="form-label fs-5">First Name: <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="company" className="form-label fs-5">Company: <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="company" />
                    </div>
                </div>
                <div className="row mb-3 gx-5">
                    <div className="col-12 col-md-6">
                        <label htmlFor="officeEmail" className="form-label fs-5">Work Email Address: <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" id="officeEmail" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="officeNumber" className="form-label fs-5">Office Number: <span className="text-danger">*</span></label>
                        <input type="tel" className="form-control" id="officeNumber" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <label htmlFor="message" className="form-label fs-5">Message: <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="message" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col ">
                        <button className="btn w-50 custom">Connect Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthCareForm;
