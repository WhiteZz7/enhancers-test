import React from "react";
import './month-weather-card.css';

const MonthCard = ({ seventhDay, seventhDayTemp, weatherImage, monthWeather, max, min}) => {
    return(
        <>
            <div className="month-card">
                <div className="header one">
                    <h4>{ seventhDay }</h4>
                </div>
                <div className="month-temps two">
                    <h3>{ seventhDayTemp }°</h3>
                    <h5>{ monthWeather }</h5>
                    <h5>The high will be {max}, the low will be {min}</h5>
                </div>
                <div className="month-temps-image three">
                    <img src={`http://openweathermap.org/img/wn/${weatherImage}@2x.png`} alt="weather" />
                </div>
            </div>
        </>
    )
}

export default MonthCard;