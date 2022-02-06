import React from "react";
import './city-card.css';

const CityCard = ({cityName, cityTemperature, cityDate, cityWeather, onClick}) => {
    return(
        <>
            <div className="cities-card" onClick={onClick}>
                <div className="city-info">
                    { cityName }
                    <h5>{ cityDate }</h5>
                </div>

                <div className="city-weath-icon">
                    <img src={`http://openweathermap.org/img/wn/${cityWeather}@2x.png`} alt="weather"/>
                </div>

                <div className="city-temp">
                    <h2>{ cityTemperature }°</h2>
                </div>

            </div>
        </>
    )
}

export default CityCard;