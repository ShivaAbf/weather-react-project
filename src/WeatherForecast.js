import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css'
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded , setLoaded] = useState(false);
    let [forecastData , setForecastData ] = useState(null);


function showForecast(response){
   setForecastData(response.data.daily);
   setLoaded(true);
}

   useEffect(() => {
    setLoaded(false);
   },
 [props.coordInfo]);
    
    if(loaded){
    return(
        <div>
        <div className="row forecast">
            <WeatherForecastDay forecastInfo={forecastData[0]} />
            <WeatherForecastDay forecastInfo={forecastData[1]} />
            <WeatherForecastDay forecastInfo={forecastData[2]} />
            <WeatherForecastDay forecastInfo={forecastData[3]} />
            <WeatherForecastDay forecastInfo={forecastData[4]} />
         </div>
         </div>
    )}
    else{
        let latitude = props.coordInfo.lat;
    let longitude = props.coordInfo.lon;
    let apiKey = `8015ed1d22e33fd7249f1d37945c66fb`
    let forecastUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(showForecast);
    return(
        <div>forecast is loading...</div>
    )
    }
}