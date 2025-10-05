import React from 'react';
import Slider from "react-slick";
import './Slidercontent.css';
import img1 from "../../Home/Slidercontent/Assets/01.png";
import img3 from "../../Home/Slidercontent/Assets/03.png";
import Help from "../../Home/Slidercontent/Assets/Help1.png"

const Slidercontent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 430,
        settings: "unslick"
      }
    ]
  };


  return (
    <div className="container-fluid" style={{backgroundColor:"#ebebec"}}>

          <div className='row pt-5 mb-5'>

          <div className='d-flex  justify-content-center align-items-center img_help mb-4'>
            <img src={Help} alt="Help" className='img-fluid' />
            <p>How Can We Help You ?</p>
          </div>

          <Slider {...settings}>
           
            <div className='slider-card mb-4'>
              <div className='card-content Content_h3_content '>
                <div className="text-background">
                  <h3 className='pad_y'>Digital Consulting</h3>
                  <div className='bdsep'></div>
                  <p className='PTAG'>Speed up your transformation with our assessment and advisory services, proven methodologies, proprietary tools, and change management expertise.</p>
                </div>
                <img src={img1} alt="img1"  className='sliderimg1 img-fluid'/>
              </div>
            </div>

            <div className='slider-card background-image mb-4'>
              <div className='card-content'>
                <div>
                  <h3 className='backimg_header'>Automation</h3>
                  <p className='PTAG_content1'>We are increasingly living in a world of systems, sensors, devices and a plethora of data sources. We specialise in linking disparate sources and automating information</p>
                <span className='bottom_spantag'>All generating vast amounts of information every second leading to a landscape of interconnected data streams.</span>
              </div>
              </div>
            </div>


            <div className='slider-card mb-4 secondcard'>
              <div className='card-content Content_h3_content2'>
                <div className='text-background2'>
                <h3 >Platform Solutions</h3>
                <p className='PTAG'>Integrate and implement reliable platforms into your digital infrastructure to enhance your supply chain and ERP environment, increasing operational agility, visibility, and performance.</p>
                </div>
                <img src={img3} alt="" className='sliderimg1 img-fluid'/>
              </div>
            </div>


            <div className='slider-card background-image1 mb-4'>
              <div className='card-content '>
                <div className=''>
                  <h3 className='backimg_header'>Modern Engineering</h3>
                  <p className='PTAG_content1'>At Stephen's, companies can lay a trusted foundation that powers hybrid IT and multi-cloud
                     infrastructures, eliminating data silos that lead to inefficient data use.</p>
                  <p className='bottom_spantag ssspan'>Develop your digital foundation and update your application and data environmen maximise the value of your data.</p>
                </div>
              </div>
            </div>
          
            <div className='slider-card mb-4 background-3image'>
              <div className='card-content'>
                <div className=''>
                  <h3 className='backimg_header1'>Analytics and Ai</h3>
                  <p className='PTAG_content2'>Powered by a scalable Al framework that is built on a solid data foundation leveraging pre-built assets AutoMI transfer learning ML Ops synthetic data generation - we can minimise time-to-market and maximise business value.</p>

                </div>
                <span className='bottom_spantag1'>Businesses generate terabytes of data daily.<br /> Innovate - Get the most out of your data.</span>                </div>
            </div>

            <div className='slider-card  Content_h3_content3 mb-4'>
              <div className='card-content'>
                <h3 className='PTAG3'>SAP Offerings</h3>
                <p className='PTAG_content3'>At Stephen's, we are digitising and transforming the <br className='breakless'/>supply
                 chain business, with a strong commitment to <br className='breakless'/>amplifying SAP's significant technologies and 
                 the <br className='breakless'/>value they bring to our customers.</p>
              </div>
            </div>


          </Slider>

        </div>



      <div className='row mt-5'>
        <div className='backcolor'>
                <div className='my-4 py-4 atcolor d-flex justify-content-center align-items-center'>
                  <h4>
                    At Stephen's We help companies find incredible <br className='breakless'/>
                    way to engage millions of people every day.
                  </h4>
                </div>
        </div>
        </div>
    </div>

  );
}


export default Slidercontent;

