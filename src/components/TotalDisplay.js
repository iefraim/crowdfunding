import React from "react"
import { Line } from "rc-progress"
import {useSelector} from "react-redux"

const TotalDisplay=()=>{
    const donations=useSelector((state)=>state.donations)
    const totalDonations=donations.reduce((prev,curr)=>prev+curr.amount,0)
    const goal=10000

    //TODO : test what happens when reach goal. should say something like hurray reached goal, keep thermometer there. 
    
    return (<div><h6>${totalDonations.toLocaleString()} out of ${goal.toLocaleString()} raised!</h6>
    <Line percent={totalDonations/goal*100} strokeWidth="4" strokeColor="#052453" trailColor="#f5f5f5" trailWidth="4"/></div>)
}

export default TotalDisplay