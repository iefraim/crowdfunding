import React from "react"
import { Line } from "rc-progress"
import {useSelector} from "react-redux"
import ProgressBar from "@ramonak/react-progress-bar"

const TotalDisplay=()=>{
    const donations=useSelector((state)=>state.donations)
    const totalDonations=donations.reduce((prev,curr)=>prev+parseInt(curr.amount),0)
    const goal=10000

    //TODO : test what happens when reach goal. should say something like hurray reached goal, keep thermometer there. 
    
    return (<div><h6>${totalDonations.toLocaleString()} out of ${goal.toLocaleString()} raised!</h6>
    <ProgressBar completed={totalDonations/goal*100}/></div>)
}

export default TotalDisplay