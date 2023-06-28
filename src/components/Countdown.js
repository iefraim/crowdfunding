import React from "react";
import CountdownTimer from "react-countdown"
import CountdownCircle from "./CountdownCircle"
import { Circle } from "rc-progress";


// const CountdownDisplay=(props)=>(<div>
//     <CountdownCircle number={props.days} total={3} item="day"/>
//     <CountdownCircle number={props.hours} total={24} item="hour"/>
//     <CountdownCircle number={props.minutes} total={60} item="minute"/>
//     <CountdownCircle number={props.seconds} total={60} item="second"/>
// </div>)
//TODO message before start and after finish
//TODO db startdate and enddate/time

const CountdownDisplay=(props)=>(
    <div className="countdownCircle"><Circle percent={props.total/259200000*100}/>
    <p className="countdownCircle__innerText">
    {props.hours}:{props.minutes}:{props.seconds}</p></div>
)

const Countdown=()=>(<CountdownTimer date={Date.parse("6/28/2023")} renderer={CountdownDisplay}/>)

export default Countdown