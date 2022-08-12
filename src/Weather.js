import React from "react";

export default function Weather(){
    return(
    <div className="container ">
        <div className="head">
        <div className="row">
            <div className="col-md-9">
                <input type="search" placeholder="Enter city..." className="form-control " autofocus='on'/>
                </div>
            <div className="col-md-3 search-btn">
                <input type="submit" className="btn btn-primary px-3" value="search" />
                </div>
            </div>
        <div className="row mt-3">
            <div className="col-md-6 weather-info">
               <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon of weather" />
               <p>35</p>
               <h3 className="unit">°C | °F</h3>
               <ul>
                   <li>Precipitation: 0%</li>
                   <li>Humidity: 34%</li>
                   <li>Wind: 16 km/h</li>
               </ul>
                </div>
            <div className="col-md-6 city-info">
            <h1>Isfahan</h1>
            <h2>Friday</h2>
            <h2>sunny</h2>
                </div>
            </div>
            </div>
        </div>
    );
}