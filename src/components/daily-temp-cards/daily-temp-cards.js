import React from 'react';
import './daily-temp-cards.css';

const DailyTempCard = ({tomorrow, tomorrowTemp, tomorrowWeatherImg}) => {
    return(
        <>
            <div className="dailytempcard">
                <h5 className="today">{ tomorrow }</h5>
                <div className="weekdays">
                    <h3>{ tomorrowTemp }</h3>
                    <img src={`http://openweathermap.org/img/wn/${tomorrowWeatherImg}@2x.png`} alt="weather"/>
                </div>
            </div>
        </>
    )
}

export default DailyTempCard;