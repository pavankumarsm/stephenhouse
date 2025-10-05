import React from 'react'
import HealthCareFirst from './HealthCareFirst';
import HealthCareImages from './HealthCareImages';
import HealthCareDetail from './HealthCareDetail';
import HealthCareDetails from './HealthCareDetails';
import HealthCareTheroryDetails from './HealthCareTheroryDetails';
import HealthCareFrom from './HealthCareFrom';

const HealthCarePage = () => {
    return (
        <div>
            <HealthCareFirst />
            <HealthCareImages />
            <HealthCareDetail />
            <HealthCareDetails />
            <HealthCareTheroryDetails />
            <HealthCareFrom />
            
        </div>
    )
}

export default HealthCarePage