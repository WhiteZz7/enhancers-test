import React from "react";
import './weekly-weather-card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from "react-bootstrap";
import moment from "moment";
import MonthCard from "../month-weather-card/month-weather-card";
import DailyTempCard from "../daily-temp-cards/daily-temp-cards";

const WeekCard = ({ dailyForecast }) => {
    return(
        <>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="This Week" className="tabs">
                    {dailyForecast.slice(1,5).map((res,i) => {
                        const formatDate = moment.unix(res.dt).format("dddd");
                        const temps = res.temp.day
                        const tomorrowWeatherImg = res.weather[0].icon

                        return(
                            <DailyTempCard key={i} tomorrow={formatDate} tomorrowTemp={temps} tomorrowWeatherImg={tomorrowWeatherImg} />
                        )
                    })}
                </Tab>
                <Tab eventKey="profile" title="This month">
                    {dailyForecast.slice(7,8).map((res,i) => {
                        const formatDate = moment.unix(res.dt).format("LL");
                        const temps = res.temp.day
                        const genericTemp = res.weather[0].main
                        const weatherImg = res.weather[0].icon
                        const maxTemp = res.temp.max
                        const minTemp = res.temp.min

                        return(
                            <MonthCard key={i} seventhDay={formatDate} seventhDayTemp={temps} weatherImage={weatherImg} monthWeather={genericTemp} max={maxTemp} min={minTemp} /> 
                        )
                    })}
                </Tab>
            </Tabs>
        </>
    );
};

export default WeekCard;