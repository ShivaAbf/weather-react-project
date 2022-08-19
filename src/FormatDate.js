import React from "react";

export default function FormatDate(props){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday' , 'Saturday']
    let time = {
        minutes: props.detethings.date.getMinutes(),
        hours : props.detethings.date.getHours()
    }
    if(time.hours< 10){
        time.hours = `0${time.hours}`
    }
    if(time.minutes< 10){
        time.minutes = `0${time.minutes}`
    }

return(
   <div>{days[props.detethings.date.getDay()]} , {time.hours}:{time.minutes}</div>
)
}