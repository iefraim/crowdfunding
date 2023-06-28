import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import {Line} from "rc-progress"
import {NavLink} from "react-router-dom"

const Team=(props)=>{
    const donations=useSelector((state)=>state.donations).filter((i)=>i.team==props.item.id)
    const totalDonations=donations.reduce((prev,curr)=>prev+curr.amount,0)
//TODO  make thicker line. tag on what percentage , outline border 
    return (
     
        
        <li className="col-xs-12 col-sm-6">   
        <NavLink to={`/${props.item.link}`}>
       <span className="col-xs-12 teambox">
        <h5>{props.item.name}</h5>
    <Line percent={totalDonations/props.item.goal*100} strokeWidth="3" strokeColor="#052453" trailColor="#f5f5f5" trailWidth="3"/>
{/*TODO  https://react-spectrum.adobe.com/react-aria/ProgressBar.html*/}
    <p className="teamgoallisting"><strong>${totalDonations.toLocaleString()}</strong><br /> out of ${props.item.goal.toLocaleString()}</p>
    </span>   </NavLink>
    </li>
    
 )
}

export default Team