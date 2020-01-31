import React from 'react';
import { Link } from "react-router-dom";

const ParkDetails = props =>{
    console.log(props)
    return(
        <div>
            sfiosajfoejifae
            {props.parks.fullName}
            {props.parks.states}
            {props.parks.description}
            {props.parks.weatherInfo}
        </div>
    )
}

export default ParkDetails