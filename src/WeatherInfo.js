import React from "react";
import FormatDate from "./FormatDate";
import Unitconvention from "./Unitconvention";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props){
    return(
        <div className="row mt-3">
        <div className="col-md-8 weather-info">
               {/* <img src={props.information.icon} alt="icon of weather" /> */}
               <WeatherIcon code={props.information.icon} size={45} />
               <Unitconvention temp={props.information.Temperature} />
               <ul>
                   <li>description: {props.information.description}</li>
                   <li>Humidity: {props.information.humidity}%</li>
                   <li>Wind: {props.information.wind} km/h</li>
               </ul>
                </div>
            <div className="col-md-4 city-info">
            <h1>{props.information.city}</h1>
            <div>
                <FormatDate detethings={props.information} />
            </div>
                </div>
                </div>
                
    )
}