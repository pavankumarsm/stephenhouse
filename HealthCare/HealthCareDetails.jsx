import React from 'react';
import Picture from "./assets/Picture 2.png";
import "./HealthCare.css";

const HealthCareDetails = () => {
    return (
       
        <div className="ms-5 me-5"  style={{ backgroundColor: "#f0f0f0" }}>
            <div className="p-1 mb-3 custom">
                <p className='fs-2 text-white mt-1 ms-5 me-5'>
                    Our team is ready to help you realise the full potential of intelligent data.
                </p>
            </div>
            <div className=" ms-2 me-5">
                <div className="row align-items-start gx-5 ms-1">
                    <div className="col p-3">
                        <img src={Picture} 
                            alt="Picture"
                            className="figure-image "
                        />
                    </div>
                    <div className="col ps-4 pt-4 pb-4">
                            <div className=''>
                            <p className='font-size custom-color fw-bold  mt-1'>Use Evidence Based Data!</p>
                            <p className='fs-5 mt-3'>
                                Evidence-based will, over time, increase <br /> efficiencies and help sharpen our  <br />understanding of the best practices <br /> associated with any disease, injury or illness.
                            </p>
                            <button className="btn custom mt-2 w-75  ">Start your analysis here.</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HealthCareDetails;
