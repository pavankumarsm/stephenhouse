import React from 'react'
import "./HealthCare.css"

const HealthCareTheroryDetails = () => {
  return (
    <div>
        <div className=' ms-5 mt-5 me-5'>
            <p className='fs-1 custom-color fw-bold ms-5 mt-4'><span className='fs-2 text-success fw-bold'>FIVE</span> real world applications of healthcare data analytics.</p>

           <div className="fs-5 mt-2 ms-5 me-5 mb-3">
           <p className='mb-3'>
            Healthcare analytics has helped millions of healthcare professionals to better take care of their patients alongside reducing operational costs and saving time. Below we will explore some of the applications of healthcare data analytics:
            </p>
            <p className='fs-4 fw-bold mb-1'>Staffing Prediction</p>
            <p className='mb-4'>
            One of the major concerns that worries healthcare facilities is the allocation of nurses and other staff for a particular patient in a particular period of time. Allocating too many workers is going to shoot up the labor costs. Healthcare data analytics helps in effective allocation and staff management by predicting which worker will be allocated where and at what time.
            </p>
            <p className='fs-4 fw-bold mb-1'>Electronic Health Records (EHRs)</p>
            <p className='mb-4'>The major benefit of using healthcare data analytics is the utilisation of the large amount of data lying here and there. EHRs are a means to store patient-related data in an organised manner. They are like digital records that can be accessed anytime by the concerned parties for the patient’s treatment. EHRs usually store data such as past medical history, allergies, lab results, doctors’ diagnoses, etc. Healthcare data analytics is a boon as the EHRs are also known to send reminders with respect to regular health checkups, etc.</p>
            
            <p className='fs-4 fw-bold mb-1'>Strategic Planning</p>
            <p className='mb-4'>
            Data analytics has always helped organisations in strategic decision-making. The same applies to healthcare data analytics. The managers of healthcare facilities can effectively manage the treatment facilities and serve maximum possible patients with the help of data-driven strategic planning. Healthcare data analytics helps managers in making predictions regarding resource availability, treatment facilities, checkups, etc. This has promoted strategic decision-making and also boosted the trust and faith of patients in medical treatments.
            </p>
            <p className='fs-4 fw-bold mb-1'>Fraud Reduction</p>
            <p className='mb-4'>
            Healthcare analytics has not only helped in predictions and decision-making but also in data security by identifying pattern changes in network traffic—predicting possible breaches, identifying vulnerabilities, etc. These developments in healthcare data analytics have also helped in smooth claim settlements and cash advances to patients. 
            </p>

            <p className='fs-4 fw-bold mb-1'>Improved Distribution and Medical Logistics</p>
            <p className='mb-4'>
            The supply chain framework forms the backbone of the healthcare industry. A single instance of delayed delivery or mismanaged logistics can lead to life risks and critical problems. Healthcare analytics is a whole new approach to manage the distribution of medicine and healthcare appliances to facilities. It has helped in the effective planning of operations and reduced the variability in the supply chain.
            </p>

           </div>

        </div>
    </div>
  )
}

export default HealthCareTheroryDetails