import React from 'react';
import './main-city.css';

const MainCity = ({date, weather, city}) => {
    return(
        <>
        <div className="main-city">
            <h3 className="main-city-name">{ city }</h3>
            <p className="main-city-date">{ date }</p>
            <p className="main-city-weather">{ weather }</p>
        </div>
        </>
    )
}

export default MainCity;