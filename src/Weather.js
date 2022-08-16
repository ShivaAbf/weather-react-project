import axios from "axios";
import React , {useState} from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
   
    let [WeatherData , setWeatherData] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);
   function settingData(response){
setWeatherData({
          ready: true,
          Temperature : response.data.main.temp ,
          description: response.data.weather[0].main ,
          humidity:response.data.main.humidity ,
          wind:response.data.wind.speed,
          icon:response.data.weather[0].icon,
          date:new Date(response.data.dt *1000),
          city: response.data.name
        }
)}

    function handleSubmit(event){
        event.preventDefault();
        searchCity();
    }

    function handleChange(event){
        setCity(event.target.value);
    }

    function searchCity(){
        let apiKey = `8015ed1d22e33fd7249f1d37945c66fb`
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(settingData)
    }


    if(WeatherData.ready){
    return(
    <div className="container ">
        <div className="head">
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-9">
                <input type="search" placeholder="Enter city..." className="form-control " autoFocus onChange={handleChange}/>
                </div>
            <div className="col-md-3 search-btn">
                <input type="submit" className="btn btn-primary px-3" value="search" />
                </div>
            </form>
        <WeatherInfo information={WeatherData} />
          </div>
        </div>
    );}
    else{
    searchCity();
     return(
        <h2>loading</h2>
    )}
}