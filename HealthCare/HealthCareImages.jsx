import React from 'react'
import Descriptive from "./assets/Descriptive A Open.png"
import Diagnostic from "./assets/Diagnostic A Closed.png"
import Predictive from "./assets/Predictive Analytics Closed.png"
import Prescriptive from "./assets/Prescriptive A Closed.png"
import Arrow from "./assets/Arrow-01.png"
import "./HealthCare.css"
const HealthCareImages = () => {
    return (
        <div className='ms-5 me-5 '>
        <div className=" mt-5 ms-5 me-5">
            <div className="row gx-3 margin-image">
                <div className="col  position-relative d-flex flex-column mb-5">
                    <img
                        src={Descriptive}
                        className="rounded float responsive-image "
                        alt="Descriptive"

                    />
                    <div className="position-absolute top-0 start-20 text-white p-4 "
                        style={{ opacity: 0.8 }}>
                        <p className="mt-2 mb-0 d-flex flex-column heading-text">
                            <span>How many patients went to the</span>
                            <span style={{ alignSelf: 'flex-start' }}>hospital last week?</span>
                        </p>
                    </div>
                    <div className='position-absolute bottom-0 ms-4 pb-3 d-flex flex-column align-items-start'>
                        <p className="fs-4 custom-color fw-bold mb-0 mt-2">Diagnostic Analytics</p>
                        <div className="d-flex align-items-start mt-1 position-relative">
                            <p className="fs-6 mb-3 d-flex flex-column">
                                <span>Gaining insights to past data,</span>
                                <span style={{ alignSelf: 'flex-start' }}>trends and events</span>
                            </p>
                            <img
                                className='arrow-image position-absolute me-5'
                                src={Arrow}
                                alt="arrow"

                            />
                        </div>
                    </div>

                </div>
                <div className="col position-relative d-flex flex-column mb-5">
                    <img
                        src={Diagnostic}
                        className="rounded float responsive-images"
                        alt="Diagnostic"

                    />
                    <div className='position-absolute bottom-0 start-0 ms-2 pb-3'>
                        <div className="d-flex flex-column mb-2 align-items-start ms-4">
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Diagnostic</span>
                            </div>
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Analytics</span>
                            </div>
                        </div>
                        <button className="btn custom mt-1 ms-4 btn-width" >Explore</button>
                    </div>

                </div>

                <div className="col position-relative d-flex flex-column mb-5">
                    <img
                        src={Predictive}
                        className="rounded float responsive-images"
                        alt="Predictive"
                    />


                    <div className='position-absolute bottom-0 start-0 ms-2 pb-3'>
                        <div className="d-flex flex-column mb-2 align-items-start ms-4">
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Predictive</span>
                            </div>
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Analytics</span>
                            </div>
                        </div>
                        <button className="btn custom mt-1 ms-4 btn-width">Explore</button>
                    </div>
                </div>
                <div className="col position-relative d-flex flex-column mb-5">
                    <img
                        src={Prescriptive}
                        className="rounded float responsive-images"
                        alt="Prescriptive"

                    />

                    <div className='position-absolute bottom-0 start-0 ms-2 pb-3 '>
                        <div className="d-flex flex-column mb-2 align-items-start ms-4">
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Predictive</span>
                            </div>
                            <div className="d-flex ">
                                <span className="fs-4 custom-color fw-bold">Analytics</span>
                            </div>
                        </div>
                        <button className="btn custom mt-1 ms-4 btn-width" >Explore</button>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )
}

export default HealthCareImages