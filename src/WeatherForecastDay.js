import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function(props){
    function max(){
        return Math.round(props.forecastInfo.temp.max)
    }
    function min(){
        return Math.round(props.forecastInfo.temp.min)
    }

function forecastIcon(){
  return   props.forecastInfo.weather[0].icon ;
}

     let days = ['Mon','Tue','Wed','Thu', 'Fri' , 'Sat', 'Sun']
     let date = new Date(props.forecastInfo.dt * 1000) 
     let weekDay = date.getDay()
    return(
        <div className="col">
        <div className="week-day">{days[weekDay]}</div>
        <div className="forecast-icon"><WeatherIcon size={36} code={forecastIcon()}/></div> 
           <div className="forecast-temp">
           <span className="forecast-max-temp">{max()}°</span>
           <span className="forecast-min-temp">{min()}°</span>
           </div>
       </div>
    )
}