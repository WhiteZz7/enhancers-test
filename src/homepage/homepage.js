import React from 'react';
import InputField from '../components/input-search/input-search';
import MainCity from '../components/maincity/main-city';
import moment from 'moment';
import "./homepage.css";
import GeoLocation from '../components/geolocalization/geolocalization';
import TodayWeatherCard from '../components/today-weather/today-weather'
import WeekCard from '../components/weekly-weather-card/weekly-weather-card';
import CityCard from '../components/city-card/city-card';
import { BsPlusCircle, BsHouse, BsGeoAlt, BsSearch } from 'react-icons/bs';

const api = {
    key: 'dc56d1e03d418fc36f4f2f623bb9be19',
    base: `https://api.openweathermap.org/data/2.5/`
  }

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cityOneAndTwo: " ",
            cityOneInfo: " ",
            cityOneDate: " ",
            cityOneTemperature: " ",
            cityOneIcon: " ",
            cityTwoInfo: " ",
            cityTwoDate: " ",
            cityTwoTemperature: " ",
            cityTwoIcon: " ",
            currentTemp: " ",
            currentDate: " ",
            currentWeather: " ",
            lat: " ",
            lon: " ",
            weatherImage: " ",
            search: " ",
            weatherImage: "",
            mainCity: "Turin",
            dailyForecast: [],
            hourlyForecast: [],
            searchInput: " ",
            loading: false,
        };
    }

    //function that handles the Search button click
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchInput: value });
      };
    
    //function that handles the Search button on Enter click 
    handleKeyDown = (e) => {
        const { value } = e.target;
        if (e.keyCode === 13) {
          this.setState({ searchInput: value });
          this.searchWeatherStation();
        }
      };

    //Api call to search a specific city, that replaces the main card city
    searchWeatherStation = () =>{
        const { searchInput } = this.state;
        fetch(
            `${api.base}/weather?q=${searchInput}&units=metric&appId=${api.key}`
        )
        .then((res) => res.json())
        .then((data) => {
            const date = data.dt + data.timezone;
            const formatDate = moment.unix(date).format("dddd, Do MM");
            this.setState({
                weatherImage: data.weather[0].icon,
                mainCity: data.name,
                currentTemp: data.main.temp,
                currentDate: formatDate,
                currentWeather: data.weather[0].main,
                lat: data.coord.lat,
                lon: data.coord.lon
            });
        })
        .then(() => {
            const { lat, lon } = this.state;

            fetch(`${api.base}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${api.key}`).then((res) => res.json())
            .then((data) => {
                this.setState({
                    dailyForecast: data.daily,
                    hourlyForecast: data.hourly
                });
            })
            .catch((e) => {
                console.log(e);
            });
        })
        .catch(() => alert("No city found! Retry please"));
    };

    //Api call for the main card city (in this case, Turin, my hometown)
    mainCityForecast = () => {
        fetch(`${api.base}/weather?q=Turin&units=metric&appid=${api.key}`).then((res) => res.json()).then((data) => {
            const date = data.dt;
            const formatDate = moment.unix(date).format("dddd, Do MMM");

            this.setState({
                weatherImage: data.weather[0].icon,
                currentTemp: data.main.temp,
                currentDate: formatDate,
                currentWeather: data.weather[0].main
            });
        })
        .catch((e) => console.error(e));

        fetch(`${api.base}/onecall?lat=45.1333&lon=7.3667&units=metric&exclude=minutely&appid=${api.key}`).then((res) => res.json())
        .then((data) =>{
            this.setState({
                dailyForecast: data.daily,
                hourlyForecast: data.hourly
            });
        }).catch((e) => console.error(e));
    };

    //Geolocalization 
    geoLocalization = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try{
                const latitude = await position.coords.latitude;
                const longitude = await position.coords.longitude;
                this.setState({
                    lat: latitude,
                    lon: longitude,
                    loading: false
                });
                console.log(latitude, longitude);
            } catch(error){
                console.log(error)
            }

            const { lat, lon } = this.state;

            fetch(`${api.base}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${api.key}`).then((res) => res.json())
                .then((data) => {
                    this.setState({
                        mainCity: "Actual Position",
                        dailyForecast: data.daily,
                        hourlyForecast: data.hourly,
                        currentTemp: data.current.temp,
                    });
                })
                .catch((e) => console.error(e))
        });
    };

    //Api call for London weather (side weather card)
    londonCardWeather = () => {
        fetch(`${api.base}/weather?q=London&units=metric&appid=${api.key}`).then((res) => res.json()).then((data) => {
            const date = data.dt;
            const formatDate = moment.unix(date).format('dddd, Do MMM');

            this.setState({
                mainCity: "London",
                weatherImage: data.weather[0].icon,
                currentTemp: data.main.temp,
                currentDate: formatDate,
                currentWeather: data.weather[0].main
            });
        }).catch((e) => console.error(e));

        fetch(`${api.base}/onecall?lat=51.5085&lon=-0.1257&units=metric&exclude=minutely&appid=${api.key}`).then((res) => res.json())
            .then((data) => {
                this.setState({
                    dailyForecast: data.daily,
                    hourlyForecast: data.hourly
                });
            }).catch((e) => console.error(e));

    };

    //Api call for Rome weather (side weather card)
    romeCardWeather = () => {
        fetch(`${api.base}/weather?q=Rome&units=metric&appid=${api.key}`).then((res) => res.json()).then((data) => {
            const date = data.dt;
            const formatDate = moment.unix(date).format('dddd, Do MMM');

            this.setState({
                mainCity: "Rome",
                weatherImage: data.weather[0].icon,
                currentTemp: data.main.temp,
                currentDate: formatDate,
                currentWeather: data.weather[0].main
            });
        }).catch((e) => console.error(e));

        fetch(`${api.base}/onecall?lat=34.257&lon=-85.1647&units=metric&exclude=minutely&appid=${api.key}`).then((res) => res.json())
            .then((data) => {
                this.setState({
                    dailyForecast: data.daily,
                    hourlyForecast: data.hourly
                });
            }).catch((e) => console.error(e));

    };

    //Rome and London forecast api calls
    cityCards = () => {
        fetch(`${api.base}/weather?q=Rome&units=metric&appid=${api.key}`).then((res) => res.json()).then((data) => {
            const date = data.dt;
            const formatDate = moment.unix(date).format("dddd, Do MMM");
            this.setState({
                cityOneIcon: data.weather[0].icon,
                cityOneDate: formatDate,
                cityOneTemperature: data.main.temp,
                cityOneInfo: data
            });
        }).catch((e) => console.error(e));

        fetch(`${api.base}/weather?q=London&units=metric&appid=${api.key}`).then((res) => res.json()).then((data) => {
            const date = data.dt;
            const formatDate = moment.unix(date).format("dddd, Do MMM");
            this.setState({
                cityTwoIcon: data.weather[0].icon,
                cityTwoDate: formatDate,
                cityTwoTemperature: data.main.temp,
                cityTwoInfo: data
            });
        }).catch((e) => console.error(e));

    }

    componentDidMount() {
        this.mainCityForecast();
        this.cityCards();
    }

    render(){

        const{
            weatherImage,
            loading,
            mainCity,
            currentDate,
            currentTemp,
            currentWeather,
            hourlyForecast,
            dailyForecast,
            cityOneInfo,
            cityOneDate,
            cityOneTemperature,
            cityOneIcon,
            cityTwoInfo,
            cityTwoDate,
            cityTwoTemperature,
            cityTwoIcon
        } = this.state;

        return (
        <>
            <div className="main">
                <div className="main-city a">
                    <MainCity city={mainCity} date={currentDate} weather={currentWeather} />
                    <div className="forecast-widget">
                        <h3 className="weather-widget">{currentTemp}°</h3>
                        <img
                            src={`https:/openweathermap.org/img/wn/${weatherImage}@2x.png`}
                            alt="weather" 
                        />
                    </div>
                </div>

                <div className="search-div b">
                    <InputField 
                        onClick={() => {
                            this.searchWeatherStation();
                        }}
                        onChange={(e)=> {
                            this.handleChange(e);
                        }}
                        onKeyDown={(e) => {
                            this.handleKeyDown(e);
                          }}/>
                    <button className="add-location">
                        <BsPlusCircle />
                        <h5>Add Location</h5>
                    </button>
                    <CityCard cityName={cityOneInfo.name} cityDate={cityOneDate} 
                        cityTemperature={cityOneTemperature} cityWeather={cityOneIcon} onClick={() => {
                            this.romeCardWeather();
                        }}/>
                    <CityCard cityName={cityTwoInfo.name} cityDate={cityTwoDate} 
                        cityTemperature={cityTwoTemperature} cityWeather={cityTwoIcon} onClick={() => {
                            this.londonCardWeather();
                        }}/>
                    <GeoLocation onClick={() => {
                        this.setState({
                            loading: true
                        },
                        () => this.geoLocalization());
                    }}/>
                    <div className="mobile-btn">
                        <BsHouse />
                        <BsSearch />
                        <BsGeoAlt />
                    </div>
                </div>
                <div className="today-temperature c">
                    <TodayWeatherCard temp={currentTemp} hourTemp={hourlyForecast}/>
                </div>
                <div className="week-month-div d">
                    <WeekCard dailyForecast={dailyForecast}/>
                </div>
            </div>
        </>
        )
    }

}

export default HomePage;