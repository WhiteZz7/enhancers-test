import React from "react";
import './geolocalization.css';
import { BsGeoAlt } from "react-icons/bs";

const GeoLocation = ({ onClick }) => {

    return(
        <>
        <button className="geolocation" onClick={ onClick }>
            <BsGeoAlt />
            <h4 className="geolocation-title">Add Position</h4>
        </button>
        </>
    )

}

export default GeoLocation;