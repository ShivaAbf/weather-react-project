import React, { useState } from "react";


export default function Unitconvertion(props){
    let [unit , setUnit] = useState("celsius")
    
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function fahrenheitTemp(){
        return (props.temp * 9/5) + 32
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius"){
    return(
        <span>
               <p>{Math.round(props.temp)}</p>
               <h3 className="unit">°C | <a onClick={showFahrenheit}>°F</a></h3>
               </span>
    )}
    else{
        return(
        <span>
               <p>{Math.round(fahrenheitTemp())}</p>
               <h3 className="unit"><a onClick={showCelsius}>°C |</a> °F</h3>
               </span>
               )
    }
}