import React from "react";
import './today-weather.css';
import moment from "moment";

const TodayWeatherCard = ({temp, hourTemp}) => {
    return(
        <>
            <div className="today">
                <div className="today-section">
                    <div className="temps">
                        <h3>{temp}°</h3>
                        {hourTemp.slice(1,6).map((res,i) => {
                            return <p key={i}>{res.temp}°</p>
                        })}
                    </div>

                    <div className="temps-hours">
                        <h3>Now</h3>
                        {hourTemp.slice(1,6).map((res,i)=> {

                            const convertedValue = moment.unix(res.dt).format("H");

                            return <p key={i}>{convertedValue} P.M.</p>

                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayWeatherCard;