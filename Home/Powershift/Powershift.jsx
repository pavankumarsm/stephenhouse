import React from 'react';
import "./Powershift.css";
import Card from '../Card/Card';

const Powershift = () => {
    return (
        <>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12 Power_shift text-center'>
                        <h1>Power-Shift: Powered by AI</h1>
                        <h4>Shaping Tomorrow's World, Today.</h4>
                        <p style={{textAlign:"left"}}>
                            At Stephen's House of Analytics, we aid you in the process of designing 
                            <br className="responsive-br" />and implementing algorithms or computational methods to find 
                            <br className="responsive-br" /> solutions to complex problems.
                        </p>
                    </div>
                </div>

                <div className='row mt-3' >
                    <div className='col-12 h3_content'>
                        <h3 className='d-flex flex-column flex-sm-row fs-2'>
                            It’s healthy to be organised.
                            <p className='fontsize'>It promotes both productivity and well-being.</p>
                        </h3>
                    </div>

                    <div className='col-12 Power_shift_2 mx-0' style={{backgroundColor:"whitesmoke"}}>
                        <h1>Harness the power of AI.</h1>
                        <p>
                            AI in analytics can have a significant impact on your organisation. By harnessing the 
                            <br className="responsive-br" /> power of AI, you can gain a competitive edge, drive innovation, and achieve better 
                            <br className="responsive-br" /> outcomes in various domains and industries.
                        </p>
                        <span>Here are some key benefits:</span>
                    </div>
                </div>

                <Card />
            </div>
        </>
    );
}

export default Powershift;
